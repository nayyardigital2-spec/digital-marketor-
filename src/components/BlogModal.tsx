import React from 'react';
import { X, Calendar, Clock, Tag, Share2, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({
  post,
  onClose,
  onBookConsultation
}) => {
  if (!post) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

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
              {post.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
              title="Share article"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            {post.title}
          </h1>

          {/* Author & Meta */}
          <div className="flex items-center justify-between border-y border-slate-100 py-3">
            <div className="flex items-center gap-3">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-100"
              />
              <div>
                <div className="text-xs font-bold text-slate-900">{post.author.name}</div>
                <div className="text-[11px] text-slate-500">{post.author.role}</div>
              </div>
            </div>
            <div className="text-xs text-slate-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </div>
          </div>

          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden aspect-video max-h-72 w-full bg-slate-100">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Summary Callout */}
          <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-100 text-slate-700 text-sm italic font-medium leading-relaxed">
            "{post.summary}"
          </div>

          {/* Formatted Content */}
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-sm sm:text-base leading-relaxed">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-lg font-bold text-slate-900 pt-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').map((line) => line.replace('- ', ''));
                return (
                  <ul key={index} className="list-disc pl-5 space-y-1 text-slate-600">
                    {items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-slate-600">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100">
            <Tag className="w-3.5 h-3.5 text-slate-400 mr-1" />
            {post.tags.map((tag, idx) => (
              <span key={idx} className="text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md">
                #{tag}
              </span>
            ))}
          </div>

          {/* Next Steps CTA */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-sm font-bold">Ready to apply this to your business?</div>
              <p className="text-xs text-slate-300">
                Book a 1-on-1 discovery session with the Nayyar Digital growth team.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onBookConsultation();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-colors whitespace-nowrap shadow-md"
            >
              Get Free Consultation <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
