/**
 * ============================================================================
 * DILIP KIRANA STORE - CENTRAL STORE CONFIGURATION
 * ============================================================================
 * Owner: Bhavishya Dewangan
 * Store: Dilip Kirana Store
 * Location: H.No. 41/212, Near Jhanda Chowk, Sanjay Nagar, Tikrapara, Raipur (C.G.)
 * WhatsApp / Calling: 8602777588
 * ============================================================================
 */

export interface StoreHours {
  display: string;
  openTime: string;
  closeTime: string;
  openHour: number; // 7 AM
  closeHour: number; // 10 PM
  allDays: string;
  schedule: {
    [key: string]: string;
  };
}

export interface DeliveryPolicy {
  minOrderValue: number; // 2999
  advanceNoticeHours: number; // 3 hours
  maxRadiusKm: number; // 5 km
  policyHeadline: string;
  policyNote: string;
  pickupHeadline: string;
}

export interface StoreConfig {
  STORE_NAME: string;
  HINDI_NAME: string;
  OWNER_NAME: string;
  OWNER_NAME_HINDI: string;
  TAGLINE: string;
  TAGLINE_HINDI: string;
  SUBTITLE: string;
  BUSINESS_TYPE: string;
  
  // Location & Address
  ADDRESS: {
    houseNumber: string;
    landmark: string;
    locality: string;
    suburb: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    fullAddress: string;
    shortAddress: string;
    areaDescription: string;
  };

  // Contact Information
  PHONE_NUMBER: string;
  PHONE_NUMBER_DISPLAY: string;
  WHATSAPP_NUMBER: string;
  WHATSAPP_NUMBER_DISPLAY: string;
  
  // Delivery & Pickup Rules
  DELIVERY_POLICY: DeliveryPolicy;

  // Working Hours
  STORE_HOURS: StoreHours;

  // Online Maps & Navigation
  GOOGLE_MAPS_SEARCH_URL: string;
  GOOGLE_MAPS_DIRECTIONS_URL: string;
  GOOGLE_MAPS_EMBED_URL: string;

  // Social Media
  INSTAGRAM_URL: string;
  FACEBOOK_URL: string;

  // Payment Options
  PAYMENT_METHODS: {
    cash: boolean;
    upi: boolean;
    phonepe: boolean;
    googlePay: boolean;
    paytm: boolean;
    bhim: boolean;
  };

  HIGHLIGHTS: string[];
}

