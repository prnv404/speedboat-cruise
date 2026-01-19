import Image from "next/image";
import Navbar from "@/components/Navbar";
import BackgroundCarousel from "@/components/BackgroundCarousel";
import Faq from "@/components/Faq";
import { videoData } from "@/components/video";
import fs from "fs";
import path from "path";

export default function Home() {
  // Discover all images from public/ at render time (server component)
  const publicDir = path.join(process.cwd(), "public");
  const allowedExt = new Set([".jpg", ".jpeg", ".png", ".webp"]);
  let allImages: string[] = [];
  try {
    const files = fs.readdirSync(publicDir);
    allImages = files
      .filter((f) => allowedExt.has(path.extname(f).toLowerCase()))
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
    <main className="relative min-h-screen bg-black text-white selection:bg-emerald-500/30">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Navbar />
        <div className="absolute inset-0 z-0">
          <BackgroundCarousel videos={videoData} />
          <div className="absolute inset-0 hero-gradient pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-24 sm:py-32 pointer-events-none">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in pointer-events-auto">

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight animate-slide-up px-4" style={{ animationDelay: '0.2s' }}>
              Speed Boat Cruise | Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Alleppey's </span>
              <br className="hidden sm:block" />
              Backwater Boat Ride
            </h1>


            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 animate-slide-up px-4" style={{ animationDelay: '0.4s' }}>
              <a href="#contact" className="primary-button px-6 py-3 sm:px-8 sm:py-3 w-full sm:w-auto text-center group">
                Book Your Ride
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="#packages" className="secondary-button px-6 py-3 sm:px-8 sm:py-3 w-full sm:w-auto text-center">
                View Packages
              </a>
            </div>

          </div>
        </div>

        <div className="hidden sm:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Feature Band */}
      <section className="relative z-20 -mt-0 sm:-mt-20 py-12 sm:pb-20 pointer-events-none">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto pointer-events-auto">
            <div className="glass-card p-4 sm:p-6 flex items-center gap-3 sm:gap-4 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="p-2 sm:p-3 rounded-full bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Top Speed</p>
                <p className="text-xl sm:text-2xl font-bold text-white">60 km/h <span className="text-xs sm:text-sm font-normal text-gray-500">(35 knots)</span></p>
              </div>
            </div>

            <div className="glass-card p-4 sm:p-6 flex items-center gap-3 sm:gap-4 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="p-2 sm:p-3 rounded-full bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Capacity</p>
                <p className="text-xl sm:text-2xl font-bold text-white">7 People <span className="text-xs sm:text-sm font-normal text-gray-500">Max</span></p>
              </div>
            </div>

            <div className="glass-card p-4 sm:p-6 flex items-center gap-3 sm:gap-4 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="p-2 sm:p-3 rounded-full bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">Safety First</p>
                <p className="text-xs sm:text-sm font-medium text-white">Licensed Pilot & Life Jackets</p>
              </div>
            </div>
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
            <span className="text-emerald-400 text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase font-bold mb-2 sm:mb-3 block">
              Choose Your Adventure
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">Curated Packages</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Select the perfect journey for your time and comfort. Each package is designed to show you the best of Alleppey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Village Discovery",
                time: "1 Hour",
                badge: "Signature Tour",
                price: "Best Value",
                features: ["Alleppey Terminals", "Boat Race Track", "Village Canals", "Kayinakary Photo Point", "Vembanad Lake Views"],
                distance: "30 km coverage",
                color: "from-emerald-400 to-teal-500"
              },
              {
                title: "Lake Explorer",
                time: "30 Minutes",
                badge: "Popular",
                features: ["Alleppey Terminals", "Boat Race Track", "Village Canal Glimpses", "Vembanad Lake Entry"],
                distance: "15 km coverage",
                color: "from-blue-400 to-indigo-500"
              },
              {
                title: "Quick Thrill",
                time: "10 Minutes",
                badge: "Express",
                features: ["Punnamada Lake", "Speed Experience", "Photo Opportunities"],
                distance: "7 km fun ride",
                color: "from-orange-400 to-amber-500"
              },
            ].map((pkg, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full glass-card p-1 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-colors duration-500">
                  <div className="bg-black/40 h-full rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 flex flex-col relative overflow-hidden">
                    {/* Badge */}
                    <div className="absolute top-0 right-0 p-4 sm:p-6">
                      <span className={`px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${pkg.color} text-black`}>{pkg.badge}</span>
                    </div>

                    <div className="mb-4 sm:mb-6">
                      <p className="text-gray-400 uppercase tracking-widest text-[10px] sm:text-xs font-bold mb-1 sm:mb-2">{pkg.time}</p>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                      <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-transparent rounded-full" />
                    </div>

                    <div className="flex-grow space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      {pkg.features.map((feature, f) => (
                        <div key={f} className="flex items-start gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-4 sm:pt-6 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs text-gray-500 flex items-center gap-1">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-1.447-.894L15 7m0 13V7" />
                        </svg>
                        {pkg.distance}
                      </span>
                      <a href="#contact" className="text-xs sm:text-sm font-bold text-white hover:text-emerald-400 transition-colors flex items-center gap-1 sm:gap-2 group-hover:gap-3">
                        Book Now <span className="transition-transform">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 relative bg-gray-900/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-12 sm:gap-16 items-center">
            <div className="md:w-1/2 space-y-6 sm:space-y-8">
              <div>
                <span className="text-emerald-400 text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase font-bold mb-2 sm:mb-3 block">
                  Why Choose Us
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Luxury Meets <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Eco-Adventure</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                  We don't just offer a ride; we offer an experience. Our premium fleet combines the thrill of speed with the comfort of luxury, all while respecting the delicate ecosystem of the backwaters.
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
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-800 flex items-center justify-center text-emerald-400 border border-gray-700">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 relative w-full">
              <div className="aspect-square rounded-full bg-emerald-500/20 absolute blur-3xl inset-0 -z-10" />
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3 sm:space-y-4 translate-y-6 sm:translate-y-8">
                  <div className="aspect-[3/4] rounded-xl sm:rounded-2xl bg-gray-800 overflow-hidden relative">
                    <Image src={fourCardImages[0] || '/placeholder'} alt="About 1" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="aspect-[4/3] rounded-xl sm:rounded-2xl bg-gray-800 overflow-hidden relative">
                    <Image src={fourCardImages[1] || '/placeholder'} alt="About 2" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="aspect-[4/3] rounded-xl sm:rounded-2xl bg-gray-800 overflow-hidden relative">
                    <Image src={fourCardImages[2] || '/placeholder'} alt="About 3" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="aspect-[3/4] rounded-xl sm:rounded-2xl bg-gray-800 overflow-hidden relative">
                    <Image src={fourCardImages[3] || '/placeholder'} alt="About 4" fill className="object-cover hover:scale-110 transition-transform duration-700" />
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
              <span className="text-emerald-400 text-xs sm:text-sm tracking-wider sm:tracking-widest uppercase font-bold mb-2 sm:mb-3 block">
                Visual Journey
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-0">Moments Captured</h2>
            </div>
            <a href="https://wa.me/919947753154" className="secondary-button px-4 py-2 sm:px-8 sm:py-3 flex items-center gap-2 text-xs sm:text-sm">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="hidden sm:inline">Share Your Photos</span>
              <span className="sm:hidden">Share</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[200px] sm:auto-rows-[250px]">
            {galleryImages.slice(0, 6).map((src, index) => (
              <div
                key={index}
                className={`group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer ${index === 0 || index === 3 ? 'sm:col-span-2' : ''}`}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
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

      {/* Contact Section */}
      <section id="contact" className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto glass-card p-6 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Ready for the Adventure?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Book your exclusive speedboat tour today. Whether it's a quick thrill or a leisurely cruise, we're ready to welcome you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a href="tel:+919947753154" className="primary-button px-6 py-3 sm:px-8 sm:py-4 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call to Book
              </a>
              <a href="https://wa.me/919947753154" className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg px-6 py-3 sm:px-8 sm:py-4 transform transition-all hover:scale-105 active:scale-95 uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 sm:gap-3 shadow-lg shadow-green-500/20">
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

      {/* Footer */}
      <footer className="footer-gradient text-white pt-16 sm:pt-24 pb-8 sm:pb-12 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="col-span-1 sm:col-span-2">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-10 sm:h-10">
                    <path d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1" />
                    <path d="M19.9 16.1c.4-.5.7-1.2.4-1.8L16 6c-.5-1.1-1.8-1.7-3.4-1.7c-3-.1-5.6 1.4-8.8 4.7c-1.1 1.1-1.3 2.8-.5 4.1" />
                    <path d="M7 13.2a4 4 0 0 0 6.4-1.6" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Speed Boat Cruise
                  </h3>
                  <p className="text-[10px] sm:text-xs text-emerald-500 tracking-[0.2em] font-medium uppercase">
                    Alleppey
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-sm mb-6 sm:mb-8">
                Your premium gateway to the backwaters. We create unforgettable memories with a perfect blend of excitement and serenity.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders could go here */}
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">Explore</h4>
              <ul className="space-y-3 sm:space-y-4">
                {['Packages', 'About Us', 'Gallery', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-sm sm:text-base text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 transition-colors" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6">Contact</h4>
              <ul className="space-y-3 sm:space-y-4 text-gray-400">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-emerald-500 mt-1 text-sm sm:text-base">📍</span>
                  <span className="text-sm sm:text-base">Finishing Point,<br />Alleppey, Kerala</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-emerald-500 text-sm sm:text-base">📞</span>
                  <a href="tel:+919947753154" className="text-sm sm:text-base hover:text-white transition-colors">+91 9947753154</a>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-emerald-500 text-sm sm:text-base">✉️</span>
                  <a href="mailto:abhijithabcd74@gmail.com" className="text-sm sm:text-base hover:text-white transition-colors">Bookings</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
            <p className="text-center sm:text-left">© {new Date().getFullYear()} Speed Boat Cruise Alleppey. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
