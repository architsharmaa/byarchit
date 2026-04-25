import React from "react";

export default function About() {
  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-8 md:px-gutter pt-section-padding pb-section-padding">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
        {/* Left Column: Biography / Text */}
        <div className="md:col-span-7 lg:col-span-6 flex flex-col gap-stack-lg">
          <header>
            <h1 className="font-display-md text-display-md text-on-background mb-stack-sm">
              About
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-prose">
              I am an engineer and a writer, exploring the intersection of complex systems, human behavior, and the philosophical underpinnings of modern technology. My work is an attempt to map the territories between what we build and why we build it.
            </p>
          </header>
          <section className="flex flex-col gap-stack-md">
            <h2 className="font-label-caps text-label-caps text-secondary uppercase">Philosophy</h2>
            <div className="font-body-md text-body-md text-on-background max-w-prose space-y-4">
              <p>
                I believe in the quiet luxury of well-crafted tools. Software should not just solve a problem; it should respect the user&apos;s time and attention. I am drawn to minimalism not as an aesthetic choice, but as an operational necessity in a noisy world.
              </p>
              <p>
                The tension between ambition and contentment is a recurring theme in my writing. I am interested in how we construct meaning through our daily habits, our chosen professions, and the artifacts we leave behind.
              </p>
            </div>
          </section>
          <section className="flex flex-col gap-stack-md">
            <h2 className="font-label-caps text-label-caps text-secondary uppercase">Current Focus</h2>
            <ul className="font-body-md text-body-md text-on-background flex flex-col gap-stack-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-sm mt-1">arrow_forward</span>
                <span>Developing robust architectures for distributed systems.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-sm mt-1">arrow_forward</span>
                <span>Writing essays on the cognitive load of modern interfaces.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-sm mt-1">arrow_forward</span>
                <span>Studying stoic texts and their application to software engineering.</span>
              </li>
            </ul>
          </section>
          <div className="pt-stack-md">
            <a className="inline-flex items-center gap-2 font-nav-link text-nav-link text-tertiary hover:text-on-tertiary-container transition-colors duration-300 pb-1 border-b border-tertiary hover:border-on-tertiary-container" href="mailto:contact@example.com">
              Get in touch
              <span className="material-symbols-outlined text-sm">north_east</span>
            </a>
          </div>
        </div>
        
        {/* Right Column: Image */}
        <div className="md:col-span-5 lg:col-span-5 lg:col-start-8 mt-stack-lg md:mt-0">
          <div className="relative w-full aspect-[3/4] bg-surface-variant">
            <img 
              alt="A quiet workspace" 
              className="absolute inset-0 w-full h-full object-cover filter contrast-125 sepia-[.15]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5KAEmem4ptYxm1Dd0pl_0dH2KD37-xAA0mgjBrDdONGk-seEcNSuukG1M0aJ0rjWLfkqhnCI-BwbOTZ3bXqrEjmU0hmH4qbJj9RJyApt3-nNbPqA-A011dINdWUMJqtjbkayjzxIGmBvlo4jYXS8xpuHZ5hbP7p_xPQSjQwPx4Bh19VkJiVkQ0CdKRgJsw77Nh7ohrCz4X9_-M_5TpOvujJdy95cIZXrCiQg9svgeD_Z5bHK_eJLKt7oxNYIGJeVQRkgfCBkR1-Mc"
            />
          </div>
          <div className="mt-4 flex justify-end">
            <p className="font-label-caps text-label-caps text-secondary">A space for thought.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
