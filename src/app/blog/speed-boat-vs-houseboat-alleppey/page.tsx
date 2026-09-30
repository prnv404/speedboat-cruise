import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Speed Boat vs Houseboat in Alleppey — Which is Better? | Speed Boat Cruise Alleppey",
  description:
    "Speed boat or houseboat in Alleppey? We break down cost, experience, best for families vs couples, and how to choose between these two iconic Kerala backwater experiences.",
  alternates: { canonical: "https://www.speedboatcruisealleppey.com/blog/speed-boat-vs-houseboat-alleppey" },
  openGraph: {
    title: "Speed Boat vs Houseboat in Alleppey — Which Should You Choose?",
    description: "An honest comparison of speed boats and houseboats in Alleppey to help you decide which experience is right for your trip.",
    url: "https://www.speedboatcruisealleppey.com/blog/speed-boat-vs-houseboat-alleppey",
    images: [{ url: "https://www.speedboatcruisealleppey.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

const BookingCTA = () => (
  <div className="my-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center">
    <p className="text-sm text-emerald-700 font-semibold uppercase tracking-widest mb-2">Book the Speed Boat Experience</p>
    <h3 className="text-xl font-bold text-gray-900 mb-3">Private Speed Boat Rides in Alleppey</h3>
    <p className="text-gray-600 text-sm mb-5">10 min · 30 min · 1 hour · Rated 5.0 ★ · 221+ reviews</p>
    <a
      href="https://wa.me/917012761588?text=Hi!%20I'd%20like%20to%20book%20a%20speed%20boat%20in%20Alleppey."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-all hover:scale-105"
    >
      Book on WhatsApp →
    </a>
  </div>
);

export default function SpeedBoatVsHouseboat() {
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
            <span className="inline-block text-xs font-bold uppercase tracking-wider bg-blue-500 text-white px-3 py-1 rounded-full mb-4">Comparison</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Speed Boat vs Houseboat in Alleppey — Which is Better for You?
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Both are iconic Kerala experiences. Both let you explore the famous Alleppey backwaters. But they couldn&apos;t be more different. Here&apos;s an honest comparison to help you choose.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
              <span>September 2026</span><span>·</span><span>5 min read</span>
            </div>
          </div>
        </div>
      </header>

      <article className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 shadow-md">
              <Image src="/og-image.jpg" alt="Speed boat vs houseboat in Alleppey — comparison guide" fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover" priority />
            </div>

            <p className="text-xl text-gray-600 leading-relaxed font-medium border-l-4 border-emerald-500 pl-5 mb-10">
              When people plan a trip to Alleppey, the most common question is: &quot;Should I do a speed boat tour or stay on a houseboat?&quot; The short answer: they&apos;re completely different experiences, and ideally you do both. But if you only have time or budget for one — here&apos;s how to choose.
            </p>

            {/* Comparison table */}
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Side-by-Side Comparison</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left p-4 font-bold text-gray-600"></th>
                    <th className="text-center p-4 font-bold text-emerald-700">🚤 Speed Boat</th>
                    <th className="text-center p-4 font-bold text-blue-700">🛥️ Houseboat</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Duration", "10 min to 1 hour", "Half-day to overnight"],
                    ["Speed", "Fast (up to 60 km/h)", "Slow drift (5–10 km/h)"],
                    ["Coverage", "15–30 km of backwaters", "Limited — moored at night"],
                    ["Vibe", "Thrilling, energetic", "Relaxing, romantic"],
                    ["Best For", "Families, groups, thrill-seekers", "Couples, anniversary, leisure"],
                    ["Private?", "Yes — always private", "Yes — private boat"],
                    ["Overnight Stay", "No", "Yes"],
                    ["Access to Village Canals", "Yes — shallow canals too", "Only main channels"],
                    ["Cost", "Lower — from ₹799", "Higher — ₹5,000–₹25,000+/night"],
                    ["Booking Lead Time", "Same day available", "Book 1–2 weeks ahead"],
                  ].map(([aspect, speed, houseboat], i) => (
                    <tr key={aspect} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="p-4 font-medium text-gray-700">{aspect}</td>
                      <td className="p-4 text-center text-gray-600">{speed}</td>
                      <td className="p-4 text-center text-gray-600">{houseboat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {[
              {
                title: "Choose a Speed Boat if…",
                color: "emerald",
                items: [
                  "You have limited time (even 30 minutes is enough for a fantastic experience)",
                  "You want to cover a lot of ground and see different parts of the backwaters",
                  "You're travelling with kids or a group who want an active, exciting experience",
                  "You want to explore narrow village canals that big houseboats can't access",
                  "You're on a budget but still want a genuine backwater experience",
                ],
              },
              {
                title: "Choose a Houseboat if…",
                color: "blue",
                items: [
                  "You want to spend a full day or night on the water",
                  "You're on a romantic trip or celebrating an anniversary",
                  "You want meals cooked on board and a slow, luxurious pace",
                  "You want to wake up surrounded by water and watch the sunrise from your deck",
                  "You're happy to stay on the main channels and not explore too far",
                ],
              },
            ].map((section) => (
              <div key={section.title} className={`mb-8 p-6 rounded-2xl border ${section.color === "emerald" ? "bg-emerald-50 border-emerald-200" : "bg-blue-50 border-blue-200"}`}>
                <h2 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className={section.color === "emerald" ? "text-emerald-500" : "text-blue-500"}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-gray-900 text-white rounded-2xl p-6 sm:p-8 mb-8">
              <h2 className="text-xl font-bold mb-3">💡 Our Honest Advice</h2>
              <p className="text-gray-300 leading-relaxed text-sm">
                If you can do both — do both. Start your day with a 1-hour private speed boat tour at sunrise to see the backwaters at full scale, then transition to a houseboat for the evening and night. This combination gives you the best of both worlds: the thrill of speed and the serenity of floating gently through Kerala at dusk.
              </p>
            </div>

            <BookingCTA />

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Related Articles</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/blog/things-to-do-in-alleppey" className="flex-1 p-4 rounded-xl border border-gray-200 hover:border-emerald-300 transition-colors text-sm font-medium text-gray-700 hover:text-emerald-700">
                  10 Best Things to Do in Alleppey →
                </Link>
                <Link href="/blog/alleppey-backwater-tour-guide" className="flex-1 p-4 rounded-xl border border-gray-200 hover:border-emerald-300 transition-colors text-sm font-medium text-gray-700 hover:text-emerald-700">
                  Complete Alleppey Tour Guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

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
