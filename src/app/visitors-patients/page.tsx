import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock3, CreditCard, HelpCircle } from "lucide-react";
import { FacilityCard } from "@/components/cards/FacilityCard";
import { PackageCard } from "@/components/cards/PackageCard";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import { facilities } from "@/data/facilities";
import { faqs } from "@/data/faqs";
import { packages } from "@/data/packages";
import { visitorPages } from "@/data/visitorPages";

export const metadata: Metadata = {
  title: "Visitors & Patients",
  description: "Patient services, facilities, admission guide, room rent, health packages, and visitor information."
};

export default function VisitorsPatientsPage() {
  return (
    <>
      <PageHero
        title="Visitors & Patients"
        subtitle="A patient-friendly resource hub for services, facilities, admission guidance, health packages, room rent, policies, and feedback."
        eyebrow="Patient Guide"
        breadcrumbs={[{ label: "Visitors & Patients" }]}
      />
      <section className="section-padding bg-surface-soft">
        <div className="container">
          <SectionHeading title="Everything patients need before, during, and after a hospital visit." />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visitorPages.map((item) => (
              <Link key={item.slug} href={`/visitors-patients/${item.slug}`} className="group rounded-xl border border-slate-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
                <h2 className="font-heading text-lg font-bold text-slate-950">{item.title}</h2>
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">{item.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy-900">
                  Learn More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container grid gap-6 lg:grid-cols-3">
          {[
            ["Admission Guide", "Bring NID or birth certificate, previous reports, prescription, and appointment reference if available.", HelpCircle],
            ["Visiting Hours", "General visiting hours are designed for family support while protecting patient rest and safety.", Clock3],
            ["Billing Information", "Billing counters support admission deposits, package estimates, discharge bills, and payment guidance.", CreditCard]
          ].map(([title, text, Icon]) => (
            <article key={String(title)} className="rounded-2xl bg-surface-soft p-7">
              <Icon className="h-7 w-7 text-cyan-600" />
              <h2 className="mt-4 font-heading text-xl font-bold text-slate-950">{title as string}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">{text as string}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding bg-surface-soft">
        <div className="container">
          <SectionHeading eyebrow="Facilities" title="Hospital facilities designed for safe, coordinated care." />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {facilities.slice(0, 3).map((facility) => <FacilityCard key={facility.slug} facility={facility} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <SectionHeading eyebrow="Packages" title="Preventive health packages for common needs." />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {packages.slice(0, 4).map((item) => <PackageCard key={item.slug} item={item} />)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-soft">
        <div className="container grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-xl bg-white p-6 shadow-soft">
              <h2 className="font-heading text-lg font-bold text-slate-950">{faq.question}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy-radial py-14 text-white">
        <div className="container flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold">Need help planning a visit?</h2>
            <p className="mt-3 text-white/72">Our coordination team can guide appointments, admission, reports, and packages.</p>
          </div>
          <Button asChild variant="accent">
            <Link href="/contact">Send Feedback or Query</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
