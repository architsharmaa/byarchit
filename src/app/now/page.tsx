import React from "react";
import { getNowPage } from "@/lib/data";
import ReactMarkdown from "react-markdown";
import { getDirectDriveUrl } from "@/lib/utils";

export default async function Now() {
  const page = await getNowPage();

  if (!page) {
    return (
      <main className="flex-grow max-w-container-max mx-auto w-full px-gutter md:px-12 py-section-padding">
        <p className="font-body-lg text-body-lg text-secondary">Content coming soon.</p>
      </main>
    );
  }

  return (
    <main className="flex-grow max-w-container-max mx-auto w-full px-gutter md:px-12">
      {/* Hero Intro */}
      <section className="py-section-padding md:w-3/4">
        <h1 className="font-display-md text-display-md text-on-surface mb-stack-md">
          {page.intro.heading}
        </h1>
        <div className="prose prose-zinc max-w-2xl text-secondary font-light">
          <ReactMarkdown>{page.intro.body}</ReactMarkdown>
        </div>
      </section>

      {/* Sections */}
      {page.sections.map((section, sIdx) => (
        <React.Fragment key={section.label}>
          {/* Image break after first section */}
          {sIdx === 1 && page.imageUrl && (
            <div className="w-full h-[614px] my-section-padding bg-surface-container-highest overflow-hidden">
              <img
                alt={page.imageAlt || "Atmospheric photography"}
                className="w-full h-full object-cover filter contrast-[0.9] sepia-[0.1]"
                src={getDirectDriveUrl(page.imageUrl)}
              />
            </div>
          )}

          <section className={`grid grid-cols-1 md:grid-cols-12 gap-gutter ${
            sIdx === page.sections.length - 1
              ? "pt-stack-lg pb-section-padding"
              : "py-stack-lg"
          } border-t border-surface-dim`}>
            <div className="md:col-span-3 pt-unit">
              <h2 className="font-label-caps text-label-caps text-on-surface-variant tracking-[0.1em] uppercase">
                {section.label}
              </h2>
            </div>
            <div className="md:col-span-8 md:col-start-5 space-y-stack-md">
              {section.label === "Reading & Research" ? (
                <ul className="space-y-12">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      {item.type && (
                        <span className="block font-label-caps text-label-caps text-on-surface-variant mb-2">
                          {item.type}
                        </span>
                      )}
                      <h3 className="font-headline-md text-headline-md text-on-surface">
                        {item.title}
                      </h3>
                      <div className="prose prose-zinc prose-sm text-secondary font-light mt-2">
                        <ReactMarkdown>{item.body}</ReactMarkdown>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                section.items.map((item) => (
                  <div key={item.title} className="space-y-4">
                    <h3 className="font-headline-md text-headline-md text-on-surface">
                      {item.title}
                    </h3>
                    <div className="prose prose-zinc prose-sm text-secondary font-light">
                      <ReactMarkdown>{item.body}</ReactMarkdown>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </React.Fragment>
      ))}
    </main>
  );
}
