import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import type { Article } from "@/types";
import { Badge } from "@/components/ui/badge";

export function NewsCard({ item, hrefBase = "/news-media" }: { item: Article; hrefBase?: string }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-[16/10]">
        <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover" />
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-3">
          <Badge>{item.category}</Badge>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500">
            <CalendarDays className="h-4 w-4" />
            {item.date}
          </span>
        </div>
        <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-slate-950">{item.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{item.excerpt}</p>
        <Link href={`${hrefBase}/${item.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-navy-900">
          Read More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
