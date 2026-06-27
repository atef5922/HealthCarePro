import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  UsersRound
} from "lucide-react";
import { ResumeForm } from "@/components/forms/ResumeForm";
import { CareerJobs } from "@/components/sections/CareerJobs";
import { PageHero } from "@/components/sections/PageHero";
import { siteConfig } from "@/config/site";
import { careers } from "@/data/careers";

export const metadata: Metadata = {
  title: "Career",
  description: "Explore healthcare career opportunities and submit your resume to Healthcare Pro Hospital."
};

const careerStats = [
  { label: "Open roles", value: careers.length, icon: BriefcaseBusiness },
  { label: "Care teams", value: 4, icon: UsersRound },
  { label: "Growth paths", value: "24/7", icon: GraduationCap }
];

const cultureItems = [
  { title: "Clinical training", icon: GraduationCap },
  { title: "Employee engagement", icon: HeartHandshake },
  { title: "Safe workplace", icon: ShieldCheck },
  { title: "Growth pathways", icon: Sparkles }
];

export default function CareerPage() {
  return (
    <>
      <PageHero
        title={`Careers at ${siteConfig.shortName}`}
        subtitle="Join a growing healthcare organization focused on patient safety, clinical excellence, and respectful teamwork."
        eyebrow="Career"
        breadcrumbs={[{ label: "Career" }]}
      />

      <section className="bg-white py-8 sm:py-10 lg:py-12">
        <div className="container">
          <div className="grid overflow-hidden rounded-lg border border-slate-100 bg-navy-radial shadow-card lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 text-white sm:p-8 lg:p-10 xl:p-12">
              <span className="inline-flex rounded-md border border-cyan-300/25 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-100">
                Work With Us
              </span>
              <h1 className="mt-5 max-w-3xl text-balance font-heading text-3xl font-black leading-tight tracking-normal text-white sm:text-4xl lg:text-5xl">
                Build a meaningful healthcare career in a modern hospital environment.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/82">
                We welcome talented doctors, nurses, technologists, support teams, and patient service professionals who value compassion, discipline, and continuous learning.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {careerStats.map((item) => (
                  <div key={item.label} className="rounded-lg border border-white/12 bg-white/10 p-4 backdrop-blur">
                    <item.icon className="h-5 w-5 text-cyan-100" />
                    <p className="mt-4 font-heading text-2xl font-black text-white">{item.value}</p>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-cyan-100">{item.label}</p>
                  </div>
                ))}
              </div>

              <a
                href="#open-positions"
                className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 text-sm font-black text-navy-950 shadow-glow transition hover:bg-white"
              >
                View Open Positions
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative min-h-[320px] bg-navy-950 lg:min-h-full">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                alt="Healthcare Pro career team"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/78 via-navy-950/10 to-transparent lg:bg-gradient-to-r lg:from-navy-950/24 lg:to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/18 bg-white/12 p-4 text-white shadow-card backdrop-blur">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-500 text-navy-950">
                    <BadgeCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-heading text-lg font-black">Message from HR</p>
                    <p className="mt-1 text-sm leading-6 text-white/82">
                      Bring your skill, care for people, and grow with teams who do serious work with respect.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="open-positions" className="bg-surface-soft py-12 sm:py-14 lg:py-16">
        <div className="container">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-md bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-700 shadow-sm">
                Open Positions
              </span>
              <h2 className="mt-4 font-heading text-3xl font-black leading-tight text-navy-950 md:text-4xl">
                Apply for a role that matches your care standard.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600">
              Filter roles by department and review vacancy, location, type, and deadline before applying.
            </p>
          </div>
          <CareerJobs />
        </div>
      </section>

      <section className="bg-white py-12 sm:py-14 lg:py-16">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="inline-flex rounded-md bg-surface-blue px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-700">
              Resume Submission
            </span>
            <h2 className="mt-4 font-heading text-3xl font-black leading-tight text-navy-950 md:text-4xl">
              Send your profile to our HR team.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700">
              Submit your profile for open roles. The form is ready for validation today and can later connect with a real applicant tracking workflow.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {cultureItems.map((item) => (
                <div key={item.title} className="rounded-lg border border-slate-100 bg-surface-soft p-5 shadow-soft">
                  <item.icon className="h-6 w-6 text-cyan-600" />
                  <p className="mt-4 font-heading text-sm font-black text-navy-950">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-slate-100 bg-white p-5 shadow-card sm:p-6 lg:p-8">
            <ResumeForm />
          </div>
        </div>
      </section>
    </>
  );
}
