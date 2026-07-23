import { useEffect, useState } from "react";
import { Car, ShoppingCart, IndianRupee, AlertTriangle } from "lucide-react";

import { getDashboardStats } from "../services/dashboardService";

export default function Dashboard() {
  const [stats, setStats] = useState({
    total_vehicles: 0,
    total_purchases: 0,
    total_revenue: 0,
    low_stock: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  const cards = [
    {
      title: "Total Vehicles",
      value: stats.total_vehicles,
      icon: Car,
    },
    {
      title: "Purchases",
      value: stats.total_purchases,
      icon: ShoppingCart,
    },
    {
      title: "Revenue",
      value: `₹ ${stats.total_revenue.toLocaleString()}`,
      icon: IndianRupee,
    },
    {
      title: "Low Stock",
      value: stats.low_stock,
      icon: AlertTriangle,
    },
  ];

  if (loading) {
    return (
      <div className="text-white text-xl">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          Real-time dealership overview
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="bg-slate-900 rounded-xl p-6 border border-slate-800"
            >
              <div className="flex justify-between items-center">

                <div>
                  <p className="text-slate-400">
                    {card.title}
                  </p>

                  <h2 className="text-3xl font-bold text-white mt-3">
                    {card.value}
                  </h2>
                </div>

                <Icon
                  className="text-cyan-400"
                  size={34}
                />
              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}