import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { AnimatedSection } from "@/components/sections/AnimatedSection";
import { CTASection } from "@/components/sections/CTASection";
import { DepartmentsCarousel } from "@/components/sections/DepartmentsCarousel";
import { DoctorsConsultantsCarousel } from "@/components/sections/DoctorsConsultantsCarousel";
import { HomeMotionController } from "@/components/sections/HomeMotionController";
import { HeroSlider } from "@/components/sections/HeroSlider";
import { MapSection } from "@/components/sections/MapSection";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { blogs } from "@/data/blogs";
import { packages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Premium Hospital Website Demo",
  description:
    "A premium, responsive hospital website frontend for Bangladeshi hospitals, diagnostic centers, and healthcare groups."
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: siteConfig.address,
    logo: `${siteConfig.url}${siteConfig.logo}`
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HomeMotionController />
      <HeroSlider />
      <DepartmentsCarousel />
      <DoctorsConsultantsCarousel />

      <AnimatedSection className="section-padding bg-surface-soft">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex rounded-md bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-700 shadow-sm">
                Preventive Care
              </span>
              <h2 className="mt-3 font-heading text-2xl font-bold leading-tight text-navy-950 sm:text-3xl md:text-4xl">
                Health Check Packages
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600 md:text-right">
              Clean, focused checkup plans for families, professionals, children, and senior citizens.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 2xl:gap-6">
            {packages.map((item) => (
              <Link
                key={item.slug}
                href={`/visitors-patients/packages#${item.slug}`}
                data-premium-reveal
                className="group relative min-h-[260px] overflow-hidden rounded-lg bg-navy-950 shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-glow sm:min-h-[285px] lg:min-h-[315px] 2xl:min-h-[340px]"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/10" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="font-heading text-base font-black uppercase leading-5 text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.08em] text-cyan-100">
                    {item.includes[0]}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-black text-cyan-300 transition group-hover:text-white">
                    See Package
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-9 flex justify-center">
            <Button asChild variant="default" className="min-w-44 bg-navy-900 hover:bg-cyan-500 hover:text-navy-950">
              <Link href="/visitors-patients/packages">View All Packages</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <CTASection />

      <AnimatedSection className="section-padding bg-surface-soft">
        <div className="container">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex rounded-md bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-700 shadow-sm">
                Health Blog
              </span>
              <h2 className="mt-3 max-w-2xl font-heading text-2xl font-bold leading-tight text-navy-950 sm:text-3xl md:text-4xl">
                Practical health guidance for patients and families.
              </h2>
            </div>
            <Button asChild variant="outline" className="w-fit">
              <Link href="/blog">Read All Blogs <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.08fr_0.92fr] 2xl:gap-6">
            <Link
              href={`/blog/${blogs[0].slug}`}
              data-premium-reveal
              className="group relative min-h-[330px] overflow-hidden rounded-xl bg-navy-950 shadow-card sm:min-h-[380px] lg:min-h-[420px] 2xl:min-h-[460px]"
            >
              <Image
                src={blogs[0].image}
                alt={blogs[0].title}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-cyan-100">
                  <span>{blogs[0].category}</span>
                  <span className="inline-flex items-center gap-1.5 normal-case tracking-normal text-white/70">
                    <CalendarDays className="h-4 w-4" />
                    {blogs[0].date}
                  </span>
                </div>
                <h3 className="mt-4 max-w-2xl font-heading text-2xl font-bold leading-tight md:text-3xl">{blogs[0].title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/75">{blogs[0].excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-cyan-300 transition group-hover:text-white">
                  Read Article
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            <div className="grid gap-4">
              {blogs.slice(1, 4).map((item) => (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  data-premium-reveal
                  className="group grid gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-soft transition hover:-translate-y-1 hover:shadow-card sm:grid-cols-[150px_1fr]"
                >
                  <div className="relative min-h-44 overflow-hidden rounded-lg bg-surface-blue sm:min-h-36">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 640px) 150px, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500">
                      <span className="text-cyan-700">{item.category}</span>
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-4 w-4" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-navy-950">{item.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{item.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <MapSection />
    </>
  );
}
