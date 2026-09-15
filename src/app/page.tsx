import Image from "next/image";
import Navbar from "@/components/Navbar";
import BackgroundCarousel from "@/components/BackgroundCarousel";
import Faq from "@/components/Faq";
import StickyBookingBar from "@/components/StickyBookingBar";
import { videoData } from "@/components/video";
import fs from "fs";
import path from "path";

export default function Home() {
  // Discover all images from public/ at render time (server component)
  const publicDir = path.join(process.cwd(), "public");
  const allowedExt = new Set([".jpg", ".jpeg", ".png", ".webp"]);
  const excludedFiles = new Set(["logo.png", "favicon.png"]);
  let allImages: string[] = [];
  try {
    const files = fs.readdirSync(publicDir);
    allImages = files
      .filter((f) => allowedExt.has(path.extname(f).toLowerCase()) && !excludedFiles.has(f))
      .sort()
      .map((f) => `/${f}`);
  } catch (e) {
    allImages = [];
  }

  // Discover 4card images
  const fourCardDir = path.join(process.cwd(), "public", "4card");
  let fourCardImages: string[] = [];
  try {
    if (fs.existsSync(fourCardDir)) {
      const files = fs.readdirSync(fourCardDir);
      fourCardImages = files
        .filter((f) => allowedExt.has(path.extname(f).toLowerCase()))
        .sort() // You might want a specific order, currently alphabetical
        .map((f) => `/4card/${f}`);
    }
  } catch (e) {
    fourCardImages = [];
  }

  const heroImages = allImages;
  const galleryImages = allImages;
  return (
    <main className="relative min-h-screen bg-white text-gray-900 selection:bg-emerald-500/30 pb-[80px] md:pb-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Navbar />
        <div className="absolute inset-0 z-0">
          <BackgroundCarousel videos={videoData} />
          <div className="absolute inset-0 hero-gradient pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-20 sm:py-32 pointer-events-none">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-7 animate-fade-in pointer-events-auto">

            {/* Social proof pill */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="flex gap-0.5">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </span>
              <span className="text-white text-xs font-semibold">5.0 · 221+ Google Reviews</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="flex items-center gap-1 text-emerald-300 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open Now
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight animate-slide-up px-4" style={{ animationDelay: '0.2s' }}>
              #1 Speed Boat in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Alleppey</span>
              <br className="hidden sm:block" />
              Private Backwater Cruise
            </h1>

            <p className="text-white/80 text-sm sm:text-lg max-w-xl mx-auto px-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Private 7-seater boat · Licensed pilot · Life jackets included
              <br className="hidden sm:block" />
              10-min, 30-min &amp; 1-hour packages from Finishing Point, Alleppey
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 animate-slide-up px-4" style={{ animationDelay: '0.4s' }}>
              <a
                href="https://wa.me/917012761588?text=Hi!%20I'd%20like%20to%20book%20a%20speed%20boat%20in%20Alleppey.%20Could%20you%20share%20availability%20and%20pricing%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button px-6 py-3.5 sm:px-8 sm:py-3 w-full sm:w-auto text-center group flex items-center justify-center gap-2 min-h-[48px]"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Book on WhatsApp
                <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="tel:+917012761588" className="secondary-button px-6 py-3.5 sm:px-8 sm:py-3 w-full sm:w-auto text-center flex items-center justify-center gap-2 min-h-[48px]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call to Book
              </a>
            </div>

            {/* Micro-trust below CTAs */}
            <p className="text-white/50 text-[11px] sm:text-xs animate-slide-up px-4" style={{ animationDelay: '0.5s' }}>
              ✓ Instant confirmation &nbsp;·&nbsp; ✓ Free cancellation 24h before &nbsp;·&nbsp; ✓ Private boat, no sharing
            </p>

          </div>
        </div>

        <div className="hidden sm:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Feature Band */}
      <section className="relative z-20 -mt-8 sm:-mt-20 pt-8 pb-12 sm:py-12 sm:pb-20 pointer-events-none">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto pointer-events-auto">
            <div className="glass-card p-4 sm:p-6 flex items-center gap-3 sm:gap-4 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="p-2 sm:p-3 rounded-full bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Top Speed</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">60 km/h <span className="text-xs sm:text-sm font-normal text-gray-500">(35 knots)</span></p>
              </div>
            </div>

            <div className="glass-card p-4 sm:p-6 flex items-center gap-3 sm:gap-4 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="p-2 sm:p-3 rounded-full bg-emerald-500/10 text-emerald-600 flex-shrink-0">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Capacity</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">7 People <span className="text-xs sm:text-sm font-normal text-gray-500">Max</span></p>
              </div>
            </div>

            <div className="glass-card p-4 sm:p-6 flex items-center gap-3 sm:gap-4 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="p-2 sm:p-3 rounded-full bg-emerald-500/10 text-emerald-600 flex-shrink-0">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Safety First</p>
                <p className="text-xs sm:text-sm font-medium text-gray-900">Licensed Pilot &amp; Life Jackets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badge Strip */}
      <section className="py-5 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
            {[
              { icon: '⭐', text: '5.0 Rating on Google' },
              { icon: '🏆', text: '#1 Speed Boat in Alleppey' },
              { icon: '🛡️', text: 'Fully Licensed & Insured' },
              { icon: '💯', text: 'Free 24h Cancellation' },
              { icon: '🚤', text: 'Private Boat — No Sharing' },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 font-medium">
                <span className="text-base">{badge.icon}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-64 w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-teal-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <span className="text-emerald-600 text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase font-bold mb-2 sm:mb-3 block">
              Choose Your Adventure
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">Speed Boat Packages in Alleppey</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Choose your perfect speed boat tour in Alleppey. Each package is crafted to show you the most iconic backwater landscapes Kerala has to offer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Village Discovery",
                time: "1 Hour",
                badge: "Most Popular",
                highlight: true,
                urgency: "Best for families & groups",
                features: ["Alleppey Terminals", "Boat Race Track", "Village Canals", "Kayinakary Photo Point", "Vembanad Lake Views"],
                distance: "30 km coverage",
                color: "from-emerald-400 to-teal-500",
                waMsg: "Hi! I'd like to book the 1-Hour Village Discovery speed boat tour in Alleppey. Can you share availability?"
              },
              {
                title: "Lake Explorer",
                time: "30 Minutes",
                badge: "Popular Choice",
                highlight: false,
                urgency: "Great for couples & duos",
                features: ["Alleppey Terminals", "Boat Race Track", "Village Canal Glimpses", "Vembanad Lake Entry"],
                distance: "15 km coverage",
                color: "from-blue-400 to-indigo-500",
                waMsg: "Hi! I'd like to book the 30-Minute Lake Explorer speed boat tour in Alleppey. Can you share availability?"
              },
              {
                title: "Quick Thrill",
                time: "10 Minutes",
                badge: "Express",
                highlight: false,
                urgency: "Perfect for a quick experience",
                features: ["Punnamada Lake", "Speed Experience", "Photo Opportunities"],
                distance: "7 km fun ride",
                color: "from-orange-400 to-amber-500",
                waMsg: "Hi! I'd like to book the 10-Minute Quick Thrill speed boat ride in Alleppey. Can you share availability?"
              },
            ].map((pkg, i) => (
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
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                      <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-transparent rounded-full mb-3" />
                      <p className="text-xs text-emerald-600 font-semibold">{pkg.urgency}</p>
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
                      <a
                        href={`https://wa.me/917012761588?text=${encodeURIComponent(pkg.waMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                          pkg.highlight
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02]'
                            : 'bg-gray-900 text-white hover:bg-gray-700'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Book This Package
                      </a>
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
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 relative bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-12 sm:gap-16 items-center">
            <div className="md:w-1/2 space-y-6 sm:space-y-8">
              <div>
                <span className="text-emerald-600 text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase font-bold mb-2 sm:mb-3 block">
                  Why Choose Us
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  The Best Speed Boat <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">in Alleppey</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  We don&apos;t just offer a ride — we offer an experience. Our speed boat in Alleppey combines the thrill of 60 km/h with panoramic Kerala backwater views, all while respecting the delicate ecosystem.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: "Eco-Conscious Cruising",
                    desc: "Modern engines designed to minimize impact on the backwater ecosystem.",
                    icon: (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "Premium Comfort",
                    desc: "Plush seating and panoramic views ensure you travel in style.",
                    icon: (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    )
                  },
                  {
                    title: "Local Expertise",
                    desc: "Our captains are local experts who know every hidden canal and story.",
                    icon: (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center text-emerald-600 border border-gray-200 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 relative w-full">
              <div className="aspect-square rounded-full bg-emerald-500/20 absolute blur-3xl inset-0 -z-10" />
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3 sm:space-y-4 translate-y-6 sm:translate-y-8">
                  <div className="aspect-[3/4] rounded-xl sm:rounded-2xl bg-gray-200 overflow-hidden relative">
                    <Image src={fourCardImages[0] || '/placeholder'} alt="Speed boat in Alleppey backwaters" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="aspect-[4/3] rounded-xl sm:rounded-2xl bg-gray-200 overflow-hidden relative">
                    <Image src={fourCardImages[1] || '/placeholder'} alt="Private speedboat on Vembanad Lake, Alleppey" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="aspect-[4/3] rounded-xl sm:rounded-2xl bg-gray-200 overflow-hidden relative">
                    <Image src={fourCardImages[2] || '/placeholder'} alt="Alleppey village canal speed boat cruise" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="aspect-[3/4] rounded-xl sm:rounded-2xl bg-gray-200 overflow-hidden relative">
                    <Image src={fourCardImages[3] || '/placeholder'} alt="Kerala backwater speed boat tour, Alappuzha" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4 sm:gap-6">
            <div>
              <span className="text-emerald-600 text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase font-bold mb-2 sm:mb-3 block">
                Visual Journey
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-0">Speed Boat in Alleppey — Moments Captured</h2>
            </div>
            <a href="https://wa.me/917012761588" className="secondary-button px-4 py-2 sm:px-8 sm:py-3 flex items-center gap-2 text-xs sm:text-sm">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="hidden sm:inline">Share Your Photos</span>
              <span className="sm:hidden">Share</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[220px] sm:auto-rows-[260px] lg:auto-rows-[300px]">
            {galleryImages.slice(0, 6).map((src, index) => (
              <div
                key={index}
                className={`group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer ${index === 0 || index === 3 ? 'sm:col-span-2' : ''}`}
              >
                <Image
                  src={src}
                  alt={`Speed boat in Alleppey backwaters — photo ${index + 1}`}
                  fill
                  loading={index < 2 ? 'eager' : 'lazy'}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm sm:text-base font-medium tracking-wider">VIEW FULLSIZE</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section id="reviews" className="relative py-16 sm:py-24 overflow-hidden bg-gray-50">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-400/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-yellow-400/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Section header */}
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-emerald-600 text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase font-bold mb-2 sm:mb-3 block">
              What Our Guests Say
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Rated on Google
            </h2>

            {/* GMB Rating Badge */}
            <a
              href="https://share.google/kNsH1xQ3FxnArAbS1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 sm:gap-6 glass-card px-6 sm:px-10 py-4 sm:py-6 rounded-2xl hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Google G logo */}
              <svg className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>

              <div className="text-left">
                <div className="flex items-center gap-2 sm:gap-3 mb-1">
                  <span className="text-3xl sm:text-4xl font-black text-gray-900 leading-none">5.0</span>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  <span className="text-gray-700 font-semibold">221+ reviews</span> on Google
                </p>
              </div>

              <span className="text-emerald-600 group-hover:translate-x-1 transition-transform text-lg hidden sm:block">→</span>
            </a>
          </div>

          {/* Review cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-10 sm:mb-14">
            {[
              {
                name: "Arun Mathew",
                initials: "AM",
                color: "from-emerald-500 to-teal-600",
                date: "a week ago",
                review: "Absolutely thrilling experience! The speedboat ride through Alleppey's backwaters was the highlight of our trip. Our pilot was fantastic and knew every hidden gem along the way.",
              },
              {
                name: "Priya Nair",
                initials: "PN",
                color: "from-blue-500 to-indigo-600",
                date: "2 weeks ago",
                review: "A must-do in Alleppey! The 1-hour village discovery package was worth every rupee. Stunning views, safe boat, and the perfect speed for photos. We will definitely come back!",
              },
              {
                name: "Rahul Sharma",
                initials: "RS",
                color: "from-orange-500 to-amber-600",
                date: "3 weeks ago",
                review: "Incredible service from start to finish. The boat was spotless and the life jackets were provided without even asking. Five stars for safety, professionalism, and sheer fun!",
              },
            ].map((r, i) => (
              <a
                key={i}
                href="https://share.google/kNsH1xQ3FxnArAbS1"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 sm:p-6 rounded-2xl flex flex-col gap-4 hover:border-emerald-400/50 transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                {/* Reviewer header */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {r.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-gray-900 text-sm truncate">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.date}</p>
                  </div>
                  {/* Google G mini */}
                  <svg className="ml-auto w-4 h-4 flex-shrink-0 opacity-60" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review text */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">"{r.review}"</p>
              </a>
            ))}
          </div>

          {/* CTA to write a review */}
          <div className="text-center">
            <a
              href="https://share.google/kNsH1xQ3FxnArAbS1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 secondary-button px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold group"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Write a Review on Google
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* How to Book — 3-Step Section */}
      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-emerald-600 text-xs sm:text-sm tracking-widest uppercase font-bold mb-2 block">Simple Process</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Book Your Ride in 3 Steps</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            {[
              { step: '1', icon: '💬', title: 'WhatsApp or Call Us', desc: 'Message us your preferred date, time, and package. We reply instantly.' },
              { step: '2', icon: '✅', title: 'Confirm Your Slot', desc: 'We confirm your booking and share the meeting point at Finishing Point, Alleppey.' },
              { step: '3', icon: '🚤', title: 'Show Up & Enjoy', desc: 'Arrive at the dock, meet your pilot, and hop on your private speed boat!' },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-2xl">{s.icon}</div>
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Step {s.step}</div>
                <h3 className="text-base font-bold text-gray-900">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/917012761588?text=Hi!%20I'd%20like%20to%20book%20a%20speed%20boat%20in%20Alleppey.%20Can%20you%20share%20availability%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl px-8 py-4 transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/20 text-sm uppercase tracking-wider w-full sm:w-auto"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Book on WhatsApp
            </a>
            <a href="tel:+917012761588" className="flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-bold rounded-xl px-8 py-4 transition-all duration-300 text-sm uppercase tracking-wider w-full sm:w-auto">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call +91 70127 61588
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900/5 text-gray-900" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-white" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto glass-card p-6 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Book Your Speed Boat in Alleppey</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Reserve your exclusive speed boat in Alleppey today. Whether it&apos;s a quick thrill or a full backwater cruise, we&apos;re ready to welcome you on the water.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a href="tel:+917012761588" className="primary-button px-6 py-3 sm:px-8 sm:py-4 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call to Book
              </a>
              <a href="https://wa.me/917012761588?text=Hi!%20I'd%20like%20to%20book%20a%20speed%20boat%20in%20Alleppey.%20Could%20you%20share%20availability%20and%20pricing%3F" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg px-6 py-3 sm:px-8 sm:py-4 transform transition-all hover:scale-105 active:scale-95 uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 sm:gap-3 shadow-lg shadow-green-500/20">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Faq />
      <StickyBookingBar />

      {/* Footer */}
      <footer className="footer-gradient text-gray-900 pt-16 sm:pt-24 pb-8 sm:pb-12 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="col-span-1 sm:col-span-2">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl text-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-10 sm:h-10">
                    <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1" />
                    <path d="M19.9 16.1c.4-.5.7-1.2.4-1.8L16 6c-.5-1.1-1.8-1.7-3.4-1.7c-3-.1-5.6 1.4-8.8 4.7c-1.1 1.1-1.3 2.8-.5 4.1" />
                    <path d="M7 13.2a4 4 0 0 0 6.4-1.6" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                    Speed Boat Cruise
                  </h3>
                  <p className="text-[10px] sm:text-xs text-emerald-600 tracking-[0.2em] font-medium uppercase">
                    Alleppey
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-sm mb-6 sm:mb-8">
                Your premium gateway to the backwaters. We create unforgettable memories with a perfect blend of excitement and serenity.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders could go here */}
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">Explore</h4>
              <ul className="space-y-3 sm:space-y-4">
                {['Packages', 'About Us', 'Gallery', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-sm sm:text-base text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-500 transition-colors" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-6">Contact</h4>
              <ul className="space-y-3 sm:space-y-4 text-gray-600">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-emerald-500 mt-1 text-sm sm:text-base">📍</span>
                  <span className="text-sm sm:text-base">Finishing Point,<br />Alleppey, Kerala</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-emerald-500 text-sm sm:text-base">📞</span>
                  <a href="tel:+917012761588" className="text-sm sm:text-base hover:text-gray-900 transition-colors">+91 917012761588</a>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-emerald-500 text-sm sm:text-base">✉️</span>
                  <a href="mailto:abhijithabcd74@gmail.com" className="text-sm sm:text-base hover:text-gray-900 transition-colors">Bookings</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
            <p className="text-center sm:text-left">© {new Date().getFullYear()} Speed Boat Cruise Alleppey. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
