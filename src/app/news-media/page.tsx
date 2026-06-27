import type { Metadata } from "next";
import { MediaBrowser } from "@/components/sections/MediaBrowser";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";

export const metadata: Metadata = {
  title: "News & Media",
  description: "Hospital news, gallery, publications, events, and media updates."
};

export default function NewsMediaPage() {
  return (
    <>
      <PageHero
        title="News & Media"
        subtitle="Hospital news, diagnostic updates, events, publications, gallery stories, and community health activities."
        eyebrow="Media Center"
        breadcrumbs={[{ label: "News & Media" }]}
      />
      <section className="section-padding bg-surface-soft">
        <div className="container">
          <SectionHeading title="Browse latest hospital updates." subtitle="Filter news, events, and media items using the shared content dataset." />
          <div className="mt-8">
            <MediaBrowser />
          </div>
        </div>
      </section>
    </>
  );
}
