import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  ArrowUpRight, 
  Tag, 
  BookOpen 
} from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { PageType, BlogPost } from '../types';

interface BlogPageProps {
  onNavigate: (page: PageType) => void;
  onSelectPost: (post: BlogPost) => void;
  onBookConsultation: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onNavigate,
  onSelectPost,
  onBookConsultation
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'SEO',
    'Social Media',
    'Google Ads',
    'Meta Ads',
    'AI Marketing',
    'Content Marketing',
    'Branding',
    'Digital Marketing',
    'Business Growth'
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 sm:pt-36 pb-20">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          Tactical Marketing Insights
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight max-w-4xl mx-auto leading-tight">
          The Nayyar Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">Growth Journal.</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Deep-dive tutorials, algorithmic updates, performance ad breakdowns, and AI marketing workflows written by senior growth strategists.
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-xl mx-auto relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search strategies, AI workflows, SEO tactics, ad formulas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500 shadow-sm"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
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

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900">No matching articles found</h3>
            <p className="text-xs text-slate-500 mt-1">Try searching another topic or reset the category filter.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchTerm(''); }}
              className="mt-4 px-4 py-2 text-xs font-bold text-sky-600 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 shadow-sm backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 
                      onClick={() => onSelectPost(post)}
                      className="text-lg font-bold text-slate-950 group-hover:text-sky-600 transition-colors leading-snug cursor-pointer line-clamp-2"
                    >
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>

                    {/* Author Mini Bar */}
                    <div className="flex items-center gap-2.5 pt-3 border-t border-slate-100">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <div className="text-xs">
                        <span className="font-bold text-slate-900 block leading-tight">{post.author.name}</span>
                        <span className="text-[10px] text-slate-500">{post.author.role}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onSelectPost(post)}
                    className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-900 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 border border-slate-200"
                  >
                    Read Full Article <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0b132b] text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 border border-slate-800 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Never Miss An Algorithm Shift Or AI Marketing Breakthrough
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto">
            Join over 4,000+ digital leaders who read our executive growth breakdowns every Tuesday morning.
          </p>
          <div className="pt-2">
            <button
              onClick={onBookConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm transition-all"
            >
              <Sparkles className="w-4 h-4" /> Book Free Strategy Call Instead
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
