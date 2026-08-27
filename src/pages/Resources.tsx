import React, { useState } from 'react';
import { PageId } from '../types';
import { FAQS_DATA } from '../data/faqs';
import { COLORADO_LINKS, LEGAL_TERMS } from '../data/resources';
import {
  BookOpen,
  ExternalLink,
  HelpCircle,
  Search,
  Scale,
  Building2,
  FileText,
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  Bookmark
} from 'lucide-react';

interface ResourcesProps {
  onNavigate: (page: PageId) => void;
}

export const Resources: React.FC<ResourcesProps> = ({ onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const filteredFaqs = FAQS_DATA.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-serif">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-stone-100 via-stone-50 to-white py-14 lg:py-18 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-gold-500/40 rounded text-xs uppercase tracking-wider text-gold-700 font-bold mb-4">
              <BookOpen className="w-3.5 h-3.5 text-gold-600" />
              Public Knowledge Base
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-navy-900 leading-tight mb-4">
              Resources, Forms & Legal Information
            </h1>
            <div className="h-1 w-20 bg-gold-500 mb-6" />
            <p className="text-slate-700 text-lg sm:text-xl leading-relaxed">
              Curated official Colorado court directories, self-help resources, standard forms, legal term glossaries, and answers to common questions for self-represented litigants.
            </p>
          </div>
        </div>
      </section>

      {/* External Links Notice */}
      <section className="py-4 bg-stone-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-600 flex items-start gap-2">
          <ShieldAlert className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
          <span>
            <strong>External Reference Notice:</strong> External links to Colorado state government sites, court directories, and legal aid groups are provided as a convenience and public resource. ProSe Partners LLC is not responsible for the content, security, or ongoing availability of external websites.
          </span>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* 1. Official Colorado Court & Legal Resources */}
        <section id="official-links">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-widest text-gold-600 font-bold mb-1">
              Official State Resources
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
              Colorado Court Directories & Portals
            </h2>
            <div className="h-0.5 w-16 bg-gold-500 mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COLORADO_LINKS.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-gold-500/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-stone-100 px-2 py-0.5 rounded">
                      {link.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-gold-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-2">
                    {link.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {link.description}
                  </p>
                </div>
                <div className="text-xs font-bold text-teal-700 flex items-center gap-1 group-hover:underline">
                  Visit Official Portal <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 2. Legal Glossary */}
        <section id="glossary" className="bg-stone-50 rounded-xl p-8 sm:p-10 border border-slate-200">
          <div className="mb-8">
            <div className="text-xs uppercase tracking-widest text-gold-600 font-bold mb-1">
              Plain-Language Definitions
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
              Glossary of Legal & Probate Terms
            </h2>
            <div className="h-0.5 w-16 bg-gold-500 mt-2" />
            <p className="text-slate-600 text-sm mt-3">
              Common legal terms used in Colorado probate, protective proceedings, and civil court filings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEGAL_TERMS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-lg border border-slate-200 shadow-2xs"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Bookmark className="w-4 h-4 text-gold-600 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-navy-900">{item.term}</h3>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed pl-6">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Comprehensive FAQs Section */}
        <section id="faqs" className="scroll-mt-24">
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-gold-600 font-bold mb-1">
                Frequently Asked Questions
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
                Answers to Common Questions
              </h2>
              <div className="h-0.5 w-16 bg-gold-500 mt-2" />
            </div>

            {/* Search FAQ */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-slate-300 rounded-md text-sm bg-white focus:outline-none focus:border-navy-900 font-sans"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="bg-stone-50 p-8 text-center rounded-lg border border-slate-200 text-slate-500">
                No matching questions found for "{searchTerm}". Please contact us directly.
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-2xs transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-stone-50/60 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-gold-600 flex-shrink-0" />
                        <span className="text-base sm:text-lg font-bold text-navy-900">
                          {faq.question}
                        </span>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-slate-700 text-sm leading-relaxed border-t border-slate-100 bg-stone-50/30">
                        <div className="pl-8">{faq.answer}</div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
