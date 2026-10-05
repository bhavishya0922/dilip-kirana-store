import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { STORE_CONFIG } from '../config/storeConfig';

export interface ListItem {
  id: string;
  name: string;
  hindiName?: string;
  category?: string;
  quantity: number;
  unit?: string;
  brandHint?: string;
  mrp?: number;
}

export type OrderFulfillmentMode = 'pickup' | 'delivery';

interface ShoppingListContextType {
  items: ListItem[];
  addItem: (
    name: string,
    category?: string,
    brandHint?: string,
    unit?: string,
    mrp?: number,
    hindiName?: string
  ) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearList: () => void;
  customerName: string;
  setCustomerName: (name: string) => void;
  customerArea: string;
  setCustomerArea: (area: string) => void;
  customerNote: string;
  setCustomerNote: (note: string) => void;
  fulfillmentMode: OrderFulfillmentMode;
  setFulfillmentMode: (mode: OrderFulfillmentMode) => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
  sendListViaWhatsApp: () => void;
  copyListToClipboard: () => boolean;
  totalItemCount: number;
  estimatedTotalAmount: number;
}

const LOCAL_STORAGE_KEY = 'dilip_kirana_shopping_list_v3';

const ShoppingListContext = createContext<ShoppingListContextType | undefined>(undefined);

