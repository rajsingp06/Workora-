import React from 'react';
import { 
  Code2, 
  Palette, 
  Video, 
  TrendingUp, 
  PenTool, 
  Smartphone, 
  Bot, 
  Camera, 
  ArrowRight,
  Sparkles,
  Check
} from 'lucide-react';
import { categoriesData } from '../data/categories';

const iconMap = {
  Code2,
  Palette,
  Video,
  TrendingUp,
  PenTool,
  Smartphone,
  Bot,
  Camera
};

export default function Categories({ selectedCategory, onSelectCategory }) {
  return (
    <section id="categories" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full inline-block mb-2">
              Browse Workora Market
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Popular Services
            </h2>
            <p className="mt-1 text-sm sm:text-base text-slate-600">
              Vetted professionals with transparent starting rates, fast turnarounds, and protected delivery.
            </p>
          </div>

          {selectedCategory !== 'all' && (
            <button
              onClick={() => onSelectCategory('all')}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 inline-flex items-center gap-1.5 self-start md:self-auto"
            >
              <span>Reset Filter (Show All)</span>
              <span className="w-4 h-4 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center text-[10px]">✕</span>
            </button>
          )}
        </div>

        {/* 8 Clean Fiverr-Style Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesData.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const IconComponent = iconMap[cat.icon] || Code2;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(isSelected ? 'all' : cat.id)}
                className={`group relative rounded-2xl border cursor-pointer overflow-hidden transition-all duration-200 flex flex-col justify-between bg-white text-left ${
                  isSelected
                    ? 'border-emerald-600 ring-2 ring-emerald-500/20 shadow-md'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5'
                }`}
              >
                {/* Visual Header / Cover Image */}
                <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider bg-white/90 backdrop-blur-sm text-slate-800 px-2 py-0.5 rounded-md shadow-sm">
                    {cat.badge}
                  </span>

                  {/* Title on Image */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-base font-black text-white leading-tight">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] text-slate-200 font-medium truncate mt-0.5">
                      {cat.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">
                    {cat.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cat.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Pricing and Arrow */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Starting At</span>
                      <span className="text-sm font-black text-slate-900">{cat.startingDisplay}</span>
                    </div>

                    <div className={`flex items-center gap-1 text-xs font-bold transition-all ${
                      isSelected ? 'text-emerald-700' : 'text-slate-700 group-hover:text-emerald-600 group-hover:translate-x-0.5'
                    }`}>
                      <span>{isSelected ? 'Filtered' : 'Explore'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
