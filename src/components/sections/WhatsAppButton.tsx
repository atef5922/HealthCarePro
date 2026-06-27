"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={siteConfig.socialLinks.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Healthcare Pro on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_38px_rgba(37,211,102,0.36)] transition hover:-translate-y-1 hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 motion-safe:animate-ping" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#25D366]">
        <MessageCircle className="h-7 w-7 fill-white/12" />
      </span>
      <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-navy-950 px-3 py-2 text-xs font-bold text-white opacity-0 shadow-card transition group-hover:translate-x-0 group-hover:opacity-100 md:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
