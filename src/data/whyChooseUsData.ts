export interface WhyChoosePillar {
  id: string;
  iconName: string;
  title: string;
  titleHindi: string;
  description: string;
  badge: string;
  accentBg: string;
  iconColor: string;
}

export const WHY_CHOOSE_DATA: WhyChoosePillar[] = [
  {
    id: "one-stop-convenience",
    iconName: "Store",
    title: "Everything Under One Roof",
    titleHindi: "सभी दैनिक सामान एक ही दुकान पर",
    description: "From morning dairy and daily groceries to evening snacks, kitchen masalas and cleaning supplies — complete your entire shopping in one convenient stop.",
    badge: "15+ Categories",
    accentBg: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-700 bg-emerald-100",
  },
  {
    id: "neighborhood-location",
    iconName: "MapPin",
    title: "Convenient Neighborhood Location",
    titleHindi: "संजय नगर, टिकरापारा में सबसे पास",
    description: "Centrally located in Sanjay Nagar, Tikrapara, Raipur. Just a 2-minute walk or quick ride away. No need to travel far or spend hours in big supermarket traffic.",
    badge: "Sanjay Nagar, Raipur",
    accentBg: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-700 bg-amber-100",
  },
  {
    id: "fresh-trusted-brands",
    iconName: "ShieldCheck",
    title: "Fresh Stocks & Trusted Brands",
    titleHindi: "ताजा स्टॉक एवं भरोसेमंद ब्रांड्स",
    description: "We stock only authentic, fresh products from India's most trusted brands (Amul, Aashirvaad, Tata, Fortune, MDH, Everest, Surf Excel, Britannia, and more).",
    badge: "100% Genuine",
    accentBg: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-700 bg-blue-100",
  },
  {
    id: "whatsapp-parchi-ordering",
    iconName: "MessageCircle",
    title: "Easy WhatsApp List Ordering",
    titleHindi: "व्हाट्सएप पर पर्ची भेजें, तैयार पाएं",
    description: "Busy day? Simply type or send your grocery list (parchi) on WhatsApp. We pack your items carefully so your order is ready for speedy counter pickup.",
    badge: "Zero Waiting Time",
    accentBg: "bg-whatsapp-50 border-emerald-300",
    iconColor: "text-emerald-700 bg-emerald-100",
  },
  {
    id: "friendly-local-service",
    iconName: "Smile",
    title: "Warm & Friendly Neighborhood Service",
    titleHindi: "अपनापन और विनम्र व्यवहार",
    description: "As a local family store, we treat every customer with genuine respect, honesty, and prompt service. We understand your daily household requirements.",
    badge: "Personal Touch",
    accentBg: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-700 bg-orange-100",
  },
  {
    id: "easy-digital-payments",
    iconName: "QrCode",
    title: "Hassle-Free UPI & Cash Payments",
    titleHindi: "सभी UPI ऐप्स एवं नकद भुगतान",
    description: "Pay quickly via Google Pay, PhonePe, Paytm, BHIM UPI QR Code or cash. Transparent billing with quick and smooth checkout.",
    badge: "All UPI Accepted",
    accentBg: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-700 bg-purple-100",
  }
];
