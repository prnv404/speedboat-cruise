import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Complete Guide to Alleppey Backwater Tours — Prices, Tips & What to Expect | Speed Boat Cruise Alleppey",
  description:
    "Everything you need to know about Alleppey backwater tours — types of tours, prices, what's included, how to book, what to bring, and insider tips from local operators.",
  alternates: { canonical: "https://www.speedboatcruisealleppey.com/blog/alleppey-backwater-tour-guide" },
  openGraph: {
    title: "Complete Guide to Alleppey Backwater Tours — Prices, Tips & What to Expect",
    description: "The definitive guide to booking and experiencing an Alleppey backwater tour — written by people who run one every single day.",
    url: "https://www.speedboatcruisealleppey.com/blog/alleppey-backwater-tour-guide",
    images: [{ url: "https://www.speedboatcruisealleppey.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

const BookingCTA = () => (
  <div className="my-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center">
    <p className="text-sm text-emerald-700 font-semibold uppercase tracking-widest mb-2">Book Our Speed Boat Tour</p>
    <h3 className="text-xl font-bold text-gray-900 mb-2">Private Speed Boat Ride in Alleppey</h3>
    <p className="text-gray-600 text-sm mb-5">From 10 min to 1 hour · Always private · 5.0 ★ on Google</p>
    <a href="https://wa.me/917012761588?text=Hi!%20I%20read%20your%20guide%20and%20would%20like%20to%20book%20a%20speed%20boat%20tour%20in%20Alleppey." target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-all hover:scale-105">
      Book on WhatsApp →
    </a>
  </div>
);

export default function AlleppeyTourGuide() {
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
            <span className="inline-block text-xs font-bold uppercase tracking-wider bg-purple-500 text-white px-3 py-1 rounded-full mb-4">Complete Guide</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Complete Guide to Alleppey Backwater Tours — Prices, Tips &amp; What to Expect
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">Written by the people who run a speed boat tour every single day. No fluff — just everything you actually need to know before booking.</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
              <span>September 2026</span><span>·</span><span>9 min read</span>
            </div>
          </div>
        </div>
      </header>

      <article className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 shadow-md">
              <Image src="/og-image.jpg" alt="Alleppey backwater tour guide — speed boat on Kerala canals" fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover" priority />
            </div>

            <p className="text-xl text-gray-600 leading-relaxed font-medium border-l-4 border-emerald-500 pl-5 mb-10">
              Alleppey&apos;s backwaters are one of India&apos;s most extraordinary natural landscapes — a 900 km network of canals, lakes, rivers, and lagoons running parallel to the Arabian Sea coast. Here&apos;s your complete guide to experiencing them.
            </p>

            {[
              {
                title: "Types of Alleppey Backwater Tours",
                content: (
                  <div className="space-y-4">
                    {[
                      { name: "🚤 Private Speed Boat Tour", desc: "The fastest, most flexible way to see the backwaters. Choose from 10-min, 30-min, or 1-hour packages. Your own boat, your own pilot — no sharing. Covers Vembanad Lake, village canals, and the boat race track. Best for active travelers who want to see a lot quickly." },
                      { name: "🛥️ Houseboat Stay", desc: "A traditional wooden kettuvallam converted into a floating hotel. Move slowly through the main backwater channels, eat Kerala cuisine cooked on board, sleep on the water. Half-day, full-day, and overnight options. Best for couples and those who want a luxurious, relaxed experience." },
                      { name: "🚣 Village Canoe / Kayak Tour", desc: "Small, silent, and intimate. Paddle through narrow village canals that motor boats cannot access. See daily village life up close. Usually 1–3 hours with a local guide. Best for those who want a deeply immersive, slow experience." },
                      { name: "🏡 Village Walk + Canal Tour", desc: "Combines walking through a traditional Kerala village with a short boat ride through the canals. Usually arranged by local homestays and guesthouses. Best for cultural travelers." },
                    ].map((t) => (
                      <div key={t.name} className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                        <p className="font-bold text-gray-900 mb-1">{t.name}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{t.desc}</p>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                title: "What to Expect on a Speed Boat Tour",
                content: (
                  <div className="space-y-3 text-sm text-gray-600">
                    <p>Here&apos;s exactly what happens when you book a speed boat ride with us:</p>
                    {[
                      ["You message us on WhatsApp", "Tell us your preferred date, time, number of passengers, and package. We reply quickly with confirmation."],
                      ["We send you the Google Maps pin", "Our departure point is at the Finishing Point (Alleppey Boat Jetty). We share the exact location when you confirm."],
                      ["You arrive and meet your pilot", "Your licensed, local pilot greets you, provides life jackets for everyone, and gives a quick safety briefing."],
                      ["You board and set off", "The boat cruises through Alleppey&apos;s channels, out onto Vembanad Lake, past the boat race track, and through village canals (depending on your package)."],
                      ["The pilot narrates as you go", "Your pilot knows every landmark, bird species, and local story. This isn&apos;t just a ride — it&apos;s a guided experience."],
                      ["You return to the jetty", "At the end of your package duration, you return to the Finishing Point. Payment is made on arrival (cash or UPI)."],
                    ].map(([step, desc]) => (
                      <div key={step} className="flex gap-3">
                        <span className="text-emerald-500 flex-shrink-0 font-bold mt-0.5">→</span>
                        <div>
                          <p className="font-semibold text-gray-800">{step}</p>
                          <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: desc }} />
                        </div>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                title: "What's Included (and What's Not)",
                content: (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
                      <p className="font-bold text-emerald-800 mb-3">✅ Included</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {["Private boat (just your group)", "Certified, licensed pilot", "Life jackets for all passengers", "Guided narration throughout", "The full route for your package"].map((i) => (
                          <li key={i} className="flex items-start gap-2"><span className="text-emerald-500">✓</span><span>{i}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                      <p className="font-bold text-gray-700 mb-3">❌ Not Included</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        {["Food or beverages on board", "Hotel pickup/drop", "Entry fees to any attractions", "Photography services (you shoot your own photos)"].map((i) => (
                          <li key={i} className="flex items-start gap-2"><span className="text-gray-400">×</span><span>{i}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ),
              },
              {
                title: "What to Bring",
                content: (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      ["😎", "Sunglasses", "Essential — water reflects sunlight intensely"],
                      ["🧴", "Sunscreen", "Apply before boarding — wind strips it fast"],
                      ["👟", "Comfortable shoes", "Flat, non-slip — flip flops are fine"],
                      ["📱", "Your phone / camera", "You'll want it — the views are stunning"],
                      ["💧", "Water bottle", "Stay hydrated, especially in summer"],
                      ["🧥", "Light jacket", "For sunrise/sunset rides — it gets breezy at speed"],
                    ].map(([emoji, item, tip]) => (
                      <div key={item} className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                        <p className="text-2xl mb-1">{emoji}</p>
                        <p className="font-bold text-gray-900 text-sm">{item}</p>
                        <p className="text-xs text-gray-500 mt-1 leading-tight">{tip}</p>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                title: "How to Get to the Alleppey Boat Jetty (Finishing Point)",
                content: (
                  <div className="space-y-3 text-sm text-gray-600">
                    {[
                      ["By Auto-Rickshaw", "From anywhere in Alleppey town — just ask for the \"Finishing Point\" or \"Boat Jetty\". 5–15 minutes from most hotels."],
                      ["By Taxi / Cab", "Book via OLA or Uber — search for \"Finishing Point, Alappuzha\". Easy and affordable."],
                      ["From Alleppey Bus Stand", "About 1.5 km. Easy walk, or a short auto ride."],
                      ["From Alleppey Railway Station", "About 3 km. Auto-rickshaw is the easiest option."],
                    ].map(([mode, desc]) => (
                      <div key={mode} className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <span className="font-bold text-gray-900 flex-shrink-0 w-40">{mode}</span>
                        <span className="text-gray-600">{desc}</span>
                      </div>
                    ))}
                  </div>
                ),
              },
            ].map((section) => (
              <div key={section.title} className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">{section.title}</h2>
                {section.content}
              </div>
            ))}

            <BookingCTA />

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Related Articles</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/blog/things-to-do-in-alleppey" className="flex-1 p-4 rounded-xl border border-gray-200 hover:border-emerald-300 transition-colors text-sm font-medium text-gray-700 hover:text-emerald-700">10 Best Things to Do in Alleppey →</Link>
                <Link href="/blog/speed-boat-vs-houseboat-alleppey" className="flex-1 p-4 rounded-xl border border-gray-200 hover:border-emerald-300 transition-colors text-sm font-medium text-gray-700 hover:text-emerald-700">Speed Boat vs Houseboat →</Link>
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
