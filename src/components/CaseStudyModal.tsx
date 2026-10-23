import React from 'react';
import { X, ArrowRight, CheckCircle, Quote, BarChart2 } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onBookConsultation
}) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-sky-100 text-sky-800">
              {caseStudy.category} Case Study
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Client: {caseStudy.client}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {caseStudy.industry}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              {caseStudy.title}
            </h2>
          </div>

          {/* Featured Image */}
          <div className="relative rounded-xl overflow-hidden aspect-video max-h-72 w-full bg-slate-100">
            <img 
              src={caseStudy.image} 
              alt={caseStudy.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              {caseStudy.servicesProvided.map((service, idx) => (
                <span key={idx} className="text-xs bg-slate-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md">
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Results Grid */}
          <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-4">
              <BarChart2 className="w-4 h-4" /> Verified Performance Results
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {caseStudy.results.map((res, i) => (
                <div key={i} className="p-3 bg-slate-800/80 rounded-lg border border-slate-700">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {res.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-xl space-y-2">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                The Challenge
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="bg-sky-50/50 border border-sky-100 p-5 rounded-xl space-y-2">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                The Nayyar Digital Strategy
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Testimonial Quote */}
          {caseStudy.testimonial && (
            <div className="p-5 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl relative">
              <Quote className="w-8 h-8 text-sky-300 absolute top-4 right-4 opacity-50" />
              <p className="italic text-slate-700 text-sm leading-relaxed mb-3">
                "{caseStudy.testimonial.quote}"
              </p>
              <div className="flex items-center gap-2">
                <div className="font-semibold text-slate-900 text-xs">
                  {caseStudy.testimonial.author}
                </div>
                <span className="text-slate-300">·</span>
                <div className="text-slate-500 text-xs">
                  {caseStudy.testimonial.role}
                </div>
              </div>
            </div>
          )}

          {/* Action CTA */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              Want similar compounding results for your brand?
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBookConsultation();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-all shadow-sm"
              >
                Get Similar Results <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
