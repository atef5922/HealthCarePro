import type { Specialty } from "@/types";

const sharedFaq = (department: string) => [
  {
    question: `Do I need an appointment for ${department}?`,
    answer:
      "Appointments are recommended so the care coordination team can match you with the right specialist and schedule."
  },
  {
    question: "Are diagnostic services available on the same campus?",
    answer:
      "Yes, most diagnostic, imaging, pharmacy, and support services are available in-house for coordinated care."
  }
];

const createSpecialty = (
  title: string,
  slug: string,
  category: string,
  icon: string,
  description: string,
  services: string[],
  conditions: string[] = ["Preventive consultation", "Complex case review", "Follow-up care"],
  facilities: string[] = ["Consultant chamber", "Nursing support", "Integrated diagnostics"]
): Specialty => ({
  title,
  slug,
  category,
  icon,
  description,
  services,
  conditions,
  facilities,
  faq: sharedFaq(title)
});

export const specialities: Specialty[] = [
  createSpecialty(
    "Accident & Emergency",
    "accident-emergency",
    "Emergency",
    "Siren",
    "Rapid triage, resuscitation, and emergency care with 24/7 consultant backup.",
    ["Emergency triage", "Trauma stabilization", "Observation care", "Ambulance coordination"],
    ["Road traffic injury", "Chest pain", "Stroke symptoms", "Severe infection"],
    ["Emergency bays", "Resuscitation room", "Ambulance access"]
  ),
  createSpecialty(
    "Anaesthesia",
    "anaesthesia",
    "Surgical Support",
    "Activity",
    "Safe perioperative anaesthesia and pain management for planned and emergency procedures.",
    ["Pre-anaesthesia assessment", "Regional anaesthesia", "Critical care support", "Pain clinic"]
  ),
  createSpecialty(
    "Blood Bank",
    "blood-bank",
    "Diagnostic Support",
    "Droplets",
    "Screened blood components and transfusion support guided by strict safety protocols.",
    ["Blood grouping", "Cross matching", "Component therapy", "Donor counselling"]
  ),
  createSpecialty(
    "Cancer Care Center",
    "cancer-care-center",
    "Centers of Excellence",
    "Ribbon",
    "Multidisciplinary oncology care from diagnosis to therapy planning and survivorship support.",
    ["Medical oncology", "Chemotherapy day care", "Tumor board", "Palliative care"],
    ["Breast cancer", "GI cancer", "Blood cancers", "Lung cancer"],
    ["Oncology day care", "Infusion rooms", "Counselling suite"]
  ),
  createSpecialty(
    "Cardiology",
    "cardiology",
    "Medicine",
    "HeartPulse",
    "Heart and vascular care with modern diagnostics and preventive cardiac programs.",
    ["ECG", "Echocardiography", "Cardiac risk assessment", "Hypertension clinic"],
    ["Chest pain", "Heart failure", "Arrhythmia", "Hypertension"],
    ["Cardiac observation", "Echo suite", "Non-invasive lab"]
  ),
  createSpecialty(
    "Cardiothoracic & Vascular Surgery",
    "cardiothoracic-vascular-surgery",
    "Surgery",
    "HeartHandshake",
    "Surgical care for heart, chest, and vascular conditions with coordinated ICU backup.",
    ["CABG assessment", "Vascular surgery", "Thoracic surgery", "Post-operative care"]
  ),
  createSpecialty(
    "Critical Care Unit",
    "critical-care-unit",
    "Emergency",
    "MonitorHeart",
    "High-dependency and ICU care for critically ill patients with continuous monitoring.",
    ["Ventilator care", "Sepsis management", "Post-operative ICU", "Critical monitoring"],
    ["Respiratory failure", "Shock", "Severe infection", "Post-surgical instability"],
    ["ICU beds", "Ventilator support", "Central monitoring"]
  ),
  createSpecialty(
    "Dental & Maxillofacial Surgery",
    "dental-maxillofacial-surgery",
    "Surgery",
    "Smile",
    "Dental, oral, and facial surgical services in a safe hospital environment.",
    ["Dental restoration", "Oral surgery", "Maxillofacial trauma", "Preventive dental care"]
  ),
  createSpecialty(
    "Dermatology & Venereology",
    "dermatology-venereology",
    "Medicine",
    "Sparkles",
    "Medical skin, hair, nail, allergy, and venereology services with confidential care.",
    ["Skin consultation", "Acne care", "Allergy care", "Dermatoscopy"]
  ),
  createSpecialty(
    "Dietetics & Nutrition",
    "dietetics-nutrition",
    "Wellness",
    "Apple",
    "Therapeutic nutrition plans for prevention, recovery, chronic disease, and family health.",
    ["Diet counselling", "Weight management", "Diabetes nutrition", "Renal diet plan"]
  ),
  createSpecialty(
    "Endocrinology & Diabetology",
    "endocrinology-diabetology",
    "Medicine",
    "Gauge",
    "Specialist endocrine and diabetes care focused on long-term control and prevention.",
    ["Diabetes clinic", "Thyroid clinic", "Hormone assessment", "Lifestyle counselling"]
  ),
  createSpecialty(
    "ENT & Head Neck Surgery",
    "ent-head-neck-surgery",
    "Surgery",
    "Ear",
    "Complete ear, nose, throat, voice, sinus, and head-neck surgical services.",
    ["ENT endoscopy", "Hearing assessment", "Sinus care", "Tonsil and adenoid care"]
  ),
  createSpecialty(
    "Gastroenterology & Hepatology",
    "gastroenterology-hepatology",
    "Medicine",
    "Stethoscope",
    "Digestive, liver, pancreas, and endoscopy care with coordinated diagnostics.",
    ["Endoscopy", "Liver clinic", "IBS care", "Hepatitis management"]
  ),
  createSpecialty(
    "General & Laparoscopic Surgery",
    "general-laparoscopic-surgery",
    "Surgery",
    "Scissors",
    "Planned and emergency surgical care with minimally invasive options where suitable.",
    ["Laparoscopic surgery", "Hernia care", "Gallbladder surgery", "Appendix surgery"]
  ),
  createSpecialty(
    "Hematology & BMT Centre",
    "hematology-bmt-centre",
    "Centers of Excellence",
    "Microscope",
    "Specialized blood disorder and transplant-oriented care with laboratory integration.",
    ["Anemia clinic", "Coagulation care", "Blood cancer review", "BMT counselling"]
  ),
  createSpecialty(
    "Internal Medicine",
    "internal-medicine",
    "Medicine",
    "ClipboardPlus",
    "Comprehensive adult medicine and chronic disease management for complex patients.",
    ["General medicine", "Fever clinic", "Chronic disease care", "Health risk review"]
  ),
  createSpecialty(
    "Lab Medicine",
    "lab-medicine",
    "Diagnostic Support",
    "FlaskConical",
    "Reliable pathology, microbiology, and biochemistry support for rapid clinical decisions.",
    ["Pathology", "Biochemistry", "Microbiology", "Sample collection"]
  ),
  createSpecialty(
    "Neonatology",
    "neonatology",
    "Mother & Child",
    "Baby",
    "Specialized newborn care with neonatal observation and family counselling.",
    ["Newborn assessment", "NICU support", "Feeding counselling", "Prematurity care"]
  ),
  createSpecialty(
    "Nephrology",
    "nephrology",
    "Medicine",
    "Bean",
    "Kidney care, dialysis planning, and chronic renal disease management.",
    ["Kidney clinic", "Dialysis coordination", "Renal risk assessment", "Hypertension care"]
  ),
  createSpecialty(
    "Neurology",
    "neurology",
    "Medicine",
    "Brain",
    "Brain, nerve, stroke, seizure, headache, and movement disorder consultation.",
    ["Stroke clinic", "Headache care", "Seizure management", "Neurophysiology"]
  ),
  createSpecialty(
    "Neurosurgery",
    "neurosurgery",
    "Surgery",
    "BrainCircuit",
    "Surgical evaluation and treatment for brain, spine, and nerve conditions.",
    ["Spine surgery review", "Head injury care", "Brain tumor review", "Neuro trauma"]
  ),
  createSpecialty(
    "Obstetrics & Gynaecology",
    "obstetrics-gynaecology",
    "Mother & Child",
    "VenetianMask",
    "Women-centered care for pregnancy, reproductive health, and gynecological conditions.",
    ["Antenatal care", "Delivery planning", "Infertility counselling", "Gynae surgery"]
  ),
  createSpecialty(
    "Ophthalmology",
    "ophthalmology",
    "Surgery",
    "Eye",
    "Eye care for vision correction, cataract, retina screening, and ocular emergencies.",
    ["Eye examination", "Cataract review", "Diabetic eye screening", "Glaucoma care"]
  ),
  createSpecialty(
    "Orthopaedics & Joint Replacement Surgery",
    "orthopaedics-joint-replacement-surgery",
    "Surgery",
    "Bone",
    "Bone, joint, trauma, spine, and joint replacement services.",
    ["Trauma care", "Joint pain clinic", "Sports injury care", "Joint replacement review"]
  ),
  createSpecialty(
    "Paediatrics",
    "paediatrics",
    "Mother & Child",
    "Baby",
    "Child health, immunization guidance, emergency paediatric care, and growth monitoring.",
    ["Child consultation", "Vaccination guidance", "Growth monitoring", "Paediatric emergency"]
  ),
  createSpecialty(
    "Physical Medicine & Rehabilitation",
    "physical-medicine-rehabilitation",
    "Rehabilitation",
    "Accessibility",
    "Rehabilitation plans for pain, mobility, neurological recovery, and post-surgical function.",
    ["Physiotherapy", "Pain rehabilitation", "Post-stroke therapy", "Ergonomic counselling"]
  ),
  createSpecialty(
    "Plastic & Cosmetic Surgery",
    "plastic-cosmetic-surgery",
    "Surgery",
    "Sparkle",
    "Reconstructive and cosmetic surgical services with careful assessment and counselling.",
    ["Reconstructive surgery", "Burn care review", "Cosmetic consultation", "Scar revision"]
  ),
  createSpecialty(
    "Psychiatry & Mental Health",
    "psychiatry-mental-health",
    "Wellness",
    "BrainCog",
    "Confidential mental health support for adults, adolescents, and families.",
    ["Psychiatric consultation", "Counselling referral", "Stress clinic", "Medication review"]
  ),
  createSpecialty(
    "Radiology & Imaging",
    "radiology-imaging",
    "Diagnostic Support",
    "ScanLine",
    "Modern imaging services supporting fast, accurate diagnosis across departments.",
    ["X-ray", "Ultrasound", "CT planning", "Image-guided reporting"]
  ),
  createSpecialty(
    "Respiratory Medicine",
    "respiratory-medicine",
    "Medicine",
    "Lungs",
    "Lung and sleep-related care for asthma, COPD, infections, and chronic breathing problems.",
    ["Asthma clinic", "COPD care", "Spirometry", "Sleep assessment"]
  ),
  createSpecialty(
    "Rheumatology",
    "rheumatology",
    "Medicine",
    "HandHeart",
    "Specialist care for arthritis, autoimmune conditions, and long-term inflammatory disease.",
    ["Arthritis clinic", "Autoimmune review", "Pain and swelling assessment", "Medication monitoring"]
  ),
  createSpecialty(
    "Urology",
    "urology",
    "Surgery",
    "ShieldPlus",
    "Kidney, bladder, prostate, stone, and male health services with surgical backup.",
    ["Stone clinic", "Prostate care", "Urinary infection care", "Endoscopic urology"]
  )
];

export const featuredSpecialities = specialities.slice(0, 12);
