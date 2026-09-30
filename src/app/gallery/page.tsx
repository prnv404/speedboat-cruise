import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Gallery — Speed Boat Photos in Alleppey | Speed Boat Cruise Alleppey",
  description:
    "See photos and videos from our private speed boat rides in Alleppey. Real customer moments on the Kerala backwaters, Vembanad Lake, and village canals. Rated 5★ on Google.",
  alternates: {
    canonical: "https://www.speedboatcruisealleppey.com/gallery",
  },
  openGraph: {
    title: "Speed Boat Photos in Alleppey — Gallery",
    description: "Real photos from private speed boat rides through Alleppey's Kerala backwaters. See why we're rated #1.",
    url: "https://www.speedboatcruisealleppey.com/gallery",
    images: [{ url: "https://www.speedboatcruisealleppey.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

const imageAlts = [
  "Happy group on private speed boat ride in Alleppey backwaters",
  "Speed boat cruising through Kerala village canals in Alleppey",
  "Speedboat on Vembanad Lake during sunset, Alleppey",
  "Family enjoying private speed boat tour in Alleppey with life jackets",
  "Speed boat wake trail through Alleppey backwater channels",
  "Aerial view of speed boat on Kerala backwaters near Alappuzha",
];

export default function GalleryPage() {
  const publicDir = path.join(process.cwd(), "public");
  const allowedExt = new Set([".jpg", ".jpeg", ".png", ".webp"]);
  const excludedFiles = new Set(["logo.png", "favicon.png", "og-image.jpg"]);

  let images: string[] = [];
  try {
    const rootFiles = fs
      .readdirSync(publicDir)
      .filter((f) => allowedExt.has(path.extname(f).toLowerCase()) && !excludedFiles.has(f))
      .map((f) => ({ src: `/${f}`, dir: "root" }));

    const fourCardDir = path.join(publicDir, "4card");
    const cardFiles = fs.existsSync(fourCardDir)
      ? fs
          .readdirSync(fourCardDir)
          .filter((f) => allowedExt.has(path.extname(f).toLowerCase()))
          .map((f) => ({ src: `/4card/${f}`, dir: "4card" }))
      : [];

    images = [...rootFiles, ...cardFiles].map((f) => f.src);
  } catch {
    images = [];
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 text-white pt-20 pb-16 sm:pt-28 sm:pb-20 relative overflow-hidden">
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
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest block mb-3">Visual Journey</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Speed Boat <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Gallery</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Real moments from real rides — speed boat photos from Alleppey&apos;s Kerala backwaters.
          </p>
        </div>
      </header>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-16">
            {images.map((src, i) => (
              <div
                key={src}
                className={`group relative overflow-hidden rounded-2xl bg-gray-100 ${
                  i === 0 ? "sm:col-span-2 aspect-[16/9]" : "aspect-square"
                }`}
              >
                <Image
                  src={src}
                  alt={imageAlts[i % imageAlts.length]}
                  fill
                  loading={i < 3 ? "eager" : "lazy"}
                  sizes={i === 0 ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {imageAlts[i % imageAlts.length]}
                </div>
              </div>
            ))}
          </div>

          {/* Share prompt */}
          <div className="max-w-2xl mx-auto text-center bg-gray-50 rounded-2xl border border-gray-200 p-8 sm:p-10">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Rode with us? Share your photos!</h2>
            <p className="text-gray-600 text-sm mb-6">Send us your best shots on WhatsApp — we love featuring our guests&apos; moments.</p>
            <a
              href="https://wa.me/917012761588?text=Hi!%20I%20rode%20with%20you%20and%20wanted%20to%20share%20some%20photos%20from%20the%20trip!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-all hover:scale-105"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Share Photos on WhatsApp
            </a>
          </div>

          {/* Book CTA */}
          <div className="max-w-2xl mx-auto text-center mt-10">
            <p className="text-gray-500 text-sm mb-4">Ready to create your own memories?</p>
            <a
              href="https://wa.me/917012761588?text=Hi!%20I%20saw%20your%20gallery%20and%20would%20love%20to%20book%20a%20speed%20boat%20in%20Alleppey!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider transition-all hover:scale-105 shadow-lg shadow-emerald-500/20"
            >
              Book Your Ride — Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-500">
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-emerald-600 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link>
          <Link href="/blog" className="hover:text-emerald-600 transition-colors">Blog</Link>
        </div>
        <p className="mt-4">© {new Date().getFullYear()} Speed Boat Cruise Alleppey. All rights reserved.</p>
      </footer>
    </main>
  );
}
