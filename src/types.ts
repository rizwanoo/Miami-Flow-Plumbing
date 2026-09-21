export type PageId = 'home' | 'about' | 'services' | 'privacy';

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  category: 'emergency' | 'residential' | 'commercial' | 'maintenance';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  imageUrl: string;
  benefits: string[];
  commonSituations: string[];
  priceRange: string;
  responseTiming: string;
}

export interface TrustItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
}

export interface WhyChooseUsItem {
  number: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  duration: string;
  details: string[];
  iconName: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  solution: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'heaters' | 'drains' | 'repiping' | 'fixtures' | 'commercial';
  location: string;
  imageUrl: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  neighborhood: string;
  rating: number;
  service: string;
  date: string;
  content: string;
  verified: boolean;
  avatarUrl?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  certifications: string;
  bio: string;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'emergency' | 'pricing' | 'miami' | 'drains' | 'heaters' | 'commercial';
}

export interface EstimateFormData {
  fullName: string;
  phone: string;
  email: string;
  propertyAddress: string;
  serviceNeeded: string;
  preferredDate: string;
  urgency: 'emergency' | 'asap' | 'flexible';
  propertyType: 'single-family' | 'condo' | 'commercial';
  message: string;
}
