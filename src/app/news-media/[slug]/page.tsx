import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays, FileText, ImageIcon } from "lucide-react";
import { EventCard } from "@/components/cards/EventCard";
import { NewsCard } from "@/components/cards/NewsCard";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import { events } from "@/data/events";
import { news } from "@/data/news";

type PageProps = { params: Promise<{ slug: string }> };

const categoryPages = ["news", "gallery", "publications", "events"];

export function generateStaticParams() {
  return [...news.map((item) => ({ slug: item.slug })), ...categoryPages.map((slug) => ({ slug }))];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = news.find((item) => item.slug === slug);
  if (article) return { title: article.title, description: article.excerpt };
  return { title: slug.replace("-", " ") };
}

export default async function NewsMediaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = news.find((item) => item.slug === slug);

  if (categoryPages.includes(slug)) {
    const titleMap: Record<string, string> = {
      news: "Hospital News",
      gallery: "Gallery",
      publications: "Publications",
      events: "Events"
    };
    return (
      <>
        <PageHero
          title={titleMap[slug]}
          subtitle="A polished category page for media assets, public updates, downloadable publications, and community events."
          eyebrow="News & Media"
          breadcrumbs={[{ label: "News & Media", href: "/news-media" }, { label: titleMap[slug] }]}
        />
        <section className="section-padding bg-surface-soft">
          <div className="container">
            {slug === "gallery" ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80",
                  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
                  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
                  "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=900&q=80",
                  "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=900&q=80",
                  "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80"
                ].map((src, index) => (
                  <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
                    <Image src={src} alt={`Hospital gallery ${index + 1}`} fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-navy-900">
                      <ImageIcon className="mr-1 inline h-3 w-3" />
                      Gallery
                    </div>
                  </div>
                ))}
              </div>
            ) : slug === "publications" ? (
              <div className="grid gap-5 md:grid-cols-2">
                {["Annual Quality Report", "Patient Safety Guide", "Corporate Healthcare Brochure", "Health Check Package Guide"].map((item) => (
                  <article key={item} className="rounded-2xl bg-white p-6 shadow-soft">
                    <FileText className="h-7 w-7 text-cyan-600" />
                    <h2 className="mt-4 font-heading text-xl font-bold text-slate-950">{item}</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600">Demo publication card prepared for downloadable PDF integration.</p>
                    <Button className="mt-5" variant="outline">Download PDF</Button>
                  </article>
                ))}
              </div>
            ) : slug === "events" ? (
              <div className="grid gap-6 md:grid-cols-3">
                {events.map((event) => <EventCard key={event.slug} event={event} />)}
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {news.map((item) => <NewsCard key={item.slug} item={item} />)}
              </div>
            )}
          </div>
        </section>
      </>
    );
  }

  if (!article) notFound();

  return (
    <>
      <PageHero
        title={article.title}
        subtitle={article.excerpt}
        eyebrow={article.category}
        breadcrumbs={[{ label: "News & Media", href: "/news-media" }, { label: article.title }]}
      />
      <article className="section-padding bg-white">
        <div className="container max-w-4xl">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl shadow-card">
            <Image src={article.image} alt={article.title} fill sizes="100vw" className="object-cover" />
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm font-bold text-cyan-700">
            <CalendarDays className="h-4 w-4" />
            {article.date}
          </p>
          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
            {article.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </article>
      <section className="section-padding bg-surface-soft">
        <div className="container">
          <SectionHeading title="More Updates" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {news.filter((item) => item.slug !== article.slug).map((item) => <NewsCard key={item.slug} item={item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
