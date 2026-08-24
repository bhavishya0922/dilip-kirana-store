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
  essentialsList: {
    name: string;
    brand: string;
    qtyHint: string;
  }[];
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
    description: "Whether it's fresh packet milk for your morning cup, crispy toast-rusk, or quick poha & suji for tiffin — we have it ready first thing in the morning.",
    essentialsList: [
      { name: "Fresh Packaged Milk & Dahi", brand: "Amul Gold / Taaza / Devbhog", qtyHint: "500ml / 1L" },
      { name: "Strong Tea Leaves (Chai Patti)", brand: "Tata Tea Gold / Red Label", qtyHint: "250g / 500g" },
      { name: "Crispy Suji & Elaichi Toast", brand: "Britannia Toastea / Rusk", qtyHint: "200g / 400g" },
      { name: "Fresh Sandwich Bread & Butter", brand: "Britannia / Amul Butter", qtyHint: "Daily Fresh" },
      { name: "Breakfast Poha & Semolina (Suji)", brand: "Rajdhani / Tata Sampann", qtyHint: "500g / 1kg" },
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
      { name: "Whole Wheat Chakki Atta", brand: "Aashirvaad / Fortune Atta", qtyHint: "5kg / 10kg" },
      { name: "Aromatic Basmati & Daily Rice", brand: "India Gate / Daily Rice", qtyHint: "1kg / 5kg / 25kg" },
      { name: "Toor, Moong & Chana Pulses", brand: "Tata Sampann / Cleaned Dal", qtyHint: "1kg" },
      { name: "Kachi Ghani Mustard & Refined Oil", brand: "Fortune / Dhara", qtyHint: "1L / 5L" },
      { name: "Pure Turmeric, Mirch & Garam Masala", brand: "Everest / MDH / Catch", qtyHint: "100g / 200g" },
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
    description: "Welcome guests or treat your family with spicy Bikaneri sev, aloo bhujia, crunchy potato chips, biscuits, and cold soft drinks.",
    essentialsList: [
      { name: "Aloo Bhujia & Ratlami Sev", brand: "Haldiram's / Bikaji", qtyHint: "200g / 400g" },
      { name: "GoodDay, Marie Gold & Parle-G", brand: "Britannia / Parle", qtyHint: "Multipacks" },
      { name: "Crispy Potato Chips & Kurkure", brand: "Lay's / Bingo / Kurkure", qtyHint: "All Flavours" },
      { name: "Chilled Soft Drinks & Fruit Juices", brand: "Thums Up / Coke / Frooti", qtyHint: "Chilled Bottles" },
      { name: "Maggi 2-Minute Masala Noodles", brand: "Nestle Maggi / Yippee", qtyHint: "Single / 4-Pack" },
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
      { name: "Washing Powder & Detergent Bars", brand: "Surf Excel / Ariel / Tide", qtyHint: "1kg / 2kg / 5kg" },
      { name: "Dishwash Bars, Gel & Scrubbers", brand: "Vim Bar & Gel / Scotch-Brite", qtyHint: "Bar / 500ml" },
      { name: "Disinfectant Floor & Bathroom Cleaner", brand: "Lizol / Harpic Power Plus", qtyHint: "500ml / 1L" },
      { name: "Bath Soaps & Toothpastes", brand: "Dettol / Dove / Colgate", qtyHint: "Family Packs" },
      { name: "Mosquito Liquid Refill & Coils", brand: "Good Knight / All Out", qtyHint: "Single / Combo" },
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
      { name: "Fragrant Agarbatti & Dhoop Cones", brand: "Cycle Pure / Zed Black", qtyHint: "Zipper Box" },
      { name: "100% Pure Bhimseni Camphor (Karpur)", brand: "Mangalam Camphor", qtyHint: "50g / 100g Jar" },
      { name: "Cotton Diya Wicks (Phool Batti)", brand: "Premium Handcrafted Batti", qtyHint: "100 pcs Pack" },
      { name: "Matchbox Bundles & Emergency Candles", brand: "Homelites / Ship", qtyHint: "10-in-1 Bundle" },
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
    description: "Ran out of milk or sugar at night? Sudden guest arrival? Need a cold drink or ice cream after dinner? Dilip Kirana Store is right in Sanjay Nagar for instant pickup.",
    essentialsList: [
      { name: "Chilled Ice Creams & Kulfis", brand: "Amul / Kwality Wall's", qtyHint: "Cups / Chocobars" },
      { name: "Cadbury Dairy Milk & KitKat", brand: "Cadbury / Nestle", qtyHint: "All Sizes" },
      { name: "Emergency Sugar, Milk & Salt Refill", brand: "Tata / Amul", qtyHint: "Quick Bag" },
      { name: "Instant Noodles & Soups", brand: "Maggi / Knorr", qtyHint: "Single / 4-Pack" },
    ]
  }
];
