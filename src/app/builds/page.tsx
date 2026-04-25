import Link from "next/link";
import React from "react";
import { getAllBuilds } from "@/lib/data";
import { IBuild } from "@/lib/models/Build";
import { getDirectDriveUrl } from "@/lib/utils";

function AsymmetricBuild({ build }: { build: IBuild }) {
  return (
    <section className="mb-section-padding group">
      <Link href={`/builds/${build.slug}`} className="cursor-pointer">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7 image-texture overflow-hidden">
            <img loading="lazy"
              alt={build.imageAlt || "Project image"}
              className="w-full h-[600px] object-cover grayscale opacity-90 transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
              src={getDirectDriveUrl(build.imageUrl)}
            />
          </div>
          <div className="md:col-span-5 md:pl-stack-md flex flex-col justify-center py-8">
            <div className="mb-stack-sm">
              <span className="font-label-caps text-[10px] text-zinc-400 tracking-[0.3em] uppercase">
                {build.category} • {build.year}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-primary mb-stack-md group-hover:text-zinc-600 transition-colors">
              {build.title}
            </h2>
            <p className="font-body-md text-zinc-400 mb-stack-md line-clamp-3 font-light italic">
              {build.description}
            </p>
            <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest text-primary border-b border-zinc-200 pb-1 group-hover:border-zinc-900 transition-all">
              <span>View Project</span>
              <span className="text-xs">→</span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

function EditorialBuild({ build }: { build: IBuild }) {
  return (
    <section className="mb-section-padding bg-zinc-50/50 -mx-gutter px-gutter py-stack-lg md:py-[80px] group">
      <Link href={`/builds/${build.slug}`} className="cursor-pointer">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap- gutter">
            <div className="md:w-1/3 flex flex-col justify-center">
              <div>
                <div className="mb-stack-sm">
                  <span className="font-label-caps text-[10px] text-zinc-400 tracking-[0.3em] uppercase">
                    {build.category} • {build.year}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-light tracking-tighter text-primary mb-stack-md group-hover:text-zinc-600 transition-colors">
                  {build.title}
                </h2>
                <p className="font-body-md text-zinc-400 mb-stack-md font-light italic">
                  {build.description}
                </p>
                <div className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest text-primary border-b border-zinc-200 pb-1 group-hover:border-zinc-900 transition-all">
                  <span>Explore Build</span>
                  <span className="text-xs">→</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 image-texture overflow-hidden md:ml-12 mt-8 md:mt-0">
              <img loading="lazy"
                alt={build.imageAlt || "Project image"}
                className="w-full h-auto object-cover grayscale opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                src={getDirectDriveUrl(build.imageUrl)}
              />
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

function FullbleedBuild({ build }: { build: IBuild }) {
  return (
    <section className="mb-section-padding relative h-[716px] min-h-[600px] flex items-center justify-center image-texture overflow-hidden group">
      <Link href={`/builds/${build.slug}`} className="absolute inset-0 z-20"></Link>
      <img loading="lazy"
        alt={build.imageAlt || "Project image"}
        className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
        src={build.imageUrl}
      />
      <div className="absolute inset-0 bg-white/20 transition-opacity duration-700 group-hover:opacity-0"></div>
      <div className="relative z-10 max-w-2xl text-center px-8">
        <div className="mb-stack-sm">
          <span className="font-label-caps text-[10px] text-zinc-100 tracking-[0.4em] uppercase bg-black/40 px-3 py-1.5 backdrop-blur-sm">
            {build.category} • {build.year}
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white drop-shadow-2xl mb-8">
          {build.title}
        </h2>
        <div className="inline-block px-8 py-3 bg-white/10 text-white text-[10px] uppercase tracking-[0.3em] backdrop-blur-md border border-white/20 hover:bg-white hover:text-black transition-all duration-500">
          View Detail
        </div>
      </div>
    </section>
  );
}

function ListBuildItem({ build }: { build: IBuild }) {
  return (
    <Link href={`/builds/${build.slug}`} className="block group">
      <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-zinc-100 py-6 hover:border-zinc-900 transition-all">
        <div className="md:w-2/3">
          <h4 className="text-xl font-light text-primary group-hover:text-zinc-500 transition-colors">
            {build.title}
          </h4>
          <p className="text-sm text-zinc-400 font-light italic mt-1">
            {build.description}
          </p>
        </div>
        <div className="mt-2 md:mt-0 font-label-caps text-[10px] text-zinc-300 tracking-widest uppercase">
          {build.techStack.length > 0 ? build.techStack[0] : build.category} / {build.year}
        </div>
      </div>
    </Link>
  );
}

export default async function Builds() {
  const allBuilds = await getAllBuilds();

  const showcaseBuilds = allBuilds.filter((b) => b.layout !== "list");
  const listBuilds = allBuilds.filter((b) => b.layout === "list");

  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-gutter py-section-padding">
      {/* Header Section */}
      <section className="mb-section-padding max-w-3xl">
        <h1 className="font-display-lg text-display-lg text-on-background mb-stack-md">
          Builds
        </h1>
        <p className="font-body-lg text-body-lg text-secondary">
          An ongoing archive of technical explorations, hardware prototypes, and
          digital tools. A focus on utility, minimal friction, and the mechanics
          of creation.
        </p>
      </section>

      {/* Showcase Builds */}
      {showcaseBuilds.map((build) => {
        switch (build.layout) {
          case "asymmetric":
            return <AsymmetricBuild key={build.slug} build={build} />;
          case "editorial":
            return <EditorialBuild key={build.slug} build={build} />;
          case "fullbleed":
            return <FullbleedBuild key={build.slug} build={build} />;
          default:
            return <AsymmetricBuild key={build.slug} build={build} />;
        }
      })}

      {/* Minor Projects / List View */}
      {listBuilds.length > 0 && (
        <section className="mb-section-padding max-w-4xl mx-auto">
          <h3 className="font-headline-md text-headline-md text-on-background mb-stack-lg border-b border-surface-variant pb-stack-sm">
            Experiments &amp; Forks
          </h3>
          <div className="flex flex-col space-y-stack-md">
            {listBuilds.map((build) => (
              <ListBuildItem key={build.slug} build={build} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
