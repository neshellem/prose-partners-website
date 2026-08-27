import React from 'react';
import { Calendar, Clock, DollarSign, ArrowRight, AlertCircle } from 'lucide-react';
import { PageId } from '../types';

interface ConsultationBannerProps {
  onNavigate: (page: PageId) => void;
  variant?: 'card' | 'banner' | 'compact';
}

export const ConsultationBanner: React.FC<ConsultationBannerProps> = ({
  onNavigate,
  variant = 'card'
}) => {
  if (variant === 'compact') {
    return (
      <div className="bg-amber-50 border border-gold-400 p-4 rounded-lg font-serif">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2.5 text-navy-900 font-bold">
            <Clock className="w-4 h-4 text-gold-600" />
            <span>30-Minute Consultations — $60</span>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="text-xs bg-navy-900 hover:bg-navy-800 text-white font-bold px-3 py-1.5 rounded transition-colors"
          >
            Contact to Inquire
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 text-white p-8 sm:p-10 rounded-xl border border-gold-500/40 shadow-lg relative overflow-hidden font-serif">
      {/* Decorative Gold Corner Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/20 border border-gold-400/40 text-gold-300 rounded text-xs uppercase tracking-widest font-bold mb-4">
          <Clock className="w-3.5 h-3.5" />
          Initial Matter Assessment
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
          30-Minute Consultations — $60
        </h3>
        
        <div className="h-0.5 w-12 bg-gold-500 mb-4" />

        <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6">
          30-minute consultations are available for $60. Please contact ProSe Partners LLC first with a brief description of your matter so we can determine available services, next steps, and scheduling availability before any fee is paid.
        </p>

        <div className="bg-navy-950/70 border border-navy-700/80 p-4 rounded-lg mb-6 text-xs text-slate-300 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Please Note:</strong> We do not offer automatic instant online booking. Reaching out with a brief description allows us to confirm that your matter fits within our legal document preparation and administrative scope. Scheduling or paying for a consultation does not create an attorney-client relationship.
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            id="consultation-banner-contact-btn"
            onClick={() => onNavigate('contact')}
            className="bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold px-6 py-3 rounded-md text-base transition-all shadow-md flex items-center gap-2"
          >
            CONTACT ME FOR MORE INFORMATION
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="tel:7209241203"
            className="text-slate-300 hover:text-gold-300 text-sm font-semibold flex items-center gap-1.5 px-3 py-2"
          >
            Or Call (720) 924-1203
          </a>
        </div>
      </div>
    </div>
  );
};
