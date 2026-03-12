import type { Metadata } from "next";
import { Outfit, Ovo, Geist } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import PageTransitionLoader from "@/components/Loading/PageTransitionLoader";
import SonnerProvider from "@/components/providers/SonnerProvider";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const outFit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portfolio - Dineth Sachintha",
  description: "",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {

  return (

    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)} suppressHydrationWarning>

      <body
        suppressHydrationWarning
        className={`${outFit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden 
        dark:bg-gray-900 dark:text-white`}
      >

        <PageTransitionLoader>
          <header>

            <NavBar />

          </header>

          <main>

            {children}

          </main>

          <footer>

            <Footer />

          </footer>
        </PageTransitionLoader>

        <SonnerProvider />

      </body>

    </html>

  );

}
