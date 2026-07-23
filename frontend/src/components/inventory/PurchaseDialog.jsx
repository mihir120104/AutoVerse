import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import axios from "axios";

export default function PurchaseDialog({
  vehicle,
  onPurchased,
}) {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  async function handlePurchase() {
    try {
      await axios.post(
        "http://127.0.0.1:8000/api/purchases",
        {
          vehicle_id: vehicle.id,
          quantity,
        }
      );

      alert("Vehicle Purchased Successfully!");

      setOpen(false);

      onPurchased?.();

    } catch (error) {
      console.error(error);

      alert("❌ Purchase Failed");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <DialogTrigger
        disabled={vehicle.quantity === 0}
        className={`rounded px-3 py-2 text-sm font-semibold ${vehicle.quantity === 0
          ? "bg-gray-500 cursor-not-allowed text-white"
          : "bg-green-600 hover:bg-green-500 text-white"
          }`}
      >
        Purchase
      </DialogTrigger>

      <DialogContent className="bg-slate-900 text-white">

        <DialogHeader>
          <DialogTitle>
            Purchase Vehicle
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">

          <p>
            <strong>{vehicle.make}</strong> {vehicle.model}
          </p>

          <p>
            Available Stock : {vehicle.quantity}
          </p>

          <input
            type="number"
            min={1}
            max={vehicle.quantity}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full rounded border border-slate-700 bg-slate-800 px-3 py-2"
          />

          <button
            onClick={handlePurchase}
            className="w-full rounded bg-green-600 py-3 hover:bg-green-500"
          >
            Confirm Purchase
          </button>

        </div>

      </DialogContent>

    </Dialog>
  );
}