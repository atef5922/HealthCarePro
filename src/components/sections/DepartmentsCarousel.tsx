"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { specialities } from "@/data/specialities";
import { renderIcon } from "@/lib/icons";

const departments = specialities.slice(0, 12);

const departmentTones = [
  {
    icon: "text-rose-600",
    iconBg: "from-rose-50 to-white",
    ring: "border-rose-200/80",
    glow: "shadow-[0_18px_36px_rgba(225,29,72,0.24)]",
    accent: "from-rose-500 to-cyan-400"
  },
  {
    icon: "text-violet-600",
    iconBg: "from-violet-50 to-white",
    ring: "border-violet-200/80",
    glow: "shadow-[0_18px_36px_rgba(124,58,237,0.22)]",
    accent: "from-violet-500 to-cyan-400"
  },
  {
    icon: "text-cyan-600",
    iconBg: "from-cyan-50 to-white",
    ring: "border-cyan-200/80",
    glow: "shadow-[0_18px_36px_rgba(8,145,178,0.24)]",
    accent: "from-cyan-500 to-teal-400"
  },
  {
    icon: "text-amber-600",
    iconBg: "from-amber-50 to-white",
    ring: "border-amber-200/80",
    glow: "shadow-[0_18px_36px_rgba(217,119,6,0.24)]",
    accent: "from-amber-400 to-rose-500"
  },
  {
    icon: "text-red-600",
    iconBg: "from-red-50 to-white",
    ring: "border-red-200/80",
    glow: "shadow-[0_18px_36px_rgba(220,38,38,0.22)]",
    accent: "from-red-500 to-cyan-400"
  },
  {
    icon: "text-teal-600",
    iconBg: "from-teal-50 to-white",
    ring: "border-teal-200/80",
    glow: "shadow-[0_18px_36px_rgba(13,148,136,0.24)]",
    accent: "from-teal-500 to-cyan-400"
  }
];

export function DepartmentsCarousel() {
  return (
    <section className="bg-surface-soft py-14 md:py-16">
      <div className="container">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <span className="inline-flex rounded-md bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-700 shadow-sm">
              Clinical Care
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase leading-none text-navy-950 md:text-4xl">
              Departments
            </h2>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              className="departments-prev flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-navy-900 shadow-sm transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-navy-950"
              aria-label="Previous department"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="departments-next flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-navy-900 shadow-sm transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-navy-950"
              aria-label="Next department"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <Link
              href="/specialities"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 text-sm font-black text-navy-950 shadow-glow transition hover:bg-cyan-600"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          loop
          speed={950}
          autoplay={{ delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true }}
          navigation={{ nextEl: ".departments-next", prevEl: ".departments-prev" }}
          grabCursor
          watchSlidesProgress
          spaceBetween={18}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 18 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 22 }
          }}
          className="!overflow-visible"
        >
          {departments.map((department, index) => {
            const tone = departmentTones[index % departmentTones.length];

            return (
              <SwiperSlide key={department.slug} className="!h-auto py-1">
                <motion.article
                  className="group relative flex h-full min-h-[365px] overflow-hidden rounded-lg bg-gradient-to-br from-navy-900 via-navy-800 to-teal-700 p-5 text-white shadow-card transition duration-500 ease-out hover:shadow-glow"
                  whileHover={{ y: -8, scale: 1.01 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(25,189,235,0.28),transparent_30%)] opacity-90" />
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_34%)]" />
                  </div>
                  <div className={`absolute inset-x-5 top-0 h-1 rounded-b-full bg-gradient-to-r ${tone.accent}`} />

                  <div className="relative flex w-full flex-col">
                    <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-lg border bg-gradient-to-br ${tone.iconBg} ${tone.icon} ${tone.ring} ${tone.glow} transition duration-500 group-hover:-translate-y-1 group-hover:scale-110`}>
                      {renderIcon(department.icon, "h-8 w-8")}
                    </div>

                    <h3 className="mt-4 text-center font-heading text-lg font-bold leading-6 text-white">
                      {department.title}
                    </h3>

                    <div className="my-5 h-px w-full bg-white/18" />

                    <p className="line-clamp-6 flex-1 text-sm font-medium leading-7 text-white/88">
                      {department.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between gap-3">
                      <span className="rounded-full border border-white/14 bg-white/10 px-3 py-1 text-xs font-bold text-cyan-100">
                        {department.category}
                      </span>
                      <Link
                        href={`/specialities/${department.slug}`}
                        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 text-sm font-black text-navy-950 transition hover:bg-white"
                      >
                        View details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
