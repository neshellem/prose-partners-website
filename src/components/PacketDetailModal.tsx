import React from 'react';
import { PacketItem, PageId } from '../types';
import { X, Check, FileText, ShoppingCart, ShieldAlert, Download, ExternalLink } from 'lucide-react';

interface PacketDetailModalProps {
  packet: PacketItem | null;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
}

export const PacketDetailModal: React.FC<PacketDetailModalProps> = ({
  packet,
  onClose,
  onNavigate
}) => {
  if (!packet) return null;

  const handlePurchaseClick = () => {
    // Transparent placeholder checkout notification for GitHub Pages static site
    alert(
      `[Checkout Link Placeholder]\n\nIn the production store, this button redirects to the secure payment provider link (e.g. Stripe Payment Link or Square Checkout) for:\n\n"${packet.title}" ($${packet.price}).\n\nTo inquire directly or request this packet right now, please contact ProSe Partners LLC at neshelle@prosepartnersllc.com or call (720) 924-1203.`
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 font-serif animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-navy-900 via-gold-500 to-navy-900" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-4 pr-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs uppercase tracking-wider font-bold bg-amber-50 text-gold-600 border border-gold-500/30 px-2.5 py-0.5 rounded">
              {packet.category.toUpperCase()} RESOURCE
            </span>
            {packet.badge && (
              <span className="text-xs uppercase tracking-wider font-bold bg-navy-900 text-gold-300 px-2.5 py-0.5 rounded">
                {packet.badge}
              </span>
            )}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 leading-tight">
            {packet.title}
          </h3>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-3xl font-bold text-navy-900 font-serif">${packet.price}</span>
            <span className="text-sm text-slate-500">one-time download</span>
          </div>
        </div>

        <div className="h-px bg-slate-200 my-4" />

        {/* Short Description */}
        <p className="text-slate-700 text-base leading-relaxed mb-4">
          {packet.shortDescription}
        </p>

        {/* Designed For */}
        <div className="bg-stone-50 border border-slate-200 rounded-lg p-3.5 mb-5 text-sm">
          <strong className="text-navy-900 block mb-1">Who this packet is designed for:</strong>
          <p className="text-slate-600">{packet.designedFor}</p>
        </div>

        {/* What's Included */}
        <div className="mb-6">
          <h4 className="text-base font-bold text-navy-900 mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 text-gold-600" />
            What is Included in this Download:
          </h4>
          <ul className="space-y-2">
            {packet.includes.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Format */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 bg-slate-100/70 px-3 py-2 rounded">
          <Download className="w-4 h-4 text-slate-600" />
          <span>
            <strong>Delivery Format:</strong> Instant digital download ({packet.format})
          </span>
        </div>

        {/* Educational Disclaimer */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-lg p-3 text-xs text-slate-600 mb-6 flex items-start gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Notice:</strong> This educational resource provides general informational guidelines and document templates for Colorado self-represented matters. Purchasing this material does not constitute individualized legal advice or legal representation.
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            onClick={handlePurchaseClick}
            className="w-full sm:flex-1 bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold px-5 py-3 rounded-md text-base transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            PURCHASE PACKET (${packet.price})
          </button>
          <button
            onClick={() => {
              onClose();
              onNavigate('contact');
            }}
            className="w-full sm:w-auto bg-navy-900 hover:bg-navy-800 text-white font-bold px-5 py-3 rounded-md text-sm transition-colors"
          >
            Need Hands-On Help With This?
          </button>
        </div>
      </div>
    </div>
  );
};
