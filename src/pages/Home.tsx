import React from 'react';
import { PageId } from '../types';
import { TrustSection } from '../components/TrustSection';
import { ConsultationBanner } from '../components/ConsultationBanner';
import { FAQS_DATA } from '../data/faqs';
import {
  FileText,
  Users,
  Briefcase,
  Scale,
  Shield,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Clock,
  Send,
  FolderLock,
  Layers,
  ChevronRight,
  HelpCircle
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="font-serif">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-stone-100 via-stone-50 to-white pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200 overflow-hidden">
        {/* Subtle decorative background watermark */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-50/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-slate-100/80 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-200 shadow-2xs rounded-full text-xs text-navy-900 font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-gold-500" />
              Colorado Legal Document Preparation & Project Support
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-[1.15] tracking-tight">
              Legal Document Preparation, Case Support & Pro Se Resources
            </h1>

            {/* Gold Divider */}
            <div className="h-1 w-24 bg-gold-500 mx-auto" />

            {/* Supporting Statement */}
            <p className="text-slate-700 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">
              Practical, professional assistance for self-represented individuals, fiduciaries, attorneys, and law firms who need help preparing, organizing, and managing legal documents, records, and case information.
            </p>

            {/* Prominent Hero Calls to Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                id="hero-contact-btn"
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3.5 rounded text-base border border-gold-500/60 hover:border-gold-400 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-gold-400" />
                CONTACT ME FOR MORE INFORMATION
              </button>

              <button
                id="hero-packets-btn"
                onClick={() => onNavigate('packets')}
                className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold px-6 py-3.5 rounded text-base transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                VIEW DOCUMENT PACKETS
              </button>

              <button
                id="hero-attorneys-btn"
                onClick={() => onNavigate('attorneys')}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-navy-900 border border-slate-300 font-bold px-5 py-3.5 rounded text-base transition-all shadow-2xs flex items-center justify-center gap-2"
              >
                <Briefcase className="w-4 h-4 text-teal-600" />
                ATTORNEYS — REQUEST PROJECT SUPPORT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TWO PRIMARY AUDIENCES SECTION */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
              Serving Two Distinct Client Audiences
            </h2>
            <div className="h-0.5 w-16 bg-gold-500 mx-auto mt-3 mb-3" />
            <p className="text-slate-600 text-base">
              Whether you are an individual navigating a matter on your own or a law firm seeking flat-fee overflow support, ProSe Partners provides tailored, experienced assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pathway 1: FOR INDIVIDUALS */}
            <div className="bg-stone-50 rounded-xl p-8 border-2 border-slate-200 hover:border-gold-500/80 transition-all shadow-sm flex flex-col justify-between relative overflow-hidden group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-gold-500/40 rounded text-xs uppercase tracking-wider text-gold-700 font-bold">
                    <Users className="w-3.5 h-3.5 text-gold-600" />
                    Self-Represented Litigants
                  </div>
                  <span className="text-xs text-slate-500 italic">Personal & Family Matters</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2">
                    FOR INDIVIDUALS
                  </h3>
                  <p className="text-slate-600 text-base">
                    Practical, accessible legal document and organizational support for people handling legal matters without traditional full-service representation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    'Pro Se support',
                    'Document preparation',
                    'Court form assistance',
                    'Probate assistance',
                    'Personal Representative support',
                    'Case organization',
                    'Procedural information',
                    'Self-help document packets',
                    'Consultations ($60 / 30-min)',
                    'Filing preparation',
                    'Record organization'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-200">
                <button
                  id="pathway-individuals-btn"
                  onClick={() => onNavigate('individuals')}
                  className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-3.5 px-6 rounded text-base transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  GET HELP WITH MY MATTER
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </button>
              </div>
            </div>

            {/* Pathway 2: FOR ATTORNEYS & LAW FIRMS */}
            <div className="bg-navy-950 text-white rounded-xl p-8 border-2 border-gold-500/50 hover:border-gold-400 transition-all shadow-md flex flex-col justify-between relative overflow-hidden group">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/20 border border-gold-400/40 rounded text-xs uppercase tracking-wider text-gold-300 font-bold">
                    <Briefcase className="w-3.5 h-3.5" />
                    Law Firm Overflow
                  </div>
                  <span className="text-xs text-slate-400 italic">Project & Flat-Fee Basis</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    FOR ATTORNEYS & LAW FIRMS
                  </h3>
                  <p className="text-slate-300 text-base">
                    Experienced, reliable project support for attorneys needing high-volume record organization, probate management, fiduciary reports, and litigation support without hiring permanent staff.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    'Flat-fee project support',
                    'Probate administration support',
                    'Personal Representative administration',
                    'Guardianship & conservatorship reports',
                    'Medical record organization',
                    'Financial record organization',
                    'Personal injury record support',
                    'Discovery organization',
                    'Litigation support & trial binders',
                    'Exhibit preparation & indexing',
                    'Hearing binders & chronologies',
                    'Overflow project assistance'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-navy-800">
                <button
                  id="pathway-attorneys-btn"
                  onClick={() => onNavigate('attorneys')}
                  className="w-full bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold py-3.5 px-6 rounded text-base transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  REQUEST ATTORNEY PROJECT SUPPORT
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW PROSE PARTNERS CAN HELP SECTION */}
      <section className="py-16 bg-stone-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900">
              How ProSe Partners Can Help
            </h2>
            <div className="h-0.5 w-16 bg-gold-500 mx-auto mt-3 mb-4" />
            <p className="text-slate-700 text-base sm:text-lg">
              We provide hands-on document preparation, case organization, and administrative support across core legal support areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1: Document Preparation */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-amber-50 text-gold-600 flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Document Preparation</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Professional assistance preparing, organizing, reviewing, and assembling legal and administrative documents to court standards.
                </p>
              </div>
              <button
                onClick={() => onNavigate('individuals', 'court-doc-prep')}
                className="text-xs uppercase font-bold text-gold-600 hover:text-gold-700 flex items-center gap-1 mt-2"
              >
                Learn More <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 2: Pro Se Support */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Pro Se Support</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Practical assistance for individuals representing themselves in appropriate legal matters, helping navigate forms, deadlines, and filings.
                </p>
              </div>
              <button
                onClick={() => onNavigate('individuals')}
                className="text-xs uppercase font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1 mt-2"
              >
                Explore Pro Se Services <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 3: Probate & Estate Administration */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-amber-50 text-gold-600 flex items-center justify-center mb-4">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Probate & Estate Administration</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Support from Personal Representative appointment through ongoing estate administration, creditor notices, asset inventories, and closing.
                </p>
              </div>
              <button
                onClick={() => onNavigate('probate')}
                className="text-xs uppercase font-bold text-gold-600 hover:text-gold-700 flex items-center gap-1 mt-2"
              >
                View Probate Support <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 4: Guardianship & Conservatorship */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-slate-100 text-navy-900 flex items-center justify-center mb-4">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Guardianship & Conservatorship</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Support with reports, inventories, financial plans, accountings, financial records, supporting documentation, and case organization.
                </p>
              </div>
              <button
                onClick={() => onNavigate('guardianship')}
                className="text-xs uppercase font-bold text-navy-900 hover:text-gold-600 flex items-center gap-1 mt-2"
              >
                Fiduciary Reporting <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 5: Attorney & Law Firm Support */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Attorney & Law Firm Support</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Project-based and flat-fee assistance for attorneys and firms that need experienced overflow support without permanent overhead.
                </p>
              </div>
              <button
                onClick={() => onNavigate('attorneys')}
                className="text-xs uppercase font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1 mt-2"
              >
                Attorney Solutions <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 6: Records & Litigation Support */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-amber-50 text-gold-600 flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">Records & Litigation Support</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Organization and management of medical, financial, probate, discovery, and litigation records, indexes, chronologies, and trial binders.
                </p>
              </div>
              <button
                onClick={() => onNavigate('attorneys', 'pi-medical-records')}
                className="text-xs uppercase font-bold text-gold-600 hover:text-gold-700 flex items-center gap-1 mt-2"
              >
                Records Organization <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Service 7 Feature Banner: Document Packets & Resources */}
          <div className="mt-8 bg-navy-900 text-white rounded-lg p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-gold-500/40">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded bg-gold-500 text-slate-950 flex items-center justify-center flex-shrink-0 mt-1">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Document Packets & Resources</h3>
                <p className="text-slate-300 text-sm max-w-2xl">
                  Affordable self-help packets, checklists, templates, instructions, and educational materials ready for immediate download and self-directed use.
                </p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('packets')}
              className="bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold px-6 py-3 rounded text-sm whitespace-nowrap transition-colors shadow-sm"
            >
              BROWSE PACKETS STORE
            </button>
          </div>
        </div>
      </section>

      {/* 4. TRUST SECTION: Professional Support Without Confusion */}
      <TrustSection />

      {/* 5. PROBATE HOMEPAGE BANNER */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-50 rounded-xl p-8 sm:p-12 border border-slate-300 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 text-gold-800 rounded text-xs font-bold uppercase tracking-wider">
                <Scale className="w-3.5 h-3.5" />
                Comprehensive Estate Guidance
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
                Probate From Appointment Through Administration
              </h2>
              <div className="h-0.5 w-16 bg-gold-500" />
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                From Personal Representative appointment and initial filings to creditor matters, inventories, estate records, administration, and closing documents, ProSe Partners LLC helps organize the many moving pieces involved in probate.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600" />
                  <span>Petition & Appointment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600" />
                  <span>Notice to Creditors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600" />
                  <span>Asset Inventory Worksheets</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-600" />
                  <span>Estate Closing Statement</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <button
                id="banner-probate-btn"
                onClick={() => onNavigate('probate')}
                className="w-full sm:w-auto bg-navy-900 hover:bg-navy-800 text-white font-bold px-8 py-4 rounded text-base border border-gold-500/50 shadow-md transition-all flex items-center justify-center gap-2"
              >
                LEARN ABOUT PROBATE SUPPORT
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ATTORNEY HOMEPAGE BANNER (Distinct Dark Navy) */}
      <section className="py-16 bg-navy-950 text-white border-b border-navy-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/20 border border-gold-400/40 text-gold-300 rounded text-xs uppercase tracking-widest font-bold">
              <Briefcase className="w-3.5 h-3.5" />
              Project-Based & Flat-Fee Law Firm Solutions
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Attorneys & Law Firms
            </h2>

            <div className="h-1 w-20 bg-gold-500 mx-auto" />

            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
              Need experienced project support without adding another permanent staff position? ProSe Partners LLC provides defined-scope and flat-fee assistance for probate matters, Personal Representative administration, fiduciary reports, medical and financial records, litigation files, document organization, and other time-intensive legal support projects.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="banner-attorney-btn"
                onClick={() => onNavigate('attorneys')}
                className="bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold px-8 py-3.5 rounded text-base transition-colors shadow-lg flex items-center gap-2"
              >
                DISCUSS YOUR PROJECT
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="bg-navy-800 hover:bg-navy-700 text-slate-200 border border-slate-600 font-bold px-6 py-3.5 rounded text-base transition-colors"
              >
                Request a Project Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DOCUMENT PACKET HOMEPAGE BANNER */}
      <section className="py-16 bg-stone-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 sm:p-10 border border-slate-300 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs uppercase tracking-widest text-gold-600 font-bold">
                Self-Help Resource Store
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
                Need a DIY Option?
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                Browse affordable document packets, checklists, forms, templates, and informational resources designed to help self-represented individuals stay organized and better understand the process ahead.
              </p>
            </div>
            <button
              id="banner-diy-packets-btn"
              onClick={() => onNavigate('packets')}
              className="bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold px-8 py-3.5 rounded text-base whitespace-nowrap transition-colors shadow-sm flex items-center gap-2"
            >
              BROWSE DOCUMENT PACKETS
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. MEET PROSE PARTNERS / OWNER INTRODUCTION PREVIEW */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-50 rounded-xl p-8 sm:p-12 border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Owner Portrait Preview */}
            <div className="md:col-span-5 lg:col-span-4 flex justify-center">
              <div className="relative">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2 bg-gradient-to-tr from-navy-900 via-gold-500 to-navy-800 shadow-xl overflow-hidden">
                  <img
                    src="/images/owner_portrait.jpg"
                    alt="Owner of ProSe Partners LLC"
                    className="w-full h-full object-cover rounded-full bg-slate-200"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image path differs
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="absolute bottom-2 right-2 bg-navy-900 text-gold-400 text-xs font-bold px-3 py-1 rounded-full border border-gold-500 shadow-md">
                  ProSe Partners LLC
                </div>
              </div>
            </div>

            {/* Intro text */}
            <div className="md:col-span-7 lg:col-span-8 space-y-4">
              <div className="text-xs uppercase tracking-widest text-gold-600 font-bold">
                About the Business
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-navy-900">
                Bridging the Gap in Legal Document Management
              </h3>
              <div className="h-0.5 w-16 bg-gold-500" />
              <p className="text-slate-700 text-base leading-relaxed">
                ProSe Partners LLC was created to help bridge the gap between handling everything alone and paying for traditional full-service legal representation. We bring extensive practical experience, structured file systems, and dedicated focus to legal paperwork.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether assisting an individual Personal Representative with probate administration filings or helping a personal injury attorney index 2,000 pages of medical records, we deliver organized, detail-oriented results.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="text-navy-900 hover:text-gold-600 font-bold text-sm inline-flex items-center gap-1.5 transition-colors"
                >
                  Read More About ProSe Partners LLC <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CONSULTATIONS HIGHLIGHT SECTION */}
      <section className="py-16 bg-stone-100 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ConsultationBanner onNavigate={onNavigate} />
        </div>
      </section>

      {/* 10. FAQ SECTION PREVIEW */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-600 font-bold mb-2">
              <HelpCircle className="w-4 h-4" />
              Clear Answers
            </div>
            <h2 className="text-3xl font-bold text-navy-900">Frequently Asked Questions</h2>
            <div className="h-0.5 w-16 bg-gold-500 mx-auto mt-3" />
          </div>

          <div className="space-y-4">
            {FAQS_DATA.slice(0, 5).map((faq, idx) => (
              <div
                key={idx}
                className="bg-stone-50 p-5 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <h4 className="text-lg font-bold text-navy-900 mb-2">{faq.question}</h4>
                <p className="text-slate-700 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('resources')}
              className="text-navy-900 hover:text-gold-600 font-bold text-base inline-flex items-center gap-1.5 transition-colors"
            >
              View Full FAQ & Resource Directory <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
