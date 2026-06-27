import type { Metadata } from "next";
import { DoctorsBrowser } from "@/components/sections/DoctorsBrowser";
import { PageHero } from "@/components/sections/PageHero";

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
      <section className="bg-[linear-gradient(180deg,#f6fafe_0%,#eef8ff_48%,#ffffff_100%)] py-8 sm:py-10 lg:py-12">
        <div className="container">
          <DoctorsBrowser />
        </div>
      </section>
    </>
  );
}
