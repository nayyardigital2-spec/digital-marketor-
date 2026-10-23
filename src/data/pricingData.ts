import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    tagline: 'For small businesses, startups and ambitious creators',
    priceMonthly: 990,
    period: 'per month',
    description: 'Establish a dominant organic foundation and kickstart structured digital growth with verified fundamentals.',
    ctaText: 'Get Started',
    recommendedFor: 'Early-stage startups, local service providers, and solo creators aiming to build initial market traction.',
    features: [
      'SEO Basics (On-Page, Technical & Google Business)',
      'Social Media Strategy (2 Primary Channels)',
      'Content Planning (8 Custom Posts & Graphics/mo)',
      'Monthly Analytics & Performance Review',
      'Basic Keyword Rank Tracking (Top 25 Keywords)',
      'Bi-Weekly Strategy Sync',
      'Standard Support via Slack & Email'
    ]
  },
  {
    id: 'growth',
    name: 'GROWTH',
    badge: 'Most Popular',
    isPopular: true,
    tagline: 'For growing businesses ready to aggressively scale leads and revenue',
    priceMonthly: 2490,
    period: 'per month',
    description: 'Our flagship growth engine combining multi-channel performance marketing, aggressive SEO, and content conversion.',
    ctaText: 'Start Growing',
    recommendedFor: 'Growing SMBs, funded startups, and e-commerce brands scaling to 6 & 7-figure annual run rates.',
    features: [
      'Advanced Full-Funnel SEO & High-Authority Link Building',
      'Social Media Management (4 Channels, 16 Posts + 4 Reels/mo)',
      'Paid Ads Management (Google Ads & Meta / IG Ads)',
      'Content Marketing (4 Long-Form SEO Articles/mo)',
      'Conversion Rate Optimization (A/B Testing & Funnel Tuning)',
      'Custom Live Performance Analytics Dashboard',
      'Bi-Weekly Video Strategy Consultations',
      'Priority 24/7 Slack Channel Access & Dedicated Growth Lead'
    ]
  },
  {
    id: 'scale',
    name: 'SCALE',
    badge: 'Enterprise Tier',
    tagline: 'For established brands requiring full-stack digital supremacy and AI workflows',
    priceMonthly: 4950,
    period: 'per month',
    description: 'Comprehensive omni-channel orchestration, custom AI automation agents, dedicated creative team, and global ad scale.',
    ctaText: 'Talk To An Expert',
    recommendedFor: 'Established enterprises, multi-location corporations, and high-volume e-commerce brands.',
    features: [
      'Full SEO (Enterprise Programmatic, International & Technical)',
      'Omni-Channel Social Media Domination (All Platforms)',
      'High-Volume Paid Advertising (Google, Meta, YouTube, LinkedIn)',
      'Comprehensive Brand Storytelling & Video Asset Production',
      'Brand Strategy & Visual Asset Guidelines Maintenance',
      'AI Automation Workflows & Custom 24/7 Lead Bot Deployment',
      'Advanced Predictive Analytics & Churn Reduction Engine',
      'Dedicated Fractional CMO & Senior Growth Squad',
      'Weekly Executive Briefings & Custom KPI Service Level Agreement'
    ]
  }
];

export const customPlanAddons = [
  { name: 'Custom AI Chatbot & Lead Agent', price: '+$600/mo', description: 'Trained on your knowledge base, books meetings 24/7' },
  { name: 'Dedicated Video & UGC Production', price: '+$850/mo', description: '12 high-converting edited vertical videos per month' },
  { name: 'Cold Email & B2B Lead Gen Pipeline', price: '+$750/mo', description: 'Automated list enrichment and outreach sequences' },
  { name: 'Full Brand Identity System Revamp', price: '$2,400 one-time', description: 'Complete typography, logo suite, and guidelines manual' }
];
