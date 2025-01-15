import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Hero from "@/components/Hero";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <Header/>
        <Hero image="/bg_image.jpg" image2="/bg_image.jpg" title="lorem ipsum dolor" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure veritatis non porro tempora excepturi alias!"/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
