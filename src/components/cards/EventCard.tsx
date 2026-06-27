import Image from "next/image";
import { CalendarDays } from "lucide-react";
import type { Event } from "@/types";
import { Badge } from "@/components/ui/badge";

export function EventCard({ event }: { event: Event }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-[16/10]">
        <Image src={event.image} alt={event.title} fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover" />
      </div>
      <div className="p-5">
        <Badge>{event.category}</Badge>
        <h3 className="mt-4 font-heading text-lg font-bold text-slate-950">{event.title}</h3>
        <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-cyan-700">
          <CalendarDays className="h-4 w-4" />
          {event.date}
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{event.excerpt}</p>
      </div>
    </article>
  );
}
