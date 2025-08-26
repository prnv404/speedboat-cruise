import Image from "next/image";
import Navbar from "@/components/Navbar";
import BackgroundCarousel from "@/components/BackgroundCarousel";
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

  const heroImages = allImages;
  const galleryImages = allImages;
  return (
    <main className="relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <BackgroundCarousel images={heroImages} />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Explore the Alleppey's backwater with our speed boat cruise
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl">
              Experience premium green tourism in Alappuzha&apos;s serene backwaters. Fast, safe, and unforgettable.
            </p>
            <p className="text-emerald-300/90 italic text-sm md:text-base">
              ɴᴏ ʙɪɢ ᴅᴇᴀʟ ɪᴛꜱ ᴊᴜꜱᴛ ᴀʟʟᴇᴩᴩᴇʏ — ᴊᴜꜱᴛ ride ᴡɪᴛʜ ᴜꜱ
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#contact" className="primary-button">Book Now</a>
              <a href="#packages" className="secondary-button">View Packages</a>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm tracking-wider uppercase font-medium">
              Our Packages
            </span>
            <h2 className="section-title mt-2">Choose Your Backwater Ride</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Curated experiences designed for comfort, safety and scenic delight
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "1 Hour Alleppey Village Tour",
                badge: "Signature",
                route:
                  "Starts from Alleppey (2km from town) → Boat race track → Village canals → Kayinakary terminal (photo point) → Coconut groves → Vembanad lake → Backwater beauty spots",
                distance: "Total distance: 30 km",
              },
              {
                title: "30 Minutes Village Tour",
                badge: "Popular",
                route:
                  "Starts from Alleppey → Boat race track → Village canal → Vembanad lake → Punnamada lake",
                distance: "Total distance: 15 km",
              },
              {
                title: "10 Minutes Fun Ride",
                badge: "Quick Ride",
                route: "Punnamada lake — 7 km fun ride",
                distance: "Quick local experience",
              },
            ].map((pkg, i) => (
              <div key={i} className="relative group rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/15 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/20 via-white/10 to-white/5">
                  <div className="rounded-2xl bg-black/40 backdrop-blur-md p-6 h-full">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="inline-flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">
                            {pkg.badge}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-white leading-snug">{pkg.title}</h3>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed mb-5">
                      {pkg.route}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <p className="text-white/70 inline-flex items-center gap-2">
                        <span>🧭</span> {pkg.distance}
                      </p>
                      <a href="#contact" className="secondary-button">Book →</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Band */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="card">
              <p className="text-sm text-white/70">Average Speed</p>
              <p className="text-2xl font-bold text-emerald-400">60 km/h</p>
              <p className="text-xs text-white/60">(35 knots)</p>
            </div>
            <div className="card">
              <p className="text-sm text-white/70">Maximum Capacity</p>
              <p className="text-2xl font-bold text-emerald-400">7 people</p>
            </div>
            <div className="card">
              <p className="text-sm text-white/70">Safety First</p>
              <p className="text-sm text-white/80">Experienced driver & life jackets provided</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm tracking-wider uppercase font-medium">
              About Us
            </span>
            <h2 className="section-title mt-2">Experience Luxury on Water</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover the perfect blend of speed, comfort, and eco-friendly
              adventure in the serene backwaters of Alappuzha
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌿",
                title: "Eco-Friendly",
                description:
                  "Our modern speedboats are designed with the environment in mind, ensuring minimal impact on the delicate backwater ecosystem.",
              },
              {
                icon: "⭐",
                title: "Premium Service",
                description:
                  "Experience unmatched luxury with our professional crew, customized routes, and attention to every detail.",
              },
              {
                icon: "🎯",
                title: "Expert Guides",
                description:
                  "Our experienced local guides share rich insights about the culture, history, and wildlife of the backwaters.",
              },
            ].map((item, index) => (
              <div key={index} className="card">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm tracking-wider uppercase font-medium">
              Our Gallery
            </span>
            <h2 className="section-title mt-2">Moments on the Water</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Glimpses of the extraordinary experiences that await you
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="group relative aspect-video overflow-hidden rounded-xl"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <button className="secondary-button">View Image</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 section-gradient">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center text-white">
            <span className="text-emerald-400 text-sm tracking-wider uppercase font-medium">
              Ready to Begin?
            </span>
            <h2 className="section-title mt-2">Start Your Premium Experience</h2>
            <p className="text-xl mb-8 text-white/80">
              Book your exclusive backwater adventure today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919947753154"
                className="primary-button inline-flex items-center justify-center gap-2"
              >
                <span>📞</span> 9947753154
              </a>
              <a
                href="tel:+919496736753"
                className="secondary-button inline-flex items-center justify-center gap-2"
              >
                <span>📞</span> 9496736753
              </a>
              <a
                href="https://wa.me/919947753154"
                className="secondary-button inline-flex items-center justify-center gap-2"
              >
                <span>💬</span> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-gradient text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="md:w-1/3">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">⛵</span>
                <div>
                  <h3 className="text-xl font-bold">
                    Speed Boat Cruise Alleppey
                  </h3>
                  <p className="text-xs text-white/80 tracking-wider">
                    PREMIUM BACKWATER TOURS
                  </p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                Experience the magic of Kerala&apos;s backwaters with our luxury
                speedboat tours. Creating unforgettable memories, one journey at
                a time.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:w-2/3">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-emerald-400">
                  Contact Us
                </h3>
                <div className="space-y-2 text-white/70">
                  <p>Alleppey, Kerala</p>
                  <p>India</p>
                  <p className="flex items-center gap-2">
                    <span>📞</span> +91 9947753154 / +91 9496736753
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📧</span> abhijithabcd74@gmail.com
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-emerald-400">
                  Quick Links
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "About",
                    "Packages",
                    "Gallery",
                    "Contact",
                    "Book Now",
                    "Privacy Policy",
                  ].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50">
            <p> 2025 Speed Boat Cruise Alleppey. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
