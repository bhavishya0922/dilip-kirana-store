# 🛒 Dilip Kirana Store — Hyperlocal Grocery Ordering & Catalog Platform

<div align="center">

  [![Live Demo](https://img.shields.io/badge/Live_Demo-dilip--kirana--store.vercel.app-00DC82?style=for-the-badge&logo=vercel&logoColor=white)](https://dilip-kirana-store.vercel.app)
  [![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

  <br/>

  **A modern, mobile-first web application engineered for a local grocery store in Raipur, Chhattisgarh, bridging neighborhood retail with instant WhatsApp commerce and digital order lists.**

  <br/>

  [Explore Live App](https://dilip-kirana-store.vercel.app) • [Report Issue](https://github.com/bhavishya0922/dilip-kirana-store/issues) • [Developer Profile](https://github.com/bhavishya0922)

</div>

---

## 📌 Project Overview

**Dilip Kirana Store** is an active, production-deployed web application designed and built for a physical neighborhood retail store located in Sanjay Nagar, Tikrapara, Raipur. 

In traditional neighborhood commerce, customers frequently experience waiting times while grocery lists (*"parchi"*) are handwritten, items are fetched from shelves, and availability is manually verified. This platform digitizes the customer journey with:
- Instant digital catalog exploration across 10+ grocery categories.
- An interactive **"Quick Parchi" (Grocery List Builder)** enabling shoppers to assemble orders in seconds.
- Direct **WhatsApp order dispatch** formatting itemized lists, quantities, and pricing for 1-click transmission to the store owner.
- Clear business logic enforcement (instant in-store counter pickup vs. scheduled bulk delivery rules).

---

## ✨ Key Features

- **📱 Mobile-First Responsive Design**: Optimized for smartphone touchscreens with sticky navigation, quick-add drawer, and clean touch targets.
- **📝 Interactive "Quick Parchi" Builder**: Customers create custom grocery orders by selecting staples, daily dairy, snacks, spices, and cleaning supplies.
- **💬 Direct WhatsApp Commerce**: Generates serialized, pre-formatted order text messages sent directly to the store WhatsApp number (`+91 8602777588`) with zero middleman fees.
- **⚡ Persistent Shopping Cart**: Utilizes React Context and browser `localStorage` to ensure orders are preserved even if the browser is accidentally closed or refreshed.
- **🔍 Instant Search & Category Filtering**: Fast keyword lookup across 200+ inventory items with real-time UI filtering.
- **🌐 Bilingual UI Elements**: Incorporates Hindi and English terminology commonly used by local shoppers (e.g., *"पर्ची"*, *"दैनिक आवश्यकताएं"*).
- **⏱️ Delivery Policy Guardrails**: Enforces store constraints (minimum ₹2,999 and 3+ hours notice for scheduled home deliveries within 5 km; free instant store pickup for any cart size).

---

## 🏗️ System Architecture & Workflow

```
[ Customer Mobile / Web Browser ]
               │
               ▼
      [ React 18 + Vite UI ]
         │               │
         ▼               ▼
[ Category Explorer ] [ Quick Parchi Drawer ]
         │               │
         └───────┬───────┘
                 │
                 ▼
     [ ShoppingListContext ] ──(Sync)──> [ Browser LocalStorage ]
                 │
                 ▼
    [ Order Payload Serializer ]
                 │
                 ▼
  [ WhatsApp Click-to-Chat API ]
                 │
                 ▼
   [ Store Owner WhatsApp Inbox ]
```

---

## 🛠️ Technology Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Framework** | React 18 | Component-driven UI architecture with declarative state updates |
| **Language** | TypeScript | Strong typing across product models, cart payloads, and event handlers |
| **Styling** | Tailwind CSS | Utility-first CSS ensuring lightweight, fast rendering and consistent design system |
| **Build Tool** | Vite 5 | Sub-second Hot Module Replacement (HMR) and optimized production bundles |
| **Icons** | Lucide React | Clean, lightweight SVG iconography |
| **State** | Context API | Global cart management without heavy external state libraries |
| **Deployment** | Vercel CDN | Continuous deployment linked directly to the main branch |

---

## 📂 Project Directory Structure

```text
dilip-kirana-store/
├── public/                 # Static assets and favicon
├── src/
│   ├── assets/             # Brand logos and hero imagery
│   ├── components/         # Modular UI components
│   │   ├── AboutOwnerSection.tsx    # Store background and heritage
│   │   ├── CategoryExplorer.tsx     # Filterable inventory catalog
│   │   ├── DeliveryPolicySection.tsx# Delivery rules & pickup terms
│   │   ├── EverydayMoments.tsx      # Quick essentials curation
│   │   ├── FAQSection.tsx           # Common customer questions
│   │   ├── FloatingWhatsApp.tsx     # Persistent 1-tap WhatsApp trigger
│   │   ├── Footer.tsx               # Store hours, address, and credits
│   │   ├── Hero.tsx                 # Value proposition banner
│   │   ├── HowToOrder.tsx           # Visual 3-step order walkthrough
│   │   ├── MobileBottomNav.tsx      # Fixed mobile bottom navigation
│   │   ├── Navbar.tsx               # Header with search & cart counter
│   │   ├── OwnerEditGuide.tsx       # Internal guide for updating stock
│   │   ├── QuickListParchi.tsx      # Interactive grocery list builder
│   │   ├── ShoppingListDrawer.tsx   # Slide-out cart & WhatsApp checkout
│   │   ├── StoreLocationHours.tsx   # Google Maps link & operating hours
│   │   └── WhyChooseUs.tsx          # Store reliability guarantees
│   ├── config/
│   │   └── storeConfig.ts           # Store telephone, address, WhatsApp config
│   ├── context/
│   │   └── ShoppingListContext.tsx  # Centralized cart state with LocalStorage
│   ├── data/
│   │   ├── categoriesData.ts        # Comprehensive inventory dataset
│   │   ├── everydayNeedsData.ts     # Curated daily essentials
│   │   └── whyChooseUsData.ts       # Store value proposition data
│   ├── App.tsx             # Root page layout
│   ├── index.css           # Global Tailwind directives
│   └── main.tsx            # React DOM mounting
├── index.html              # HTML shell with meta tags & SEO
├── package.json            # Project dependencies & npm scripts
├── tailwind.config.js      # Custom theme color extensions
├── tsconfig.json           # TypeScript compiler configuration
└── vercel.json             # Vercel routing configuration
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bhavishya0922/dilip-kirana-store.git
   cd dilip-kirana-store
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 📍 Store Information

- **Store Name**: Dilip Kirana Store (दिलीप किराना स्टोर्स)
- **Proprietor**: Bhavishya Dewangan
- **Location**: House No. 41/212, Near Jhanda Chowk, Sanjay Nagar, Tikrapara, Raipur, Chhattisgarh — 492001
- **Direct Contact / WhatsApp**: +91 8602777588
- **Live Production URL**: [https://dilip-kirana-store.vercel.app](https://dilip-kirana-store.vercel.app)

---

## 🗺️ Future Enhancements

- [ ] In-browser UPI QR-code generator for instant prepayments.
- [ ] Lightweight admin dashboard for dynamic product pricing and out-of-stock toggles.
- [ ] Progressive Web App (PWA) support with service workers for offline browsing.
- [ ] Customer order receipt generation (downloadable PDF).

---

## 👨‍💻 Author

**Bhavishya Dewangan**  
*3rd-Semester B.Tech Computer Science & Engineering Student*  
*Raipur, Chhattisgarh, India*  
- **GitHub**: [@bhavishya0922](https://github.com/bhavishya0922)  
- **Email**: bhavish0922@gmail.com  

---

<div align="center">
  <sub>Built with ❤️ and practical engineering for community commerce in Raipur.</sub>
</div>
