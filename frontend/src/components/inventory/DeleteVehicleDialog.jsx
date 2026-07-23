import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "../ui/dialog";

import { deleteVehicle } from "../../services/vehicleService";

export default function DeleteVehicleDialog({
  vehicle,
  onDeleted,
}) {
  const [open, setOpen] = useState(false);

  async function handleDelete() {
    try {
      await deleteVehicle(vehicle.id);

      alert("✅ Vehicle Deleted Successfully!");

      setOpen(false);

      onDeleted();
    } catch (error) {
      console.error(error);

      alert("❌ Failed to delete vehicle.");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <DialogTrigger className="rounded bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-500">
        Delete
      </DialogTrigger>

      <DialogContent className="bg-slate-900 text-white">

        <DialogHeader>
          <DialogTitle>
            Delete Vehicle
          </DialogTitle>
        </DialogHeader>

        <p className="text-slate-300">
          Are you sure you want to delete
          <strong> {vehicle.make} {vehicle.model}</strong>?
        </p>

        <DialogFooter>
          <button
            onClick={() => setOpen(false)}
            className="rounded bg-slate-700 px-4 py-2"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            className="rounded bg-red-600 px-4 py-2 hover:bg-red-500"
          >
            Delete
          </button>
        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}