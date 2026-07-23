import {
  Car,
  ShoppingCart,
  IndianRupee,
  AlertTriangle,
} from "lucide-react";

export default function StatsCards({ stats }) {
  const cards = [
    {
      title: "Vehicles",
      value: stats.total_vehicles,
      icon: Car,
      color: "text-cyan-400",
    },
    {
      title: "Purchases",
      value: stats.total_purchases,
      icon: ShoppingCart,
      color: "text-green-400",
    },
    {
      title: "Revenue",
      value: `₹ ${stats.total_revenue.toLocaleString()}`,
      icon: IndianRupee,
      color: "text-yellow-400",
    },
    {
      title: "Low Stock",
      value: stats.low_stock,
      icon: AlertTriangle,
      color: "text-red-400",
    },
  ];

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 md:p-6">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-lg sm:p-6"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-slate-400">
                  {card.title}
                </p>

                <h2 className={`mt-3 text-3xl sm:text-4xl font-bold ${card.color}`}>
                  {card.value}
                </h2>

              </div>

              <Icon
                size={34}
                className={card.color}
              />

            </div>
          </div>
        );
      })}
    </div>
  );
}