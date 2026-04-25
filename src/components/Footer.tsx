import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#FDFCFB] dark:bg-[#1A1A1A] text-[#1A1A1A] dark:text-[#FDFCFB] font-serif text-sm uppercase tracking-widest full-width pb-12 pt-24 no-border tonal-shift-bg">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center w-full gap-8">
        <span className="opacity-60 text-[#1A1A1A] dark:text-[#FDFCFB] font-body-md text-nav-link normal-case tracking-normal">© {new Date().getFullYear()} Archit Sharma</span>
        <div className="flex space-x-8 font-nav-link text-nav-link tracking-normal">
          <Link href="#" className="text-[#1A1A1A] dark:text-[#FDFCFB] opacity-60 hover:opacity-100 underline-offset-4 hover:underline transition-opacity duration-300">Twitter</Link>
          <Link href="#" className="text-[#1A1A1A] dark:text-[#FDFCFB] opacity-60 hover:opacity-100 underline-offset-4 hover:underline transition-opacity duration-300">GitHub</Link>
          <Link href="#" className="text-[#1A1A1A] dark:text-[#FDFCFB] opacity-60 hover:opacity-100 underline-offset-4 hover:underline transition-opacity duration-300">RSS</Link>
        </div>
      </div>
    </footer>
  );
}
