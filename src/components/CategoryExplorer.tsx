import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Plus, 
  MessageCircle, 
  ChevronRight, 
  Info,
  Layers,
  CheckCircle2,
  X
} from 'lucide-react';
import { CATEGORIES_DATA } from '../data/categoriesData';
import type { Category, ProductItem } from '../data/categoriesData';
import { useShoppingList } from '../context/ShoppingListContext';
import { createWhatsAppUrl } from '../config/storeConfig';

export const CategoryExplorer: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalCategory, setActiveModalCategory] = useState<Category | null>(null);
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);

  const { addItem, setIsDrawerOpen } = useShoppingList();

  const handleQuickAdd = (product: ProductItem, categoryTitle: string) => {
    const brand = product.popularBrands?.[0] || '';
    const unit = product.commonSizes?.[0] || '1 Unit';
    addItem(product.name, categoryTitle, brand, unit);

    setAddedItemNotice(product.name);
    setTimeout(() => {
      setAddedItemNotice(null);
    }, 2000);
  };

  // Filter categories and products based on search & filter
  const filteredCategories = useMemo(() => {
    let list = CATEGORIES_DATA;

    if (selectedCategoryId !== 'all') {
      list = list.filter((cat) => cat.id === selectedCategoryId);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((cat) => {
        const matchesCategory = 
          cat.title.toLowerCase().includes(q) ||
          cat.hindiTitle.toLowerCase().includes(q) ||
          cat.tagline.toLowerCase().includes(q) ||
          cat.description.toLowerCase().includes(q) ||
          cat.popularItems.some((item) => item.toLowerCase().includes(q));

        const matchesProduct = cat.sampleProducts.some(
          (prod) =>
            prod.name.toLowerCase().includes(q) ||
            prod.hindiName?.toLowerCase().includes(q) ||
            prod.description.toLowerCase().includes(q) ||
            prod.popularBrands.some((b) => b.toLowerCase().includes(q))
        );

        return matchesCategory || matchesProduct;
      });
    }

    return list;
  }, [selectedCategoryId, searchQuery]);

  return (
    <section id="categories" className="py-16 sm:py-20 bg-stone-100/60 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-extrabold mb-3">
              <Layers className="w-4 h-4 text-emerald-700" />
              <span>17+ Comprehensive Kirana Categories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-stone-900 tracking-tight mb-2">
              Browse Everyday Essentials
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              Find exactly what your household needs. Click <strong className="text-emerald-700 font-bold">+ Add</strong> to build your WhatsApp Grocery Parchi instantly.
            </p>
          </div>

          {/* Real-time Search Box */}
          <div className="w-full md:w-80">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search atta, milk, tea, soap..."
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
          </div>
        </div>

        {/* Quick Filter Horizontal Scroll Chips */}
        <div className="mb-10 overflow-x-auto pb-2 scrollbar-none flex items-center gap-2">
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
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Added to List Notification Toast */}
        {addedItemNotice && (
          <div className="fixed bottom-20 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-200 bg-stone-900 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-stone-700 text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <span className="font-bold text-white">{addedItemNotice}</span> added to your Kirana Parchi!
            </div>
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="ml-2 font-bold text-amber-400 hover:underline"
            >
              View List
            </button>
          </div>
        )}

        {/* Categories Grid */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8">
            <Search className="w-12 h-12 mx-auto mb-3 text-stone-300" />
            <h3 className="text-lg font-bold text-stone-800">No matching items or categories found</h3>
            <p className="text-sm text-stone-500 mt-1 mb-4">
              Try searching for common names like "atta", "milk", "tea", "dal", "oil", "shampoo", or "masala".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategoryId('all');
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
                        <div className="text-xs font-semibold text-stone-600">
                          {category.hindiTitle}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-medium mt-2">
                    {category.tagline}
                  </p>
                </div>

                {/* Sample Items List Inside Card */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2.5">
                      Popular Items & Brands
                    </div>
                    
                    <div className="space-y-2.5">
                      {category.sampleProducts.map((prod) => (
                        <div
                          key={prod.id}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 hover:bg-emerald-50/60 border border-stone-200/70 transition-colors"
                        >
                          <div className="min-w-0 pr-2">
                            <div className="text-xs font-bold text-stone-900 truncate">
                              {prod.name}
                            </div>
                            <div className="text-[10px] text-stone-500 truncate">
                              {prod.popularBrands.slice(0, 3).join(', ')}
                            </div>
                          </div>

                          <button
                            onClick={() => handleQuickAdd(prod, category.title)}
                            className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-white hover:bg-emerald-600 text-stone-800 hover:text-white border border-stone-300 hover:border-emerald-600 transition-colors shadow-2xs shrink-0"
                            title={`Add ${prod.name} to WhatsApp list`}
                          >
                            <Plus className="w-3 h-3" />
                            <span>Add</span>
                          </button>
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
                      <span>View details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={createWhatsAppUrl(`Hello Dilip Kirana Store, I would like to enquire about ${category.title} items at your Sanjay Nagar store.`)}
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
        <div className="mt-10 p-4 bg-amber-50/80 border border-amber-200 rounded-2xl flex items-center gap-3 text-xs text-amber-900">
          <Info className="w-5 h-5 text-amber-700 shrink-0" />
          <div>
            <strong>Store Note:</strong> Dilip Kirana Store carries over 1,500+ everyday grocery and general products. If you don't see a specific brand or item listed above, simply type it into your WhatsApp grocery list or visit our Sanjay Nagar store!
          </div>
        </div>

      </div>

      {/* Category Detail Modal */}
      {activeModalCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs"
            onClick={() => setActiveModalCategory(null)}
          />

          <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className={`p-6 ${activeModalCategory.colorScheme.bg} border-b ${activeModalCategory.colorScheme.border}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl p-2 bg-white rounded-2xl shadow-sm">
                    {activeModalCategory.emoji}
                  </span>
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-stone-900">
                      {activeModalCategory.title}
                    </h3>
                    <div className="text-xs font-bold text-stone-600">
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

            {/* Modal Body: Products and Sizes */}
            <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
                Available In-Store
              </div>

              {activeModalCategory.sampleProducts.map((prod) => (
                <div key={prod.id} className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <div className="text-sm font-bold text-stone-900">{prod.name}</div>
                      {prod.hindiName && (
                        <div className="text-[11px] text-stone-500 font-medium">{prod.hindiName}</div>
                      )}
                    </div>
                    {prod.tag && (
                      <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                        {prod.tag}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-stone-600 mb-2">{prod.description}</p>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-stone-200/80">
                    <div className="text-[11px] text-stone-500">
                      <strong>Brands:</strong> {prod.popularBrands.join(', ')}
                    </div>
                    <button
                      onClick={() => {
                        handleQuickAdd(prod, activeModalCategory.title);
                        setActiveModalCategory(null);
                      }}
                      className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to List</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-stone-100 border-t border-stone-200 flex items-center justify-between">
              <a
                href={createWhatsAppUrl(`Hello Dilip Kirana Store, I would like to check availability for ${activeModalCategory.title} products.`)}
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
