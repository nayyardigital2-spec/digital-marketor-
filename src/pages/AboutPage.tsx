import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Target, 
  Cpu, 
  BarChart3, 
  Users, 
  Zap, 
  Award,
  CheckCircle2,
  Linkedin
} from 'lucide-react';
import { PageType } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onBookConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onBookConsultation }) => {
  const leadership = [
    {
      name: 'Sahil Nayyar',
      role: 'Founder & Head of AI Strategy',
      bio: 'Ex-growth lead with over a decade of performance marketing experience. Built automated acquisition workflows managing $10M+ in cumulative ad spend.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Elena Rostova',
      role: 'Lead SEO & Semantic Architect',
      bio: 'Specialist in programmatic topical clusters, technical crawl optimization, and enterprise link acquisition with 150+ #1 Google rankings.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Kavita Menon',
      role: 'Director of Performance Media',
      bio: 'Former senior Meta and Google Ads buyer specializing in multi-variant UGC testing, blended ROAS modeling, and high-growth e-commerce scaling.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Marcus Vance',
      role: 'Principal Full-Stack & UI/UX Engineer',
      bio: 'Crafts conversion-engineered web experiences and custom AI API integrations achieving 99+ Core Web Vitals and frictionless user funnels.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      linkedin: 'https://linkedin.com'
    }
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-20">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          The Modern Agency Alternative
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight max-w-4xl mx-auto leading-tight">
          We Replaced Bloated Agency Retainers With <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">AI-Powered Execution.</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Nayyar Digital was founded on a simple premise: traditional digital marketing agencies are slow, fragmented, and addicted to vanity metrics. We combine world-class human creative judgment with autonomous AI pipelines to drive genuine revenue growth.
        </p>
      </section>

      {/* Story & Philosophy Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm">
          <div className="space-y-6">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
              Our Agency Story
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              Built By Growth Practitioners, Not Account Managers
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              In 2026, relying on outdated spreadsheets, manual copy paste workflows, and vague "brand awareness" reports is a recipe for budget bleed.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At Nayyar Digital, every client engagement is architected as an integrated ecosystem: high-intent SEO captures organic demand, precision paid ads scale profitable customer acquisition, compelling content nurtures prospects, and intelligent AI chatbots qualify leads within seconds.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Zero Account Manager Middlemen — Direct access to lead strategists</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Real-Time Client Portals with live ROAS, CAC, and pipeline tracking</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Proprietary AI automation stack deployed directly into your business</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-square sm:aspect-4/3 bg-slate-100 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Nayyar Digital growth strategy team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-slate-950 text-white p-5 rounded-2xl border border-slate-800 shadow-xl hidden sm:block">
              <div className="text-2xl font-black text-sky-400">100+</div>
              <div className="text-xs text-slate-300">Successful Growth Sprints</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="bg-slate-50 py-20 border-y border-slate-200/80 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
              Our Operating Values
            </span>
            <h2 className="text-3xl font-extrabold text-slate-950">
              The Principles That Guide Every Campaign
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950">Data-Driven Rigor</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We make zero assumptions. Every ad creative, SEO keyword, and landing page change is backed by real customer intent metrics.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950">ROI Accountability</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                If an initiative does not directly or indirectly drive pipeline, qualified demos, or bottom-line revenue, we cut it.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950">AI-First Speed</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We leverage custom AI agents to automate tedious operational work, allowing our strategists to test 5x faster than competitors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950">Radical Clarity</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No smoke and mirrors. You get direct dashboards, raw attribution figures, and candid assessments of campaign performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
            Leadership & Growth Squad
          </span>
          <h2 className="text-3xl font-extrabold text-slate-950">
            Meet the Strategists Powering Your Growth
          </h2>
          <p className="text-sm text-slate-600">
            A seasoned team with deep domain expertise across organic search, performance ads, and modern AI automation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadership.map((member, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="aspect-square bg-slate-100 overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-950">{member.name}</h3>
                  <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-600" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <div className="text-xs font-semibold text-sky-600">{member.role}</div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0b132b] text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 border border-slate-800 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Ready To Work With A Growth Team That Actually Delivers?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Schedule a confidential 30-minute growth audit. We'll analyze your current traffic, paid ad funnels, and show you exactly where the hidden revenue lies.
          </p>
          <div className="pt-2">
            <button
              onClick={onBookConsultation}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all shadow-lg hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              Book Free Strategy Session
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
