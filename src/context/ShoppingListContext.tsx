import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { STORE_CONFIG } from '../config/storeConfig';

export interface ListItem {
  id: string;
  name: string;
  category?: string;
  quantity: number;
  unit?: string;
  brandHint?: string;
}

export type OrderFulfillmentMode = 'pickup' | 'delivery';

interface ShoppingListContextType {
  items: ListItem[];
  addItem: (name: string, category?: string, brandHint?: string, unit?: string) => void;
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
}

const LOCAL_STORAGE_KEY = 'dilip_kirana_shopping_list_v2';

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
    // Starter items showing the rich variety
    return [
      { id: 'item-1', name: "Lay's India's Magic Masala Chips (₹20)", category: 'Chips & Namkeen', quantity: 2, unit: '₹20 Pack', brandHint: "Lay's" },
      { id: 'item-2', name: 'Kurkure Masala Munch (₹20)', category: 'Chips & Namkeen', quantity: 2, unit: '₹20 Pack', brandHint: 'Kurkure' },
      { id: 'item-3', name: 'Nestle Maggi 2-Minute Masala (4-Pack)', category: 'Instant Food', quantity: 1, unit: '4-Pack', brandHint: 'Maggi' },
      { id: 'item-4', name: 'Amul Gold Full Cream Milk (1L)', category: 'Dairy', quantity: 1, unit: '1 Litre', brandHint: 'Amul' },
      { id: 'item-5', name: 'Aashirvaad Whole Wheat Atta (5kg)', category: 'Groceries & Staples', quantity: 1, unit: '5 kg', brandHint: 'Aashirvaad' },
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

  const addItem = (name: string, category?: string, brandHint?: string, unit?: string) => {
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
        };
        return updated;
      } else {
        const newItem: ListItem = {
          id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
          name: trimmedName,
          category: category || 'General Store Items',
          quantity: 1,
          unit: unit || '1 Pack / Unit',
          brandHint: brandHint || '',
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

  const buildFormattedMessage = (): string => {
    const isDelivery = fulfillmentMode === 'delivery';
    
    let msg = `🛒 *DILIP KIRANA STORE - GROCERY ORDER / PARCHI*\n`;
    msg += `📍 *Store Location:* H.No. 41/212, Jhanda Chowk, Sanjay Nagar, Raipur\n`;
    msg += `👤 *Owner:* Bhavishya Dewangan | 📞 8602777588\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    
    if (isDelivery) {
      msg += `🚚 *Fulfillment Preference:* HOME DELIVERY (Bulk / Monthly Order ₹2,999+)\n`;
      msg += `⏳ *Advance Notice:* 3+ Hours Ahead | Radius: Under 5km\n`;
    } else {
      msg += `🏪 *Fulfillment Preference:* IN-STORE COUNTER PICKUP (Zero Wait Time)\n`;
    }

    if (customerName.trim()) {
      msg += `👤 *Customer Name:* ${customerName.trim()}\n`;
    }
    if (customerArea.trim()) {
      msg += `🏡 *Customer Address/Area:* ${customerArea.trim()}\n`;
    }
    
    msg += `\n📦 *Total Items List (${items.length} types / ${totalItemCount} units):*\n`;

    items.forEach((item, index) => {
      const brandStr = item.brandHint ? ` (${item.brandHint})` : '';
      const unitStr = item.unit ? ` - [${item.unit}]` : '';
      msg += `${index + 1}. *${item.name}*${brandStr} ${unitStr} ➔ *Qty: ${item.quantity}*\n`;
    });

    if (customerNote.trim()) {
      msg += `\n📝 *Special Instructions:* ${customerNote.trim()}\n`;
    }

    msg += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
    if (isDelivery) {
      msg += `Please verify item availability, confirm total bill, and let me know the scheduled delivery time.\n`;
    } else {
      msg += `Please keep the bag packed and ready for quick pickup.\n`;
    }
    msg += `_Sent via Dilip Kirana Store Website (Owner: Bhavishya Dewangan)_`;

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
