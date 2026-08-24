import React from 'react';
import { 
  Truck, 
  Store, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  MessageCircle,
  ShoppingBag
} from 'lucide-react';
import { createWhatsAppUrl } from '../config/storeConfig';

export const DeliveryPolicySection: React.FC = () => {
  return (
    <section id="delivery-policy" className="py-16 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-extrabold mb-3">
            <Truck className="w-4 h-4 text-emerald-700" />
            <span>Store Order & Delivery Guidelines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-stone-900 tracking-tight mb-3">
            How Shopping & Delivery Works at Dilip Kirana
          </h2>
          <p className="text-base text-stone-600">
            Transparent, simple guidelines so you know how to get your household groceries quickly.
          </p>
        </div>

        {/* 2 Primary Columns: In-Store Pickup vs Bulk Delivery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          
          {/* Box 1: In-Store Walk-in & Express Counter Pickup (MAIN FOCUS) */}
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-stone-50 border-2 border-emerald-300 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/60 rounded-bl-full -z-0" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-600 text-white shadow-sm mb-4">
                <Store className="w-3.5 h-3.5" />
                <span>PRIMARY SERVICE • NO MINIMUM ORDER</span>
              </div>

              <h3 className="text-2xl font-display font-extrabold text-stone-900 mb-2">
                In-Store Shopping & Express Counter Pickup
              </h3>

              <p className="text-sm text-stone-600 mb-6 leading-relaxed">
                Walk into our store at <strong>Jhanda Chowk, Sanjay Nagar (H.No. 41/212)</strong> or send your grocery list (parchi) on WhatsApp in advance. We pack your order so you can pick it up with <strong>zero waiting time</strong>.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>No Minimum Order:</strong> From a ₹5 pack of Lay's to daily ₹200 dairy, all sizes welcome.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Check Stock Instantly:</strong> WhatsApp us before visiting to confirm brand availability.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Express Counter Packing:</strong> Bag packed & ready in 15 minutes.</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href="#parchi-list"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Create Pickup Parchi</span>
              </a>
              <span className="text-xs text-stone-500 font-semibold">
                Open 7:00 AM – 10:00 PM Daily
              </span>
            </div>
          </div>

          {/* Box 2: Scheduled Home Delivery (CONDITIONAL BULK ORDERS) */}
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-50 via-white to-stone-50 border-2 border-amber-300 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/60 rounded-bl-full -z-0" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500 text-stone-950 shadow-sm mb-4">
                <Truck className="w-3.5 h-3.5" />
                <span>HOME DELIVERY TERMS</span>
              </div>

              <h3 className="text-2xl font-display font-extrabold text-stone-900 mb-2">
                Home Delivery for Bulk / Monthly Ration (₹2,999+)
              </h3>

              <p className="text-sm text-stone-600 mb-6 leading-relaxed">
                We do <strong>not</strong> offer regular instant delivery. Home delivery is provided exclusively for large grocery & monthly ration orders under specific scheduled conditions.
              </p>

              {/* Strict Delivery Conditions List */}
              <div className="space-y-3.5 mb-6">
                <div className="p-3 bg-white rounded-xl border border-amber-200 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-black text-xs flex items-center justify-center shrink-0">
                    ₹
                  </div>
                  <div className="text-xs text-stone-700">
                    <strong className="text-stone-900">Minimum Order Value: ₹2,999 or above</strong>
                    <div className="text-stone-500 mt-0.5">Delivery is not available for small day-to-day items (please visit store or pick up).</div>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-amber-200 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-stone-700">
                    <strong className="text-stone-900">3+ Hours Advance Notice Required</strong>
                    <div className="text-stone-500 mt-0.5">Orders must be shared at least 3 hours ahead to allow careful packing and scheduled dispatch.</div>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-amber-200 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-stone-700">
                    <strong className="text-stone-900">Within 5 km Radius Only</strong>
                    <div className="text-stone-500 mt-0.5">Delivered to Sanjay Nagar, Tikrapara, and nearby localities in Raipur within 5km.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={createWhatsAppUrl("Hello Bhavishya ji, I have a bulk/monthly grocery order above ₹2,999 and would like to enquire about scheduled home delivery.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-extrabold text-xs rounded-xl shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire Bulk Delivery</span>
              </a>
              <span className="text-xs text-amber-900 font-bold">
                Max 5 km from Jhanda Chowk
              </span>
            </div>
          </div>

        </div>

        {/* Informational Callout */}
        <div className="p-5 bg-stone-100 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-emerald-700 shrink-0" />
            <div>
              <strong>Why this policy?</strong> Dilip Kirana Store is your local neighborhood grocer. Keeping home delivery dedicated to bulk orders helps us provide fresh stocks, fair prices, and prompt personal attention to everyone visiting our Sanjay Nagar store.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
