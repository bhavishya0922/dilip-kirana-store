import React, { useState } from 'react';
import { 
  Clock, 
  Plus, 
  Sun, 
  Utensils, 
  Coffee, 
  Moon, 
  Heart, 
  Sparkles,
  ArrowRight 
} from 'lucide-react';
import { EVERYDAY_MOMENTS_DATA } from '../data/everydayNeedsData';
import type { EverydayEssentialItem } from '../data/everydayNeedsData';
import { useShoppingList } from '../context/ShoppingListContext';

export const EverydayMoments: React.FC = () => {
  const [activeMomentId, setActiveMomentId] = useState<string>(EVERYDAY_MOMENTS_DATA[0].id);
  const { addItem, setIsDrawerOpen } = useShoppingList();

  const activeMoment = EVERYDAY_MOMENTS_DATA.find((m) => m.id === activeMomentId) || EVERYDAY_MOMENTS_DATA[0];

  const handleAddEssential = (item: EverydayEssentialItem) => {
    addItem(item.name, activeMoment.title, item.brand, item.qtyHint, item.mrp, item.hindiName);
  };

  const getMomentIcon = (id: string) => {
    switch (id) {
      case 'morning-breakfast': return <Sun className="w-4 h-4 text-amber-600" />;
      case 'daily-lunch-dinner': return <Utensils className="w-4 h-4 text-emerald-600" />;
      case 'evening-chai-nashta': return <Coffee className="w-4 h-4 text-orange-600" />;
      case 'home-cleaning-hygiene': return <Sparkles className="w-4 h-4 text-cyan-600" />;
      case 'puja-spiritual': return <Heart className="w-4 h-4 text-amber-600" />;
      case 'late-night-quick-fixes': return <Moon className="w-4 h-4 text-purple-600" />;
      default: return <Clock className="w-4 h-4 text-stone-600" />;
    }
  };

  return (
    <section id="daily-moments" className="py-16 sm:py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-extrabold mb-3">
            <Clock className="w-4 h-4 text-emerald-700" />
            <span>Complete Daily Living Covered</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-stone-900 tracking-tight mb-2">
            From Morning Chai to Evening Snacks
          </h2>
          <div className="text-sm font-bold text-amber-900 mb-2">
            दैनिक दिनचर्या की संपूर्ण किराना सामग्री (एमआरपी व हिंदी नाम सहित)
          </div>
          <p className="text-base text-stone-600">
            No matter the hour or the household need, <strong className="text-stone-900">Dilip Kirana Store</strong> is stocked with fresh, top-quality daily essentials for your family.
          </p>
        </div>

        {/* Horizontal Moments Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-10">
          {EVERYDAY_MOMENTS_DATA.map((moment) => {
            const isActive = moment.id === activeMomentId;
            return (
              <button
                key={moment.id}
                onClick={() => setActiveMomentId(moment.id)}
                className={`p-3.5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-stone-900 text-white border-stone-900 shadow-md scale-[1.02]'
                    : 'bg-stone-50 hover:bg-stone-100 text-stone-800 border-stone-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-white/10' : 'bg-white border border-stone-200'}`}>
                    {getMomentIcon(moment.id)}
                  </div>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-white/20 text-emerald-300' : 'bg-stone-200/80 text-stone-600'
                  }`}>
                    {moment.timeSlot.split('–')[0]}
                  </span>
                </div>
                <div className="text-xs font-bold leading-snug">
                  {moment.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Moment Spotlight Showcase Card */}
        <div className="bg-stone-50 rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Description Column */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-100 text-amber-900 border border-amber-300 mb-3">
                {activeMoment.badge}
              </div>

              <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-1">
                {activeMoment.timeSlot} • {activeMoment.timeSlotHindi}
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-stone-900 mb-1">
                {activeMoment.title}
              </h3>

              <div className="text-sm font-bold text-emerald-800 mb-4">
                {activeMoment.titleHindi}
              </div>

              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                {activeMoment.description}
              </p>

              <div className="p-4 bg-white rounded-2xl border border-stone-200 text-xs text-stone-700 font-medium">
                ✨ <strong>Kirana Tip:</strong> Click "+ Add to Parchi" to append all essential items directly to your WhatsApp grocery list!
              </div>
            </div>

            {/* Right Recommended Essentials Grid */}
            <div className="lg:col-span-7">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3 flex items-center justify-between">
                <span>Recommended Staples with MRP</span>
                <span className="text-emerald-700 font-semibold">Ready in Sanjay Nagar</span>
              </div>

              <div className="space-y-3">
                {activeMoment.essentialsList.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white rounded-xl border border-stone-200 hover:border-emerald-300 hover:bg-emerald-50/40 transition-all flex items-center justify-between gap-3 shadow-2xs group"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="w-8 h-8 rounded-lg bg-stone-100 text-stone-600 font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-bold text-stone-900 truncate">
                          {item.name}
                        </div>
                        <div className="text-xs font-semibold text-emerald-800 truncate">
                          {item.hindiName}
                        </div>
                        <div className="text-[11px] text-stone-500 flex items-center gap-2 mt-0.5">
                          <span className="font-semibold text-stone-700">{item.brand}</span>
                          <span>•</span>
                          <span>{item.qtyHint}</span>
                          <span className="font-bold text-amber-900 bg-amber-100 px-1.5 py-0.2 rounded">
                            MRP ₹{item.mrp}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleAddEssential(item)}
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1 shrink-0 shadow-2xs"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>+ Add</span>
                    </button>
                  </div>
                ))}
              </div>

              {/* View Parchi Trigger */}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                >
                  <span>Review my Kirana Parchi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
