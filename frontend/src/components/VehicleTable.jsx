export default function VehicleTable({ vehicles }) {
  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-800">

          <tr>
            <th className="p-4 text-left text-white">Make</th>
            <th className="p-4 text-left text-white">Model</th>
            <th className="p-4 text-left text-white">Category</th>
            <th className="p-4 text-left text-white">Year</th>
            <th className="p-4 text-left text-white">Fuel</th>
            <th className="p-4 text-left text-white">Transmission</th>
            <th className="p-4 text-left text-white">Price</th>
            <th className="p-4 text-left text-white">Stock</th>
          </tr>

        </thead>

        <tbody>

          {vehicles.map((vehicle) => (

            <tr
              key={vehicle.id}
              className="border-t border-slate-800 hover:bg-slate-800/40 transition"
            >
              <td className="p-4 text-white">{vehicle.make}</td>

              <td className="p-4 text-white">{vehicle.model}</td>

              <td className="p-4 text-white">{vehicle.category}</td>

              <td className="p-4 text-white">{vehicle.year}</td>

              <td className="p-4 text-white">{vehicle.fuel_type}</td>

              <td className="p-4 text-white">{vehicle.transmission}</td>

              <td className="p-4 text-cyan-400 font-semibold">
                ₹ {vehicle.price.toLocaleString()}
              </td>

              <td
                className={`p-4 font-semibold ${
                  vehicle.quantity <= 5
                    ? "text-red-400"
                    : "text-green-400"
                }`}
              >
                {vehicle.quantity}
              </td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}