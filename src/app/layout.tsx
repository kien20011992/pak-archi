import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MQhome",
  description: "MQhome - Architectural Design",
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
        <div className="loading"></div>
        <Header />
        <div id="page" className="site md:ml-[210px]">
          <div className="site-inner">
            <div id="content" className="site-content ">
              {children}
            </div>
            <Footer />
          </div>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                setTimeout(function() {
                  document.querySelector('.loading').classList.add('hidden');
                }, 500);
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
