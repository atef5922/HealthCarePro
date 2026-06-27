import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, GraduationCap } from "lucide-react";
import type { Doctor } from "@/types";
import { Button } from "@/components/ui/button";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card">
      <div className="relative aspect-[4/3] bg-surface-blue">
        <Image src={doctor.image} alt={doctor.name} fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover object-top" />
      </div>
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-600">{doctor.department}</p>
        <h3 className="mt-2 font-heading text-lg font-bold text-slate-950">{doctor.name}</h3>
        <p className="mt-1 text-sm font-semibold text-slate-700">{doctor.designation}</p>
        <div className="mt-4 space-y-2 text-sm text-slate-600">
          <p className="flex gap-2">
            <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
            {doctor.qualification}
          </p>
          <p className="flex gap-2">
            <CalendarCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
            {doctor.experience}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {doctor.availableDays.map((day) => (
            <span key={day} className="rounded-full bg-surface-blue px-2.5 py-1 text-xs font-bold text-navy-900">
              {day}
            </span>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href={`/doctors/${doctor.slug}`}>View Profile</Link>
          </Button>
          <Button asChild variant="accent" size="sm">
            <Link href={`/appointment?doctor=${doctor.slug}`}>Book</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
