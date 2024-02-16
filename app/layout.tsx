import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";

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
  src: "./Edosz.ttf",
  display: "swap",
  variable: "--font-edosz",
});

export const metadata: Metadata = {
  title: "Porridge and Pens",
  description:
    "We provide food and education for some of the poorest children in Ghana through our Brightlingsea School, Girl Power and Fruit Drop projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} ${myFont.variable}  antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
