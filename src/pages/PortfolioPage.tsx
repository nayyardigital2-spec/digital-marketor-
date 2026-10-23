import React, { useState } from 'react';
import { Sparkles, ArrowRight, ArrowUpRight, BarChart3, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { PageType, CaseStudy } from '../types';

interface PortfolioPageProps {
  onNavigate: (page: PageType) => void;
  onBookConsultation: () => void;
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigate,
  onBookConsultation,
  onSelectCaseStudy
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'SEO', 'Social Media', 'Ads', 'Web', 'Branding', 'AI'];

  const filteredStudies = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter(s => s.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="pt-28 sm:pt-36 pb-20">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          Verified Client Success Stories
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight max-w-4xl mx-auto leading-tight">
          Real Strategies. <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">Real Growth.</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Deep-dive case studies showcasing how Nayyar Digital helped ambitious startups, creators, and brands unlock massive compounding value across SEO, Paid Ads, Social, and AI Automation.
        </p>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-slate-950 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-slate-100">
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

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="font-bold text-slate-900">{study.client}</span>
                    <span>{study.industry}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-950 group-hover:text-sky-600 transition-colors leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {study.summary}
                  </p>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                    {study.results.map((res, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="text-lg font-black text-slate-950">
                          {res.value}
                        </div>
                        <div className="text-[10px] text-slate-500 truncate">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Services Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {study.servicesProvided.map((svc, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded font-medium">
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectCaseStudy(study)}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0b132b] text-white rounded-3xl p-8 sm:p-12 text-center space-y-5 border border-slate-800 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Ready To Become Our Next Case Study?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Book a 30-minute discovery consultation. We'll map out a customized digital growth plan for your business.
          </p>
          <div className="pt-2">
            <button
              onClick={onBookConsultation}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all shadow-lg hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              Book Free Strategy Call
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
