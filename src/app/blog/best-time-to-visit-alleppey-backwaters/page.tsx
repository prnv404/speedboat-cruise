import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Best Time to Visit Alleppey Backwaters — Month-by-Month Guide | Speed Boat Cruise Alleppey",
  description:
    "When is the best time to visit Alleppey backwaters? Month-by-month guide covering Kerala weather, monsoon season, crowds, festivals, and when to get the best backwater experience.",
  alternates: { canonical: "https://www.speedboatcruisealleppey.com/blog/best-time-to-visit-alleppey-backwaters" },
  openGraph: {
    title: "Best Time to Visit Alleppey Backwaters (Month-by-Month Guide)",
    description: "Local guide to when you should visit the Alleppey backwaters — weather, festivals, crowds and hidden season tips.",
    url: "https://www.speedboatcruisealleppey.com/blog/best-time-to-visit-alleppey-backwaters",
    images: [{ url: "https://www.speedboatcruisealleppey.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

const BookingCTA = () => (
  <div className="my-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center">
    <h3 className="text-xl font-bold text-gray-900 mb-3">Book Whenever You Visit — We Operate Year-Round</h3>
    <p className="text-gray-600 text-sm mb-5">6:00 AM – 6:30 PM · Every day · Rain or shine (weather permitting)</p>
    <a href="https://wa.me/917012761588?text=Hi!%20I'd%20like%20to%20book%20a%20speed%20boat%20in%20Alleppey." target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-all hover:scale-105">
      Check Availability on WhatsApp →
    </a>
  </div>
);

const months = [
  { month: "October – February", season: "Peak Season", emoji: "☀️", rating: 5, color: "emerald", desc: "The best months to visit Alleppey. Cool, dry weather (24–30°C), calm backwaters, clear skies. Perfect for speed boat rides and houseboat stays. Expect crowds, especially in December–January. Book ahead.", },
  { month: "March – April", season: "Pre-Monsoon", emoji: "🌤️", rating: 4, color: "yellow", desc: "Warm and slightly humid but still great. Fewer tourists, lower prices, and just as beautiful. April can get hot (35°C+). Sunrise speed boat rides are highly recommended to avoid the midday heat.", },
  { month: "May", season: "Transition", emoji: "⛅", rating: 3, color: "orange", desc: "The start of the Kerala summer heat. Travel is still possible but prepare for temperatures up to 37°C. The backwaters are calm, and you'll have them largely to yourself.", },
  { month: "June – August", season: "Monsoon", emoji: "🌧️", rating: 4, color: "blue", desc: "Counterintuitively, the monsoon is a magical time on the backwaters. The rains turn Kerala impossibly green, the water swells, and there's almost no one around. Speed boat tours run when safe — we always check conditions first. The Nehru Trophy Boat Race happens in August.", },
  { month: "September", season: "Late Monsoon", emoji: "🌦️", rating: 3, color: "gray", desc: "The tail end of monsoon. Rains taper off mid-month. Backwaters are full and lush. A great shoulder season with low prices and improving weather.", },
];

export default function BestTimeToVisit() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 text-white pt-20 pb-16 sm:pt-28 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Articles
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-wider bg-orange-500 text-white px-3 py-1 rounded-full mb-4">Planning</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Best Time to Visit Alleppey Backwaters — Month-by-Month Guide
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">A local&apos;s honest guide to every season in Alleppey — the good, the hot, and the surprisingly magical monsoon.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
              <span>September 2026</span><span>·</span><span>6 min read</span>
            </div>
          </div>
        </div>
      </header>

      <article className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 shadow-md">
              <Image src="/og-image.jpg" alt="Alleppey backwaters — best time to visit Kerala" fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover" priority />
            </div>

            <p className="text-xl text-gray-600 leading-relaxed font-medium border-l-4 border-emerald-500 pl-5 mb-10">
              We operate speed boat rides in Alleppey every single day of the year. We&apos;ve seen every season, every monsoon, every sunrise. Here&apos;s what we honestly think about when to visit — and the answer might surprise you.
            </p>

            <div className="bg-emerald-900 text-white rounded-2xl p-6 mb-10">
              <h2 className="text-lg font-bold mb-2">🏆 Best Overall: October to February</h2>
              <p className="text-emerald-200 text-sm leading-relaxed">Dry, cool, and beautiful — this is Kerala&apos;s winter. If you have flexibility, aim for November or December. But honestly? Alleppey is worth visiting any time of year.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Season by Season Breakdown</h2>
            <div className="space-y-5 mb-10">
              {months.map((m) => (
                <div key={m.month} className="p-6 rounded-2xl border border-gray-200 bg-gray-50">
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{m.emoji}</span>
                      <div>
                        <p className="font-bold text-gray-900">{m.month}</p>
                        <p className="text-xs text-gray-500 font-medium">{m.season}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map((s) => (
                        <svg key={s} className={`w-4 h-4 ${s <= m.rating ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-5">Best Time of Day for a Speed Boat Ride</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { time: "🌅 Sunrise (6:30 AM)", desc: "Calm water, golden light, birds, silence. Our personal favourite. Perfect for photography and a meditative start to the day." },
                { time: "🌇 Sunset (5:00 PM)", desc: "The backwaters turn copper and gold. Cooler than midday. Romantic and dramatic — especially on Vembanad Lake." },
                { time: "☀️ Morning (8–11 AM)", desc: "Busy but beautiful. Great weather, active village life along the canals. Most bookings are at this time." },
                { time: "🌞 Midday (12–3 PM)", desc: "Hot but available. Some guests prefer this — fewer boats on the water, full sunlight for photos." },
              ].map((slot) => (
                <div key={slot.time} className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="font-bold text-gray-900 mb-1">{slot.time}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{slot.desc}</p>
                </div>
              ))}
            </div>

            <BookingCTA />

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Related Articles</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/blog/things-to-do-in-alleppey" className="flex-1 p-4 rounded-xl border border-gray-200 hover:border-emerald-300 transition-colors text-sm font-medium text-gray-700 hover:text-emerald-700">10 Best Things to Do in Alleppey →</Link>
                <Link href="/blog/alleppey-backwater-tour-guide" className="flex-1 p-4 rounded-xl border border-gray-200 hover:border-emerald-300 transition-colors text-sm font-medium text-gray-700 hover:text-emerald-700">Complete Alleppey Tour Guide →</Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-500">
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <Link href="/blog" className="hover:text-emerald-600 transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link>
        </div>
        <p className="mt-4">© {new Date().getFullYear()} Speed Boat Cruise Alleppey. All rights reserved.</p>
      </footer>
    </main>
  );
}
