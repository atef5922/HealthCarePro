import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Demo terms and conditions for Healthcare Pro Hospital website."
};

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Conditions" subtitle="A demo terms page prepared for future hospital-specific customization." eyebrow="Terms" breadcrumbs={[{ label: "Terms & Conditions" }]} />
      <section className="section-padding bg-white">
        <div className="container max-w-3xl space-y-5 text-lg leading-8 text-slate-700">
          <p>Website content is provided for general information and does not replace direct medical advice from qualified healthcare professionals.</p>
          <p>Appointments, report access, and form submissions are demo workflows until connected with the hospital backend systems.</p>
          <p>Production terms should be finalized with hospital management, legal counsel, and IT operations before deployment.</p>
        </div>
      </section>
    </>
  );
}
