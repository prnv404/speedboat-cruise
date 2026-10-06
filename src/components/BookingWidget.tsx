'use client';

import { useState, useRef, useEffect } from 'react';

// ─── Package Data ────────────────────────────────────────────────────────────
const PACKAGES = [
  {
    id: 'village-discovery',
    title: 'Village Discovery',
    duration: '1 Hour',
    pricePerPerson: 2499,
    badge: 'Most Popular',
    emoji: '🛥️',
    activeBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    activeShadow: 'shadow-emerald-500/25',
  },
  {
    id: 'lake-explorer',
    title: 'Lake Explorer',
    duration: '30 Min',
    pricePerPerson: 1499,
    badge: 'Popular',
    emoji: '🌊',
    activeBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    activeShadow: 'shadow-blue-500/25',
  },
  {
    id: 'quick-thrill',
    title: 'Quick Thrill',
    duration: '10 Min',
    pricePerPerson: 799,
    badge: 'Express',
    emoji: '⚡',
    activeBg: 'bg-gradient-to-br from-orange-400 to-amber-500',
    activeShadow: 'shadow-orange-400/25',
  },
];

const MAX_GUESTS = 7;
const MIN_GUESTS = 1;

function formatINR(amount: number) {
  return `₹${amount.toLocaleString('en-IN')}`;
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const DAY_NAMES = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

// ─── Calendar Popup ───────────────────────────────────────────────────────────
function CalendarPopup({
  selectedDate,
  onSelect,
  onClose,
}: {
  selectedDate: Date | null;
  onSelect: (d: Date) => void;
  onClose: () => void;
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewYear, setViewYear] = useState(selectedDate?.getFullYear() ?? today.getFullYear());
  const [viewMonth, setViewMonth] = useState(selectedDate?.getMonth() ?? today.getMonth());

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  }

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <>
      {/* Backdrop — closes on tap (mobile) */}
      <div
        className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Calendar: centered on mobile, drops below button on desktop */}
      <div className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:absolute md:top-[calc(100%+8px)] md:left-0 md:translate-x-0 md:translate-y-0 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)] border border-white/60 p-5 w-[19rem]">
        {/* Month nav */}
        <div className="flex items-center justify-between mb-4">
          <button onClick={prevMonth} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-emerald-50 active:bg-emerald-100 transition-colors text-emerald-600 text-2xl leading-none" aria-label="Previous month">&#8249;</button>
          <span className="text-sm font-bold text-gray-800">{MONTH_NAMES[viewMonth]} {viewYear}</span>
          <button onClick={nextMonth} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-emerald-50 active:bg-emerald-100 transition-colors text-emerald-600 text-2xl leading-none" aria-label="Next month">&#8250;</button>
        </div>
        {/* Day headers */}
        <div className="grid grid-cols-7 mb-1">
          {DAY_NAMES.map(d => (
            <div key={d} className="text-center text-[11px] font-bold text-gray-400 py-1">{d}</div>
          ))}
        </div>
        {/* Day cells */}
        <div className="grid grid-cols-7 gap-y-0.5">
          {cells.map((day, idx) => {
            if (!day) return <div key={`e-${idx}`} />;
            const cellDate = new Date(viewYear, viewMonth, day);
            cellDate.setHours(0, 0, 0, 0);
            const isPast = cellDate < today;
            const isSelected =
              selectedDate?.getFullYear() === viewYear &&
              selectedDate?.getMonth() === viewMonth &&
              selectedDate?.getDate() === day;
            const isToday =
              today.getFullYear() === viewYear &&
              today.getMonth() === viewMonth &&
              today.getDate() === day;
            return (
              <button
                key={day}
                disabled={isPast}
                onClick={() => { onSelect(cellDate); onClose(); }}
                className={[
                  'w-full aspect-square flex items-center justify-center rounded-full text-sm font-medium transition-all duration-150 min-h-[38px]',
                  isPast ? 'text-gray-200 cursor-not-allowed' : 'hover:bg-emerald-50 active:bg-emerald-100 cursor-pointer text-gray-700',
                  isSelected ? '!bg-emerald-500 text-white font-bold shadow-md shadow-emerald-500/30' : '',
                  isToday && !isSelected ? 'border-2 border-emerald-400 text-emerald-600 font-bold' : '',
                ].join(' ')}
              >
                {day}
              </button>
            );
          })}
        </div>
        <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
          <button onClick={() => { onSelect(today); onClose(); }} className="text-sm text-emerald-600 font-semibold hover:text-emerald-700 py-2 px-3 rounded-lg hover:bg-emerald-50 transition-colors">Today</button>
          <button onClick={onClose} className="text-sm text-gray-400 hover:text-gray-600 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors">Close</button>
        </div>
      </div>
    </>
  );
}

