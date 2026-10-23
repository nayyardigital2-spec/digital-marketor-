import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, X, Send } from 'lucide-react';

export const WhatsAppAndScrollWidgets: React.FC<{ onBookConsultation: () => void }> = ({
  onBookConsultation
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showChatPopup, setShowChatPopup] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent("Hello Nayyar Digital, I would like to learn more about your digital marketing and AI growth services.");
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Floating Action Container */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        
        {/* Chat Mini Popup Bubble */}
        {showChatPopup && (
          <div className="pointer-events-auto bg-white rounded-2xl p-4 shadow-2xl border border-slate-200/90 w-72 mb-1 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-800">Growth Advisor Online</span>
              </div>
              <button
                onClick={() => setShowChatPopup(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
                aria-label="Close chat bubble"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs text-slate-600 my-2.5 leading-relaxed">
              👋 Have questions about scaling your business? Chat with our senior strategist via WhatsApp or book a free discovery session.
            </p>
            <div className="space-y-2 pt-1">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" /> Open WhatsApp Chat
              </button>
              <button
                onClick={() => {
                  setShowChatPopup(false);
                  onBookConsultation();
                }}
                className="w-full flex items-center justify-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
              >
                <Send className="w-3 h-3 text-sky-600" /> Book Free Strategy Call
              </button>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2 pointer-events-auto">
          {/* WhatsApp Primary Trigger */}
          <button
            onClick={() => setShowChatPopup(!showChatPopup)}
            className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-400/30"
            aria-label="Chat on WhatsApp"
            title="Chat with Nayyar Digital on WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-sky-400 border-2 border-white rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-sky-400 border-2 border-white rounded-full" />
          </button>

          {/* Scroll To Top Button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-900/90 hover:bg-slate-950 text-white shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm border border-slate-700/50 hover:-translate-y-0.5"
              aria-label="Scroll to top of page"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};
