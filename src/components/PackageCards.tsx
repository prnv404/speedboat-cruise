'use client';

const PACKAGES = [
  {
    id: "village-discovery",
    title: "Village Discovery",
    time: "1 Hour",
    badge: "Most Popular",
    highlight: true,
    urgency: "Best for families & groups",
    features: ["Alleppey Terminals", "Boat Race Track", "Village Canals", "Kayinakary Photo Point", "Vembanad Lake Views"],
    distance: "30 km coverage",
    color: "from-emerald-400 to-teal-500",
  },
  {
    id: "lake-explorer",
    title: "Lake Explorer",
    time: "30 Minutes",
    badge: "Popular Choice",
    highlight: false,
    urgency: "Great for couples & duos",
    features: ["Alleppey Terminals", "Boat Race Track", "Village Canal Glimpses", "Vembanad Lake Entry"],
    distance: "15 km coverage",
    color: "from-blue-400 to-indigo-500",
  },
  {
    id: "quick-thrill",
    title: "Quick Thrill",
    time: "10 Minutes",
    badge: "Express",
    highlight: false,
    urgency: "Perfect for a quick experience",
    features: ["Punnamada Lake", "Speed Experience", "Photo Opportunities"],
    distance: "7 km fun ride",
    color: "from-orange-400 to-amber-500",
  },
];

export default function PackageCards() {
  function handleSelect(pkgId: string) {
    window.dispatchEvent(new CustomEvent('select-package', { detail: pkgId }));
    document.getElementById('booking-widget')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
      {PACKAGES.map((pkg, i) => (
        <div key={i} className={`group relative ${pkg.highlight ? 'md:-mt-4 md:mb-0' : ''}`}>
          {pkg.highlight && (
            <div className="text-center mb-3">
              <span className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg shadow-emerald-500/30">
                ⭐ Most Booked
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-200/50 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className={`relative h-full glass-card p-1 rounded-2xl sm:rounded-3xl overflow-hidden transition-colors duration-500 ${pkg.highlight ? 'border-emerald-400/60 shadow-xl shadow-emerald-500/10' : 'hover:border-emerald-500/50'}`}>
            <div className="bg-white/60 h-full rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 flex flex-col relative overflow-hidden backdrop-blur-sm">
              {/* Badge */}
              <div className="absolute top-0 right-0 p-4 sm:p-6">
                <span className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${pkg.color} text-white`}>{pkg.badge}</span>
              </div>

              <div className="mb-4 sm:mb-6">
                <p className="text-gray-500 uppercase tracking-widest text-[10px] sm:text-xs font-bold mb-1 sm:mb-2">{pkg.time}</p>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{pkg.title}</h3>
                <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-transparent rounded-full mb-2" />
                <p className="text-xs text-emerald-600 font-semibold mb-2">{pkg.urgency}</p>
                {/* Price — WhatsApp for exact quote */}
                <p className="text-[11px] text-gray-400 italic">WhatsApp us for pricing →</p>
              </div>

              <div className="flex-grow space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {pkg.features.map((feature, f) => (
                  <div key={f} className="flex items-start gap-2 sm:gap-3 text-gray-600 text-xs sm:text-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto space-y-3">
                <button
                  onClick={() => handleSelect(pkg.id)}
                  className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all duration-300 ${pkg.highlight
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02]'
                    : 'bg-gray-900 text-white hover:bg-gray-700'
                    }`}
                >
                  Select Package
                  <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs text-gray-500 flex items-center gap-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 01-1.447-.894L15 7m0 13V7" />
                    </svg>
                    {pkg.distance}
                  </span>
                  <span className="text-[10px] text-gray-400">Free cancellation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
