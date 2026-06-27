"use client";

import * as React from "react";
import {
  animate as animateMotion,
  motion,
  useInView,
  useMotionValue,
  useTransform
} from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, PhoneCall } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ambulanceService,
  heroActions,
  heroSlides,
  heroStats,
  welcomeCare,
  type HeroAction
} from "@/data/home";
import { renderIcon } from "@/lib/icons";

const actionToneStyles: Record<
  HeroAction["tone"],
  {
    accent: string;
    icon: string;
    soft: string;
    text: string;
    ring: string;
  }
> = {
  cyan: {
    accent: "bg-cyan-500",
    icon: "bg-cyan-500 text-navy-950",
    soft: "bg-cyan-50",
    text: "text-cyan-700",
    ring: "group-hover:border-cyan-500/50"
  },
  teal: {
    accent: "bg-teal-500",
    icon: "bg-teal-500 text-white",
    soft: "bg-teal-50",
    text: "text-teal-700",
    ring: "group-hover:border-teal-500/50"
  },
  amber: {
    accent: "bg-amber-400",
    icon: "bg-amber-400 text-navy-950",
    soft: "bg-amber-50",
    text: "text-amber-700",
    ring: "group-hover:border-amber-400/70"
  },
  rose: {
    accent: "bg-rose-500",
    icon: "bg-rose-500 text-white",
    soft: "bg-rose-50",
    text: "text-rose-700",
    ring: "group-hover:border-rose-500/50"
  }
};

const statToneStyles = [
  {
    card: "from-rose-50 via-white to-white",
    icon: "bg-rose-500 text-white",
    line: "from-rose-500 to-cyan-500"
  },
  {
    card: "from-teal-50 via-white to-white",
    icon: "bg-teal-500 text-white",
    line: "from-teal-500 to-green-500"
  },
  {
    card: "from-cyan-50 via-white to-white",
    icon: "bg-cyan-500 text-navy-950",
    line: "from-cyan-500 to-navy-700"
  },
  {
    card: "from-amber-50 via-white to-white",
    icon: "bg-amber-400 text-navy-950",
    line: "from-amber-400 to-cyan-500"
  }
];

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function CountUpNumber({ target, delay }: { target: number; delay: number }) {
  const numberRef = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(numberRef, { amount: 0.8, once: false });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest).toLocaleString("en-US"));

  React.useEffect(() => {
    if (!isInView) {
      motionValue.set(0);
      return;
    }

    const controls = animateMotion(motionValue, target, {
      delay,
      duration: target > 100 ? 1.35 : 1.05,
      ease: [0.22, 1, 0.36, 1]
    });

    return () => controls.stop();
  }, [delay, isInView, motionValue, target]);

  return <motion.span ref={numberRef}>{rounded}</motion.span>;
}

function AnimatedStatValue({ value, delay }: { value: string; delay: number }) {
  const parts = React.useMemo(() => value.split(/(\d+)/g).filter(Boolean), [value]);
  const hasDigit = parts.some((part) => /^\d+$/.test(part));

  return (
    <p className="font-heading text-2xl font-bold leading-none text-navy-900 sm:text-[1.7rem]" aria-label={value}>
      <span aria-hidden={hasDigit ? "true" : undefined}>
        {parts.map((part, partIndex) =>
          /^\d+$/.test(part) ? (
            <CountUpNumber key={`${value}-${part}-${partIndex}`} target={Number(part)} delay={delay + partIndex * 0.04} />
          ) : (
            <span key={`${value}-${part}-${partIndex}`}>{part}</span>
          )
        )}
      </span>
    </p>
  );
}

const servicePanelVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.68,
      ease: [0.22, 1, 0.36, 1],
      delay: index * 0.12
    }
  })
};

