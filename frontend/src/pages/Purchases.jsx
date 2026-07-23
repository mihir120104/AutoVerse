import { useEffect, useState } from "react";

import PurchaseTable from "../components/purchase/PurchaseTable";
import { getPurchases } from "../services/purchaseService";
import { getVehicles } from "../services/vehicleService";

export default function Purchases() {
  const [purchases, setPurchases] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const [purchaseData, vehicleData] = await Promise.all([
        getPurchases(),
        getVehicles(),
      ]);

      setPurchases(purchaseData);
      setVehicles(vehicleData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="text-xl text-white">
        Loading Purchase History...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Purchase History
        </h1>

        <p className="mt-2 text-slate-400">
          View all completed purchases.
        </p>

      </div>

      {purchases.length === 0 ? (

        <div className="rounded-xl border border-dashed border-slate-700 bg-slate-900 p-12 text-center">

          <div className="text-6xl">
            🛒
          </div>

          <h2 className="mt-4 text-2xl font-bold">
            No Purchases Yet
          </h2>

          <p className="mt-2 text-slate-400">
            Purchase history will appear here.
          </p>

        </div>

      ) : (

        <PurchaseTable
          purchases={purchases}
          vehicles={vehicles}
        />

      )}

    </div>
  );
}