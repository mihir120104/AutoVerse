import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";

import VehicleForm from "./VehicleForm";
import { createVehicle } from "../../services/vehicleService";

export default function AddVehicleDialog({
    onVehicleAdded,
}) {
    const [open, setOpen] = useState(false);

    async function handleSubmit(vehicle) {
        try {
            await createVehicle(vehicle);

            onVehicleAdded();

            setOpen(false);

            // alert("Vehicle Added Successfully");
            console.log("Vehicle Added Successfully");
        } catch (error) {
            console.error(error);
            // alert("Failed to add vehicle");
            console.error("Failed to add vehicle");
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>

            <DialogTrigger
                className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-black hover:bg-cyan-400"
            >
                + Add Vehicle
            </DialogTrigger>

            <DialogContent className="max-w-2xl bg-slate-900 border-slate-800 text-white">

                <DialogHeader>

                    <DialogTitle>
                        Add New Vehicle
                    </DialogTitle>

                </DialogHeader>

                <VehicleForm
                    submitText="Add Vehicle"
                    onSubmit={handleSubmit}
                />

            </DialogContent>

        </Dialog>
    );
}