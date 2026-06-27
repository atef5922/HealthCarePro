import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { StoryCard } from "@/components/cards/StoryCard";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { patientStories } from "@/data/patientStories";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return patientStories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = patientStories.find((item) => item.slug === slug);
  if (!story) return {};
  return { title: story.title, description: story.excerpt };
}

export default async function PatientStoryDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const story = patientStories.find((item) => item.slug === slug);
  if (!story) notFound();

  return (
    <>
      <PageHero title={story.title} subtitle={story.excerpt} eyebrow={story.patient} breadcrumbs={[{ label: "Patient Stories", href: "/patient-stories" }, { label: story.title }]} />
      <article className="section-padding bg-white">
        <div className="container max-w-4xl">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl shadow-card">
            <Image src={story.image} alt={story.title} fill sizes="100vw" className="object-cover" />
          </div>
          <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
            {story.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </article>
      <section className="section-padding bg-surface-soft">
        <div className="container">
          <SectionHeading title="More Patient Stories" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {patientStories.filter((item) => item.slug !== story.slug).map((item) => <StoryCard key={item.slug} story={item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
