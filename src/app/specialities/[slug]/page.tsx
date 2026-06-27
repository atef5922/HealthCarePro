import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import { doctors } from "@/data/doctors";
import { specialities } from "@/data/specialities";
import { renderIcon } from "@/lib/icons";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const specialtyImages = [
  "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1200&q=80"
];

export function generateStaticParams() {
  return specialities.map((specialty) => ({ slug: specialty.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const specialty = specialities.find((item) => item.slug === slug);
  if (!specialty) return {};
  return {
    title: specialty.title,
    description: specialty.description
  };
}

export default async function SpecialtyDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const specialty = specialities.find((item) => item.slug === slug);
  if (!specialty) notFound();
  const availableDoctors = doctors.filter((doctor) => doctor.specialtySlug === specialty.slug);

  return (
    <>
      <PageHero
        title={specialty.title}
        subtitle={specialty.description}
        eyebrow={specialty.category}
        breadcrumbs={[{ label: "Specialities", href: "/specialities" }, { label: specialty.title }]}
      />
      <section className="section-padding bg-white">
        <div className="container grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="relative overflow-hidden rounded-2xl shadow-card">
            <Image src={specialtyImages[specialty.slug.length % specialtyImages.length]} alt={specialty.title} width={1000} height={720} className="h-[460px] w-full object-cover" />
            <div className="absolute bottom-5 left-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-navy-950 shadow-glow">
              {renderIcon(specialty.icon, "h-8 w-8")}
            </div>
          </div>
          <div>
            <SectionHeading title="Overview" subtitle="This detail page is designed for SEO-friendly clinical content, service lists, doctor availability, facilities, FAQs, and a clear appointment pathway." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {specialty.services.map((service) => (
                <div key={service} className="rounded-xl border border-slate-100 bg-surface-soft p-5">
                  <CheckCircle2 className="h-5 w-5 text-teal-500" />
                  <p className="mt-3 font-heading text-sm font-bold text-slate-950">{service}</p>
                </div>
              ))}
            </div>
            <Button asChild className="mt-8" variant="accent">
              <Link href={`/appointment?department=${specialty.slug}`}>Book Appointment</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-soft">
        <div className="container grid gap-8 lg:grid-cols-3">
          <article className="rounded-2xl bg-white p-7 shadow-soft">
            <h2 className="font-heading text-xl font-bold text-slate-950">Conditions Treated</h2>
            <ul className="mt-5 space-y-3">
              {specialty.conditions.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-700"><CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-500" />{item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl bg-white p-7 shadow-soft">
            <h2 className="font-heading text-xl font-bold text-slate-950">Facilities</h2>
            <ul className="mt-5 space-y-3">
              {specialty.facilities.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-slate-700"><CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-500" />{item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl bg-white p-7 shadow-soft">
            <h2 className="font-heading text-xl font-bold text-slate-950">FAQ</h2>
            <div className="mt-5 space-y-4">
              {specialty.faq.map((item) => (
                <div key={item.question}>
                  <h3 className="font-heading text-sm font-bold text-slate-950">{item.question}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <SectionHeading title="Available Doctors" subtitle={`Consultants connected with ${specialty.title}.`} />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {(availableDoctors.length ? availableDoctors : doctors.slice(0, 4)).map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
