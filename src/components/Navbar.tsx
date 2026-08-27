import React, { useState, useEffect, useRef } from 'react';
import { PageId } from '../types';
import { Logo } from './Logo';
import {
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  FileText,
  Briefcase,
  Users,
  Scale,
  Shield,
  BookOpen,
  Info,
  Send,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, anchorId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = window.setTimeout(() => {
      setDropdownOpen(null);
    }, 150);
  };

  const handleLinkClick = (page: PageId, anchorId?: string) => {
    setMobileMenuOpen(false);
    setDropdownOpen(null);
    onNavigate(page, anchorId);
  };

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-200 font-serif">
      {/* Top Notification / Utility Bar */}
      <div className="bg-[#05162a] text-slate-200 text-xs py-2 px-4 border-b border-[#0f2c4f]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[#D4AF37] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              Colorado Legal Document Preparation & Case Support
            </span>
            <span className="hidden md:inline-block text-slate-500">•</span>
            <span className="text-slate-300">
              <strong className="text-white">30-Min Consultations:</strong> $60 (Contact first for availability)
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 ml-auto sm:ml-0">
            <a
              href="tel:7209241203"
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-[#D4AF37] transition-colors"
              title="Call ProSe Partners LLC"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-semibold tracking-wide">(720) 924-1203</span>
            </a>
            <a
              href="mailto:info@prosepartnersllc.com"
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-[#D4AF37] transition-colors"
              title="Email ProSe Partners LLC"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="hidden xs:inline">info@prosepartnersllc.com</span>
              <span className="xs:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Professional Polish #002147 Navy with #D4AF37 Gold Border */}
      <nav
        className={`w-full bg-[#002147] text-white border-b-2 border-[#D4AF37] transition-all duration-200 ${
          isScrolled ? 'shadow-lg py-2.5' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleLinkClick('home')}
            className="text-left focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded p-1"
          >
            <Logo theme="dark" size={isScrolled ? 'sm' : 'md'} />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 font-serif text-[14px] uppercase tracking-tight">
            {/* Home */}
            <button
              id="nav-home-link"
              onClick={() => handleLinkClick('home')}
              className={`px-3 py-2 font-bold transition-colors ${
                currentPage === 'home'
                  ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]'
                  : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              Home
            </button>

            {/* For Individuals Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('individuals')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                id="nav-individuals-link"
                onClick={() => handleLinkClick('individuals')}
                className={`px-3 py-2 font-bold flex items-center gap-1 transition-colors ${
                  currentPage === 'individuals'
                    ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]'
                    : 'text-white hover:text-[#D4AF37]'
                }`}
              >
                Individuals
                <ChevronDown className="w-3.5 h-3.5 text-slate-300 opacity-80" />
              </button>

              {dropdownOpen === 'individuals' && (
                <div className="absolute left-0 mt-1 w-72 bg-[#002147] text-white border-2 border-[#D4AF37] shadow-2xl py-2 z-50 normal-case tracking-normal">
                  <div className="px-4 py-1.5 text-xs uppercase tracking-wider text-[#D4AF37] font-bold border-b border-navy-800 mb-1">
                    Self-Represented Services
                  </div>
                  <button
                    onClick={() => handleLinkClick('individuals', 'court-doc-prep')}
                    className="w-full text-left px-4 py-2 hover:bg-[#082b54] text-slate-100 hover:text-white flex items-start gap-2.5"
                  >
                    <FileText className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold">Court Document Preparation</div>
                      <div className="text-xs text-slate-300">Forms, petitions, responses, motions, proposed orders</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleLinkClick('individuals', 'family-matters')}
                    className="w-full text-left px-4 py-2 hover:bg-[#082b54] text-slate-100 hover:text-white flex items-start gap-2.5"
                  >
                    <Users className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold">Family Matter Support</div>
                      <div className="text-xs text-slate-300">Parenting plans, financial disclosures, filings</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleLinkClick('individuals', 'probate-families')}
                    className="w-full text-left px-4 py-2 hover:bg-[#082b54] text-slate-100 hover:text-white flex items-start gap-2.5"
                  >
                    <Scale className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold">Probate Support for Families</div>
                      <div className="text-xs text-slate-300">PR appointment, creditor notices, inventories</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleLinkClick('individuals', 'case-organization')}
                    className="w-full text-left px-4 py-2 hover:bg-[#082b54] text-slate-100 hover:text-white flex items-start gap-2.5 border-t border-navy-800 mt-1"
                  >
                    <BookOpen className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold">Administrative & Case Organization</div>
                      <div className="text-xs text-slate-300">Timelines, binders, electronic file systems</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* For Attorneys Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('attorneys')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                id="nav-attorneys-link"
                onClick={() => handleLinkClick('attorneys')}
                className={`px-3 py-2 font-bold flex items-center gap-1 transition-colors ${
                  currentPage === 'attorneys'
                    ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]'
                    : 'text-white hover:text-[#D4AF37]'
                }`}
              >
                Attorneys
                <ChevronDown className="w-3.5 h-3.5 text-slate-300 opacity-80" />
              </button>

              {dropdownOpen === 'attorneys' && (
                <div className="absolute left-0 mt-1 w-80 bg-[#002147] text-white border-2 border-[#D4AF37] shadow-2xl py-2 z-50 normal-case tracking-normal">
                  <div className="px-4 py-1.5 text-xs uppercase tracking-wider text-[#D4AF37] font-bold border-b border-navy-800 mb-1">
                    Flat-Fee & Project-Based Support
                  </div>
                  <button
                    onClick={() => handleLinkClick('attorneys', 'probate-law-firms')}
                    className="w-full text-left px-4 py-2 hover:bg-[#082b54] text-slate-100 hover:text-white flex items-start gap-2.5"
                  >
                    <Scale className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold">Probate Support for Law Firms</div>
                      <div className="text-xs text-slate-300">Full PR administration, inventories, accountings, closing</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleLinkClick('attorneys', 'pi-medical-records')}
                    className="w-full text-left px-4 py-2 hover:bg-[#082b54] text-slate-100 hover:text-white flex items-start gap-2.5"
                  >
                    <Briefcase className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold">Personal Injury & Medical Records</div>
                      <div className="text-xs text-slate-300">Chronologies, provider indexing, billing & gap analysis</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleLinkClick('attorneys', 'financial-records')}
                    className="w-full text-left px-4 py-2 hover:bg-[#082b54] text-slate-100 hover:text-white flex items-start gap-2.5"
                  >
                    <FileText className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold">Financial Records Organization</div>
                      <div className="text-xs text-slate-300">Bank statements, spreadsheets, asset summaries</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleLinkClick('attorneys', 'litigation-support')}
                    className="w-full text-left px-4 py-2 hover:bg-[#082b54] text-slate-100 hover:text-white flex items-start gap-2.5"
                  >
                    <Shield className="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold">Litigation & Trial Binders</div>
                      <div className="text-xs text-slate-300">Discovery sorting, exhibit indexes, hearing prep</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleLinkClick('attorneys', 'overflow-support')}
                    className="w-full text-left px-4 py-2 hover:bg-[#082b54] text-slate-100 hover:text-white flex items-start gap-2.5 border-t border-navy-800 mt-1"
                  >
                    <Sparkles className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold">Special Projects & Overflow Support</div>
                      <div className="text-xs text-slate-300">Case cleanup, backlogged reports, defined deadlines</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Probate & Estate Administration */}
            <button
              id="nav-probate-link"
              onClick={() => handleLinkClick('probate')}
              className={`px-3 py-2 font-bold transition-colors ${
                currentPage === 'probate'
                  ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]'
                  : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              Probate
            </button>

            {/* Guardianship & Conservatorship */}
            <button
              id="nav-guardianship-link"
              onClick={() => handleLinkClick('guardianship')}
              className={`px-3 py-2 font-bold transition-colors ${
                currentPage === 'guardianship'
                  ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]'
                  : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              Guardianship
            </button>

            {/* Document Packets Store */}
            <button
              id="nav-packets-link"
              onClick={() => handleLinkClick('packets')}
              className={`px-3 py-2 font-bold transition-colors relative ${
                currentPage === 'packets'
                  ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]'
                  : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              Packets
              <span className="ml-1.5 px-1 py-0.2 text-[9px] uppercase font-bold tracking-wider bg-[#D4AF37] text-[#002147]">
                Store
              </span>
            </button>

            {/* Resources Hub */}
            <button
              id="nav-resources-link"
              onClick={() => handleLinkClick('resources')}
              className={`px-3 py-2 font-bold transition-colors ${
                currentPage === 'resources'
                  ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]'
                  : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              Resources
            </button>

            {/* About */}
            <button
              id="nav-about-link"
              onClick={() => handleLinkClick('about')}
              className={`px-3 py-2 font-bold transition-colors ${
                currentPage === 'about'
                  ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]'
                  : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              About
            </button>

            {/* Contact CTA Button - Professional Polish Accent */}
            <button
              id="nav-contact-cta-btn"
              onClick={() => handleLinkClick('contact')}
              className="ml-2 bg-[#D4AF37] text-[#002147] font-bold text-xs uppercase tracking-widest px-4 py-2 hover:bg-white hover:text-[#002147] transition-all flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              Contact
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              id="mobile-contact-quick-btn"
              onClick={() => handleLinkClick('contact')}
              className="bg-[#D4AF37] text-[#002147] text-xs font-bold uppercase tracking-wider px-3 py-1.5"
            >
              Contact
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#D4AF37] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#0f2c4f] bg-[#001833] px-4 pt-3 pb-6 space-y-1 font-serif text-white">
            <button
              onClick={() => handleLinkClick('home')}
              className="w-full text-left px-3 py-2.5 font-bold uppercase tracking-wider text-sm hover:bg-[#082b54] hover:text-[#D4AF37]"
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick('individuals')}
              className="w-full text-left px-3 py-2.5 font-bold uppercase tracking-wider text-sm hover:bg-[#082b54] hover:text-[#D4AF37] flex justify-between items-center"
            >
              <span>For Individuals & Pro Se</span>
              <Users className="w-4 h-4 text-[#D4AF37]" />
            </button>
            <button
              onClick={() => handleLinkClick('attorneys')}
              className="w-full text-left px-3 py-2.5 font-bold uppercase tracking-wider text-sm hover:bg-[#082b54] hover:text-[#D4AF37] flex justify-between items-center"
            >
              <span>For Attorneys & Law Firms</span>
              <Briefcase className="w-4 h-4 text-teal-400" />
            </button>
            <button
              onClick={() => handleLinkClick('probate')}
              className="w-full text-left px-3 py-2.5 font-bold uppercase tracking-wider text-sm hover:bg-[#082b54] hover:text-[#D4AF37] flex justify-between items-center"
            >
              <span>Probate Administration</span>
              <Scale className="w-4 h-4 text-[#D4AF37]" />
            </button>
            <button
              onClick={() => handleLinkClick('guardianship')}
              className="w-full text-left px-3 py-2.5 font-bold uppercase tracking-wider text-sm hover:bg-[#082b54] hover:text-[#D4AF37] flex justify-between items-center"
            >
              <span>Guardianship & Conservatorship</span>
              <Shield className="w-4 h-4 text-slate-300" />
            </button>
            <button
              onClick={() => handleLinkClick('packets')}
              className="w-full text-left px-3 py-2.5 font-bold uppercase tracking-wider text-sm hover:bg-[#082b54] hover:text-[#D4AF37] flex justify-between items-center"
            >
              <span>Self-Help Packets</span>
              <span className="text-xs bg-[#D4AF37] text-[#002147] font-bold px-2 py-0.5">Store</span>
            </button>
            <button
              onClick={() => handleLinkClick('resources')}
              className="w-full text-left px-3 py-2.5 font-bold uppercase tracking-wider text-sm hover:bg-[#082b54] hover:text-[#D4AF37] flex justify-between items-center"
            >
              <span>Colorado Legal Resources</span>
              <BookOpen className="w-4 h-4 text-slate-300" />
            </button>
            <button
              onClick={() => handleLinkClick('about')}
              className="w-full text-left px-3 py-2.5 font-bold uppercase tracking-wider text-sm hover:bg-[#082b54] hover:text-[#D4AF37] flex justify-between items-center"
            >
              <span>About ProSe Partners</span>
              <Info className="w-4 h-4 text-slate-300" />
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full text-left px-3 py-2.5 font-bold uppercase tracking-wider text-sm bg-[#D4AF37] text-[#002147] hover:bg-white flex justify-between items-center mt-2"
            >
              <span>Contact Us ($60 Consultation)</span>
              <Send className="w-4 h-4" />
            </button>

            <div className="pt-4 border-t border-[#0f2c4f] text-xs text-slate-300 space-y-1">
              <div>Phone: (720) 924-1203</div>
              <div>Email: info@prosepartnersllc.com</div>
              <div>Location: Colorado</div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
