import { Breadcrumb, type BreadcrumbItem } from "@/components/sections/Breadcrumb";
import { Badge } from "@/components/ui/badge";

type PageHeroProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
  breadcrumbs?: BreadcrumbItem[];
};

export function PageHero({ title, subtitle, eyebrow, breadcrumbs = [] }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-radial py-16 text-white md:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(2,27,58,.96),rgba(6,43,95,.78))]" />
      <div className="container relative z-10">
        {breadcrumbs.length ? <Breadcrumb items={breadcrumbs} /> : null}
        <div className="mt-8 max-w-3xl">
          {eyebrow ? <Badge className="border-white/20 bg-white/10 text-white">{eyebrow}</Badge> : null}
          <h1 className="mt-5 font-heading text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/82 md:text-lg">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
