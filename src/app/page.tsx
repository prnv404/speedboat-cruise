import Image from "next/image";
import Navbar from "@/components/Navbar";

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
              Experience the serenity of Alappuzha&apos;s pristine waters in unmatched comfort and style
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#contact" className="primary-button">Start Your Journey</a>
              <a href="#gallery" className="secondary-button">Gallery</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm tracking-wider uppercase font-medium">Our Services</span>
            <h2 className="section-title mt-2">Explore Our Adventures</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover the diverse ways to experience Alleppey&apos;s enchanting backwaters
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "⚡",
                title: "Speed Boat Tours",
                description: "Experience the thrill of speed combined with scenic beauty. Perfect for quick tours and photography enthusiasts.",
                duration: "1-2 Hours",
                price: "Starting from ₹2000"
              },
              {
                icon: "🚣",
                title: "Shikara Boating",
                description: "Traditional boat rides offering a peaceful journey through narrow canals and village life.",
                duration: "2-3 Hours",
                price: "Starting from ₹1500"
              },
              {
                icon: "🏠",
                title: "House Boat Cruise",
                description: "Luxury floating homes with premium amenities. Ideal for overnight stays and complete backwater experience.",
                duration: "12-24 Hours",
                price: "Starting from ₹8000"
              },
              {
                icon: "🛶",
                title: "Kayaking",
                description: "Get up close with nature in our eco-friendly kayaks. Perfect for adventure seekers and nature lovers.",
                duration: "2-3 Hours",
                price: "Starting from ₹1000"
              }
            ].map((service, index) => (
              <div key={index} className="card group hover:bg-emerald-950/50 transition-colors">
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-white/70 mb-4">{service.description}</p>
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <p className="text-sm text-white/60 flex items-center gap-2">
                    <span>⏱️</span> {service.duration}
                  </p>
                  <p className="text-sm text-emerald-400 flex items-center gap-2">
                    <span>💰</span> {service.price}
                  </p>
                </div>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#contact" className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors inline-flex items-center gap-2">
                    Book Now <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-emerald-400 text-sm tracking-wider uppercase font-medium">About Us</span>
            <h2 className="section-title mt-2">Experience Luxury on Water</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover the perfect blend of speed, comfort, and eco-friendly adventure in the serene backwaters of Alappuzha
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌿",
                title: "Eco-Friendly",
                description: "Our modern speedboats are designed with the environment in mind, ensuring minimal impact on the delicate backwater ecosystem."
              },
              {
                icon: "⭐",
                title: "Premium Service",
                description: "Experience unmatched luxury with our professional crew, customized routes, and attention to every detail."
              },
              {
                icon: "🎯",
                title: "Expert Guides",
                description: "Our experienced local guides share rich insights about the culture, history, and wildlife of the backwaters."
              }
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
            <span className="text-emerald-400 text-sm tracking-wider uppercase font-medium">Our Gallery</span>
            <h2 className="section-title mt-2">Moments on the Water</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Glimpses of the extraordinary experiences that await you
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              '/IMG20240917105505.jpg',
              '/IMG20240921073607.jpg',
              '/IMG20241004122933.jpg',
              '/IMG20241102174131.jpg',
              '/IMG-20241008-WA0022.jpg',
              '/IMG-20241025-WA0008.jpg',
            ].map((src, index) => (
              <div key={index} className="group relative aspect-video overflow-hidden rounded-xl">
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
            <span className="text-emerald-400 text-sm tracking-wider uppercase font-medium">Ready to Begin?</span>
            <h2 className="section-title mt-2">Start Your Premium Experience</h2>
            <p className="text-xl mb-8 text-white/80">
              Book your exclusive backwater adventure today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919947753154" className="primary-button inline-flex items-center justify-center gap-2">
                <span>📞</span> Call Now
              </a>
              <a href="https://wa.me/919947753154" className="secondary-button inline-flex items-center justify-center gap-2">
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
                  <h3 className="text-xl font-bold">Speed Boat Cruise Alleppey</h3>
                  <p className="text-xs text-white/80 tracking-wider">PREMIUM BACKWATER TOURS</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                Experience the magic of Kerala&apos;s backwaters with our luxury speedboat tours. Creating unforgettable memories, one journey at a time.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:w-2/3">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-emerald-400">Contact Us</h3>
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
                <h3 className="text-lg font-semibold mb-4 text-emerald-400">Quick Links</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['About', 'Experiences', 'Gallery', 'Contact', 'Book Now', 'Privacy Policy'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
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
