"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      {/* Logo */}
      <Image src="/spacebums.png" alt="Logo" width={100} height={100} className="w-28" />

      {/* Navigation */}
      <nav className="flex items-center space-x-2">
        <a
          href="#"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Features
        </a>
        <a
          href="#"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Pricing
        </a>
        <a
          href="#"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Docs
        </a>
      </nav>

      <div id="gooey-btn" className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
        <Link
          href={"/app"}
          className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10"
        >
          App
        </Link>
      </div>
    </header>
  );
}
