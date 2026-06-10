export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  impactResult: string;
  impactLabel: string;
  scope: string[];
  color: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  iconName: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  results: string;
}

export interface ProcessStep {
  step: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface Credential {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badgeColor: string;
  image?: string;
}

export interface ImpactMet {
  metric: string;
  label: string;
  context: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  billing: string;
  desc: string;
  deliverables: string[];
  popular: boolean;
  cta: string;
}

export interface ToolItem {
  name: string;
  category: 'design' | 'prototyping' | 'workflow';
  percentage: number;
  iconName: string;
  experienceYears: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
