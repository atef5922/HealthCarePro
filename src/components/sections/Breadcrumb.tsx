import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-500">
      <Link href="/" className="inline-flex items-center gap-2 transition hover:text-cyan-700">
        <Home className="h-4 w-4" />
        Home
      </Link>
      {items.map((item) => (
        <span key={item.label} className="inline-flex min-w-0 items-center gap-2">
          <ChevronRight className="h-4 w-4 shrink-0 text-slate-300" />
          {item.href ? (
            <Link href={item.href} className="max-w-[14rem] truncate transition hover:text-cyan-700 sm:max-w-[22rem] md:max-w-none">
              {item.label}
            </Link>
          ) : (
            <span className="max-w-[14rem] truncate font-bold text-navy-950 sm:max-w-[22rem] md:max-w-none" aria-current="page">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
