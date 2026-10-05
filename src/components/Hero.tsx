import React from 'react';
import { 
  ShoppingBag, 
  MapPin, 
  Clock, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Plus,
  Truck,
  UserCheck
} from 'lucide-react';
import { STORE_CONFIG, getStoreLiveStatus } from '../config/storeConfig';
import { useShoppingList } from '../context/ShoppingListContext';

export const Hero: React.FC = () => {
  const status = getStoreLiveStatus();
  const { addItem } = useShoppingList();

  const heroQuickItems = [
    { name: "Lay's Magic Masala Potato Chips", hindiName: "लेज़ मैजिक मसाला चिप्स", category: "Snacks", brand: "Lay's", unit: "₹20 Pack", mrp: 20, tag: "Hot Pick" },
    { name: "Kurkure Masala Munch Corn Curls", hindiName: "कुरकुरे मसाला मंच", category: "Snacks", brand: "Kurkure", unit: "₹20 Pack", mrp: 20, tag: "Popular" },
    { name: "Nestle Maggi 2-Min (4-Pack)", hindiName: "नेस्ले मैगी (4-पैक)", category: "Instant Food", brand: "Maggi", unit: "4-Pack", mrp: 56, tag: "Bestseller" },
    { name: "Amul Gold Fresh Milk (1L)", hindiName: "अमूल गोल्ड दूध (1L)", category: "Dairy", brand: "Amul", unit: "1 Litre", mrp: 66, tag: "Fresh Daily" },
    { name: "Aashirvaad Chakki Atta (5kg)", hindiName: "आशीर्वाद चक्की आटा (5kg)", category: "Staples", brand: "Aashirvaad", unit: "5 kg Bag", mrp: 215, tag: "Daily Essential" },
  ];

  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-16 lg:py-20 kirana-pattern border-b border-stone-200/80">
      {/* Background Decorative Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-emerald-200/40 via-amber-200/30 to-emerald-100/20 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Compelling Sales Copy & Location */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-950 border border-emerald-300 shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                Jhanda Chowk, Sanjay Nagar (H.No. 41/212)
              </span>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-xs ${status.badgeColor}`}>
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                {status.statusText}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                <UserCheck className="w-3 h-3 text-amber-700" />
                Owner: Bhavishya Dewangan
              </span>
            </div>

            {/* Main Brand Title & Value Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-stone-900 leading-[1.12] tracking-tight mb-3">
              Your Everyday Essentials,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-800">
                All in One Place.
              </span>
            </h1>

            {/* Hindi Tagline */}
            <div className="mb-4">
              <p className="text-sm sm:text-base font-bold text-amber-900 bg-amber-100/70 border border-amber-300/80 px-3.5 py-1.5 rounded-lg inline-block">
                {STORE_CONFIG.TAGLINE_HINDI}
              </p>
            </div>

            {/* Delivery & In-store Clarification Note */}
            <p className="text-base text-stone-600 leading-relaxed mb-6 max-w-2xl">
              Lay's, Kurkure, Maggi, fresh Amul dairy, chakki atta, spices, biscuits & household essentials at <strong className="text-stone-900">Dilip Kirana Store</strong>. Visit us at <strong>Jhanda Chowk</strong> or send your list on WhatsApp for counter pickup!
            </p>

            {/* Clear Service Policy Pill */}
            <div className="mb-8 p-3.5 bg-white rounded-2xl border border-stone-200/90 shadow-2xs w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-950 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>🏪 In-Store Walk-in & Counter Pickup (All Orders)</span>
              </div>
              <div className="flex items-center gap-2 text-amber-950 font-bold">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>🚚 Home Delivery for Orders ₹2,999+ (3+ Hrs Notice / 5km)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              
              {/* Primary CTA: Browse Categories */}
              <a
                href="#categories"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-base shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/35 transition-all duration-200 group"
              >
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Check Available Stock</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA: Quick WhatsApp Parchi List */}
              <a
                href="#parchi-list"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-stone-950 font-bold text-base shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200"
              >
                <Zap className="w-5 h-5 text-stone-950" />
                <span>Make WhatsApp Grocery List</span>
              </a>

              {/* Direction Link */}
              <a
                href={STORE_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-stone-800 font-bold text-sm border border-stone-300 shadow-sm transition-colors"
              >
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Jhanda Chowk Map</span>
              </a>
            </div>

            {/* Quick Highlights Strip */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-600 pt-4 border-t border-stone-200/80 w-full">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Open <strong className="text-stone-800">7:00 AM – 10:00 PM</strong> (All 7 Days)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Managed by Bhavishya Dewangan (8602777588)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Fast Pick Grocery Showcase */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-3xl blur-md opacity-25" />

              <div className="relative bg-white rounded-2xl shadow-xl border border-stone-200/90 p-5 sm:p-6">
                
                {/* Showcase Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-stone-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-stone-900 text-sm sm:text-base leading-tight">
                        Popular Neighborhood Picks
                      </h3>
                      <p className="text-xs text-stone-500 font-medium">Ready in store at Jhanda Chowk</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded bg-emerald-100 text-emerald-900 border border-emerald-200">
                    In Stock
                  </span>
                </div>

                {/* Quick Add Essentials List */}
                <div className="py-3.5 space-y-2.5">
                  {heroQuickItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center justify-between p-2.5 rounded-xl bg-stone-50 hover:bg-emerald-50/70 border border-stone-200/80 hover:border-emerald-300 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-xs font-bold text-stone-700 group-hover:text-emerald-700 shadow-2xs shrink-0">
                          {idx + 1}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-stone-900 group-hover:text-emerald-950 truncate">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-emerald-800 font-semibold truncate">
                            {item.hindiName}
                          </div>
                          <div className="flex items-center gap-2 text-[10px] text-stone-500 mt-0.5">
                            <span className="font-bold text-amber-900 bg-amber-100 px-1 rounded">
                              MRP ₹{item.mrp}
                            </span>
                            <span>•</span>
                            <span>{item.brand}</span>
                          </div>
                        </div>
                      </div>

                      {/* Quick Add Button */}
                      <button
                        onClick={() => addItem(item.name, item.category, item.brand, item.unit, item.mrp, item.hindiName)}
                        className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-white hover:bg-emerald-600 text-stone-700 hover:text-white border border-stone-300 hover:border-emerald-600 transition-colors shadow-2xs shrink-0"
                        title="Add to grocery list"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  ))}
                </div>

                {/* Direct Action Inside Hero Card */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
                  <span className="text-xs text-stone-600 font-medium">
                    ✨ Add items to your <strong className="text-stone-900">WhatsApp Parchi</strong>
                  </span>
                  <a
                    href="#parchi-list"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-colors"
                  >
                    <span>Open Parchi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* 4 Trust Highlights Strip */}
        <div className="mt-12 pt-8 border-t border-stone-200 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 border border-stone-200/80 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-stone-900">Jhanda Chowk, H.No. 41/212</div>
              <div className="text-[11px] text-stone-500">Sanjay Nagar, Tikrapara</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 border border-stone-200/80 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-stone-900">WhatsApp 8602777588</div>
              <div className="text-[11px] text-stone-500">Instant stock inquiry & parchi</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 border border-stone-200/80 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-stone-900">Bulk Delivery ₹2,999+</div>
              <div className="text-[11px] text-stone-500">3+ hrs advance | Under 5km</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 border border-stone-200/80 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-stone-900">Owner: Bhavishya Dewangan</div>
              <div className="text-[11px] text-stone-500">Friendly neighborhood care</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
