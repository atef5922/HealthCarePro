import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays } from "lucide-react";
import { BlogCard } from "@/components/cards/BlogCard";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { blogs } from "@/data/blogs";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);
  if (!blog) return {};
  return { title: blog.title, description: blog.excerpt };
}

export default async function BlogDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);
  if (!blog) notFound();

  return (
    <>
      <PageHero title={blog.title} subtitle={blog.excerpt} eyebrow={blog.category} breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: blog.title }]} />
      <article className="section-padding bg-white">
        <div className="container max-w-4xl">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl shadow-card">
            <Image src={blog.image} alt={blog.title} fill sizes="100vw" className="object-cover" />
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm font-bold text-cyan-700"><CalendarDays className="h-4 w-4" />{blog.date}</p>
          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
            {blog.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </article>
      <section className="section-padding bg-surface-soft">
        <div className="container">
          <SectionHeading title="Related Articles" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {blogs.filter((item) => item.slug !== blog.slug).slice(0, 3).map((item) => <BlogCard key={item.slug} item={item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
