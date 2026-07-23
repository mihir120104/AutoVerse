import { Link } from "react-router-dom";

export default function QuickActions() {
  const actions = [
    {
      title: "Add Vehicle",
      path: "/inventory",
      color: "bg-cyan-500",
    },
    {
      title: "View Inventory",
      path: "/inventory",
      color: "bg-blue-500",
    },
    {
      title: "Purchase History",
      path: "/purchases",
      color: "bg-green-500",
    },
    {
      title: "Analytics",
      path: "/analytics",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-xl font-semibold">

        Quick Actions

      </h2>

      <div className="grid gap-4 md:grid-cols-2">

        {actions.map((action) => (

          <Link
            key={action.title}
            to={action.path}
            className={`${action.color} rounded-xl p-4 text-center font-semibold text-white transition hover:opacity-90`}
          >
            {action.title}
          </Link>

        ))}

      </div>

    </div>
  );
}