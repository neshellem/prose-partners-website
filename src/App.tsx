import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { Individuals } from './pages/Individuals';
import { Attorneys } from './pages/Attorneys';
import { Probate } from './pages/Probate';
import { Guardianship } from './pages/Guardianship';
import { DocumentPackets } from './pages/DocumentPackets';
import { Resources } from './pages/Resources';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Disclaimer } from './pages/Disclaimer';
import { Privacy } from './pages/Privacy';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Handle URL hash changes for static GitHub Pages compatibility
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      const validPages: PageId[] = [
        'home',
        'individuals',
        'attorneys',
        'probate',
        'guardianship',
        'packets',
        'resources',
        'about',
        'contact',
        'disclaimer',
        'privacy'
      ];
      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Initial check
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId, anchorId?: string) => {
    setCurrentPage(page);
    window.location.hash = page;

    if (anchorId) {
      setTimeout(() => {
        const el = document.getElementById(anchorId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'individuals':
        return <Individuals onNavigate={handleNavigate} />;
      case 'attorneys':
        return <Attorneys onNavigate={handleNavigate} />;
      case 'probate':
        return <Probate onNavigate={handleNavigate} />;
      case 'guardianship':
        return <Guardianship onNavigate={handleNavigate} />;
      case 'packets':
        return <DocumentPackets onNavigate={handleNavigate} />;
      case 'resources':
        return <Resources onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      case 'disclaimer':
        return <Disclaimer onNavigate={handleNavigate} />;
      case 'privacy':
        return <Privacy onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-100 text-slate-900 font-serif antialiased selection:bg-gold-500/30 selection:text-navy-950">
      {/* Top Fixed / Sticky Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1 w-full">{renderCurrentPage()}</main>

      {/* Complete Footer with Statutory Disclaimers */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
