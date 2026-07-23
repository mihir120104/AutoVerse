import { useEffect, useState } from "react";

import StatsCards from "../components/dashboard/StatsCards";
import RecentPurchases from "../components/dashboard/RecentPurchases";
import LowStockVehicles from "../components/dashboard/LowStockVehicles";
import RevenueChart from "../components/dashboard/RevenueChart";
import CategoryChart from "../components/dashboard/CategoryChart";
import { getDashboardStats } from "../services/dashboardService";
import { getVehicles } from "../services/vehicleService";
import { getPurchases } from "../services/purchaseService";

export default function Dashboard() {
  const [stats, setStats] = useState({
    total_vehicles: 0,
    total_purchases: 0,
    total_revenue: 0,
    low_stock: 0,
  });

  const [vehicles, setVehicles] = useState([]);
  const [purchases, setPurchases] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const [
        dashboard,
        vehicleData,
        purchaseData,
      ] = await Promise.all([
        getDashboardStats(),
        getVehicles(),
        getPurchases(),
      ]);

      setStats(dashboard);
      setVehicles(vehicleData);
      setPurchases(purchaseData);

    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="text-xl font-semibold text-white">
          Loading Dashboard...
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Welcome back! Here's your dealership overview.
        </p>

      </div>

      {/* KPI Cards */}

      <StatsCards stats={stats} />

      {/* Dashboard Widgets */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <RevenueChart
          purchases={purchases}
          vehicles={vehicles}
        />

        <CategoryChart
          vehicles={vehicles}
        />

        <RecentPurchases
          purchases={purchases}
          vehicles={vehicles}
        />

        <LowStockVehicles
          vehicles={vehicles}
        />

      </div>

    </div>
  );
}