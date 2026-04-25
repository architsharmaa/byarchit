import React from "react";
import Link from "next/link";
import { getSiteConfig, getFeaturedBuilds, getRecentWritings } from "@/lib/data";
import { getDirectDriveUrl } from "@/lib/utils";

export default async function Home() {
  const [config, builds, writings] = await Promise.all([
    getSiteConfig(),
    getFeaturedBuilds(),
    getRecentWritings(3),
  ]);

  return (
    <main>
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding flex flex-col md:flex-row gap-gutter items-center min-h-[716px] animate-in fade-in duration-1000">
        <div className="flex-1 w-full relative image-texture aspect-[4/5] md:aspect-square bg-surface-container overflow-hidden">
          <img
            alt={config?.heroImageAlt || "Hero image"}
            className="w-full h-full object-cover object-center grayscale-[20%] opacity-90 transition-all duration-700 hover:scale-105"
            src={getDirectDriveUrl(config?.heroImageUrl) || "./images/cover.jpeg"}
          />
        </div>
        <div className="flex-1 w-full flex flex-col justify-center space-y-stack-md pt-12 md:pt-0 md:pl-12">
          <h1 className="font-display-lg text-display-lg text-primary tracking-tighter">
            {config?.heroHeading || "Archit Sharma"}
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-lg opacity-80 font-light">
            {config?.heroSubtext ||
              "Things I build. Things I think. A collection of thoughts on software, design, philosophy and the quiet spaces in between."}
          </p>
        </div>
      </section>

      {/* Selected Builds Section */}
      {builds.length > 0 && (
        <section className="max-w-container-max mx-auto px-gutter py-section-padding">
          <h2 className="font-label-caps text-[11px] text-zinc-400 uppercase tracking-[0.4em] mb-stack-lg border-b border-zinc-100 pb-4">
            Selected Builds
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-section-padding">
            {builds.map((build, i) => (
              <Link key={build.slug} href="/builds" className="block group">
                <article
                  className={`flex flex-col ${
                    i % 2 === 1 ? "md:mt-24" : ""
                  }`}
                >
                  <div
                    className={`w-full ${
                      i % 2 === 0 ? "aspect-video" : "aspect-[4/3]"
                    } bg-surface-variant mb-stack-sm overflow-hidden relative image-texture`}
                  >
                    <img
                      alt={build.imageAlt || "Project preview"}
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                      src={getDirectDriveUrl(build.imageUrl)}
                    />
                  </div>
                  <div className="flex justify-between items-baseline mt-4">
                    <h3 className="text-2xl font-light text-primary group-hover:text-zinc-600 transition-colors">
                      {build.title}
                    </h3>
                    <span className="font-label-caps text-[10px] text-zinc-400 tracking-widest uppercase">
                      {build.year}
                    </span>
                  </div>
                  <p className="text-sm font-light text-zinc-400 mt-2 max-w-md italic">
                    {build.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Recent Writing Section */}
      {writings.length > 0 && (
        <section className="max-w-container-max mx-auto px-gutter py-section-padding border-t border-zinc-100">
          <h2 className="font-label-caps text-[11px] text-zinc-400 uppercase tracking-[0.4em] mb-stack-lg pb-4">
            Recent Writing
          </h2>
          <div className="flex flex-col space-y-4">
            {writings.map((post) => (
              <Link
                key={post.slug}
                className="group block border-b border-zinc-50 pb-8 hover:bg-zinc-50 transition-all -mx-4 px-4"
                href={`/writing/${post.slug}`}
              >
                <article className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 py-4">
                  <div className="max-w-2xl">
                    <h3 className="text-xl md:text-2xl font-light text-primary group-hover:text-zinc-500 transition-colors duration-300 tracking-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm font-light text-zinc-400 mt-2 line-clamp-1">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-label-caps text-[9px] uppercase tracking-widest text-zinc-400 border border-zinc-200 px-2 py-0.5">
                      {post.category}
                    </span>
                    <span className="font-label-caps text-[10px] text-zinc-300 uppercase tracking-tighter">
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                      })}
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <Link
              className="font-label-caps text-[11px] text-primary border-b border-zinc-300 pb-1 uppercase tracking-widest hover:border-zinc-900 transition-all font-medium"
              href="/writing"
            >
              View all writing
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
