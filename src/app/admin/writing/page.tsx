import React from "react";
import Link from "next/link";
import { getSiteData } from "@/lib/data";
import { deleteWriting } from "@/lib/actions";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function WritingAdmin() {
  const { writings } = await getSiteData();

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-700">
      <header className="flex justify-between items-end">
        <div className="space-y-4">
          <h1 className="text-3xl font-light tracking-tight">Writing.</h1>
          <p className="text-sm text-zinc-500">Manage your essays and notes.</p>
        </div>
        <Link 
          href="/admin/writing/new" 
          className="text-xs font-medium uppercase tracking-widest px-6 py-3 border border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all"
        >
          New Post
        </Link>
      </header>

      <div className="border-t border-zinc-200">
        {writings.length === 0 ? (
          <p className="py-12 text-center text-zinc-400 italic">No writings found.</p>
        ) : (
          <div className="divide-y divide-zinc-100">
            {writings.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).map((post) => (
              <div key={post._id.toString()} className="py-6 flex justify-between items-center group">
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs text-zinc-400 font-mono">[{new Date(post.publishedAt).toLocaleDateString(undefined, { month: 'short', year: '2-digit' }).toLowerCase()}]</span>
                    <h3 className="text-lg font-light group-hover:text-zinc-600 transition-colors tracking-tight">{post.title}</h3>
                    {post.featured && (
                      <span className="text-[10px] uppercase tracking-tighter bg-zinc-900 text-white px-2 py-0.5">Featured</span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-400 uppercase tracking-widest">{post.category}</p>
                </div>
                
                <div className="flex items-center space-x-8">
                  <Link 
                    href={`/admin/writing/${post._id}`}
                    className="text-xs font-medium uppercase tracking-widest hover:text-zinc-400 transition-colors"
                  >
                    Edit
                  </Link>
                  <DeleteButton 
                    action={deleteWriting} 
                    id={post._id.toString()} 
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
