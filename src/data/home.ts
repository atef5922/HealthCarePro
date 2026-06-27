export type HeroAction = {
  title: string;
  href: string;
  icon: string;
  note: string;
  description: string;
  meta: string;
  tone: "cyan" | "teal" | "amber" | "rose";
};

export type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  position: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
  highlights: string[];
};

export type HeroStat = {
  value: string;
  label: string;
  detail: string;
  icon: string;
};

export const welcomeCare = {
  eyebrow: "Welcome to Healthcare Pro Hospital",
  title: "Compassionate care, advanced medicine, and guidance families can trust.",
  description:
    "Healthcare Pro brings specialist consultation, emergency response, diagnostics, and patient support into one connected hospital journey. Every visit is designed to feel clear, calm, and professionally coordinated from arrival to follow-up.",
  points: ["Specialist-led departments", "Family guidance desk", "Digital report workflow"]
};

export const ambulanceService = {
  title: "Ambulance Service - 24/7",
  phoneNumbers: ["01912502025", "01768896433"],
  responseNote: "Rapid emergency coordination with trained support teams.",
  locationNote: "Available for hospital pickup, transfer, and urgent response."
};

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Care with confidence",
    title: "A hospital experience that feels personal from the first call.",
    description:
      "From urgent triage to specialist follow-up, Healthcare Pro keeps patients, families, and care teams connected with calm guidance at every step.",
    image: "/banner1.webp",
    position: "object-center",
    primaryAction: { label: "Book Appointment", href: "/appointment" },
    secondaryAction: { label: "Find a Doctor", href: "/find-doctors" },
    highlights: ["24/7 emergency desk", "Specialist-led care plans", "Digital reports and follow-up"]
  },
  {
    eyebrow: "Advanced care, human touch",
    title: "Specialist departments designed around clarity and comfort.",
    description:
      "Modern diagnostics, coordinated consultations, and family-friendly communication help every visit feel less stressful and more assured.",
    image: "/banner2.webp",
    position: "object-center",
    primaryAction: { label: "Explore Specialities", href: "/specialities" },
    secondaryAction: { label: "View Packages", href: "/visitors-patients/packages" },
    highlights: ["32+ clinical specialities", "Preventive health packages", "Coordinated patient support"]
  },
  {
    eyebrow: "Always close to care",
    title: "Emergency, diagnostics, and recovery support under one trusted roof.",
    description:
      "A connected hospital journey for busy families: faster access, clear next steps, and compassionate teams ready when it matters most.",
    image: "/banner3.webp",
    position: "object-center",
    primaryAction: { label: "Call Emergency", href: "tel:10663" },
    secondaryAction: { label: "Get Directions", href: "/contact" },
    highlights: ["Rapid emergency coordination", "In-house lab and imaging", "Family guidance desk"]
  },
  {
    eyebrow: "A calmer path to care",
    title: "Every department connected for faster decisions and better follow-up.",
    description:
      "From booking to reports, Healthcare Pro helps patients move through care with less confusion and more confidence.",
    image: "/banner4.webp",
    position: "object-center",
    primaryAction: { label: "Online Report", href: "/online-report" },
    secondaryAction: { label: "Book Appointment", href: "/appointment" },
    highlights: ["Portal-ready reports", "Guided appointments", "Clear next steps"]
  }
];

export const heroActions: HeroAction[] = [
  {
    title: "Find a Doctor",
    href: "/find-doctors",
    icon: "Stethoscope",
    note: "Specialist search",
    description: "Browse consultants by department, schedule, and patient need.",
    meta: "Profiles ready",
    tone: "cyan"
  },
  {
    title: "Book Appointment",
    href: "/appointment",
    icon: "CalendarCheck",
    note: "Fast booking",
    description: "Send your preferred doctor, date, and contact details in minutes.",
    meta: "Confirmation call",
    tone: "teal"
  },
  {
    title: "Online Report",
    href: "/online-report",
    icon: "ClipboardPlus",
    note: "Patient portal",
    description: "A clear report access path prepared for secure backend login.",
    meta: "Digital access",
    tone: "amber"
  },
  {
    title: "Emergency Help",
    href: "tel:10663",
    icon: "Siren",
    note: "24/7 urgent care",
    description: "Immediate guidance for ambulance, triage, and critical support.",
    meta: "Hotline 10663",
    tone: "rose"
  }
];

export const heroStats: HeroStat[] = [
  { value: "24/7", label: "Emergency", detail: "critical care coordination", icon: "Siren" },
  { value: "500+", label: "Care Team", detail: "doctors, nurses, and support staff", icon: "HandHeart" },
  { value: "32+", label: "Specialities", detail: "department-wise care journeys", icon: "ShieldPlus" },
  { value: "Online", label: "Reports", detail: "portal-ready patient workflow", icon: "ClipboardPlus" }
];

export const quickActions = [
  { title: "Book Appointment", href: "/appointment", icon: "CalendarCheck", description: "Easy online booking" },
  { title: "Find a Doctor", href: "/find-doctors", icon: "Stethoscope", description: "Search and connect" },
  { title: "Online Report", href: "/online-report", icon: "ClipboardPlus", description: "Access reports securely" },
  { title: "Emergency", href: "tel:10663", icon: "Siren", description: "24/7 urgent care" },
  { title: "Health Packages", href: "/visitors-patients/packages", icon: "ShieldPlus", description: "Preventive care" },
  { title: "Contact / Direction", href: "/contact", icon: "MapPin", description: "Reach our campus" }
];

export const whyChooseUs = [
  { title: "Advanced medical technology", icon: "Microscope", description: "Modern diagnostics and connected clinical workflows." },
  { title: "Expert doctors", icon: "Stethoscope", description: "Specialist-led services across high-demand departments." },
  { title: "24/7 emergency support", icon: "Siren", description: "Rapid triage, ambulance coordination, and ICU backup." },
  { title: "Patient-centric care", icon: "HandHeart", description: "Clear guidance for families throughout the care journey." },
  { title: "Modern diagnostics", icon: "ScanLine", description: "In-house lab and imaging services for faster decisions." },
  { title: "International standards", icon: "ShieldPlus", description: "Quality, safety, infection control, and clinical governance." }
];
