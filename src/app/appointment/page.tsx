import type { Metadata } from "next";
import { Ambulance, CalendarCheck, ShieldCheck } from "lucide-react";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Book Appointment",
  description: "Book a doctor appointment at Healthcare Pro Hospital with validated frontend form and mock success response."
};

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        title="Book Appointment"
        subtitle="Request a doctor appointment, choose a department, and share your preferred date. The form is backend-ready and validated today."
        eyebrow="Appointment"
        breadcrumbs={[{ label: "Appointment" }]}
      />
      <section className="section-padding bg-surface-soft">
        <div className="container grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <aside>
            <SectionHeading title="Fast appointment support for families and professionals." subtitle="The coordination desk can help match patients with the right department or consultant." />
            <div className="mt-8 grid gap-4">
              {[
                [CalendarCheck, "Appointment Desk", "Submit a request and receive a confirmation call."],
                [Ambulance, "Emergency Hotline", `For urgent care, call ${siteConfig.emergencyHotline}.`],
                [ShieldCheck, "Prepared for Backend", "Mock success today, API integration tomorrow."]
              ].map(([Icon, title, text]) => (
                <div key={String(title)} className="rounded-xl bg-white p-5 shadow-soft">
                  <Icon className="h-6 w-6 text-cyan-600" />
                  <h2 className="mt-4 font-heading text-base font-bold text-slate-950">{title as string}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text as string}</p>
                </div>
              ))}
            </div>
          </aside>
          <div className="rounded-2xl bg-white p-6 shadow-card md:p-8">
            <h2 className="font-heading text-2xl font-bold text-slate-950">Appointment Form</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">All fields are validated and ready to connect with a real appointment API.</p>
            <div className="mt-7">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
