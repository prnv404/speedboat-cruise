import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "10 Best Things to Do in Alleppey (2026) | Speed Boat Cruise Alleppey",
  description:
    "Planning a trip to Alleppey? Discover the 10 best things to do in Alappuzha — from speed boat rides and houseboat stays to temple visits and backwater kayaking. Local guide for 2026.",
  alternates: { canonical: "https://www.speedboatcruisealleppey.com/blog/things-to-do-in-alleppey" },
  openGraph: {
    title: "10 Best Things to Do in Alleppey (2026)",
    description: "Local guide to the best experiences in Alappuzha — from speed boat rides to houseboat stays.",
    url: "https://www.speedboatcruisealleppey.com/blog/things-to-do-in-alleppey",
    images: [{ url: "https://www.speedboatcruisealleppey.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

const BookingCTA = () => (
  <div className="my-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center">
    <p className="text-sm text-emerald-700 font-semibold uppercase tracking-widest mb-2">Ready to Experience It?</p>
    <h3 className="text-xl font-bold text-gray-900 mb-3">Book a Private Speed Boat in Alleppey</h3>
    <p className="text-gray-600 text-sm mb-5">Rated 5.0 ★ on Google · 221+ reviews · Free 24h cancellation</p>
    <a
      href="https://wa.me/917012761588?text=Hi!%20I'd%20like%20to%20book%20a%20speed%20boat%20in%20Alleppey.%20Can%20you%20share%20availability%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-all hover:scale-105"
    >
      Book on WhatsApp →
    </a>
  </div>
);

export default function ThingsToDo() {
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
            <span className="inline-block text-xs font-bold uppercase tracking-wider bg-emerald-500 text-white px-3 py-1 rounded-full mb-4">Travel Guide</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              10 Best Things to Do in Alleppey (Alappuzha) in 2026
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Planning a trip to Alleppey? Here&apos;s the definitive local guide — from speed boat rides and houseboat stays to hidden temples and authentic Kerala cuisine.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-400">
              <span>September 2026</span>
              <span>·</span>
              <span>7 min read</span>
              <span>·</span>
              <span>By Speed Boat Cruise Alleppey</span>
            </div>
          </div>
        </div>
      </header>

      <article className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 shadow-md">
              <Image src="/og-image.jpg" alt="Speed boat ride in Alleppey — one of the best things to do in Kerala" fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover" priority />
            </div>

            <div className="prose prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-emerald-600 prose-strong:text-gray-900">

              <p className="text-xl text-gray-600 leading-relaxed font-medium border-l-4 border-emerald-500 pl-5 mb-8">
                Alleppey (officially Alappuzha) is often called the &quot;Venice of the East.&quot; And once you arrive and see the network of canals, lakes, and coconut-lined backwaters, you&apos;ll understand exactly why. But what should you actually <em>do</em> here? Here&apos;s our local-curated list.
              </p>

              {[
                {
                  num: 1,
                  title: "Take a Private Speed Boat Ride",
                  body: `If you want to experience the Alleppey backwaters at full speed — with the wind in your hair, water spraying around you, and Kerala's lush green scenery flying past — a private speed boat ride is unmissable. Unlike houseboats that move slowly, a speed boat at 60 km/h lets you cover more of Vembanad Lake, the village canals, and the boat race track in a single trip.\n\nWe offer 10-minute, 30-minute, and 1-hour packages — all private, with a certified local pilot and life jackets included. It's consistently rated as one of the top experiences in Alleppey.`,
                  highlight: true,
                },
                {
                  num: 2,
                  title: "Stay on a Houseboat (Kettuvallam)",
                  body: "Alleppey is famous for its traditional wooden houseboats — called kettuvallam — that were once used to transport rice along the canals. Today they've been converted into floating hotels, complete with bedrooms, a kitchen, and a sit-out deck. Book an overnight stay and fall asleep to the sound of water. There are hundreds to choose from at all price points.",
                },
                {
                  num: 3,
                  title: "Watch the Nehru Trophy Boat Race",
                  body: "Held on the second Saturday of August every year, the Nehru Trophy Boat Race is one of the most spectacular events in Kerala. Massive snake boats (chundan vallam) with over 100 rowers compete in formation on Punnamada Lake. Even outside the race season, you can see the boat race track from the water — a key stop on our speed boat tours.",
                },
                {
                  num: 4,
                  title: "Explore the Village Canals by Canoe",
                  body: "Hire a simple canoe or kayak and paddle through the narrow village canals that are too small for larger boats. These hidden waterways give you an intimate glimpse into daily Kerala village life — women washing clothes on the banks, fishermen casting nets, children playing by the water. It's quiet, slow, and deeply authentic.",
                },
                {
                  num: 5,
                  title: "Visit Krishnapuram Palace",
                  body: "About 47 km from Alleppey town, Krishnapuram Palace is a beautifully preserved example of Kerala's traditional architecture. Built in the 18th century, it houses a gallery of murals, sculptures, and artifacts. The palace garden and grounds are peaceful and worth the short drive.",
                },
                {
                  num: 6,
                  title: "Try Kerala Sadya — the Banana Leaf Feast",
                  body: "A sadya is a traditional Kerala meal served on a banana leaf — a spread of 20+ dishes including rice, sambar, avial, thoran, payasam, and more. In Alleppey, you'll find authentic sadya at local restaurants, especially during festival seasons. Eat with your hands — it's the local way.",
                },
                {
                  num: 7,
                  title: "Sunrise or Sunset on the Backwaters",
                  body: "The backwaters are magical at golden hour. The water turns copper and gold, birds nest in the reeds, and the coconut palms are silhouetted against the sky. Catch it from the deck of a houseboat, a canoe, or — best of all — from the bow of a speed boat at 6:30 AM when the water is perfectly calm and the world is just waking up.",
                },
                {
                  num: 8,
                  title: "Coir Weaving and Craft Villages",
                  body: "Alleppey district is the center of Kerala's coir (coconut fiber) industry. Visit a coir weaving village to watch artisans at work creating mats, ropes, and baskets by hand. Many villages welcome visitors, and some offer short weaving experiences. It's a fascinating look at a centuries-old craft that's still thriving.",
                },
                {
                  num: 9,
                  title: "St. Mary's Forane Church, Champakulam",
                  body: "One of the oldest churches in Kerala, the St. Mary's Forane Church in Champakulam dates back to AD 427. It's set beautifully by the backwaters and hosts the famous Champakulam Boat Race each year. The church itself is architecturally stunning — a mix of Kerala and Portuguese influences.",
                },
                {
                  num: 10,
                  title: "Shop at the Alleppey Market",
                  body: "The Alleppey market is a lively, colorful hub of fresh produce, spices, seafood, and handicrafts. Walk through the lanes early in the morning when the fish market is at its most animated. You'll find fresh coconuts, jackfruit, local spices, and handmade goods to take home.",
                },
              ].map((item) => (
                <div key={item.num} className={`mb-8 p-6 rounded-2xl border ${item.highlight ? "bg-emerald-50 border-emerald-200" : "bg-gray-50 border-gray-100"}`}>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black ${item.highlight ? "bg-emerald-500 text-white" : "bg-gray-200 text-gray-700"}`}>
                      {item.num}
                    </span>
                    {item.title}
                  </h2>
                  <div className="ml-11">
                    {item.body.split("\n\n").map((para, i) => (
                      <p key={i} className="text-gray-600 text-sm leading-relaxed mb-3 last:mb-0">{para}</p>
                    ))}
                  </div>
                </div>
              ))}

              <BookingCTA />

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>
              {[
                { q: "How many days do I need in Alleppey?", a: "Most visitors spend 2–3 days in Alleppey. One day for a backwater experience (speed boat + houseboat), one day to explore the town and surroundings, and one day for day trips to nearby spots like Kuttanad or Kumarakom." },
                { q: "Is Alleppey worth visiting?", a: "Absolutely. Alleppey is one of India's most unique destinations — there is literally nowhere else in the country quite like it. The combination of the backwaters, village life, Kerala cuisine, and the boat culture make it a deeply memorable place." },
                { q: "What is the best way to see the Alleppey backwaters?", a: "For speed and coverage, a private speed boat is the best. For a slow, immersive experience, a houseboat overnight stay is unbeatable. Many visitors do both — a morning speed boat ride and an evening/night on a houseboat." },
              ].map((faq) => (
                <div key={faq.q} className="mb-6 p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}

            </div>

            {/* Related articles */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Related Articles</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/blog/speed-boat-vs-houseboat-alleppey" className="flex-1 p-4 rounded-xl border border-gray-200 hover:border-emerald-300 transition-colors text-sm font-medium text-gray-700 hover:text-emerald-700">
                  Speed Boat vs Houseboat — Which is Better? →
                </Link>
                <Link href="/blog/best-time-to-visit-alleppey-backwaters" className="flex-1 p-4 rounded-xl border border-gray-200 hover:border-emerald-300 transition-colors text-sm font-medium text-gray-700 hover:text-emerald-700">
                  Best Time to Visit Alleppey Backwaters →
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
