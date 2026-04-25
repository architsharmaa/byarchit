import React from "react";
import { getBuildBySlug } from "@/lib/data";
export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getDirectDriveUrl } from "@/lib/utils";

export default async function BuildProject({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const build = await getBuildBySlug(slug);

  if (!build) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-zinc-200">
      <div className="max-w-screen-xl mx-auto px-6 py-24 md:py-32 space-y-16">
        {/* Navigation */}
        <nav className="animate-in fade-in slide-in-from-top-4 duration-700">
          <Link 
            href="/builds" 
            className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 hover:text-zinc-900 transition-colors"
          >
            ← Back to archive
          </Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Content Column */}
          <div className="lg:col-span-5 space-y-12 animate-in fade-in slide-in-from-left-4 duration-1000">
            <header className="space-y-6">
              <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.3em] text-zinc-400 font-medium">
                <span>{build.category}</span>
                <span>/</span>
                <span>{build.year}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-light tracking-tighter leading-tight">
                {build.title}
              </h1>
            </header>

            <div className="prose prose-zinc prose-lg max-w-none font-light text-zinc-600 leading-relaxed italic">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{build.description}</ReactMarkdown>
            </div>

            {build.techStack.length > 0 && (
              <div className="space-y-4 pt-8">
                <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-semibold">Infrastructure</h3>
                <div className="flex flex-wrap gap-2">
                  {build.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 border border-zinc-200 text-[10px] uppercase tracking-widest text-zinc-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {(build.linkLabel || build.githubUrl || build.designDocUrl) && (
              <div className="pt-12 flex flex-col space-y-4">
                {build.linkLabel && (
                  <a 
                    href={build.linkUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 text-xs font-medium uppercase tracking-widest border-b border-zinc-900 pb-2 hover:text-zinc-500 hover:border-zinc-300 transition-all w-fit"
                  >
                    <span>Visit {build.linkLabel}</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                )}
                
                {build.githubUrl && (
                  <a 
                    href={build.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 text-xs font-medium uppercase tracking-widest border-b border-zinc-900 pb-2 hover:text-zinc-500 hover:border-zinc-300 transition-all w-fit"
                  >
                    <span>View Repository</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                )}

                {build.designDocUrl && (
                  <a 
                    href={build.designDocUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 text-xs font-medium uppercase tracking-widest border-b border-zinc-900 pb-2 hover:text-zinc-500 hover:border-zinc-300 transition-all w-fit"
                  >
                    <span>View Design Doc</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Image Column */}
          <div className="lg:col-span-7 animate-in fade-in scale-in-95 duration-1000 delay-300">
            <div className="w-full aspect-[4/5] md:aspect-[16/10] overflow-hidden bg-zinc-100 group shadow-2xl">
              {getDirectDriveUrl(build.imageUrl) && (
                <img loading="lazy"
                  src={getDirectDriveUrl(build.imageUrl)} 
                  alt={build.imageAlt || build.title} 
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />
              )}
            </div>
          </div>
        </div>

        {/* Full Width Written Content */}
        {build.content && (
          <div className="max-w-4xl pt-24 border-t border-zinc-200 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <div className="prose prose-zinc prose-lg lg:prose-xl max-w-none prose-p:font-light prose-p:text-zinc-600 prose-headings:font-light prose-headings:tracking-tighter prose-headings:text-zinc-900 prose-a:text-zinc-900 prose-a:underline-offset-4 hover:prose-a:text-zinc-500 transition-colors">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{build.content}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
