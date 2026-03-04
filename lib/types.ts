// Base node type
export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredCommunitiesTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Community
export interface DrupalCommunity extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  careLevel?: DrupalTerm[]
  address?: string
  phone?: string
  capacity?: string
  amenities?: string[]
  image?: DrupalImage
}

export interface CommunitiesData {
  nodeCommunities: {
    nodes: DrupalCommunity[]
  }
}

// Service
export interface DrupalService extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  serviceCategory?: DrupalTerm[]
  availability?: string
  image?: DrupalImage
}

export interface ServicesData {
  nodeServices: {
    nodes: DrupalService[]
  }
}

// Activity
export interface DrupalActivity extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  activityType?: DrupalTerm[]
  schedule?: string
  location?: string
  instructor?: string
  image?: DrupalImage
}

export interface ActivitiesData {
  nodeActivities: {
    nodes: DrupalActivity[]
  }
}

// Staff Member
export interface DrupalStaff extends DrupalNode {
  body?: {
    processed: string
  }
  position?: string
  department?: DrupalTerm[]
  email?: string
  phone?: string
  photo?: DrupalImage
  certifications?: string[]
  education?: {
    processed: string
  }
}

export interface StaffData {
  nodeStaffs: {
    nodes: DrupalStaff[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
