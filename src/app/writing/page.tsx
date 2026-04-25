import Link from "next/link";
import React from "react";
import { getFeaturedWriting, getRecentWritings } from "@/lib/data";
import { getDirectDriveUrl } from "@/lib/utils";

export default async function Writing() {
  const [featured, recent] = await Promise.all([
    getFeaturedWriting(),
    getRecentWritings(10),
  ]);

  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-gutter py-section-padding space-y-section-padding">
      {/* Header Section */}
      <header className="max-w-3xl">
        <h1 className="font-display-lg text-display-lg text-primary mb-stack-sm tracking-tighter">
          Thinking Log
        </h1>
        <p className="font-body-lg text-body-lg text-secondary opacity-70">
          Essays, reflections, and notes on design, technology, and the spaces
          between.
        </p>
      </header>

      {/* Featured Post */}
      {featured && (
        <Link href={`/writing/${featured.slug}`} className="block group">
          <article className="cursor-pointer border-t border-zinc-100 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
              {featured.imageUrl && (
                <div className="md:col-span-7 aspect-[16/10] w-full overflow-hidden bg-surface-variant relative">
                  <img loading="lazy"
                    alt={featured.imageAlt || "Featured image"}
                    className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                    src={getDirectDriveUrl(featured.imageUrl)}
                  />
                </div>
              )}
              <div
                className={`${
                  featured.imageUrl ? "md:col-span-5" : "md:col-span-12"
                } flex flex-col justify-center py-stack-md md:pl-12`}
              >
                <div className="font-label-caps text-[10px] text-zinc-400 mb-stack-sm uppercase tracking-[0.3em]">
                  {featured.category} —{" "}
                  {new Date(featured.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </div>
                <h2 className="font-headline-lg text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-stack-md group-hover:text-zinc-600 transition-colors duration-300 tracking-tight leading-tight">
                  {featured.title}
                </h2>
                <p className="font-body-md text-body-md text-zinc-400 mb-stack-md font-light italic leading-relaxed">
                  {featured.excerpt}
                </p>
                <span className="font-label-caps text-[11px] text-primary border-b border-zinc-200 pb-1 self-start uppercase tracking-widest group-hover:border-zinc-900 transition-all">
                  Read Article
                </span>
              </div>
            </div>
          </article>
        </Link>
      )}

      {/* List Section */}
      {recent.length > 0 && (
        <section className="max-w-4xl pt-16">
          <h3 className="font-label-caps text-[11px] text-zinc-400 mb-stack-lg uppercase border-b border-zinc-100 pb-unit tracking-[0.4em]">
            Recent Notes
          </h3>
          <div className="flex flex-col space-y-4">
            {recent.map((post) => (
              <Link key={post.slug} href={`/writing/${post.slug}`} className="block group">
                <article
                  className="grid grid-cols-1 md:grid-cols-4 gap-gutter group cursor-pointer items-start py-8 border-b border-zinc-50 hover:border-zinc-200 transition-all"
                >
                  <div className="md:col-span-1">
                    <span className="font-label-caps text-[10px] text-zinc-300 uppercase tracking-widest">
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="md:col-span-3 space-y-2">
                    <h4 className="text-xl md:text-2xl font-light text-primary group-hover:text-zinc-500 transition-colors duration-300 tracking-tight">
                      {post.title}
                    </h4>
                    <p className="font-body-md text-sm text-zinc-400 font-light line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <div className="mt-section-padding text-center md:text-left">
            <Link
              className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 uppercase hover:text-secondary transition-colors duration-300"
              href="/writing"
            >
              View Archive
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
