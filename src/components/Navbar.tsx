'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="text-emerald-400 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1" />
                <path d="M19.9 16.1c.4-.5.7-1.2.4-1.8L16 6c-.5-1.1-1.8-1.7-3.4-1.7c-3-.1-5.6 1.4-8.8 4.7c-1.1 1.1-1.3 2.8-.5 4.1" />
                <path d="M7 13.2a4 4 0 0 0 6.4-1.6" />
              </svg>
            </span>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Speed Boat Cruise</h1>
              <p className="text-[10px] text-emerald-400 uppercase tracking-[0.2em] font-medium">Alleppey</p>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#packages" className="nav-link text-sm">Packages</a>
            <a href="#about" className="nav-link text-sm">About</a>
            <a href="#gallery" className="nav-link text-sm">Gallery</a>
            <a href="#contact" className="nav-link text-sm">Contact</a>
            <a href="#contact" className="primary-button text-xs px-6 py-2.5">Book Now</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          <a href="#packages" className="text-lg text-white/90 hover:text-emerald-400 py-2 border-b border-white/5" onClick={() => setMobileMenuOpen(false)}>Packages</a>
          <a href="#about" className="text-lg text-white/90 hover:text-emerald-400 py-2 border-b border-white/5" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#gallery" className="text-lg text-white/90 hover:text-emerald-400 py-2 border-b border-white/5" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
          <a href="#contact" className="text-lg text-white/90 hover:text-emerald-400 py-2 border-b border-white/5" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a href="#contact" className="primary-button text-center mt-2" onClick={() => setMobileMenuOpen(false)}>Book Now</a>
        </div>
      </div>
    </nav>
  );
}
