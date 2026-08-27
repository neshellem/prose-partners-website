import React, { useState } from 'react';
import { PageId, PacketItem } from '../types';
import { DOCUMENT_PACKETS } from '../data/packets';
import { PacketDetailModal } from '../components/PacketDetailModal';
import {
  BookOpen,
  Filter,
  Check,
  Download,
  ShoppingCart,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';

interface DocumentPacketsProps {
  onNavigate: (page: PageId) => void;
}

export const DocumentPackets: React.FC<DocumentPacketsProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPacket, setSelectedPacket] = useState<PacketItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Resources' },
    { id: 'probate', label: 'Probate & Estates' },
    { id: 'family', label: 'Family & Domestic' },
    { id: 'organization', label: 'Case Organization' },
    { id: 'fiduciary', label: 'Fiduciary & Reports' },
    { id: 'business', label: 'Business & LLC' }
  ];

  const filteredPackets =
    selectedCategory === 'all'
      ? DOCUMENT_PACKETS
      : DOCUMENT_PACKETS.filter((p) => p.category === selectedCategory);

  const handleBuyClick = (packet: PacketItem) => {
    alert(
      `[Checkout Link Placeholder]\n\nIn the production store, this button redirects to the secure payment provider link (e.g. Stripe Payment Link or Square Checkout) for:\n\n"${packet.title}" ($${packet.price}).\n\nTo inquire directly or request this packet right now, please contact ProSe Partners LLC at neshelle@prosepartnersllc.com or call (720) 924-1203.`
    );
  };

  return (
    <div className="font-serif">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-stone-100 via-stone-50 to-white py-14 lg:py-18 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-gold-500/40 rounded text-xs uppercase tracking-wider text-gold-700 font-bold mb-4">
              <BookOpen className="w-3.5 h-3.5 text-gold-600" />
              Self-Help Digital Store
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-navy-900 leading-tight mb-4">
              Self-Help Legal Document Packets & Resources
            </h1>
            <div className="h-1 w-20 bg-gold-500 mb-6" />
            <p className="text-slate-700 text-lg sm:text-xl leading-relaxed">
              ProSe Partners LLC offers self-help document packets, checklists, form sets, and instructional guides designed to help individuals better understand legal processes and keep case records organized.
            </p>
          </div>
        </div>
      </section>

      {/* Mandatory Disclaimer & Hands-On Help Notice */}
      <section className="py-6 bg-stone-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="bg-amber-50 border-l-4 border-gold-500 p-4 rounded-r-lg shadow-2xs text-xs sm:text-sm text-slate-700 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-navy-900">Educational Material Notice:</strong> Packets are designed strictly for self-help and general informational purposes. Purchasing a packet does not create an attorney-client relationship, does not constitute individualized legal advice, and does not provide legal representation.
            </div>
          </div>

          <div className="bg-navy-900 text-white p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Info className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <p className="text-sm text-slate-200">
                <strong>Need hands-on assistance rather than DIY?</strong> We can prepare, assemble, and organize these documents for you directly.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold px-4 py-2 rounded text-xs uppercase tracking-wider whitespace-nowrap transition-colors"
            >
              Inquire About Full Prep
            </button>
          </div>
        </div>
      </section>

      {/* Packets Grid & Filters */}
      <section className="py-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-200 scrollbar-none">
            <Filter className="w-4 h-4 text-slate-400 flex-shrink-0 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-stone-100 text-slate-700 hover:bg-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid of Packets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackets.map((packet) => (
              <div
                key={packet.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-gold-500/80 transition-all shadow-sm hover:shadow-md flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Top Category and Price Banner */}
                  <div className="bg-stone-50 border-b border-slate-200 p-5 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-bold bg-amber-100/80 text-gold-800 px-2.5 py-0.5 rounded">
                      {packet.category}
                    </span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-navy-900 font-serif">${packet.price}</span>
                      <span className="text-xs text-slate-500 block">Instant Download</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors leading-snug">
                      {packet.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {packet.shortDescription}
                    </p>

                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                        Includes:
                      </span>
                      <ul className="space-y-1.5">
                        {packet.includes.slice(0, 3).map((inc, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{inc}</span>
                          </li>
                        ))}
                      </ul>
                      {packet.includes.length > 3 && (
                        <span className="text-xs text-slate-400 italic block mt-1.5">
                          + {packet.includes.length - 3} more items included
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 space-y-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedPacket(packet)}
                      className="flex-1 bg-stone-100 hover:bg-stone-200 text-navy-900 font-bold py-2.5 px-3 rounded text-xs transition-colors"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleBuyClick(packet)}
                      className="flex-1 bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold py-2.5 px-3 rounded text-xs transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      Buy (${packet.price})
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packet Modal */}
      <PacketDetailModal
        packet={selectedPacket}
        onClose={() => setSelectedPacket(null)}
        onNavigate={onNavigate}
      />
    </div>
  );
};
