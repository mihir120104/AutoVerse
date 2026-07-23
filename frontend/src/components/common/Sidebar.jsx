import {
  LayoutDashboard,
  Car,
  ShoppingCart,
  BarChart3,
  Settings,
  X,
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
    path: "/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  }
];

export default function Sidebar({
  open,
  setOpen,
}) {
  return (
    <aside className="flex h-full w-72 flex-col border-r border-slate-800 bg-slate-900 p-6">
      <div className="mb-6 flex items-center justify-between lg:block">

        <Logo />

        <button
          className="lg:hidden"
          onClick={() => setOpen(false)}
        >
          <X />
        </button>

      </div>

      <nav className="space-y-2">

        {menus.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${isActive
                  ? "bg-cyan-500 font-semibold text-black"
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