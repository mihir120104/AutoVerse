import EditVehicleDialog from "./inventory/EditVehicleDialog";

export default function VehicleTable({
  vehicles,
  onRefresh,
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800">

      <table className="w-full">

        <thead className="bg-slate-800">

          <tr>

            <th className="p-4 text-left">Make</th>

            <th className="p-4 text-left">Model</th>

            <th className="p-4 text-left">Category</th>

            <th className="p-4 text-left">Year</th>

            <th className="p-4 text-left">Fuel</th>

            <th className="p-4 text-left">Transmission</th>

            <th className="p-4 text-left">Price</th>

            <th className="p-4 text-left">Stock</th>

            <th className="p-4 text-center">Actions</th>

          </tr>

        </thead>

        <tbody>

          {vehicles.map((vehicle) => (

            <tr
              key={vehicle.id}
              className="border-t border-slate-800"
            >

              <td className="p-4">{vehicle.make}</td>

              <td className="p-4">{vehicle.model}</td>

              <td className="p-4">{vehicle.category}</td>

              <td className="p-4">{vehicle.year}</td>

              <td className="p-4">{vehicle.fuel_type}</td>

              <td className="p-4">{vehicle.transmission}</td>

              <td className="p-4 text-cyan-400 font-semibold">
                ₹ {vehicle.price.toLocaleString()}
              </td>

              <td
                className={`p-4 font-bold ${
                  vehicle.quantity <= 5
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              >
                {vehicle.quantity}
              </td>

              <td className="p-4">

                <div className="flex gap-2 justify-center">

                  <EditVehicleDialog
                    vehicle={vehicle}
                    onUpdated={onRefresh}
                  />

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}