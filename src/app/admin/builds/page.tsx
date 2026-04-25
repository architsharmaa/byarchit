import React from "react";
import Link from "next/link";
import { getSiteData } from "@/lib/data";
import { deleteBuild } from "@/lib/actions";
import DeleteButton from "@/components/admin/DeleteButton";

export default async function BuildsAdmin() {
  const { builds } = await getSiteData();

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-700">
      <header className="flex justify-between items-end">
        <div className="space-y-4">
          <h1 className="text-3xl font-light tracking-tight">Projects.</h1>
          <p className="text-sm text-zinc-500">Manage your builds and layouts.</p>
        </div>
        <Link 
          href="/admin/builds/new" 
          className="text-xs font-medium uppercase tracking-widest px-6 py-3 border border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all"
        >
          Add New Build
        </Link>
      </header>

      <div className="border-t border-zinc-200">
        {builds.length === 0 ? (
          <p className="py-12 text-center text-zinc-400 italic">No projects found.</p>
        ) : (
          <div className="divide-y divide-zinc-100">
            {builds.sort((a, b) => (b.displayOrder || 0) - (a.displayOrder || 0)).map((build) => (
              <div key={build._id.toString()} className="py-6 flex justify-between items-center group">
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs text-zinc-400 font-mono">[{build.year}]</span>
                    <h3 className="text-lg font-light group-hover:text-zinc-600 transition-colors uppercase tracking-tight">{build.title}</h3>
                    {build.featured && (
                      <span className="text-[10px] uppercase tracking-tighter bg-zinc-900 text-white px-2 py-0.5">Featured</span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-400 uppercase tracking-widest">{build.category}</p>
                </div>
                
                <div className="flex items-center space-x-8">
                  <Link 
                    href={`/admin/builds/${build._id}`}
                    className="text-xs font-medium uppercase tracking-widest hover:text-zinc-400 transition-colors"
                  >
                    Edit
                  </Link>
                  <DeleteButton 
                    action={deleteBuild} 
                    id={build._id.toString()} 
                    confirmMessage="Are you sure you want to delete this project?" 
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
