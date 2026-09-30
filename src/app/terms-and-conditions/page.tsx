import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms & Conditions | Speed Boat Cruise Alleppey",
  description:
    "Terms and conditions for Speed Boat Cruise Alleppey. Read our booking policy, cancellation policy, safety rules, and liability information for speed boat rides in Kerala.",
  alternates: {
    canonical: "https://www.speedboatcruisealleppey.com/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const lastUpdated = "30 September 2026";

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 text-white pt-20 pb-16 sm:pt-28 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-[120px]" />
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Terms &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Conditions</span>
          </h1>
          <p className="text-gray-400 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </header>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-emerald-500 pl-5 mb-10">
              By booking a speed boat ride with <strong>Speed Boat Cruise Alleppey</strong>, you agree to the following terms and conditions. These exist to ensure a safe, enjoyable experience for everyone on board.
            </p>

            <div className="space-y-8">

              {/* 1. Bookings */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">1</span>
                  Bookings &amp; Reservations
                </h2>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Bookings are confirmed via WhatsApp or phone call. A booking is considered confirmed only when you receive a confirmation message from us with the date, time, and meeting point.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Our speed boat accommodates a maximum of <strong>7 passengers</strong> per trip. All bookings are private — your group will not share the boat with other guests.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Operating hours are <strong>6:00 AM to 6:30 PM</strong>, seven days a week. Requests outside these hours cannot be accommodated.</span>
                  </li>
                </ul>
              </div>

              {/* 2. Cancellation */}
              <div className="bg-emerald-50 rounded-2xl p-6 sm:p-8 border border-emerald-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">2</span>
                  Cancellation &amp; Refund Policy
                </h2>
                <div className="space-y-4 text-sm text-gray-700">
                  <div className="flex gap-3 p-4 bg-white rounded-xl border border-emerald-200">
                    <span className="text-2xl">✅</span>
                    <div>
                      <p className="font-bold text-gray-900">Cancelled by you — 24+ hours before trip</p>
                      <p className="text-gray-600 mt-1">Full 100% refund. No questions asked.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-4 bg-white rounded-xl border border-gray-200">
                    <span className="text-2xl">⚠️</span>
                    <div>
                      <p className="font-bold text-gray-900">Cancelled by you — less than 24 hours before trip</p>
                      <p className="text-gray-600 mt-1">We will do our best to reschedule your trip to another convenient slot. Refund at our discretion.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-4 bg-white rounded-xl border border-emerald-200">
                    <span className="text-2xl">🌧️</span>
                    <div>
                      <p className="font-bold text-gray-900">Cancelled by us — weather or safety reasons</p>
                      <p className="text-gray-600 mt-1">Full 100% immediate refund, or free reschedule — your choice. Your safety is always our first priority.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Safety & Conduct */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">3</span>
                  Safety Rules &amp; Passenger Conduct
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  The safety of all passengers is our top priority. The following rules are <strong>mandatory</strong> and must be followed at all times during the trip:
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5 flex-shrink-0 font-bold">•</span>
                    <span><strong>Life jackets must be worn</strong> by all passengers throughout the duration of the ride. We provide certified life jackets for all passengers, including children.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5 flex-shrink-0 font-bold">•</span>
                    <span><strong>Passengers must follow the pilot&apos;s instructions</strong> at all times. The pilot&apos;s decisions regarding speed, route, and safety are final and non-negotiable.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5 flex-shrink-0 font-bold">•</span>
                    <span><strong>No alcohol or intoxicating substances</strong> are permitted on board or before boarding. Any passenger who appears intoxicated will be refused boarding with no refund.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5 flex-shrink-0 font-bold">•</span>
                    <span><strong>Do not stand or lean overboard</strong> during the trip. Remain seated unless instructed otherwise by the pilot.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>Photography and video recording during the ride is permitted and encouraged.</span>
                  </li>
                </ul>
              </div>

              {/* 4. Liability */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">4</span>
                  Liability &amp; Personal Belongings
                </h2>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5 flex-shrink-0">→</span>
                    <span><strong>Speed Boat Cruise Alleppey is not liable</strong> for any loss, damage, or theft of personal belongings during the trip. We strongly advise against bringing valuables on board.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5 flex-shrink-0">→</span>
                    <span>Items lost overboard cannot be recovered. Please secure your belongings before and during the ride.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5 flex-shrink-0">→</span>
                    <span>We are not liable for any injury resulting from failure to comply with the safety instructions provided by the pilot.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5 flex-shrink-0">→</span>
                    <span>Passengers with serious medical conditions should consult a doctor before booking. Please inform us of any conditions at the time of booking so we can advise appropriately.</span>
                  </li>
                </ul>
              </div>

              {/* 5. Weather */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">5</span>
                  Weather &amp; Force Majeure
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Kerala&apos;s backwaters are subject to monsoon and weather changes. We reserve the right to cancel or modify trips at any time if we determine that weather or water conditions pose a safety risk. In such cases, passengers will receive a full refund or free reschedule. We monitor conditions closely and will notify you as early as possible.
                </p>
              </div>

              {/* 6. Governing Law */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">6</span>
                  Governing Law
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  These Terms and Conditions are governed by the laws of India. Any disputes arising from bookings with Speed Boat Cruise Alleppey shall be subject to the jurisdiction of the courts in Alappuzha, Kerala, India.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-emerald-50 rounded-2xl p-6 sm:p-8 border border-emerald-200 text-center">
                <p className="text-gray-700 font-medium mb-2">Questions about these terms?</p>
                <p className="text-sm text-gray-600 mb-5">We&apos;re happy to clarify anything before you book.</p>
                <a
                  href="https://wa.me/917012761588?text=Hi!%20I%20have%20a%20question%20about%20your%20terms%20and%20conditions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Ask Us on WhatsApp
                </a>
              </div>

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
