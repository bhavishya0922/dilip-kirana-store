import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { createWhatsAppUrl } from '../config/storeConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex items-end flex-col gap-2">
      
      {/* Floating Tooltip Message */}
      {showTooltip && (
        <div className="bg-white text-stone-900 text-xs font-bold py-2 px-3 rounded-2xl shadow-xl border border-stone-200 flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Quick WhatsApp Order & Inquiry</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-700 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href={createWhatsAppUrl("Hello Dilip Kirana Store, I would like to enquire about daily grocery products.")}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-xl shadow-emerald-600/30 hover:scale-110 active:scale-95 transition-all duration-200"
        aria-label="Chat with Dilip Kirana Store on WhatsApp"
        title="Chat with Dilip Kirana Store on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-700 border-2 border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};
