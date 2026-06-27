"use client";

import { cn } from "@/lib/utils";

export function FilterTabs({
  tabs,
  active,
  onChange
}: {
  tabs: string[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar" role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={cn(
            "shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition",
            active === tab
              ? "border-navy-900 bg-navy-900 text-white"
              : "border-slate-200 bg-white text-slate-700 hover:border-cyan-500 hover:text-navy-900"
          )}
          type="button"
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
