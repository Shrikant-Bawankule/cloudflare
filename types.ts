import { LucideIcon } from 'lucide-react';

export interface Plan {
  id: string;
  name: string;
  badge?: string;
  timingBadge?: string;
  price: {
    bimonthly: number;
    quarterly: number;
  };
  features: string[];
  unavailableFeatures?: string[];
  buttonText: string;
  isPopular?: boolean;
  link: string | {
    bimonthly: string;
    quarterly: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}