import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-[#FDFCFB] dark:bg-[#1A1A1A] text-[#1A1A1A] dark:text-[#FDFCFB] font-serif italic tracking-tight docked full-width top-0 sticky z-50">
      <div className="max-w-7xl mx-auto px-8 py-12 flex justify-between items-baseline w-full">
        <Link href="/" className="text-2xl font-serif font-light text-[#1A1A1A] dark:text-[#FDFCFB]">
          Archit Sharma
        </Link>
        <div className="hidden md:flex flex-row items-center gap-8">
          <Link href="/writing" className="text-[#1A1A1A] dark:text-[#FDFCFB] opacity-60 hover:text-[#C15B41] transition-colors duration-300 cursor-pointer font-nav-link text-nav-link not-italic">Writing</Link>
          <Link href="/builds" className="text-[#1A1A1A] dark:text-[#FDFCFB] opacity-60 hover:text-[#C15B41] transition-colors duration-300 cursor-pointer font-nav-link text-nav-link not-italic">Builds</Link>
          <Link href="/now" className="text-[#1A1A1A] dark:text-[#FDFCFB] opacity-60 hover:text-[#C15B41] transition-colors duration-300 cursor-pointer font-nav-link text-nav-link not-italic">Now</Link>
          <Link href="/about" className="text-[#1A1A1A] dark:text-[#FDFCFB] opacity-60 hover:text-[#C15B41] transition-colors duration-300 cursor-pointer font-nav-link text-nav-link not-italic">About</Link>
        </div>
      </div>
    </nav>
  );
}
