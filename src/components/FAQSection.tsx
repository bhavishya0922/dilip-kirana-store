import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { STORE_CONFIG, createWhatsAppUrl } from '../config/storeConfig';

interface FAQItem {
  q: string;
  qHindi: string;
  a: string;
}

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      q: "What is your Home Delivery policy and minimum order amount?",
      qHindi: "होम डिलीवरी के क्या नियम हैं और न्यूनतम आर्डर कितना होना चाहिए?",
      a: "Home delivery is provided exclusively for large grocery / monthly ration orders of ₹2,999 or above within a 5 km radius of Jhanda Chowk. Because we do not run instant delivery, orders must be placed at least 3 hours in advance. For all regular everyday purchases under ₹2,999, customers can walk into the store or use our WhatsApp Parchi tool for quick 15-minute counter pickup with zero wait time."
    },
    {
      q: "Can I check product availability before coming to the shop?",
      qHindi: "दुकान आने से पहले क्या मैं सामान की उपलब्धता चेक कर सकता हूँ?",
      a: "Yes, definitely! You can send your list or ask about any brand (e.g. specific Lay's flavour, Kurkure, Maggi, Amul paneer, atta, or oil) directly to Bhavishya Dewangan on WhatsApp at 8602777588. We will confirm stock immediately."
    },
    {
      q: "Where is the exact store location in Sanjay Nagar?",
      qHindi: "दुकान का सटीक पता क्या है?",
      a: "Dilip Kirana Store is located at House No. 41/212, Near Jhanda Chowk, Sanjay Nagar, Tikrapara, Raipur, Chhattisgarh 492001. Jhanda Chowk is the main landmark. You can click 'GPS Directions' anywhere on this site for Google Maps navigation."
    },
    {
      q: "Can I send my monthly grocery ration list on WhatsApp?",
      qHindi: "क्या मैं व्हाट्सएप पर महीने का राशन लिस्ट भेज सकता हूँ?",
      a: "Yes, absolutely! Use our built-in 'Kirana Parchi' list tool or send a photo of your handwritten ration list to 8602777588. For orders ₹2,999+, we can schedule home delivery (with 3+ hours notice within 5km), or pack it ready for your express counter pickup."
    },
    {
      q: "What are the opening and closing hours of the store?",
      qHindi: "दुकान का समय क्या है?",
      a: `Dilip Kirana Store is open all 7 days a week (Monday to Sunday) from ${STORE_CONFIG.STORE_HOURS.display}. We do not take a weekly off, so we are always open for your morning milk or late-evening grocery needs.`
    },
    {
      q: "Which payment methods are accepted?",
      qHindi: "भुगतान के कौन से तरीके मान्य हैं?",
      a: "We accept all payment methods: Cash, Google Pay, PhonePe, Paytm, BHIM UPI QR Code, and bank transfers."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-extrabold mb-3">
            <HelpCircle className="w-4 h-4 text-emerald-700" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-stone-900 tracking-tight mb-3">
            Common Customer Queries & Delivery Policy
          </h2>
          <p className="text-base text-stone-600">
            Have questions about shopping, pickup or delivery from Dilip Kirana Store? Find answers below.
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-stone-50/80 border-emerald-300 shadow-sm'
                    : 'bg-white border-stone-200 hover:border-stone-300'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div>
                    <span className="font-display font-extrabold text-sm sm:text-base text-stone-900 block leading-snug">
                      {faq.q}
                    </span>
                    <span className="text-xs font-semibold text-emerald-800 block mt-0.5">
                      {faq.qHindi}
                    </span>
                  </div>

                  <div className={`p-1.5 rounded-full ${isOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-100 text-stone-500'}`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-display font-bold text-base text-emerald-950">
              Have another question about products or stock?
            </h4>
            <p className="text-xs text-emerald-800 mt-0.5">
              Chat directly with store owner Bhavishya Dewangan on WhatsApp (8602777588).
            </p>
          </div>

          <a
            href={createWhatsAppUrl("Hello Bhavishya ji, I have a query regarding grocery products / order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-sm flex items-center gap-2 transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
