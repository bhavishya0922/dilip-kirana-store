import React from 'react';
import { 
  Phone, 
  ArrowRight,
  Zap
} from 'lucide-react';
import { STORE_CONFIG, createPhoneCallUrl } from '../config/storeConfig';

export const HowToOrder: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-extrabold mb-3">
            <Zap className="w-4 h-4 text-amber-700" />
            <span>Simple & Fast Shopping</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-stone-900 tracking-tight mb-3">
            3 Convenient Ways to Shop
          </h2>
          <p className="text-base text-stone-600">
            Choose the method that works best for your daily schedule and household routine.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Method 1: Walk-in */}
          <div className="p-6 sm:p-7 rounded-2xl bg-stone-50 border border-stone-200 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-emerald-300 hover:shadow-card-hover transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100/50 rounded-bl-full -z-0" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg mb-5 shadow-md">
                1
              </div>

              <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                Direct In-Person Shopping
              </div>
              <h3 className="font-display font-extrabold text-xl text-stone-900 mb-2">
                Visit Sanjay Nagar Store
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                Walk in anytime between <strong>7:00 AM and 10:00 PM</strong>. Browse our organized shelves, handpick fresh dairy, daily atta, spices and household snacks with friendly service.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-stone-200">
              <a
                href={STORE_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
              >
                <span>Get Directions to Store</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Method 2: WhatsApp Parchi */}
          <div className="p-6 sm:p-7 rounded-2xl bg-emerald-50/70 border-2 border-emerald-300 shadow-md flex flex-col justify-between relative overflow-hidden group hover:shadow-card-hover transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-200/50 rounded-bl-full -z-0" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-lg mb-5 shadow-md">
                2
              </div>

              <div className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-1">
                Zero Waiting Time
              </div>
              <h3 className="font-display font-extrabold text-xl text-emerald-950 mb-2">
                Send WhatsApp Grocery List
              </h3>

              <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed mb-6">
                Use our built-in <strong>Kirana Parchi</strong> tool or send a handwritten list on WhatsApp. We pack your items carefully in advance for express counter pickup.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-emerald-200">
              <a
                href="#parchi-list"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-800 hover:text-emerald-950"
              >
                <span>Open Digital Parchi Builder</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Method 3: Quick Phone Call */}
          <div className="p-6 sm:p-7 rounded-2xl bg-stone-50 border border-stone-200 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-amber-300 hover:shadow-card-hover transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100/50 rounded-bl-full -z-0" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold text-lg mb-5 shadow-md">
                3
              </div>

              <div className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1">
                Instant Confirmation
              </div>
              <h3 className="font-display font-extrabold text-xl text-stone-900 mb-2">
                Call Store Counter
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                Have a specific requirement or want to check if a particular brand or large pack is in stock? Call us directly for immediate neighborhood assistance.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-stone-200">
              <a
                href={createPhoneCallUrl()}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 hover:text-amber-950"
              >
                <Phone className="w-3.5 h-3.5 text-amber-700" />
                <span>Call Dilip Kirana Store</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
