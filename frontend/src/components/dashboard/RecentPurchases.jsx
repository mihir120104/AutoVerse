export default function RecentPurchases({
  purchases,
  vehicles,
}) {

  function getVehicle(id) {
    return vehicles.find(
      (vehicle) => vehicle.id === id
    );
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-5 text-xl font-semibold">
        Recent Purchases
      </h2>

      <div className="space-y-4">

        {purchases.slice(0, 5).map((purchase) => {

          const vehicle = getVehicle(
            purchase.vehicle_id
          );

          return (
            <div
              key={purchase.id}
              className="flex items-center justify-between rounded-lg bg-slate-800 p-4"
            >

              <div>

                <div className="font-semibold">

                  {vehicle
                    ? `${vehicle.make} ${vehicle.model}`
                    : "Unknown Vehicle"}

                </div>

                <div className="text-sm text-slate-400">

                  Qty : {purchase.quantity}

                </div>

              </div>

              <div className="text-sm text-slate-400">

                {new Date(
                  purchase.purchased_at
                ).toLocaleDateString()}

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}