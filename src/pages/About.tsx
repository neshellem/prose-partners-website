import React from 'react';
import { PageId } from '../types';
import { ConsultationBanner } from '../components/ConsultationBanner';
import { TrustSection } from '../components/TrustSection';
import {
  ShieldCheck,
  Award,
  Users,
  Briefcase,
  Scale,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2
} from 'lucide-react';

interface AboutProps {
  onNavigate: (page: PageId) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="font-serif">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-stone-100 via-stone-50 to-white py-14 lg:py-18 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-gold-500/40 rounded text-xs uppercase tracking-wider text-gold-700 font-bold mb-4">
              <Award className="w-3.5 h-3.5 text-gold-600" />
              About Our Business
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-4">
              About ProSe Partners LLC
            </h1>
            <div className="h-1 w-20 bg-gold-500 mb-6" />
            <p className="text-slate-700 text-lg sm:text-xl leading-relaxed">
              Bringing structure, precision, and clarity to legal document preparation, probate administration, records management, and pro se support in Colorado.
            </p>
          </div>
        </div>
      </section>

      {/* Main Profile & Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {/* Story & Background */}
          <div className="space-y-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-gold-600 font-bold mb-1">
                Our Purpose
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900">
                About ProSe Partners LLC
              </h2>
              <div className="h-0.5 w-16 bg-gold-500 mt-2 mb-4" />
            </div>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              ProSe Partners LLC was founded in Colorado with a singular commitment: to provide accessible, organized, and reliable document and administrative support for individuals, fiduciaries, attorneys, and law firms.
            </p>

            <p className="text-slate-700 text-base leading-relaxed">
              Navigating legal paperwork can be daunting, time-consuming, and confusing. Many people representing themselves do not need full-service litigation representation for every single step, but they do need experienced help preparing forms correctly, organizing evidence, tracking statutory deadlines, and formatting records.
            </p>

            <p className="text-slate-700 text-base leading-relaxed">
              At the same time, law firms and solo practitioners regularly face high-volume caseloads where medical records, probate accountings, discovery productions, or fiduciary reports create severe operational bottlenecks. ProSe Partners LLC bridges this divide by delivering dependable, high-caliber project assistance on predictable terms.
            </p>

            {/* Core Pillars */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-stone-50 p-5 rounded-lg border border-slate-200">
                <div className="flex items-center gap-2 mb-1.5 text-navy-900 font-bold text-base">
                  <CheckCircle2 className="w-4 h-4 text-gold-600" />
                  <span>Detail & Precision</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every caption, exhibit tag, accounting line, and court filing is formatted with rigorous attention to detail.
                </p>
              </div>

              <div className="bg-stone-50 p-5 rounded-lg border border-slate-200">
                <div className="flex items-center gap-2 mb-1.5 text-navy-900 font-bold text-base">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>Ethical Boundaries</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clear, honest scope definitions. We never mislead clients or provide unauthorized legal advice.
                </p>
              </div>

              <div className="bg-stone-50 p-5 rounded-lg border border-slate-200">
                <div className="flex items-center gap-2 mb-1.5 text-navy-900 font-bold text-base">
                  <Sparkles className="w-4 h-4 text-gold-600" />
                  <span>Predictable Value</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Transparent flat-fee and project-based pricing that eliminates surprises for individuals and law firms.
                </p>
              </div>

              <div className="bg-stone-50 p-5 rounded-lg border border-slate-200">
                <div className="flex items-center gap-2 mb-1.5 text-navy-900 font-bold text-base">
                  <Scale className="w-4 h-4 text-teal-600" />
                  <span>Colorado Centered</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deep familiarity with Colorado judicial district procedures, statutory deadlines, and standard forms.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <TrustSection />

        {/* Consultation Callout */}
        <div className="mt-16">
          <ConsultationBanner onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
};
