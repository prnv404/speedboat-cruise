'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Packages', href: '#packages' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 w-full z-50 flex flex-col items-center"
      style={{ pointerEvents: 'none' }}
    >
      {/* Top accent bar — full-width, fades out on scroll */}
      <div
        className="w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent transition-opacity duration-500"
        style={{ opacity: scrolled ? 0 : 0.7 }}
      />

      {/*
        Inner pill wrapper:
        · Not scrolled → full-width, transparent, square corners, no margin
        · Scrolled     → narrowed to max-w-5xl, top margin, rounded pill, frosted glass, shadow
        All transitions driven by CSS transition-all for butter-smooth animation.
      */}
      <div
        style={{ pointerEvents: 'auto' }}
        className={`w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          scrolled
            ? 'max-w-5xl mt-3 rounded-2xl bg-white/90 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-white/70 px-5'
            : 'max-w-full mt-0 rounded-none bg-transparent border-b border-white/10 px-6 lg:px-8'
        }`}
      >
        {/* Row — height shrinks on scroll */}
        <div
          className={`flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            scrolled ? 'h-[58px]' : 'h-[70px]'
          }`}
        >

          {/* ── Logo ── */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-emerald-400/40 group-hover:ring-emerald-400/80 transition-all duration-300 shadow-md">
              <Image
                src="/logo.png"
                alt="Speed Boat Cruise Alleppey Logo"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="40px"
                priority
              />
            </div>

            <div className="leading-tight">
              <span
                className={`block font-bold tracking-tight transition-all duration-500 ${
                  scrolled ? 'text-[14px] text-gray-900' : 'text-[15px] text-white drop-shadow-md'
                }`}
              >
                Speed Boat Cruise
              </span>
              <span className="block text-[9px] text-emerald-400 uppercase tracking-[0.25em] font-semibold">
                Alleppey
              </span>
            </div>
          </a>

          {/* ── Desktop Nav ── */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`relative px-3.5 py-2 text-[12px] font-medium uppercase tracking-widest transition-colors duration-300 rounded-lg group ${
                  scrolled
                    ? 'text-gray-600 hover:text-emerald-600'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {label}
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[1.5px] bg-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </a>
            ))}

            {/* CTA — always vivid */}
            <a
              href="#contact"
              className={`ml-3 relative inline-flex items-center gap-1.5 font-bold uppercase tracking-widest text-white overflow-hidden group rounded-xl transition-all duration-500 ${
                scrolled ? 'px-5 py-2 text-[11px]' : 'px-6 py-2.5 text-[12px]'
              }`}
            >
              <span className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 group-hover:from-emerald-400 group-hover:to-teal-500 transition-all duration-300" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-emerald-400/50" />
              <span className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:left-full transition-all duration-700 skew-x-12" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative z-10"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              <span className="relative z-10">Book Now</span>
            </a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            aria-label="Toggle navigation menu"
            className={`md:hidden p-2.5 rounded-xl transition-colors duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center ${
              scrolled ? 'text-gray-800 hover:bg-gray-100 active:bg-gray-200' : 'text-white hover:bg-white/10 active:bg-white/20'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <div
        style={{ pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
        className={`md:hidden w-full overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } ${scrolled ? 'max-w-5xl' : 'max-w-full'}`}
      >
        <div className="bg-white/97 backdrop-blur-2xl border-t border-gray-100 shadow-2xl px-6 py-4 flex flex-col gap-1 rounded-b-2xl">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-4 rounded-xl text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 active:bg-emerald-100 transition-all duration-200 text-sm font-medium uppercase tracking-wider group min-h-[52px]"
            >
              <span className="w-1 h-5 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              {label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-3 relative flex items-center justify-center gap-2 py-3.5 rounded-xl text-white text-sm font-bold uppercase tracking-widest overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600" />
            <span className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-700 skew-x-12" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            <span className="relative z-10">Book Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
