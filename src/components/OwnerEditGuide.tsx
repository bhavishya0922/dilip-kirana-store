import React, { useState } from 'react';
import { Settings, ChevronDown, ChevronUp, FileCode, CheckCircle2, Copy, Check } from 'lucide-react';

export const OwnerEditGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedPath, setCopiedPath] = useState(false);

  const configPath = "src/config/storeConfig.ts";

  const handleCopyPath = () => {
    navigator.clipboard.writeText(configPath);
    setCopiedPath(true);
    setTimeout(() => setCopiedPath(false), 2000);
  };

  return (
    <section className="bg-stone-900 text-stone-200 border-t border-stone-800 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Toggle Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Settings className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <span>Store Owner Quick Setup & Configuration Guide</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                  Easy 1-File Setup
                </span>
              </div>
              <p className="text-[11px] text-stone-400">
                Easily update store phone, WhatsApp, opening hours, address & Google Maps URL in one place.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white rounded-lg text-xs font-semibold border border-stone-700 transition-colors"
          >
            <FileCode className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isOpen ? 'Hide Owner Guide' : 'View Editable Variables'}</span>
            {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Collapsible Content */}
        {isOpen && (
          <div className="mt-6 pt-6 border-t border-stone-800 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Left Column: Instructions */}
              <div>
                <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  How to Update Your Store Details
                </h4>
                <p className="text-xs text-stone-400 mb-4 leading-relaxed">
                  All business information across the entire website is managed centrally in <code className="text-emerald-300 font-mono bg-stone-800 px-1.5 py-0.5 rounded">{configPath}</code>. You do NOT need to search through multiple files.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700">
                    <span className="font-bold text-emerald-400">1. PHONE_NUMBER:</span>
                    <span className="text-stone-300 ml-1.5">Replace <code className="font-mono text-amber-300">"+91 98765 43210"</code> with your actual store calling number.</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700">
                    <span className="font-bold text-emerald-400">2. WHATSAPP_NUMBER:</span>
                    <span className="text-stone-300 ml-1.5">Replace <code className="font-mono text-amber-300">"919876543210"</code> with your WhatsApp number without spaces or '+' symbol (e.g. 9198XXXXXXXX).</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700">
                    <span className="font-bold text-emerald-400">3. STORE_HOURS:</span>
                    <span className="text-stone-300 ml-1.5">Update opening and closing hours (currently set to <code className="font-mono text-amber-300">7:00 AM – 10:00 PM</code>).</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-stone-800/80 border border-stone-700">
                    <span className="font-bold text-emerald-400">4. GOOGLE_MAPS_URL:</span>
                    <span className="text-stone-300 ml-1.5">Paste your Google Maps Business profile link or embed code.</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <button
                    onClick={handleCopyPath}
                    className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-lg text-xs font-mono flex items-center gap-1.5 border border-stone-700"
                  >
                    {copiedPath ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPath ? 'Path Copied!' : configPath}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Code Snippet Preview */}
              <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 font-mono text-[11px] text-stone-300 overflow-x-auto">
                <div className="text-stone-500 mb-2">// File: src/config/storeConfig.ts</div>
                <pre className="text-emerald-400">
{`export const STORE_CONFIG = {
  STORE_NAME: "Dilip Kirana Store",
  TAGLINE: "Daily needs, general items, all in one place.",
  
  // 👉 OWNER CONFIGURATION:
  PHONE_NUMBER: "+91 98765 43210", 
  WHATSAPP_NUMBER: "919876543210", 
  
  STORE_HOURS: {
    display: "7:00 AM – 10:00 PM",
    openHour: 7,
    closeHour: 22,
    allDays: "Open All 7 Days"
  },

  GOOGLE_MAPS_DIRECTIONS_URL: "https://maps.google.com/...",
  INSTAGRAM_URL: "",
  FACEBOOK_URL: ""
};`}
                </pre>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
