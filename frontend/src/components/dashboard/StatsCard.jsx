import { ArrowUpRight } from "lucide-react";

export default function StatsCard({
  title,
  value,
  icon: Icon,
  color = "bg-cyan-500",
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:scale-[1.02] hover:border-cyan-500">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>

        </div>

        <div
          className={`rounded-xl p-3 ${color}`}
        >
          <Icon size={24} />
        </div>

      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-green-400">

        <ArrowUpRight size={16} />

        Updated just now

      </div>

    </div>
  );
}