import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Sparkles, 
  Bot, 
  ArrowUpRight, 
  Target, 
  BarChart3, 
  Layers
} from 'lucide-react';

export const HeroDashboard: React.FC<{ onExploreServices: () => void }> = ({ onExploreServices }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'seo' | 'ads' | 'ai'>('overview');
  const [tickerIndex, setTickerIndex] = useState(0);

  const tickerEvents = [
    { label: 'AI Lead Agent', text: 'Qualified inbound B2B lead ($18.5k contract estimate)', time: 'Just now' },
    { label: 'Google Ads PMax', text: 'Target CPA achieved at $14.20 (4.8x Target ROAS)', time: '2m ago' },
    { label: 'SEO Engine', text: '#1 Rank achieved for "Enterprise AI Marketing Agency"', time: '8m ago' },
    { label: 'Social Velocity', text: 'Instagram Reel crossed 120k organic views & 480 saves', time: '14m ago' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerEvents.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [tickerEvents.length]);

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
      {/* Decorative ambient aura behind the dashboard */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-sky-600/10 rounded-3xl blur-xl opacity-75 -z-10" />

      {/* Main Glassmorphic Dark Navy Card */}
      <div className="relative bg-[#0b132b] text-slate-100 rounded-3xl border border-slate-700/60 shadow-2xl overflow-hidden p-5 sm:p-7 backdrop-blur-xl">
        
        {/* Top Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-800/80 gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm tracking-tight text-white">Nayyar Growth Command</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1" />
                  LIVE
                </span>
              </div>
              <span className="text-[11px] text-slate-400">AI-Powered Optimization Engine</span>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-[11px] font-medium">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                activeTab === 'overview'
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('seo')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                activeTab === 'seo'
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              SEO
            </button>
            <button
              onClick={() => setActiveTab('ads')}
              className={`px-2.5 py-1 rounded-lg transition-all ${
                activeTab === 'ads'
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Paid Ads
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                activeTab === 'ai'
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              AI
            </button>
          </div>
        </div>

        {/* Primary Metric Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5">
          <div className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-3.5 space-y-1">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Avg. Client Lift</span>
              <span className="text-emerald-400 text-[11px] font-bold flex items-center">
                <ArrowUpRight className="w-3 h-3" /> +284%
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {activeTab === 'seo' ? '+340%' : activeTab === 'ads' ? '4.9x' : activeTab === 'ai' ? '75%' : '$2.4M+'}
            </div>
            <div className="text-[10px] text-slate-400">
              {activeTab === 'seo' ? 'Organic Impressions' : activeTab === 'ads' ? 'Verified ROAS' : activeTab === 'ai' ? 'Faster Lead Intake' : 'Client Pipeline Built'}
            </div>
          </div>

          <div className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-3.5 space-y-1">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Conversions</span>
              <span className="text-emerald-400 text-[11px] font-bold flex items-center">
                <ArrowUpRight className="w-3 h-3" /> +142%
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
              14,890
            </div>
            <div className="text-[10px] text-slate-400">
              Qualified Inbound Leads
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 bg-gradient-to-br from-indigo-950/60 to-sky-950/40 border border-indigo-700/40 rounded-2xl p-3.5 space-y-1">
            <div className="flex items-center justify-between text-sky-300 text-xs font-semibold">
              <span className="flex items-center gap-1">
                <Bot className="w-3 h-3 text-sky-400" /> AI Efficiency
              </span>
              <span className="text-sky-300 text-[11px]">99.4%</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
              4.2 sec
            </div>
            <div className="text-[10px] text-sky-200/70">
              Avg. Lead Routing Speed
            </div>
          </div>
        </div>

        {/* Dynamic Vector Wave Chart Area */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-sky-400" />
              <span className="font-semibold text-white">Compounding Revenue Trajectory</span>
            </div>
            <span className="text-slate-400 text-[11px]">Last 6 Months vs Target</span>
          </div>

          {/* SVG Vector Chart */}
          <div className="relative h-28 w-full pt-1">
            <svg viewBox="0 0 400 110" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>

              {/* Gridlines */}
              <line x1="0" y1="20" x2="400" y2="20" stroke="#1e293b" strokeDasharray="3 3" />
              <line x1="0" y1="55" x2="400" y2="55" stroke="#1e293b" strokeDasharray="3 3" />
              <line x1="0" y1="90" x2="400" y2="90" stroke="#1e293b" strokeDasharray="3 3" />

              {/* Baseline Comparison Dotted Line */}
              <path
                d="M 0,95 Q 100,85 200,80 T 400,68"
                fill="none"
                stroke="#475569"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Nayyar Digital Accelerated Trajectory */}
              <path
                d="M 0,90 Q 70,80 140,55 T 280,30 T 400,10 L 400,105 L 0,105 Z"
                fill="url(#areaGradient)"
              />
              <path
                d="M 0,90 Q 70,80 140,55 T 280,30 T 400,10"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Interactive Key Milestone Points */}
              <circle cx="140" cy="55" r="4" fill="#38bdf8" className="animate-pulse" />
              <circle cx="280" cy="30" r="4" fill="#6366f1" />
              <circle cx="395" cy="11" r="5" fill="#a855f7" stroke="#ffffff" strokeWidth="2" />
            </svg>

            {/* Float Badge Milestone */}
            <div className="absolute top-1 right-2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-lg">
              +420% Exponential
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-800">
            <span>Month 1: Strategy & Audit</span>
            <span>Month 3: Campaign Launch</span>
            <span>Month 6: High-Scale ROI</span>
          </div>
        </div>

        {/* Real-time Live Event Ticker */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="p-1 rounded-md bg-slate-800 text-sky-400 shrink-0">
              <Bot className="w-3.5 h-3.5" />
            </span>
            <div className="truncate">
              <span className="text-[11px] font-semibold text-slate-300 mr-1.5">
                {tickerEvents[tickerIndex].label}:
              </span>
              <span className="text-[11px] text-slate-400">
                {tickerEvents[tickerIndex].text}
              </span>
            </div>
          </div>
          <span className="text-[10px] text-slate-500 shrink-0">
            {tickerEvents[tickerIndex].time}
          </span>
        </div>

        {/* Footer Quick Action */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-400 pt-2">
          <div className="flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-sky-400" />
            <span>Real-time custom client portal included</span>
          </div>
          <button
            onClick={onExploreServices}
            className="text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1 transition-colors text-[11px]"
          >
            Explore Capabilities <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </div>
  );
};
