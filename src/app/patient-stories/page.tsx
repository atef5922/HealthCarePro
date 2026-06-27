import type { Metadata } from "next";
import { StoryCard } from "@/components/cards/StoryCard";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { patientStories } from "@/data/patientStories";

export const metadata: Metadata = {
  title: "Patient Stories",
  description: "Patient recovery and care journey stories from Healthcare Pro Hospital."
};

export default function PatientStoriesPage() {
  return (
    <>
      <PageHero title="Patient Stories" subtitle="Human-centered recovery stories and outcomes from different departments." eyebrow="Stories" breadcrumbs={[{ label: "Patient Stories" }]} />
      <section className="section-padding bg-surface-soft">
        <div className="container">
          <SectionHeading title="Stories of confidence, recovery, and family-centered care." />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {patientStories.map((story) => <StoryCard key={story.slug} story={story} />)}
          </div>
        </div>
      </section>
    </>
  );
}
