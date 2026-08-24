import React from 'react';
import { 
  Store, 
  MapPin, 
  ShieldCheck, 
  MessageCircle, 
  Smile, 
  QrCode, 
  CheckCircle, 
  HeartHandshake,
  ArrowRight
} from 'lucide-react';
import { WHY_CHOOSE_DATA } from '../data/whyChooseUsData';
import { createWhatsAppUrl } from '../config/storeConfig';

export const WhyChooseUs: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Store': return <Store className="w-6 h-6" />;
      case 'MapPin': return <MapPin className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'MessageCircle': return <MessageCircle className="w-6 h-6" />;
      case 'Smile': return <Smile className="w-6 h-6" />;
      case 'QrCode': return <QrCode className="w-6 h-6" />;
      default: return <CheckCircle className="w-6 h-6" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-extrabold mb-3">
            <HeartHandshake className="w-4 h-4 text-emerald-700" />
            <span>Why Shop at Dilip Kirana Store?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-stone-900 tracking-tight mb-3">
            Your Trusted Sanjay Nagar Neighborhood Store
          </h2>
          <p className="text-base text-stone-600">
            We focus on honest quality, genuine product freshness, and friendly neighborhood service so you never have to travel far for your household needs.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {WHY_CHOOSE_DATA.map((pillar) => (
            <div
              key={pillar.id}
              className={`p-6 sm:p-7 rounded-2xl bg-white border ${pillar.accentBg} shadow-sm hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${pillar.iconColor}`}>
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-lg text-stone-900 mb-1 leading-snug">
                  {pillar.title}
                </h3>
                <div className="text-xs font-bold text-emerald-700 mb-3">
                  {pillar.titleHindi}
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified Neighborhood Promise</span>
              </div>
            </div>
          ))}
        </div>

        {/* Local Community Banner */}
        <div className="bg-gradient-to-r from-stone-900 via-emerald-950 to-stone-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider mb-2 inline-block">
              📍 Sanjay Nagar, Tikrapara, Raipur
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl mb-2 text-white">
              Need to check stock or reserve items?
            </h3>
            <p className="text-sm text-stone-300">
              Message us directly on WhatsApp or call our store counter. We're happy to assist with your grocery requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={createWhatsAppUrl("Hello Dilip Kirana Store, I would like to check stock for some items.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-stone-950 font-extrabold text-sm rounded-xl shadow-lg flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Store</span>
            </a>
            <a
              href="#location-hours"
              className="w-full sm:w-auto px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>View Map & Timings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
