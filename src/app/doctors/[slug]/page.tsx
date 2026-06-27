import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarCheck, CheckCircle2, Clock3, MapPin } from "lucide-react";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import { doctors } from "@/data/doctors";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);
  if (!doctor) return {};
  return {
    title: doctor.name,
    description: `${doctor.designation}, ${doctor.qualification}. Book appointment at Healthcare Pro Hospital.`
  };
}

export default async function DoctorDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);
  if (!doctor) notFound();
  const related = doctors.filter((item) => item.specialtySlug === doctor.specialtySlug && item.slug !== doctor.slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={doctor.name}
        subtitle={`${doctor.designation}. ${doctor.qualification}. ${doctor.experience}.`}
        eyebrow={doctor.department}
        breadcrumbs={[{ label: "Find Doctors", href: "/find-doctors" }, { label: doctor.name }]}
      />

      <section className="section-padding bg-white">
        <div className="container grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card">
            <div className="relative aspect-[4/4]">
              <Image src={doctor.image} alt={doctor.name} fill sizes="(max-width: 1024px) 100vw, 420px" className="object-cover object-top" />
            </div>
            <div className="p-6">
              <Button asChild variant="accent" className="w-full">
                <Link href={`/appointment?doctor=${doctor.slug}`}>
                  <CalendarCheck className="h-4 w-4" />
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <SectionHeading title="Profile Summary" subtitle="A detailed specialist profile layout ready for real doctor bios, schedules, consultation fees, and chamber information." />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="rounded-xl border border-slate-100 bg-surface-soft p-5">
                <h2 className="font-heading text-lg font-bold text-slate-950">Special Interests</h2>
                <ul className="mt-4 space-y-3">
                  {doctor.interests.map((interest) => (
                    <li key={interest} className="flex gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-500" />
                      {interest}
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-xl border border-slate-100 bg-surface-soft p-5">
                <h2 className="font-heading text-lg font-bold text-slate-950">Qualification</h2>
                <p className="mt-4 text-sm leading-6 text-slate-700">{doctor.qualification}</p>
                <p className="mt-3 text-sm font-bold text-cyan-700">{doctor.experience}</p>
              </article>
            </div>
            <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <h2 className="font-heading text-xl font-bold text-slate-950">Chamber Schedule</h2>
              <div className="mt-5 grid gap-4">
                {doctor.schedule.map((slot) => (
                  <div key={`${slot.day}-${slot.time}`} className="grid gap-3 rounded-xl bg-surface-soft p-4 md:grid-cols-3">
                    <p className="font-heading text-sm font-bold text-navy-900">{slot.day}</p>
                    <p className="flex gap-2 text-sm text-slate-700"><Clock3 className="h-4 w-4 text-cyan-600" />{slot.time}</p>
                    <p className="flex gap-2 text-sm text-slate-700"><MapPin className="h-4 w-4 text-cyan-600" />{slot.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="section-padding bg-surface-soft">
          <div className="container">
            <SectionHeading title="Related Doctors" subtitle={`More consultants from ${doctor.department}.`} />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((item) => <DoctorCard key={item.slug} doctor={item} />)}
            </div>
          </div>
        </section>
      ) : null}
      <CTASection />
    </>
  );
}
