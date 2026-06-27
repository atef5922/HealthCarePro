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
      <div className="mb-6 max-w-sm">
        <Select value={department} onChange={(event) => setDepartment(event.target.value)}>
          {departments.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </Select>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {filtered.map((career) => (
          <article key={career.slug} className="rounded-xl border border-slate-100 bg-white p-6 shadow-soft">
            <p className="text-sm font-bold text-cyan-600">{career.department}</p>
            <h3 className="mt-2 font-heading text-xl font-bold text-slate-950">{career.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{career.summary}</p>
            <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              <p className="flex gap-2"><MapPin className="h-4 w-4 text-teal-500" />{career.location}</p>
              <p className="flex gap-2"><BriefcaseBusiness className="h-4 w-4 text-teal-500" />{career.type}</p>
              <p className="flex gap-2"><Users className="h-4 w-4 text-teal-500" />Vacancy: {career.vacancy}</p>
              <p className="flex gap-2"><CalendarDays className="h-4 w-4 text-teal-500" />Deadline: {career.deadline}</p>
            </div>
            <Button asChild variant="outline" className="mt-6">
              <Link href={`/career/${career.slug}`}>View Details</Link>
            </Button>
          </article>
        ))}
      </div>
    </div>
  );
}
