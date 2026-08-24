import React from 'react';
import { Home, Layers, ShoppingBag, MessageCircle, Phone } from 'lucide-react';
import { useShoppingList } from '../context/ShoppingListContext';
import { createPhoneCallUrl, createWhatsAppUrl } from '../config/storeConfig';

export const MobileBottomNav: React.FC = () => {
  const { totalItemCount, setIsDrawerOpen } = useShoppingList();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-2xl py-1.5 px-3">
      <div className="flex items-center justify-around">
        
        {/* Home */}
        <a
          href="#hero"
          className="flex flex-col items-center gap-1 p-1 text-stone-600 hover:text-emerald-600 transition-colors"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold">Home</span>
        </a>

        {/* Categories */}
        <a
          href="#categories"
          className="flex flex-col items-center gap-1 p-1 text-stone-600 hover:text-emerald-600 transition-colors"
        >
          <Layers className="w-5 h-5" />
          <span className="text-[10px] font-bold">Categories</span>
        </a>

        {/* Kirana Parchi / List (Primary Middle Action) */}
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="relative flex flex-col items-center gap-1 p-1 text-amber-700 hover:text-amber-800 transition-colors"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center border border-amber-300">
              <ShoppingBag className="w-4 h-4 text-amber-800" />
            </div>
            {totalItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center shadow-xs">
                {totalItemCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-bold">My Parchi</span>
        </button>

        {/* WhatsApp */}
        <a
          href={createWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 p-1 text-[#128C7E] hover:text-[#075E54] transition-colors"
        >
          <MessageCircle className="w-5 h-5 text-[#25D366]" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>

        {/* Call */}
        <a
          href={createPhoneCallUrl()}
          className="flex flex-col items-center gap-1 p-1 text-stone-600 hover:text-emerald-600 transition-colors"
        >
          <Phone className="w-5 h-5 text-emerald-600" />
          <span className="text-[10px] font-bold">Call</span>
        </a>

      </div>
    </div>
  );
};
