import { useEffect, useState } from "react";
import VehicleTable from "../components/VehicleTable";
import { getVehicles } from "../services/vehicleService";
import AddVehicleDialog from "../components/inventory/AddVehicleDialog";

export default function Inventory() {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchVehicles();
    }, []);

    async function fetchVehicles() {
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

            <div className="flex items-center justify-between">

                <div>
                    <h1 className="text-4xl font-bold text-white">
                        Vehicle Inventory
                    </h1>

                    <p className="mt-2 text-slate-400">
                        Manage all dealership vehicles.
                    </p>
                </div>

                <AddVehicleDialog
                    onVehicleAdded={fetchVehicles}
                />

            </div>

            <VehicleTable
                vehicles={vehicles}
                onRefresh={fetchVehicles}
            />

        </div>
    );
}