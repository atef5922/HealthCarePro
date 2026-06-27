import type { Metadata } from "next";
import { BlogCard } from "@/components/cards/BlogCard";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Health Blog",
  description: "Health tips and patient education articles from Healthcare Pro Hospital."
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Health Blog" subtitle="Readable health tips, patient guides, prevention content, and family wellness articles." eyebrow="Blog" breadcrumbs={[{ label: "Blog" }]} />
      <section className="section-padding bg-surface-soft">
        <div className="container">
          <SectionHeading title="Latest health tips." />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {blogs.map((item) => <BlogCard key={item.slug} item={item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
