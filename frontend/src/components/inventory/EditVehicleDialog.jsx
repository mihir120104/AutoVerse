import { useState } from "react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";

import { toast } from "sonner";
import VehicleForm from "./VehicleForm";
import { updateVehicle } from "../../services/vehicleService";

export default function EditVehicleDialog({
    vehicle,
    onUpdated,
}) {
    const [open, setOpen] = useState(false);

    async function handleSubmit(data) {
        try {

            await updateVehicle(vehicle.id, data);

            // toast.success("Vehicle updated successfully ! ");
            alert("Vehicle Updated Successfully !");
            setOpen(false);

            onUpdated();

        } catch (error) {
            console.error(error);
            toast.error("Failed to update vehicle");
        }
    }

    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}
        >

            <DialogTrigger
                className="rounded bg-yellow-500 px-3 py-2 text-sm font-semibold text-black hover:bg-yellow-400"
            >
                Edit
            </DialogTrigger>

            <DialogContent className="max-w-2xl bg-slate-900 text-white">

                <DialogHeader>

                    <DialogTitle>
                        Edit Vehicle
                    </DialogTitle>

                </DialogHeader>

                <VehicleForm
                    initialValues={vehicle}
                    submitText="Update Vehicle"
                    onSubmit={handleSubmit}
                />

            </DialogContent>

        </Dialog>
    );
}