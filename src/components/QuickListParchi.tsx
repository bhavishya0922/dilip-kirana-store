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
  Truck,
  Receipt
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
    estimatedTotalAmount,
  } = useShoppingList();

  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);

  const quickParchiChips = [
    { label: "+ Lay's Magic Masala (लेज़ चिप्स) • ₹20", name: "Lay's India's Magic Masala Potato Chips", hindi: "लेज़ मैजिक मसाला", cat: "Chips", brand: "Lay's", unit: "₹20 Pack", mrp: 20 },
    { label: "+ Kurkure Masala Munch (कुरकुरे) • ₹20", name: "Kurkure Masala Munch Corn Curls", hindi: "कुरकुरे मसाला मंच", cat: "Snacks", brand: "Kurkure", unit: "₹20 Pack", mrp: 20 },
    { label: "+ Maggi 4-Pack (मैगी 4-पैक) • ₹56", name: "Nestle Maggi 2-Minute Masala (4-Pack)", hindi: "नेस्ले मैगी (4-पैक)", cat: "Instant Food", brand: "Maggi", unit: "4-Pack", mrp: 56 },
    { label: "+ Amul Gold Milk 1L (अमूल दूध) • ₹66", name: "Amul Gold Full Cream Fresh Milk (1L)", hindi: "अमूल गोल्ड दूध (1 लीटर)", cat: "Dairy", brand: "Amul", unit: "1 Litre", mrp: 66 },
    { label: "+ Amul Masti Dahi (अमूल दही) • ₹35", name: "Amul Masti Dahi (400g)", hindi: "अमूल मस्ती दही", cat: "Dairy", brand: "Amul", unit: "400g Pouch", mrp: 35 },
    { label: "+ Aashirvaad Atta 5kg (आशीर्वाद आटा) • ₹215", name: "Aashirvaad Superior Whole Wheat Chakki Atta", hindi: "आशीर्वाद शुद्ध चक्की आटा", cat: "Staples", brand: "Aashirvaad", unit: "5 kg Bag", mrp: 215 },
    { label: "+ Tata Tea Gold 500g (टाटा चाय) • ₹320", name: "Tata Tea Gold Leaf Tea (500g)", hindi: "टाटा टी गोल्ड पत्ती चाय", cat: "Beverages", brand: "Tata Tea", unit: "500g Pouch", mrp: 320 },
    { label: "+ Fortune Mustard Oil 1L (सरसों तेल) • ₹145", name: "Fortune Kachi Ghani Mustard Oil (1L)", hindi: "फॉर्च्यून कच्ची घानी सरसों तेल", cat: "Oils", brand: "Fortune", unit: "1 Litre", mrp: 145 },
    { label: "+ Tata Salt 1kg (टाटा नमक) • ₹28", name: "Tata Salt Vacuum Evaporated (1kg)", hindi: "टाटा नमक (देश का नमक)", cat: "Staples", brand: "Tata Salt", unit: "1 kg Pouch", mrp: 28 },
    { label: "+ Haldiram Aloo Bhujia (आलू भुजिया) • ₹110", name: "Haldiram's Aloo Bhujia (400g)", hindi: "हल्दीराम आलू भुजिया", cat: "Snacks", brand: "Haldiram's", unit: "400g Pouch", mrp: 110 },
    { label: "+ Cadbury Dairy Milk (डेयरी मिल्क) • ₹40", name: "Cadbury Dairy Milk Chocolate", hindi: "कैडबरी डेयरी मिल्क", cat: "Chocolates", brand: "Cadbury", unit: "50g Bar", mrp: 40 },
    { label: "+ Surf Excel 1kg (सर्फ एक्सेल) • ₹140", name: "Surf Excel Quick Wash Detergent (1kg)", hindi: "सर्फ एक्सेल वॉशिंग पाउडर", cat: "Cleaning", brand: "Surf Excel", unit: "1 kg Bag", mrp: 140 },
    { label: "+ Vim Dishwash Bar (विम बार) • ₹20", name: "Vim Dishwash Bar with 100 Lemons", hindi: "विम बर्तन धोने का साबुन", cat: "Cleaning", brand: "Vim", unit: "200g Bar", mrp: 20 },
    { label: "+ Dettol Soap 4-Pack (डेटॉल साबुन) • ₹150", name: "Dettol Original Germ Protection Soap (4-Pack)", hindi: "डेटॉल साबुन (4 का पैक)", cat: "Personal Care", brand: "Dettol", unit: "4 x 75g", mrp: 150 },
    { label: "+ Clinic Plus 175ml (शैम्पू) • ₹150", name: "Clinic Plus Strong & Long Shampoo (175ml)", hindi: "क्लिनिक प्लस शैम्पू", cat: "Personal Care", brand: "Clinic Plus", unit: "175 ml", mrp: 150 },
    { label: "+ Good Knight Flash Refill (गुड नाइट) • ₹85", name: "Good Knight Gold Flash Liquid Refill", hindi: "गुड नाइट मच्छर रिफिल", cat: "Repellents", brand: "Good Knight", unit: "45 ml", mrp: 85 },
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
            <span>Digital Kirana Parchi (डिजिटल किराना पर्ची व बिल)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-stone-900 tracking-tight mb-2">
            Build Your Grocery Parchi with Real MRP & WhatsApp Send
          </h2>
          <div className="text-sm font-bold text-emerald-800 mb-2">
            दुकान की पर्ची बनाएं • हिंदी व अंग्रेजी नाम + अनुमानित बिल राशि
          </div>
          <p className="text-base text-stone-600">
            Add items below or type in Hindi/English. Send your grocery parchi directly to Bhavishya ji on WhatsApp <strong className="text-emerald-700">8602777588</strong> for express packing or delivery!
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
                Type Any Kirana, Snack or General Store Item
              </h3>
              <p className="text-xs text-stone-500 mb-4">
                Enter item name in English or Hindi (e.g. "3 Lay's Blue, 2kg Sugar, 500g Dahi, 1 Fortune Sarson Tel, 1 Vim Bar")
              </p>
              
              <form onSubmit={handleAddCustom} className="flex gap-2">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="e.g. Lay's Chips, 2 Maggi, 1kg Chana Dal, 500g Amul Dahi..."
                  className="flex-1 px-4 py-3 bg-stone-50 border border-stone-300 focus:border-emerald-600 focus:bg-white rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600/20 transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputVal.trim()}
                  className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm rounded-xl shadow-sm transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Add</span>
                </button>
              </form>
            </div>

            {/* 1-Tap Quick Add Chips with MRP */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  1-Tap Popular Essentials (MRP Included)
                </h3>
                <span className="text-[11px] text-stone-500 font-medium">1-Tap to add</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {quickParchiChips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => addItem(chip.name, chip.cat, chip.brand, chip.unit, chip.mrp, chip.hindi)}
                    className="text-xs font-semibold px-3 py-2 bg-stone-100 hover:bg-emerald-50 text-stone-800 hover:text-emerald-900 hover:border-emerald-300 border border-stone-200 rounded-lg transition-colors text-left flex items-center gap-1"
                  >
                    <span>{chip.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery Terms Note */}
            <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4.5 text-xs text-amber-950">
              <div className="font-bold flex items-center gap-2 text-sm mb-1 text-amber-900">
                <Truck className="w-4 h-4 text-amber-700" />
                <span>Store Service Policy</span>
              </div>
              <ul className="space-y-1 list-disc list-inside text-amber-900">
                <li><strong>In-Store Pickup (काउंटर पिकअप):</strong> Free for any order size. Packed and ready in 15 mins at Jhanda Chowk.</li>
                <li><strong>Home Delivery (होम डिलीवरी):</strong> Bulk & monthly orders ₹2,999+ | 3+ hours advance notice | Within 5 km radius of Sanjay Nagar.</li>
              </ul>
            </div>

          </div>

          {/* Right Column: The Visual Digital Parchi Notepad */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl shadow-xl border-2 border-stone-300 overflow-hidden relative">
              
              {/* Traditional Store Parchi Notepad Header */}
              <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 text-white p-5">
                <div className="flex items-start justify-between">
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
                    {estimatedTotalAmount > 0 && (
                      <div className="text-xs text-amber-200 font-extrabold mt-1">
                        Est. ₹{estimatedTotalAmount.toLocaleString('en-IN')}
                      </div>
                    )}
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
                      Tap any 1-tap item on the left or type your custom grocery list.
                    </p>
                  </div>
                ) : (
                  items.map((item, idx) => (
                    <div key={item.id} className="py-3 flex items-center justify-between gap-3 group">
                      
                      {/* Item Details with Hindi Name & MRP */}
                      <div className="flex items-start gap-2.5 flex-1 min-w-0">
                        <span className="w-5 h-5 rounded bg-stone-100 text-stone-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-bold text-stone-900 leading-snug truncate">
                            {item.name}
                          </div>
                          {item.hindiName && (
                            <div className="text-[11px] font-semibold text-emerald-800 truncate">
                              {item.hindiName}
                            </div>
                          )}
                          <div className="text-[10px] text-stone-500 flex items-center gap-1.5 mt-0.5">
                            {item.brandHint && <span className="font-semibold text-stone-700">{item.brandHint}</span>}
                            {item.unit && <span>• {item.unit}</span>}
                            {item.mrp && (
                              <span className="font-extrabold text-stone-900 bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded">
                                MRP ₹{item.mrp}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Quantity Controls & Line Total */}
                      <div className="flex items-center gap-2 shrink-0">
                        {item.mrp && item.mrp > 0 && (
                          <span className="text-xs font-black text-stone-900 hidden sm:inline">
                            ₹{item.mrp * item.quantity}
                          </span>
                        )}

                        <div className="flex items-center bg-stone-100 rounded-lg border border-stone-200 p-0.5">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:bg-white rounded transition-colors"
                            title="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-black text-stone-900">
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
                <div className="p-3.5 bg-stone-50 border-t border-stone-200">
                  <input
                    type="text"
                    value={customerNote}
                    onChange={(e) => setCustomerNote(e.target.value)}
                    placeholder="Special note: e.g. Pack for pickup by 6 PM, or specific brand preference..."
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs focus:border-emerald-600 focus:outline-none"
                  />
                </div>
              )}

              {/* Estimated Total Calculation Strip */}
              {items.length > 0 && estimatedTotalAmount > 0 && (
                <div className="p-3.5 bg-amber-50/90 border-t border-amber-200 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-amber-950 font-bold">
                    <Receipt className="w-4 h-4 text-amber-700" />
                    <span>Estimated Total Bill (अनुमानित राशि):</span>
                  </div>
                  <div className="text-base font-black text-emerald-800">
                    ₹{estimatedTotalAmount.toLocaleString('en-IN')}/-
                  </div>
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
