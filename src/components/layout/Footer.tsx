import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Youtube } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/config/site";
import { mainNavigation, specialityNav, visitorLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-navy-radial text-white">
      <div className="container grid gap-10 py-14 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1.2fr]">
        <div>
          <Logo dark />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">{siteConfig.tagline} We provide accessible, coordinated, and future-ready healthcare experiences.</p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Linkedin, Instagram, Youtube].map((Icon, index) => (
              <a
                key={index}
                href={Object.values(siteConfig.socialLinks)[index]}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-cyan-500 hover:text-navy-950"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-heading text-base font-bold">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {mainNavigation.slice(0, 7).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-cyan-300">{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-base font-bold">Departments</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {specialityNav.slice(4, 11).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-cyan-300">{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-base font-bold">Patients</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {visitorLinks.slice(0, 7).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-cyan-300">{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-base font-bold">Contact Us</h3>
          <div className="mt-5 space-y-3 text-sm text-white/75">
            <p className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />{siteConfig.address}</p>
            <p className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />{siteConfig.phone}</p>
            <p className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />{siteConfig.email}</p>
          </div>
          <div className="mt-6">
            <h4 className="font-heading text-sm font-bold">Subscribe Newsletter</h4>
            <div className="mt-3 flex gap-2">
              <Input placeholder="Enter your email" className="border-white/20 bg-white/10 text-white placeholder:text-white/60" />
              <Button size="icon" variant="accent" aria-label="Subscribe">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-3 py-5 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-cyan-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cyan-300">Terms & Conditions</Link>
            <Link href="/sitemap.xml" className="hover:text-cyan-300">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
