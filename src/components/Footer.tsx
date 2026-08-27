import React from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import { Phone, Mail, Globe, MapPin, ShieldAlert, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, anchorId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#111111] text-slate-300 font-serif border-t-2 border-[#D4AF37]">
      {/* Top Value Banner in Footer */}
      <div className="bg-[#181818] border-b border-[#2a2a2a] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-white text-lg font-bold">Ready to bring clarity and structure to your legal matter?</h4>
            <p className="text-slate-300 text-sm mt-0.5">
              Serving self-represented individuals, fiduciaries, and attorneys across Colorado.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              id="footer-contact-btn"
              onClick={() => onNavigate('contact')}
              className="bg-[#D4AF37] hover:bg-white text-[#002147] font-bold uppercase tracking-widest text-xs px-4 py-2.5 transition-colors flex items-center gap-1.5 shadow-sm"
            >
              Contact ProSe Partners
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              id="footer-packets-btn"
              onClick={() => onNavigate('packets')}
              className="border border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-[#002147] font-bold uppercase tracking-widest text-xs px-4 py-2.5 transition-colors"
            >
              View Document Packets
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Brand & Summary (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Logo theme="dark" size="md" />
            
            <p className="text-xs text-[#D4AF37] font-bold tracking-widest uppercase">
              Legal Document Preparation • Probate Support • Pro Se Resources • Attorney Project Support
            </p>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              ProSe Partners LLC provides practical, professional assistance for self-represented individuals, fiduciaries, attorneys, and law firms who need experienced help preparing, organizing, and managing legal documents and case records in Colorado.
            </p>

            <div className="pt-2 space-y-2 text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a
                  href="mailto:info@prosepartnersllc.com"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  info@prosepartnersllc.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a href="tel:7209241203" className="hover:text-[#D4AF37] transition-colors">
                  (720) 924-1203
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span className="text-slate-300">prosepartnersllc.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span className="text-slate-300">Colorado, USA</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column 1: For Individuals */}
          <div className="space-y-3">
            <h5 className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase border-b border-[#2a2a2a] pb-2">
              For Individuals
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('individuals')}
                  className="text-slate-300 hover:text-[#D4AF37] transition-colors text-left"
                >
                  Pro Se Litigant Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('individuals', 'court-doc-prep')}
                  className="text-slate-300 hover:text-[#D4AF37] transition-colors text-left"
                >
                  Court Document Preparation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('individuals', 'family-matters')}
                  className="text-slate-300 hover:text-[#D4AF37] transition-colors text-left"
                >
                  Family Matter Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('individuals', 'probate-families')}
                  className="text-slate-300 hover:text-[#D4AF37] transition-colors text-left"
                >
                  Probate for Families
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('individuals', 'case-organization')}
                  className="text-slate-300 hover:text-[#D4AF37] transition-colors text-left"
                >
                  Case & Document Organization
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-[#D4AF37] hover:text-white font-semibold transition-colors text-left"
                >
                  30-Min Consultation ($60)
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2: For Attorneys */}
          <div className="space-y-3">
            <h5 className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase border-b border-[#2a2a2a] pb-2">
              For Attorneys
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('attorneys')}
                  className="text-slate-300 hover:text-[#D4AF37] transition-colors text-left"
                >
                  Law Firm Project Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('attorneys', 'probate-law-firms')}
                  className="text-slate-300 hover:text-[#D4AF37] transition-colors text-left"
                >
                  Probate Case Administration
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('attorneys', 'pi-medical-records')}
                  className="text-slate-300 hover:text-[#D4AF37] transition-colors text-left"
                >
                  Personal Injury & Medical Records
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('attorneys', 'financial-records')}
                  className="text-slate-300 hover:text-[#D4AF37] transition-colors text-left"
                >
                  Financial Records & Ledgers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('attorneys', 'litigation-support')}
                  className="text-slate-300 hover:text-[#D4AF37] transition-colors text-left"
                >
                  Discovery & Trial Binders
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('attorneys', 'overflow-support')}
                  className="text-slate-300 hover:text-[#D4AF37] transition-colors text-left"
                >
                  Flat-Fee Overflow Assistance
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 3: Fiduciary, Packets & Legal */}
          <div className="space-y-3">
            <h5 className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase border-b border-[#2a2a2a] pb-2">
              Resources & Legal
            </h5>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('probate')}
                  className="text-slate-300 hover:text-[#D4AF37] transition-colors text-left"
                >
                  Probate & Estate Administration
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('guardianship')}
                  className="text-slate-300 hover:text-[#D4AF37] transition-colors text-left"
                >
                  Guardianship & Conservatorship
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('packets')}
                  className="text-slate-300 hover:text-[#D4AF37] transition-colors text-left"
                >
                  Self-Help Document Packets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('resources')}
                  className="text-slate-300 hover:text-[#D4AF37] transition-colors text-left"
                >
                  Colorado Courts & Legal Links
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-300 hover:text-[#D4AF37] transition-colors text-left"
                >
                  About ProSe Partners LLC
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('disclaimer')}
                  className="text-slate-300 hover:text-[#D4AF37] transition-colors text-left font-semibold"
                >
                  Legal Disclaimer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="text-slate-300 hover:text-[#D4AF37] transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Legal Disclaimer Banner in Footer */}
        <div className="mt-12 pt-6 border-t border-[#2a2a2a] text-xs text-slate-400 leading-relaxed bg-[#161616] p-4 border border-[#2a2a2a]">
          <div className="flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-200">IMPORTANT LEGAL DISCLAIMER: </strong>
              Information presented on this website is provided for general informational and educational purposes. The availability and scope of services depend on the nature of the matter and applicable law. Use of this website, contacting ProSe Partners LLC, purchasing a self-help resource, or scheduling a consultation does not by itself create an attorney-client relationship. Self-help materials are not a substitute for individualized advice from a licensed attorney when legal advice or representation is needed. ProSe Partners LLC does not guarantee any particular court, legal, financial, settlement, or case outcome. If services are provided by a Colorado Licensed Legal Paraprofessional or another credentialed professional, those services are described and performed only within the legally authorized scope of that credential.
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Navigation Links */}
        <div className="mt-8 pt-4 border-t border-[#222] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <div>
            © 2026 ProSe Partners LLC. All Rights Reserved. Based in Colorado.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => onNavigate('disclaimer')}
              className="hover:text-[#D4AF37] transition-colors uppercase tracking-wider"
            >
              Disclaimer
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-[#D4AF37] transition-colors uppercase tracking-wider"
            >
              Privacy
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#D4AF37] transition-colors uppercase tracking-wider"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
