import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us | Speed Boat Cruise Alleppey",
  description:
    "Get in touch with Speed Boat Cruise Alleppey. Call or WhatsApp us to book your private Kerala backwater speed boat tour. Located at Finishing Point, Alappuzha.",
  alternates: {
    canonical: "https://www.speedboatcruisealleppey.com/contact",
  },
  openGraph: {
    title: "Contact Speed Boat Cruise Alleppey",
    description:
      "Book your private speed boat ride in Alleppey. Call +91 70127 61588 or WhatsApp us. Located at Finishing Point, Alappuzha, Kerala.",
    url: "https://www.speedboatcruisealleppey.com/contact",
    images: [{ url: "https://www.speedboatcruisealleppey.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 text-white pt-20 pb-16 sm:pt-28 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-emerald-400/50">
              <Image src="/logo.png" alt="Speed Boat Cruise Alleppey" fill className="object-cover" sizes="40px" />
            </div>
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Speed Boat Cruise Alleppey</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Us</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto">
            Ready to book? WhatsApp or call us directly — we reply instantly.
          </p>
        </div>
      </header>

      {/* Contact Cards */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {/* WhatsApp */}
            <a
              href="https://wa.me/917012761588?text=Hi!%20I'd%20like%20to%20book%20a%20speed%20boat%20in%20Alleppey.%20Could%20you%20share%20availability%20and%20pricing%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center gap-4 p-8 rounded-2xl border border-gray-200 hover:border-emerald-400/60 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                <svg className="w-8 h-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">WhatsApp</p>
                <p className="text-xl font-bold text-gray-900">+91 70127 61588</p>
                <p className="text-sm text-emerald-600 font-medium mt-1">Instant reply · Book here</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+917012761588"
              className="group flex flex-col items-center text-center gap-4 p-8 rounded-2xl border border-gray-200 hover:border-emerald-400/60 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Call Us</p>
                <p className="text-xl font-bold text-gray-900">+91 70127 61588</p>
                <p className="text-sm text-gray-500 font-medium mt-1">Open 6:00 AM – 6:30 PM</p>
              </div>
            </a>

            {/* Location */}
            <div className="group flex flex-col items-center text-center gap-4 p-8 rounded-2xl border border-gray-200 bg-white">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Departure Point</p>
                <p className="text-lg font-bold text-gray-900">Finishing Point</p>
                <p className="text-sm text-gray-600 mt-1">Alappuzha (Alleppey)<br />Kerala 688012</p>
              </div>
            </div>
          </div>

          {/* Map + Info */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm aspect-[4/3] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.1234567890!2d76.3388!3d9.4981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08712d5e0d9edd%3A0x1fc6c5c7f4a9d7b8!2sFinishing%20Point%20Boat%20Jetty%2C%20Alappuzha!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Speed Boat Cruise Alleppey location — Finishing Point, Alappuzha"
              />
            </div>

            {/* Info Panel */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Find Us</h2>
                <div className="space-y-4 text-gray-600">
                  <div className="flex gap-3">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">📍</span>
                    <div>
                      <p className="font-semibold text-gray-900">Finishing Point (Alleppey Boat Jetty)</p>
                      <p className="text-sm">Alappuzha, Kerala 688012 — the main backwater hub in town</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">🛺</span>
                    <p className="text-sm">Easily reachable by auto-rickshaw, taxi, or public transport from any hotel in Alleppey</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">📌</span>
                    <p className="text-sm">Once you book, we send you the exact <strong>Google Maps pin on WhatsApp</strong></p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Operating Hours</h2>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">Monday – Sunday</span>
                    <span className="font-bold text-emerald-700">6:00 AM – 6:30 PM</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">Best Slots</span>
                    <span className="font-medium text-gray-600">Sunrise 6:30 AM · Sunset 5:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs text-emerald-700 font-semibold">Open 7 days a week, all year round</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/917012761588?text=Hi!%20I'd%20like%20to%20book%20a%20speed%20boat%20in%20Alleppey.%20Could%20you%20share%20availability%20and%20pricing%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm uppercase tracking-wider transition-all hover:scale-[1.02] shadow-lg shadow-green-500/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Book on WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-500">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-emerald-600 transition-colors">About</Link>
          <Link href="/gallery" className="hover:text-emerald-600 transition-colors">Gallery</Link>
          <Link href="/blog" className="hover:text-emerald-600 transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link>
          <Link href="/privacy-policy" className="hover:text-emerald-600 transition-colors">Privacy Policy</Link>
          <Link href="/terms-and-conditions" className="hover:text-emerald-600 transition-colors">Terms of Service</Link>
        </div>
        <p className="mt-4">© {new Date().getFullYear()} Speed Boat Cruise Alleppey. All rights reserved.</p>
      </footer>
    </main>
  );
}
