import React from 'react';
import { ShoppingListProvider } from './context/ShoppingListContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickListParchi } from './components/QuickListParchi';
import { DeliveryPolicySection } from './components/DeliveryPolicySection';
import { CategoryExplorer } from './components/CategoryExplorer';
import { EverydayMoments } from './components/EverydayMoments';
import { AboutOwnerSection } from './components/AboutOwnerSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowToOrder } from './components/HowToOrder';
import { StoreLocationHours } from './components/StoreLocationHours';
import { FAQSection } from './components/FAQSection';
import { OwnerEditGuide } from './components/OwnerEditGuide';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ShoppingListDrawer } from './components/ShoppingListDrawer';

export const App: React.FC = () => {
  const handleOpenSearch = () => {
    const el = document.getElementById('categories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ShoppingListProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-emerald-600 selection:text-white">
        {/* Navigation Header */}
        <Navbar onOpenSearch={handleOpenSearch} />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero />
          <QuickListParchi />
          <DeliveryPolicySection />
          <CategoryExplorer />
          <EverydayMoments />
          <AboutOwnerSection />
          <WhyChooseUs />
          <HowToOrder />
          <StoreLocationHours />
          <FAQSection />
        </main>

        {/* Store Owner Quick Configuration Banner */}
        <OwnerEditGuide />

        {/* Website Footer */}
        <Footer />

        {/* Floating WhatsApp Quick Action Button */}
        <FloatingWhatsApp />

        {/* Mobile Sticky Bottom Thumb Navigation */}
        <MobileBottomNav />

        {/* Slide-over Shopping List Drawer */}
        <ShoppingListDrawer />
      </div>
    </ShoppingListProvider>
  );
};

export default App;
