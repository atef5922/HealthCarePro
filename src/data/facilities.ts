import type { Facility } from "@/types";

export const facilities: Facility[] = [
  {
    title: "Emergency & Ambulance",
    slug: "emergency-ambulance",
    image: "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=900&q=80",
    icon: "Ambulance",
    excerpt: "24/7 emergency triage and ambulance coordination for urgent medical needs.",
    features: ["Emergency bays", "Rapid triage", "Critical care link", "Hotline coordination"]
  },
  {
    title: "Modern Diagnostics",
    slug: "modern-diagnostics",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
    icon: "Microscope",
    excerpt: "Laboratory and imaging support designed for accuracy and speed.",
    features: ["Pathology", "Radiology", "Online reports", "Sample collection"]
  },
  {
    title: "ICU & HDU",
    slug: "icu-hdu",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
    icon: "MonitorHeart",
    excerpt: "Monitored critical care units with trained clinical and nursing teams.",
    features: ["Ventilator support", "Central monitoring", "Isolation support", "Consultant backup"]
  },
  {
    title: "Cabins & Patient Rooms",
    slug: "cabins-patient-rooms",
    image: "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&w=900&q=80",
    icon: "Bed",
    excerpt: "Comfortable patient rooms planned for privacy, hygiene, and family support.",
    features: ["Single cabins", "Twin rooms", "Nursing station", "Patient attendant support"]
  },
  {
    title: "Operation Theatre",
    slug: "operation-theatre",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80",
    icon: "Cross",
    excerpt: "Surgical suites with modern infection control and recovery pathways.",
    features: ["Modular OT", "Recovery area", "Sterile workflow", "Anaesthesia support"]
  },
  {
    title: "Pharmacy",
    slug: "pharmacy",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80",
    icon: "Pill",
    excerpt: "Hospital pharmacy support for admitted and outpatient care.",
    features: ["Prescription support", "Cold chain items", "Patient counselling", "24/7 access"]
  }
];
