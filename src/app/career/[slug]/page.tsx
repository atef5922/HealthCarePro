import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { ResumeForm } from "@/components/forms/ResumeForm";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { careers } from "@/data/careers";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return careers.map((career) => ({ slug: career.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const career = careers.find((item) => item.slug === slug);
  if (!career) return {};
  return { title: career.title, description: career.summary };
}

export default async function CareerDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const career = careers.find((item) => item.slug === slug);
  if (!career) notFound();

  return (
    <>
      <PageHero
        title={career.title}
        subtitle={career.summary}
        eyebrow={career.department}
        breadcrumbs={[{ label: "Career", href: "/career" }, { label: career.title }]}
      />
      <section className="section-padding bg-surface-soft">
        <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl bg-white p-7 shadow-card">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Location", career.location],
                ["Job Type", career.type],
                ["Vacancy", career.vacancy],
                ["Deadline", career.deadline]
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl bg-surface-soft p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-600">{label}</p>
                  <p className="mt-2 font-heading text-lg font-bold text-slate-950">{value}</p>
                </div>
              ))}
            </div>
            <h2 className="mt-8 font-heading text-2xl font-bold text-slate-950">Requirements</h2>
            <ul className="mt-5 space-y-3">
              {career.requirements.map((item) => (
                <li key={item} className="flex gap-2 text-slate-700"><CheckCircle2 className="mt-1 h-4 w-4 text-teal-500" />{item}</li>
              ))}
            </ul>
            <Button asChild className="mt-8" variant="outline">
              <Link href="/career">Back to Careers</Link>
            </Button>
          </article>
          <aside className="rounded-2xl bg-white p-7 shadow-card">
            <h2 className="font-heading text-2xl font-bold text-slate-950">Apply Now</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Submit your resume and our HR team will review your profile.</p>
            <div className="mt-6">
              <ResumeForm />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
