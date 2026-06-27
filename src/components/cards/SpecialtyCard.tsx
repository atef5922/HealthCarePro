import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Specialty } from "@/types";
import { renderIcon } from "@/lib/icons";

export function SpecialtyCard({ specialty }: { specialty: Specialty }) {
  return (
    <Link
      href={`/specialities/${specialty.slug}`}
      className="group block rounded-xl border border-slate-100 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-card"
      >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-blue text-cyan-600 transition group-hover:bg-cyan-500 group-hover:text-white">
        {renderIcon(specialty.icon, "h-6 w-6")}
      </div>
      <h3 className="mt-5 font-heading text-base font-bold text-slate-950">{specialty.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{specialty.description}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-navy-900">
        Learn More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
