import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Alleppey Travel Blog | Speed Boat Cruise Alleppey",
  description:
    "Tips, guides and travel advice for visiting Alleppey, Kerala. Read about the best things to do, when to visit, houseboat vs speed boat, and how to explore the backwaters.",
  alternates: {
    canonical: "https://www.speedboatcruisealleppey.com/blog",
  },
  openGraph: {
    title: "Alleppey Travel Blog — Tips & Guides",
    description: "Expert travel guides for Alleppey, Kerala — written by locals who live and work on the backwaters every day.",
    url: "https://www.speedboatcruisealleppey.com/blog",
    images: [{ url: "https://www.speedboatcruisealleppey.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

export const posts = [
  {
    slug: "things-to-do-in-alleppey",
    title: "10 Best Things to Do in Alleppey (Alappuzha) in 2026",
    excerpt:
      "From speed boat rides and houseboat stays to temple visits and coir weaving — here's the definitive local guide to the best experiences in Alleppey, Kerala.",
    date: "September 2026",
    readTime: "7 min read",
    category: "Travel Guide",
    image: "/og-image.jpg",
    imageAlt: "Speed boat on Alleppey backwaters — things to do in Alleppey",
  },
  {
    slug: "speed-boat-vs-houseboat-alleppey",
    title: "Speed Boat vs Houseboat in Alleppey — Which is Better for You?",
    excerpt:
      "Both are iconic Kerala experiences — but they're completely different. Here's an honest comparison to help you choose between a speed boat tour and a houseboat stay in Alleppey.",
    date: "September 2026",
    readTime: "5 min read",
    category: "Comparison",
    image: "/og-image.jpg",
    imageAlt: "Speed boat racing across Vembanad Lake in Alleppey, Kerala",
  },
  {
    slug: "best-time-to-visit-alleppey-backwaters",
    title: "Best Time to Visit Alleppey Backwaters — Month-by-Month Guide",
    excerpt:
      "When should you visit Alleppey for the best backwater experience? A local month-by-month guide covering weather, crowds, festivals, and the magical monsoon season.",
    date: "September 2026",
    readTime: "6 min read",
    category: "Planning",
    image: "/og-image.jpg",
    imageAlt: "Alleppey backwaters during golden hour — best time to visit",
  },
  {
    slug: "alleppey-backwater-tour-guide",
    title: "Complete Guide to Alleppey Backwater Tours — Prices, Tips & What to Expect",
    excerpt:
      "Everything you need to know before booking a backwater tour in Alleppey — types of tours, average prices, what's included, how to book, and insider tips from locals.",
    date: "September 2026",
    readTime: "9 min read",
    category: "Complete Guide",
    image: "/og-image.jpg",
    imageAlt: "Alleppey backwater tour guide — speed boat on Kerala canals",
  },
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 text-white pt-20 pb-16 sm:pt-28 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-3">Local Knowledge</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Alleppey <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Travel Blog</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Tips, guides, and insider advice from people who live on the backwaters every day.
          </p>
        </div>
      </header>

      {/* Article Grid */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading={i < 2 ? "eager" : "lazy"}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-bold uppercase tracking-wider bg-emerald-500 text-white px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-emerald-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-1 text-emerald-600 text-sm font-semibold">
                    Read article
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-500">
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-emerald-600 transition-colors">About</Link>
          <Link href="/gallery" className="hover:text-emerald-600 transition-colors">Gallery</Link>
          <Link href="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link>
        </div>
        <p className="mt-4">© {new Date().getFullYear()} Speed Boat Cruise Alleppey. All rights reserved.</p>
      </footer>
    </main>
  );
}