export const STORE_CONFIG: StoreConfig = {
  STORE_NAME: "Dilip Kirana Store",
  HINDI_NAME: "दिलीप किराना स्टोर",
  OWNER_NAME: "Bhavishya Dewangan",
  OWNER_NAME_HINDI: "भविष्य देवांगन",
  TAGLINE: "Daily needs, general items, all in one place.",
  TAGLINE_HINDI: "दैनिक आवश्यकताएं, जनरल सामान — सब कुछ एक ही जगह पर।",
  SUBTITLE: "Your trusted neighborhood kirana and daily essentials store near Jhanda Chowk, Sanjay Nagar, Tikrapara, Raipur.",
  BUSINESS_TYPE: "Local General Store / Kirana Store",

  ADDRESS: {
    houseNumber: "House No. 41/212",
    landmark: "Near Jhanda Chowk",
    locality: "Sanjay Nagar",
    suburb: "Tikrapara",
    city: "Raipur",
    state: "Chhattisgarh",
    country: "India",
    pincode: "492001",
    fullAddress: "House No. 41/212, Near Jhanda Chowk, Sanjay Nagar, Tikrapara, Raipur, Chhattisgarh 492001",
    shortAddress: "Jhanda Chowk, Sanjay Nagar, Raipur",
    areaDescription: "Centrally located at Jhanda Chowk, Sanjay Nagar, Tikrapara, Raipur.",
  },

  // Contact Details
  PHONE_NUMBER: "+91 86027 77588",
  PHONE_NUMBER_DISPLAY: "+91 86027 77588",
  WHATSAPP_NUMBER: "918602777588",
  WHATSAPP_NUMBER_DISPLAY: "+91 86027 77588",

  // Delivery & Pickup Rules
  DELIVERY_POLICY: {
    minOrderValue: 2999,
    advanceNoticeHours: 3,
    maxRadiusKm: 5,
    policyHeadline: "Home Delivery on Orders ₹2,999+ (3+ Hours Advance Notice | Under 5 Km)",
    policyNote: "We do not offer regular instant delivery. Home delivery is available exclusively for bulk / monthly ration orders of ₹2,999 or above within a 5 km radius, and must be booked at least 3 hours in advance.",
    pickupHeadline: "Store Walk-in & Express Counter Pickup (No Minimum Order)",
  },
  
  STORE_HOURS: {
    display: "7:00 AM – 10:00 PM",
    openTime: "07:00 AM",
    closeTime: "10:00 PM",
    openHour: 7, // 7 AM
    closeHour: 22, // 10 PM
    allDays: "Open All 7 Days (Monday to Sunday)",
    schedule: {
      "Monday": "7:00 AM – 10:00 PM",
      "Tuesday": "7:00 AM – 10:00 PM",
      "Wednesday": "7:00 AM – 10:00 PM",
      "Thursday": "7:00 AM – 10:00 PM",
      "Friday": "7:00 AM – 10:00 PM",
      "Saturday": "7:00 AM – 10:00 PM",
      "Sunday": "7:00 AM – 10:00 PM",
    }
  },

  GOOGLE_MAPS_SEARCH_URL: "https://www.google.com/maps/search/?api=1&query=Jhanda+Chowk+Sanjay+Nagar+Tikrapara+Raipur+Chhattisgarh",
  GOOGLE_MAPS_DIRECTIONS_URL: "https://www.google.com/maps/dir/?api=1&destination=Jhanda+Chowk+Sanjay+Nagar+Tikrapara+Raipur+Chhattisgarh",
  GOOGLE_MAPS_EMBED_URL: "https://maps.google.com/maps?q=Jhanda%20Chowk%2C%20Sanjay%20Nagar%2C%20Tikrapara%2C%20Raipur%2C%20Chhattisgarh&t=&z=16&ie=UTF8&iwloc=&output=embed",

  INSTAGRAM_URL: "",
  FACEBOOK_URL: "",

  PAYMENT_METHODS: {
    cash: true,
    upi: true,
    phonepe: true,
    googlePay: true,
    paytm: true,
    bhim: true,
  },

  HIGHLIGHTS: [
    "Located at Jhanda Chowk, Sanjay Nagar (H.No. 41/212)",
    "Owned & managed by Bhavishya Dewangan",
    "Express Counter Pickup & Stock Check for any order size",
    "Home delivery for bulk orders (₹2,999+ | 3+ hrs notice | under 5km)",
    "Wide range: Lay's, Kurkure, Maggi, Amul Dairy, Spices & Staples",
    "All UPI & Cash payments accepted"
  ]
};

/**
 * Helper utility to determine current live store status
 */
export function getStoreLiveStatus(): {
  isOpen: boolean;
  statusText: string;
  badgeColor: string;
  timeNote: string;
} {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTimeDec = currentHour + currentMinute / 60;

  const open = STORE_CONFIG.STORE_HOURS.openHour; // 7
  const close = STORE_CONFIG.STORE_HOURS.closeHour; // 22

  if (currentTimeDec >= open && currentTimeDec < close) {
    if (currentTimeDec >= close - 1) {
      return {
        isOpen: true,
        statusText: "Closing Soon (Closes 10:00 PM)",
        badgeColor: "bg-amber-500 text-white",
        timeNote: "Open now until 10:00 PM tonight",
      };
    }
    return {
      isOpen: true,
      statusText: "Open Now",
      badgeColor: "bg-emerald-600 text-white",
      timeNote: `Open today from ${STORE_CONFIG.STORE_HOURS.display}`,
    };
  } else {
    return {
      isOpen: false,
      statusText: "Closed Now (Opens 7:00 AM)",
      badgeColor: "bg-stone-600 text-white",
      timeNote: "Opens tomorrow at 7:00 AM",
    };
  }
}

/**
 * Helper to generate pre-filled WhatsApp links
 */
export function createWhatsAppUrl(customMessage?: string): string {
  const defaultText = encodeURIComponent(
    `Hello Bhavishya ji (Dilip Kirana Store), I would like to check item availability / place an order at your Jhanda Chowk, Sanjay Nagar store.`
  );
  const text = customMessage ? encodeURIComponent(customMessage) : defaultText;
  return `https://wa.me/${STORE_CONFIG.WHATSAPP_NUMBER}?text=${text}`;
}

/**
 * Helper to generate phone call link
 */
export function createPhoneCallUrl(): string {
  const cleaned = STORE_CONFIG.PHONE_NUMBER.replace(/[^0-9+]/g, '');
  return `tel:${cleaned}`;
}
