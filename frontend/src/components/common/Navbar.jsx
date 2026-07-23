import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-8 py-5">

      <div>

        <h2 className="text-2xl font-bold">

          Welcome Back 👋

        </h2>

        <p className="text-slate-400">

          Manage your dealership efficiently.

        </p>

      </div>

      <div className="flex items-center gap-5">

        <div className="flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2">

          <Search size={18} />

          <input
            placeholder="Search..."
            className="bg-transparent outline-none"
          />

        </div>

        <Bell />

      </div>

    </header>
  );
}