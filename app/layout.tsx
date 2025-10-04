import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer";

const outFit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio - Dineth Sachintha",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {

  return (

    <html lang="en" className="scroll-smooth">

      <body
        className={`${outFit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden 
        dark:bg-gray-900 dark:text-white`}
      >

        <header>

          <NavBar />

        </header>

        <main>

          {children}

        </main>

        <footer>

          <Footer />

        </footer>

      </body>

    </html>

  );

}
