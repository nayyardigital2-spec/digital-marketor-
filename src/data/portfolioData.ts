import { CaseStudy } from '../types';

export const portfolioData: CaseStudy[] = [
  {
    id: 'nordic-aura',
    title: 'Scaling D2C Sustainable Brand To $1.8M ARR',
    client: 'Nordic Aura Apparel',
    industry: 'E-commerce & Fashion',
    category: 'Ads',
    summary: 'Restructured fragmented Meta & Google ad accounts, deployed high-converting TikTok-style UGC videos, and instituted dynamic retargeting flows.',
    challenge: 'Nordic Aura had hit a growth plateau with a low 1.4x ROAS, high customer acquisition costs ($68 CAC), and heavy reliance on ad-hoc discounting.',
    solution: 'Nayyar Digital implemented full-funnel performance marketing: Meta conversion API, creative sprint testing (testing 15 creative variants weekly), and high-intent Google Shopping Performance Max campaigns.',
    results: [
      { label: 'Blended ROAS', value: '4.9x' },
      { label: 'Revenue Growth', value: '+310%' },
      { label: 'Customer CAC', value: '-48%' },
      { label: 'New Monthly Customers', value: '2,400+' }
    ],
    servicesProvided: ['Paid Advertising', 'Meta Ads', 'Google Ads', 'Conversion Optimization', 'UGC Creative Direction'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    testimonial: {
      quote: "Nayyar Digital turned our ad spend from a stressful gamble into a predictable money machine. We expanded our product line 6 months ahead of schedule.",
      author: 'Elinor Lind',
      role: 'Founder & CEO, Nordic Aura'
    }
  },
  {
    id: 'fintech-apex',
    title: 'Topical Authority SEO Engine Generating 140k Monthly Visitors',
    client: 'Apex Capital SaaS',
    industry: 'B2B Fintech',
    category: 'SEO',
    summary: 'Built a 60-pillar programmatic SEO architecture targeting high-intent commercial keywords for SMB treasury management.',
    challenge: 'Apex was invisible on Google search engine results pages, spending over $42,000/month purely on paid search clicks with zero compounding organic equity.',
    solution: 'Conducted a deep semantic cluster audit, published 110 expert-reviewed technical guides, fixed Core Web Vitals to 99, and secured 45 top-tier editorial backlinks.',
    results: [
      { label: 'Monthly Organic Traffic', value: '142,000+' },
      { label: 'Top 3 Google Rankings', value: '380+ Keywords' },
      { label: 'Monthly Inbound Demos', value: '340+' },
      { label: 'Paid Search Spend Saved', value: '$38,000/mo' }
    ],
    servicesProvided: ['Technical SEO', 'Keyword Research', 'Content SEO', 'Link Building', 'Core Web Vitals'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    testimonial: {
      quote: "Our organic inbound pipeline is now our #1 source of closed revenue. Nayyar Digital's technical SEO acumen is truly unmatched.",
      author: 'Marcus Vance',
      role: 'VP of Growth, Apex Capital'
    }
  },
  {
    id: 'omni-bot-ai',
    title: 'Automated 24/7 AI Lead Routing & Instant Qualification Engine',
    client: 'Solaria Solar Systems',
    industry: 'CleanTech & Home Services',
    category: 'AI',
    summary: 'Architected an autonomous AI qualification voice and web chatbot with automated CRM appointment booking and dynamic WhatsApp follow-ups.',
    challenge: 'Inbound home solar inquiries were taking an average of 4.2 hours to receive a response, resulting in a 70% lead drop-off rate before an estimate was delivered.',
    solution: 'Deployed a custom-trained AI assistant that responds to website inquiries within 4 seconds, qualifies roof specifications, calculates savings estimates, and books sales inspections directly.',
    results: [
      { label: 'Lead Response Time', value: '< 5 Seconds' },
      { label: 'Consultation Booking Rate', value: '+185%' },
      { label: 'Cost Per Qualified Lead', value: '-62%' },
      { label: 'Monthly Additional Revenue', value: '$680,000' }
    ],
    servicesProvided: ['AI Marketing & Automation', 'AI Chatbots', 'CRM Automation', 'Lead Automation', 'WhatsApp Integrations'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    testimonial: {
      quote: "The AI agent books consultations while our sales team sleeps. It paid for itself in the first 72 hours of operation.",
      author: 'David Rodriguez',
      role: 'Chief Revenue Officer, Solaria Systems'
    }
  },
  {
    id: 'velocity-gear',
    title: '0 to 240,000 Instagram & TikTok Community in 9 Months',
    client: 'Velocity Activewear',
    industry: 'Fitness & Lifestyle',
    category: 'Social Media',
    summary: 'Crafted a viral short-form video strategy featuring fitness micro-influencers, daily behind-the-scenes reels, and automated DM discount engines.',
    challenge: 'A brand-new brand with zero brand awareness, facing stiff competition from legacy activewear giants and high customer skepticism.',
    solution: 'Designed an agile video production studio model releasing 25 tailored short-form clips per week, paired with an automated DM trigger system for giveaways and athlete routines.',
    results: [
      { label: 'Total Cross-Platform Followers', value: '240,000+' },
      { label: 'Total Organic Views', value: '18.4 Million' },
      { label: 'Direct Social Commerce Sales', value: '$420,000' },
      { label: 'Avg. Reel Engagement', value: '6.4%' }
    ],
    servicesProvided: ['Social Media Marketing', 'Instagram Marketing', 'TikTok Marketing', 'Influencer Outreach', 'Community Management'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80',
    testimonial: {
      quote: "They understood our demographic better than we did. Our launch drop sold out in 42 minutes thanks to the social community they built.",
      author: 'Chantal Duprès',
      role: 'Creative Director, Velocity'
    }
  },
  {
    id: 'zenith-health',
    title: 'High-Converting Web Experience & Rebranding For HealthTech',
    client: 'Zenith Longevity Clinics',
    industry: 'Healthcare & Wellness',
    category: 'Web',
    summary: 'Complete brand overhaul and ultra-fast web application built with modern typography, interactive patient assessment quiz, and one-click booking.',
    challenge: 'Zenith had a slow, outdated 2018 WordPress site taking 6.8 seconds to load, suffering from high bounce rates (74%) and an unpolished brand image.',
    solution: 'Executed an identity redesign (brand guidelines, bespoke medical illustration system) and coded a custom, sub-second responsive web portal with instant checkout.',
    results: [
      { label: 'Page Load Speed', value: '0.6s' },
      { label: 'Mobile Conversion Rate', value: '+214%' },
      { label: 'Bounce Rate', value: 'Reduced to 26%' },
      { label: 'Google PageSpeed Score', value: '99/100' }
    ],
    servicesProvided: ['Website Design & Development', 'Branding', 'UI/UX Design', 'Conversion Optimization', 'Technical SEO'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    testimonial: {
      quote: "Patients constantly remark on how sleek and easy our website is. Our new patient registrations doubled within the first 30 days.",
      author: 'Dr. Aris Thorne',
      role: 'Founder & Medical Director'
    }
  },
  {
    id: 'lumina-studios',
    title: 'Brand Positioning & Identity for Premier Architecture Firm',
    client: 'Lumina Architecture Group',
    industry: 'Luxury Architecture & Interiors',
    category: 'Branding',
    summary: 'Redefined brand narrative, created luxury editorial typography guidelines, and designed sleek pitch decks attracting 7-figure private residential commissions.',
    challenge: 'Lumina was routinely underbidding on commercial and ultra-luxury residential projects because their visual collateral did not reflect their artistic caliber.',
    solution: 'Designed an understated, timeless identity system: monochrome geometry, embossed stationery kits, an editorial digital showcase, and strategic personal branding for founding partners.',
    results: [
      { label: 'Avg Project Deal Size', value: '+$450,000' },
      { label: 'Pitch Win Rate', value: '72% (up from 31%)' },
      { label: 'Press Features', value: 'AD & Dezeen' },
      { label: 'Client Perceived Value', value: 'Premier Tier' }
    ],
    servicesProvided: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Personal Branding', 'Creative Direction'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    testimonial: {
      quote: "Nayyar Digital elevated how the world perceives us. Our clients now view us in the same tier as elite global architectural practices.",
      author: 'Julian Cole',
      role: 'Principal Architect, Lumina'
    }
  }
];
