import type { NavItem } from "@/types";
import { specialities } from "@/data/specialities";

export const specialityNav: NavItem[] = specialities.map((item) => ({
  title: item.title,
  href: `/specialities/${item.slug}`,
  description: item.description
}));

export const visitorLinks: NavItem[] = [
  { title: "Services", href: "/visitors-patients/services" },
  { title: "Facilities", href: "/visitors-patients/facilities" },
  { title: "Health Check Up", href: "/visitors-patients/health-check" },
  { title: "Packages", href: "/visitors-patients/packages" },
  { title: "Room Rent", href: "/visitors-patients/room-rent" },
  { title: "Equipments", href: "/visitors-patients/equipments" },
  { title: "Health Tips", href: "/visitors-patients/health-tips" },
  { title: "Visitors Policy", href: "/visitors-patients/visitors-policy" },
  { title: "Feedback", href: "/visitors-patients/feedback" }
];

export const newsLinks: NavItem[] = [
  { title: "Hospital News", href: "/news-media/news" },
  { title: "Gallery", href: "/news-media/gallery" },
  { title: "Publications", href: "/news-media/publications" },
  { title: "Blog", href: "/blog" },
  { title: "Patient Stories", href: "/patient-stories" },
  { title: "Events", href: "/news-media/events" }
];

export const mainNavigation: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about-us" },
  { title: "Find Doctors", href: "/find-doctors" },
  { title: "Specialities", href: "/specialities", children: specialityNav },
  { title: "Online Report", href: "/online-report" },
  { title: "Visitors & Patients", href: "/visitors-patients", children: visitorLinks },
  { title: "News & Media", href: "/news-media", children: newsLinks },
  { title: "Career", href: "/career" },
  { title: "Contact", href: "/contact" }
];
