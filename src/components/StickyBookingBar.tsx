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
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-500 ease-out ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Gradient fade above bar */}
      <div className="h-8 bg-gradient-to-t from-white/90 to-transparent pointer-events-none" />

      <div
        className="bg-white border-t border-gray-200 shadow-[0_-8px_32px_rgba(0,0,0,0.12)] px-4 flex gap-3 items-center"
        style={{ paddingTop: '10px', paddingBottom: 'calc(28px + env(safe-area-inset-bottom))' }}
      >
        {/* Urgency text + social proof */}
        <div className="flex-1 min-w-0">
          <p className="text-[12px] font-bold text-gray-900 leading-tight">Book a Speed Boat Today!</p>
        </div>

        {/* Book Now CTA */}
        <a
          href="#booking-widget"
          className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition-colors duration-200 shrink-0 min-h-[44px]"
          aria-label="Book a speed boat in Alleppey"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
