import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Scubachannel Fuvahmulah | Scuba Diving Maldives",
    template: "%s | Scubachannel Fuvahmulah",
  },
  description:
    "Experience the ultimate tiger shark diving adventure in Fuvahmulah, Maldives. Professional PADI courses, expert guides, and unforgettable underwater journeys with Scubachannel.",
  keywords: [
    "Scuba Diving Fuvahmulah",
    "Tiger Shark Diving Maldives",
    "PADI Courses Maldives",
    "Fuvahmulah Diving Center",
    "Southern Channel Diving",
    "Dive Fuvahmulah",
  ],
  authors: [{ name: "Scubachannel Fuvahmulah" }],
  creator: "Scubachannel Fuvahmulah",
  publisher: "Southern Channel Pvt Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/logo.JPG",
    shortcut: "/logo.JPG",
    apple: "/logo.JPG",
  },
  // Open Graph (Facebook, WhatsApp, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.scubachannelfuvahmulah.com/",
    siteName: "Scubachannel Fuvahmulah",
    title: "Scubachannel Fuvahmulah | Tiger Shark Diving Maldives",
    description: "The premier diving destination for Tiger Sharks and underwater wonders in Fuvahmulah Island.",
    images: [
      {
        url: "https://www.scubachannelfuvahmulah.com/fvm-pic.jpg", // High quality image for link previews
        width: 1200,
        height: 630,
        alt: "Diving with Tiger Sharks in Fuvahmulah",
      },
    ],
  },
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Scubachannel Fuvahmulah | Diving Maldives",
    description: "Dive with Tiger Sharks in Fuvahmulah. Book your adventure today.",
    images: ["https://www.scubachannelfuvahmulah.com/fvm-pic.jpg"],
  },
  // Robots instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}