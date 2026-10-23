import React, { useEffect, useState, useRef } from 'react';
import { Layers, Rocket, ShieldCheck, Clock } from 'lucide-react';

interface StatItemProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  duration?: number;
}

const StatCounterItem: React.FC<StatItemProps> = ({
  end,
  suffix = '',
  prefix = '',
  label,
  sublabel,
  icon,
  duration = 2000
}) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo easing
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <div 
      ref={elementRef}
      className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-all group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 rounded-xl bg-slate-50 text-slate-800 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all">
          {icon}
        </div>
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Verified
        </span>
      </div>
      <div className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
        {prefix}{count}{suffix}
      </div>
      <div className="text-base font-bold text-slate-800 mt-1">
        {label}
      </div>
      <div className="text-xs text-slate-500 mt-0.5">
        {sublabel}
      </div>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
            Measurable Scale & Impact
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Numbers That Validate Our Digital Growth Engine
          </h2>
          <p className="text-sm text-slate-600">
            Consistent execution, proprietary frameworks, and relentless focus on measurable client ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCounterItem
            end={10}
            suffix="+"
            label="Digital Marketing Services"
            sublabel="Full-spectrum integrated agency capabilities"
            icon={<Layers className="w-6 h-6" />}
          />
          <StatCounterItem
            end={100}
            suffix="+"
            label="Projects & Campaigns"
            sublabel="High-performing campaigns launched across industries"
            icon={<Rocket className="w-6 h-6" />}
          />
          <StatCounterItem
            end={50}
            suffix="+"
            label="Brands Supported"
            sublabel="Startups, scaleups, creators & global enterprises"
            icon={<ShieldCheck className="w-6 h-6" />}
          />
          <StatCounterItem
            end={24}
            suffix="/7"
            label="Digital Growth Mindset"
            sublabel="Always-on optimization & real-time monitoring"
            icon={<Clock className="w-6 h-6" />}
          />
        </div>
      </div>
    </section>
  );
};
