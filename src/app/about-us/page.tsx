import type { Metadata } from "next";
import Image from "next/image";
import {
  Activity,
  Eye,
  HeartHandshake,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound
} from "lucide-react";
import { AnimatedSection } from "@/components/sections/AnimatedSection";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Healthcare Pro Hospital, our care philosophy, mission, vision, values, and leadership."
};

const aboutImages = [
  {
    src: "/assets/about us/patient1.webp",
    alt: "Specialist maternity care at Healthcare Pro Hospital",
    title: "Specialist-led care"
  },
  {
    src: "/assets/about us/patient2.webp",
    alt: "Nurse guiding a senior patient with compassionate support",
    title: "Compassionate support"
  },
  {
    src: "/assets/about us/patient3.webp",
    alt: "Doctor coordinating patient care through digital systems",
    title: "Connected workflow"
  },
  {
    src: "/assets/about us/patient4.webp",
    alt: "Family-centered care for parents and newborns",
    title: "Family confidence"
  }
];

const values = [
  {
    title: "Quality",
    description: "Evidence-informed care, careful coordination, and consistent service standards.",
    icon: ShieldCheck,
    tone: "text-green-500 bg-green-500/10"
  },
  {
    title: "Integrity",
    description: "Clear guidance, responsible decisions, and transparent communication.",
    icon: Scale,
    tone: "text-cyan-600 bg-cyan-500/10"
  },
  {
    title: "Compassion",
    description: "Human care that respects every patient, family member, and caregiver.",
    icon: HeartHandshake,
    tone: "text-rose-500 bg-rose-500/10"
  },
  {
    title: "Respect",
    description: "A welcoming environment built around dignity, privacy, and inclusion.",
    icon: UsersRound,
    tone: "text-indigo-500 bg-indigo-500/10"
  },
  {
    title: "Innovation",
    description: "Modern systems that make care faster, safer, and easier to access.",
    icon: Sparkles,
    tone: "text-amber-500 bg-amber-500/10"
  }
];

