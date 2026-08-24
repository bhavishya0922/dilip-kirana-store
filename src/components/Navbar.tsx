import React, { useState, useEffect } from 'react';
import { 
  Store, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronRight,
  Search
} from 'lucide-react';
import { STORE_CONFIG, getStoreLiveStatus, createPhoneCallUrl, createWhatsAppUrl } from '../config/storeConfig';
import { useShoppingList } from '../context/ShoppingListContext';

interface NavbarProps {
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState(getStoreLiveStatus());
  const { totalItemCount, setIsDrawerOpen } = useShoppingList();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const timer = setInterval(() => {
      setStatus(getStoreLiveStatus());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Categories & Stock', href: '#categories' },
    { label: 'Kirana Parchi', href: '#parchi-list', badge: 'Order List' },
    { label: 'Delivery Terms', href: '#delivery-policy', badge: '₹2,999+' },
    { label: 'About Owner', href: '#about-owner' },
    { label: 'Location & Map', href: '#location-hours' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Top Announcement & Location Bar */}
      <div className="bg-stone-900 text-stone-200 text-xs font-medium py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left: Exact Location & Timings */}
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>H.No. 41/212, Jhanda Chowk, Sanjay Nagar, Raipur</span>
            </span>
            <span className="hidden md:inline text-stone-600">•</span>
            <span className="flex items-center gap-1.5 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{STORE_CONFIG.STORE_HOURS.display}</span>
            </span>
          </div>

          {/* Right: Live Status Badge & Direct WhatsApp */}
          <div className="flex items-center gap-3">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${status.badgeColor}`}>
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-300 animate-ping' : 'bg-stone-400'}`}></span>
              {status.statusText}
            </span>
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: 8602777588</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'glass-header shadow-md border-b border-stone-200/80 py-2.5'
            : 'bg-white/95 backdrop-blur-sm border-b border-stone-200/50 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo & Store Identity */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
              <Store className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-xl sm:text-2xl text-stone-900 leading-tight">
                  Dilip <span className="text-emerald-600">Kirana</span>
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Store
                </span>
              </div>
              <span className="text-[11px] text-stone-500 font-medium leading-none">
                Jhanda Chowk, Sanjay Nagar • Raipur (C.G.)
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-semibold text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-emerald-600 transition-colors relative py-1"
              >
                {link.label}
                {link.badge && (
                  <span className="ml-1 text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded-full font-bold">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Search Button */}
            <a
              href="#categories"
              onClick={onOpenSearch}
              className="p-2 sm:px-3 sm:py-2 text-stone-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 border border-stone-200"
              title="Search store products"
            >
              <Search className="w-4 h-4 text-stone-500" />
              <span className="hidden md:inline">Search Items</span>
            </a>

            {/* Kirana Parchi / Shopping List Drawer Trigger */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative p-2 sm:px-3 sm:py-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 rounded-lg text-sm font-bold transition-all duration-200 flex items-center gap-2 shadow-sm"
              title="Open your Kirana Parchi / Grocery List"
            >
              <ShoppingBag className="w-4 h-4 text-amber-700" />
              <span className="hidden sm:inline">My Parchi</span>
              <span className="bg-amber-600 text-white text-xs font-black px-2 py-0.5 rounded-full min-w-[20px] text-center shadow-sm">
                {totalItemCount}
              </span>
            </button>

            {/* Quick Call Button */}
            <a
              href={createPhoneCallUrl()}
              className="hidden md:flex items-center gap-2 px-3 py-2 border border-stone-300 hover:border-emerald-600 hover:bg-emerald-50 text-stone-700 hover:text-emerald-800 rounded-lg text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call</span>
            </a>

            {/* Quick WhatsApp Order Button */}
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-3.5 py-2 rounded-lg text-sm font-bold shadow-sm hover:shadow transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-stone-700 hover:text-emerald-600 hover:bg-stone-100 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Navigation Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-stone-200 shadow-xl px-4 py-5 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-3">
              
              {/* Owner Info & Timings in Mobile Drawer */}
              <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between mb-1">
                <div>
                  <div className="text-xs font-bold text-emerald-800">Owner: Bhavishya Dewangan</div>
                  <div className="text-xs text-stone-600">H.No. 41/212, Jhanda Chowk</div>
                  <div className="text-[11px] text-stone-500 font-medium">Timings: {STORE_CONFIG.STORE_HOURS.display}</div>
                </div>
                <span className={`px-2 py-1 rounded-full text-[11px] font-bold ${status.badgeColor}`}>
                  {status.statusText}
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-lg text-stone-800 hover:bg-emerald-50 hover:text-emerald-700 font-semibold transition-colors"
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                    {link.badge && (
                      <span className="text-[10px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full font-bold">
                        {link.badge}
                      </span>
                    )}
                  </span>
                  <ChevronRight className="w-4 h-4 text-stone-400" />
                </a>
              ))}

              {/* Direct CTA Buttons inside mobile menu */}
              <div className="pt-4 border-t border-stone-200 grid grid-cols-2 gap-3">
                <a
                  href={createPhoneCallUrl()}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 bg-stone-100 text-stone-800 rounded-xl font-bold text-sm border border-stone-300"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  Call: 8602777588
                </a>
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 text-white rounded-xl font-bold text-sm shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
