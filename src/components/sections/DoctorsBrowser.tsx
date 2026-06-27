"use client";

import * as React from "react";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { EmptyState } from "@/components/sections/EmptyState";
import { FilterTabs } from "@/components/sections/FilterTabs";
import { SearchInput } from "@/components/sections/SearchInput";
import { Select } from "@/components/ui/select";
import { doctors } from "@/data/doctors";
import { specialities } from "@/data/specialities";

export function DoctorsBrowser({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const [query, setQuery] = React.useState("");
  const [department, setDepartment] = React.useState("All");
  const [availability, setAvailability] = React.useState("All");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 350);
    return () => window.clearTimeout(timeout);
  }, []);

  const departments = ["All", ...specialities.slice(0, featuredOnly ? 6 : specialities.length).map((item) => item.title)];
  const source = featuredOnly ? doctors.slice(0, 4) : doctors;
  const filtered = source.filter((doctor) => {
    const matchesQuery = `${doctor.name} ${doctor.department} ${doctor.designation}`.toLowerCase().includes(query.toLowerCase());
    const matchesDepartment = department === "All" || doctor.department === department;
    const matchesAvailability = availability === "All" || doctor.availableDays.includes(availability);
    return matchesQuery && matchesDepartment && matchesAvailability;
  });

  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-[1fr_220px]">
        <SearchInput value={query} onChange={setQuery} placeholder="Search by doctor name or specialty" />
        <Select value={availability} onChange={(event) => setAvailability(event.target.value)}>
          <option value="All">Any availability</option>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </Select>
      </div>
      <div className="mt-5">
        <FilterTabs tabs={departments} active={department} onChange={setDepartment} />
      </div>
      {loading ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: featuredOnly ? 4 : 8 }).map((_, index) => (
            <div key={index} className="h-96 animate-pulse rounded-xl bg-white shadow-soft" />
          ))}
        </div>
      ) : filtered.length ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((doctor) => (
            <DoctorCard key={doctor.slug} doctor={doctor} />
          ))}
        </div>
      ) : (
        <div className="mt-8">
          <EmptyState title="No doctors found" description="Try another specialty, availability, or search term." />
        </div>
      )}
    </div>
  );
}
