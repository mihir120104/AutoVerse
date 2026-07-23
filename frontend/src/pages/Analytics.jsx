import { useEffect, useMemo, useState } from "react";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { getDashboardStats } from "../services/dashboardService";
import { getVehicles } from "../services/vehicleService";
import { getPurchases } from "../services/purchaseService";

const COLORS = [
  "#06B6D4",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
];

export default function Analytics() {

  const [stats, setStats] = useState({});
  const [vehicles, setVehicles] = useState([]);
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {

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
      console.error(error);
    }

  }

  const categoryData = useMemo(() => {

    const map = {};

    vehicles.forEach((v) => {
      map[v.category] = (map[v.category] || 0) + 1;
    });

    return Object.entries(map).map(
      ([name, value]) => ({
        name,
        value,
      })
    );

  }, [vehicles]);

  const fuelData = useMemo(() => {

    const map = {};

    vehicles.forEach((v) => {
      map[v.fuel_type] = (map[v.fuel_type] || 0) + 1;
    });

    return Object.entries(map).map(
      ([name, value]) => ({
        name,
        value,
      })
    );

  }, [vehicles]);

  const lowStock = vehicles.filter(
    (v) => v.quantity <= 5
  );

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Analytics Dashboard
        </h1>

        <p className="text-slate-400">
          Real-time dealership insights.
        </p>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <Card
          title="Vehicles"
          value={stats.total_vehicles}
        />

        <Card
          title="Purchases"
          value={stats.total_purchases}
        />

        <Card
          title="Revenue"
          value={`₹ ${stats.total_revenue?.toLocaleString()}`}
        />

        <Card
          title="Low Stock"
          value={stats.low_stock}
        />

      </div>

      {/* Charts */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <ChartCard title="Vehicle Categories">

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <PieChart >

              <Pie
                data={categoryData}
                dataKey="value"
                outerRadius={window.innerWidth < 640 ? 70 : 110}
                label
              >

                {categoryData.map(
                  (_, index) => (

                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index % COLORS.length
                        ]
                      }
                    />

                  )
                )}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </ChartCard>

        <ChartCard title="Fuel Types">

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <BarChart data={fuelData}>

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="value"
                fill="#06B6D4"
                radius={[6,6,0,0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </ChartCard>

      </div>

      {/* Low Stock */}

     <div className="bg-slate-900 rounded-xl p-4 sm:p-6">

        <h2 className="mb-4 text-xl font-semibold">

          Low Stock Vehicles

        </h2>

        {lowStock.length === 0 ? (

          <p>No low stock vehicles.</p>

        ) : (

          <div className="space-y-3">

            {lowStock.map((vehicle) => (

              <div
                key={vehicle.id}
                className="flex justify-between rounded-lg bg-slate-800 p-4"
              >

                <div>

                  <div className="font-semibold">

                    {vehicle.make} {vehicle.model}

                  </div>

                  <div className="text-sm text-slate-400">

                    {vehicle.category}

                  </div>

                </div>

                <div className="font-bold text-red-400">

                  Stock : {vehicle.quantity}

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  );

}

function Card({
  title,
  value,
}) {

  return (

    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 md:p-6">

      <p className="text-slate-400">

        {title}

      </p>

      <h2 className="mt-3 text-3xl font-bold text-cyan-400">

        {value}

      </h2>

    </div>

  );

}

function ChartCard({
  title,
  children,
}) {

  return (

    <div className="bg-slate-900 rounded-xl p-4 sm:p-6">

      <h2 className="mb-6 text-xl font-semibold">

        {title}

      </h2>

      {children}

    </div>

  );

}