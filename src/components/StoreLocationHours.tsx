import React from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Navigation, 
  ExternalLink,
  Truck
} from 'lucide-react';
import { STORE_CONFIG, getStoreLiveStatus, createPhoneCallUrl } from '../config/storeConfig';

export const StoreLocationHours: React.FC = () => {
  const status = getStoreLiveStatus();

  return (
    <section id="location-hours" className="py-16 sm:py-20 bg-stone-100/70 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-extrabold mb-3">
            <MapPin className="w-4 h-4 text-emerald-700" />
            <span>Exact Store Location & Timings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-stone-900 tracking-tight mb-3">
            Visit Dilip Kirana Store at Jhanda Chowk
          </h2>
          <p className="text-base text-stone-600">
            Conveniently situated at <strong className="text-stone-900">House No. 41/212, Near Jhanda Chowk, Sanjay Nagar</strong>, Tikrapara, Raipur. Owned and managed by Bhavishya Dewangan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, Hours & Payment Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Address Card */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/90 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-lg text-stone-900 leading-tight">
                    Store Address & Landmark
                  </h3>
                  <p className="text-xs text-stone-500 font-medium">Owner: {STORE_CONFIG.OWNER_NAME}</p>
                </div>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 mb-5">
                <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">
                  Exact Postal Address
                </div>
                <div className="text-sm font-bold text-stone-900 leading-snug">
                  {STORE_CONFIG.STORE_NAME} ({STORE_CONFIG.HINDI_NAME})
                </div>
                <div className="text-xs text-stone-700 mt-1 font-semibold leading-relaxed">
                  {STORE_CONFIG.ADDRESS.fullAddress}
                </div>
                <div className="mt-2.5 text-xs text-emerald-900 font-bold bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200 flex items-center gap-1.5">
                  <span>🚩</span>
                  <span>Landmark: {STORE_CONFIG.ADDRESS.landmark}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={STORE_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-extrabold shadow-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GPS Directions</span>
                </a>
                <a
                  href={createPhoneCallUrl()}
                  className="px-4 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-bold border border-stone-300 flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-700" />
                  <span>Call: 8602777588</span>
                </a>
              </div>
            </div>

            {/* Timings Card */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-stone-200/90 shadow-sm">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-stone-900 leading-tight">
                      Opening Hours
                    </h3>
                    <p className="text-xs text-stone-500 font-medium">Open All 7 Days (No Off)</p>
                  </div>
                </div>

                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${status.badgeColor}`}>
                  {status.statusText}
                </span>
              </div>

              <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl mb-4 text-xs text-amber-900 font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                <span>{STORE_CONFIG.STORE_HOURS.allDays}: {STORE_CONFIG.STORE_HOURS.display}</span>
              </div>

              {/* Day Schedule */}
              <div className="space-y-1.5 text-xs">
                {Object.entries(STORE_CONFIG.STORE_HOURS.schedule).map(([day, time]) => (
                  <div
                    key={day}
                    className="flex items-center justify-between py-1.5 border-b border-stone-100 text-stone-700"
                  >
                    <span className="font-semibold">{day}</span>
                    <span className="font-bold text-stone-900">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Terms Summary Card */}
            <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-extrabold text-amber-900 uppercase tracking-wider mb-2">
                <Truck className="w-4 h-4 text-amber-700" />
                <span>Home Delivery Criteria</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Home delivery is offered strictly for <strong>orders ₹2,999+</strong> with <strong>3+ hours advance notice</strong> and within a <strong>5 km radius</strong> of Jhanda Chowk. For all other order sizes, please visit or pick up at store.
              </p>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Frame */}
          <div className="lg:col-span-7">
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/90 shadow-sm flex flex-col gap-4">
              
              {/* Map Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-700">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Jhanda Chowk, Sanjay Nagar, Raipur Map</span>
                </div>
                <a
                  href={STORE_CONFIG.GOOGLE_MAPS_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded Map */}
              <div className="w-full h-[400px] sm:h-[460px] rounded-xl overflow-hidden border border-stone-200 bg-stone-200 relative">
                <iframe
                  title="Dilip Kirana Store Location Map"
                  src={STORE_CONFIG.GOOGLE_MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Map Helper Bar */}
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-emerald-950 text-center sm:text-left font-medium">
                  📍 Located right at <strong>Jhanda Chowk (H.No. 41/212)</strong> with easy 2-wheel parking.
                </div>
                <a
                  href={STORE_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shadow-xs whitespace-nowrap"
                >
                  Start GPS Navigation
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
