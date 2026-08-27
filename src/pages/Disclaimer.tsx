import React from 'react';
import { PageId } from '../types';
import { ShieldAlert, Scale, AlertCircle, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

interface DisclaimerProps {
  onNavigate: (page: PageId) => void;
}

export const Disclaimer: React.FC<DisclaimerProps> = ({ onNavigate }) => {
  return (
    <div className="font-serif">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-stone-100 via-stone-50 to-white py-14 lg:py-18 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-gold-500/40 rounded text-xs uppercase tracking-wider text-gold-700 font-bold mb-4">
              <ShieldAlert className="w-3.5 h-3.5 text-gold-600" />
              Legal Transparency
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-navy-900 leading-tight mb-4">
              Legal Disclaimers & Professional Scope
            </h1>
            <div className="h-1 w-20 bg-gold-500 mb-6" />
            <p className="text-slate-700 text-lg sm:text-xl leading-relaxed">
              Please read these notices carefully. They explain the nature, scope, and legal limitations of services, materials, and resources provided by ProSe Partners LLC.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        {/* Core Statutory Banner */}
        <div className="bg-amber-50 border-2 border-gold-500/50 p-6 rounded-xl shadow-sm space-y-3">
          <div className="flex items-center gap-2.5 text-navy-900 font-bold text-lg">
            <AlertCircle className="w-5 h-5 text-gold-600 flex-shrink-0" />
            <span>Primary Legal Notice</span>
          </div>
          <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
            Information presented on this website is provided for general informational and educational purposes. The availability and scope of services depend on the nature of the matter and applicable law. Use of this website, contacting ProSe Partners LLC, or purchasing a self-help resource does not by itself create an attorney-client relationship. Self-help materials are not a substitute for individualized advice from a licensed attorney when legal advice or representation is needed. ProSe Partners LLC does not guarantee any particular court, case, financial, or legal outcome.
          </p>
        </div>

        {/* 1. No Attorney-Client Relationship */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-2">
            <Scale className="w-5 h-5 text-gold-600" />
            1. No Attorney-Client Relationship
          </h2>
          <div className="h-0.5 w-12 bg-gold-500/70" />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Transmission of information from this site, submission of inquiries via contact forms or email, purchasing self-help downloadable packets, or scheduling a consultation with ProSe Partners LLC does not establish an attorney-client relationship between you and ProSe Partners LLC or any of its owners, employees, or contractors. Confidential or time-sensitive information should not be sent prior to a formal service agreement or project engagement confirmation.
          </p>
        </section>

        {/* 2. Informational & Educational Scope */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-gold-600" />
            2. Informational and Educational Purpose Only
          </h2>
          <div className="h-0.5 w-12 bg-gold-500/70" />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            All text, checklists, forms, articles, glossaries, and downloadable document packets published on this website are designed solely to provide procedural guidelines, organizational frameworks, and general legal information under Colorado practice. None of the content on this website constitutes legal counsel, legal strategy, legal opinions, tax advice, or certified financial accounting.
          </p>
        </section>

        {/* 3. Professional Scope & Colorado Credentials */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-2">
            <Scale className="w-5 h-5 text-gold-600" />
            3. Scope of Services & Colorado Standards
          </h2>
          <div className="h-0.5 w-12 bg-gold-500/70" />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            If services are provided by a Colorado Licensed Legal Paraprofessional (LLP) or another credentialed professional, those services are described and performed strictly and solely within the legally authorized scope of that credential under Colorado Supreme Court rules and state law. In all other instances, ProSe Partners LLC operates as a professional legal document preparation, litigation support, and case records management company assisting self-represented individuals or acting at the direction of licensed attorney clients.
          </p>
        </section>

        {/* 4. No Guarantee of Case or Judicial Outcomes */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-gold-600" />
            4. No Guarantee of Outcomes
          </h2>
          <div className="h-0.5 w-12 bg-gold-500/70" />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Legal, probate, and judicial proceedings depend upon independent decisions made by judges, magistrates, court clerks, opposing parties, and third parties. ProSe Partners LLC makes no warranties, express or implied, and cannot guarantee any particular legal outcome, court approval, financial distribution, or timeline in any matter.
          </p>
        </section>

        {/* 5. External Links & Third-Party Resources */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <h2 className="text-2xl font-bold text-navy-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-gold-600" />
            5. External Links & Government Portals
          </h2>
          <div className="h-0.5 w-12 bg-gold-500/70" />
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Links provided on this website directing users to the Colorado Judicial Branch (courts.state.co.us), Colorado Secretary of State, legal aid organizations, or bar associations are offered purely for convenience and public benefit. ProSe Partners LLC does not control, endorse, or assume responsibility for the accuracy or policies of third-party platforms.
          </p>
        </section>

        {/* Back to Home CTA */}
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
