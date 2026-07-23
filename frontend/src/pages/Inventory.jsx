import { useEffect, useState } from "react";
import VehicleTable from "../components/VehicleTable";
import { getVehicles } from "../services/vehicleService";

export default function Inventory() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadVehicles();
  }, []);

  async function loadVehicles() {
    try {
      const data = await getVehicles();
      setVehicles(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="text-white text-xl">
        Loading Vehicles...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          Vehicle Inventory
        </h1>

        <p className="text-slate-400 mt-2">
          Manage all dealership vehicles.
        </p>
      </div>

      <VehicleTable vehicles={vehicles} />

    </div>
  );
}