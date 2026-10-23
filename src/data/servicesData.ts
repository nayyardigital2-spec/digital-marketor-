import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'seo',
    name: 'Search Engine Optimization (SEO)',
    shortTag: 'SEO',
    category: 'Organic Growth',
    headline: 'Rank #1 On Google & Turn Search Traffic Into Revenue',
    description: 'Comprehensive, data-driven organic search strategies engineered to improve search rankings, drive high-intent organic visitors, and build long-term sustainable compounding growth.',
    ctaText: 'Explore SEO',
    badge: 'High ROI',
    metricsHighlight: {
      stat: '+340%',
      label: 'Avg. Organic Traffic Lift in 6 Months'
    },
    items: [
      'Technical SEO',
      'On-Page SEO',
      'Off-Page SEO',
      'Local SEO',
      'Keyword Research',
      'Competitor Analysis',
      'SEO Audit',
      'Link Building',
      'Content SEO',
      'E-commerce SEO',
      'Google Business Profile Optimization'
    ],
    deliverables: [
      {
        title: 'Full Technical & Core Web Vitals Audit',
        desc: 'Deep indexing inspection, crawl budget optimization, schema markup injection, and sub-second page speed tuning.'
      },
      {
        title: 'Keyword Intent & Content Gap Map',
        desc: 'Pinpoint commercial and informational queries your competitors capture, targeting low-competition, high-conversion terms.'
      },
      {
        title: 'High-Authority White-Hat Backlinks',
        desc: 'Earn trusted editorial backlinks through data journalism, niche guest placements, and digital PR campaigns.'
      },
      {
        title: 'Continuous Tracking & Transparent Dashboards',
        desc: 'Weekly keyword rank movement, organic conversion tracing, and non-fluff monthly executive briefings.'
      }
    ],
    tools: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'SurferSEO']
  },
  {
    id: 'social-media',
    name: 'Social Media Marketing',
    shortTag: 'Social Media',
    category: 'Brand Awareness',
    headline: 'Build An Engaged Community That Converts Into Loyal Customers',
    description: 'End-to-end social media growth campaigns across all leading platforms, combining thumb-stopping creative production, audience psychology, and performance tracking.',
    ctaText: 'Explore Social Media Marketing',
    metricsHighlight: {
      stat: '4.6x',
      label: 'Average Engagement Rate Increase'
    },
    items: [
      'Instagram Marketing',
      'Facebook Marketing',
      'LinkedIn Marketing',
      'YouTube Marketing',
      'TikTok Marketing',
      'X / Twitter Marketing',
      'Social Media Strategy',
      'Content Planning',
      'Community Management',
      'Social Media Growth',
      'Influencer Marketing',
      'Social Media Analytics'
    ],
    deliverables: [
      {
        title: 'Omni-Channel Content Calendar',
        desc: 'Monthly schedules with custom graphics, short-form Reels/Shorts scripts, captions, and curated trending audio.'
      },
      {
        title: 'Active Community Moderation',
        desc: 'Daily DM replies, comment engagement, proactive brand outreach, and sentiment moderation.'
      },
      {
        title: 'Founder & Personal Brand Ghostwriting',
        desc: 'High-leverage LinkedIn & X thought leadership content establishing authority for executives and startup founders.'
      },
      {
        title: 'Growth Analytics & Follower Quality Reports',
        desc: 'Cohort analysis, viral reach breakdowns, profile visit conversion rates, and competitor benchmarking.'
      }
    ],
    tools: ['Buffer', 'Canva Pro', 'Figma', 'Sprout Social', 'CapCut Pro', 'Metricool']
  },
  {
    id: 'paid-ads',
    name: 'Paid Advertising (PPC)',
    shortTag: 'Paid Ads',
    category: 'Performance Marketing',
    headline: 'Predictable, Profitable Customer Acquisition At Scale',
    description: 'Precision-targeted performance advertising across Google, Meta, YouTube, and LinkedIn that maximizes Return on Ad Spend (ROAS) and drives lower Customer Acquisition Cost (CAC).',
    ctaText: 'Explore Paid Ads',
    badge: 'Instant Results',
    metricsHighlight: {
      stat: '5.2x',
      label: 'Average Verified Blended ROAS'
    },
    items: [
      'Google Ads',
      'Meta Ads',
      'Instagram Ads',
      'Facebook Ads',
      'YouTube Ads',
      'LinkedIn Ads',
      'Performance Marketing',
      'Lead Generation Campaigns',
      'E-commerce Ads',
      'Remarketing',
      'Conversion Optimization',
      'Campaign Management'
    ],
    deliverables: [
      {
        title: 'Granular Audience Targeting & Pixels',
        desc: 'Setup of server-side Conversions API (CAPI), custom retargeting funnels, lookalike audiences, and exclusion lists.'
      },
      {
        title: 'High-Converting Ad Creatives & Copy',
        desc: 'Continuous multi-variant testing of hooks, UGC video formats, static carousel designs, and persuasive sales copy.'
      },
      {
        title: 'Landing Page Conversion Rate Optimization',
        desc: 'A/B testing headlines, offer positioning, forms, and trust signals to ensure ad clicks convert to paying customers.'
      },
      {
        title: 'Daily Budget Bid Management & ROAS Guard',
        desc: 'Algorithmic dayparting, negative keyword hygiene, and ROAS guardrails to eliminate wasted spend.'
      }
    ],
    tools: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Mgr', 'Triple Whale', 'AppsFlyer']
  },
  {
    id: 'content-marketing',
    name: 'Content Marketing',
    shortTag: 'Content',
    category: 'Inbound Growth',
    headline: 'Persuasive Storytelling That Educates, Ranks, And Sells',
    description: 'Strategic content production designed to answer your prospective buyers highest-intent questions, build brand authority, and turn passive readers into lifelong brand advocates.',
    ctaText: 'Explore Content Marketing',
    metricsHighlight: {
      stat: '10x',
      label: 'Content Shelf-Life & Organic Asset Value'
    },
    items: [
      'Content Strategy',
      'Blog Writing',
      'SEO Content',
      'Website Content',
      'Social Media Content',
      'Copywriting',
      'Video Content Strategy',
      'Content Calendar',
      'Email Content',
      'Brand Storytelling'
    ],
    deliverables: [
      {
        title: 'High-Intent Thought Leadership Articles',
        desc: 'In-depth, thoroughly researched articles with custom graphics, original insights, and zero fluff.'
      },
      {
        title: 'Conversion Sales Copywriting',
        desc: 'Landing page copy, sales email sequences, video scripts, and product descriptions that motivate urgent action.'
      },
      {
        title: 'Content Repurposing Flywheel',
        desc: 'Transform 1 pillar asset (podcast, case study, webinar) into 10 social snippets, 2 newsletters, and 4 short videos.'
      },
      {
        title: 'Editorial Calendar & Tone of Voice Guide',
        desc: 'Standardized messaging guidelines ensuring uniform voice across all channels and marketing staff.'
      }
    ],
    tools: ['Notion', 'Grammarly Business', 'Clearscope', 'Hemingway', 'Google Docs']
  },
  {
    id: 'web-design-dev',
    name: 'Website Design & Development',
    shortTag: 'Web Development',
    category: 'Digital Assets',
    headline: 'Lightning-Fast, High-Converting Websites Built For 2026',
    description: 'Bespoke corporate websites, high-converting landing pages, and e-commerce stores designed with modern UI/UX principles, 90+ Google PageSpeed scores, and conversion-first architecture.',
    ctaText: 'Build Your Website',
    badge: 'Core Foundation',
    metricsHighlight: {
      stat: '98+',
      label: 'Lighthouse PageSpeed Score Guaranteed'
    },
    items: [
      'Business Websites',
      'Landing Pages',
      'Portfolio Websites',
      'E-commerce Websites',
      'Conversion-Focused Landing Pages',
      'UI/UX Design',
      'Website SEO',
      'Website Speed Optimization',
      'Mobile Responsive Design'
    ],
    deliverables: [
      {
        title: 'Custom Modern UI/UX Wireframing',
        desc: 'Interactive Figma prototypes tailored to your brand personality with frictionless user journeys.'
      },
      {
        title: 'Full-Stack Clean Responsive Code',
        desc: 'Built with React, Next.js, Tailwind CSS, or headless CMS platforms with zero bloated page builders.'
      },
      {
        title: 'Built-In Technical SEO & Schema',
        desc: 'Semantic HTML5, automated XML sitemaps, OpenGraph metadata, and structured JSON-LD out of the box.'
      },
      {
        title: 'Analytics & Heatmap Integration',
        desc: 'Pre-configured Google Analytics 4, Hotjar/Microsoft Clarity, and conversion event tagging.'
      }
    ],
    tools: ['Figma', 'React', 'Tailwind CSS', 'Next.js', 'Vite', 'WordPress / Webflow', 'Vercel']
  },
  {
    id: 'branding',
    name: 'Branding & Visual Identity',
    shortTag: 'Branding',
    category: 'Brand Equity',
    headline: 'Create An Iconic Brand Identity That Commands Attention',
    description: 'Holistic visual identity and brand positioning systems that separate your business from commodity competitors, inspire trust, and leave an indelible impression on clients.',
    ctaText: 'Build Your Brand',
    metricsHighlight: {
      stat: '3.2x',
      label: 'Higher Perceived Value & Pricing Power'
    },
    items: [
      'Brand Strategy',
      'Logo Design',
      'Visual Identity',
      'Brand Guidelines',
      'Social Media Branding',
      'Brand Positioning',
      'Personal Branding',
      'Creative Design'
    ],
    deliverables: [
      {
        title: 'Primary Logo, Marks & Typography Kit',
        desc: 'Vector logo suites in SVG/PNG/EPS, responsive responsive favicon variants, and curated typeface pairings.'
      },
      {
        title: 'Comprehensive Brand Style Guide',
        desc: 'A complete 30+ page brand manual covering color systems, photography direction, usage dos/donts, and tone.'
      },
      {
        title: 'Social Media & Marketing Collateral',
        desc: 'Ready-to-use templates for LinkedIn banners, Instagram carousels, presentation pitch decks, and business stationery.'
      },
      {
        title: 'Executive & Personal Brand Architecture',
        desc: 'Clear messaging pillars and visual positioning for founders, creators, and C-suite leaders.'
      }
    ],
    tools: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Coolors', 'FontBase']
  },
  {
    id: 'email-marketing',
    name: 'Email Marketing & Retention',
    shortTag: 'Email Marketing',
    category: 'Direct Retention',
    headline: 'Turn Subscribers Into Repeat Buyers On Autopilot',
    description: 'Lifecycle automated email marketing campaigns, tailored segmentations, and high-engagement newsletters that maximize Customer Lifetime Value (LTV) and build a proprietary customer database.',
    ctaText: 'Explore Email Marketing',
    metricsHighlight: {
      stat: '38%',
      label: 'Average Open Rate Across Client Campaigns'
    },
    items: [
      'Email Campaigns',
      'Newsletter Marketing',
      'Lead Nurturing',
      'Automated Email Sequences',
      'Promotional Emails',
      'Customer Retention',
      'Email Analytics',
      'Conversion Optimization'
    ],
    deliverables: [
      {
        title: 'Welcome & Onboarding Sequences',
        desc: 'High-trust multi-part email drip campaigns designed to educate new subscribers and drive initial transactions.'
      },
      {
        title: 'Abandoned Cart & Re-engagement Flows',
        desc: 'Automated behavioral triggers that win back lost pipeline and re-activate dormant contacts.'
      },
      {
        title: 'Editorial Curated Weekly Newsletters',
        desc: 'Engaging, value-first broadcasts designed to nurture customer relationships and maintain top-of-mind brand recall.'
      },
      {
        title: 'List Hygiene & Deliverability Hardening',
        desc: 'DKIM, SPF, and DMARC verification, spam-score reduction, and inactive subscriber cleaning.'
      }
    ],
    tools: ['Klaviyo', 'ActiveCampaign', 'Mailchimp', 'Brevo', 'Postmark']
  },
  {
    id: 'influencer-marketing',
    name: 'Influencer & Creator Marketing',
    shortTag: 'Influencer',
    category: 'Social Proof',
    headline: 'Harness Creator Authority To Drive Authentic Virality',
    description: 'Curated influencer discovery, transparent outreach, contract management, and UGC asset generation that builds instant credibility and scales organic reach across target demographics.',
    ctaText: 'Explore Influencer Marketing',
    metricsHighlight: {
      stat: '6.1x',
      label: 'ROI On Verified Creator Placements'
    },
    items: [
      'Influencer Discovery',
      'Creator Campaigns',
      'Influencer Outreach',
      'Campaign Management',
      'Product Promotion',
      'Performance Tracking',
      'UGC Campaigns'
    ],
    deliverables: [
      {
        title: 'Targeted Creator Sourcing & Vetting',
        desc: 'Filter for authentic engagement, audience demographics, follower fraud analysis, and niche brand alignment.'
      },
      {
        title: 'Full Negotiation & Contract Management',
        desc: 'Brief generation, usage rights acquisition for paid whitelisting, and milestone delivery protection.'
      },
      {
        title: 'High-Converting UGC Asset Library',
        desc: 'Deliverables tailored for organic feeds and high-performing dark ads on TikTok, Instagram, and YouTube.'
      },
      {
        title: 'Affiliate & Tracking Attribution',
        desc: 'Dedicated promo codes, UTM parameters, and sales revenue attribution per creator.'
      }
    ],
    tools: ['Modash', 'Upfluence', 'Grin', 'CreatorIQ', 'Google Sheets']
  },
  {
    id: 'ai-marketing',
    name: 'AI Marketing & Automation',
    shortTag: 'AI Automation',
    category: 'Future Growth',
    headline: 'Future-Ready Marketing With AI',
    description: 'Transform your marketing operations with cutting-edge AI workflows, intelligent chatbots, automated customer lead routing, programmatic SEO, and predictive analytics that 10x your output at a fraction of traditional cost.',
    ctaText: 'Explore AI Solutions',
    badge: 'Flagship Innovation',
    isAiFeatured: true,
    metricsHighlight: {
      stat: '75%',
      label: 'Reduction in Cost-Per-Lead With AI Agents'
    },
    items: [
      'AI Marketing Strategy',
      'AI Content Creation',
      'Marketing Automation',
      'AI Chatbots',
      'Lead Automation',
      'Customer Support Automation',
      'AI SEO',
      'AI Analytics',
      'AI Workflows',
      'Marketing Intelligence',
      'CRM Automation'
    ],
    deliverables: [
      {
        title: 'Custom 24/7 AI Sales & Lead Chatbots',
        desc: 'Intelligent conversational agents trained specifically on your product knowledge base, qualifying visitors and booking calls directly.'
      },
      {
        title: 'Autonomous Multi-Channel Marketing Pipelines',
        desc: 'End-to-end automated pipelines connecting your CRM, email sequences, social posts, and ad optimization alerts using Make/Zapier/Python.'
      },
      {
        title: 'Programmatic AI SEO & Semantic Content Engine',
        desc: 'Scalable topical authority generation that produces deeply researched, human-edited articles targeting thousands of long-tail queries.'
      },
      {
        title: 'Predictive Marketing Analytics & Churn Warning',
        desc: 'Machine learning dashboards forecasting customer churn, optimal send times, and expected monthly pipeline revenue.'
      }
    ],
    tools: ['OpenAI / Gemini API', 'Make.com', 'Zapier', 'Voiceflow', 'Botpress', 'Supabase', 'Python']
  }
];
