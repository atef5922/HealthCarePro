import { SearchX } from "lucide-react";

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-cyan-500/40 bg-white p-10 text-center">
      <SearchX className="mx-auto h-10 w-10 text-cyan-600" />
      <h3 className="mt-4 font-heading text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{description}</p>
    </div>
  );
}
