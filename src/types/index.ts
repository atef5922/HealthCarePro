import type { LucideIcon } from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export type Specialty = {
  title: string;
  slug: string;
  category: string;
  description: string;
  icon: string;
  services: string[];
  conditions: string[];
  facilities: string[];
  faq: { question: string; answer: string }[];
};

export type Doctor = {
  name: string;
  slug: string;
  designation: string;
  department: string;
  specialtySlug: string;
  qualification: string;
  experience: string;
  image: string;
  availableDays: string[];
  interests: string[];
  schedule: { day: string; time: string; location: string }[];
};

export type Package = {
  title: string;
  slug: string;
  image: string;
  description: string;
  price: string;
  includes: string[];
};

export type Article = {
  title: string;
  slug: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  content: string[];
};

export type Story = Article & {
  patient: string;
};

export type Career = {
  title: string;
  slug: string;
  department: string;
  location: string;
  type: string;
  vacancy: string;
  deadline: string;
  summary: string;
  requirements: string[];
};

export type Event = {
  title: string;
  slug: string;
  date: string;
  image: string;
  category: string;
  excerpt: string;
};

export type Facility = {
  title: string;
  slug: string;
  image: string;
  icon: string;
  excerpt: string;
  features: string[];
};

export type IconMap = Record<string, LucideIcon>;
