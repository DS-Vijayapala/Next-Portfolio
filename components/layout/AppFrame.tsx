"use client";

import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import PageTransitionLoader from "@/components/Loading/PageTransitionLoader";

export default function AppFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute =
    pathname.startsWith("/admin") || pathname === "/login" || pathname.startsWith("/dashboard");

  if (isAdminRoute) {
    return <main>{children}</main>;
  }

  return (
    <PageTransitionLoader>
      <header className="w-full border-b border-slate-800">
        <NavBar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </PageTransitionLoader>
  );
}
