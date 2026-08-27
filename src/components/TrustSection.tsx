import React from 'react';
import { Layers, CheckCircle2, ShieldCheck } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-16 bg-stone-100 border-y border-slate-200 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-gold-500/40 rounded text-xs uppercase tracking-widest text-gold-600 font-bold mb-3">
            Core Philosophy & Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
            Professional Support Without the Confusion
          </h2>
          <div className="h-0.5 w-16 bg-gold-500 mx-auto mt-4 mb-4" />
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            Legal and administrative matters often involve large amounts of paperwork, deadlines, financial records, medical records, court documents, and procedural requirements. ProSe Partners LLC helps individuals and professionals bring structure to that process through careful document preparation, case organization, records management, and practical support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Organized */}
          <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-12 h-12 rounded-lg bg-amber-50 border border-gold-500/30 flex items-center justify-center mb-5 text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-2">Organized</h3>
            <div className="h-0.5 w-8 bg-gold-500/60 mb-3" />
            <p className="text-slate-600 text-base leading-relaxed">
              Clear systems for documents, records, deadlines, and case information. We establish structured digital and physical binder systems so nothing falls through the cracks.
            </p>
          </div>

          {/* Card 2: Practical */}
          <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-12 h-12 rounded-lg bg-teal-50 border border-teal-600/30 flex items-center justify-center mb-5 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-colors">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-2">Practical</h3>
            <div className="h-0.5 w-8 bg-teal-600/60 mb-3" />
            <p className="text-slate-600 text-base leading-relaxed">
              Focused assistance designed around the work that actually needs to be completed. No unnecessary steps or confusing jargon—just straightforward, actionable progress.
            </p>
          </div>

          {/* Card 3: Professional */}
          <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-12 h-12 rounded-lg bg-slate-100 border border-navy-800/30 flex items-center justify-center mb-5 text-navy-900 group-hover:bg-navy-900 group-hover:text-gold-400 transition-colors">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-2">Professional</h3>
            <div className="h-0.5 w-8 bg-gold-500/60 mb-3" />
            <p className="text-slate-600 text-base leading-relaxed">
              Detail-oriented, confidential support for individuals, fiduciaries, attorneys, and law firms. Thorough document assembly prepared strictly to Colorado court standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