// ─── Main Widget ──────────────────────────────────────────────────────────────
export default function BookingWidget() {
  const [selectedPkgId, setSelectedPkgId] = useState(PACKAGES[0].id);
  const [guests, setGuests] = useState(2);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [calOpen, setCalOpen] = useState(false);
  const dateRef = useRef<HTMLDivElement>(null);

  const pkg = PACKAGES.find(p => p.id === selectedPkgId)!;
  const total = pkg.pricePerPerson * guests;

  function formatDate(d: Date | null) {
    if (!d) return null;
    return d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
  }

  function buildWhatsAppMessage() {
    const dateStr = selectedDate ? (formatDate(selectedDate) ?? 'flexible') : 'flexible';
    return encodeURIComponent(
      `Hi! I'd like to book the *${pkg.title} (${pkg.duration})* speed boat cruise in Alleppey.\n\n` +
      `Date: ${dateStr}\n` +
      `Guests: ${guests}\n` +
      `Estimated Total: ${formatINR(total)}\n\n` +
      `Could you please confirm availability and proceed with the booking?`
    );
  }

  const whatsappUrl = `https://wa.me/917012761588?text=${buildWhatsAppMessage()}`;

  // Close calendar on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (calOpen && dateRef.current && !dateRef.current.contains(e.target as Node)) {
        setTimeout(() => setCalOpen(false), 50);
      }
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [calOpen]);

  return (
    <div className="mt-12 sm:mt-16 mx-auto max-w-2xl w-full">
      <div className="relative bg-white/70 backdrop-blur-2xl rounded-3xl border border-white/80 shadow-[0_20px_48px_-16px_rgba(16,185,129,0.18)] overflow-visible">

        {/* Top gradient accent */}
        <div className="absolute -top-[1px] -left-[1px] -right-[1px] h-1.5 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-400 rounded-t-3xl" />

        <div className="p-5 sm:p-7 pt-6 sm:pt-8 flex flex-col gap-6">

          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-emerald-600 uppercase tracking-widest font-bold mb-0.5">Instant Booking</p>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">Reserve Your Speed Boat</h3>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50/90 border border-emerald-100 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              Open Now
            </div>
          </div>

          {/* ── 2-Column grid on md+, single column on mobile ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

            {/* ── Left: Cruise Selector ── */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">Select Cruise</label>
              <div className="flex flex-col gap-2 h-full">
                {PACKAGES.map(p => {
                  const isActive = p.id === selectedPkgId;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPkgId(p.id)}
                      className={[
                        'flex items-center gap-3 w-full rounded-2xl border px-4 py-3.5 transition-all duration-300 text-left flex-1',
                        isActive
                          ? `${p.activeBg} border-transparent text-white shadow-xl ${p.activeShadow} scale-[1.01]`
                          : 'border-white/80 bg-white/50 text-gray-700 hover:bg-white/80 hover:border-emerald-100 hover:shadow-sm',
                      ].join(' ')}
                      aria-pressed={isActive}
                    >
                      <span className="text-2xl leading-none flex-shrink-0">{p.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-sm font-bold">{p.title}</span>
                          {isActive && (
                            <span className="text-[9px] font-bold bg-white/25 px-1.5 py-0.5 rounded-full">{p.badge}</span>
                          )}
                        </div>
                        <span className={`text-xs mt-0.5 block ${isActive ? 'text-white/75' : 'text-gray-400'}`}>{p.duration}</span>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className={`text-sm font-bold tabular-nums block ${isActive ? 'text-white' : 'text-gray-800'}`}>
                          {formatINR(p.pricePerPerson)}
                        </span>
                        <span className={`text-[10px] ${isActive ? 'text-white/70' : 'text-gray-400'}`}>/person</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── Right: Date + Guests + Price + CTA ── */}
            <div className="flex flex-col gap-4">

              {/* Date Picker */}
              <div className="flex flex-col gap-2 relative" ref={dateRef}>
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">Select Date</label>
                <button
                  onClick={() => setCalOpen(o => !o)}
                  className={[
                    'w-full flex items-center justify-between bg-white/70 backdrop-blur-sm border rounded-2xl px-4 py-3.5 transition-all min-h-[54px]',
                    calOpen
                      ? 'border-emerald-400 bg-white ring-4 ring-emerald-500/10'
                      : 'border-white/80 hover:border-emerald-200 hover:bg-white/90',
                  ].join(' ')}
                  aria-label="Open date picker"
                  aria-expanded={calOpen}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${selectedDate || calOpen ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-400'}`}>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className={`text-sm font-semibold ${selectedDate ? 'text-gray-900' : 'text-gray-400'}`}>
                      {selectedDate ? formatDate(selectedDate) : 'Any date'}
                    </span>
                  </div>
                  <svg className={`w-4 h-4 flex-shrink-0 transition-transform ${calOpen ? 'rotate-180 text-emerald-500' : 'text-gray-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {calOpen && (
                  <CalendarPopup
                    selectedDate={selectedDate}
                    onSelect={setSelectedDate}
                    onClose={() => setCalOpen(false)}
                  />
                )}
              </div>

              {/* Guest Counter */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider pl-1">Guests</label>
                <div className="flex items-center justify-between bg-white/70 backdrop-blur-sm border border-white/80 rounded-2xl px-4 py-3 min-h-[54px]">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-gray-100/70 rounded-xl p-1">
                    <button
                      onClick={() => setGuests(g => Math.max(MIN_GUESTS, g - 1))}
                      disabled={guests <= MIN_GUESTS}
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-gray-700 font-bold text-lg shadow-sm hover:bg-gray-50 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                      aria-label="Decrease guests"
                    >−</button>
                    <span className="w-6 text-center text-sm font-bold text-gray-900 tabular-nums select-none">{guests}</span>
                    <button
                      onClick={() => setGuests(g => Math.min(MAX_GUESTS, g + 1))}
                      disabled={guests >= MAX_GUESTS}
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-gray-700 font-bold text-lg shadow-sm hover:bg-gray-50 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                      aria-label="Increase guests"
                    >+</button>
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 pl-1">Max {MAX_GUESTS} guests per boat</p>
              </div>

              {/* Price Summary */}
              <div className="flex items-center justify-between bg-gradient-to-r from-emerald-50/80 to-teal-50/50 border border-emerald-100/60 rounded-2xl px-4 py-3">
                <div>
                  <span className="text-[10px] text-emerald-700 font-semibold uppercase tracking-wider block mb-0.5">Total</span>
                  <span className="text-[11px] text-gray-500">{formatINR(pkg.pricePerPerson)} × {guests} {guests === 1 ? 'person' : 'people'}</span>
                </div>
                <span className="text-2xl font-black text-gray-900 tabular-nums tracking-tight">{formatINR(total)}</span>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl py-4 font-bold text-sm transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.55)] hover:scale-[1.02] active:scale-[0.98] min-h-[54px] group"
                aria-label="Book via WhatsApp"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Book via WhatsApp
              </a>

            </div>
          </div>

          {/* Trust bar */}
          <div className="flex items-center justify-center gap-6 pt-2 border-t border-gray-100/60">
            <span className="flex items-center gap-1.5 text-[10px] text-gray-500 font-medium">
              <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Licensed & Insured
            </span>
            <span className="flex items-center gap-1.5 text-[10px] text-gray-500 font-medium">
              <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              Life Jackets
            </span>
            <span className="flex items-center gap-1.5 text-[10px] text-gray-500 font-medium">
              <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
              5.0★ · 221+ Reviews
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
