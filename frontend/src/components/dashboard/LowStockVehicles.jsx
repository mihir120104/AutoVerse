export default function LowStockVehicles({
  vehicles,
}) {

  const lowStock = vehicles.filter(
    (vehicle) => vehicle.quantity <= 5
  );

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-5 text-xl font-semibold">
        Low Stock Vehicles
      </h2>

      <div className="space-y-4">

        {lowStock.length === 0 ? (

          <p className="text-slate-400">
            No low stock vehicles.
          </p>

        ) : (

          lowStock.map((vehicle) => (

            <div
              key={vehicle.id}
              className="flex items-center justify-between rounded-lg bg-slate-800 p-4"
            >

              <div>

                <div className="font-semibold">

                  {vehicle.make} {vehicle.model}

                </div>

                <div className="text-sm text-slate-400">

                  {vehicle.category}

                </div>

              </div>

              <div className="font-bold text-red-400">

                {vehicle.quantity}

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
}