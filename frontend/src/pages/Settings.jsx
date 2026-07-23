import {
  User,
  Mail,
  Shield,
  LogOut,
} from "lucide-react";

import { logout } from "../utils/logout";

export default function Settings() {
  const role = localStorage.getItem("role") || "admin";

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-white">
          Settings
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your account settings.
        </p>

      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

        <h2 className="mb-6 text-2xl font-bold">
          Profile
        </h2>

        <div className="space-y-5">

          <div className="flex items-center gap-4">
            <User className="text-cyan-400" />
            <div>
              <p className="text-slate-400 text-sm">
                Name
              </p>

              <p className="font-semibold">
                AutoVerse Admin
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-cyan-400" />
            <div>
              <p className="text-slate-400 text-sm">
                Email
              </p>

              <p className="font-semibold">
                admin@autoverse.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Shield className="text-cyan-400" />
            <div>
              <p className="text-slate-400 text-sm">
                Role
              </p>

              <p className="font-semibold capitalize">
                {role}
              </p>
            </div>
          </div>

        </div>

      </div>

      <div className="rounded-2xl border border-red-800 bg-slate-900 p-6">

        <h2 className="mb-5 text-xl font-bold text-red-400">
          Account
        </h2>

        <button
          onClick={() => {
            if (
              window.confirm(
                "Are you sure you want to logout?"
              )
            ) {
              logout();
            }
          }}
          className="flex items-center gap-3 rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-400"
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>

    </div>
  );
}