import React from 'react';
import { 
  Code2, 
  Layout, 
  Palette, 
  PenTool, 
  TrendingUp, 
  Video, 
  Smartphone, 
  Bot, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { categoriesData } from '../data/categories';

// Map icon string name to component
const iconMap = {
  Code2,
  Layout,
  Palette,
  PenTool,
  TrendingUp,
  Video,
  Smartphone,
  Bot
};

export default function Categories({ selectedCategory, onSelectCategory }) {
  return (
    <section id="popular-categories" className="py-20 md:py-28 bg-[#FAFAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/60 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Explore Disciplines
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Popular Categories
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Hand-picked verified specialists ready to execute on your next critical milestone.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400">
              Click any category to filter featured talent
            </span>
          </div>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesData.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Code2;
            const isSelected = selectedCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id === selectedCategory ? 'all' : cat.id)}
                className={`group relative bg-white p-6 rounded-2xl border transition-all duration-200 cursor-pointer text-left flex flex-col justify-between ${
                  isSelected
                    ? 'border-brand-600 ring-2 ring-brand-500/20 shadow-soft-lg bg-brand-50/20'
                    : 'border-slate-200/90 hover:border-brand-400 hover:shadow-soft-lg hover:-translate-y-1'
                }`}
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-brand-600 text-white'
                          : 'bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                        isSelected
                          ? 'bg-brand-600 text-white'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-brand-50 group-hover:text-brand-700'
                      }`}
                    >
                      {cat.badge}
                    </span>
                  </div>

                  {/* Title & Count */}
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-brand-600 transition-colors mb-1.5 flex items-center justify-between">
                    <span>{cat.title}</span>
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {cat.description}
                  </p>

                  {/* Sub-skills chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cat.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Metrics & Interactive Arrow */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-800">{cat.count}</span>
                    <span className="text-slate-400 ml-1">talents</span>
                  </div>
                  <div className="flex items-center gap-1 font-bold text-brand-600 group-hover:translate-x-1 transition-transform">
                    <span>{isSelected ? 'Active' : 'Explore'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reset filter pill if one is active */}
        {selectedCategory !== 'all' && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => onSelectCategory('all')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors shadow-soft"
            >
              <span>Showing filtered category. Click to show all freelancers</span>
              <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">✕</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
