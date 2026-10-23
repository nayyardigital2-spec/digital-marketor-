import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Youtube, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight 
} from 'lucide-react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType, serviceId?: string) => void;
  onBookConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onBookConsultation }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const navTo = (page: PageType, serviceId?: string) => {
    onNavigate(page, serviceId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b132b] text-slate-300 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative top edge highlight */}
      <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-400" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Top Newsletter Bar */}
        <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div className="space-y-1.5 text-center lg:text-left">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              Weekly Digital Insights
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Get the AI & Growth Playbook in Your Inbox
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Actionable SEO audits, algorithm updates, high-converting ad formulas, and AI workflows. Zero spam.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                You're subscribed! Welcome to the growth circle.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-96">
                <input
                  type="email"
                  required
                  placeholder="Enter your business email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-xs sm:text-sm rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm whitespace-nowrap transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  Subscribe <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Contact */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center text-slate-950 font-black text-lg shadow-md">
                ND
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">
                  NAYYAR DIGITAL
                </span>
                <p className="text-[11px] font-semibold text-sky-400 uppercase tracking-wider">
                  AI-Powered Digital Growth
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              A full-service digital marketing agency helping businesses, creators, startups and personal brands grow online through digital marketing, social media, SEO, paid advertising, content and AI-powered marketing.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:nayyardigital2@gmail.com" className="hover:text-white transition-colors">
                  nayyardigital2@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>+1 (800) 492-7019 · Direct Line & WhatsApp</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Digital Growth Headquarters · Serving Global Clients</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navTo('service-detail', 'seo')} className="text-slate-400 hover:text-white transition-colors">
                  SEO & Search Rankings
                </button>
              </li>
              <li>
                <button onClick={() => navTo('service-detail', 'social-media')} className="text-slate-400 hover:text-white transition-colors">
                  Social Media Marketing
                </button>
              </li>
              <li>
                <button onClick={() => navTo('service-detail', 'paid-ads')} className="text-slate-400 hover:text-white transition-colors">
                  Paid Advertising (PPC)
                </button>
              </li>
              <li>
                <button onClick={() => navTo('service-detail', 'content-marketing')} className="text-slate-400 hover:text-white transition-colors">
                  Content Marketing
                </button>
              </li>
              <li>
                <button onClick={() => navTo('service-detail', 'web-design-dev')} className="text-slate-400 hover:text-white transition-colors">
                  Website Development
                </button>
              </li>
              <li>
                <button onClick={() => navTo('service-detail', 'branding')} className="text-slate-400 hover:text-white transition-colors">
                  Branding & Identity
                </button>
              </li>
              <li>
                <button onClick={() => navTo('service-detail', 'ai-marketing')} className="text-sky-400 font-bold hover:text-sky-300 transition-colors flex items-center gap-1">
                  AI Marketing & Bots
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navTo('about')} className="text-slate-400 hover:text-white transition-colors">
                  About Nayyar Digital
                </button>
              </li>
              <li>
                <button onClick={() => navTo('portfolio')} className="text-slate-400 hover:text-white transition-colors">
                  Case Studies & Results
                </button>
              </li>
              <li>
                <button onClick={() => navTo('pricing')} className="text-slate-400 hover:text-white transition-colors">
                  Pricing & Retainers
                </button>
              </li>
              <li>
                <button onClick={() => navTo('blog')} className="text-slate-400 hover:text-white transition-colors">
                  Growth Blog & Guides
                </button>
              </li>
              <li>
                <button onClick={() => navTo('contact')} className="text-slate-400 hover:text-white transition-colors">
                  Contact Our Team
                </button>
              </li>
              <li>
                <button onClick={onBookConsultation} className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">
                  Get Free Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => navTo('faq')} className="text-slate-400 hover:text-white transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <a href="/robots.txt" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                  Robots.txt Protocol
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                  XML Sitemap
                </a>
              </li>
              <li>
                <button onClick={() => navTo('faq')} className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy & GDPR
                </button>
              </li>
              <li>
                <button onClick={() => navTo('faq')} className="text-slate-400 hover:text-white transition-colors">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={onBookConsultation} className="text-sky-400 hover:text-sky-300 transition-colors">
                  Free SEO & Brand Audit
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Nayyar Digital. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Data-Driven Strategy</span>
            <span>·</span>
            <span>AI-Accelerated Execution</span>
            <span>·</span>
            <span>Measurable ROI</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
