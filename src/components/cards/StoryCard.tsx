import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import type { Story } from "@/types";

export function StoryCard({ story }: { story: Story }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-[16/11]">
        <Image src={story.image} alt={story.title} fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/72 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-bold text-white">
          <PlayCircle className="h-5 w-5 text-cyan-500" />
          Patient Story
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm font-bold text-cyan-600">{story.patient}</p>
        <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-slate-950">{story.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{story.excerpt}</p>
        <Link href={`/patient-stories/${story.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-navy-900">
          Read Story <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
