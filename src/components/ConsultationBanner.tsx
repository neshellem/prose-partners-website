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
      <div className="bg-stone-50 border border-gold-500/40 p-4 rounded-lg font-serif shadow-2xs">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2.5 text-navy-900 font-bold text-base">
            <Clock className="w-4 h-4 text-gold-600" />
            <span>30-Minute Consultations — $60</span>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="text-xs bg-navy-900 hover:bg-navy-800 text-gold-400 font-bold px-3.5 py-2 rounded transition-colors"
          >
            Contact to Inquire
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 text-slate-800 p-8 sm:p-10 rounded-xl border border-slate-200 shadow-md relative overflow-hidden font-serif">
      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-100 border border-gold-400/80 text-navy-900 rounded text-xs uppercase tracking-widest font-bold mb-4 shadow-2xs">
          <Clock className="w-3.5 h-3.5 text-gold-700" />
          Initial Matter Assessment
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight mb-2">
          30-Minute Consultations — $60
        </h3>
        
        <div className="h-0.5 w-16 bg-gold-500 mb-4" />

        <p className="text-slate-800 text-base sm:text-lg leading-relaxed mb-6 font-normal">
          30-minute consultations are available for $60. Please contact ProSe Partners LLC first with a brief description of your matter so we can determine available services, next steps, and scheduling availability before any fee is paid.
        </p>

        <div className="bg-white border border-slate-200 p-4 sm:p-5 rounded-lg mb-6 text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start gap-2.5 shadow-2xs">
          <AlertCircle className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
          <span>
            <strong className="text-navy-900 font-bold">Please Note:</strong> We do not offer automatic instant online booking. Reaching out with a brief description allows us to confirm that your matter fits within our legal document preparation and administrative scope. Scheduling or paying for a consultation does not create an attorney-client relationship.
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            id="consultation-banner-contact-btn"
            onClick={() => onNavigate('contact')}
            className="bg-navy-900 hover:bg-navy-800 text-gold-400 hover:text-gold-300 font-bold px-6 py-3.5 rounded-md text-base transition-all shadow-md flex items-center gap-2"
          >
            CONTACT ME FOR MORE INFORMATION
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </button>

          <a
            href="tel:7209241203"
            className="text-navy-900 hover:text-gold-600 text-sm font-bold flex items-center gap-1.5 px-3 py-2 transition-colors"
          >
            Or Call (720) 924-1203
          </a>
        </div>
      </div>
    </div>
  );
};
