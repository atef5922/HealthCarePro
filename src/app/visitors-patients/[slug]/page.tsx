import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { FacilityCard } from "@/components/cards/FacilityCard";
import { PackageCard } from "@/components/cards/PackageCard";
import { FeedbackForm } from "@/components/forms/FeedbackForm";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/button";
import { blogs } from "@/data/blogs";
import { facilities } from "@/data/facilities";
import { packages } from "@/data/packages";
import { visitorPages } from "@/data/visitorPages";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return visitorPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = visitorPages.find((item) => item.slug === slug);
  if (!page) return {};
  return { title: page.title, description: page.description };
}

export default async function VisitorSubPage({ params }: PageProps) {
  const { slug } = await params;
  const page = visitorPages.find((item) => item.slug === slug);
  if (!page) notFound();

  return (
    <>
      <PageHero
        title={page.title}
        subtitle={page.description}
        eyebrow="Visitors & Patients"
        breadcrumbs={[{ label: "Visitors & Patients", href: "/visitors-patients" }, { label: page.title }]}
      />
      <section className="section-padding bg-surface-soft">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-2xl bg-white p-6 shadow-soft">
            <h2 className="font-heading text-lg font-bold text-slate-950">Patient Resources</h2>
            <div className="mt-5 grid gap-2">
              {visitorPages.map((item) => (
                <Link key={item.slug} href={`/visitors-patients/${item.slug}`} className={item.slug === page.slug ? "rounded-lg bg-navy-900 px-4 py-3 text-sm font-bold text-white" : "rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-surface-blue"}>
                  {item.title}
                </Link>
              ))}
            </div>
          </aside>
          <div>
            <SectionHeading title={page.title} subtitle={page.description} />
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {page.highlights.map((item) => (
                <div key={item} className="rounded-xl bg-white p-5 shadow-soft">
                  <CheckCircle2 className="h-5 w-5 text-teal-500" />
                  <p className="mt-3 font-heading text-sm font-bold text-slate-950">{item}</p>
                </div>
              ))}
            </div>

            {page.slug === "feedback" ? (
              <div className="mt-8 rounded-2xl bg-white p-6 shadow-soft">
                <FeedbackForm />
              </div>
            ) : null}

            {page.slug === "facilities" || page.slug === "equipments" ? (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {facilities.map((facility) => <FacilityCard key={facility.slug} facility={facility} />)}
              </div>
            ) : null}

            {page.slug === "packages" || page.slug === "health-check" ? (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {packages.map((item) => <PackageCard key={item.slug} item={item} />)}
              </div>
            ) : null}

            {page.slug === "health-tips" ? (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {blogs.slice(0, 4).map((blog) => (
                  <article key={blog.slug} className="rounded-xl bg-white p-6 shadow-soft">
                    <p className="text-sm font-bold text-cyan-600">{blog.category}</p>
                    <h3 className="mt-2 font-heading text-lg font-bold text-slate-950">{blog.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{blog.excerpt}</p>
                  </article>
                ))}
              </div>
            ) : null}

            <div className="mt-8 rounded-2xl bg-navy-radial p-7 text-white">
              <h2 className="font-heading text-2xl font-bold">Need assistance?</h2>
              <p className="mt-3 text-sm leading-6 text-white/76">Talk to our patient support team for appointments, admission, reports, billing, or package guidance.</p>
              <Button asChild variant="accent" className="mt-5">
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
