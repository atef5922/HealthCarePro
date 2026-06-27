import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="mt-4 font-heading text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-base leading-7 text-slate-700 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
