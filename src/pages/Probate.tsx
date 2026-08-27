import React from 'react';
import { PageId } from '../types';
import { ConsultationBanner } from '../components/ConsultationBanner';
import {
  Scale,
  FileText,
  Briefcase,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Layers,
  FileSpreadsheet,
  CheckSquare
} from 'lucide-react';

interface ProbateProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
}

export const Probate: React.FC<ProbateProps> = ({ onNavigate }) => {
  return (
    <div className="font-serif">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-stone-100 via-stone-50 to-white py-14 lg:py-18 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-gold-500/40 rounded text-xs uppercase tracking-wider text-gold-700 font-bold mb-4">
              <Scale className="w-3.5 h-3.5 text-gold-600" />
              Comprehensive Estate Solutions
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-4">
              Probate & Estate Administration Support
            </h1>
            <div className="h-1 w-20 bg-gold-500 mb-6" />
            <p className="text-slate-700 text-lg sm:text-xl leading-relaxed mb-6">
              ProSe Partners LLC assists with probate administration from the beginning of a matter through estate closing, within the scope legally permitted. Whether you are an individual appointed as Personal Representative or a law firm managing multiple estate files, we provide end-to-end administrative and document support.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3.5 rounded text-sm transition-colors flex items-center gap-2 shadow-sm"
              >
                CONTACT US ABOUT A PROBATE MATTER
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </button>
              <button
                onClick={() => onNavigate('packets')}
                className="bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold px-6 py-3.5 rounded text-sm transition-colors"
              >
                View Probate Document Packets
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Disclaimer */}
      <section className="py-4 bg-stone-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-600 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Colorado Statutory Scope:</strong> ProSe Partners LLC provides document preparation and administrative assistance for probate matters in Colorado. We do not provide legal advice, legal interpretation of ambiguous will provisions, or court representation.
          </span>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Section 1: Personal Representative Appointment */}
        <section id="pr-appointment" className="scroll-mt-24">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded bg-amber-50 text-gold-600 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-gold-600 font-bold">Phase 01: Case Opening</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Personal Representative Appointment</h2>
              </div>
            </div>
            <div className="h-0.5 w-16 bg-gold-500 mb-4" />
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              Opening a probate case requires properly structured petitions, renunciation and nomination forms from non-applicants, verified acceptances, proposed orders, and filing with the appropriate district or probate court. We prepare the complete opening package to obtain Letters of Appointment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {[
                'Initial probate case organization & checklist',
                'Petition for Informal/Formal Probate preparation',
                'Personal Representative appointment documents',
                'Acceptance of Appointment & fiduciary oath',
                'Proposed Orders for Magistrate/Judge signature',
                'Letters Testamentary / Letters of Administration setup',
                'Renunciation & Nomination forms for heirs',
                'Required statutory notice to interested persons',
                'Hearing preparation documents where applicable',
                'Court filing fee waivers & e-filing coordination'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded bg-stone-50 border border-slate-100 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3 rounded text-sm transition-colors flex items-center gap-2"
            >
              GET HELP WITH PR APPOINTMENT
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </button>
          </div>
        </section>

        {/* Section 2: Full Personal Representative Administration Support */}
        <section id="full-pr-administration" className="scroll-mt-24">
          <div className="bg-navy-950 text-white rounded-xl p-8 sm:p-12 border-2 border-gold-500/50 shadow-lg">
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/20 border border-gold-400/40 text-gold-300 rounded text-xs uppercase tracking-widest font-bold">
                <Layers className="w-3.5 h-3.5" />
                Comprehensive Ongoing Support
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  Full Personal Representative Administration Support
                </h2>
                <div className="h-1 w-20 bg-gold-500 my-4" />
                <p className="text-slate-200 text-lg leading-relaxed">
                  Many companies only prepare the initial appointment paperwork and leave the Personal Representative to navigate the months of administration alone. ProSe Partners LLC provides extensive, ongoing administrative support throughout the entire life of the probate matter.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                {[
                  'Estate file organization & binder systems',
                  'Asset tracking & identification worksheets',
                  'Estate document & title management',
                  'Notice to creditors & publication coordination',
                  'Creditor correspondence & claim log',
                  'Creditor deadline tracking (4-month statutory window)',
                  'Mandatory 90-day estate inventory prep',
                  'Financial record organization & ledgers',
                  'Real estate & vehicle transfer paperwork support',
                  'Beneficiary and heir correspondence logging',
                  'Administrative recordkeeping & EIN coordination',
                  'Vendor coordination (appraisers, realtors, cleaners)',
                  'Personal property administration support',
                  'Interim accounting & distribution records',
                  'Estate administration checklists & milestone tracking',
                  'Verified closing document assembly'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4 border-t border-navy-800">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold px-8 py-3.5 rounded text-base transition-colors shadow-md flex items-center gap-2"
                >
                  CONTACT US ABOUT PROBATE ADMINISTRATION
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Creditor Administration */}
        <section id="creditor-administration" className="scroll-mt-24">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded bg-amber-50 text-gold-600 flex items-center justify-center">
                <CheckSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-gold-600 font-bold">Phase 02: Debt & Notice Management</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Creditor Administration</h2>
              </div>
            </div>
            <div className="h-0.5 w-16 bg-gold-500 mb-4" />
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              Colorado law requires publishing notice to unknown creditors in an approved county newspaper and providing written notice to known creditors. We manage the notice documents, claim logging, and deadline calculations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {[
                'Notice to Creditors drafting & publication coordination',
                'Direct notice to known creditors & proof of mailing',
                'Creditor claim log & tracking spreadsheets',
                'Statutory deadline tracking & bar date calculations',
                'Creditor correspondence organization & templates',
                'Estate debt documentation & verification',
                'Notice of allowance/disallowance drafting',
                'Supporting documentation & debt satisfaction receipts'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded bg-stone-50 border border-slate-100 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3 rounded text-sm transition-colors"
            >
              Inquire About Creditor Administration
            </button>
          </div>
        </section>

        {/* Section 4: Inventory & Accounting Support */}
        <section id="inventory-accounting" className="scroll-mt-24">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded bg-amber-50 text-gold-600 flex items-center justify-center">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-gold-600 font-bold">Phase 03: Asset & Financial Accounting</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Inventory & Accounting Support</h2>
              </div>
            </div>
            <div className="h-0.5 w-16 bg-gold-500 mb-4" />
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              The Personal Representative must compile an inventory of estate property within 90 days of appointment and maintain meticulous accounting of all receipts, expenses, sales, and distributions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {[
                'Colorado Estate Inventory preparation (JDF 941)',
                'Real estate & personal property appraisal tracking',
                'Bank, investment, & brokerage statement organization',
                'Income & expense transaction journals',
                'Receipts & disbursement categorization',
                'Estate checkbook & transaction reconciliation',
                'Beneficiary distribution schedules',
                'Documentation needed for formal/informal closing'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded bg-stone-50 border border-slate-100 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3 rounded text-sm transition-colors"
            >
              Get Inventory & Accounting Help
            </button>
          </div>
        </section>

        {/* Section 5: Estate Closing Support */}
        <section id="estate-closing" className="scroll-mt-24">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded bg-teal-50 text-teal-700 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-teal-700 font-bold">Phase 04: Case Concluding</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Estate Closing Support</h2>
              </div>
            </div>
            <div className="h-0.5 w-16 bg-teal-600 mb-4" />
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              When estate debts are paid and assets distributed, the estate must be properly closed to release the Personal Representative from fiduciary liability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {[
                'Probate closing checklists & milestone verification',
                'Statement of Personal Representative Closing Estate',
                'Final accounting schedules & summary ledgers',
                'Beneficiary release and receipt agreements',
                'Certificate of Service & mailing to interested parties',
                'Verified closing documentation where applicable',
                'File reconciliation & post-closing record archiving'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded bg-stone-50 border border-slate-100 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3 rounded text-sm transition-colors flex items-center gap-2"
            >
              CONTACT US ABOUT A PROBATE MATTER
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </button>
          </div>
        </section>

        {/* Section 6: Probate Support for Attorneys Callout */}
        <section className="bg-stone-100 rounded-xl p-8 border border-slate-300">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gold-700 font-bold">
                <Briefcase className="w-3.5 h-3.5" />
                For Legal Professionals
              </div>
              <h3 className="text-2xl font-bold text-navy-900">Probate Support for Law Firms</h3>
              <p className="text-slate-600 text-sm">
                Attorneys and estate planning practices may retain ProSe Partners LLC for flat-fee or project-based probate management, initial filings, inventories, accountings, and closing packages.
              </p>
            </div>
            <button
              onClick={() => onNavigate('attorneys', 'probate-law-firms')}
              className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3 rounded text-sm whitespace-nowrap transition-colors"
            >
              ATTORNEYS — REQUEST PROBATE SUPPORT
            </button>
          </div>
        </section>

        <ConsultationBanner onNavigate={onNavigate} />
      </div>
    </div>
  );
};
