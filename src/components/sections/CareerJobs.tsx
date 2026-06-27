"use client";

import * as React from "react";
import Link from "next/link";
import { BriefcaseBusiness, CalendarDays, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { careers } from "@/data/careers";

export function CareerJobs() {
  const [department, setDepartment] = React.useState("All");
  const departments = ["All", ...Array.from(new Set(careers.map((item) => item.department)))];
  const filtered = careers.filter((career) => department === "All" || career.department === department);

  return (
    <div>
      <div className="mb-6 grid gap-3 rounded-lg border border-slate-100 bg-white p-4 shadow-soft sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <p className="font-heading text-lg font-black text-navy-950">{filtered.length} open positions</p>
          <p className="mt-1 text-sm text-slate-600">Select a department to narrow down current opportunities.</p>
        </div>
        <div className="w-full sm:w-64">
        <Select value={department} onChange={(event) => setDepartment(event.target.value)}>
          {departments.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {filtered.map((career) => (
          <article
            key={career.slug}
            className="group relative overflow-hidden rounded-lg border border-slate-100 bg-white p-6 shadow-soft transition duration-500 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-card"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="inline-flex rounded-full bg-surface-blue px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-cyan-700">
                  {career.department}
                </p>
                <h3 className="mt-4 font-heading text-xl font-black leading-7 text-slate-950">{career.title}</h3>
              </div>
              <span className="w-fit rounded-lg border border-cyan-500/15 bg-cyan-500/10 px-3 py-2 text-xs font-black text-navy-950">
                {career.type}
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">{career.summary}</p>
            <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              <p className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />{career.location}</p>
              <p className="flex gap-2"><BriefcaseBusiness className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />{career.type}</p>
              <p className="flex gap-2"><Users className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />Vacancy: {career.vacancy}</p>
              <p className="flex gap-2"><CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />Deadline: {career.deadline}</p>
            </div>
            <Button asChild variant="outline" className="mt-6 w-full justify-center sm:w-auto">
              <Link href={`/career/${career.slug}`}>View Details</Link>
            </Button>
          </article>
        ))}
      </div>
    </div>
  );
}
