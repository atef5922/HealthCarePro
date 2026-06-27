import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-bold text-navy-900",
        className
      )}
    >
      {children}
    </span>
  );
}
