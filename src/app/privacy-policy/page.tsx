import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy | Speed Boat Cruise Alleppey",
  description:
    "Privacy Policy for Speed Boat Cruise Alleppey. Learn how we handle your information when you contact us to book a private speed boat ride in Alleppey, Kerala.",
  alternates: {
    canonical: "https://www.speedboatcruisealleppey.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const lastUpdated = "30 September 2026";
const businessName = "Speed Boat Cruise Alleppey";
const email = "abhijithabcd74@gmail.com";
const siteUrl = "https://www.speedboatcruisealleppey.com";

export default function PrivacyPolicyPage() {
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
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">{businessName}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Policy</span>
          </h1>
          <p className="text-gray-400 text-sm">Last updated: {lastUpdated}</p>
        </div>
      </header>

      {/* Content */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto prose prose-gray prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline">

            <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-emerald-500 pl-5 mb-10">
              At <strong>{businessName}</strong>, your privacy matters to us. This policy explains what information we collect, how we use it, and your rights. We keep it simple because we run a simple operation — we give people amazing speed boat rides in Alleppey.
            </p>

            <div className="space-y-10">

              {/* Section 1 */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">1</span>
                  What Information We Collect
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  We collect only the information you voluntarily provide to us when you make a booking inquiry or contact us:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    <span><strong>Your name</strong> — when you introduce yourself in a WhatsApp or call conversation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    <span><strong>Your phone number / WhatsApp</strong> — when you contact us to make a booking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    <span><strong>Booking details</strong> — preferred date, time, number of passengers, and package selected</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm mt-3">
                  We do <strong>not</strong> collect payment information on this website. Payments, if any, are handled in person at the point of departure.
                </p>
              </div>

              {/* Section 2 */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">2</span>
                  How We Use Your Information
                </h2>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    <span>To confirm and manage your speed boat booking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    <span>To send you your departure meeting point and trip details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    <span>To communicate any weather-related changes or cancellations</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm mt-3">
                  We will never sell, rent, or share your contact information with third parties for marketing purposes.
                </p>
              </div>

              {/* Section 3 */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">3</span>
                  Website Analytics
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our website uses <strong>Litlyx</strong>, a privacy-friendly analytics tool, to understand how visitors find and use our site. Litlyx collects anonymous data such as the number of visitors and which pages are viewed. It does <strong>not</strong> use cookies or track individual users. No personally identifiable information is collected through analytics.
                </p>
              </div>

              {/* Section 4 */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">4</span>
                  Third-Party Services
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  This website embeds content from the following third parties, each with their own privacy policies:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">→</span>
                    <span><strong>YouTube</strong> — hero background videos are embedded from YouTube. YouTube may set cookies when you view these videos. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">→</span>
                    <span><strong>Google Maps</strong> — our contact page embeds a Google Map. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">→</span>
                    <span><strong>WhatsApp</strong> — when you click our WhatsApp links, you are directed to WhatsApp's platform, which has its own privacy policy.</span>
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">5</span>
                  Data Retention & Your Rights
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  We retain your contact information only as long as needed to manage your booking. After your trip, your details are not kept in any database.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  You have the right to request deletion of any personal information you have shared with us. To do so, contact us at <a href={`mailto:${email}`}>{email}</a>.
                </p>
              </div>

              {/* Section 6 */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center font-bold flex-shrink-0">6</span>
                  Contact Us About Privacy
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  If you have any questions about this Privacy Policy or how we handle your data, please contact us:
                </p>
                <div className="mt-3 space-y-1 text-sm text-gray-700">
                  <p><strong>{businessName}</strong></p>
                  <p>Finishing Point, Alappuzha, Kerala 688012, India</p>
                  <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
                  <p>Phone: <a href="tel:+917012761588">+91 70127 61588</a></p>
                  <p>Website: <a href={siteUrl}>{siteUrl}</a></p>
                </div>
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
