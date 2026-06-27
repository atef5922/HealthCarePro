import { Breadcrumb, type BreadcrumbItem } from "@/components/sections/Breadcrumb";

type PageHeroProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
  breadcrumbs?: BreadcrumbItem[];
};

export function PageHero({ breadcrumbs = [] }: PageHeroProps) {
  if (!breadcrumbs.length) return null;

  return (
    <section className="border-b border-slate-100 bg-gradient-to-b from-white to-surface-soft py-5">
      <div className="container">
        <Breadcrumb items={breadcrumbs} />
      </div>
    </section>
  );
}
