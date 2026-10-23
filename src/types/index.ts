export type PageType = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'service-detail' 
  | 'portfolio' 
  | 'pricing' 
  | 'blog' 
  | 'contact' 
  | 'faq';

export interface ServiceItem {
  id: string;
  name: string;
  shortTag: string;
  category: string;
  headline: string;
  description: string;
  badge?: string;
  isAiFeatured?: boolean;
  ctaText: string;
  items: string[];
  deliverables: {
    title: string;
    desc: string;
  }[];
  metricsHighlight: {
    stat: string;
    label: string;
  };
  tools: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: 'SEO' | 'Social Media' | 'Ads' | 'Web' | 'Branding' | 'AI';
  summary: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
  servicesProvided: string[];
  image: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  tagline: string;
  priceMonthly: number;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  recommendedFor: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  resultsGained: string;
}
