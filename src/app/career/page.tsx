import type { Metadata } from "next";
import Image from "next/image";
import { ResumeForm } from "@/components/forms/ResumeForm";
import { CareerJobs } from "@/components/sections/CareerJobs";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Career",
  description: "Explore healthcare career opportunities and submit your resume to Healthcare Pro Hospital."
};

export default function CareerPage() {
  return (
    <>
      <PageHero
        title={`Careers at ${siteConfig.shortName}`}
        subtitle="Join a growing healthcare organization focused on patient safety, clinical excellence, and respectful teamwork."
        eyebrow="Career"
        breadcrumbs={[{ label: "Career" }]}
      />
      <section className="section-padding bg-white">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Work With Us" title="Build a meaningful healthcare career in a modern hospital environment." subtitle="This career page is ready for real HR workflows, job details, resume submissions, and department filtering." />
            <div className="mt-8 rounded-2xl bg-surface-soft p-6">
              <h2 className="font-heading text-xl font-bold text-slate-950">Message from HR</h2>
              <p className="mt-3 leading-7 text-slate-700">We welcome talented doctors, nurses, technologists, support teams, and patient service professionals who value compassion, discipline, and continuous learning.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-card">
            <Image src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80" alt="Hospital career team" width={1000} height={680} className="h-[430px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-soft">
        <div className="container">
          <SectionHeading eyebrow="Open Positions" title="Apply for a job." subtitle="Filter roles by department and explore realistic job cards with location, type, vacancy, and deadline." />
          <div className="mt-8">
            <CareerJobs />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Resume Submission" title="Send your profile to our HR team." subtitle="This form uses validation and mock submission today, and can later connect with an applicant tracking system." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Clinical training", "Employee engagement", "Safe workplace", "Growth pathways"].map((item) => (
                <div key={item} className="rounded-xl bg-surface-soft p-5 font-heading text-sm font-bold text-navy-900">{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
            <ResumeForm />
          </div>
        </div>
      </section>
    </>
  );
}
