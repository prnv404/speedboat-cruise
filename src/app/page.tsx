import Image from "next/image";
import Navbar from "@/components/Navbar";
// import { features } from "process";

export default function Home() {

  return (
    <main className="relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/IMG20241001093324.jpg"
            alt="Punnamada Backwaters"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Luxury Backwater Adventures
            </h1>
            <p className="text-xl text-white/90">
              Experience the serenity of Alappuzha&apos;s pristine waters in
              unmatched comfort and style
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#contact" className="primary-button">
                Start Your Journey
              </a>
              <a href="#gallery" className="secondary-button">
                Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm tracking-wider uppercase font-medium">
              Our Services
            </span>
            <h2 className="section-title mt-2">Explore Our Adventures</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover the diverse ways to experience Alleppey&apos;s enchanting
              backwaters
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "⚡",
                title: "Premium Speed Boat Tours",
                description:
                  "Experience the thrill of high-speed backwater adventures with our premium speedboat services. Featuring flexible timings for sunrise and sunset rides.",
                packages: [
                  "1 hour 30 mnt tour Alleppey to pathiramanal island",
                  "30 Minutes village tour",
                  "10 minutes local ride",
                ],
                features: [
                  " Daily sunrise, sunset and flexible time Rides",

                  " Every package have a expert and experienced driver along with you.",

                  " Rides of 10 minutes or less will be charged per person.",

                  "You can rent a speedboat for a full day or as long as you like",

                  "Average Speed 60 km/h (35 knots)",

                  " Speed Boat Maximum capacity 7 people ",

                  "We are all about the fun and the speed but safety is our number one priority",
                ],
              },
              {
                icon: "🏝️",
                title: "Pathiramanal Island",
                description:
                  "Pathiramanal Island is a tranquil paradise on Vembanad Lake, perfect for nature walks, birdwatching, and scenic backwater views.",
                features: [
                  "Lush greenery and rich birdlife, including rare species like darters and Indian shags",
                  "Peaceful nature walks and scenic views",
                  "Refreshing ambiance ideal for nature lovers and explorers",
                ],
                packages: [
                  "20 km boat journey from Alleppey to Pathiramanal Island",
                  "Approx. 30 minutes travel time one way",
                  "30 minutes to explore the island's beauty",
                  "Total tour duration: 1 hour 30 minutes",
                ],
              },
              {
                icon: "🚣",
                title: "Shikara Boating",
                description:
                  "Traditional boat rides through narrow canals and village life.",
                duration: "2-3 Hours",
                highlights:
                  "Village Life • Peaceful Journey • Local Experience",
              },
              {
                icon: "🛶",
                title: "Kayaking",
                description:
                  "Get up close with nature in our eco-friendly kayaks.",
                duration: "2-3 Hours",
                highlights: "Nature Trails • Guided Tours • Small Groups",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`card relative ${
                  index === 0
                    ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-emerald-900/50 to-black border border-emerald-800/30 hover:border-emerald-600/50"
                    : "hover:bg-emerald-950/50"
                }`}
              >
                {index === 0 && (
                  <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs px-3 py-1 rounded-bl-lg font-medium">
                    PREMIUM SERVICE
                  </div>
                )}
                <span
                  className={`text-4xl mb-4 block ${
                    index === 0 ? "animate-pulse" : ""
                  }`}
                >
                  {service.icon}
                </span>
                <h3
                  className={`${
                    index === 0 ? "text-2xl text-emerald-400" : "text-xl"
                  } font-semibold mb-2`}
                >
                  {service.title}
                </h3>
                <p className="text-white/70 mb-4">{service.description}</p>
                {index === 0 || index === 1 ? (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-black/30 p-4 rounded-lg">
                        <h4 className="text-emerald-400 text-sm font-medium mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                          Popular Tours
                        </h4>
                        <ul className="space-y-3">
                          {service.packages!.map((pkg, i) => (
                            <li
                              key={i}
                              className="text-sm text-white/80 flex items-center gap-2"
                            >
                              <span>🚤</span>
                              <span>{pkg}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-black/30 p-4 rounded-lg">
                        <h4 className="text-emerald-400 text-sm font-medium mb-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                          Features
                        </h4>
                        <ul className="space-y-3">
                          {service.features!.map((feature, i) => (
                            <li
                              key={i}
                              className="text-sm text-white/80 flex items-center gap-2"
                            >
                              <span>📌</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="bg-emerald-900/20 rounded-lg p-3">
                      <p className="text-sm text-emerald-300/90 italic flex items-center gap-2">
                        <span>🌅</span>
                        Daily sunrise, sunset and flexible time rides available
                      </p>
                    </div>
                    <div className="pt-2">
                      <a
                        href="#contact"
                        className="block w-full bg-emerald-600 hover:bg-emerald-500 text-white text-center py-3 px-6 rounded-lg transition-colors"
                      >
                        Book Your Adventure
                      </a>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm text-white/60 flex items-center gap-2">
                        <span>⏱️</span> {service.duration}
                      </p>
                      <p className="text-sm text-emerald-400 flex items-center gap-2 mt-2">
                        <span>✨</span> {service.highlights}
                      </p>
                    </div>
                    <div className="mt-4">
                      <a
                        href="#contact"
                        className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors inline-flex items-center gap-2"
                      >
                        Book Now <span>→</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
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
            {[
              "/IMG20240921073607.jpg",
              "/IMG20241102174131.jpg",
              "/IMG-20241008-WA0022.jpg",
              "/WhatsApp Image 2025-02-21 at 22.53.25_0ef67721.jpg",
              "/WhatsApp Image 2025-02-21 at 22.53.26_5048d469.jpg",
              "/WhatsApp Image 2025-02-21 at 22.53.27_7a9c8a3d.jpg",
              "/WhatsApp Image 2025-02-21 at 22.53.29_e0dbfc7b.jpg",
              "/WhatsApp Image 2025-02-21 at 22.53.30_c2e2d065.jpg",
            ].map((src, index) => (
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
            <h2 className="section-title mt-2">
              Start Your Premium Experience
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Book your exclusive backwater adventure today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919947753154"
                className="primary-button inline-flex items-center justify-center gap-2"
              >
                <span>📞</span> Call Now
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
                    <span>📞</span> +91 9947753154
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
                    "Experiences",
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
            <p> 2024 Speed Boat Cruise Alleppey. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
