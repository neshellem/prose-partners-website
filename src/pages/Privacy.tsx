import React from 'react';
import { PageId } from '../types';
import { ShieldCheck, Lock, Eye, FileText, ArrowRight } from 'lucide-react';

interface PrivacyProps {
  onNavigate: (page: PageId) => void;
}

export const Privacy: React.FC<PrivacyProps> = ({ onNavigate }) => {
  return (
    <div className="font-serif">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-stone-100 via-stone-50 to-white py-14 lg:py-18 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-gold-500/40 rounded text-xs uppercase tracking-wider text-gold-700 font-bold mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
              Client Data Protection
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-navy-900 leading-tight mb-4">
              Privacy Policy & Data Security
            </h1>
            <div className="h-1 w-20 bg-gold-500 mb-6" />
            <p className="text-slate-700 text-lg sm:text-xl leading-relaxed">
              How ProSe Partners LLC collects, safeguards, and respects confidential client information, case records, and website communications.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-2">
            <Lock className="w-5 h-5 text-gold-600" />
            1. Information Collection
          </h2>
          <div className="h-0.5 w-12 bg-gold-500/70" />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            We collect personal and contact information (such as name, email address, phone number, and brief description of legal matters) only when voluntarily submitted through our contact forms, email communications, or during consultations.
          </p>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-2">
            <Eye className="w-5 h-5 text-gold-600" />
            2. Confidentiality & Case Materials
          </h2>
          <div className="h-0.5 w-12 bg-gold-500/70" />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            All case files, medical records, financial statements, court documents, and communication transcripts entrusted to ProSe Partners LLC by individuals or contracting law firms are held in strict confidence. We never sell, rent, or trade client information or case files to third parties or marketing brokers.
          </p>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-gold-600" />
            3. Digital Security Standards
          </h2>
          <div className="h-0.5 w-12 bg-gold-500/70" />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            We employ encrypted email channels, secure local storage protocols, and password-protected client workspaces to prevent unauthorized access or disclosure of sensitive records.
          </p>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-gold-600" />
            4. Contacting Us Regarding Your Data
          </h2>
          <div className="h-0.5 w-12 bg-gold-500/70" />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            If you have questions about your stored records or wish to update your contact details, please contact ProSe Partners LLC at <a href="mailto:neshelle@prosepartnersllc.com" className="text-navy-900 font-bold hover:underline">neshelle@prosepartnersllc.com</a> or call (720) 924-1203.
          </p>
        </section>

        <div className="pt-6 text-center">
          <button
            onClick={() => onNavigate('home')}
            className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3 rounded text-sm transition-colors inline-flex items-center gap-2"
          >
            Return to Homepage
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
