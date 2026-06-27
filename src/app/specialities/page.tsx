import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SpecialitiesBrowser } from "@/components/sections/SpecialitiesBrowser";

export const metadata: Metadata = {
  title: "Specialities",
  description: "Explore all specialty departments and services at Healthcare Pro Hospital."
};

export default function SpecialitiesPage() {
  return (
    <>
      <PageHero
        title="Specialities"
        subtitle="A complete department directory for hospital clients, including medicine, surgery, emergency, mother and child care, diagnostics, and wellness."
        eyebrow="Departments"
        breadcrumbs={[{ label: "Specialities" }]}
      />
      <section className="section-padding bg-surface-soft">
        <div className="container">
          <SectionHeading title="Browse all clinical departments." subtitle="Search and filter the full department list from the shared data layer." />
          <div className="mt-8">
            <SpecialitiesBrowser />
          </div>
        </div>
      </section>
    </>
  );
}
