'use client';

import { useEffect, useState } from 'react';

export default function StickyBookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling 300px — user has expressed interest
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed z-50 md:hidden transition-transform duration-500 ease-out left-4 right-4 ${
        visible ? 'translate-y-0' : 'translate-y-[150%]'
      }`}
      style={{ bottom: 'calc(16px + env(safe-area-inset-bottom))' }}
    >
      <div className="bg-white/80 backdrop-blur-xl border border-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-2xl p-2.5 flex items-center justify-between gap-3">
        {/* Text */}
        <div className="pl-2 flex-1 min-w-0">
          <p className="text-[13px] font-bold text-gray-900 leading-tight">Speed Boat Cruise</p>
          <p className="text-[11px] text-emerald-600 font-medium mt-0.5">Available Today</p>
        </div>

        {/* Book Now CTA */}
        <a
          href="#booking-widget"
          className="flex items-center justify-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-[13px] px-5 py-2.5 rounded-xl transition-all duration-300 shrink-0 shadow-[0_4px_12px_rgba(16,185,129,0.25)] active:scale-95"
          aria-label="Book a speed boat in Alleppey"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
