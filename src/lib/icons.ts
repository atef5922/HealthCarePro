import {
  Accessibility,
  Activity,
  Ambulance,
  Apple,
  Baby,
  Bed,
  Bone,
  Brain,
  CalendarCheck,
  ClipboardPlus,
  Clock3,
  Cross,
  Droplets,
  Ear,
  Eye,
  FlaskConical,
  Gauge,
  HandHeart,
  Headphones,
  HeartHandshake,
  HeartPulse,
  MapPin,
  Microscope,
  Pill,
  Ribbon,
  ScanLine,
  Scissors,
  ShieldPlus,
  Siren,
  Smile,
  Sparkles,
  Stethoscope
} from "lucide-react";
import { createElement } from "react";
import type { IconMap } from "@/types";

export const iconMap: IconMap = {
  Accessibility,
  Activity,
  Ambulance,
  Apple,
  Baby,
  Bed,
  Bone,
  Brain,
  BrainCircuit: Brain,
  BrainCog: Brain,
  CalendarCheck,
  ClipboardPlus,
  Cross,
  Clock3,
  Droplets,
  Ear,
  Eye,
  FlaskConical,
  Gauge,
  HandHeart,
  Headphones,
  HeartHandshake,
  HeartPulse,
  Lungs: Activity,
  MapPin,
  Microscope,
  MonitorHeart: HeartPulse,
  Pill,
  Ribbon,
  ScanLine,
  Scissors,
  ShieldPlus,
  Siren,
  Smile,
  Sparkle: Sparkles,
  Sparkles,
  Stethoscope,
  VenetianMask: HeartPulse,
  Bean: ShieldPlus
};

export function getIcon(name: string) {
  return iconMap[name] ?? Stethoscope;
}

export function renderIcon(name: string, className?: string) {
  return createElement(getIcon(name), { className, "aria-hidden": true });
}
