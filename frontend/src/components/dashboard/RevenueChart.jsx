import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
 Tooltip,
} from "recharts";

export default function RevenueChart({
  purchases,
  vehicles,
}) {

  const revenueMap = {};

  purchases.forEach((purchase) => {

    const vehicle = vehicles.find(
      (v) => v.id === purchase.vehicle_id
    );

    if (!vehicle) return;

    const day = new Date(
      purchase.purchased_at
    ).toLocaleDateString();

    revenueMap[day] =
      (revenueMap[day] || 0) +
      vehicle.price * purchase.quantity;

  });

  const data = Object.entries(
    revenueMap
  ).map(([date, revenue]) => ({
    date,
    revenue,
  }));

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-5 text-xl font-semibold">

        Revenue Trend

      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={data}>

          <XAxis dataKey="date"/>

          <YAxis/>

          <Tooltip/>

          <Bar
            dataKey="revenue"
            fill="#06B6D4"
            radius={[8,8,0,0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}