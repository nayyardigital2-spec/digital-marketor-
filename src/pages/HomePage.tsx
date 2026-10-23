import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Search, 
  Share2, 
  Zap, 
  FileText, 
  Globe, 
  Palette, 
  Mail, 
  Users, 
  Cpu, 
  Star, 
  ChevronRight, 
  BarChart, 
  TrendingUp, 
  ShieldCheck, 
  Award,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { HeroDashboard } from '../components/HeroDashboard';
import { StatsSection } from '../components/StatsCounter';
import { servicesData } from '../data/servicesData';
import { portfolioData } from '../data/portfolioData';
import { testimonialsData } from '../data/testimonialsData';
import { pricingPlans } from '../data/pricingData';
import { faqData } from '../data/faqData';
import { PageType, CaseStudy } from '../types';

interface HomePageProps {
  onNavigate: (page: PageType, serviceId?: string) => void;
  onBookConsultation: (service?: string) => void;
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onBookConsultation,
  onSelectCaseStudy,
}) => {
  const [activeFaq, setActiveFaq] = useState<string | null>('faq-1');
  const [portfolioFilter, setPortfolioFilter] = useState<string>('All');

  const filteredCaseStudies = portfolioFilter === 'All' 
    ? portfolioData 
    : portfolioData.filter(c => c.category.toLowerCase() === portfolioFilter.toLowerCase());

  const getServiceIcon = (id: string) => {
    switch(id) {
      case 'seo': return <Search className="w-5 h-5 text-sky-600" />;
      case 'social-media': return <Share2 className="w-5 h-5 text-pink-600" />;
      case 'paid-ads': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'content-marketing': return <FileText className="w-5 h-5 text-emerald-600" />;
      case 'web-design-dev': return <Globe className="w-5 h-5 text-indigo-600" />;
      case 'branding': return <Palette className="w-5 h-5 text-purple-600" />;
      case 'email-marketing': return <Mail className="w-5 h-5 text-blue-600" />;
      case 'influencer-marketing': return <Users className="w-5 h-5 text-rose-500" />;
      case 'ai-marketing': return <Cpu className="w-5 h-5 text-sky-400" />;
      default: return <Sparkles className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <div className="space-y-0">
      
      {/* ======================================================== */}
      {/* 1. HERO SECTION */}
      {/* ======================================================== */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden hero-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline, Subheadline, CTAs & Trust Badges */}
            <div className="lg:col-span-7 space-y-7 text-left">
              
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-slate-200/90 shadow-sm text-slate-800">
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                <span className="text-sky-600 font-bold">NAYYAR DIGITAL</span>
                <span className="text-slate-300">|</span>
                <span>AI-Powered Digital Growth</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.08]">
                Grow Your Business With Digital Marketing That <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-slate-900">Actually Works.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                We help brands, startups, creators and businesses increase visibility, generate leads and build sustainable digital growth using SEO, Social Media, Paid Ads, Content Marketing and AI-powered strategies.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => onBookConsultation()}
                  className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-slate-950 text-white font-bold text-sm shadow-xl hover:bg-slate-800 hover:shadow-2xl transition-all"
                >
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-slate-800 font-bold text-sm border border-slate-300 shadow-sm hover:bg-slate-50 hover:border-slate-400 transition-all"
                >
                  Explore Our Services
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-slate-200/80">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Data-Driven Strategy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Performance Focused</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>AI-Powered Marketing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>ROI Focused</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: High-Tech Analytics & AI Dashboard Visual */}
            <div className="lg:col-span-5">
              <HeroDashboard onExploreServices={() => onNavigate('services')} />
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. PARTNER / PLATFORM TRUST TICKER */}
      {/* ======================================================== */}
      <section className="py-8 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0">
              Certified Marketing Partners & Stacks
            </span>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-10 text-slate-400 font-bold text-xs sm:text-sm">
              <span className="flex items-center gap-1.5 hover:text-slate-800 transition-colors">
                <span className="w-2 h-2 rounded-full bg-blue-500" /> Google Partner Certified
              </span>
              <span className="flex items-center gap-1.5 hover:text-slate-800 transition-colors">
                <span className="w-2 h-2 rounded-full bg-indigo-500" /> Meta Business Partner
              </span>
              <span className="flex items-center gap-1.5 hover:text-slate-800 transition-colors">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> Shopify Plus Partner
              </span>
              <span className="flex items-center gap-1.5 hover:text-slate-800 transition-colors">
                <span className="w-2 h-2 rounded-full bg-sky-500" /> HubSpot Certified
              </span>
              <span className="flex items-center gap-1.5 hover:text-slate-800 transition-colors">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> Google Analytics 4
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. SERVICES SECTION */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-200/60">
              <Sparkles className="w-3.5 h-3.5" /> Full-Spectrum Growth Stack
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Everything You Need To Grow Online
            </h2>
            <p className="text-base text-slate-600">
              From organic search authority and viral social distribution to high-converting PPC funnels and intelligent AI automation.
            </p>
          </div>

          {/* 9 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service) => {
              const isAi = service.isAiFeatured;
              return (
                <div
                  key={service.id}
                  className={`relative rounded-3xl p-7 transition-all flex flex-col justify-between ${
                    isAi
                      ? 'bg-[#0b132b] text-white border-2 border-sky-500/50 shadow-2xl lg:scale-[1.02] -order-1 lg:order-none'
                      : 'bg-white text-slate-900 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1'
                  }`}
                >
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-6 right-6">
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide ${
                        isAi
                          ? 'bg-gradient-to-r from-sky-400 to-indigo-400 text-slate-950 shadow-md'
                          : 'bg-sky-50 text-sky-800 border border-sky-200'
                      }`}>
                        {service.badge}
                      </span>
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isAi
                        ? 'bg-slate-800/80 border border-slate-700 text-sky-400'
                        : 'bg-slate-50 border border-slate-100'
                    }`}>
                      {getServiceIcon(service.id)}
                    </div>

                    <div>
                      <span className={`text-[11px] font-bold uppercase tracking-wider block ${
                        isAi ? 'text-sky-400' : 'text-slate-400'
                      }`}>
                        {service.category}
                      </span>
                      <h3 className="text-xl font-bold tracking-tight mt-1">
                        {service.name}
                      </h3>
                    </div>

                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      isAi ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {service.description}
                    </p>

                    {/* Metric Highlight Box */}
                    <div className={`p-3 rounded-xl border flex items-center justify-between ${
                      isAi
                        ? 'bg-slate-900/90 border-slate-800 text-white'
                        : 'bg-slate-50 border-slate-200/70'
                    }`}>
                      <span className="text-[11px] font-medium opacity-80">
                        {service.metricsHighlight.label}
                      </span>
                      <span className={`text-base font-extrabold ${
                        isAi ? 'text-sky-400' : 'text-slate-900'
                      }`}>
                        {service.metricsHighlight.stat}
                      </span>
                    </div>

                    {/* Sub-items bullets (shows 6 of them) */}
                    <div className="pt-2 border-t border-slate-100/10">
                      <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                        {service.items.slice(0, 6).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 truncate">
                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                              isAi ? 'bg-sky-400' : 'bg-sky-500'
                            }`} />
                            <span className={isAi ? 'text-slate-300 truncate' : 'text-slate-600 truncate'}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-6 mt-6 border-t border-slate-100/10 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate('service-detail', service.id)}
                      className={`text-xs font-bold inline-flex items-center gap-1.5 transition-colors group ${
                        isAi
                          ? 'text-sky-400 hover:text-sky-300'
                          : 'text-slate-900 hover:text-sky-600'
                      }`}
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => onBookConsultation(service.name)}
                      className={`text-[11px] px-3 py-1.5 rounded-lg font-semibold transition-all ${
                        isAi
                          ? 'bg-sky-500 text-slate-950 hover:bg-sky-400 font-bold'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                      }`}
                    >
                      Book Consult
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. WHY CHOOSE US */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              The Nayyar Digital Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              Why Businesses Choose Nayyar Digital
            </h2>
            <p className="text-base text-slate-600">
              We cut through the noise with transparent analytics, modern AI technology, and relentless focus on pipeline revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 01 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all hover:shadow-md space-y-3">
              <span className="text-xs font-black tracking-widest text-sky-600">
                01
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Data Driven
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We make marketing decisions using data, analytics and real customer behavior. No guessing or outdated intuition.
              </p>
            </div>

            {/* Card 02 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all hover:shadow-md space-y-3">
              <span className="text-xs font-black tracking-widest text-sky-600">
                02
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                ROI Focused
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our campaigns focus on measurable business growth and meaningful results: customer lifetime value, qualified pipeline and net revenue.
              </p>
            </div>

            {/* Card 03 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all hover:shadow-md space-y-3">
              <span className="text-xs font-black tracking-widest text-sky-600">
                03
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                AI Powered
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We use modern AI tools and automation to improve speed, efficiency and performance, saving clients tens of thousands in manual waste.
              </p>
            </div>

            {/* Card 04 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all hover:shadow-md space-y-3">
              <span className="text-xs font-black tracking-widest text-sky-600">
                04
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Full Service
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                SEO, social media, paid ads, content, branding, websites and automation under one unified roof for cohesive messaging.
              </p>
            </div>

            {/* Card 05 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all hover:shadow-md space-y-3">
              <span className="text-xs font-black tracking-widest text-sky-600">
                05
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Transparent
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Clear reporting, transparent strategies and easy-to-understand performance insights. Real-time dashboards and weekly syncs.
              </p>
            </div>

            {/* Card 06 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all hover:shadow-md space-y-3">
              <span className="text-xs font-black tracking-widest text-sky-600">
                06
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Growth Focused
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our goal is not just traffic. We focus on leads, conversions, customers and revenue that fundamentally move the needle for your business.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. PROCESS SECTION */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#0b132b] text-white relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Proven 6-Stage Framework
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              How We Grow Your Business
            </h2>
            <p className="text-base text-slate-400">
              A structured, repeatable methodology refined over 100+ multi-channel campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Step 01</span>
                <span className="w-2 h-2 rounded-full bg-sky-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Discover</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Understand your business, audience, competitive landscape and realistic growth goals through deep qualitative and quantitative audits.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Step 02</span>
                <span className="w-2 h-2 rounded-full bg-sky-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Strategize</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Create a customized digital marketing strategy outlining channel allocation, target CPA/ROAS thresholds, and content calendars.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Step 03</span>
                <span className="w-2 h-2 rounded-full bg-sky-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Create</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Develop content, ad copy, creative variants, high-converting landing pages, and automated AI lead capture workflows.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Step 04</span>
                <span className="w-2 h-2 rounded-full bg-sky-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Launch</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Launch SEO, social media and performance advertising campaigns with rigorous pixel and server-side tracking integrity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Step 05</span>
                <span className="w-2 h-2 rounded-full bg-sky-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Optimize</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Analyze daily performance, weed out non-performing ad variants, optimize keyword bids, and test landing page conversions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Step 06</span>
                <span className="w-2 h-2 rounded-full bg-sky-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Scale</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Scale successful angles, expand budget into new platforms, deploy advanced automation, and generate compounding growth.
              </p>
            </div>

          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onBookConsultation()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-colors shadow-lg"
            >
              <Sparkles className="w-4 h-4" /> Start Step 01 With A Free Discovery Call
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. STATS SECTION (Animated Counters) */}
      {/* ======================================================== */}
      <StatsSection />

      {/* ======================================================== */}
      {/* 7. PORTFOLIO / CASE STUDIES */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                Proven Track Record
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Real Strategies. Real Growth.
              </h2>
              <p className="text-sm text-slate-600 max-w-xl">
                Explore how we engineer verified customer acquisition, organic traffic, and automated workflows across diverse industries.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200">
              {['All', 'SEO', 'Social Media', 'Ads', 'Web', 'Branding', 'AI'].map((category) => (
                <button
                  key={category}
                  onClick={() => setPortfolioFilter(category)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    portfolioFilter.toLowerCase() === category.toLowerCase()
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 shadow-sm backdrop-blur-sm">
                        {study.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span>{study.client}</span>
                      <span className="text-slate-300">·</span>
                      <span>{study.industry}</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-950 leading-snug group-hover:text-sky-600 transition-colors">
                      {study.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {study.summary}
                    </p>

                    {/* Metric Chips */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                      {study.results.slice(0, 2).map((res, i) => (
                        <div key={i} className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                          <div className="text-base font-extrabold text-slate-900">
                            {res.value}
                          </div>
                          <div className="text-[10px] text-slate-500 truncate">
                            {res.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => onSelectCaseStudy(study)}
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors"
            >
              <span>View All Verified Client Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. TESTIMONIALS */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#f8fafc] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Verified Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-sm text-slate-600">
              Direct reviews from founders, CMOs, and growth executives who scaled with Nayyar Digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonialsData.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Star Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {item.resultsGained}
                    </span>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    "{item.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-slate-100"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-slate-950">{item.name}</h3>
                    <p className="text-xs text-slate-500">{item.position}, {item.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white px-4 py-2 rounded-full border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Average 4.9/5 satisfaction rating across 50+ managed accounts</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. PRICING SECTION PREVIEW */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Clear & Transparent Growth Packages
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Invest In Measurable Business Growth
            </h2>
            <p className="text-base text-slate-600">
              Flexible retainers with zero hidden fees. Choose the engine that matches your current growth stage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingPlans.map((plan) => {
              const isPopular = plan.isPopular;
              return (
                <div
                  key={plan.id}
                  className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                    isPopular
                      ? 'bg-[#0b132b] text-white border-2 border-sky-500 shadow-2xl relative lg:-translate-y-2'
                      : 'bg-white text-slate-900 border border-slate-200/90 shadow-sm'
                  }`}
                >
                  <div>
                    {/* Header & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-black tracking-widest uppercase ${
                        isPopular ? 'text-sky-400' : 'text-slate-500'
                      }`}>
                        {plan.name}
                      </span>
                      {plan.badge && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500 text-slate-950">
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <p className={`text-xs mb-6 ${isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                      {plan.tagline}
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline gap-1.5 mb-6">
                      <span className="text-4xl sm:text-5xl font-black tracking-tight">
                        ${plan.priceMonthly.toLocaleString()}
                      </span>
                      <span className={`text-xs font-semibold ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                        / month
                      </span>
                    </div>

                    {/* Feature Checklist */}
                    <div className={`space-y-3 pt-6 border-t ${
                      isPopular ? 'border-slate-800' : 'border-slate-100'
                    }`}>
                      <span className={`text-xs font-bold uppercase tracking-wider block ${
                        isPopular ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        Included Capabilities:
                      </span>
                      {plan.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isPopular ? 'text-sky-400' : 'text-sky-600'
                          }`} />
                          <span className={isPopular ? 'text-slate-200' : 'text-slate-700'}>
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Plan CTA */}
                  <div className="pt-8 mt-8 border-t border-slate-100/10">
                    <button
                      onClick={() => onBookConsultation(plan.name)}
                      className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all shadow-md ${
                        isPopular
                          ? 'bg-sky-500 hover:bg-sky-400 text-slate-950 font-black shadow-sky-500/20'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      {plan.ctaText}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center space-y-2">
            <p className="text-sm font-semibold text-slate-700">
              Need a bespoke scope or enterprise multi-channel contract?
            </p>
            <button
              onClick={() => onBookConsultation('Custom Plan')}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-700 underline"
            >
              Request a Custom Scope & Proposal
            </button>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 10. FAQ SECTION PREVIEW */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#f8fafc] border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600">
              Everything you need to know about partnering with Nayyar Digital.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.slice(0, 6).map((item) => {
              const isOpen = activeFaq === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : item.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-sky-600 transition-colors"
                  >
                    <span>{item.question}</span>
                    <ChevronRight className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-90 text-sky-600' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('faq')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-sky-600"
            >
              <span>View All 12 Agency Questions & Policies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 11. FREE CONSULTATION CTA BANNER */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-slate-950 via-[#0b132b] to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-400/30">
            <Sparkles className="w-3.5 h-3.5" /> Stop Burning Budget on Ineffective Tactics
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready To Grow Your Business Online?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Let's build a digital marketing strategy designed around your goals, audience and growth targets.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onBookConsultation()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-sm transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              Book A Free Consultation
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm border border-slate-700 transition-all"
            >
              Talk To Us
            </button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span>✓ 30-Minute Discovery Session</span>
            <span>✓ Complete Competitor & SEO Footprint Audit</span>
            <span>✓ Zero Obligation Proposal</span>
          </div>
        </div>
      </section>

    </div>
  );
};
