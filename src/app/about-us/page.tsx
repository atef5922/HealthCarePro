import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, PlayCircle } from "lucide-react";
import { StatCard } from "@/components/cards/StatCard";
import { AnimatedSection } from "@/components/sections/AnimatedSection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Healthcare Pro Hospital, our mission, leadership, quality standards, and patient care values."
};

const values = [
  "Quality",
  "Integrity",
  "Compassion",
  "Respect",
  "Innovation"
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Healthcare Pro Hospital"
        subtitle="A premium hospital demo built for Bangladesh with modern clinical services, digital patient workflows, and trustworthy brand presentation."
        eyebrow="About Us"
        breadcrumbs={[{ label: "About Us" }]}
      />

      <AnimatedSection className="section-padding bg-white">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Hospital Overview"
              title="Transforming healthcare experiences for patients, doctors, and administrators."
              subtitle="Healthcare Pro Hospital is configured as a client-ready digital front door for hospitals, clinics, diagnostic centers, and healthcare groups across Bangladesh."
            />
            <div className="mt-7 rounded-2xl bg-navy-radial p-7 text-white">
              <p className="leading-8 text-white/82">
                The frontend demonstrates how a real hospital can present departments, doctors, patient services, reports, careers, news, packages, and corporate care through a polished, scalable interface.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <StatCard icon="Stethoscope" value="32+" label="Departments" tone="dark" />
                <StatCard icon="HeartPulse" value="500+" label="Care Team" tone="dark" />
                <StatCard icon="Siren" value="24/7" label="Emergency" tone="dark" />
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
              "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80"
            ].map((src, index) => (
              <div key={src} className={index === 1 ? "relative mt-8 overflow-hidden rounded-2xl shadow-card" : "relative overflow-hidden rounded-2xl shadow-card"}>
                <Image src={src} alt="Healthcare Pro hospital environment" width={520} height={420} className="h-64 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-surface-soft">
        <div className="container grid gap-6 md:grid-cols-3">
          {[
            ["Our Mission", "To provide safe, accessible, and compassionate healthcare with modern technology and clinical excellence."],
            ["Our Vision", "To become a trusted digital-first hospital brand for families, organizations, and communities in Bangladesh."],
            ["Our Promise", "Clear communication, coordinated care, respectful service, and continuous improvement at every touchpoint."]
          ].map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-slate-100 bg-white p-7 shadow-soft">
              <h2 className="font-heading text-2xl font-bold text-navy-900">{title}</h2>
              <p className="mt-4 leading-7 text-slate-700">{text}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white">
        <div className="container grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="relative overflow-hidden rounded-2xl bg-navy-950 shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80"
              alt="Hospital leadership and clinical teams"
              width={1000}
              height={640}
              className="h-[430px] w-full object-cover opacity-72"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500 text-navy-950 shadow-glow">
                <PlayCircle className="h-9 w-9" />
              </div>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Quality & Safety" title="Built around clinical governance and patient confidence." subtitle="The website foregrounds credibility: leadership, safety, values, care standards, and transparent patient guidance." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="rounded-xl border border-slate-100 bg-surface-soft p-5">
                  <CheckCircle2 className="h-6 w-6 text-teal-500" />
                  <h3 className="mt-4 font-heading text-lg font-bold text-slate-950">{value}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">A guiding value reflected in patient care, staff conduct, and service design.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-surface-soft">
        <div className="container">
          <SectionHeading align="center" eyebrow="Leadership" title="Experienced leadership for a growing healthcare organization." />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {["Managing Director", "Chief Medical Officer", "Director of Nursing"].map((role, index) => (
              <article key={role} className="rounded-2xl bg-white p-6 text-center shadow-soft">
                <div className="mx-auto h-28 w-28 overflow-hidden rounded-full bg-surface-blue">
                  <Image
                    src={`https://images.unsplash.com/photo-${index === 0 ? "1622253692010-333f2da6031d" : index === 1 ? "1559839734-2b71ea197ec2" : "1594824476967-48c8b964273f"}?auto=format&fit=crop&w=400&q=80`}
                    alt={role}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-slate-950">{role}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Focused on clinical excellence, patient experience, and sustainable hospital operations.</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
