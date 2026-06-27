import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/app/globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollToTopButton } from "@/components/sections/ScrollToTopButton";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { ToastProvider } from "@/components/ui/toast-provider";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const heading = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Premium Hospital Care in Bangladesh`,
    template: `%s | ${siteConfig.shortName}`
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(heading.variable, body.variable, "font-body antialiased")}>
        <ToastProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <ScrollToTopButton />
        </ToastProvider>
      </body>
    </html>
  );
}
