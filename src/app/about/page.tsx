import { getAboutPage } from "@/lib/data";
import ReactMarkdown from "react-markdown";
import { getDirectDriveUrl } from "@/lib/utils";

export default async function About() {
  const page = await getAboutPage();

  if (!page) {
    return (
      <main className="flex-grow w-full max-w-container-max mx-auto px-8 md:px-gutter py-section-padding">
        <p className="font-body-lg text-body-lg text-secondary">Content coming soon.</p>
      </main>
    );
  }

  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-8 md:px-gutter pt-section-padding pb-section-padding">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
        {/* Left Column: Biography / Text */}
        <div className="md:col-span-7 lg:col-span-6 flex flex-col gap-stack-lg">
          <header>
            <h1 className="font-display-md text-display-md text-on-background mb-stack-sm">
              {page.heading}
            </h1>
            <div className="prose prose-zinc max-w-prose text-secondary font-light">
              <ReactMarkdown>{page.bio}</ReactMarkdown>
            </div>
          </header>

          {page.sections.map((section) => (
            <section key={section.label} className="flex flex-col gap-stack-md">
              <h2 className="font-label-caps text-label-caps text-secondary uppercase">
                {section.label}
              </h2>
              {section.type === "prose" && section.paragraphs && (
                <div className="font-body-md text-body-md text-on-background max-w-prose space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}
              {section.type === "list" && section.items && (
                <ul className="font-body-md text-body-md text-on-background flex flex-col gap-stack-sm">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary text-sm mt-1">
                        arrow_forward
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {page.contactEmail && (
            <div className="pt-stack-md">
              <a
                className="inline-flex items-center gap-2 font-nav-link text-nav-link text-tertiary hover:text-on-tertiary-container transition-colors duration-300 pb-1 border-b border-tertiary hover:border-on-tertiary-container"
                href={`mailto:${page.contactEmail}`}
              >
                Get in touch
                <span className="material-symbols-outlined text-sm">
                  north_east
                </span>
              </a>
            </div>
          )}
        </div>

        {/* Right Column: Image */}
        <div className="md:col-span-5 lg:col-span-5 lg:col-start-8 mt-stack-lg md:mt-0">
          {page.imageUrl && (
            <>
              <div className="relative w-full aspect-[3/4] bg-surface-variant">
                <img
                  alt={page.imageAlt || "About image"}
                  className="absolute inset-0 w-full h-full object-cover filter contrast-125 sepia-[.15]"
                  src={getDirectDriveUrl(page.imageUrl)}
                />
              </div>
              {page.imageCaption && (
                <div className="mt-4 flex justify-end">
                  <p className="font-label-caps text-label-caps text-secondary">
                    {page.imageCaption}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