export const ShoppingListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<ListItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn("Could not load stored shopping list", e);
    }
    // Starter items showing bilingual names and exact MRP
    return [
      { 
        id: 'item-1', 
        name: "Lay's India's Magic Masala Potato Chips", 
        hindiName: "लेज़ मैजिक मसाला आलू चिप्स",
        category: 'Chips & Namkeen', 
        quantity: 2, 
        unit: '₹20 Pack', 
        brandHint: "Lay's",
        mrp: 20
      },
      { 
        id: 'item-2', 
        name: 'Kurkure Masala Munch Corn Curls', 
        hindiName: 'कुरकुरे मसाला मंच',
        category: 'Chips & Namkeen', 
        quantity: 2, 
        unit: '₹20 Pack', 
        brandHint: 'Kurkure',
        mrp: 20
      },
      { 
        id: 'item-3', 
        name: 'Nestle Maggi 2-Minute Masala (4-in-1 Multipack)', 
        hindiName: 'नेस्ले मैगी 2-मिनट मसाला (4-पैक)',
        category: 'Instant Food', 
        quantity: 1, 
        unit: '4-Pack (280g)', 
        brandHint: 'Maggi',
        mrp: 56
      },
      { 
        id: 'item-4', 
        name: 'Amul Gold Full Cream Fresh Milk (1 Litre)', 
        hindiName: 'अमूल गोल्ड फुल क्रीम ताजा दूध (1 लीटर)',
        category: 'Dairy', 
        quantity: 1, 
        unit: '1 Litre Pouch', 
        brandHint: 'Amul',
        mrp: 66
      },
      { 
        id: 'item-5', 
        name: 'Aashirvaad Superior Whole Wheat Chakki Atta', 
        hindiName: 'आशीर्वाद शुद्ध चक्की आटा (5 किग्रा)',
        category: 'Groceries & Staples', 
        quantity: 1, 
        unit: '5 kg Bag', 
        brandHint: 'Aashirvaad',
        mrp: 215
      },
    ];
  });

  const [customerName, setCustomerName] = useState('');
  const [customerArea, setCustomerArea] = useState('Sanjay Nagar, Tikrapara');
  const [customerNote, setCustomerNote] = useState('');
  const [fulfillmentMode, setFulfillmentMode] = useState<OrderFulfillmentMode>('pickup');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn("Could not save shopping list", e);
    }
  }, [items]);

  const addItem = (
    name: string,
    category?: string,
    brandHint?: string,
    unit?: string,
    mrp?: number,
    hindiName?: string
  ) => {
    if (!name.trim()) return;

    setItems((prev) => {
      const trimmedName = name.trim();
      const existingIndex = prev.findIndex(
        (i) => i.name.toLowerCase() === trimmedName.toLowerCase()
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
          mrp: mrp !== undefined ? mrp : updated[existingIndex].mrp,
          hindiName: hindiName || updated[existingIndex].hindiName,
        };
        return updated;
      } else {
        const newItem: ListItem = {
          id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
          name: trimmedName,
          hindiName: hindiName || '',
          category: category || 'General Store Items',
          quantity: 1,
          unit: unit || '1 Pack / Unit',
          brandHint: brandHint || '',
          mrp: mrp,
        };
        return [...prev, newItem];
      }
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as ListItem[]
    );
  };

  const clearList = () => {
    setItems([]);
  };

  const totalItemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const estimatedTotalAmount = items.reduce((acc, item) => {
    if (item.mrp && item.mrp > 0) {
      return acc + (item.mrp * item.quantity);
    }
    return acc;
  }, 0);

  const buildFormattedMessage = (): string => {
    const isDelivery = fulfillmentMode === 'delivery';
    
    let msg = `🛒 *DILIP KIRANA STORE - GROCERY ORDER / किराना पर्ची*\n`;
    msg += `📍 *Store:* H.No. 41/212, Jhanda Chowk, Sanjay Nagar, Raipur\n`;
    msg += `👤 *Owner:* Bhavishya Dewangan | 📞 8602777588\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    
    if (isDelivery) {
      msg += `🚚 *Fulfillment Preference:* HOME DELIVERY (Monthly/Bulk Order ₹2,999+)\n`;
      msg += `⏳ *Advance Notice:* 3+ Hours Ahead | Radius: Under 5km\n`;
    } else {
      msg += `🏪 *Fulfillment Preference:* IN-STORE COUNTER PICKUP (Zero Waiting Time)\n`;
    }

    if (customerName.trim()) {
      msg += `👤 *Customer Name:* ${customerName.trim()}\n`;
    }
    if (customerArea.trim()) {
      msg += `🏡 *Customer Address/Area:* ${customerArea.trim()}\n`;
    }
    
    msg += `\n📦 *Order Items (${items.length} types / ${totalItemCount} total units):*\n`;

    items.forEach((item, index) => {
      const brandStr = item.brandHint ? ` (${item.brandHint})` : '';
      const unitStr = item.unit ? ` [${item.unit}]` : '';
      const hindiStr = item.hindiName ? ` • ${item.hindiName}` : '';
      const mrpStr = item.mrp ? ` (MRP: ₹${item.mrp} x ${item.quantity} = ₹${item.mrp * item.quantity})` : '';
      msg += `${index + 1}. *${item.name}*${hindiStr}${brandStr}${unitStr} ➔ *Qty: ${item.quantity}*${mrpStr}\n`;
    });

    if (estimatedTotalAmount > 0) {
      msg += `\n💰 *Estimated Total MRP Bill:* ₹${estimatedTotalAmount.toLocaleString('en-IN')}/-\n`;
    }

    if (customerNote.trim()) {
      msg += `\n📝 *Special Note:* ${customerNote.trim()}\n`;
    }

    msg += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
    if (isDelivery) {
      msg += `Please verify item stock, confirm final bill amount with any discounts, and share delivery timing.\n`;
    } else {
      msg += `Please keep the grocery packet ready for pickup at the Sanjay Nagar counter.\n`;
    }
    msg += `_Sent via Dilip Kirana Store Digital Parchi (Owner: Bhavishya Dewangan)_`;

    return msg;
  };

  const sendListViaWhatsApp = () => {
    if (items.length === 0) return;

    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#22c55e', '#16a34a', '#f59e0b', '#d97706'],
      });
    } catch (e) {
      // safe fallback
    }

    const message = buildFormattedMessage();
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${STORE_CONFIG.WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const copyListToClipboard = (): boolean => {
    if (items.length === 0) return false;
    const message = buildFormattedMessage();
    navigator.clipboard.writeText(message);
    return true;
  };

  return (
    <ShoppingListContext.Provider
      value={{
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
        isDrawerOpen,
        setIsDrawerOpen,
        sendListViaWhatsApp,
        copyListToClipboard,
        totalItemCount,
        estimatedTotalAmount,
      }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};

export const useShoppingList = () => {
  const context = useContext(ShoppingListContext);
  if (!context) {
    throw new Error('useShoppingList must be used within a ShoppingListProvider');
  }
  return context;
};
