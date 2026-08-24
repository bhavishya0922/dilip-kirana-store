import React, { useState } from 'react';
import { 
  ClipboardList, 
  Plus, 
  Minus, 
  Trash2, 
  MessageCircle, 
  Copy, 
  Check, 
  Printer, 
  Sparkles, 
  MapPin, 
  User, 
  Store, 
  Truck
} from 'lucide-react';
import { useShoppingList } from '../context/ShoppingListContext';
import { STORE_CONFIG } from '../config/storeConfig';

export const QuickListParchi: React.FC = () => {
  const {
    items,
    addItem,
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
    sendListViaWhatsApp,
    copyListToClipboard,
    totalItemCount,
  } = useShoppingList();

  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);

  const quickParchiChips = [
    { label: "+ Lay's Magic Masala (₹20)", name: "Lay's India's Magic Masala (₹20)", cat: "Chips", brand: "Lay's" },
    { label: "+ Lay's Cream & Onion (₹20)", name: "Lay's American Style Cream & Onion (₹20)", cat: "Chips", brand: "Lay's" },
    { label: "+ Kurkure Masala Munch (₹20)", name: "Kurkure Masala Munch (₹20)", cat: "Snacks", brand: "Kurkure" },
    { label: "+ Maggi 2-Min Masala (4-Pack)", name: "Nestle Maggi 2-Min Masala (4-Pack)", cat: "Instant Food", brand: "Maggi" },
    { label: "+ Bingo! Tedhe Medhe (₹10)", name: "Bingo! Tedhe Medhe (₹10)", cat: "Chips", brand: "Bingo" },
    { label: "+ Amul Gold Milk (1L)", name: "Amul Gold Full Cream Milk (1L)", cat: "Dairy", brand: "Amul" },
    { label: "+ Amul Masti Dahi (400g)", name: "Amul Masti Dahi (400g)", cat: "Dairy", brand: "Amul" },
    { label: "+ Thums Up / Sprite (600ml)", name: "Thums Up / Sprite (600ml Chilled)", cat: "Beverages", brand: "Coca-Cola" },
    { label: "+ Cadbury Dairy Milk (₹40)", name: "Cadbury Dairy Milk Chocolate (₹40)", cat: "Chocolates", brand: "Cadbury" },
    { label: "+ Aashirvaad Atta (5kg)", name: "Aashirvaad Chakki Atta (5kg)", cat: "Staples", brand: "Aashirvaad" },
    { label: "+ Fortune Mustard Oil (1L)", name: "Fortune Kachi Ghani Mustard Oil (1L)", cat: "Oils", brand: "Fortune" },
    { label: "+ Tata Tea Gold (500g)", name: "Tata Tea Gold (500g)", cat: "Beverages", brand: "Tata" },
    { label: "+ Tata Salt (1kg)", name: "Tata Salt Vacuum Evaporated (1kg)", cat: "Staples", brand: "Tata" },
    { label: "+ Haldiram Aloo Bhujia (400g)", name: "Haldiram's Aloo Bhujia (400g)", cat: "Snacks", brand: "Haldiram" },
    { label: "+ Surf Excel Detergent (1kg)", name: "Surf Excel Quick Wash (1kg)", cat: "Cleaning", brand: "Surf Excel" },
    { label: "+ Vim Dishwash Bar", name: "Vim Dishwash Bar (₹20)", cat: "Cleaning", brand: "Vim" },
  ];

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.trim()) {
      addItem(inputVal.trim());
      setInputVal('');
    }
  };

  const handleCopy = () => {
    const success = copyListToClipboard();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="parchi-list" className="py-16 bg-gradient-to-b from-stone-50 via-amber-50/30 to-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-extrabold mb-3">
            <ClipboardList className="w-4 h-4 text-amber-700" />
            <span>Digital Kirana Parchi (डिजिटल किराना पर्ची)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-stone-900 tracking-tight mb-3">
            Make Your Grocery List & Send to Bhavishya ji on WhatsApp
          </h2>
          <p className="text-base text-stone-600">
            Add your daily essentials below or type your items. Send your grocery list directly to <strong className="text-emerald-700">8602777588</strong> for express counter packing or scheduled delivery!
          </p>
        </div>

        {/* Main Parchi Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Custom Item Input & 1-Tap Chips */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Custom Input Form */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm">
              <h3 className="text-base font-bold text-stone-900 mb-1.5 flex items-center gap-2">
                <Plus className="w-4 h-4 text-emerald-600" />
                Type Any Grocery, Snack or Household Item
              </h3>
              <p className="text-xs text-stone-500 mb-4">
                Enter item name, brand or quantity (e.g. "3 Packets Lay's Blue, 2 Maggi, 500g Dahi, 1kg Sugar")
              </p>
              
              <form onSubmit={handleAddCustom} className="flex gap-2">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="e.g. Lay's Magic Masala, 2 Maggi, Amul Dahi, 1kg Sugar..."
                  className="flex-1 px-4 py-3 bg-stone-50 border border-stone-300 focus:border-emerald-600 focus:bg-white rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputVal.trim()}
                  className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm rounded-xl shadow-sm transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add</span>
                </button>
              </form>
            </div>

            {/* 1-Tap Quick Add Chips */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Popular Items at Jhanda Chowk Store
                </h3>
                <span className="text-[11px] text-stone-500 font-medium">1-Tap to add</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {quickParchiChips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => addItem(chip.name, chip.cat, chip.brand)}
                    className="text-xs font-semibold px-3 py-2 bg-stone-100 hover:bg-emerald-50 text-stone-700 hover:text-emerald-800 hover:border-emerald-300 border border-stone-200 rounded-lg transition-colors text-left"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery Terms Note */}
            <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4.5 text-xs text-amber-950">
              <div className="font-bold flex items-center gap-2 text-sm mb-1 text-amber-900">
                <Truck className="w-4 h-4 text-amber-700" />
                <span>Delivery Policy at a Glance</span>
              </div>
              <ul className="space-y-1 list-disc list-inside text-amber-900">
                <li><strong>In-Store Pickup:</strong> Free for any order size (No minimum). Packed in 15 mins.</li>
                <li><strong>Home Delivery:</strong> Orders ₹2,999+ only | 3+ hours advance notice | Within 5 km radius of Jhanda Chowk.</li>
              </ul>
            </div>

          </div>

          {/* Right Column: The Visual Digital Parchi Notepad */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl shadow-xl border-2 border-stone-300 overflow-hidden relative">
              
              {/* Traditional Store Parchi Notepad Header */}
              <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 text-white p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-emerald-200">
                      GROCERY ORDER PARCHI • किराना पर्ची
                    </div>
                    <div className="text-xl font-extrabold font-display leading-tight">
                      {STORE_CONFIG.STORE_NAME}
                    </div>
                    <div className="text-xs text-emerald-100 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-amber-300" />
                      <span>H.No. 41/212, Jhanda Chowk, Sanjay Nagar</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-amber-400 text-stone-950 text-xs font-black px-3 py-1 rounded-full shadow-sm">
                      {totalItemCount} {totalItemCount === 1 ? 'Item' : 'Items'}
                    </span>
                    <div className="text-[10px] text-emerald-200 mt-1 font-semibold">
                      Owner: Bhavishya Dewangan
                    </div>
                  </div>
                </div>
              </div>

              {/* Fulfillment Option Toggle (Counter Pickup vs Home Delivery) */}
              <div className="p-3.5 bg-stone-100 border-b border-stone-200">
                <label className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-2">
                  Select Order Fulfillment Mode:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFulfillmentMode('pickup')}
                    className={`p-2.5 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center gap-1 border ${
                      fulfillmentMode === 'pickup'
                        ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                        : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Store className="w-3.5 h-3.5" />
                      <span>In-Store Pickup</span>
                    </div>
                    <span className={`text-[10px] ${fulfillmentMode === 'pickup' ? 'text-emerald-100' : 'text-stone-500'}`}>
                      Any Amount • Ready in 15 Min
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFulfillmentMode('delivery')}
                    className={`p-2.5 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center gap-1 border ${
                      fulfillmentMode === 'delivery'
                        ? 'bg-amber-500 text-stone-950 border-amber-600 shadow-sm'
                        : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5" />
                      <span>Home Delivery</span>
                    </div>
                    <span className={`text-[10px] ${fulfillmentMode === 'delivery' ? 'text-stone-900 font-extrabold' : 'text-stone-500'}`}>
                      Orders ₹2,999+ • 3+ Hrs Notice
                    </span>
                  </button>
                </div>
              </div>

              {/* Customer Info Form */}
              <div className="p-4 bg-stone-50 border-b border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[11px] font-bold text-stone-600 mb-1 flex items-center gap-1">
                    <User className="w-3 h-3 text-stone-400" />
                    Customer Name
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded-lg focus:border-emerald-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-600 mb-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-stone-400" />
                    Delivery Area / Colony
                  </label>
                  <input
                    type="text"
                    value={customerArea}
                    onChange={(e) => setCustomerArea(e.target.value)}
                    placeholder="Sanjay Nagar / Tikrapara (within 5km)"
                    className="w-full px-3 py-1.5 bg-white border border-stone-300 rounded-lg focus:border-emerald-600 focus:outline-none"
                  />
                </div>
              </div>

              {/* Items List Inside Parchi */}
              <div className="p-4 sm:p-5 max-h-[340px] overflow-y-auto divide-y divide-stone-100">
                {items.length === 0 ? (
                  <div className="py-10 text-center text-stone-400">
                    <ClipboardList className="w-12 h-12 mx-auto mb-2 text-stone-300" />
                    <p className="text-sm font-bold text-stone-600">Your grocery parchi is empty</p>
                    <p className="text-xs text-stone-400 mt-1">
                      Add Lay's, Maggi, milk, atta, or custom items from the left side.
                    </p>
                  </div>
                ) : (
                  items.map((item, idx) => (
                    <div key={item.id} className="py-3 flex items-center justify-between gap-3 group">
                      
                      {/* Item Details */}
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <span className="w-5 h-5 rounded bg-stone-100 text-stone-500 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <div className="min-w-0">
                          <div className="text-sm font-bold text-stone-900 leading-snug truncate">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-stone-500 flex items-center gap-2">
                            {item.brandHint && <span className="font-semibold text-emerald-700">{item.brandHint}</span>}
                            {item.unit && <span>• {item.unit}</span>}
                          </div>
                        </div>
                      </div>

                      {/* Quantity Controls & Remove */}
                      <div className="flex items-center gap-2 shrink-0">
                        <div className="flex items-center bg-stone-100 rounded-lg border border-stone-200 p-0.5">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-white rounded transition-colors"
                            title="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center text-xs font-black text-stone-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-white rounded transition-colors"
                            title="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1.5 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                    </div>
                  ))
                )}
              </div>

              {/* Special Note Input */}
              {items.length > 0 && (
                <div className="p-4 bg-stone-50 border-t border-stone-200">
                  <input
                    type="text"
                    value={customerNote}
                    onChange={(e) => setCustomerNote(e.target.value)}
                    placeholder="Special note: e.g. Pack for 6 PM pickup, or preferred delivery timing..."
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs focus:border-emerald-600 focus:outline-none"
                  />
                </div>
              )}

              {/* Bottom Action Area */}
              <div className="p-4 sm:p-5 bg-white border-t border-stone-200 flex flex-col gap-3">
                
                {/* Primary WhatsApp Order Button */}
                <button
                  onClick={sendListViaWhatsApp}
                  disabled={items.length === 0}
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-extrabold text-base shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Send Parchi on WhatsApp (8602777588) 📲</span>
                </button>

                {/* Secondary Actions (Copy / Print / Clear) */}
                <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopy}
                      disabled={items.length === 0}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-stone-100 font-bold text-stone-700 disabled:opacity-40 transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied!' : 'Copy List'}</span>
                    </button>
                    <button
                      onClick={handlePrint}
                      disabled={items.length === 0}
                      className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-stone-100 font-bold text-stone-700 disabled:opacity-40 transition-colors"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print</span>
                    </button>
                  </div>

                  {items.length > 0 && (
                    <button
                      onClick={clearList}
                      className="text-red-600 hover:text-red-700 font-bold hover:underline"
                    >
                      Clear All
                    </button>
                  )}
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
