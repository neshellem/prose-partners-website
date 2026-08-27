import React from 'react';
import { PageId } from '../types';
import { ConsultationBanner } from '../components/ConsultationBanner';
import {
  FileText,
  Users,
  Scale,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  FolderLock,
  Layers,
  Calendar,
  Send
} from 'lucide-react';

interface IndividualsProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
}

export const Individuals: React.FC<IndividualsProps> = ({ onNavigate }) => {
  return (
    <div className="font-serif">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-stone-100 to-white py-12 lg:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-gold-500/40 rounded text-xs uppercase tracking-wider text-gold-700 font-bold mb-4">
              <Users className="w-3.5 h-3.5 text-gold-600" />
              For Self-Represented Individuals
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-navy-900 leading-tight mb-4">
              Support for Individuals & Pro Se Litigants
            </h1>
            <div className="h-1 w-20 bg-gold-500 mb-6" />
            <p className="text-slate-700 text-lg sm:text-xl leading-relaxed">
              Legal paperwork, court procedures, statutory deadlines, and document formatting requirements can become overwhelming for people representing themselves. ProSe Partners LLC helps clients organize the process, prepare documents and information, manage case materials, and move through administrative requirements more efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Scope Disclaimer Callout */}
      <section className="py-6 bg-stone-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-l-4 border-gold-500 p-4 rounded-r-lg shadow-2xs text-xs sm:text-sm text-slate-700 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-navy-900">Legal Boundary Notice:</strong> Services are provided strictly within the scope legally permitted for ProSe Partners LLC and its credentialed professionals. We do not provide legal representation in court, legal strategies, or legal opinions. For matters requiring legal advice, we recommend consulting a licensed Colorado attorney.
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Section 1: Court Document Preparation */}
        <section id="court-doc-prep" className="scroll-mt-24">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded bg-amber-50 text-gold-600 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-gold-600 font-bold">Service Area 01</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Court Document Preparation</h2>
              </div>
            </div>
            <div className="h-0.5 w-16 bg-gold-500 mb-4" />
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              Court filings demand precise captions, specific statutory language, accurate attachments, and verified certificates of service. We help you assemble and format clean, professional court pleadings based on your factual input.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                'Standard Colorado court forms (JDF)',
                'Petitions & Initial Filings',
                'Responses & Responsive Pleadings',
                'Motions & Briefs Formatting',
                'Proposed Orders for Judicial Signature',
                'Notices & Certificates of Service',
                'Supporting Document Assembly',
                'Filing Preparation & Checklists',
                'Exhibit Indexing & Labeling',
                'Case Organization & Binders',
                'Document Assembly to Court Standards',
                'Procedural Checklists & Timelines'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded bg-stone-50 border border-slate-100 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3 rounded text-sm transition-colors flex items-center gap-2"
              >
                Inquire About Document Prep
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </button>
              <button
                onClick={() => onNavigate('packets')}
                className="bg-stone-100 hover:bg-stone-200 text-navy-900 font-bold px-5 py-3 rounded text-sm transition-colors"
              >
                View Self-Help Forms Store
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Family Matter Support */}
        <section id="family-matters" className="scroll-mt-24">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded bg-teal-50 text-teal-700 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-teal-700 font-bold">Service Area 02</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Family Matter Support</h2>
              </div>
            </div>
            <div className="h-0.5 w-16 bg-teal-600 mb-4" />
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              Domestic relations proceedings involve extensive mandatory disclosures, financial schedules, and parenting plans. We provide procedural and document organization support for appropriate self-represented family matters. We do not promise legal representation or guaranteed court results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                'Uncontested domestic matter forms',
                'Parenting plan structure & drafting support',
                'Sworn Financial Statement (JDF 1111) worksheets',
                'Colorado Rule 16.2 mandatory disclosure organization',
                'Filing-document preparation & indexing',
                'Supporting financial document assembly',
                'Exhibit preparation for hearings',
                'Case chronologies & timelines',
                'Child support calculation organization',
                'Certificate of Compliance preparation'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded bg-stone-50 border border-slate-100 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-amber-50/60 border border-amber-200 p-4 rounded-lg text-xs text-slate-700 mb-6">
              <strong>Family Court Note:</strong> We assist with organizing financial records, assembling disclosures, and formatting parenting schedules. We do not provide courtroom advocacy or negotiate disputed custody agreements.
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3 rounded text-sm transition-colors flex items-center gap-2"
            >
              Contact Regarding Family Matter Support
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </button>
          </div>
        </section>

        {/* Section 3: Probate Support for Families */}
        <section id="probate-families" className="scroll-mt-24">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded bg-amber-50 text-gold-600 flex items-center justify-center">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-gold-600 font-bold">Service Area 03</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Probate Support for Families</h2>
              </div>
            </div>
            <div className="h-0.5 w-16 bg-gold-500 mb-4" />
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              When a loved one passes away, settling an estate requires navigating probate court filings, statutory notices, asset inventories, and creditor windows. ProSe Partners assists personal representatives from initial appointment through closing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                'Beginning a probate matter (Informal & Formal)',
                'Personal Representative appointment paperwork',
                'Acceptance of Appointment & Letters preparation',
                'Probate court standardized forms',
                'Notice to Creditors drafting & publication coordination',
                'Estate inventory & asset valuation schedules',
                'Creditor claim tracking & correspondence',
                'Estate administration recordkeeping spreadsheets',
                'Closing-document & final settlement preparation',
                'Small estate affidavits (C.R.S. § 15-12-1201)'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded bg-stone-50 border border-slate-100 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('probate')}
                className="bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold px-6 py-3 rounded text-sm transition-colors flex items-center gap-2 shadow-sm"
              >
                Learn About Full Probate Support
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3 rounded text-sm transition-colors"
              >
                Inquire About Estate Assistance
              </button>
            </div>
          </div>
        </section>

        {/* Section 4: Administrative & Case Organization */}
        <section id="case-organization" className="scroll-mt-24">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded bg-slate-100 text-navy-900 flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-600 font-bold">Service Area 04</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Administrative & Case Organization</h2>
              </div>
            </div>
            <div className="h-0.5 w-16 bg-gold-500 mb-4" />
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              Disorganized paperwork leads to missed deadlines and unnecessary stress. We transform loose documents, emails, and financial records into organized, searchable physical and digital files.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                'Master Case Timelines & Chronologies',
                'Financial & Transaction Spreadsheets',
                'Document Indexes & Pleading Logs',
                'Physical Case Binders with Custom Tabs',
                'Structured Electronic File Folders',
                'Evidence Organization & Exhibit Numbering',
                'Supporting Documentation Packages',
                'Records Organization & Pagination',
                'Court Deadline Calendaring Systems'
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
              Discuss Case Organization
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </button>
          </div>
        </section>

        {/* Consultation Callout */}
        <ConsultationBanner onNavigate={onNavigate} />
      </div>
    </div>
  );
};
