import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section-padding bg-surface-soft">
      <div className="container max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-600">404</span>
        <h1 className="mt-4 font-heading text-4xl font-bold text-slate-950">Page not found</h1>
        <p className="mt-4 text-slate-700">
          The page may have moved, but our main patient services are available from the homepage.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </section>
  );
}
