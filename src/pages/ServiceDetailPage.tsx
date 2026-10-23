import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Cpu, 
  Wrench, 
  ShieldCheck, 
  BarChart3, 
  Send 
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { PageType, ServiceItem } from '../types';

interface ServiceDetailPageProps {
  serviceId?: string;
  onNavigate: (page: PageType, serviceId?: string) => void;
  onBookConsultation: (service?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId = 'seo',
  onNavigate,
  onBookConsultation
}) => {
  const currentService: ServiceItem = servicesData.find(s => s.id === serviceId) || servicesData[0];

  return (
    <div className="pt-28 sm:pt-36 pb-20">
      
      {/* Top Breadcrumb & Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => onNavigate('services')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Services
        </button>
      </div>

      {/* Main Service Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className={`rounded-3xl p-8 sm:p-12 border relative overflow-hidden ${
          currentService.isAiFeatured
            ? 'bg-[#0b132b] text-white border-sky-500/50 shadow-2xl'
            : 'bg-white text-slate-900 border-slate-200/90 shadow-sm'
        }`}>
          <div className="max-w-3xl space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                currentService.isAiFeatured
                  ? 'bg-sky-500 text-slate-950'
                  : 'bg-sky-50 text-sky-800 border border-sky-200'
              }`}>
                {currentService.category}
              </span>
              {currentService.badge && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                  {currentService.badge}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              {currentService.headline}
            </h1>

            <p className={`text-base sm:text-lg leading-relaxed ${
              currentService.isAiFeatured ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {currentService.description}
            </p>

            {/* Quick Metrics */}
            <div className="pt-2 flex flex-wrap items-center gap-6">
              <div className={`p-4 rounded-2xl border ${
                currentService.isAiFeatured
                  ? 'bg-slate-900 border-slate-800'
                  : 'bg-slate-50 border-slate-200/80'
              }`}>
                <div className={`text-2xl sm:text-3xl font-black ${
                  currentService.isAiFeatured ? 'text-sky-400' : 'text-slate-950'
                }`}>
                  {currentService.metricsHighlight.stat}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {currentService.metricsHighlight.label}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => onBookConsultation(currentService.name)}
                  className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm shadow-md hover:scale-105 transition-all ${
                    currentService.isAiFeatured
                      ? 'bg-sky-500 hover:bg-sky-400 text-slate-950'
                      : 'bg-slate-950 hover:bg-slate-800 text-white'
                  }`}
                >
                  <Sparkles className="w-4 h-4" /> Book Strategy Session for {currentService.shortTag}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Grid: Sub-Disciplines & Core Deliverables */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: All Included Sub-Services */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                Full Scope Breakdown
              </span>
              <h2 className="text-xl font-extrabold text-slate-950 mt-1">
                Everything Included in {currentService.shortTag}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Zero gaps. We execute every single operational pillar required for industry leadership.
              </p>
            </div>

            <div className="space-y-2.5">
              {currentService.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
                >
                  <div className="w-6 h-6 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Tools Stack */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5" /> Professional Tools & Tech Utilized
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentService.tools.map((tool, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Execution Deliverables & Process */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                  Tangible Outcomes
                </span>
                <h2 className="text-xl font-extrabold text-slate-950 mt-1">
                  Key Strategic Deliverables
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Concrete work products you receive on a recurring basis.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentService.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2"
                  >
                    <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                      0{idx + 1}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {deliv.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {deliv.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* SLA & Reporting Guarantee Box */}
            <div className="bg-gradient-to-br from-slate-900 to-[#0b132b] text-white rounded-3xl p-7 border border-slate-800 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" /> The Nayyar Digital Quality Standard
              </div>
              <h3 className="text-lg font-bold">
                100% Transparent Attribution & Weekly Check-Ins
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                You never wonder what our team is working on. Every {currentService.shortTag} campaign includes 24/7 client dashboard access, weekly task backlogs in Notion/Slack, and monthly strategic review calls with our principal founders.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onBookConsultation(currentService.name)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 text-slate-950 font-bold text-xs hover:bg-sky-400 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" /> Request {currentService.shortTag} Audit
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Switch Other Services Carousel/Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Explore Other Agency Capabilities</h3>
              <p className="text-xs text-slate-500">Discover complementary growth channels</p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-bold text-sky-600 hover:text-sky-700 flex items-center gap-1"
            >
              View Full Menu <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {servicesData.filter(s => s.id !== currentService.id).slice(0, 8).map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  onNavigate('service-detail', s.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-3 bg-white rounded-xl border border-slate-200 text-left hover:border-sky-500 hover:shadow-sm transition-all group"
              >
                <div className="text-xs font-bold text-slate-900 group-hover:text-sky-600 truncate">
                  {s.shortTag}
                </div>
                <div className="text-[10px] text-slate-400 truncate">
                  {s.category}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
