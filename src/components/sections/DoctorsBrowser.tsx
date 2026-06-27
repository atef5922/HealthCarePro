"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw, SlidersHorizontal, Stethoscope, UsersRound } from "lucide-react";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { EmptyState } from "@/components/sections/EmptyState";
import { FilterTabs } from "@/components/sections/FilterTabs";
import { SearchInput } from "@/components/sections/SearchInput";
import { Button } from "@/components/ui/button";
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
  const departmentCount = new Set(source.map((doctor) => doctor.department)).size;
  const filtered = source.filter((doctor) => {
    const matchesQuery = `${doctor.name} ${doctor.department} ${doctor.designation}`.toLowerCase().includes(query.toLowerCase());
    const matchesDepartment = department === "All" || doctor.department === department;
    const matchesAvailability = availability === "All" || doctor.availableDays.includes(availability);
    return matchesQuery && matchesDepartment && matchesAvailability;
  });
  const activeFilterCount = Number(Boolean(query)) + Number(department !== "All") + Number(availability !== "All");
  const hasFilters = activeFilterCount > 0;

  const resetFilters = () => {
    setQuery("");
    setDepartment("All");
    setAvailability("All");
  };

  const stats = [
    { label: "Specialists", value: source.length, icon: UsersRound },
    { label: "Departments", value: departmentCount, icon: Stethoscope },
    { label: "Active Filters", value: activeFilterCount, icon: SlidersHorizontal }
  ];

  return (
    <div className="overflow-hidden rounded-lg border border-slate-100 bg-white shadow-card">
      <div className="grid grid-cols-1 gap-5 border-b border-slate-100 bg-[linear-gradient(135deg,#021b3a_0%,#062b5f_55%,#0f9f90_100%)] p-5 text-white sm:p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
        <div className="min-w-0">
          <span className="inline-flex rounded-md border border-cyan-300/25 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-100">
            Doctor Directory
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-black tracking-normal text-white sm:text-4xl">
            Find Doctors
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">
            Coordinated specialist care, clear schedules, and trusted appointment access across priority departments.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-white/12 bg-white/10 p-4 backdrop-blur">
              <div className="flex items-center justify-between gap-3">
                <stat.icon className="h-5 w-5 text-cyan-100" />
                <span className="font-heading text-2xl font-black text-white">{stat.value}</span>
              </div>
              <p className="mt-3 text-xs font-black uppercase tracking-[0.12em] text-cyan-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 sm:p-5 lg:p-6">
        <div className="rounded-lg border border-slate-100 bg-surface-soft p-4 shadow-soft">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_220px_auto]">
            <SearchInput value={query} onChange={setQuery} placeholder="Search by doctor name or specialty" />
            <Select value={availability} onChange={(event) => setAvailability(event.target.value)}>
              <option value="All">Any availability</option>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <option key={day} value={day}>{day}</option>
              ))}
            </Select>
            <Button
              type="button"
              variant="outline"
              className="min-h-12 justify-center"
              onClick={resetFilters}
              disabled={!hasFilters}
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </Button>
          </div>
          <div className="mt-5 rounded-lg border border-white bg-white/80 p-3">
            <FilterTabs tabs={departments} active={department} onChange={setDepartment} />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-heading text-lg font-black text-navy-950">
            {loading ? "Loading doctors..." : `${filtered.length} ${filtered.length === 1 ? "doctor" : "doctors"} found`}
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.1em] text-slate-600">
            <span className="rounded-full bg-surface-blue px-3 py-1.5 text-navy-900">{department === "All" ? "All departments" : department}</span>
            <span className="rounded-full bg-cyan-500/10 px-3 py-1.5 text-cyan-700">{availability === "All" ? "Any day" : availability}</span>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-6 px-4 pb-6 sm:grid-cols-2 sm:px-5 lg:grid-cols-4 lg:px-6">
          {Array.from({ length: featuredOnly ? 4 : 8 }).map((_, index) => (
            <div key={index} className="h-[440px] animate-pulse rounded-lg bg-surface-soft shadow-soft" />
          ))}
        </div>
      ) : filtered.length ? (
        <motion.div layout className="grid grid-cols-1 gap-6 px-4 pb-6 sm:grid-cols-2 sm:px-5 lg:grid-cols-4 lg:px-6">
          <AnimatePresence initial={false} mode="popLayout">
            {filtered.map((doctor, index) => (
              <motion.div
                key={doctor.slug}
                layout
                exit={{ opacity: 0, y: 14, scale: 0.98 }}
                transition={{ duration: 0.28, delay: Math.min(index * 0.035, 0.18), ease: [0.22, 1, 0.36, 1] }}
              >
                <DoctorCard doctor={doctor} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="px-4 pb-6 sm:px-5 lg:px-6">
          <EmptyState title="No doctors found" description="Try another specialty, availability, or search term." />
        </div>
      )}
    </div>
  );
}
