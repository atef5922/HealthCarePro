"use client";

import * as React from "react";
import { SpecialtyCard } from "@/components/cards/SpecialtyCard";
import { EmptyState } from "@/components/sections/EmptyState";
import { FilterTabs } from "@/components/sections/FilterTabs";
import { SearchInput } from "@/components/sections/SearchInput";
import { specialities } from "@/data/specialities";

export function SpecialitiesBrowser({ limit }: { limit?: number }) {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("All");
  const categories = ["All", ...Array.from(new Set(specialities.map((item) => item.category)))];
  const source = limit ? specialities.slice(0, limit) : specialities;
  const filtered = source.filter((item) => {
    const matchesQuery = `${item.title} ${item.description}`.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <SearchInput value={query} onChange={setQuery} placeholder="Search departments and services" />
        <FilterTabs tabs={categories} active={category} onChange={setCategory} />
      </div>
      {filtered.length ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((specialty) => (
            <SpecialtyCard key={specialty.slug} specialty={specialty} />
          ))}
        </div>
      ) : (
        <div className="mt-8">
          <EmptyState title="No departments found" description="Try a different search term or category." />
        </div>
      )}
    </div>
  );
}