export function HeroSlider() {
  const rootRef = React.useRef<HTMLElement>(null);

  const animateActiveSlide = React.useCallback((slideElement?: HTMLElement | null) => {
    if (!slideElement || prefersReducedMotion()) return;

    const content = slideElement.querySelectorAll<HTMLElement>("[data-hero-animate]");
    const image = slideElement.querySelector<HTMLElement>("[data-hero-image]");

    gsap.killTweensOf(content);
    gsap.fromTo(
      content,
      { autoAlpha: 0, y: 28 },
      { autoAlpha: 1, y: 0, duration: 0.78, ease: "power3.out", stagger: 0.08 }
    );

    if (image) {
      gsap.killTweensOf(image);
      gsap.fromTo(image, { scale: 1.08 }, { scale: 1, duration: 1.9, ease: "power2.out" });
    }
  }, []);

  React.useEffect(() => {
    if (!rootRef.current || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-action-card]",
        { autoAlpha: 0, y: 34 },
        { autoAlpha: 1, y: 0, duration: 0.72, ease: "power3.out", stagger: 0.08, delay: 0.18 }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden bg-surface-soft">
      <div className="relative">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          loop
          autoplay={{ delay: 6200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".hero-next", prevEl: ".hero-prev" }}
          onSwiper={(swiper) => {
            requestAnimationFrame(() => animateActiveSlide(swiper.slides[swiper.activeIndex]));
          }}
          onSlideChangeTransitionStart={(swiper) => animateActiveSlide(swiper.slides[swiper.activeIndex])}
          className="h-[500px] sm:h-[580px] lg:h-[620px] xl:h-[660px] 2xl:h-[680px]"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={slide.title}>
              <div className="relative h-full overflow-hidden">
                <Image
                  data-hero-image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover object-[68%_center] sm:object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/30 md:via-navy-950/70 md:to-navy-950/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

                <div className="container relative z-10 flex h-full items-center pb-24 pt-8 sm:pb-32 lg:pb-40">
                  <div className="w-[calc(100vw_-_2rem)] min-w-0 max-w-[42rem] text-white sm:w-full">
                    <div
                      data-hero-animate
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-cyan-100 backdrop-blur"
                    >
                      <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_16px_rgba(122,201,67,0.85)]" />
                      {slide.eyebrow}
                    </div>

                    <h1
                      data-hero-animate
                      className="mt-5 max-w-[42rem] break-words font-heading text-[1.78rem] font-bold leading-tight text-white sm:text-4xl md:text-5xl xl:text-[3.55rem]"
                    >
                      {slide.title}
                    </h1>

                    <div data-hero-animate className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Link
                        href={slide.primaryAction.href}
                        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-black text-navy-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 sm:min-h-12 sm:w-auto"
                      >
                        {slide.primaryAction.href.startsWith("tel:") ? <PhoneCall className="h-4 w-4" /> : null}
                        {slide.primaryAction.label}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href={slide.secondaryAction.href}
                        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:min-h-12 sm:w-auto"
                      >
                        {slide.secondaryAction.label}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>

                    <div data-hero-animate className="mt-8 hidden max-w-2xl grid-cols-3 gap-5 md:grid">
                      {slide.highlights.map((highlight) => (
                        <div key={highlight} className="border-l border-cyan-300/60 pl-4">
                          <p className="text-sm font-bold leading-6 text-white">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="hero-prev absolute right-[4.75rem] top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white shadow-card backdrop-blur transition hover:bg-cyan-500 hover:text-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 md:flex"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          className="hero-next absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white shadow-card backdrop-blur transition hover:bg-cyan-500 hover:text-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 md:flex"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="container relative z-20 -mt-12 pb-8 sm:-mt-18 lg:-mt-24">
        <div className="mx-auto grid w-[calc(100vw_-_2rem)] gap-4 sm:w-full sm:grid-cols-2 xl:grid-cols-4">
          {heroActions.map((action) => {
            const tone = actionToneStyles[action.tone];

            return (
              <motion.div
                key={action.title}
                data-action-card
                className="group"
                whileHover={{ y: -8, scale: 1.012 }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <Link
                  href={action.href}
                  className={`relative flex min-h-[158px] overflow-hidden rounded-xl border border-slate-100 bg-white p-5 shadow-card transition duration-300 hover:shadow-glow sm:min-h-[168px] lg:p-6 xl:min-h-[178px] ${tone.ring}`}
                >
                  <span className={`absolute inset-x-0 top-0 h-1 ${tone.accent}`} />
                  <span className="flex min-w-0 w-full flex-col">
                    <span className="flex items-start justify-between gap-4">
                      <span className="min-w-0">
                        <span className={`text-xs font-black uppercase tracking-[0.14em] ${tone.text}`}>{action.note}</span>
                        <span className="mt-2 block break-words font-heading text-lg font-bold leading-6 text-navy-950">
                          {action.title}
                        </span>
                      </span>
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg shadow-sm transition duration-300 group-hover:scale-105 ${tone.icon}`}
                      >
                        {renderIcon(action.icon, "h-6 w-6")}
                      </span>
                    </span>

                    <span className="mt-4 block flex-1 break-words text-sm leading-6 text-slate-600">{action.description}</span>
                    <span className="mt-5 flex items-center justify-between gap-3">
                      <span className={`rounded-full px-3 py-1 text-xs font-bold ${tone.soft} ${tone.text}`}>{action.meta}</span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-white transition duration-300 group-hover:translate-x-1 group-hover:bg-cyan-500 group-hover:text-navy-950">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </span>
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mx-auto mt-4 grid w-[calc(100vw_-_2rem)] gap-4 rounded-xl border border-slate-100 bg-white p-3 shadow-soft sm:w-full sm:grid-cols-2 xl:grid-cols-4">
          {heroStats.map((stat, index) => {
            const tone = statToneStyles[index % statToneStyles.length];

            return (
              <motion.div
                key={stat.label}
                className={`relative overflow-hidden rounded-lg border border-slate-100 bg-gradient-to-br ${tone.card} px-5 py-5 shadow-[0_10px_24px_rgba(2,27,58,0.06)]`}
                initial={{ opacity: 0, y: 28, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: false, amount: 0.45 }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 24,
                  delay: index * 0.08
                }}
              >
                <span className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${tone.line}`} />
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <AnimatedStatValue value={stat.value} delay={index * 0.09} />
                    <p className="mt-2 text-xs font-black uppercase tracking-[0.08em] text-slate-500">{stat.label}</p>
                  </div>
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg shadow-sm ${tone.icon}`}>
                    {renderIcon(stat.icon, "h-5 w-5")}
                  </span>
                </div>
                <p className="mt-4 text-xs font-semibold leading-5 text-slate-600">{stat.detail}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mx-auto mt-6 grid w-[calc(100vw_-_2rem)] gap-6 sm:w-full lg:grid-cols-[1.25fr_0.75fr]">
          <motion.article
            className="relative h-full overflow-hidden rounded-xl bg-navy-900 p-6 text-white shadow-card md:p-8"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={servicePanelVariants}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(25,189,235,0.25),transparent_30%),linear-gradient(135deg,rgba(2,27,58,0),rgba(20,184,166,0.16))]" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-cyan-100">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(25,189,235,0.9)]" />
                {welcomeCare.eyebrow}
              </span>
              <h2 className="mt-5 max-w-3xl font-heading text-2xl font-bold leading-tight text-white md:text-4xl">
                {welcomeCare.title}
              </h2>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-white/80 md:text-base md:leading-8">
                {welcomeCare.description}
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {welcomeCare.points.map((point) => (
                  <div key={point} className="rounded-lg border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
                    <p className="text-sm font-bold text-white">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.aside
            className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-card"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={servicePanelVariants}
          >
            <div className="relative min-h-[240px] overflow-hidden bg-navy-950 lg:min-h-[260px]">
              <Image
                src="/assets/ambulance.webp"
                alt="Healthcare Pro ambulance service"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
              <div className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-teal-700 shadow-sm backdrop-blur">
                Emergency ready
              </div>
            </div>

            <div className="bg-white px-5 py-4 text-center">
              <motion.p
                className="font-heading text-lg font-black uppercase leading-6 tracking-[0.04em] text-rose-600"
                animate={{
                  opacity: [1, 0.32, 1],
                  textShadow: [
                    "0 0 0 rgba(225,29,72,0)",
                    "0 0 18px rgba(225,29,72,0.55)",
                    "0 0 0 rgba(225,29,72,0)"
                  ]
                }}
                transition={{ duration: 1.05, repeat: Infinity, ease: "easeInOut" }}
              >
                {ambulanceService.title}
              </motion.p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-bold text-navy-900">
                {ambulanceService.phoneNumbers.map((phone) => (
                  <a key={phone} href={`tel:${phone}`} className="inline-flex items-center gap-1.5 transition hover:text-rose-600">
                    <PhoneCall className="h-4 w-4" />
                    {phone}
                  </a>
                ))}
              </div>
            </div>
            <div className="grid flex-1 content-start gap-3 p-5 text-sm leading-6 text-slate-600">
              <p className="flex gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rose-500" />
                {ambulanceService.responseNote}
              </p>
              <p className="flex gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-500" />
                {ambulanceService.locationNote}
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
