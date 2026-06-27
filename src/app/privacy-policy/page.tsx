import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Demo privacy policy for Healthcare Pro Hospital website."
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="A demo privacy page prepared for future legal and compliance customization." eyebrow="Policy" breadcrumbs={[{ label: "Privacy Policy" }]} />
      <section className="section-padding bg-white">
        <div className="container max-w-3xl space-y-5 text-lg leading-8 text-slate-700">
          <p>Healthcare Pro Hospital respects patient privacy and protects personal information according to applicable healthcare and data protection requirements.</p>
          <p>This demo frontend does not store real patient information. Forms currently use mock responses and are prepared for secure backend integration.</p>
          <p>Before production launch, this page should be reviewed by the hospital administration, legal advisor, and compliance team.</p>
        </div>
      </section>
    </>
  );
}
