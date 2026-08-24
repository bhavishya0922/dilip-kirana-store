export interface ProductItem {
  id: string;
  name: string;
  hindiName?: string;
  category: string;
  description: string;
  popularBrands: string[];
  commonSizes: string[];
  tag?: string;
  icon?: string;
}

export interface Category {
  id: string;
  title: string;
  hindiTitle: string;
  emoji: string;
  iconName: string;
  tagline: string;
  description: string;
  colorScheme: {
    bg: string;
    border: string;
    text: string;
    badge: string;
  };
  popularItems: string[];
  sampleProducts: ProductItem[];
}

export const CATEGORIES_DATA: Category[] = [
  {
    id: "snacks-namkeen",
    title: "Chips, Kurkure & Namkeen",
    hindiTitle: "चिप्स, कुरकुरे, भुजिया एवं नमकीन",
    emoji: "🍿",
    iconName: "Utensils",
    tagline: "Lay's all flavours, Kurkure, Bingo, Aloo Bhujia, Ratlami Sev & evening munchies",
    description: "Crispy potato chips (Magic Masala, Cream & Onion, Salted), Kurkure Masala Munch & Solid Masti, Bingo Tedhe Medhe, Haldiram's Bikaneri Sev, Bhujia, Salted Peanuts, and roasted chana.",
    colorScheme: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      text: "text-orange-900",
      badge: "bg-orange-100 text-orange-800",
    },
    popularItems: ["Lay's Magic Masala", "Lay's Cream & Onion", "Kurkure Masala Munch", "Kurkure Solid Masti", "Bingo Tedhe Medhe", "Haldiram Aloo Bhujia", "Bikaneri Sev", "Balaji Wafers"],
    sampleProducts: [
      {
        id: "lays-chips-all",
        name: "Lay's Potato Chips (All Flavours)",
        hindiName: "लेज़ आलू चिप्स (सभी फ्लेवर्स)",
        category: "snacks-namkeen",
        description: "India's Magic Masala (Blue), American Style Cream & Onion (Green), Classic Salted (Yellow), and Spanish Tomato Tango (Red).",
        popularBrands: ["Lay's India", "PepsiCo"],
        commonSizes: ["₹5 Pack", "₹10 Pack", "₹20 Pack", "₹40 Party Pack"],
        tag: "Bestseller Snack"
      },
      {
        id: "kurkure-all",
        name: "Kurkure Masala Munch & Solid Masti",
        hindiName: "कुरकुरे मसाला मंच एवं सॉलिड मस्ती",
        category: "snacks-namkeen",
        description: "Tedha hai par mera hai! Crispy spiced corn curls in classic Masala Munch, Chilli Chatka, Green Chutney, and Solid Masti twists.",
        popularBrands: ["Kurkure", "PepsiCo"],
        commonSizes: ["₹5 Pack", "₹10 Pack", "₹20 Pack"],
        tag: "Top Pick"
      },
      {
        id: "bingo-tedhe-medhe",
        name: "Bingo! Tedhe Medhe & Mad Angles",
        hindiName: "बिंगो टेढ़े मेढ़े एवं मैड एंगल्स",
        category: "snacks-namkeen",
        description: "Crunchy triangle crisps and spicy chatpata masaledaar sticks.",
        popularBrands: ["Bingo! ITC", "Balaji"],
        commonSizes: ["₹5", "₹10", "₹20 Packs"],
      },
      {
        id: "haldiram-bhujia-sev",
        name: "Haldiram's Aloo Bhujia & Ratlami Sev",
        hindiName: "हल्दीराम आलू भुजिया एवं रतलामी सेव",
        category: "snacks-namkeen",
        description: "Spicy moth bean flour bhujia, crunchy sev, khatta meetha mixture, and salted peanuts.",
        popularBrands: ["Haldiram's", "Bikaji", "Balaji"],
        commonSizes: ["150g", "400g", "1 kg Family Pack"],
        tag: "Tea-Time Classic"
      },
      {
        id: "chana-peanuts-makhana",
        name: "Roasted Makhana, Salted Peanuts & Chana",
        hindiName: "भुना मखाना, नमकीन मूंगफली व चना",
        category: "snacks-namkeen",
        description: "Healthy protein crunch for evening tea and snacking.",
        popularBrands: ["Haldiram's", "Local Fresh Pack"],
        commonSizes: ["100g", "250g", "500g"],
      }
    ]
  },
  {
    id: "instant-food",
    title: "Maggi, Noodles & Pasta",
    hindiTitle: "मैगी, यिप्पी नूडल्स, पास्ता एवं मैकरोनी",
    emoji: "🍜",
    iconName: "Soup",
    tagline: "Maggi 2-Minute Masala, Special Masala, Yippee, Ching's Desi Chinese & pasta",
    description: "Nestle Maggi 2-Minute Masala Noodles, Maggi Veg Atta Noodles, Sunfeast YiPPee, Ching's Secret Schezwan Noodles, Knorr Soups, Raw Macaroni & Pasta.",
    colorScheme: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      text: "text-yellow-900",
      badge: "bg-yellow-100 text-yellow-800",
    },
    popularItems: ["Maggi 2-Minute Masala", "Maggi Special Masala", "Sunfeast YiPPee!", "Ching's Schezwan Noodles", "Raw Macaroni", "Bambino Vermicelli"],
    sampleProducts: [
      {
        id: "maggi-2min-masala",
        name: "Nestle Maggi 2-Minute Masala Noodles",
        hindiName: "मैगी 2-मिनट मसाला नूडल्स",
        category: "instant-food",
        description: "India's favorite 2-minute snack with iconic tastemaker masala seasoning.",
        popularBrands: ["Nestle Maggi"],
        commonSizes: ["Single Pack (70g - ₹14)", "2-in-1 Pack", "4-Pack (₹56)", "8-in-1 Family Pack"],
        tag: "Daily Essential"
      },
      {
        id: "maggi-special-atta",
        name: "Maggi Special Masala & Veg Atta Noodles",
        hindiName: "मैगी स्पेशल मसाला एवं वेज आटा नूडल्स",
        category: "instant-food",
        description: "Extra spicy 20-spice blend special masala and fiber-rich whole wheat atta noodles.",
        popularBrands: ["Nestle Maggi"],
        commonSizes: ["Single Pack", "4-Pack"],
      },
      {
        id: "yippee-chings-noodles",
        name: "Sunfeast YiPPee! & Ching's Schezwan Noodles",
        hindiName: "यिप्पी नूडल्स एवं चिंग शेजवान",
        category: "instant-food",
        description: "Non-sticky round noodles with colorful veggies and spicy desi Chinese flavours.",
        popularBrands: ["Sunfeast YiPPee!", "Ching's Secret"],
        commonSizes: ["Single Pack", "4-Pack Multi"],
      },
      {
        id: "macaroni-pasta-sewai",
        name: "Raw Macaroni, Durum Pasta & Roasted Sewai",
        hindiName: "पास्ता, मैकरोनी एवं भुनी सेवई",
        category: "instant-food",
        description: "Elbow macaroni for tiffin, penne pasta, and roasted vermicelli for sweet kheer.",
        popularBrands: ["Bambino", "Maggi Pazzta", "Chef's Basket"],
        commonSizes: ["200g", "400g", "1 kg"],
      }
    ]
  },
  {
    id: "groceries-staples",
    title: "Groceries & Staples",
    hindiTitle: "अनाज, आटा, चावल, दालें एवं शक्कर",
    emoji: "🌾",
    iconName: "Wheat",
    tagline: "Aashirvaad Chakki Atta, Basmati Rice, Toor/Moong Dals, Sugar & Tata Salt",
    description: "Premium whole wheat chakki fresh atta, aged basmati and daily rice, unpolished high-protein toor, moong, chana, urad dals, besan, suji, maida, poha, sugar, and vacuum-evaporated Tata Salt.",
    colorScheme: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-900",
      badge: "bg-amber-100 text-amber-800",
    },
    popularItems: ["Aashirvaad Atta (5kg/10kg)", "India Gate Basmati Rice", "Toor / Arhar Dal", "Tata Salt", "Refined Sugar", "Poha", "Besan", "Suji"],
    sampleProducts: [
      {
        id: "atta-flour",
        name: "Aashirvaad Whole Wheat Chakki Atta",
        hindiName: "आशीर्वाद शुद्ध चक्की आटा",
        category: "groceries-staples",
        description: "100% whole wheat atta with 0% maida for soft, fluffy rotis all day long.",
        popularBrands: ["Aashirvaad", "Fortune", "Patanjali", "Local Chakki Fresh"],
        commonSizes: ["1 kg", "5 kg", "10 kg"],
        tag: "Daily Essential"
      },
      {
        id: "basmati-rice",
        name: "Premium Basmati & Daily Rice",
        hindiName: "बासमती एवं डेली कुकिंग चावल",
        category: "groceries-staples",
        description: "Long grain aromatic basmati rice & daily cooking HMT / Sona Masoori / Usna rice.",
        popularBrands: ["India Gate", "Fortune", "Daawat", "Daily Premium Rice"],
        commonSizes: ["1 kg", "5 kg", "25 kg Bag"],
        tag: "Bestseller"
      },
      {
        id: "toor-arhar-dal",
        name: "Unpolished Toor / Arhar & Moong Dal",
        hindiName: "अरहर / तुवर दाल एवं मूंग दाल",
        category: "groceries-staples",
        description: "Cleaned, high-protein desi pulses for everyday homestyle dal tadka.",
        popularBrands: ["Tata Sampann", "Cleaned Loose Premium"],
        commonSizes: ["500g", "1 kg", "2 kg"],
      },
      {
        id: "sugar-salt",
        name: "Tata Salt & Pure Refined Sugar",
        hindiName: "टाटा नमक एवं शुद्ध शक्कर",
        category: "groceries-staples",
        description: "Desh ka namak Tata Salt and sparkling sulphur-free refined crystal sugar.",
        popularBrands: ["Tata Salt", "Madhur Sugar"],
        commonSizes: ["1 kg", "5 kg"],
        tag: "Household Must-Have"
      },
      {
        id: "poha-suji-besan",
        name: "Poha, Suji, Maida & Chana Besan",
        hindiName: "पोहा, सूजी, मैदा एवं चना बेसन",
        category: "groceries-staples",
        description: "Breakfast poha, fine sooji for halwa/upma, besan for pakodas and baking maida.",
        popularBrands: ["Rajdhani", "Tata Sampann", "Fortune"],
        commonSizes: ["500g", "1 kg"],
      }
    ]
  },
  {
    id: "dairy-products",
    title: "Dairy & Fresh Milk",
    hindiTitle: "अमूल दूध, दही, पनीर, मक्खन एवं शुद्ध घी",
    emoji: "🥛",
    iconName: "Milk",
    tagline: "Amul Gold/Taaza milk, fresh malai paneer, thick dahi, butter & desi ghee",
    description: "Pasteurized fresh milk packets, thick set curd (dahi), fresh soft paneer, Amul butter, cheese slices, chaas/buttermilk, and pure aromatic cow/buffalo ghee.",
    colorScheme: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-900",
      badge: "bg-blue-100 text-blue-800",
    },
    popularItems: ["Amul Gold Full Cream Milk", "Amul Taaza Toned Milk", "Amul Masti Dahi", "Fresh Malai Paneer", "Amul Butter", "Pure Desi Ghee", "Amul Cheese Slices"],
    sampleProducts: [
      {
        id: "fresh-milk",
        name: "Amul Gold & Amul Taaza Milk",
        hindiName: "अमूल गोल्ड एवं अमूल ताज़ा दूध",
        category: "dairy-products",
        description: "Fresh daily pasteurized milk pouches for morning tea, coffee, and family nutrition.",
        popularBrands: ["Amul Gold", "Amul Taaza", "Devbhog"],
        commonSizes: ["500 ml", "1 Litre"],
        tag: "Fresh Daily Morning"
      },
      {
        id: "dahi-curd",
        name: "Amul Masti Dahi & Fresh Curd Pouch",
        hindiName: "अमूल मस्ती दही",
        category: "dairy-products",
        description: "Thick, creamy set curd perfect for meals, raita, and lassi.",
        popularBrands: ["Amul Masti", "Devbhog"],
        commonSizes: ["200g", "400g Pouch / Tub", "1 kg"],
      },
      {
        id: "fresh-paneer",
        name: "Fresh Malai Paneer",
        hindiName: "ताजा मलाई पनीर",
        category: "dairy-products",
        description: "Soft, rich cottage cheese for delicious matar paneer, palak paneer & snacks.",
        popularBrands: ["Amul Fresh Paneer", "Local Fresh Dairy"],
        commonSizes: ["200g", "500g"],
        tag: "Fresh Daily"
      },
      {
        id: "desi-ghee",
        name: "Pure Desi Ghee (Amul / Patanjali)",
        hindiName: "शुद्ध दानेदार देसी घी",
        category: "dairy-products",
        description: "Traditional golden aromatic ghee for rotis, dal tadka, and home puja.",
        popularBrands: ["Amul Pure Ghee", "Patanjali Cow Ghee", "Gowardhan"],
        commonSizes: ["500 ml", "1 Litre Jar/Tin"],
        tag: "Pure & Traditional"
      },
      {
        id: "butter-cheese",
        name: "Amul Salted Butter & Cheese Slices",
        hindiName: "अमूल बटर एवं चीज़ स्लाइस / क्यूब्स",
        category: "dairy-products",
        description: "Utterly butterly delicious table butter and processed cheese slices/cubes.",
        popularBrands: ["Amul", "Britannia"],
        commonSizes: ["100g", "500g", "Pack of 10 Slices"],
      }
    ]
  },
  {
    id: "beverages-drinks",
    title: "Tea, Coffee & Cold Drinks",
    hindiTitle: "चाय, कॉफी, कोल्ड ड्रिंक्स एवं फ्रूट जूस",
    emoji: "🥤",
    iconName: "Coffee",
    tagline: "Tata Tea Gold, Nescafe, Thums Up, Sprite, Sting, Maaza & RoohAfza",
    description: "Strong tea leaves (Tata Tea, Red Label, Wagh Bakri), Nescafe / Bru Coffee, chilled soft drinks (Thums Up, Sprite, Coca-Cola, Sting, Fanta), Maaza mango juice, and RoohAfza.",
    colorScheme: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-900",
      badge: "bg-emerald-100 text-emerald-800",
    },
    popularItems: ["Tata Tea Gold", "Red Label Tea", "Nescafe Classic Coffee", "Thums Up (Chilled)", "Sprite", "Sting Energy", "Maaza / Frooti", "Glucon-D"],
    sampleProducts: [
      {
        id: "tea-chai-patti",
        name: "Tata Tea Gold & Red Label Chai Patti",
        hindiName: "टाटा टी गोल्ड एवं रेड लेबल चाय",
        category: "beverages-drinks",
        description: "Kadak taste and refreshing aroma for morning and evening family chai.",
        popularBrands: ["Tata Tea Gold", "Brooke Bond Red Label", "Wagh Bakri"],
        commonSizes: ["250g", "500g", "1 kg"],
        tag: "Daily Essential"
      },
      {
        id: "cold-drinks-soda",
        name: "Chilled Soft Drinks (Thums Up, Sprite, Coke)",
        hindiName: "ठंडी कोल्ड ड्रिंक्स (थम्स अप, स्प्राइट, कोक)",
        category: "beverages-drinks",
        description: "Chilled carbonated soft drinks available in cold bottles and cans.",
        popularBrands: ["Thums Up", "Sprite", "Coca-Cola", "Sting Energy", "Limca"],
        commonSizes: ["250 ml", "600 ml", "1.25 L", "2.25 L"],
        tag: "Chilled Ready"
      },
      {
        id: "instant-coffee",
        name: "Nescafe Classic & Bru Instant Coffee",
        hindiName: "नेस्कैफे एवं ब्रू कॉफी",
        category: "beverages-drinks",
        description: "Rich roasted coffee granules for refreshing hot coffee or iced cold coffee.",
        popularBrands: ["Nescafe Classic", "BRU Instant"],
        commonSizes: ["₹2 / ₹10 Sachets", "50g Jar", "100g Pouch"],
      },
      {
        id: "fruit-juices-maaza",
        name: "Maaza, Frooti & Real Fruit Juices",
        hindiName: "माज़ा, फ्रूटी एवं रियल फ्रूट जूस",
        category: "beverages-drinks",
        description: "Rich Alphonso mango pulp juice and mixed fruit juices in chilled tetra packs & bottles.",
        popularBrands: ["Maaza", "Frooti", "Real Fruit Power"],
        commonSizes: ["200 ml Tetra Pack", "600 ml", "1.2 Litre Bottle"],
      }
    ]
  },
  {
    id: "biscuits-bakery",
    title: "Biscuits, Cookies & Bakery",
    hindiTitle: "बिस्कुट, कुकीज, रस्क एवं ताजा ब्रेड",
    emoji: "🍪",
    iconName: "Cookie",
    tagline: "Parle-G, Good Day, Marie Gold, Hide & Seek, Oreo, Suji Rusk & fresh bread",
    description: "Everyday tea biscuits, Britannia Good Day butter cookies, Dark Fantasy, Bourbon, Oreo, Hide & Seek, crispy double-baked Suji Rusk/Toast, sandwich bread, and burger pav.",
    colorScheme: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-900",
      badge: "bg-amber-100 text-amber-800",
    },
    popularItems: ["Parle-G", "Britannia Good Day", "Marie Gold", "Hide & Seek", "Oreo & Bourbon", "Suji Rusk / Toast", "Fresh Sandwich Bread"],
    sampleProducts: [
      {
        id: "tea-biscuits",
        name: "Parle-G & Britannia Marie Gold",
        hindiName: "पारले-जी एवं ब्रिटानिया मैरी गोल्ड",
        category: "biscuits-bakery",
        description: "India's favorite daily tea biscuits with glucose & wheat goodness.",
        popularBrands: ["Parle-G", "Britannia Marie Gold"],
        commonSizes: ["₹5 / ₹10 Pack", "Family Pack (500g / 1kg)"],
        tag: "All-Time Classic"
      },
      {
        id: "butter-cookies-cream",
        name: "Britannia Good Day, Hide & Seek, Oreo",
        hindiName: "गुड डे बटर, हाइड एंड सीक एवं ओरियो",
        category: "biscuits-bakery",
        description: "Rich cashew butter cookies, choco-chip cookies, and cream sandwiches.",
        popularBrands: ["Britannia Good Day", "Parle Hide & Seek", "Cadbury Oreo", "Britannia Bourbon"],
        commonSizes: ["Single Pack", "Multi-Pack / Family Box"],
      },
      {
        id: "rusk-toast",
        name: "Crispy Suji & Elaichi Rusk (Toast)",
        hindiName: "कुरकुरा सूजी व इलायची रस्क (टोस्ट)",
        category: "biscuits-bakery",
        description: "Double-baked extra crunchy rusks for morning and evening chai dipping.",
        popularBrands: ["Britannia Toastea", "Parle Rusk", "Fresh Bakery Toast"],
        commonSizes: ["200g", "400g"],
        tag: "Morning Chai Must"
      },
      {
        id: "fresh-bread-pav",
        name: "Fresh Daily Sandwich Bread & Pav",
        hindiName: "ताजा ब्रेड एवं पाव",
        category: "biscuits-bakery",
        description: "Soft white sandwich bread, brown bread, and burger / vada pav buns.",
        popularBrands: ["Britannia Bread", "Modern"],
        commonSizes: ["Small Loaf", "Large Loaf", "Pav Pack (6 pcs)"],
        tag: "Fresh Morning Stock"
      }
    ]
  },
  {
    id: "spices-masalas",
    title: "Spices & Kitchen Masalas",
    hindiTitle: "शुद्ध हल्दी, मिर्च, धनिया एवं एवरेस्ट मसाले",
    emoji: "🌶️",
    iconName: "Flame",
    tagline: "Everest, MDH, Catch Garam Masala, Sabji Masala, Hing & Whole Spices",
    description: "Pure turmeric (Haldi), Kashmiri red chilli, dhaniya powder, Everest Garam Masala, Kitchen King, Chhole Masala, Sambhar Masala, Catch Jeera, Rai, and Bandhani Hing.",
    colorScheme: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-900",
      badge: "bg-red-100 text-red-800",
    },
    popularItems: ["Everest Garam Masala", "MDH Haldi / Mirch", "Kitchen King", "Catch Jeera", "Bandhani Hing", "Whole Khada Masala"],
    sampleProducts: [
      {
        id: "powdered-spices",
        name: "Haldi, Mirch & Dhaniya Powder",
        hindiName: "हल्दी, लाल मिर्च एवं धनिया पाउडर",
        category: "spices-masalas",
        description: "Vibrant colour, authentic aroma and zero artificial additives.",
        popularBrands: ["Everest", "MDH", "Catch", "Tata Sampann", "Goldiee"],
        commonSizes: ["100g", "200g", "500g"],
        tag: "Daily Essential"
      },
      {
        id: "blended-curry-masalas",
        name: "Everest Kitchen King, Garam & Sabji Masala",
        hindiName: "किचन किंग, गरम मसाला व सब्जी मसाला",
        category: "spices-masalas",
        description: "Special recipe spice blends for delicious restaurant-quality gravies.",
        popularBrands: ["Everest", "MDH", "Catch"],
        commonSizes: ["50g", "100g"],
      },
      {
        id: "jeera-rai-hing",
        name: "Catch Jeera, Rai Seeds & Strong Hing",
        hindiName: "जीरा, राई एवं शुद्ध हींग",
        category: "spices-masalas",
        description: "Cleaned cumin seeds, mustard seeds, and aromatic compounding asafoetida.",
        popularBrands: ["Catch", "LG Hing", "Bandhani Hing"],
        commonSizes: ["50g", "100g", "250g"],
      }
    ]
  },
  {
    id: "kitchen-essentials",
    title: "Cooking Oils & Kitchen Essentials",
    hindiTitle: "फॉर्च्यून सरसों तेल, रिफाइंड, सोयाबीन एवं पापड़",
    emoji: "🍳",
    iconName: "CookingPot",
    tagline: "Fortune Kachi Ghani Mustard Oil, Refined Oil, Soya Chunks & Lijjat Papad",
    description: "Pungent kachi ghani mustard oil for authentic taste, light refined sunflower & soyabean oil, Nutrela/Fortune soya chunks, and crispy spiced Lijjat urad dal papad.",
    colorScheme: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-900",
      badge: "bg-amber-100 text-amber-800",
    },
    popularItems: ["Fortune Kachi Ghani Mustard Oil", "Fortune Refined Sunflower/Soyabean Oil", "Fortune Soya Chunks", "Lijjat Papad", "Cooking Vinegar"],
    sampleProducts: [
      {
        id: "cooking-oils",
        name: "Fortune Mustard Oil & Refined Oil",
        hindiName: "फॉर्च्यून सरसों तेल एवं रिफाइंड तेल",
        category: "kitchen-essentials",
        description: "100% pure kachi ghani mustard oil and heart-healthy light refined oil.",
        popularBrands: ["Fortune", "Dhara", "Engine Mustard Oil"],
        commonSizes: ["1 Litre Pouch / Bottle", "5 Litre Jar"],
        tag: "Daily Essential"
      },
      {
        id: "soya-chunks-papad",
        name: "Fortune Soya Chunks & Lijjat Papad",
        hindiName: "सोया बड़ी एवं लिज्जत पापड़",
        category: "kitchen-essentials",
        description: "High-protein soft soya chunks and authentic pepper/cumin urad dal papads.",
        popularBrands: ["Fortune Soya", "Nutrela", "Lijjat Papad"],
        commonSizes: ["200g", "500g Pack"],
      }
    ]
  },
  {
    id: "chocolates-sweets",
    title: "Chocolates, Candies & Sweets",
    hindiTitle: "डेयरी मिल्क, किटकैट, फाइव स्टार एवं टॉफी",
    emoji: "🍫",
    iconName: "Candy",
    tagline: "Cadbury Dairy Milk, Silk, KitKat, 5-Star, Munch, Pulse & Mithai Tins",
    description: "Cadbury Dairy Milk, Dairy Milk Silk, Nestle KitKat, 5-Star, Munch, Perk, Gems, Pulse candies, Choclairs, Haldiram's Soan Papdi, and ready Gulab Jamun tins.",
    colorScheme: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-900",
      badge: "bg-purple-100 text-purple-800",
    },
    popularItems: ["Cadbury Dairy Milk", "Cadbury Dairy Milk Silk", "Nestle KitKat", "Cadbury 5-Star", "Nestle Munch", "Pass Pass Pulse Candy", "Haldiram Soan Papdi"],
    sampleProducts: [
      {
        id: "chocolates-bars",
        name: "Cadbury Dairy Milk & KitKat Bars",
        hindiName: "कैडबरी डेयरी मिल्क एवं किटकैट",
        category: "chocolates-sweets",
        description: "Rich creamy milk chocolates and crispy wafer bars for treats and gifts.",
        popularBrands: ["Cadbury Dairy Milk", "Nestle KitKat", "Cadbury Silk", "5-Star"],
        commonSizes: ["₹10", "₹20", "₹40", "₹80 Bars", "Silk (₹175)"],
        tag: "Kids & Treats"
      },
      {
        id: "candies-toffee",
        name: "Pulse Candy, Choclairs & Candies",
        hindiName: "पल्स कैंडी, चॉकलेट्स एवं टॉफी",
        category: "chocolates-sweets",
        description: "Kachcha aam pulse candy, creamy choclairs, alpenliebe, and lollipops.",
        popularBrands: ["Pass Pass Pulse", "Cadbury Choclairs", "Alpenliebe"],
        commonSizes: ["₹1 / ₹2 Candies", "Family Pouch (50 pcs)"],
      },
      {
        id: "packaged-sweets-tins",
        name: "Haldiram Soan Papdi & Gulab Jamun Tin",
        hindiName: "सोन पापड़ी एवं गुलाब जामुन टिन",
        category: "chocolates-sweets",
        description: "Flaky melt-in-mouth soan papdi and ready-to-serve canned desi sweets.",
        popularBrands: ["Haldiram's", "Bikaji", "Gits"],
        commonSizes: ["500g Box", "1 kg Tin"],
      }
    ]
  },
  {
    id: "cleaning-hygiene",
    title: "Cleaning & Detergents",
    hindiTitle: "सर्फ एक्सेल, टाइड, विम बार, लाइजोल एवं हारपिक",
    emoji: "🧼",
    iconName: "Sparkles",
    tagline: "Surf Excel, Ariel, Tide, Vim Bar & Gel, Lizol Floor Cleaner & Harpic",
    description: "Washing powders and detergent bars for spotless clothes, grease-cutting lemon Vim bars & gel for sparkling utensils, and Lizol & Harpic for 99.9% germ-free home.",
    colorScheme: {
      bg: "bg-cyan-50",
      border: "border-cyan-200",
      text: "text-cyan-900",
      badge: "bg-cyan-100 text-cyan-800",
    },
    popularItems: ["Surf Excel Quick Wash", "Tide Plus Detergent", "Vim Dishwash Bar", "Vim Dishwash Gel", "Lizol Floor Cleaner", "Harpic Power Plus", "Scotch-Brite"],
    sampleProducts: [
      {
        id: "laundry-detergents",
        name: "Surf Excel & Tide Washing Powder",
        hindiName: "सर्फ एक्सेल एवं टाइड वॉशिंग पाउडर",
        category: "cleaning-hygiene",
        description: "Tough stain removal and fresh lasting fragrance for bucket and machine wash.",
        popularBrands: ["Surf Excel", "Tide Plus", "Ariel", "Rin Bar"],
        commonSizes: ["500g", "1 kg", "2 kg", "5 kg Saver Bag"],
        tag: "Household Must-Have"
      },
      {
        id: "dishwash-soaps",
        name: "Vim Dishwash Bar & Liquid Gel",
        hindiName: "विम बार एवं विम जेल",
        category: "cleaning-hygiene",
        description: "Power of 100 lemons for instant grease removal on steel, glass, and non-stick cookware.",
        popularBrands: ["Vim Bar", "Vim Gel", "Scotch-Brite"],
        commonSizes: ["Single Bar (₹10 / ₹20)", "500ml Gel Bottle", "Scrubber Pack"],
      },
      {
        id: "surface-toilet-cleaners",
        name: "Lizol Floor Cleaner & Harpic Power Plus",
        hindiName: "लाइजोल फर्श क्लीनर एवं हारपिक",
        category: "cleaning-hygiene",
        description: "Disinfectant surface cleaner and heavy-duty bathroom & toilet bowl cleaner.",
        popularBrands: ["Lizol (Pine / Citrus)", "Harpic Power Plus", "Colin"],
        commonSizes: ["500 ml", "1 Litre", "2 Litre Refill"],
      }
    ]
  },
  {
    id: "personal-care",
    title: "Personal Care & Toiletries",
    hindiTitle: "डेटॉल साबुन, शैम्पू, कोलगेट एवं हेयर ऑयल",
    emoji: "🧴",
    iconName: "Heart",
    tagline: "Dettol, Lifebuoy, Dove, Clinic Plus, Colgate, Dabur Red & Parachute Oil",
    description: "Bathing soaps (Dettol, Dove, Santoor, Lifebuoy), Clinic Plus & Head & Shoulders shampoo, Colgate / Dabur Red toothpaste, and pure Parachute Coconut Hair Oil.",
    colorScheme: {
      bg: "bg-teal-50",
      border: "border-teal-200",
      text: "text-teal-900",
      badge: "bg-teal-100 text-teal-800",
    },
    popularItems: ["Dettol Soap Multi-pack", "Dove / Santoor Soap", "Clinic Plus Shampoo", "Colgate Strong Teeth", "Dabur Red Toothpaste", "Parachute Coconut Hair Oil"],
    sampleProducts: [
      {
        id: "bath-soaps",
        name: "Dettol, Dove & Santoor Bathing Soaps",
        hindiName: "डेटॉल, डव एवं संतूर साबुन",
        category: "personal-care",
        description: "Daily antibacterial protection, skin moisturizing, and natural sandalwood fragrance.",
        popularBrands: ["Dettol", "Dove", "Santoor", "Lifebuoy", "Lux"],
        commonSizes: ["Single Bar (₹10 / ₹40)", "Buy 3 Get 1 Free Multipack"],
        tag: "Daily Essential"
      },
      {
        id: "hair-care-shampoo",
        name: "Clinic Plus Shampoo & Parachute Hair Oil",
        hindiName: "क्लिनिक प्लस शैम्पू एवं पैराशूट नारियल तेल",
        category: "personal-care",
        description: "Strong roots, shiny hair, and pure nourishing coconut oil.",
        popularBrands: ["Clinic Plus", "Head & Shoulders", "Parachute Coconut Oil", "Dabur Amla"],
        commonSizes: ["₹1 / ₹2 Sachets", "80ml / 180ml Bottle", "Hair Oil 100ml / 200ml / 500ml"],
      },
      {
        id: "oral-care-toothpaste",
        name: "Colgate Strong Teeth & Dabur Red Paste",
        hindiName: "कोलगेट एवं डाबर लाल दंत मंजन/पेस्ट",
        category: "personal-care",
        description: "Cavity protection, fresh breath, and Ayurvedic clove/pudina gum care.",
        popularBrands: ["Colgate Strong Teeth", "Dabur Red Paste", "Sensodyne"],
        commonSizes: ["100g", "150g Saver Pack", "Toothbrush Pack"],
      }
    ]
  },
  {
    id: "puja-festive-samagri",
    title: "Puja & Festive Samagri",
    hindiTitle: "अगरबत्ती, शुद्ध कपूर, धूप, दीया बत्ती एवं माचिस",
    emoji: "🪔",
    iconName: "Sun",
    tagline: "Cycle Pure Agarbatti, Mangalam Camphor, Cotton Diya Wicks & Homelites",
    description: "Cycle Pure Three-in-One Agarbatti, Zed Black, Mangalam Bhimseni Camphor, handcrafted cotton diya wicks (phool batti), puja til oil, and safety matchbox bundles.",
    colorScheme: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      text: "text-amber-900",
      badge: "bg-amber-100 text-amber-800",
    },
    popularItems: ["Cycle Three-in-One Agarbatti", "Mangalam Bhimseni Camphor", "Cotton Diya Wicks (Phool Batti)", "Homelites Matchbox Bundle", "Puja Diya Ghee / Til Oil"],
    sampleProducts: [
      {
        id: "incense-agarbatti",
        name: "Cycle Pure Agarbatti & Dhoop Sticks",
        hindiName: "साइकिल प्योर अगरबत्ती एवं धूप",
        category: "puja-festive-samagri",
        description: "Divine long-lasting natural fragrance for daily morning and evening worship.",
        popularBrands: ["Cycle Pure", "Zed Black 3-in-1", "Mangaldeep"],
        commonSizes: ["Zipper Pack", "Box (100g / 250g)"],
        tag: "Daily Devotion"
      },
      {
        id: "camphor-wicks",
        name: "Mangalam Pure Camphor & Cotton Phool Batti",
        hindiName: "मंगलम शुद्ध कपूर टिकिया व फूल बत्ती",
        category: "puja-festive-samagri",
        description: "100% pure residue-free camphor for daily aarti and long-burning cotton batti.",
        popularBrands: ["Mangalam Pure Camphor", "Handcrafted Phool Batti"],
        commonSizes: ["50g Jar", "100g Pouch", "Batti Pack 100 pcs"],
      }
    ]
  },
  {
    id: "daily-use-products",
    title: "Mosquito Repellents & Utilities",
    hindiTitle: "गुड नाइट, ऑल आउट, बैटरी, फॉइल एवं माचिस",
    emoji: "🔋",
    iconName: "Zap",
    tagline: "Good Knight Flash, All Out Refills, Eveready Cells & Freshwrapp Foil",
    description: "Good Knight Gold Flash mosquito refills, All Out, Eveready/Duracell AA/AAA pencil cells, Hindalco Freshwrapp aluminium roti foil, emergency candles, and matchbox bundles.",
    colorScheme: {
      bg: "bg-indigo-50",
      border: "border-indigo-200",
      text: "text-indigo-900",
      badge: "bg-indigo-100 text-indigo-800",
    },
    popularItems: ["Good Knight Liquid Refill", "All Out Machine + Refill", "Eveready AA / AAA Pencil Cells", "Freshwrapp Roti Foil", "Emergency Wax Candles"],
    sampleProducts: [
      {
        id: "mosquito-repellents",
        name: "Good Knight & All Out Mosquito Refills",
        hindiName: "गुड नाइट एवं ऑल आउट रिफिल",
        category: "daily-use-products",
        description: "Reliable protection against mosquitoes for safe, peaceful sleep.",
        popularBrands: ["Good Knight Flash", "All Out", "Mortein"],
        commonSizes: ["Single Refill (45ml)", "Combo Pack (Machine + Refill)"],
        tag: "Household Essential"
      },
      {
        id: "batteries-foil",
        name: "Eveready Batteries & Freshwrapp Roti Foil",
        hindiName: "एवरेडी बैटरी एवं रोटी फॉइल पेपर",
        category: "daily-use-products",
        description: "Leak-proof batteries for remotes/clocks and food-grade aluminium foil.",
        popularBrands: ["Eveready Red", "Duracell", "Freshwrapp"],
        commonSizes: ["Pair Cells (2 pcs)", "Pack of 4", "9m / 18m Foil Roll"],
      }
    ]
  }
];
