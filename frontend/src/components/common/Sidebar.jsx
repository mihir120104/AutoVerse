import {
  LayoutDashboard,
  Car,
  ShoppingCart,
  BarChart3,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import Logo from "./Logo";

const menus = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Inventory",
    icon: Car,
    path: "/inventory",
  },
  {
    name: "Purchases",
    icon: ShoppingCart,
    path: "/purchases",
  },
  {
    name: "Analytics",
    icon: BarChart3,
    path: "#",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "#",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-slate-800 bg-slate-900 p-6">

      <Logo />

      <nav className="mt-10 space-y-2">

        {menus.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-cyan-500 text-black font-semibold"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />

              {item.name}

            </NavLink>
          );
        })}
      </nav>

    </aside>
  );
}