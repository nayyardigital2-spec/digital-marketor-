import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Plus, 
  HelpCircle, 
  ShieldCheck, 
  Layers 
} from 'lucide-react';
import { pricingPlans, customPlanAddons } from '../data/pricingData';
import { PageType } from '../types';

interface PricingPageProps {
  onNavigate: (page: PageType) => void;
  onBookConsultation: (plan?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate, onBookConsultation }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly'>('monthly');

  return (
    <div className="pt-28 sm:pt-36 pb-20">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          Transparent Investment Models
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight max-w-4xl mx-auto leading-tight">
          Predictable Pricing for <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">Unstoppable Growth.</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          No long-term lock-in traps. No hidden software fees. Scalable digital marketing retainers designed to deliver compounding returns from Month 1.
        </p>

        {/* Billing Cycle Toggle */}
        <div className="mt-8 inline-flex items-center p-1.5 bg-slate-100 rounded-full border border-slate-200">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              billingCycle === 'monthly'
                ? 'bg-white text-slate-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Monthly Retainer
          </button>
          <button
            onClick={() => setBillingCycle('quarterly')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              billingCycle === 'quarterly'
                ? 'bg-slate-950 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Quarterly Commitment
            <span className="text-[10px] bg-emerald-500 text-white font-black px-1.5 py-0.5 rounded-full">
              Save 15%
            </span>
          </button>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const isPopular = plan.isPopular;
            const price = billingCycle === 'quarterly' 
              ? Math.round(plan.priceMonthly * 0.85) 
              : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all ${
                  isPopular
                    ? 'bg-[#0b132b] text-white border-2 border-sky-500 shadow-2xl relative lg:-translate-y-2'
                    : 'bg-white text-slate-900 border border-slate-200/90 shadow-sm hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-black tracking-widest uppercase ${
                      isPopular ? 'text-sky-400' : 'text-slate-400'
                    }`}>
                      {plan.name}
                    </span>
                    {plan.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500 text-slate-950 shadow-sm">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className={`text-xs mb-6 font-medium ${isPopular ? 'text-slate-300' : 'text-slate-600'}`}>
                    {plan.tagline}
                  </p>

                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight">
                      ${price.toLocaleString()}
                    </span>
                    <span className={`text-xs font-semibold ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                      / month
                    </span>
                  </div>

                  <p className={`text-xs mb-6 ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                    {plan.description}
                  </p>

                  <div className={`p-3 rounded-xl mb-6 text-xs border ${
                    isPopular
                      ? 'bg-slate-900/90 border-slate-800 text-slate-300'
                      : 'bg-slate-50 border-slate-200/80 text-slate-600'
                  }`}>
                    <strong className="text-slate-950 dark:text-white block mb-0.5">Recommended For:</strong>
                    {plan.recommendedFor}
                  </div>

                  <div className={`space-y-3 pt-6 border-t ${
                    isPopular ? 'border-slate-800' : 'border-slate-100'
                  }`}>
                    <span className={`text-xs font-bold uppercase tracking-wider block ${
                      isPopular ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      What's Included:
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isPopular ? 'text-sky-400' : 'text-sky-600'
                        }`} />
                        <span className={isPopular ? 'text-slate-200' : 'text-slate-700'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-100/10">
                  <button
                    onClick={() => onBookConsultation(plan.name)}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all shadow-md ${
                      isPopular
                        ? 'bg-sky-500 hover:bg-sky-400 text-slate-950 font-black shadow-sky-500/20'
                        : 'bg-slate-950 hover:bg-slate-800 text-white'
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Custom Plans & Modular Add-Ons */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                Tailored Solutions
              </span>
              <h2 className="text-2xl font-bold text-slate-950 mt-1">
                Custom Plans & Specialized Add-Ons
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Have specific targets, international operations, or need dedicated engineering? We build custom scope proposals.
              </p>
            </div>
            <button
              onClick={() => onBookConsultation('Custom Scope Proposal')}
              className="px-6 py-3 rounded-xl bg-slate-950 text-white font-bold text-xs whitespace-nowrap hover:bg-slate-800 transition-colors shrink-0 shadow-sm"
            >
              Request Custom Quote
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {customPlanAddons.map((addon, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">{addon.name}</h4>
                  <p className="text-xs text-slate-500">{addon.description}</p>
                </div>
                <span className="text-xs font-black text-sky-700 bg-sky-100 px-2.5 py-1 rounded-lg shrink-0">
                  {addon.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQs Guarantee */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-semibold">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Month-to-Month Flexibility
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Direct Slack Channel Access
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Full Intellectual Property Ownership
          </span>
        </div>
      </section>

    </div>
  );
};
