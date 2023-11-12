import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Sebastian Ahlman",
  description: "Portfolio with projects made by me",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <meta
          property="og:image"
          content="https://hawaiidev-portfolio.vercel.app/image.png"
        />
        <meta
          property="twitter:image"
          content="https://hawaiidev-portfolio.vercel.app/image.png"
        ></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta
          property="twitter:title"
          content="Sebastian Ahlman | Portfolio | Knowledge"
        ></meta>
        <meta
          property="twitter:description"
          content="Portfolio made for Sebastian Ahlman by Sebastian Ahlman, find some of the projects I have worked on :D"
        ></meta>
        <meta property="og:title" content="Sebastian Ahlman"></meta>
        <meta
          property="og:description"
          content="Portfolio with projects made by me"
        />
        <meta
          property="og:url"
          content="https://hawaiidev-portfolio.vercel.app/image.png"
        />
      </head>
      <body className="dark " style={{ backgroundColor: "#020817" }}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
