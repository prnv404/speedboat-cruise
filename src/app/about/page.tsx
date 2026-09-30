import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Speed Boat Cruise Alleppey — Kerala's #1 Private Backwater Tour",
  description:
    "Meet the team behind Speed Boat Cruise Alleppey. Learn our story, our commitment to safety, and why we're Kerala's most trusted private speed boat operator on the Alleppey backwaters.",
  alternates: {
    canonical: "https://www.speedboatcruisealleppey.com/about",
  },
  openGraph: {
    title: "About Speed Boat Cruise Alleppey — Our Story",
    description: "Meet the local experts behind Alleppey's #1 rated private speed boat experience. Certified pilots, eco-friendly engines, 221+ five-star reviews.",
    url: "https://www.speedboatcruisealleppey.com/about",
    images: [{ url: "https://www.speedboatcruisealleppey.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Header */}
      <header className="bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 text-white pt-20 pb-16 sm:pt-28 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-emerald-400/40 mx-auto mb-6 shadow-xl">
            <Image src="/hero-poster.jpg" alt="Speed Boat Cruise Alleppey — Our team on the water" fill className="object-cover" sizes="80px" />
          </div>
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-3">Our Story</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Us</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Kerala locals. Backwater experts. Passionate about showing you the real Alleppey.
          </p>
        </div>
      </header>

      {/* Story Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">

            {/* Our Story */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/hero-poster.jpg"
                  alt="Happy guests on Speed Boat Cruise Alleppey — private backwater tour"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-emerald-600 text-xs font-bold uppercase tracking-widest mb-3 block">Who We Are</span>
                <h2 className="text-3xl font-bold text-gray-900 mb-5 leading-tight">
                  Born on the Backwaters of Alleppey
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    We are a small, family-run operation based right here at the <strong>Finishing Point in Alappuzha</strong> — the heart of Kerala&apos;s legendary backwater network. Every single one of our pilots is a local who has grown up navigating these canals, lakes, and waterways.
                  </p>
                  <p>
                    We started with one simple belief: tourists deserve a <strong>private, thrilling, authentic backwater experience</strong> — not a crowded ferry ride. So we built it. One speed boat. One promise. Show every guest the real Kerala.
                  </p>
                  <p>
                    Today, we&apos;re proud to be rated <strong>5.0 on Google with 221+ reviews</strong> — every single one earned through genuine hospitality and unforgettable rides.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
              {[
                { number: "221+", label: "5★ Google Reviews" },
                { number: "7", label: "Passengers Max — Always Private" },
                { number: "60", label: "km/h Top Speed" },
                { number: "3", label: "Packages from 10 min to 1 hour" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <p className="text-3xl font-black text-emerald-600 mb-1">{stat.number}</p>
                  <p className="text-xs text-gray-600 font-medium leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Why Guests Choose Us</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: "🛡️",
                    title: "Safety Above Everything",
                    desc: "Every passenger wears a certified life jacket. Every pilot is licensed. We have never compromised on safety in a single trip — and we never will.",
                  },
                  {
                    icon: "🚤",
                    title: "100% Private — No Sharing",
                    desc: "Your booking is your boat. You will never be grouped with strangers. Whether it's a family of 7 or just 2 people, the entire boat is yours.",
                  },
                  {
                    icon: "🌿",
                    title: "Eco-Conscious Operation",
                    desc: "Our modern engines are designed to minimize noise and fuel impact on the backwater ecosystem. We respect the waters that make this experience possible.",
                  },
                  {
                    icon: "📍",
                    title: "Local Expertise",
                    desc: "Our pilots aren't just drivers — they're storytellers. They know every hidden canal, every nesting bird, every landmark. You get the insider's Alleppey.",
                  },
                  {
                    icon: "✅",
                    title: "Free 24-Hour Cancellation",
                    desc: "Plans change. We get it. Cancel up to 24 hours before your ride for a full refund — no questions asked.",
                  },
                  {
                    icon: "⭐",
                    title: "5.0 on Google — Every Review Earned",
                    desc: "We don't just collect reviews — we earn them. Every 5-star rating is from a real guest who experienced exactly what we promised.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Come ride with us</h2>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                We&apos;re at the Finishing Point, Alappuzha — every morning from 6 AM. Book a slot today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/917012761588?text=Hi!%20I%20read%20about%20you%20and%20would%20love%20to%20book%20a%20speed%20boat%20ride%20in%20Alleppey!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Book on WhatsApp
                </a>
                <a href="tel:+917012761588" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-gray-300 hover:border-emerald-500 text-gray-700 font-bold text-sm transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call +91 70127 61588
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-500">
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <Link href="/gallery" className="hover:text-emerald-600 transition-colors">Gallery</Link>
          <Link href="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link>
          <Link href="/blog" className="hover:text-emerald-600 transition-colors">Blog</Link>
        </div>
        <p className="mt-4">© {new Date().getFullYear()} Speed Boat Cruise Alleppey. All rights reserved.</p>
      </footer>
    </main>
  );
}
