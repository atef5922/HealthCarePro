import type { Doctor } from "@/types";

export const doctors: Doctor[] = [
  {
    name: "Prof. Dr. Arif Rahman",
    slug: "arif-rahman",
    designation: "Senior Consultant, Cardiology",
    department: "Cardiology",
    specialtySlug: "cardiology",
    qualification: "MBBS, MD (Cardiology), FACC",
    experience: "18+ Years Experience",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80",
    availableDays: ["Sun", "Tue", "Thu"],
    interests: ["Preventive cardiology", "Heart failure", "Hypertension"],
    schedule: [
      { day: "Sunday", time: "10:00 AM - 1:00 PM", location: "Cardiology Chamber 2" },
      { day: "Tuesday", time: "5:00 PM - 8:00 PM", location: "Cardiology Chamber 2" }
    ]
  },
  {
    name: "Dr. Farzana Ahmed",
    slug: "farzana-ahmed",
    designation: "Consultant, Neurology",
    department: "Neurology",
    specialtySlug: "neurology",
    qualification: "MBBS, FCPS (Medicine), MD (Neurology)",
    experience: "12+ Years Experience",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
    availableDays: ["Mon", "Wed", "Sat"],
    interests: ["Stroke", "Epilepsy", "Headache"],
    schedule: [
      { day: "Monday", time: "4:00 PM - 8:00 PM", location: "Neuro Clinic" },
      { day: "Wednesday", time: "11:00 AM - 2:00 PM", location: "Neuro Clinic" }
    ]
  },
  {
    name: "Dr. Mahmudul Hasan",
    slug: "mahmudul-hasan",
    designation: "Consultant, Orthopaedics",
    department: "Orthopaedics & Joint Replacement Surgery",
    specialtySlug: "orthopaedics-joint-replacement-surgery",
    qualification: "MBBS, MS (Ortho)",
    experience: "10+ Years Experience",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=900&q=80",
    availableDays: ["Sun", "Tue", "Fri"],
    interests: ["Joint replacement", "Sports injury", "Trauma care"],
    schedule: [
      { day: "Sunday", time: "5:00 PM - 8:30 PM", location: "Orthopaedic Chamber" },
      { day: "Friday", time: "10:00 AM - 12:30 PM", location: "Orthopaedic Chamber" }
    ]
  },
  {
    name: "Dr. Nusrat Jahan",
    slug: "nusrat-jahan",
    designation: "Consultant, Oncology",
    department: "Cancer Care Center",
    specialtySlug: "cancer-care-center",
    qualification: "MBBS, MD (Oncology)",
    experience: "14+ Years Experience",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80",
    availableDays: ["Sun", "Mon", "Thu"],
    interests: ["Breast oncology", "Chemotherapy", "Survivorship care"],
    schedule: [
      { day: "Sunday", time: "9:00 AM - 1:00 PM", location: "Oncology Day Care" },
      { day: "Thursday", time: "4:00 PM - 7:00 PM", location: "Oncology Day Care" }
    ]
  },
  {
    name: "Dr. Samia Chowdhury",
    slug: "samia-chowdhury",
    designation: "Consultant, Paediatrics",
    department: "Paediatrics",
    specialtySlug: "paediatrics",
    qualification: "MBBS, FCPS (Paediatrics)",
    experience: "11+ Years Experience",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=900&q=80",
    availableDays: ["Mon", "Wed", "Fri"],
    interests: ["Child development", "Vaccination", "Neonatal follow-up"],
    schedule: [
      { day: "Monday", time: "10:00 AM - 1:00 PM", location: "Child Health Clinic" },
      { day: "Friday", time: "5:00 PM - 8:00 PM", location: "Child Health Clinic" }
    ]
  },
  {
    name: "Dr. Imran Kabir",
    slug: "imran-kabir",
    designation: "Consultant, Gastroenterology",
    department: "Gastroenterology & Hepatology",
    specialtySlug: "gastroenterology-hepatology",
    qualification: "MBBS, MD (Gastroenterology)",
    experience: "13+ Years Experience",
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=900&q=80",
    availableDays: ["Tue", "Thu", "Sat"],
    interests: ["Liver disease", "Endoscopy", "IBS"],
    schedule: [
      { day: "Tuesday", time: "9:30 AM - 12:30 PM", location: "Endoscopy Clinic" },
      { day: "Saturday", time: "4:30 PM - 8:00 PM", location: "Endoscopy Clinic" }
    ]
  },
  {
    name: "Dr. Rashed Karim",
    slug: "rashed-karim",
    designation: "Consultant, Critical Care",
    department: "Critical Care Unit",
    specialtySlug: "critical-care-unit",
    qualification: "MBBS, FCPS, Fellowship in Critical Care",
    experience: "16+ Years Experience",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80",
    availableDays: ["Sun", "Wed", "Sat"],
    interests: ["ICU care", "Sepsis", "Ventilator management"],
    schedule: [
      { day: "Wednesday", time: "11:00 AM - 2:00 PM", location: "Critical Care Office" },
      { day: "Saturday", time: "6:00 PM - 8:00 PM", location: "Critical Care Office" }
    ]
  },
  {
    name: "Dr. Sabrina Hoque",
    slug: "sabrina-hoque",
    designation: "Consultant, Obstetrics & Gynaecology",
    department: "Obstetrics & Gynaecology",
    specialtySlug: "obstetrics-gynaecology",
    qualification: "MBBS, FCPS (Obs & Gynae)",
    experience: "15+ Years Experience",
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&w=900&q=80",
    availableDays: ["Sun", "Tue", "Thu"],
    interests: ["High-risk pregnancy", "Gynae surgery", "Antenatal care"],
    schedule: [
      { day: "Sunday", time: "4:00 PM - 7:00 PM", location: "Women Health Center" },
      { day: "Thursday", time: "10:00 AM - 1:00 PM", location: "Women Health Center" }
    ]
  }
];

export const featuredDoctors = doctors.slice(0, 4);
