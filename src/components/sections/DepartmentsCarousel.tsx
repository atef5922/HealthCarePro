"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { specialities } from "@/data/specialities";
import { renderIcon } from "@/lib/icons";

const departments = specialities.slice(0, 12);

const departmentImages = [
  "/assets/ambulance.webp",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=80"
];

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
    <section className="overflow-hidden bg-surface-soft py-10 md:py-14 xl:py-16">
      <div className="container">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <span className="inline-flex rounded-md bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-700 shadow-sm">
              Clinical Care
            </span>
            <h2 className="mt-3 font-heading text-2xl font-bold uppercase leading-none text-navy-950 sm:text-3xl md:text-4xl">
              Departments
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
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
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 18 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 24 }
          }}
          className="!overflow-hidden px-0.5 pb-2"
        >
          {departments.map((department, index) => {
            const tone = departmentTones[index % departmentTones.length];
            const image = departmentImages[index % departmentImages.length];

            return (
              <SwiperSlide key={department.slug} className="!h-auto py-1">
                <motion.article
                  className="group relative flex h-full min-h-[315px] overflow-hidden rounded-lg bg-gradient-to-br from-navy-900 via-navy-800 to-teal-700 p-5 text-white shadow-card transition duration-500 ease-out hover:shadow-glow sm:min-h-[340px] lg:min-h-[360px] 2xl:min-h-[375px]"
                  whileHover={{ y: -8, scale: 1.01 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                >
                  <Image
                    src={image}
                    alt={`${department.title} department care`}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="scale-110 object-cover opacity-95 blur-[1px] transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:blur-[0.5px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-950/34 via-navy-900/18 to-teal-700/22" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(25,189,235,0.12),transparent_30%)] opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/92 via-navy-950/28 to-white/0" />
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_34%)]" />
                  </div>
                  <div className={`absolute inset-x-5 top-0 h-1 rounded-b-full bg-gradient-to-r ${tone.accent}`} />

                  <div className="relative flex w-full flex-col">
                    <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-lg border bg-gradient-to-br ${tone.iconBg} ${tone.icon} ${tone.ring} ${tone.glow} transition duration-500 group-hover:-translate-y-1 group-hover:scale-110`}>
                      {renderIcon(department.icon, "h-8 w-8")}
                    </div>

                    <h3 className="mt-4 text-center font-heading text-lg font-bold leading-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
                      {department.title}
                    </h3>

                    <div className="my-5 h-px w-full bg-white/20" />

                    <p className="line-clamp-6 flex-1 text-sm font-medium leading-7 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] 2xl:line-clamp-7">
                      {department.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between gap-3">
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-cyan-100">
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
