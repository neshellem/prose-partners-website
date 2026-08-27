import React from 'react';
import { PageId } from '../types';
import {
  Briefcase,
  Scale,
  Shield,
  FileSpreadsheet,
  Activity,
  FolderOpen,
  Layers,
  Sparkles,
  Building2,
  CheckCircle2,
  ArrowRight,
  Send,
  AlertCircle,
  FileCheck
} from 'lucide-react';

interface AttorneysProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
}

export const Attorneys: React.FC<AttorneysProps> = ({ onNavigate }) => {
  return (
    <div className="font-serif">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white py-14 lg:py-20 border-b border-navy-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/20 border border-gold-400/40 text-gold-300 rounded text-xs uppercase tracking-widest font-bold mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              For Law Firms & Solo Practitioners
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Professional Project Support for Attorneys & Law Firms
            </h1>
            <div className="h-1 w-20 bg-gold-500 mb-6" />
            <p className="text-slate-200 text-lg sm:text-xl leading-relaxed mb-8">
              ProSe Partners LLC works with attorneys and law firms needing experienced, high-volume project support without adding another permanent staff position. Projects may be quoted on a predictable flat-fee or defined project basis depending on scope, complexity, volume, and deadline.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                id="attorneys-quote-hero-btn"
                onClick={() => onNavigate('contact')}
                className="bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold px-8 py-3.5 rounded text-base transition-colors shadow-lg flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                REQUEST A PROJECT QUOTE
              </button>
              <a
                href="tel:7209241203"
                className="text-slate-300 hover:text-gold-300 font-semibold text-sm px-4 py-3"
              >
                Direct Line: (720) 924-1203
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Flat-Fee Callout Banner */}
      <section className="py-6 bg-stone-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-l-4 border-gold-500 p-5 rounded-r-lg shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-slate-700">
                <strong className="text-navy-900 block text-base mb-0.5">Flexible Billing Models: Flat-Fee or Defined Project Scope</strong>
                We quote clear, upfront flat fees based on document page count, deadline requirements, and case complexity so you can bill your clients accurately or manage firm margins predictably.
              </div>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded whitespace-nowrap transition-colors"
            >
              Get Project Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Main Service Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Section 1: Probate Support for Law Firms */}
        <section id="probate-law-firms" className="scroll-mt-24">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded bg-amber-50 text-gold-600 flex items-center justify-center">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-gold-600 font-bold">Attorney Practice Area</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Probate Support for Law Firms</h2>
              </div>
            </div>
            <div className="h-0.5 w-16 bg-gold-500 mb-4" />
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              Probate files require meticulous tracking of statutory notice windows, creditor claim deadlines, formal asset valuations, and accounting ledgers. ProSe Partners assists estate planning and probate law firms with complete administration support from opening petition to final closing statements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {[
                'Probate case setup & opening filings',
                'Personal Representative administration workflows',
                'Initial petitions & acceptance paperwork',
                'Notice to creditors drafting & publication tracking',
                'Creditor claim log & allowance/disallowance prep',
                'Mandatory 90-day estate inventories',
                'Asset documentation & valuation schedules',
                'Interim & final estate accounting ledgers',
                'Beneficiary receipt & distribution documents',
                'Estate closing checklists & statement prep',
                'Case timelines & milestone deadline tracking',
                'File organization & backlog cleanup projects'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded bg-stone-50 border border-slate-100 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3 rounded text-sm transition-colors flex items-center gap-2"
              >
                ATTORNEYS — REQUEST PROBATE SUPPORT
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </button>
              <button
                onClick={() => onNavigate('probate')}
                className="bg-stone-100 hover:bg-stone-200 text-navy-900 font-bold px-5 py-3 rounded text-sm transition-colors"
              >
                View Complete Probate Overview
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Personal Injury Medical & Financial Records Support */}
        <section id="pi-medical-records" className="scroll-mt-24">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded bg-teal-50 text-teal-700 flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-teal-700 font-bold">High-Volume Practice Area</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Personal Injury Medical & Financial Records Support</h2>
              </div>
            </div>
            <div className="h-0.5 w-16 bg-teal-600 mb-4" />
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              Large personal injury matters generate thousands of pages of emergency department notes, therapy records, operative reports, and medical bills. ProSe Partners assists personal injury attorneys by transforming disorganized records into structured, searchable digital folders with detailed chronologies and billing summaries.
            </p>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg text-xs text-slate-700 mb-6">
              <strong>Professional Standard:</strong> We provide meticulous factual indexing, chronological sorting, and gap identification. ProSe Partners LLC does not render medical opinions, medical causation conclusions, or diagnostic assessments.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {[
                'Obtaining records when appropriate',
                'Medical record organization & folder structuring',
                'Detailed medical provider indexing',
                'Comprehensive medical chronologies (Date/Provider/Notes)',
                'Medical billing record organization & summary ledgers',
                'Identifying apparent gaps in treatment date ranges',
                'Organizing diagnostic imaging & surgical records',
                'Preparing digital record review folders for attorneys',
                'Supporting documentation for settlement demand packages',
                'Records prepared for mediation & arbitration binders',
                'Discovery production pagination & Bates numbering',
                'Wage loss, income & out-of-pocket expense schedules'
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
              Discuss a Personal Injury Record Project
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </button>
          </div>
        </section>

        {/* Section 3: Financial Records Support */}
        <section id="financial-records" className="scroll-mt-24">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded bg-amber-50 text-gold-600 flex items-center justify-center">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-gold-600 font-bold">Analytical & Organization</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Financial Records Support</h2>
              </div>
            </div>
            <div className="h-0.5 w-16 bg-gold-500 mb-4" />
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              When cases involve multi-year bank statements, credit card statements, tax documents, or complex asset distributions, we organize and catalog financial records into clean, referenced spreadsheets ready for attorney review.
            </p>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg text-xs text-slate-700 mb-6">
              <strong>Scope Notice:</strong> Financial record organization and transaction spreadsheet assembly provided by ProSe Partners LLC does not constitute CPA services, tax advice, formal audits, or certified forensic accounting.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {[
                'Bank statement collection & chronological sorting',
                'Financial document indexing & ledger spreadsheets',
                'Transaction categorization (deposits & disbursements)',
                'Expense organization & receipt matching',
                'Asset & liability documentation schedules',
                'Account summaries for probate & domestic disclosures',
                'Supporting financial exhibits for court submission',
                'Organizing records for attorney analysis'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded bg-stone-50 border border-slate-100 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3 rounded text-sm transition-colors flex items-center gap-2"
            >
              Inquire About Financial Record Organization
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </button>
          </div>
        </section>

        {/* Section 4: Guardianship & Conservatorship Support for Law Firms */}
        <section id="guardianship-attorneys" className="scroll-mt-24">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded bg-slate-100 text-navy-900 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-600 font-bold">Fiduciary Outsourcing</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Guardianship & Conservatorship Support</h2>
              </div>
            </div>
            <div className="h-0.5 w-16 bg-gold-500 mb-4" />
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              Law firms representing professional fiduciaries or handling protective proceedings can outsource time-consuming annual reporting and accounting tasks on a flat-fee basis.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {[
                'Guardian Annual Reports (Condition of Protected Person)',
                'Conservator Annual Reports & Accountings',
                'Conservator Financial Plans (CFP) & Budgets',
                'Initial Fiduciary Inventories',
                'Supporting bank & medical exhibit preparation',
                'Receipt & disbursement matching',
                'Backlogged fiduciary reporting cleanup',
                'Court filing & service package preparation'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded bg-stone-50 border border-slate-100 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold px-6 py-3 rounded text-sm transition-colors flex items-center gap-2 shadow-sm"
            >
              REQUEST FIDUCIARY PROJECT SUPPORT
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Section 5: General Litigation Support */}
        <section id="litigation-support" className="scroll-mt-24">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded bg-amber-50 text-gold-600 flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-gold-600 font-bold">Trial & Hearing Prep</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">General Litigation Support</h2>
              </div>
            </div>
            <div className="h-0.5 w-16 bg-gold-500 mb-4" />
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              We assist litigation counsel with the logistical assembly of hearing binders, discovery productions, and trial exhibits, ensuring every tab, Bates number, and redaction is in order.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {[
                'Discovery document sorting & indexing',
                'Exhibit preparation, labeling & master exhibit lists',
                'Hearing & trial binders (physical & electronic PDF)',
                'Case chronologies & factual timelines',
                'Document production formatting & Bates stamping',
                'Evidence review, tagging & redacting PII',
                'Court filing formatting & certificate of service prep',
                'File cleanup & overflow case support'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded bg-stone-50 border border-slate-100 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3 rounded text-sm transition-colors flex items-center gap-2"
            >
              DISCUSS A RECORDS PROJECT
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </button>
          </div>
        </section>

        {/* Section 6: Special Projects & Overflow Support Banner */}
        <section id="overflow-support" className="scroll-mt-24">
          <div className="bg-navy-950 text-white rounded-xl p-8 sm:p-10 border-2 border-gold-500/50 shadow-lg">
            <div className="max-w-3xl">
              <div className="text-xs uppercase tracking-widest text-gold-300 font-bold mb-2">
                On-Demand Legal Support
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Special Projects & Overflow Support
              </h2>
              <div className="h-0.5 w-16 bg-gold-500 mb-4" />
              <p className="text-slate-200 text-base leading-relaxed mb-6">
                When sudden trial dates, employee turnover, or multi-box document productions strain your internal team, ProSe Partners provides rapid, confidential overflow assistance.
              </p>

              <div className="bg-navy-900/80 border border-navy-800 p-4 rounded-lg mb-6 text-sm text-slate-200">
                <strong>How it works:</strong> Contact ProSe Partners LLC with the project scope, approximate document volume, and requested deadline for flat-fee or project pricing.
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold px-8 py-3.5 rounded text-base transition-colors shadow-md flex items-center gap-2"
              >
                REQUEST ATTORNEY PROJECT SUPPORT
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Section 7: Business & Administrative Support */}
        <section id="business-support" className="scroll-mt-24">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded bg-stone-100 text-navy-900 flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-600 font-bold">Corporate & Administrative</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Business & Administrative Support</h2>
              </div>
            </div>
            <div className="h-0.5 w-16 bg-gold-500 mb-4" />
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              ProSe Partners assists small businesses, entrepreneurs, and solo attorneys with administrative filing and corporate recordkeeping systems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {[
                'Colorado LLC setup administrative assistance',
                'Periodic report & state filing support',
                'Business document organization & directory setup',
                'Standard document templates & agreements assembly',
                'Administrative case & project management',
                'B2B account & document organization',
                'B2B debt-related administrative records support',
                'Recordkeeping systems & file organization'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded bg-stone-50 border border-slate-100 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 italic">
              Note: ProSe Partners LLC is not a debt collection agency or law firm. Administrative support is provided strictly in compliance with applicable law.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
