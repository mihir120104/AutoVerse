export default function PurchaseTable({
  purchases,
  vehicles,
}) {
  function getVehicle(vehicleId) {
    return vehicles.find(
      (vehicle) => vehicle.id === vehicleId
    );
  }

  return (
    <>
      {/* ================= Desktop ================= */}

      <div className="hidden lg:block overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">

        <table className="w-full">

          <thead className="bg-slate-800">

            <tr>

              <th className="p-4 text-left">Purchase</th>
              <th className="p-4 text-left">Vehicle</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Quantity</th>
              <th className="p-4 text-left">Purchased</th>

            </tr>

          </thead>

          <tbody>

            {purchases.map((purchase) => {

              const vehicle = getVehicle(
                purchase.vehicle_id
              );

              return (

                <tr
                  key={purchase.id}
                  className="border-t border-slate-800 hover:bg-slate-800/40"
                >

                  <td className="p-4 font-semibold text-cyan-400">
                    #{purchase.id}
                  </td>

                  <td className="p-4">
                    {vehicle ? (
                      <>
                        <div className="font-semibold">
                          {vehicle.make}
                        </div>

                        <div className="text-sm text-slate-400">
                          {vehicle.model}
                        </div>
                      </>
                    ) : (
                      "Unknown Vehicle"
                    )}
                  </td>

                  <td className="p-4">
                    {vehicle?.category ?? "-"}
                  </td>

                  <td className="p-4 text-green-400 font-semibold">
                    {vehicle
                      ? `₹ ${vehicle.price.toLocaleString()}`
                      : "-"}
                  </td>

                  <td className="p-4">
                    {purchase.quantity}
                  </td>

                  <td className="p-4 text-slate-300">
                    {new Date(
                      purchase.purchased_at
                    ).toLocaleString()}
                  </td>

                </tr>

              );
            })}

          </tbody>

        </table>

      </div>

      {/* ================= Mobile ================= */}

      <div className="space-y-4 lg:hidden">

        {purchases.map((purchase) => {

          const vehicle = getVehicle(
            purchase.vehicle_id
          );

          return (

            <div
              key={purchase.id}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5"
            >

              <div className="flex justify-between">

                <div>

                  <h3 className="font-bold text-cyan-400">
                    Purchase #{purchase.id}
                  </h3>

                  <p className="mt-1 text-lg font-semibold">
                    {vehicle?.make} {vehicle?.model}
                  </p>

                </div>

                <span className="rounded bg-green-600 px-3 py-1 text-sm">
                  Qty {purchase.quantity}
                </span>

              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">

                <div>

                  <p className="text-slate-400">
                    Category
                  </p>

                  <p>{vehicle?.category}</p>

                </div>

                <div>

                  <p className="text-slate-400">
                    Price
                  </p>

                  <p className="text-green-400 font-semibold">
                    ₹ {vehicle?.price.toLocaleString()}
                  </p>

                </div>

              </div>

              <div className="mt-4 text-sm text-slate-400">

                Purchased

              </div>

              <div>

                {new Date(
                  purchase.purchased_at
                ).toLocaleString()}

              </div>

            </div>

          );

        })}

      </div>
    </>
  );
}