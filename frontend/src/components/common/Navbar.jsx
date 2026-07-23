import {
  Bell,
  Search,
  Menu,
  LogOut,
} from "lucide-react";

import { logout } from "../../utils/logout";

export default function Navbar({
  onMenuClick,
}) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 bg-slate-900 px-4 py-4 lg:px-8">

      <div className="flex items-center gap-3">

        <button
          onClick={onMenuClick}
          className="lg:hidden"
        >
          <Menu size={28} />
        </button>

        <div>

          <h2 className="text-xl font-bold lg:text-2xl">
            Welcome Back 👋
          </h2>

          <p className="text-sm text-slate-400">
            Manage your dealership efficiently.
          </p>

        </div>

      </div>

      <div className="hidden md:flex items-center gap-5">

        <div className="flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2">

          <Search size={18} />

          <input
            placeholder="Search..."
            className="bg-transparent outline-none"
          />

        </div>

        <div className="flex items-center gap-4">

          <Bell size={20} />

          <button
            onClick={logout}
            className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-400"
          >
            <LogOut size={18} />
            <span className="hidden md:inline">
              Logout
            </span>
          </button>

        </div>

      </div>

    </header>
  );
}