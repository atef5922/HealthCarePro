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
      className="group fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_38px_rgba(37,211,102,0.36)] transition hover:-translate-y-1 hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:bottom-[calc(1.25rem+env(safe-area-inset-bottom))] sm:right-5 sm:h-14 sm:w-14"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 motion-safe:animate-ping" />
      <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#25D366] sm:h-14 sm:w-14">
        <MessageCircle className="h-6 w-6 fill-white/12 sm:h-7 sm:w-7" />
      </span>
    </a>
  );
}
