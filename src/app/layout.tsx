import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Speed Boat Cruise Alleppey | Luxury Backwater Tours",
  description:
    "Experience the thrill of Alappuzha's backwaters with our premium speedboat tours. Discover scenic routes and create unforgettable memories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          defer
          data-project="67c40fd097d306c713a0bd02"
          src="https://cdn.jsdelivr.net/gh/litlyx/litlyx-js/browser/litlyx.js"
        ></script>
      </head>
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  );
}
