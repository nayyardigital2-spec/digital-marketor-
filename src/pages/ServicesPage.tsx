import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  Share2, 
  Zap, 
  FileText, 
  Globe, 
  Palette, 
  Mail, 
  Users, 
  Cpu, 
  BarChart2, 
  ShieldCheck, 
  Layers 
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { PageType, ServiceItem } from '../types';

interface ServicesPageProps {
  onNavigate: (page: PageType, serviceId?: string) => void;
  onBookConsultation: (service?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onBookConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Organic Growth',
    'Brand Awareness',
    'Performance Marketing',
    'Inbound Growth',
    'Digital Assets',
    'Future Growth'
  ];

  const filteredServices = selectedCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category.toLowerCase() === selectedCategory.toLowerCase());

  const getServiceIcon = (id: string) => {
    switch(id) {
      case 'seo': return <Search className="w-6 h-6 text-sky-600" />;
      case 'social-media': return <Share2 className="w-6 h-6 text-pink-600" />;
      case 'paid-ads': return <Zap className="w-6 h-6 text-amber-500" />;
      case 'content-marketing': return <FileText className="w-6 h-6 text-emerald-600" />;
      case 'web-design-dev': return <Globe className="w-6 h-6 text-indigo-600" />;
      case 'branding': return <Palette className="w-6 h-6 text-purple-600" />;
      case 'email-marketing': return <Mail className="w-6 h-6 text-blue-600" />;
      case 'influencer-marketing': return <Users className="w-6 h-6 text-rose-500" />;
      case 'ai-marketing': return <Cpu className="w-6 h-6 text-sky-400" />;
      default: return <Sparkles className="w-6 h-6 text-sky-500" />;
    }
  };

  return (
    <div className="pt-28 sm:pt-36 pb-20">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          Full-Stack Marketing Solutions
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight max-w-4xl mx-auto leading-tight">
          Comprehensive Digital Marketing Built For <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">Compounding Growth.</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Explore our complete suite of 9 specialized digital marketing disciplines. Engineered to function seamlessly together or as standalone high-impact growth engines.
        </p>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-950 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const isAi = service.isAiFeatured;
            return (
              <div
                key={service.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                  isAi
                    ? 'bg-[#0b132b] text-white border-2 border-sky-500/60 shadow-2xl relative lg:scale-[1.02]'
                    : 'bg-white text-slate-900 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isAi
                        ? 'bg-slate-800 border border-slate-700 text-sky-400'
                        : 'bg-slate-50 border border-slate-100'
                    }`}>
                      {getServiceIcon(service.id)}
                    </div>
                    {service.badge && (
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        isAi
                          ? 'bg-sky-500 text-slate-950'
                          : 'bg-sky-50 text-sky-800 border border-sky-200'
                      }`}>
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <span className={`text-[11px] font-bold uppercase tracking-wider block ${
                    isAi ? 'text-sky-400' : 'text-slate-400'
                  }`}>
                    {service.category}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight mt-1 mb-3">
                    {service.name}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                    isAi ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {service.description}
                  </p>

                  {/* Metric Box */}
                  <div className={`p-3.5 rounded-2xl border mb-6 flex items-center justify-between ${
                    isAi
                      ? 'bg-slate-900 border-slate-800'
                      : 'bg-slate-50 border-slate-200/80'
                  }`}>
                    <span className="text-xs font-medium opacity-80">
                      {service.metricsHighlight.label}
                    </span>
                    <span className={`text-xl font-black ${
                      isAi ? 'text-sky-400' : 'text-slate-900'
                    }`}>
                      {service.metricsHighlight.stat}
                    </span>
                  </div>

                  {/* Complete List of Sub-Services */}
                  <div className="space-y-2 mb-6">
                    <span className={`text-xs font-bold uppercase tracking-wider block ${
                      isAi ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      All Included Disciplines ({service.items.length}):
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.items.map((sub, idx) => (
                        <span
                          key={idx}
                          className={`text-[11px] px-2.5 py-1 rounded-lg font-medium ${
                            isAi
                              ? 'bg-slate-800/80 text-slate-200 border border-slate-700/60'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className={`pt-6 border-t flex items-center justify-between gap-3 ${
                  isAi ? 'border-slate-800' : 'border-slate-100'
                }`}>
                  <button
                    onClick={() => {
                      onNavigate('service-detail', service.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`text-xs font-bold inline-flex items-center gap-1.5 transition-colors group ${
                      isAi ? 'text-sky-400 hover:text-sky-300' : 'text-slate-900 hover:text-sky-600'
                    }`}
                  >
                    <span>Deep Dive Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onBookConsultation(service.name)}
                    className={`text-xs px-4 py-2 rounded-xl font-bold transition-all shadow-sm ${
                      isAi
                        ? 'bg-sky-500 hover:bg-sky-400 text-slate-950'
                        : 'bg-slate-950 hover:bg-slate-800 text-white'
                    }`}
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Integration Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 border border-slate-800 shadow-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-400/20">
            <Layers className="w-3.5 h-3.5" /> Unified Omni-Channel Synergies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold max-w-2xl mx-auto">
            Not Sure Which Services Match Your Current Growth Stage?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Our senior strategists perform a complimentary digital growth diagnostic to recommend the exact channel mix that will yield the fastest ROI.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onBookConsultation('Growth Diagnostic')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all shadow-lg hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              Request Free Diagnostic Call
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
