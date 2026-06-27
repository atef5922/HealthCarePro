import type { Package } from "@/types";

export const packages: Package[] = [
  {
    title: "Executive Health Checkup",
    slug: "executive-health-checkup",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
    description: "A complete preventive health screening for busy professionals and leaders.",
    price: "Price on request",
    includes: ["CBC and ESR", "Lipid profile", "Liver and kidney function", "ECG and physician consultation"]
  },
  {
    title: "Cardiac Checkup",
    slug: "cardiac-checkup",
    image: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&w=900&q=80",
    description: "Focused heart risk assessment with cardiology review and essential diagnostics.",
    price: "Price on request",
    includes: ["ECG", "Echo screening", "Lipid profile", "Cardiology consultation"]
  },
  {
    title: "Diabetes Screening",
    slug: "diabetes-screening",
    image: "https://images.unsplash.com/photo-1578496781379-7dcfb995293d?auto=format&fit=crop&w=900&q=80",
    description: "Diabetes and metabolic health screening with nutrition guidance.",
    price: "Price on request",
    includes: ["Fasting glucose", "HbA1c", "Urine routine", "Dietitian counselling"]
  },
  {
    title: "Kidney Function Checkup",
    slug: "kidney-function-checkup",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80",
    description: "Screen kidney performance, urine health, and blood pressure risk factors.",
    price: "Price on request",
    includes: ["Serum creatinine", "Electrolytes", "Urine R/E", "Nephrology advice"]
  },
  {
    title: "Women Health Package",
    slug: "women-health-package",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    description: "Preventive screening and consultation for women across life stages.",
    price: "Price on request",
    includes: ["CBC", "Thyroid profile", "Ultrasound advice", "Gynae consultation"]
  },
  {
    title: "Child Health Package",
    slug: "child-health-package",
    image: "https://images.unsplash.com/photo-1599700403969-f77b3aa74837?auto=format&fit=crop&w=900&q=80",
    description: "Growth, nutrition, and general wellness review for children.",
    price: "Price on request",
    includes: ["Growth assessment", "CBC", "Nutrition review", "Paediatric consultation"]
  },
  {
    title: "Senior Citizen Package",
    slug: "senior-citizen-package",
    image: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?auto=format&fit=crop&w=900&q=80",
    description: "A thoughtful screening package for older adults and long-term health planning.",
    price: "Price on request",
    includes: ["ECG", "Kidney profile", "Bone health review", "Medicine consultation"]
  },
  {
    title: "Cancer Screening Package",
    slug: "cancer-screening-package",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
    description: "Risk-based screening consultation with carefully selected investigations.",
    price: "Price on request",
    includes: ["Clinical assessment", "Risk counselling", "Basic tumor marker advice", "Oncology referral"]
  }
];
