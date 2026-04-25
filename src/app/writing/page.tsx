import React from "react";

export default function Writing() {
  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-gutter py-section-padding space-y-section-padding">
      {/* Header Section */}
      <header className="max-w-3xl">
        <h1 className="font-display-lg text-display-lg text-primary mb-stack-sm">Thinking Log</h1>
        <p className="font-body-lg text-body-lg text-secondary">Essays, reflections, and notes on design, technology, and the spaces between.</p>
      </header>
      
      {/* Featured Post */}
      <article className="group cursor-pointer">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7 aspect-[4/3] w-full overflow-hidden bg-surface-variant relative">
            <img 
              alt="Featured image" 
              className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMlVSREqUhZV-oobW5BaNUp0yaNZTUHkAc2WRkqWDi3IikKpR8ztNC-KSXd7aaq9_T2qNLy2A356u2Y-ZJfcumzZIe5Wv3fKnRU2d3dp_3vhwuExEneq3tC9tbfXyZY__-_c_V2jj0ruIFlZLMqdqu03SbjSOUN2DAr9pZnBX7d7OpkEJTarwoY7fh-r6Aq3F8y52bHTaDfBlE-SxDka2u0_z_bw85EQmSHGx4c5AerLKeGUyMf2m6v3M3Jpqp08nkvWAvxzP1CV2D"
            />
          </div>
          <div className="md:col-span-5 flex flex-col justify-center py-stack-md md:py-0">
            <div className="font-label-caps text-label-caps text-on-tertiary-container mb-stack-sm uppercase">Essay — Oct 24, 2023</div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-md group-hover:text-on-tertiary-container transition-colors duration-300">The Architecture of Silence in UI</h2>
            <p className="font-body-md text-body-md text-secondary mb-stack-md">Exploring how the deliberate use of negative space and absence of visual noise can create more profound digital experiences, drawing parallels from minimalist architecture.</p>
            <span className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 self-start uppercase">Read Article</span>
          </div>
        </div>
      </article>

      {/* List Section */}
      <section className="max-w-4xl">
        <h3 className="font-label-caps text-label-caps text-secondary mb-stack-lg uppercase border-b border-surface-variant pb-unit tracking-widest">Recent Notes</h3>
        <div className="flex flex-col space-y-stack-lg">
          {/* List Item 1 */}
          <article className="grid grid-cols-1 md:grid-cols-4 gap-gutter group cursor-pointer items-start">
            <div className="md:col-span-1 pt-2">
              <span className="font-label-caps text-label-caps text-secondary uppercase">Sep 12, 2023</span>
            </div>
            <div className="md:col-span-3">
              <h4 className="font-headline-md text-headline-md text-primary mb-stack-sm group-hover:text-on-tertiary-container transition-colors duration-300">Beyond the Glass: Tactility in Screens</h4>
              <p className="font-body-md text-body-md text-secondary">Why modern interfaces are returning to skeuomorphic hints and textural depth after a decade of extreme flatness.</p>
            </div>
          </article>
          {/* List Item 2 */}
          <article className="grid grid-cols-1 md:grid-cols-4 gap-gutter group cursor-pointer items-start">
            <div className="md:col-span-1 pt-2">
              <span className="font-label-caps text-label-caps text-secondary uppercase">Aug 05, 2023</span>
            </div>
            <div className="md:col-span-3">
              <h4 className="font-headline-md text-headline-md text-primary mb-stack-sm group-hover:text-on-tertiary-container transition-colors duration-300">Systems vs. Sensibility</h4>
              <p className="font-body-md text-body-md text-secondary">Finding the balance between rigorous design systems and the need for organic, intuitive creative decisions.</p>
            </div>
          </article>
          {/* List Item 3 */}
          <article className="grid grid-cols-1 md:grid-cols-4 gap-gutter group cursor-pointer items-start">
            <div className="md:col-span-1 pt-2">
              <span className="font-label-caps text-label-caps text-secondary uppercase">Jul 18, 2023</span>
            </div>
            <div className="md:col-span-3">
              <h4 className="font-headline-md text-headline-md text-primary mb-stack-sm group-hover:text-on-tertiary-container transition-colors duration-300">The Typographic Grid as a Blueprint</h4>
              <p className="font-body-md text-body-md text-secondary">How print layout traditions can inform more structurally sound and readable web experiences.</p>
            </div>
          </article>
          {/* List Item 4 */}
          <article className="grid grid-cols-1 md:grid-cols-4 gap-gutter group cursor-pointer items-start">
            <div className="md:col-span-1 pt-2">
              <span className="font-label-caps text-label-caps text-secondary uppercase">Jun 22, 2023</span>
            </div>
            <div className="md:col-span-3">
              <h4 className="font-headline-md text-headline-md text-primary mb-stack-sm group-hover:text-on-tertiary-container transition-colors duration-300">Pacing the User Journey</h4>
              <p className="font-body-md text-body-md text-secondary">Treating interaction design like a narrative arc—understanding when to speed up the user and when to slow them down.</p>
            </div>
          </article>
        </div>
        <div className="mt-section-padding text-center md:text-left">
          <a className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 uppercase hover:text-on-tertiary-container transition-colors duration-300" href="#">View Archive</a>
        </div>
      </section>
    </main>
  );
}
