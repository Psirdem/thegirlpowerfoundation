import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import Providers from "./providers";

import "react-toastify/dist/ReactToastify.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-poppins",
});

const myFont = localFont({
  src: "./Galano.ttf",
  display: "swap",
  variable: "--font-galano",
});

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "The Girl Power Foundation Ghana",
  referrer: "origin-when-cross-origin",
  title: {
    default: "Home | The Girl Power Foundation Ghana",
    template: "%s | The Girl Power Foundation Ghana",
  },
  description:
    "We provide food and education for some of the poorest children in Ghana through our Brightlingsea School, Girl Power and Fruit Drop projects.",
  icons: "/app/favicon-96x96.png",
  metadataBase: new URL("https://gpfoundationgh.org"),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <Script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
        ></Script>
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} ${myFont.variable}  antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          closeOnClick
          theme="light"
        />
      </body>
    </html>
  );
}
