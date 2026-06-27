"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock3, FileText, Headphones, LogIn, ShieldPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const portalFeatures = [
  { icon: FileText, title: "Reports", description: "View diagnostic files and care documents." },
  { icon: Clock3, title: "Updates", description: "Track appointment and report status." },
  { icon: ShieldPlus, title: "Secure", description: "Prepared for protected patient access." }
];

export function CTASection({
  title = "Access Your Reports Online.",
  subtitle = "View diagnostic reports, appointment updates, and care documents from a secure patient portal.",
  compact = false
}: {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}) {
  return (
    <section className={compact ? "" : "section-padding bg-white"}>
      <div className="container">
        <motion.div
          className="relative overflow-hidden rounded-xl bg-navy-950 text-white shadow-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(25,189,235,0.26),transparent_30%),linear-gradient(135deg,rgba(6,43,95,0),rgba(20,184,166,0.18))]" />
          <div className="relative grid gap-8 p-6 md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
            <div className="flex flex-col justify-center">
              <span className="w-fit rounded-md border border-cyan-300/24 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-100">
                Patient Portal
              </span>
              <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/78 md:text-base">{subtitle}</p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="accent">
                  <Link href="/online-report">
                    <FileText className="h-4 w-4" />
                    Online Report
                  </Link>
                </Button>
                <Button asChild variant="white">
                  <Link href="/online-report">
                    <LogIn className="h-4 w-4" />
                    Portal Login
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white/25 bg-transparent text-white hover:bg-white/10">
                  <Link href="/contact">
                    <Headphones className="h-4 w-4" />
                    Support
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {portalFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="rounded-lg border border-white/12 bg-white/8 p-4 backdrop-blur"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-500 text-navy-950 shadow-glow">
                      <feature.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-heading text-sm font-bold text-white">{feature.title}</span>
                      <span className="mt-1 block text-sm leading-6 text-white/70">{feature.description}</span>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
