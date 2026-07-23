import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#06B6D4",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
];

export default function CategoryChart({
  vehicles,
}) {

  const map = {};

  vehicles.forEach((vehicle) => {

    map[vehicle.category] =
      (map[vehicle.category] || 0) + 1;

  });

  const data = Object.entries(map).map(
    ([name, value]) => ({
      name,
      value,
    })
  );

  return (

    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-5 text-xl font-semibold">

        Vehicle Categories

      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={110}
            label
          >

            {data.map((_, index) => (

              <Cell
                key={index}
                fill={
                  COLORS[
                    index % COLORS.length
                  ]
                }
              />

            ))}

          </Pie>

          <Tooltip/>

        </PieChart>

      </ResponsiveContainer>

    </div>

  );

}