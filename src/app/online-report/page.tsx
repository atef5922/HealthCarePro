import type { Metadata } from "next";
import Image from "next/image";
import { Headphones, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { PortalLoginForm } from "@/components/forms/PortalLoginForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Online Report & Patient Portal",
  description: "Sign in to the patient portal demo to access diagnostic reports and hospital documents."
};

export default function OnlineReportPage() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-navy-950 py-16">
      <Image
        src="https://images.unsplash.com/photo-1581093458791-9d42cc5a4630?auto=format&fit=crop&w=1800&q=85"
        alt="Patient portal medical report background"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.34]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/88 to-navy-950/40" />
      <div className="container relative z-10 grid min-h-[640px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="max-w-xl text-white">
          <Logo dark />
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Online Report</p>
          <h1 className="mt-4 font-heading text-4xl font-bold leading-tight md:text-5xl">Patient Portal</h1>
          <p className="mt-5 text-lg leading-8 text-white/82">
            Sign in to access your reports, appointment records, and future patient documents through a secure, backend-ready portal experience.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <ShieldCheck className="h-7 w-7 text-cyan-300" />
              <p className="mt-3 font-heading text-lg font-bold">Secure by Design</p>
              <p className="mt-2 text-sm leading-6 text-white/72">Ready for real authentication, patient verification, and report APIs.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <Headphones className="h-7 w-7 text-cyan-300" />
              <p className="mt-3 font-heading text-lg font-bold">Need Help?</p>
              <p className="mt-2 text-sm leading-6 text-white/72">Call {siteConfig.emergencyHotline} or visit our help center for portal support.</p>
            </div>
          </div>
        </div>
        <div className="glass-card mx-auto w-full max-w-xl rounded-2xl p-6 md:p-8">
          <div className="text-center">
            <Logo className="justify-center" />
            <h2 className="mt-6 font-heading text-3xl font-bold text-slate-950">Patient Portal</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Sign in to access your reports.</p>
          </div>
          <div className="mt-8">
            <PortalLoginForm />
          </div>
          <div className="mt-5 rounded-xl bg-surface-soft p-4 text-sm leading-6 text-slate-600">
            <strong className="text-navy-900">Need help?</strong> Call our support desk or visit the report counter with your UHID and registered mobile number.
          </div>
        </div>
      </div>
    </section>
  );
}
