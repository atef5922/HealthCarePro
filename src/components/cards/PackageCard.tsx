import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import type { Package } from "@/types";
import { Button } from "@/components/ui/button";

export function PackageCard({ item }: { item: Package }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-[16/10]">
        <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-slate-950">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
        <p className="mt-4 font-heading text-xl font-bold text-navy-900">{item.price}</p>
        <ul className="mt-4 space-y-2">
          {item.includes.slice(0, 3).map((include) => (
            <li key={include} className="flex gap-2 text-sm text-slate-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
              {include}
            </li>
          ))}
        </ul>
        <Button asChild className="mt-5 w-full" variant="outline">
          <Link href="/appointment">Request Package</Link>
        </Button>
      </div>
    </article>
  );
}
