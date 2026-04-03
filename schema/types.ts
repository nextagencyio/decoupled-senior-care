// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeActivity {
  id: string;
  activityType: any[];
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  instructor: string;
  location: string;
  path: string;
  schedule: string;
  title: string;
}

export interface NodeCommunity {
  id: string;
  address: string;
  amenities: string[];
  body: { value: string; summary?: string };
  capacity: string;
  careLevel: any[];
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  phone: string;
  title: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredCommunitiesTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeService {
  id: string;
  availability: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  serviceCategory: any[];
  title: string;
}

export interface NodeStaff {
  id: string;
  body: { value: string; summary?: string };
  certifications: string[];
  department: any[];
  education: { value: string };
  email: string;
  path: string;
  phone: string;
  photo: { url: string; alt: string; width: number; height: number };
  position: string;
  title: string;
}
