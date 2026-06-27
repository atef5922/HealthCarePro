"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  CalendarCheck,
  ChevronDown,
  FileText,
  Home,
  MapPin,
  Menu,
  Phone,
  Search,
  X
} from "lucide-react";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { QueryForm } from "@/components/forms/QueryForm";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/config/site";
import { mainNavigation, newsLinks, specialityNav, visitorLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

const desktopNavigation: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about-us" },
  { title: "Find Doctors", href: "/find-doctors" },
  { title: "Specialities", href: "/specialities", children: specialityNav },
  { title: "Online Report", href: "/online-report" },
  { title: "Patient Stories", href: "/patient-stories" },
  { title: "Career", href: "/career" },
  {
    title: "More",
    href: "/visitors-patients",
    children: [
      { title: "Visitors & Patients", href: "/visitors-patients", description: "Services, facilities, guides and policies" },
      { title: "News & Media", href: "/news-media", description: "Hospital news, gallery and publications" },
      { title: "Health Packages", href: "/visitors-patients/packages", description: "Preventive care packages" },
      { title: "Blog", href: "/blog", description: "Health tips and patient education" },
      { title: "Contact", href: "/contact", description: "Direction, hotline and query support" },
      { title: "Book Appointment", href: "/appointment", description: "Submit an appointment request" }
    ]
  }
];

