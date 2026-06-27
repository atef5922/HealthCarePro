import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { Facility } from "@/types";
import { renderIcon } from "@/lib/icons";

export function FacilityCard({ facility }: { facility: Facility }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-soft">
      <div className="relative aspect-[16/10]">
        <Image src={facility.image} alt={facility.title} fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-blue text-cyan-600">
            {renderIcon(facility.icon, "h-5 w-5")}
          </span>
          <h3 className="font-heading text-lg font-bold text-slate-950">{facility.title}</h3>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-600">{facility.excerpt}</p>
        <ul className="mt-4 space-y-2">
          {facility.features.map((feature) => (
            <li key={feature} className="flex gap-2 text-sm text-slate-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
