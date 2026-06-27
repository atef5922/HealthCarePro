import type { Metadata } from "next";
import { Ambulance, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { QueryForm } from "@/components/forms/QueryForm";
import { MapSection } from "@/components/sections/MapSection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Healthcare Pro Hospital for appointments, emergency support, department information, and queries."
};

export default function ContactPage() {
  const contacts = [
    { icon: Phone, title: "Hotline", value: siteConfig.phone },
    { icon: Ambulance, title: "Emergency", value: siteConfig.emergencyHotline },
    { icon: Mail, title: "Email", value: siteConfig.email },
    { icon: Clock3, title: "Opening Hours", value: siteConfig.openingHours },
    { icon: MapPin, title: "Address", value: siteConfig.address }
  ];

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Reach the hospital for appointments, emergency care, department guidance, corporate services, and patient support."
        eyebrow="Contact"
        breadcrumbs={[{ label: "Contact" }]}
      />
      <section className="section-padding bg-surface-soft">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading title="Talk to our patient coordination team." subtitle="Use the validated form for general queries. Emergency concerns should be directed to the hotline immediately." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contacts.map((item) => (
                <div key={item.title} className="rounded-xl bg-white p-5 shadow-soft">
                  <item.icon className="h-6 w-6 text-cyan-600" />
                  <h2 className="mt-4 font-heading text-base font-bold text-slate-950">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-navy-radial p-6 text-white">
              <h2 className="font-heading text-xl font-bold">Department-wise contact</h2>
              <div className="mt-5 grid gap-3 text-sm text-white/76 sm:grid-cols-2">
                {["Emergency Desk", "Appointment Desk", "Corporate Services", "Report Support"].map((item) => (
                  <p key={item} className="rounded-lg bg-white/10 px-4 py-3">{item}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-card">
            <h2 className="font-heading text-2xl font-bold text-slate-950">Send Query</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Our coordination team will respond after mock backend integration.</p>
            <div className="mt-6">
              <QueryForm />
            </div>
          </div>
        </div>
      </section>
      <MapSection />
    </>
  );
}
