import React from "react";
import Link from "next/link";
import { getSiteData } from "@/lib/data";

export default async function AdminDashboard() {
  const data = await getSiteData();

  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      <header className="space-y-4">
        <h1 className="text-4xl font-light tracking-tight selection:bg-zinc-200">Workspace overview.</h1>
        <p className="text-zinc-500 max-w-xl">
          Manage your digital environment. Updates here are reflected across the Thinking Space in real-time.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link 
          href="/admin/site-config"
          className="group p-8 bg-white border border-zinc-200 hover:border-zinc-900 transition-all space-y-4"
        >
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-400 group-hover:text-zinc-900 transition-colors">Site Configuration</h2>
          <p className="text-2xl font-light">{data.config?.heroHeading}</p>
          <div className="text-xs text-zinc-400 group-hover:text-zinc-500 transition-colors pt-4">Edit profile, social links, and SEO defaults →</div>
        </Link>

        <div className="space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-widest text-zinc-400">Quick Access</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link 
              href="/admin/builds"
              className="p-6 bg-white border border-zinc-200 hover:border-zinc-900 transition-all"
            >
              <div className="text-xs text-zinc-400 mb-1">Projects</div>
              <div className="text-2xl font-light">Builds</div>
            </Link>
            <Link 
              href="/admin/writing"
              className="p-6 bg-white border border-zinc-200 hover:border-zinc-900 transition-all"
            >
              <div className="text-xs text-zinc-400 mb-1">Posts</div>
              <div className="text-2xl font-light">Writing</div>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-200 pt-16">
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 mb-8">Page Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-light italic">Now Page</h3>
            <p className="text-sm text-zinc-500 italic">"{data.now?.intro?.heading}"</p>
            <Link href="/admin/now" className="text-xs font-medium uppercase tracking-wider hover:text-zinc-500 transition-colors inline-block pt-2">
              Edit current focus →
            </Link>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-light italic">About Page</h3>
            <p className="text-sm text-zinc-500 line-clamp-2 italic">"{data.about?.bio}"</p>
            <Link href="/admin/about" className="text-xs font-medium uppercase tracking-wider hover:text-zinc-500 transition-colors inline-block pt-2">
              Edit biography →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
