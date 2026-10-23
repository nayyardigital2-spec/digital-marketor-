import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Youtube, 
  Twitter, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';
import { PageType } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
  onBookConsultation: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onBookConsultation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    service: 'Search Engine Optimization (SEO)',
    budget: '$3,000 - $6,000 / month',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Nayyar Digital, I would like to schedule a strategy consultation for my business.");
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 sm:pt-36 pb-20">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          Direct Access To Growth Strategists
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight max-w-4xl mx-auto leading-tight">
          Let’s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">Extraordinary Together.</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Ready to scale your leads, revenue, and search authority? Send us your project details below or book an immediate strategy session.
        </p>
      </section>

      {/* Main 2-Column Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Quick Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#0b132b] text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-6">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
                Direct Communication Lines
              </span>
              <h3 className="text-2xl font-bold tracking-tight">
                Connect Directly With Our Leadership Team
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We value swift, honest communication. Inquiries received during business hours are reviewed and answered within 4 hours.
              </p>

              <div className="space-y-4 pt-2 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 text-sky-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">Official Email</span>
                    <a href="mailto:nayyardigital2@gmail.com" className="font-bold text-white hover:text-sky-400 transition-colors">
                      nayyardigital2@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 text-sky-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">Phone & VIP Client Desk</span>
                    <span className="font-bold text-white">
                      +1 (800) 492-7019
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-800">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">Instant WhatsApp Priority Desk</span>
                    <button
                      onClick={handleWhatsApp}
                      className="text-emerald-400 font-bold hover:underline inline-flex items-center gap-1"
                    >
                      Start WhatsApp Chat Now →
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 text-sky-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-xs block">Locations & Headquarters</span>
                    <span className="font-bold text-white block">
                      Nayyar Digital Growth HQ
                    </span>
                    <span className="text-slate-400 text-xs">
                      Serving Clients Worldwide (North America, UK, Europe, APAC)
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                  Follow Us Online
                </span>
                <div className="flex items-center gap-2">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors" aria-label="YouTube">
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a href="https://x.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors" aria-label="Twitter / X">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* SLA Trust Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <Clock className="w-4 h-4 text-sky-600" /> Rapid Response Guarantee
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                You will never wait days for an automated boilerplate reply. A senior strategist reads your inquiry, runs an initial domain review, and sends personalized next steps.
              </p>
            </div>
          </div>

          {/* Right Column: Full Professional Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-950">
                    Consultation Request Successfully Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-950">{formData.name}</strong>. A confirmation has been logged for <strong className="text-sky-600">{formData.service}</strong>.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-md mx-auto text-left space-y-1">
                  <p className="font-semibold text-slate-800">Next Action Steps:</p>
                  <p>• Our strategy team will review your website and competitor landscape.</p>
                  <p>• You will receive an invitation to select a convenient 30-minute video slot at <strong className="text-slate-900">{formData.email}</strong>.</p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-medium text-xs hover:bg-slate-800 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1 mb-6">
                  <h3 className="text-2xl font-bold text-slate-950">
                    Request Your Free Growth Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Please provide your business details so we can prepare high-impact insights ahead of our session.
                  </p>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Michael Harris"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="michael@yourcompany.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Velocity Media"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Website & Service Required */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Website URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://yourwebsite.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 bg-white"
                    >
                      <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Paid Advertising (Google/Meta PPC)">Paid Advertising (Google/Meta PPC)</option>
                      <option value="Content Marketing">Content Marketing</option>
                      <option value="Website Design & Development">Website Design & Development</option>
                      <option value="Branding & Visual Identity">Branding & Visual Identity</option>
                      <option value="Email Marketing & Retention">Email Marketing & Retention</option>
                      <option value="Influencer Marketing">Influencer Marketing</option>
                      <option value="AI Marketing & Automation">AI Marketing & Automation (Featured)</option>
                      <option value="Full Omni-Channel Growth Engine">Full Omni-Channel Growth Engine</option>
                    </select>
                  </div>
                </div>

                {/* Monthly Marketing Budget */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Monthly Marketing Budget *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {['$1,000 - $3,000', '$3,000 - $6,000', '$6,000 - $12,000', '$12,000+ / Custom'].map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`py-2 px-3 text-xs font-medium rounded-xl border text-center transition-all ${
                          formData.budget === b
                            ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message / Core Growth Objective *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you want to achieve, current pain points with past agencies, or specific campaign goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 bg-slate-50/50"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Strict confidentiality. Non-Disclosure Agreement on request.
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-950 text-white font-bold text-sm hover:bg-slate-800 transition-all shadow-md hover:shadow-lg disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Request Free Consultation
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
