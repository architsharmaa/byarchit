import React from "react";
import Link from "next/link";
import { logoutAction } from "@/lib/actions";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-zinc-200 p-8 flex flex-col justify-between">
        <div className="space-y-12">
          <div>
            <Link href="/admin" className="text-xl font-light tracking-tighter">
              ByArchit.<span className="text-zinc-400">Admin</span>
            </Link>
          </div>

          <nav className="flex flex-col space-y-4">
            <Link
              href="/admin/site-config"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              Site Config
            </Link>
            <Link
              href="/admin/builds"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              Builds
            </Link>
            <Link
              href="/admin/writing"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              Writing
            </Link>
            <Link
              href="/admin/now"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              Now Page
            </Link>
            <Link
              href="/admin/about"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              About Page
            </Link>
          </nav>
        </div>

        <div className="pt-8 border-t border-zinc-100 mt-auto">
          <form action={logoutAction}>
            <button
              type="submit"
              className="text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-black transition-all flex items-center space-x-2"
            >
              <span>Logout</span>
              <span className="text-[10px]">✕</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-8 md:p-16 max-w-5xl">
        {children}
      </main>
    </div>
  );
}
