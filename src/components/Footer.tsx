import React from 'react';
import { 
  Store, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  Navigation,
  Truck,
  UserCheck
} from 'lucide-react';
import { STORE_CONFIG, createPhoneCallUrl, createWhatsAppUrl } from '../config/storeConfig';
import { CATEGORIES_DATA } from '../data/categoriesData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Categories & Stock', href: '#categories' },
    { label: 'Kirana Parchi (List Builder)', href: '#parchi-list' },
    { label: 'Delivery Policy (₹2,999+)', href: '#delivery-policy' },
    { label: 'About Store Owner', href: '#about-owner' },
    { label: 'Why Shop With Us', href: '#why-us' },
    { label: 'Store Location & Timings', href: '#location-hours' },
    { label: 'Frequently Asked Questions', href: '#faq' },
  ];

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-24 lg:pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Column 1: Store Brand & Owner Identity (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-md">
                <Store className="w-6 h-6" />
              </div>
              <div>
                <span className="font-display font-black text-xl text-white block">
                  Dilip <span className="text-emerald-400">Kirana</span> Store
                </span>
                <span className="text-xs text-stone-400 font-semibold">
                  दिलीप किराना स्टोर • झंडा चौक, रायपुर
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-900 text-amber-300 text-xs font-bold border border-stone-800 w-fit">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Owner: Bhavishya Dewangan (भविष्य देवांगन)</span>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Your neighborhood daily grocery, snacks & general store at Jhanda Chowk, Sanjay Nagar, Tikrapara, Raipur. Offering Lay's, Kurkure, Maggi, Amul dairy, daily grains, spices, biscuits, cleaning items & household essentials.
            </p>

            {/* Quick Contact Badges */}
            <div className="flex flex-col gap-2 pt-1 text-xs">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {STORE_CONFIG.WHATSAPP_NUMBER_DISPLAY}</span>
              </a>
              <a
                href={createPhoneCallUrl()}
                className="inline-flex items-center gap-2 text-stone-300 hover:text-white font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>Calling: {STORE_CONFIG.PHONE_NUMBER_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-stone-600" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Categories (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
              Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES_DATA.slice(0, 7).map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#categories"
                    className="text-stone-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{cat.emoji}</span>
                    <span className="truncate">{cat.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Store Address & Timings (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-wider mb-1 border-l-2 border-emerald-500 pl-2.5">
              Visit Us in Raipur
            </h4>

            <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-xs">
              <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Exact Store Address</span>
              </div>
              <p className="text-stone-300 text-[11px] font-semibold leading-relaxed">
                {STORE_CONFIG.ADDRESS.fullAddress}
              </p>
              <div className="mt-2 text-[10px] text-amber-300 font-bold">
                Landmark: Near Jhanda Chowk
              </div>
            </div>

            <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-xs">
              <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                <Truck className="w-3.5 h-3.5 text-amber-400" />
                <span>Delivery Policy</span>
              </div>
              <p className="text-stone-400 text-[11px]">
                Home Delivery for orders ₹2,999+ (3+ hrs advance notice, within 5km radius).
              </p>
            </div>

            <a
              href={STORE_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions (Jhanda Chowk)</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="text-center md:text-left">
            <p>
              © {currentYear} <strong>{STORE_CONFIG.STORE_NAME}</strong>. Owned by <strong>{STORE_CONFIG.OWNER_NAME}</strong>.
            </p>
            <p className="text-[11px] text-stone-600 mt-0.5">
              House No. 41/212, Jhanda Chowk, Sanjay Nagar, Tikrapara, Raipur, Chhattisgarh 492001.
            </p>
          </div>

          <div className="flex items-center gap-4 text-stone-500 text-[11px]">
            <a href="#hero" className="hover:text-stone-300">Back to Top ↑</a>
            <span>•</span>
            <a href="#delivery-policy" className="hover:text-stone-300">Delivery Rules</a>
            <span>•</span>
            <a href="#location-hours" className="hover:text-stone-300">Location Map</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
