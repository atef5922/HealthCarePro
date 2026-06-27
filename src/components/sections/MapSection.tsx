import { Mail, MapPin, Phone, Clock3 } from "lucide-react";
import { siteConfig } from "@/config/site";

export function MapSection() {
  const contacts = [
    { icon: MapPin, label: "Address", value: siteConfig.address },
    { icon: Phone, label: "Phone", value: siteConfig.phone },
    { icon: Mail, label: "Email", value: siteConfig.email },
    { icon: Clock3, label: "Hours", value: siteConfig.openingHours }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="grid overflow-hidden rounded-xl border border-slate-100 bg-white shadow-card lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-navy-950 p-6 text-white md:p-8 lg:p-10">
            <span className="inline-flex rounded-md border border-cyan-300/24 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-100">
              Location
            </span>
            <h2 className="mt-4 max-w-xl font-heading text-3xl font-bold leading-tight md:text-4xl">
              Visit our main hospital campus.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/74 md:text-base">
              Conveniently located with emergency access, diagnostic services, appointment desks, and patient support counters in one connected place.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {contacts.map((item) => (
                <div key={item.label} className="rounded-lg border border-white/12 bg-white/8 p-4 backdrop-blur">
                  <item.icon className="h-5 w-5 text-cyan-300" />
                  <p className="mt-3 text-xs font-black uppercase tracking-[0.12em] text-white/56">{item.label}</p>
                  <p className="mt-1 text-sm font-semibold leading-6 text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.emergencyHotline}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 text-sm font-black text-navy-950 shadow-glow transition hover:bg-cyan-600"
              >
                <Phone className="h-4 w-4" />
                Call Emergency
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/24 px-5 text-sm font-black text-white transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px] bg-surface-blue">
            <iframe
              title="Healthcare Pro Hospital location map"
              src={siteConfig.mapUrl}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-lg bg-white/94 p-4 shadow-card backdrop-blur">
              <p className="font-heading text-sm font-bold text-navy-950">{siteConfig.shortName} Main Campus</p>
              <p className="mt-1 text-xs font-semibold leading-5 text-slate-600">{siteConfig.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
