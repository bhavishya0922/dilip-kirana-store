export interface EverydayEssentialItem {
  name: string;
  hindiName: string;
  brand: string;
  qtyHint: string;
  mrp: number;
}

export interface EverydayMoment {
  id: string;
  timeSlot: string;
  timeSlotHindi: string;
  title: string;
  titleHindi: string;
  tagline: string;
  bgGradient: string;
  accentColor: string;
  badge: string;
  description: string;
  essentialsList: EverydayEssentialItem[];
}

export const EVERYDAY_MOMENTS_DATA: EverydayMoment[] = [
  {
    id: "morning-breakfast",
    timeSlot: "6:00 AM – 10:00 AM",
    timeSlotHindi: "सुबह 6 बजे से 10 बजे तक",
    title: "Morning Chai & Breakfast Essentials",
    titleHindi: "सुबह की कड़क चाय एवं नाश्ता",
    tagline: "Start your family's morning with fresh milk, aromatic tea, and crispy breakfast bites.",
    bgGradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    accentColor: "border-amber-400 text-amber-900 bg-amber-50",
    badge: "🌅 Fresh Daily Morning Stock",
    description: "Whether it's fresh packet milk for your morning cup, crispy toast-rusk, or quick poha & suji for tiffin — we have it ready first thing in the morning at Jhanda Chowk.",
    essentialsList: [
      { name: "Amul Gold Full Cream Milk", hindiName: "अमूल गोल्ड ताजा दूध (1L)", brand: "Amul Gold", qtyHint: "1 Litre", mrp: 66 },
      { name: "Tata Tea Gold Leaf Tea", hindiName: "टाटा टी गोल्ड पत्ती चाय (500g)", brand: "Tata Tea", qtyHint: "500g", mrp: 320 },
      { name: "Britannia Toastea Suji Rusk", hindiName: "ब्रिटानिया सूजी टोस्ट/रस्क", brand: "Britannia", qtyHint: "400g", mrp: 65 },
      { name: "Fresh Sandwich Bread & Amul Butter", hindiName: "ताजा ब्रेड एवं अमूल मक्खन", brand: "Britannia / Amul", qtyHint: "400g + 100g", mrp: 103 },
      { name: "Rajdhani Poha & Fine Sooji", hindiName: "राजधानी पोहा एवं बारीक सूजी", brand: "Rajdhani", qtyHint: "1kg + 500g", mrp: 90 },
    ]
  },
  {
    id: "daily-lunch-dinner",
    timeSlot: "11:00 AM – 3:00 PM & Evening",
    timeSlotHindi: "दोपहर एवं रात का खाना",
    title: "Daily Kitchen Lunch & Dinner",
    titleHindi: "शुद्ध दाल-चावल, आटा एवं रसोई मसाले",
    tagline: "Authentic, wholesome homestyle meals with fresh pulses, grain staples & pure spices.",
    bgGradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    accentColor: "border-emerald-400 text-emerald-900 bg-emerald-50",
    badge: "🍲 100% Wholesome Staples",
    description: "Everything you need for a delicious thali: chakki atta for fluffy rotis, aromatic basmati rice, protein-rich toor & moong dals, pure mustard/refined oils, and fragrant masalas.",
    essentialsList: [
      { name: "Aashirvaad Whole Wheat Atta", hindiName: "आशीर्वाद शुद्ध चक्की आटा", brand: "Aashirvaad", qtyHint: "5 kg Bag", mrp: 215 },
      { name: "India Gate Basmati / Daily Rice", hindiName: "इंडिया गेट बासमती चावल", brand: "India Gate", qtyHint: "1 kg", mrp: 115 },
      { name: "Tata Sampann Toor Dal", hindiName: "टाटा सम्पन्न अरहर दाल", brand: "Tata Sampann", qtyHint: "1 kg", mrp: 165 },
      { name: "Fortune Kachi Ghani Mustard Oil", hindiName: "फॉर्च्यून कच्ची घानी सरसों तेल", brand: "Fortune", qtyHint: "1 Litre", mrp: 145 },
      { name: "Everest Haldi, Mirch & Garam Masala", hindiName: "एवरेस्ट हल्दी, मिर्च व गरम मसाला", brand: "Everest Spices", qtyHint: "Combo Pack", mrp: 263 },
    ]
  },
  {
    id: "evening-chai-nashta",
    timeSlot: "4:00 PM – 7:30 PM",
    timeSlotHindi: "शाम 4 बजे से 7:30 बजे तक",
    title: "Evening Chai-Nashta & Snacks",
    titleHindi: "शाम का नाश्ता, नमकीन एवं चाय",
    tagline: "Crispy aloo bhujia, biscuits, chips, instant noodles, and refreshing cold drinks.",
    bgGradient: "from-orange-500/10 via-amber-500/5 to-transparent",
    accentColor: "border-orange-400 text-orange-900 bg-orange-50",
    badge: "☕ Evening Chai Partner",
    description: "Welcome guests or treat your family with spicy Bikaneri sev, aloo bhujia, crunchy potato chips, biscuits, and chilled soft drinks.",
    essentialsList: [
      { name: "Haldiram's Aloo Bhujia / Ratlami Sev", hindiName: "हल्दीराम आलू भुजिया / रतलामी सेव", brand: "Haldiram's", qtyHint: "400g", mrp: 110 },
      { name: "Britannia Good Day / Parle-G", hindiName: "गुड डे बटर एवं पारले-जी बिस्कुट", brand: "Britannia / Parle", qtyHint: "Family Packs", mrp: 50 },
      { name: "Lay's Magic Masala & Kurkure", hindiName: "लेज़ मैजिक मसाला व कुरकुरे", brand: "Lay's / Kurkure", qtyHint: "2 x ₹20 Packs", mrp: 40 },
      { name: "Thums Up / Sprite Chilled", hindiName: "थम्स अप / स्प्राइट ठंडी बोतल", brand: "Coca-Cola", qtyHint: "600 ml", mrp: 40 },
      { name: "Nestle Maggi 2-Min (4-Pack)", hindiName: "नेस्ले मैगी 2-मिनट (4-पैक)", brand: "Nestle Maggi", qtyHint: "4-Pack", mrp: 56 },
    ]
  },
  {
    id: "home-cleaning-hygiene",
    timeSlot: "Daily & Weekly Home Care",
    timeSlotHindi: "दैनिक एवं साप्ताहिक घर की सफाई",
    title: "Home Cleaning & Sparkling Utensils",
    titleHindi: "कपड़े, बर्तन एवं फर्श की सफाई",
    tagline: "Keep your home clean, hygienic, and smelling fresh with top-rated cleaning essentials.",
    bgGradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
    accentColor: "border-cyan-400 text-cyan-900 bg-cyan-50",
    badge: "🧼 99.9% Germ Free Home",
    description: "Detergent powders that remove tough stains, lemon dishwash bars for squeaky clean utensils, and disinfectants for gleaming floors.",
    essentialsList: [
      { name: "Surf Excel Quick Wash Detergent", hindiName: "सर्फ एक्सेल वॉशिंग पाउडर", brand: "Surf Excel", qtyHint: "1 kg", mrp: 140 },
      { name: "Vim Dishwash Bar & Liquid Gel", hindiName: "विम बार एवं लिक्विड जेल", brand: "Vim", qtyHint: "Bar + 500ml", mrp: 130 },
      { name: "Lizol Disinfectant Floor Cleaner", hindiName: "लाइजोल फिनाइल फर्श क्लीनर", brand: "Lizol", qtyHint: "1 Litre", mrp: 210 },
      { name: "Dettol Soap 4-Pack & Colgate 100g", hindiName: "डेटॉल साबुन 4-पैक एवं कोलगेट", brand: "Dettol / Colgate", qtyHint: "Combo", mrp: 215 },
      { name: "Good Knight Gold Flash Refill", hindiName: "गुड नाइट मच्छर लिक्विड रिफिल", brand: "Good Knight", qtyHint: "45 ml", mrp: 85 },
    ]
  },
  {
    id: "puja-spiritual",
    timeSlot: "Morning & Evening Aarti",
    timeSlotHindi: "सुबह एवं संध्या आरती",
    title: "Daily Pooja & Spiritual Peace",
    titleHindi: "दैनिक पूजा एवं संध्या आरती सामग्री",
    tagline: "Pure agarbatti, aromatic dhoop, bhimseni camphor, and cotton diya wicks.",
    bgGradient: "from-amber-500/10 via-yellow-500/5 to-transparent",
    accentColor: "border-amber-400 text-amber-900 bg-amber-50",
    badge: "🪔 Divine Fragrance & Purity",
    description: "Everyday essentials for your home mandir to keep your puja room sacred, fragrant, and spiritually peaceful.",
    essentialsList: [
      { name: "Cycle Three-in-One Agarbatti", hindiName: "साइकिल थ्री-इन-वन अगरबत्ती", brand: "Cycle Pure", qtyHint: "Box Pack", mrp: 55 },
      { name: "Mangalam Pure Bhimseni Camphor", hindiName: "मंगलम शुद्ध भीमसेनी कपूर", brand: "Mangalam Camphor", qtyHint: "100g Jar", mrp: 95 },
      { name: "Cotton Diya Phool Batti", hindiName: "हस्तनिर्मित रुई फूल बत्ती", brand: "Handcrafted Batti", qtyHint: "100 pcs", mrp: 30 },
      { name: "Homelites Matchbox Bundle (10pcs)", hindiName: "होमलाइट्स माचिस बंडल", brand: "Homelites", qtyHint: "10 Boxes", mrp: 15 },
    ]
  },
  {
    id: "late-night-quick-fixes",
    timeSlot: "Open Till 10:00 PM",
    timeSlotHindi: "रात 10 बजे तक उपलब्ध",
    title: "Late-Evening Needs & Quick Fixes",
    titleHindi: "रात की अचानक जरूरतें एवं मीठा",
    tagline: "Forgot something for dinner? Craving ice cream or chocolates? We're open till 10 PM.",
    bgGradient: "from-purple-500/10 via-pink-500/5 to-transparent",
    accentColor: "border-purple-400 text-purple-900 bg-purple-50",
    badge: "🌙 Open Till 10:00 PM",
    description: "Ran out of milk or sugar at night? Sudden guest arrival? Need a cold drink or chocolates after dinner? Dilip Kirana Store is right in Sanjay Nagar for instant pickup.",
    essentialsList: [
      { name: "Cadbury Dairy Milk Silk / Bar", hindiName: "कैडबरी डेयरी मिल्क सिल्क / बार", brand: "Cadbury", qtyHint: "All Sizes", mrp: 40 },
      { name: "Amul Gold Milk Emergency Pack", hindiName: "अमूल दूध इमरजेंसी पैकेट", brand: "Amul", qtyHint: "500ml / 1L", mrp: 33 },
      { name: "Madhur Pure Crystal Sugar", hindiName: "मधुर शुद्ध सफेद शक्कर", brand: "Madhur", qtyHint: "1 kg", mrp: 50 },
      { name: "Nestle Maggi 2-Minute Masala", hindiName: "मैगी 2-मिनट मसाला", brand: "Maggi", qtyHint: "Single / 4-Pack", mrp: 14 },
    ]
  }
];