const locationLinks = [
  {
    title: "Dhaka",
    href: "https://www.google.com/maps/search/?api=1&query=Healthcare%20Pro%20Hospital%20Dhaka"
  },
  {
    title: "Chattogram",
    href: "https://www.google.com/maps/search/?api=1&query=Healthcare%20Pro%20Hospital%20Chattogram"
  }
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function itemIsActive(pathname: string, item: NavItem) {
  return isActive(pathname, item.href) || Boolean(item.children?.some((child) => isActive(pathname, child.href)));
}

function LocationDropdown({ compact = false }: { compact?: boolean }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex h-9 shrink-0 items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-300",
            compact ? "w-9 justify-center" : "gap-1.5 px-3"
          )}
          aria-label="Select hospital location"
        >
          <MapPin className="h-4 w-4 text-cyan-200" />
          {compact ? null : (
            <>
              <span>Locations</span>
              <ChevronDown className="h-4 w-4" />
            </>
          )}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={10}
          className="z-[80] w-48 rounded-lg border border-slate-100 bg-white p-2 text-sm font-bold text-navy-950 shadow-card"
        >
          {locationLinks.map((location) => (
            <DropdownMenu.Item asChild key={location.title}>
              <a
                href={location.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-md px-3 py-2 outline-none transition hover:bg-surface-blue focus:bg-surface-blue"
              >
                <MapPin className="h-4 w-4 text-cyan-600" />
                {location.title}
              </a>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function TopBar({
  openSearch,
  openAppointment,
  openQuery
}: {
  openSearch: () => void;
  openAppointment: () => void;
  openQuery: () => void;
}) {
  return (
    <div className="overflow-hidden bg-[#062b5f] text-white">
      <div className="container flex min-h-11 items-center justify-between gap-3 py-1.5 text-xs font-bold">
        <div className="flex min-w-0 items-center gap-3">
          <Link
            href="/"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-cyan-500 px-3 py-2 text-white shadow-sm transition hover:bg-cyan-600"
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Healthcare Pro</span>
          </Link>
          <span className="sm:hidden">
            <LocationDropdown compact />
          </span>
          <span className="hidden truncate text-white lg:block">Welcome to {siteConfig.name}, Dhaka.</span>
        </div>

        <button
          type="button"
          onClick={openSearch}
          className="hidden h-9 w-48 shrink-0 items-center justify-between rounded-full border border-white/30 bg-white/20 px-4 text-left text-white shadow-inner transition hover:bg-white/20 lg:flex xl:w-64"
        >
          <span>Search</span>
          <Search className="h-4 w-4 text-white/80" />
        </button>

        <div className="flex min-w-0 items-center justify-end gap-3 overflow-hidden hide-scrollbar lg:flex-1 lg:overflow-x-auto">
          <span className="hidden sm:inline-flex">
            <LocationDropdown />
          </span>
          <a href={`tel:${siteConfig.emergencyHotline}`} className="hidden shrink-0 items-center gap-2 sm:inline-flex">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-navy-900">
              <Phone className="h-4 w-4" />
            </span>
            <span>{siteConfig.phone.replace("+880 ", "0")}</span>
          </a>
          <button type="button" className="hidden shrink-0 items-center gap-1.5 text-white transition hover:text-cyan-200 md:inline-flex">
            English
            <ChevronDown className="h-4 w-4" />
          </button>
          <button type="button" onClick={openAppointment} className="hidden shrink-0 text-cyan-200 transition hover:text-white xl:inline">
            Appointment
          </button>
          <Link className="hidden shrink-0 text-cyan-200 transition hover:text-white 2xl:inline" href="/contact">
            Telemedicine
          </Link>
          <button type="button" onClick={openQuery} className="hidden shrink-0 text-cyan-200 transition hover:text-white 2xl:inline">
            Send Query
          </button>
        </div>
      </div>
    </div>
  );
}

function MegaContent({ item }: { item: NavItem }) {
  const isSpeciality = item.title === "Specialities";
  const links = item.children ?? [];

  return (
    <DropdownMenu.Content
      align="center"
      sideOffset={18}
      className={cn(
        "z-50 rounded-2xl border border-slate-100 bg-white p-5 shadow-card",
        isSpeciality ? "w-[min(1040px,calc(100vw-2rem))]" : "w-[min(560px,calc(100vw-2rem))]"
      )}
    >
      <div className={cn("grid gap-3", isSpeciality ? "md:grid-cols-4" : "md:grid-cols-2")}>
        {links.map((child) => (
          <DropdownMenu.Item asChild key={child.href}>
            <Link href={child.href} className="rounded-xl p-3 outline-none transition hover:bg-surface-blue focus:bg-surface-blue">
              <p className="font-heading text-sm font-bold text-slate-950">{child.title}</p>
              {child.description ? (
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-600">{child.description}</p>
              ) : null}
            </Link>
          </DropdownMenu.Item>
        ))}
      </div>
      {isSpeciality ? (
        <DropdownMenu.Item asChild>
          <Button asChild className="mt-5 w-full" variant="outline">
            <Link href="/specialities">View All Specialities</Link>
          </Button>
        </DropdownMenu.Item>
      ) : null}
    </DropdownMenu.Content>
  );
}

function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <nav className="hidden items-stretch gap-0.5 xl:flex">
      {desktopNavigation.map((item) =>
        item.children ? (
          <DropdownMenu.Root key={item.href}>
            <DropdownMenu.Trigger
              className={cn(
                "group relative inline-flex h-14 items-center gap-1 px-2.5 text-sm font-bold text-navy-950 outline-none transition hover:text-cyan-700 2xl:px-3",
                itemIsActive(pathname, item) && "text-cyan-700"
              )}
            >
              {item.title}
              <ChevronDown className="h-4 w-4 transition group-data-[state=open]:rotate-180" />
              {itemIsActive(pathname, item) ? (
                <span className="absolute inset-x-2 bottom-0 h-1 rounded-t-full bg-cyan-500" />
              ) : null}
            </DropdownMenu.Trigger>
            <MegaContent item={item} />
          </DropdownMenu.Root>
        ) : (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative inline-flex h-14 items-center px-2.5 text-sm font-bold text-navy-950 transition hover:text-cyan-700 2xl:px-3",
              isActive(pathname, item.href) && "bg-cyan-500 px-5 text-white shadow-sm hover:text-white"
            )}
          >
            {item.title}
            {isActive(pathname, item.href) ? (
              <span className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 border-x-[9px] border-t-[9px] border-x-transparent border-t-cyan-500" />
            ) : null}
          </Link>
        )
      )}
    </nav>
  );
}