const leadership = [
  {
    title: "Clinical Leadership",
    description: "Experienced specialists guide care standards, patient safety, and multidisciplinary decisions.",
    icon: ShieldCheck
  },
  {
    title: "Patient Experience",
    description: "Service teams keep every journey clear, respectful, and easier for families to follow.",
    icon: HeartHandshake
  },
  {
    title: "Operational Excellence",
    description: "Coordinated hospital operations support reliable appointments, diagnostics, and emergency care.",
    icon: Activity
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white pt-4 sm:pt-5 lg:pt-6">
        <div className="container">
          <div className="relative h-[210px] overflow-hidden rounded-lg border border-slate-100 bg-surface-blue shadow-card sm:h-[320px] lg:h-[440px] 2xl:h-[500px]">
            <Image
              src="/assets/about us/banner.webp"
              alt="Healthcare Pro Hospital campus"
              fill
              priority
              sizes="(min-width: 1440px) 1320px, (min-width: 1024px) 92vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <PageHero
        title="About Healthcare Pro Hospital"
        subtitle="About Healthcare Pro Hospital"
        breadcrumbs={[{ label: "About Us" }]}
      />

      <AnimatedSection className="bg-navy-950 py-12 text-white sm:py-14 lg:py-16">
        <div className="container grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative min-h-[260px] overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-card sm:min-h-[330px]">
            <Image
              src="/assets/about us/patient2.webp"
              alt="Healthcare Pro patient care"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="min-w-0 max-w-3xl">
            <h1 className="text-balance break-words font-heading text-3xl font-black tracking-normal text-white sm:text-4xl lg:text-5xl">
              Who We Are
            </h1>
            <p className="mt-5 max-w-full break-words text-base leading-8 text-white/82 sm:text-lg">
              Healthcare Pro Hospital is built around one clear belief: every patient deserves skilled medical care, calm guidance, and a system that feels easy to trust. Our teams combine specialist consultation, diagnostics, emergency response, and digital patient services so families can move through care with confidence.
            </p>
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {["Specialist care", "Family guidance", "Digital access"].map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/10 p-4">
                  <p className="text-sm font-black uppercase tracking-[0.12em] text-cyan-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white">
        <div className="container">
          <div className="mx-auto min-w-0 max-w-3xl text-center">
            <h2 className="text-balance break-words font-heading text-3xl font-black tracking-normal text-navy-950 sm:text-4xl">
              Transforming Healthcare in Bangladesh
            </h2>
            <p className="mt-4 max-w-full break-words text-base leading-7 text-slate-600">
              Our care model connects clinical excellence with patient-friendly services, helping people access the right support from first consultation to recovery.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutImages.map((image, index) => (
              <article
                key={image.src}
                className={`group relative overflow-hidden rounded-lg bg-navy-950 shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-glow ${
                  index === 1 || index === 3 ? "lg:mt-10" : ""
                }`}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950 via-navy-950/72 to-transparent p-5">
                  <p className="font-heading text-lg font-black text-white">{image.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-surface-soft py-12 sm:py-14 lg:py-16">
        <div className="container grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="min-w-0">
            <h2 className="text-balance break-words font-heading text-3xl font-black tracking-normal text-navy-950 sm:text-4xl">
              Building a Healthier Bangladesh
            </h2>
            <p className="mt-5 max-w-full break-words text-base leading-8 text-slate-700 sm:text-lg">
              We are focused on making dependable healthcare more accessible through specialist departments, coordinated emergency support, modern diagnostics, and respectful communication. Every service is designed to help patients make decisions with clarity and receive care without unnecessary stress.
            </p>
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {["Coordinated care teams", "Modern hospital systems", "Accessible patient services", "Family-first communication"].map((item) => (
                <div key={item} className="rounded-lg border border-slate-100 bg-white p-4 shadow-soft">
                  <p className="font-heading text-sm font-black text-navy-950">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-lg bg-navy-950 shadow-card sm:min-h-[360px]">
            <Image
              src="/assets/about us/banner.webp"
              alt="Healthcare Pro hospital building"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover object-center opacity-[0.88]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/82 via-navy-950/12 to-transparent" />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white">
        <div className="container grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article className="rounded-lg border border-slate-100 bg-white p-7 shadow-card sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600">
              <Eye className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-balance break-words font-heading text-3xl font-black tracking-normal text-navy-950">
              Our Vision
            </h2>
            <p className="mt-4 max-w-full break-words leading-8 text-slate-700">
              To become a trusted healthcare destination where families in Bangladesh can access specialist-led, coordinated, and compassionate care.
            </p>
          </article>
          <article className="rounded-lg border border-slate-100 bg-navy-radial p-7 text-white shadow-card sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-cyan-100">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-balance break-words font-heading text-3xl font-black tracking-normal text-white">
              Our Mission
            </h2>
            <p className="mt-4 max-w-full break-words leading-8 text-white/82">
              To deliver safe, patient-centered medical services through skilled teams, modern systems, and clear guidance at every step.
            </p>
          </article>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-surface-soft py-12 sm:py-14 lg:py-16">
        <div className="container">
          <div className="mx-auto min-w-0 max-w-3xl text-center">
            <h2 className="text-balance break-words font-heading text-3xl font-black tracking-normal text-navy-950 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 max-w-full break-words text-base leading-7 text-slate-600">
              The standards that guide our people, our systems, and every patient interaction.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-lg border border-slate-100 bg-white p-5 text-center shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-lg ${value.tone}`}>
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-black text-navy-950">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-padding bg-white">
        <div className="container grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="min-w-0">
            <h2 className="text-balance break-words font-heading text-3xl font-black tracking-normal text-navy-950 sm:text-4xl">
              Leadership
            </h2>
            <p className="mt-5 max-w-full break-words text-base leading-8 text-slate-700">
              Healthcare Pro is guided by leadership that keeps clinical standards, patient trust, and operational discipline aligned. The focus is simple: better decisions, safer care, and a smoother experience for every family.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {leadership.map((item) => (
              <article key={item.title} className="rounded-lg border border-slate-100 bg-surface-soft p-5 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-cyan-600 shadow-sm">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-black text-navy-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
