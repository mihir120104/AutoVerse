import EditVehicleDialog from "./inventory/EditVehicleDialog";
import PurchaseDialog from "./inventory/PurchaseDialog";

import { deleteVehicle } from "../services/vehicleService";
import { isAdmin } from "../utils/auth";

export default function VehicleTable({
  vehicles,
  onRefresh,
}) {

  async function handleDelete(id) {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this vehicle?"
    );

    if (!confirmDelete) return;

    try {

      await deleteVehicle(id);

      alert("✅ Vehicle Deleted Successfully");

      onRefresh();

    } catch (error) {

      console.error(error);

      alert("❌ Failed to delete vehicle");

    }

  }

  if (vehicles.length === 0) {
    return (
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-10 text-center text-slate-400">
        No vehicles found.
      </div>
    );
  }

  return (
    <>
      {/* ================= Desktop ================= */}

      <div className="hidden lg:block overflow-x-auto rounded-xl border border-slate-800 bg-slate-900">

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
                className="border-t border-slate-800 hover:bg-slate-800/40"
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
                  className={`p-4 font-bold ${vehicle.quantity <= 5
                    ? "text-red-400"
                    : "text-green-400"
                    }`}
                >
                  {vehicle.quantity}
                </td>

                <td className="p-4">

                  <div className="flex flex-wrap justify-center gap-2">

                    <PurchaseDialog
                      vehicle={vehicle}
                      onPurchased={onRefresh}
                    />

                    {isAdmin() && (
                      <>
                        <EditVehicleDialog
                          vehicle={vehicle}
                          onUpdated={onRefresh}
                        />

                        <button
                          onClick={() => handleDelete(vehicle.id)}
                          className="rounded bg-red-500 px-3 py-2 text-sm font-semibold hover:bg-red-400"
                        >
                          Delete
                        </button>
                      </>
                    )}

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* ================= Mobile ================= */}

  

        <div className="space-y-4 lg:hidden">

          {vehicles.map((vehicle) => (

            <div
              key={vehicle.id}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-xl font-bold">
                    {vehicle.make}
                  </h3>

                  <p className="text-slate-400">
                    {vehicle.model}
                  </p>

                </div>

                <div
                  className={`font-bold ${vehicle.quantity <= 5
                    ? "text-red-400"
                    : "text-green-400"
                    }`}
                >
                  Stock : {vehicle.quantity}
                </div>

              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">

                <div>
                  <span className="text-slate-400">Category</span>
                  <p>{vehicle.category}</p>
                </div>

                <div>
                  <span className="text-slate-400">Year</span>
                  <p>{vehicle.year}</p>
                </div>

                <div>
                  <span className="text-slate-400">Fuel</span>
                  <p>{vehicle.fuel_type}</p>
                </div>

                <div>
                  <span className="text-slate-400">Transmission</span>
                  <p>{vehicle.transmission}</p>
                </div>

              </div>

              <div className="mt-4 text-2xl font-bold text-cyan-400">

                ₹ {vehicle.price.toLocaleString()}

              </div>

              <div className="mt-5 flex flex-wrap gap-2">

                <PurchaseDialog
                  vehicle={vehicle}
                  onPurchased={onRefresh}
                />

                {isAdmin() && (
                  <EditVehicleDialog
                    vehicle={vehicle}
                    onUpdated={onRefresh}
                  />
                )}

                {isAdmin() && (
                  <button
                    onClick={() => handleDelete(vehicle.id)}
                    className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-400"
                  >
                    Delete
                  </button>
                )}

              </div>

            </div>

          ))}

        </div>
      </>
      );
}