function SearchOverlay({
  open,
  onOpenChange
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = React.useState("");
  const allLinks = React.useMemo(
    () => [
      ...mainNavigation.filter((item) => !item.children),
      ...specialityNav,
      ...visitorLinks,
      ...newsLinks
    ],
    []
  );
  const results = allLinks
    .filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 8);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-navy-950/70 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-16 z-[71] w-[calc(100vw-2rem)] max-w-2xl -translate-x-1/2 rounded-2xl bg-white p-5 shadow-card">
          <div className="flex items-center gap-3">
            <Search className="h-5 w-5 text-cyan-600" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              autoFocus
              placeholder="Search doctors, departments, services..."
              className="border-0 bg-surface-soft focus:ring-0"
            />
            <Dialog.Close className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100" aria-label="Close search">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>
          <div className="mt-5 grid gap-2">
            {(query ? results : allLinks.slice(0, 6)).map((item) => (
              <Dialog.Close asChild key={item.href}>
                <Link href={item.href} className="rounded-xl border border-slate-100 p-4 transition hover:border-cyan-500/40 hover:bg-surface-blue">
                  <p className="font-heading text-sm font-bold text-slate-950">{item.title}</p>
                  {item.description ? <p className="mt-1 line-clamp-1 text-xs text-slate-600">{item.description}</p> : null}
                </Link>
              </Dialog.Close>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function MobileNav({
  pathname,
  openSearch,
  openAppointment,
  openQuery
}: {
  pathname: string;
  openSearch: () => void;
  openAppointment: () => void;
  openQuery: () => void;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline" size="icon" className="xl:hidden" aria-label="Open navigation">
          <Menu className="h-5 w-5" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-navy-950/70 backdrop-blur-sm" />
        <Dialog.Content className="fixed right-0 top-0 z-[61] h-full w-[min(92vw,390px)] overflow-y-auto bg-white p-5 shadow-card">
          <div className="flex items-center justify-between">
            <Logo />
            <Dialog.Close className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100" aria-label="Close navigation">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>
          <button
            type="button"
            onClick={openSearch}
            className="mt-6 flex h-12 w-full items-center gap-2 rounded-lg border border-slate-200 px-4 text-sm text-slate-500"
          >
            <Search className="h-4 w-4" />
            Search hospital services
          </button>
          <div className="mt-5 rounded-xl bg-navy-900 p-4 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Emergency</p>
            <a href={`tel:${siteConfig.emergencyHotline}`} className="mt-2 flex items-center gap-2 font-heading text-2xl font-bold">
              <Phone className="h-5 w-5 text-green-500" />
              {siteConfig.emergencyHotline}
            </a>
          </div>
          <Accordion.Root type="multiple" className="mt-6 space-y-1">
            {mainNavigation.map((item) =>
              item.children ? (
                <Accordion.Item key={item.href} value={item.href} className="rounded-xl border border-slate-100">
                  <Accordion.Trigger className="flex w-full items-center justify-between px-4 py-3 font-heading text-sm font-bold text-slate-950">
                    {item.title}
                    <ChevronDown className="h-4 w-4" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-3 pb-3">
                    <div className="grid gap-1">
                      <Dialog.Close asChild>
                        <Link href={item.href} className="rounded-lg px-3 py-2 text-sm font-semibold text-cyan-700">
                          View {item.title}
                        </Link>
                      </Dialog.Close>
                      {item.children.slice(0, item.title === "Specialities" ? 32 : undefined).map((child) => (
                        <Dialog.Close asChild key={child.href}>
                          <Link href={child.href} className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-surface-blue">
                            {child.title}
                          </Link>
                        </Dialog.Close>
                      ))}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ) : (
                <Dialog.Close asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-xl px-4 py-3 font-heading text-sm font-bold text-slate-950",
                      isActive(pathname, item.href) && "bg-surface-blue"
                    )}
                  >
                    {item.title}
                  </Link>
                </Dialog.Close>
              )
            )}
          </Accordion.Root>
          <div className="mt-6 grid gap-3">
            <Button type="button" className="w-full" variant="accent" onClick={openAppointment}>
              <CalendarCheck className="h-4 w-4" />
              Book Appointment
            </Button>
            <Button type="button" className="w-full" variant="default" onClick={openQuery}>
              <FileText className="h-4 w-4" />
              Send Query
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function ActionDialogs({
  appointmentOpen,
  queryOpen,
  setAppointmentOpen,
  setQueryOpen
}: {
  appointmentOpen: boolean;
  queryOpen: boolean;
  setAppointmentOpen: (open: boolean) => void;
  setQueryOpen: (open: boolean) => void;
}) {
  return (
    <>
      <Dialog.Root open={appointmentOpen} onOpenChange={setAppointmentOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[70] bg-navy-950/70 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-8 z-[71] max-h-[calc(100vh-4rem)] w-[calc(100vw-2rem)] max-w-xl -translate-x-1/2 overflow-y-auto rounded-2xl bg-white p-6 shadow-card md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <Dialog.Title className="font-heading text-2xl font-bold text-slate-950">Book Appointment</Dialog.Title>
                <Dialog.Description className="mt-2 text-sm leading-6 text-slate-600">
                  Submit your preferred department, doctor, and date. The team will confirm by phone.
                </Dialog.Description>
              </div>
              <Dialog.Close className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100" aria-label="Close appointment modal">
                <X className="h-5 w-5" />
              </Dialog.Close>
            </div>
            <div className="mt-6">
              <AppointmentForm compact />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root open={queryOpen} onOpenChange={setQueryOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[70] bg-navy-950/70 backdrop-blur-sm" />
          <Dialog.Content className="fixed left-1/2 top-10 z-[71] max-h-[calc(100vh-5rem)] w-[calc(100vw-2rem)] max-w-xl -translate-x-1/2 overflow-y-auto rounded-2xl bg-white p-6 shadow-card md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <Dialog.Title className="font-heading text-2xl font-bold text-slate-950">Send Query</Dialog.Title>
                <Dialog.Description className="mt-2 text-sm leading-6 text-slate-600">
                  Ask about appointments, corporate care, packages, reports, or department support.
                </Dialog.Description>
              </div>
              <Dialog.Close className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100" aria-label="Close query modal">
                <X className="h-5 w-5" />
              </Dialog.Close>
            </div>
            <div className="mt-6">
              <QueryForm />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

function AccreditationSeal() {
  return (
    <div className="hidden items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-navy-900 shadow-sm 2xl:flex">
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-300 bg-[radial-gradient(circle_at_30%_25%,#fff7c2,#d5a225_62%,#8a6110)] font-heading text-sm font-black text-white shadow-inner">
        ISO
      </span>
      <span className="max-w-[92px] text-[10px] font-bold leading-3 text-slate-700">Quality Accredited Hospital</span>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [appointmentOpen, setAppointmentOpen] = React.useState(false);
  const [queryOpen, setQueryOpen] = React.useState(false);
  const [topBarHidden, setTopBarHidden] = React.useState(false);
  const dialogOpen = searchOpen || appointmentOpen || queryOpen;

  React.useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      if (currentScrollY < 90) {
        setTopBarHidden(false);
      } else if (Math.abs(scrollDelta) > 8) {
        setTopBarHidden(scrollDelta > 0);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_10px_30px_rgba(2,27,58,0.08)]">
      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-300 ease-out motion-reduce:transition-none",
          topBarHidden && !dialogOpen ? "max-h-0 opacity-0" : "max-h-14 opacity-100"
        )}
      >
        <TopBar
          openSearch={() => setSearchOpen(true)}
          openAppointment={() => setAppointmentOpen(true)}
          openQuery={() => setQueryOpen(true)}
        />
      </div>
      <div className="container flex min-h-[82px] items-center justify-between gap-4 py-3 xl:min-h-[88px]">
        <Logo />
        <DesktopNav pathname={pathname} />
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-cyan-500 hover:text-navy-900 lg:flex"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <Button type="button" variant="default" className="hidden min-h-12 rounded-none px-7 shadow-card lg:inline-flex" onClick={() => setQueryOpen(true)}>
            Send Query
          </Button>
          <AccreditationSeal />
          <MobileNav
            pathname={pathname}
            openSearch={() => setSearchOpen(true)}
            openAppointment={() => setAppointmentOpen(true)}
            openQuery={() => setQueryOpen(true)}
          />
        </div>
      </div>
      <SearchOverlay open={searchOpen} onOpenChange={setSearchOpen} />
      <ActionDialogs
        appointmentOpen={appointmentOpen}
        queryOpen={queryOpen}
        setAppointmentOpen={setAppointmentOpen}
        setQueryOpen={setQueryOpen}
      />
    </header>
  );
}
