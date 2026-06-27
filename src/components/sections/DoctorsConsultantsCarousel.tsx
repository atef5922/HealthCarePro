"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { doctors } from "@/data/doctors";

export function DoctorsConsultantsCarousel() {
  return (
    <section className="overflow-hidden bg-white py-10 md:py-14 xl:py-16">
      <div className="container">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <span className="inline-flex rounded-md bg-surface-blue px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-700">
              Our Experts
            </span>
            <h2 className="mt-3 font-heading text-2xl font-bold uppercase leading-tight text-navy-950 sm:text-3xl md:text-4xl">
              Doctors and Consultants
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="doctors-prev flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-navy-900 shadow-sm transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-navy-950"
              aria-label="Previous doctor"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="doctors-next flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-navy-900 shadow-sm transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-navy-950"
              aria-label="Next doctor"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <Link
              href="/find-doctors"
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
          speed={900}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          navigation={{ nextEl: ".doctors-next", prevEl: ".doctors-prev" }}
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
          {doctors.map((doctor) => (
            <SwiperSlide key={doctor.slug} className="!h-auto py-1">
              <motion.article
                className="group relative h-full overflow-hidden rounded-lg border border-slate-100 bg-white shadow-card transition duration-500 ease-out hover:shadow-glow"
                whileHover={{ y: -8, scale: 1.01 }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <div className="relative min-h-[300px] bg-gradient-to-br from-surface-blue to-white sm:min-h-[340px] lg:min-h-[380px] 2xl:min-h-[410px]">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-80" />
                  <Link
                    href={`/doctors/${doctor.slug}`}
                    className="absolute bottom-5 left-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-white/90 px-4 text-sm font-black text-navy-950 shadow-card backdrop-blur transition hover:bg-cyan-500 hover:text-navy-950"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="bg-gradient-to-r from-teal-700 to-navy-900 px-5 py-5 text-center text-white">
                  <h3 className="font-heading text-base font-bold leading-6">{doctor.name}</h3>
                  <p className="mt-1 text-sm font-semibold leading-5 text-cyan-100">{doctor.designation}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-white/60">{doctor.department}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 border-t border-slate-100 bg-white p-4">
                  <Link
                    href={`/appointment?doctor=${doctor.slug}`}
                    className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-cyan-500 px-3 text-xs font-black text-navy-950 transition hover:bg-cyan-600"
                  >
                    <CalendarCheck className="h-4 w-4" />
                    Book
                  </Link>
                  <Link
                    href={`/doctors/${doctor.slug}`}
                    className="inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-200 px-3 text-xs font-black text-navy-950 transition hover:border-cyan-500 hover:bg-surface-blue"
                  >
                    Profile
                  </Link>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
