"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-me", label: "About Me" },
  { href: "/all-projects", label: "Projects" },
  { href: "/contact-me", label: "Contact" },
];

function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <nav
      className={`sticky top-0 z-40 flex h-[60px] w-full items-center justify-between px-4 sm:px-8 lg:px-14 xl:px-24 transition-all duration-300 ${scrolled
          ? "border-b border-violet-500/20 bg-slate-950/85 shadow-lg shadow-black/25 supports-backdrop-filter:backdrop-blur-xl md:border-transparent md:bg-transparent md:shadow-none md:backdrop-blur-0"
          : "border-b border-violet-500/15 bg-slate-950/70 shadow-sm supports-backdrop-filter:backdrop-blur-xl md:border-transparent md:bg-transparent md:shadow-none md:backdrop-blur-0"
        }`}
    >
      <Link href="/" className="group inline-flex items-center gap-2">
        <Image
          src="/icon.png"
          alt="Logo"
          width={36}
          height={36}
          className="rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
        <span className="hidden text-sm font-semibold text-slate-200 sm:inline">
          Portfolio
        </span>
      </Link>

      <ul className="hidden items-center gap-7 text-sm md:flex">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`group relative font-medium transition-colors duration-300 ${isActive(item.href) ? "text-violet-400" : "text-slate-200 hover:text-violet-400"
                }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-300 ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              />
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2">
        <Link
          href="/contact-me"
          className="group hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:from-violet-700 hover:to-purple-700 hover:shadow-purple-500/30 md:inline-flex"
        >
          Contact
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              className="text-slate-200 hover:bg-violet-700/30 md:hidden"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[84%] max-w-sm border-violet-500/30 bg-gradient-to-b from-violet-950/95 via-slate-950/95 to-indigo-950/95 p-0 text-slate-100 supports-backdrop-filter:backdrop-blur-xl"
          >
            <SheetHeader className="border-b border-violet-500/20 p-4">
              <SheetTitle className="flex items-center gap-2 text-slate-100">
                <Image
                  src="/icon.png"
                  alt="Logo"
                  width={30}
                  height={30}
                  className="rounded-md"
                />
                Navigation
              </SheetTitle>
              <SheetDescription className="text-slate-400">
                Browse pages in the portfolio.
              </SheetDescription>
            </SheetHeader>

            <div className="space-y-2 p-4">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${isActive(item.href)
                        ? "border-violet-400/50 bg-violet-500/20 text-violet-200"
                        : "border-violet-500/20 bg-violet-950/30 text-slate-200 hover:border-violet-400/50 hover:bg-violet-500/15 hover:text-violet-200"
                      }`}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </div>

            <div className="mt-auto border-t border-violet-500/20 p-4">
              <SheetClose asChild>
                <Link
                  href="/contact-me"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:from-violet-700 hover:to-purple-700"
                >
                  Contact Me
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default NavBar;
