import React from 'react';
import { PageId } from '../types';
import { ConsultationBanner } from '../components/ConsultationBanner';
import {
  Shield,
  FileSpreadsheet,
  CheckCircle2,
  Calendar,
  AlertCircle,
  ArrowRight,
  Send,
  Clock,
  HeartHandshake,
  FolderOpen
} from 'lucide-react';

interface GuardianshipProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
}

export const Guardianship: React.FC<GuardianshipProps> = ({ onNavigate }) => {
  return (
    <div className="font-serif">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-stone-100 via-stone-50 to-white py-14 lg:py-18 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-gold-500/40 rounded text-xs uppercase tracking-wider text-gold-700 font-bold mb-4">
              <Shield className="w-3.5 h-3.5 text-gold-600" />
              Fiduciary & Protective Proceedings
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-4">
              Guardianship & Conservatorship Support
            </h1>
            <div className="h-1 w-20 bg-gold-500 mb-6" />
            <p className="text-slate-700 text-lg sm:text-xl leading-relaxed mb-6">
              Practical, detail-oriented assistance for family guardians, conservators, professional fiduciaries, and law firms managing mandatory Colorado protective proceedings filings, annual reports, financial plans, and accountings.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3.5 rounded text-sm transition-colors flex items-center gap-2 shadow-sm"
              >
                <Send className="w-4 h-4 text-gold-400" />
                REQUEST FIDUCIARY SUPPORT
              </button>
              <button
                onClick={() => onNavigate('packets')}
                className="bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold px-6 py-3.5 rounded text-sm transition-colors"
              >
                Browse Fiduciary Templates
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Notice */}
      <section className="py-4 bg-stone-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-600 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Protective Proceedings Notice:</strong> ProSe Partners LLC provides document preparation, accounting assembly, and administrative organization for fiduciaries. We do not provide legal representation in contested guardianship hearings or CPA financial audits.
          </span>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Section 1: Guardian Reports */}
        <section id="guardian-reports" className="scroll-mt-24">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded bg-amber-50 text-gold-600 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-gold-600 font-bold">Personal Care Filings</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Guardian Annual Reports</h2>
              </div>
            </div>
            <div className="h-0.5 w-16 bg-gold-500 mb-4" />
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              Court-appointed guardians for adults or minors must submit mandatory annual reports on the physical, mental, and residential condition of the protected person. We help compile and assemble these comprehensive reports according to Colorado statutory requirements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {[
                'Guardian Annual Report on Condition of Protected Person (JDF 850)',
                'Guardian Report on Condition of Minor (JDF 834)',
                'Living situation & residential arrangement descriptions',
                'Medical, dental, and therapeutic care summaries',
                'Educational & vocational progress reports',
                'Care plan documentation & future goals',
                'Supporting medical records & physician statements',
                'Notice to interested persons & proof of service'
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
              Get Guardian Reporting Help
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </button>
          </div>
        </section>

        {/* Section 2: Conservator Reports & Financial Accountings */}
        <section id="conservator-accountings" className="scroll-mt-24">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded bg-amber-50 text-gold-600 flex items-center justify-center">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-gold-600 font-bold">Financial Oversight Filings</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Conservator Reports & Accountings</h2>
              </div>
            </div>
            <div className="h-0.5 w-16 bg-gold-500 mb-4" />
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              Conservatorship requires strict financial accountability. Courts mandate initial inventories within 90 days, Conservator Financial Plans (CFP), and annual accountings detailing every penny received and spent on behalf of the protected person.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
              {[
                'Conservator Initial Inventory with Financial Plan (JDF 882)',
                'Conservator Financial Plan (CFP) & Annual Budget (JDF 883)',
                'Conservator Annual Report & Accounting (JDF 885)',
                'Bank, credit card, and investment statement reconciliation',
                'Transaction categorization & itemized ledgers',
                'Receipt & disbursement matching with backup exhibits',
                'Real estate, vehicle, & personal asset schedules',
                'Supporting documentation binders for court review',
                'Backlogged & overdue accounting cleanup projects'
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
              Inquire About Conservator Accountings
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </button>
          </div>
        </section>

        {/* Section 3: Case & Document Organization */}
        <section id="fiduciary-records" className="scroll-mt-24">
          <div className="bg-stone-50 rounded-xl p-8 sm:p-10 border border-slate-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded bg-slate-200 text-navy-900 flex items-center justify-center">
                <FolderOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-600 font-bold">Systematic Records</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">Case & Document Organization for Fiduciaries</h2>
              </div>
            </div>
            <div className="h-0.5 w-16 bg-gold-500 mb-4" />
            <p className="text-slate-700 text-base leading-relaxed mb-6">
              We create durable recordkeeping systems for fiduciaries, ensuring that every medical note, receipt, bank statement, and court order is systematically archived for quick annual reporting.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                'Multi-year fiduciary binder systems with standardized tab dividers',
                'Digital cloud file structuring with strict confidential access',
                'Annual court reporting deadline tracking & reminder systems',
                'Assembly of supporting exhibits for court auditors and judicial officers'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded bg-white border border-slate-200 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold px-6 py-3 rounded text-sm transition-colors"
            >
              Discuss Fiduciary File Setup
            </button>
          </div>
        </section>

        <ConsultationBanner onNavigate={onNavigate} />
      </div>
    </div>
  );
};
