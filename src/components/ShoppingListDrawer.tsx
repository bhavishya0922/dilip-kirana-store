import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  MessageCircle, 
  Copy, 
  Check, 
  ArrowRight,
  Store,
  Truck
} from 'lucide-react';
import { useShoppingList } from '../context/ShoppingListContext';

export const ShoppingListDrawer: React.FC = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    clearList,
    customerName,
    setCustomerName,
    customerArea,
    setCustomerArea,
    customerNote,
    setCustomerNote,
    fulfillmentMode,
    setFulfillmentMode,
    isDrawerOpen,
    setIsDrawerOpen,
    sendListViaWhatsApp,
    copyListToClipboard,
    totalItemCount,
  } = useShoppingList();

  const [copied, setCopied] = useState(false);

  if (!isDrawerOpen) return null;

  const handleCopy = () => {
    const success = copyListToClipboard();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-5 bg-gradient-to-r from-emerald-800 to-emerald-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-lg leading-tight">
                  My Kirana Parchi
                </h3>
                <p className="text-xs text-emerald-200">
                  {totalItemCount} {totalItemCount === 1 ? 'item' : 'items'} in grocery list
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 text-emerald-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Fulfillment Toggle inside Drawer */}
          <div className="p-3 bg-stone-100 border-b border-stone-200">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setFulfillmentMode('pickup')}
                className={`py-2 px-2 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-colors border ${
                  fulfillmentMode === 'pickup'
                    ? 'bg-emerald-600 text-white border-emerald-700'
                    : 'bg-white text-stone-700 border-stone-300'
                }`}
              >
                <Store className="w-3.5 h-3.5" />
                <span>Store Pickup</span>
              </button>

              <button
                type="button"
                onClick={() => setFulfillmentMode('delivery')}
                className={`py-2 px-2 rounded-lg font-bold flex items-center justify-center gap-1.5 transition-colors border ${
                  fulfillmentMode === 'delivery'
                    ? 'bg-amber-500 text-stone-950 border-amber-600'
                    : 'bg-white text-stone-700 border-stone-300'
                }`}
              >
                <Truck className="w-3.5 h-3.5" />
                <span>Delivery (₹2999+)</span>
              </button>
            </div>
          </div>

          {/* Customer Area and Name info */}
          <div className="p-4 bg-stone-50 border-b border-stone-200 grid grid-cols-2 gap-2 text-xs">
            <div>
              <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Name"
                className="w-full px-2.5 py-1.5 bg-white border border-stone-300 rounded-md text-xs focus:border-emerald-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-stone-500 uppercase mb-1">
                Area / Colony
              </label>
              <input
                type="text"
                value={customerArea}
                onChange={(e) => setCustomerArea(e.target.value)}
                placeholder="Sanjay Nagar (under 5km)"
                className="w-full px-2.5 py-1.5 bg-white border border-stone-300 rounded-md text-xs focus:border-emerald-600 focus:outline-none"
              />
            </div>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto p-4 divide-y divide-stone-100">
            {items.length === 0 ? (
              <div className="py-16 text-center text-stone-400">
                <ShoppingBag className="w-12 h-12 mx-auto mb-3 text-stone-300" />
                <p className="text-sm font-bold text-stone-700">No items added yet</p>
                <p className="text-xs text-stone-400 mt-1 max-w-xs mx-auto">
                  Browse categories and tap "+ Add" on any item to build your WhatsApp list.
                </p>
                <button
                  onClick={() => {
                    setIsDrawerOpen(false);
                    const el = document.getElementById('categories');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200"
                >
                  <span>Explore Categories</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ) : (
              items.map((item, idx) => (
                <div key={item.id} className="py-3 flex items-center justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-stone-900 truncate">
                      {idx + 1}. {item.name}
                    </div>
                    <div className="text-[11px] text-stone-500">
                      {item.brandHint && <span className="text-emerald-700 font-semibold">{item.brandHint} • </span>}
                      <span>{item.unit || '1 Pack'}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center bg-stone-100 rounded-md border border-stone-200">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-5 h-5 flex items-center justify-center text-stone-600 hover:bg-white rounded transition-colors"
                      >
                        <Minus className="w-2.5 h-2.5" />
                      </button>
                      <span className="w-6 text-center text-xs font-black text-stone-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-5 h-5 flex items-center justify-center text-stone-600 hover:bg-white rounded transition-colors"
                      >
                        <Plus className="w-2.5 h-2.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 text-stone-400 hover:text-red-600 rounded transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Notes Input */}
          {items.length > 0 && (
            <div className="p-3 bg-stone-50 border-t border-stone-200">
              <input
                type="text"
                value={customerNote}
                onChange={(e) => setCustomerNote(e.target.value)}
                placeholder="Note: e.g. Pack for pickup / preferred delivery time"
                className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded-md text-xs focus:outline-none focus:border-emerald-600"
              />
            </div>
          )}

          {/* Footer Actions */}
          <div className="p-4 bg-white border-t border-stone-200 flex flex-col gap-2.5">
            <button
              onClick={sendListViaWhatsApp}
              disabled={items.length === 0}
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 disabled:opacity-50 text-white font-extrabold text-sm shadow-md flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Parchi on WhatsApp (8602777588)</span>
            </button>

            <div className="flex items-center justify-between text-xs text-stone-500">
              <button
                onClick={handleCopy}
                disabled={items.length === 0}
                className="flex items-center gap-1 font-semibold text-stone-700 hover:text-emerald-700 disabled:opacity-40"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'List Copied!' : 'Copy Text'}</span>
              </button>

              {items.length > 0 && (
                <button
                  onClick={clearList}
                  className="text-red-600 hover:text-red-700 font-semibold"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
