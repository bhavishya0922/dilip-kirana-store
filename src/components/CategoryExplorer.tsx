import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Plus, 
  MessageCircle, 
  ChevronRight, 
  Info,
  Layers,
  CheckCircle2,
  X,
  Tag,
  ShoppingBag
} from 'lucide-react';
import { CATEGORIES_DATA } from '../data/categoriesData';
import type { Category, ProductItem } from '../data/categoriesData';
import { useShoppingList } from '../context/ShoppingListContext';
import { createWhatsAppUrl } from '../config/storeConfig';

export const CategoryExplorer: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [priceFilter, setPriceFilter] = useState<'all' | 'under50' | 'under100' | 'above100'>('all');
  const [activeModalCategory, setActiveModalCategory] = useState<Category | null>(null);
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);

  const { addItem, setIsDrawerOpen } = useShoppingList();

  const handleQuickAdd = (product: ProductItem, categoryTitle: string) => {
    const brand = product.popularBrands?.[0] || '';
    const unit = product.packSize || product.commonSizes?.[0] || '1 Unit';
    addItem(product.name, categoryTitle, brand, unit, product.mrp, product.hindiName);

    setAddedItemNotice(`${product.name} (${product.hindiName})`);
    setTimeout(() => {
      setAddedItemNotice(null);
    }, 2500);
  };

  // Count total products across all categories
  const totalProductsCount = useMemo(() => {
    return CATEGORIES_DATA.reduce((acc, cat) => acc + cat.sampleProducts.length, 0);
  }, []);

  // Filter categories and products based on search & filter
  const filteredCategories = useMemo(() => {
    let list = CATEGORIES_DATA;

    if (selectedCategoryId !== 'all') {
      list = list.filter((cat) => cat.id === selectedCategoryId);
    }

    // Apply text search across English & Hindi names, categories, brands
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.map((cat) => {
        const matchesCatHeader = 
          cat.title.toLowerCase().includes(q) ||
          cat.hindiTitle.toLowerCase().includes(q) ||
          (cat.hindiTagline && cat.hindiTagline.toLowerCase().includes(q)) ||
          cat.tagline.toLowerCase().includes(q) ||
          cat.description.toLowerCase().includes(q) ||
          cat.popularItems.some((item) => item.toLowerCase().includes(q));

        const matchedProducts = cat.sampleProducts.filter((prod) => {
          return (
            prod.name.toLowerCase().includes(q) ||
            prod.hindiName.toLowerCase().includes(q) ||
            (prod.hindiDescription && prod.hindiDescription.toLowerCase().includes(q)) ||
            prod.description.toLowerCase().includes(q) ||
            prod.popularBrands.some((b) => b.toLowerCase().includes(q)) ||
            (prod.tag && prod.tag.toLowerCase().includes(q)) ||
            (prod.tagHindi && prod.tagHindi.toLowerCase().includes(q))
          );
        });

        if (matchesCatHeader) {
          return cat;
        } else if (matchedProducts.length > 0) {
          return {
            ...cat,
            sampleProducts: matchedProducts,
          };
        }
        return null;
      }).filter(Boolean) as Category[];
    }

    // Apply price filter if selected
    if (priceFilter !== 'all') {
      list = list.map((cat) => {
        const filteredProds = cat.sampleProducts.filter((p) => {
          if (priceFilter === 'under50') return p.mrp <= 50;
          if (priceFilter === 'under100') return p.mrp <= 100;
          if (priceFilter === 'above100') return p.mrp > 100;
          return true;
        });

        if (filteredProds.length > 0) {
          return {
            ...cat,
            sampleProducts: filteredProds,
          };
        }
        return null;
      }).filter(Boolean) as Category[];
    }

    return list;
  }, [selectedCategoryId, searchQuery, priceFilter]);

  return (
    <section id="categories" className="py-16 sm:py-20 bg-stone-100/60 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-extrabold mb-3">
              <Layers className="w-4 h-4 text-emerald-700" />
              <span>15+ Categories • {totalProductsCount}+ Everyday Items with MRP Tags</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-stone-900 tracking-tight mb-2">
              Browse Everyday Essentials & Kirana Items
            </h2>
            <div className="text-sm font-bold text-amber-900 mb-1">
              हिंदी एवं अंग्रेजी नाम + असली एमआरपी (MRP) प्राइस टैग
            </div>
            <p className="text-sm sm:text-base text-stone-600">
              Find exactly what your household needs. Click <strong className="text-emerald-700 font-bold">+ Add to Parchi</strong> to build your WhatsApp grocery list with instant estimated bill!
            </p>
          </div>

          {/* Real-time Search Box */}
          <div className="w-full md:w-88 flex flex-col gap-2">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search atta, milk, chips, soap / आटा, दूध..."
                className="w-full pl-10 pr-9 py-2.5 bg-white border border-stone-300 rounded-xl text-sm font-medium focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 shadow-2xs transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Price Range Filter */}
            <div className="flex items-center gap-1 text-xs">
              <span className="text-stone-500 font-semibold text-[11px] mr-1">Price Filter:</span>
              <button
                onClick={() => setPriceFilter('all')}
                className={`px-2 py-0.5 rounded-md font-bold text-[11px] transition-colors ${
                  priceFilter === 'all' ? 'bg-stone-800 text-white' : 'bg-white text-stone-600 border border-stone-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setPriceFilter('under50')}
                className={`px-2 py-0.5 rounded-md font-bold text-[11px] transition-colors ${
                  priceFilter === 'under50' ? 'bg-emerald-700 text-white' : 'bg-white text-stone-600 border border-stone-200'
                }`}
              >
                Under ₹50
              </button>
              <button
                onClick={() => setPriceFilter('under100')}
                className={`px-2 py-0.5 rounded-md font-bold text-[11px] transition-colors ${
                  priceFilter === 'under100' ? 'bg-emerald-700 text-white' : 'bg-white text-stone-600 border border-stone-200'
                }`}
              >
                Under ₹100
              </button>
              <button
                onClick={() => setPriceFilter('above100')}
                className={`px-2 py-0.5 rounded-md font-bold text-[11px] transition-colors ${
                  priceFilter === 'above100' ? 'bg-amber-700 text-white' : 'bg-white text-stone-600 border border-stone-200'
                }`}
              >
                ₹100+ (Staples)
              </button>
            </div>
          </div>
        </div>

        {/* Quick Filter Horizontal Scroll Chips */}
        <div className="mb-8 overflow-x-auto pb-2 scrollbar-none flex items-center gap-2">
          <button
            onClick={() => setSelectedCategoryId('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-150 flex items-center gap-1.5 ${
              selectedCategoryId === 'all'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            <span>All Categories ({CATEGORIES_DATA.length})</span>
          </button>

          {CATEGORIES_DATA.map((cat) => {
            const isSelected = selectedCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryId(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-150 flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.title.split('&')[0]}</span>
                <span className="text-[10px] opacity-75 font-normal">({cat.sampleProducts.length})</span>
              </button>
            );
          })}
        </div>

        {/* Added to List Notification Toast */}
        {addedItemNotice && (
          <div className="fixed bottom-20 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-200 bg-stone-900 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-stone-700 text-xs max-w-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <div className="min-w-0 flex-1">
              <span className="font-bold text-white block truncate">{addedItemNotice}</span>
              <span className="text-[11px] text-stone-300">Added to your WhatsApp Grocery Parchi!</span>
            </div>
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="ml-2 font-bold text-amber-400 hover:underline shrink-0"
            >
              View Parchi
            </button>
          </div>
        )}

        {/* Categories Grid */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8">
            <Search className="w-12 h-12 mx-auto mb-3 text-stone-300" />
            <h3 className="text-lg font-bold text-stone-800">No matching items or categories found</h3>
            <p className="text-sm text-stone-500 mt-1 mb-4">
              Try searching for "atta", "आटा", "maggi", "मैगी", "doodh", "दूध", "chips", "चिप्स", "soap", "साबुन", or "oil".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategoryId('all');
                setPriceFilter('all');
              }}
              className="px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-sm hover:bg-emerald-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-card-hover transition-all duration-200 overflow-hidden flex flex-col justify-between group"
              >
                {/* Top Category Card Banner */}
                <div className={`p-5 ${category.colorScheme.bg} border-b ${category.colorScheme.border}`}>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl p-2 bg-white/80 rounded-xl shadow-2xs">
                        {category.emoji}
                      </span>
                      <div>
                        <h3 className="font-display font-extrabold text-lg text-stone-900 leading-tight">
                          {category.title}
                        </h3>
                        <div className="text-xs font-bold text-emerald-800">
                          {category.hindiTitle}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-medium mt-2">
                    {category.tagline}
                  </p>
                  {category.hindiTagline && (
                    <p className="text-[11px] text-stone-500 leading-tight mt-1 italic">
                      {category.hindiTagline}
                    </p>
                  )}
                </div>

                {/* Sample Items List Inside Card with Prominent MRP & Hindi Names */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2.5">
                      <span>Items with Hindi Name & MRP</span>
                      <span className="text-emerald-700 font-semibold">{category.sampleProducts.length} items</span>
                    </div>
                    
                    <div className="space-y-2.5">
                      {category.sampleProducts.map((prod) => (
                        <div
                          key={prod.id}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 hover:bg-emerald-50/60 border border-stone-200/70 transition-colors group/item"
                        >
                          <div className="min-w-0 pr-2 flex-1">
                            {/* English Name */}
                            <div className="text-xs font-bold text-stone-900 truncate flex items-center gap-1.5">
                              <span>{prod.name}</span>
                            </div>

                            {/* Prominent Hindi Name in Devanagari */}
                            <div className="text-[11px] font-semibold text-emerald-800 truncate">
                              {prod.hindiName}
                            </div>

                            {/* Brands, Pack Size and Tag */}
                            <div className="flex items-center gap-2 text-[10px] text-stone-500 mt-0.5 truncate">
                              <span className="font-bold text-stone-700 bg-stone-200/70 px-1.5 py-0.2 rounded">
                                {prod.packSize}
                              </span>
                              {prod.popularBrands?.[0] && (
                                <span className="truncate">• {prod.popularBrands[0]}</span>
                              )}
                              {prod.tag && (
                                <span className="text-[9px] font-bold bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded">
                                  {prod.tag}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Right: MRP Tag & Add Button */}
                          <div className="flex flex-col items-end gap-1 shrink-0">
                            {/* Explicit Bold MRP Tag */}
                            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-stone-900 text-amber-300 font-black text-xs shadow-2xs">
                              <Tag className="w-2.5 h-2.5 text-amber-400" />
                              <span>MRP {prod.mrpFormatted}</span>
                            </div>

                            {/* + Add to Parchi Button */}
                            <button
                              onClick={() => handleQuickAdd(prod, category.title)}
                              className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white shadow-2xs transition-colors"
                              title={`Add ${prod.name} (${prod.hindiName}) to grocery list`}
                            >
                              <Plus className="w-3 h-3" />
                              <span>Add</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: WhatsApp Enquiry / View More */}
                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveModalCategory(category)}
                      className="text-xs font-bold text-stone-700 hover:text-emerald-700 inline-flex items-center gap-1"
                    >
                      <span>View details ({category.sampleProducts.length})</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={createWhatsAppUrl(`Hello Dilip Kirana Store, I would like to enquire about ${category.title} (${category.hindiTitle}) items at your Sanjay Nagar store.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* General Inventory Note */}
        <div className="mt-10 p-4.5 bg-gradient-to-r from-amber-50 to-emerald-50 border border-amber-200/90 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-700">
          <div className="flex items-center gap-3">
            <Info className="w-5 h-5 text-amber-700 shrink-0" />
            <div>
              <strong className="text-stone-900 font-bold">Dilip Kirana Store Full Inventory Note:</strong> Our store in Sanjay Nagar stocks over 1,500+ grocery items with accurate MRP price tags. If an item or specific size is not visible above, type it in your WhatsApp parchi or call Bhavishya Dewangan directly!
            </div>
          </div>
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs shrink-0 flex items-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Open Kirana Parchi</span>
          </button>
        </div>

      </div>

      {/* Category Detail Modal */}
      {activeModalCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs"
            onClick={() => setActiveModalCategory(null)}
          />

          <div className="relative bg-white rounded-3xl shadow-2xl max-w-xl w-full overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className={`p-6 ${activeModalCategory.colorScheme.bg} border-b ${activeModalCategory.colorScheme.border}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl p-2.5 bg-white rounded-2xl shadow-sm">
                    {activeModalCategory.emoji}
                  </span>
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-stone-900">
                      {activeModalCategory.title}
                    </h3>
                    <div className="text-sm font-bold text-emerald-800">
                      {activeModalCategory.hindiTitle}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModalCategory(null)}
                  className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-white/50 rounded-xl"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-stone-700 mt-3 leading-relaxed">
                {activeModalCategory.description}
              </p>
            </div>

            {/* Modal Body: Products with Hindi Names and MRP */}
            <div className="p-6 max-h-[60vh] overflow-y-auto space-y-3.5">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-400">
                <span>Available In-Store with MRP</span>
                <span className="text-emerald-700 font-bold">{activeModalCategory.sampleProducts.length} Items</span>
              </div>

              {activeModalCategory.sampleProducts.map((prod) => (
                <div key={prod.id} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 hover:border-emerald-300 transition-colors">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <div className="text-sm font-bold text-stone-900">{prod.name}</div>
                      <div className="text-xs text-emerald-800 font-bold">{prod.hindiName}</div>
                    </div>
                    
                    <div className="text-right shrink-0">
                      <span className="inline-block px-2.5 py-1 rounded-lg bg-stone-900 text-amber-300 text-xs font-black shadow-2xs">
                        MRP {prod.mrpFormatted}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 mb-1 leading-relaxed">{prod.description}</p>
                  {prod.hindiDescription && (
                    <p className="text-[11px] text-stone-500 mb-2 leading-relaxed italic">{prod.hindiDescription}</p>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-stone-200/80">
                    <div className="text-[11px] text-stone-600">
                      <span className="font-semibold text-stone-800">Pack:</span> {prod.packSize} • <span className="font-semibold text-stone-800">Brands:</span> {prod.popularBrands.join(', ')}
                    </div>
                    <button
                      onClick={() => {
                        handleQuickAdd(prod, activeModalCategory.title);
                      }}
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>+ Add to Parchi</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-stone-100 border-t border-stone-200 flex items-center justify-between">
              <a
                href={createWhatsAppUrl(`Hello Dilip Kirana Store, I would like to check availability for ${activeModalCategory.title} (${activeModalCategory.hindiTitle}) products.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquire</span>
              </a>

              <button
                onClick={() => setActiveModalCategory(null)}
                className="px-4 py-2 bg-white text-stone-700 font-bold text-xs rounded-xl border border-stone-300 hover:bg-stone-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
