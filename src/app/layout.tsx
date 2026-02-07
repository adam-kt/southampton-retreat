import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://southampton-retreat.vercel.app"
  ),
  title: "Southampton Summer Rental | Premium 3BR Condo in the Hamptons",
  description:
    "Luxury 3-bedroom summer rental in Southampton, NY. 3 bedrooms, 2.5 baths, private patio, 2 parking spots. Minutes from Coopers Beach, Shinnecock Hills, and Southampton Village. Community pools, tennis, pickleball & more.",
  keywords: [
    "Southampton rental",
    "Hamptons summer rental",
    "Southampton NY condo",
    "Hamptons vacation rental",
    "Shinnecock Hills",
    "US Open 2026",
    "Coopers Beach",
    "Southampton Village",
    "short term rental Hamptons",
  ],
  authors: [{ name: "Southampton Retreat" }],
  openGraph: {
    title: "Southampton Summer Rental | Premium 3BR Hamptons Condo",
    description:
      "Luxury 3-bedroom summer rental in Southampton, NY. King bed, queen bed, 2 twins. Private patio, community pools, near Shinnecock Hills & Coopers Beach.",
    type: "website",
    locale: "en_US",
    siteName: "Southampton Retreat",
    images: [
      {
        url: "/images/IMG_1058.jpg",
        width: 1200,
        height: 630,
        alt: "Southampton Summer Rental - Charming entrance with hydrangeas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Southampton Summer Rental | Premium 3BR Hamptons Condo",
    description:
      "Luxury 3-bedroom summer rental in Southampton, NY. Near Shinnecock Hills, Coopers Beach & Southampton Village.",
    images: ["/images/IMG_1058.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
