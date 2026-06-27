import type { Metadata } from "next";
import { DoctorsBrowser } from "@/components/sections/DoctorsBrowser";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";

export const metadata: Metadata = {
  title: "Find Doctors",
  description: "Search and filter specialist doctors by name, department, and availability."
};

export default function FindDoctorsPage() {
  return (
    <>
      <PageHero
        title="Find Doctors"
        subtitle="Search consultants by specialty, availability, qualification, and experience. Every profile is connected to appointment booking."
        eyebrow="Doctor Directory"
        breadcrumbs={[{ label: "Find Doctors" }]}
      />
      <section className="section-padding bg-surface-soft">
        <div className="container">
          <SectionHeading title="Choose the right specialist for your care." subtitle="Use the filters below to explore doctors across priority departments." />
          <div className="mt-8">
            <DoctorsBrowser />
          </div>
        </div>
      </section>
    </>
  );
}
