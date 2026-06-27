import { renderIcon } from "@/lib/icons";

export function StatCard({
  icon,
  value,
  label,
  tone = "light"
}: {
  icon: string;
  value: string;
  label: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={
        tone === "dark"
          ? "rounded-xl border border-white/10 bg-white/10 p-5 text-white"
          : "rounded-xl border border-slate-100 bg-white p-5 shadow-soft"
      }
    >
      {renderIcon(icon, tone === "dark" ? "h-7 w-7 text-cyan-500" : "h-7 w-7 text-cyan-600")}
      <p className="mt-4 font-heading text-2xl font-bold">{value}</p>
      <p className={tone === "dark" ? "mt-1 text-sm text-white/72" : "mt-1 text-sm text-slate-600"}>{label}</p>
    </div>
  );
}
