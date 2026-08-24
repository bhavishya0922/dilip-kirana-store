import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  UserCheck
} from 'lucide-react';
import { STORE_CONFIG, createPhoneCallUrl, createWhatsAppUrl } from '../config/storeConfig';

export const AboutOwnerSection: React.FC = () => {
  return (
    <section id="about-owner" className="py-16 sm:py-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Left Column: Owner & Store Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 via-emerald-950 to-stone-950 text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-400 text-stone-950 mb-6 shadow-sm">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Store Owner & Management</span>
                </div>

                <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-2 leading-tight">
                  {STORE_CONFIG.OWNER_NAME}
                </h3>
                <div className="text-sm font-bold text-emerald-300 mb-6">
                  {STORE_CONFIG.OWNER_NAME_HINDI} • {STORE_CONFIG.STORE_NAME}
                </div>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6">
                  "Welcome to Dilip Kirana Store. As a local neighborhood business in Sanjay Nagar, our priority is to ensure every family gets 100% genuine groceries, fresh daily dairy, and honest service right at Jhanda Chowk."
                </p>

                <div className="space-y-2.5 pt-4 border-t border-emerald-800/80 text-xs text-stone-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Location:</strong> H.No. 41/212, Jhanda Chowk, Sanjay Nagar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Direct Calling:</strong> {STORE_CONFIG.PHONE_NUMBER_DISPLAY}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>WhatsApp:</strong> {STORE_CONFIG.WHATSAPP_NUMBER_DISPLAY}</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-8 flex gap-3">
                <a
                  href={createWhatsAppUrl(`Hello Bhavishya ji, I would like to enquire about grocery items at your Sanjay Nagar store.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Bhavishya ji</span>
                </a>
              </div>
            </div>

            {/* Right Column: Why Sanjay Nagar Families Trust Us */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-700 uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Neighborhood Values & Trust</span>
                </div>

                <h4 className="font-display font-extrabold text-2xl text-stone-900 mb-4">
                  Serving Sanjay Nagar & Tikrapara with Care
                </h4>

                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  At <strong>Dilip Kirana Store</strong>, we believe local commerce is built on relationships. Whether you need a quick pack of Lay's, fresh morning Amul milk, spices for dinner, or want to send your monthly ration list on WhatsApp — you're always greeted with warmth.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-sm text-stone-900 mb-1">
                      ✅ 100% Genuine Products
                    </div>
                    <div className="text-xs text-stone-500">
                      Sourced only from authorized distributors of Amul, Tata, Aashirvaad, PepsiCo & Nestle.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-sm text-stone-900 mb-1">
                      📍 Jhanda Chowk Landmark
                    </div>
                    <div className="text-xs text-stone-500">
                      Conveniently located at House No. 41/212 with easy parking for 2-wheelers and quick shopping.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-sm text-stone-900 mb-1">
                      ⚡ Quick Parchi Packing
                    </div>
                    <div className="text-xs text-stone-500">
                      Send your list on WhatsApp and pick it up ready in 15 minutes with zero waiting time.
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <div className="font-bold text-sm text-stone-900 mb-1">
                      🚚 Bulk Delivery Available
                    </div>
                    <div className="text-xs text-stone-500">
                      Home delivery for orders ₹2,999+ within 5km radius with 3+ hours advance notice.
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
                <span>📍 House No. 41/212, Jhanda Chowk, Sanjay Nagar, Tikrapara, Raipur</span>
                <a
                  href={createPhoneCallUrl()}
                  className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: {STORE_CONFIG.PHONE_NUMBER_DISPLAY}</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
