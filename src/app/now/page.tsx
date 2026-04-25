import React from "react";

export default function Now() {
  return (
    <main className="flex-grow max-w-container-max mx-auto w-full px-gutter md:px-12">
      {/* Hero Intro */}
      <section className="py-section-padding md:w-3/4">
        <h1 className="font-display-md text-display-md text-on-surface mb-stack-md">What I&apos;m doing now.</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          This is a declaration of intent. A snapshot of my current priorities, the projects actively in flight, and the ideas taking up residence in my mind. Inspired by Derek Sivers&apos; concept, this page is updated rhythmically, prioritizing deep focus over continuous broadcasting.
        </p>
      </section>

      {/* Current Work */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter py-stack-lg border-t border-surface-dim">
        <div className="md:col-span-3 pt-unit">
          <h2 className="font-label-caps text-label-caps text-on-surface-variant tracking-[0.1em] uppercase">Current Work</h2>
        </div>
        <div className="md:col-span-8 md:col-start-5 space-y-stack-md">
          <div className="space-y-4">
            <h3 className="font-headline-md text-headline-md text-on-surface">Refining the Editorial System</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Building a custom publishing platform that merges the typographic rigor of print journalism with the fluidity of modern web architecture. Currently exploring how to implement asymmetrical grid structures procedurally.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-headline-md text-headline-md text-on-surface">Essays on &quot;Quiet Luxury&quot; in Software</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Drafting a series of long-form pieces examining why enterprise software feels so hostile, and how applying principles from interior architecture can yield calmer, more focused digital environments.
            </p>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <div className="w-full h-[614px] my-section-padding bg-surface-container-highest overflow-hidden">
        <img 
          alt="Abstract architectural photography of shadows playing across a textured concrete wall, soft warm sunlight, minimalist composition" 
          className="w-full h-full object-cover filter contrast-[0.9] sepia-[0.1]" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAJInqXSC8ncLlhOVclliBCYwt4mr74I_a_p-eKXfcLgnEYR_Ppq1eexJE1k0DhlWn6e-Ywri8Mq04O-FaPpQ4Nm4POwO-umfGwhS9GEKrO9oJUQTAtM9oJGsUpi2ecpFhvpCGp4QxrEDiVMTIYdxqHMqmW7Zl53c1azFzwy7FtUyAlxSHYfN1jkILcTkrAPeJoBQXCKCo2_1P9j4O-VV0Gu7H_QXA1K6h5Z5XF5yc63db_ij6o_-g_cAXa9MDJUlx4TWXt0IT-qNk"
        />
      </div>

      {/* Reading & Research */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter py-stack-lg border-t border-surface-dim">
        <div className="md:col-span-3 pt-unit">
          <h2 className="font-label-caps text-label-caps text-on-surface-variant tracking-[0.1em] uppercase">Reading & Research</h2>
        </div>
        <div className="md:col-span-8 md:col-start-5 space-y-stack-md">
          <ul className="space-y-12">
            <li>
              <span className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Book</span>
              <h3 className="font-headline-md text-headline-md text-on-surface">The Architecture of Happiness</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">Alain de Botton&apos;s exploration of how our built environment affects our psychology. Re-reading this to extract principles applicable to UI design.</p>
            </li>
            <li>
              <span className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Paper</span>
              <h3 className="font-headline-md text-headline-md text-on-surface">Local-First Software</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">Revisiting Ink &amp; Switch&apos;s manifesto on owning your data and reducing reliance on cloud infrastructure for personal tooling.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Habits */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter pt-stack-lg pb-section-padding border-t border-surface-dim">
        <div className="md:col-span-3 pt-unit">
          <h2 className="font-label-caps text-label-caps text-on-surface-variant tracking-[0.1em] uppercase">Habits</h2>
        </div>
        <div className="md:col-span-8 md:col-start-5 space-y-stack-md">
          <div className="space-y-4">
            <h3 className="font-headline-md text-headline-md text-on-surface">Morning Pages</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              750 words strictly longhand before engaging with any screens. An exercise in clearing mental static rather than producing polished prose.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-headline-md text-headline-md text-on-surface">Digital Twilight</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Enforcing a hard disconnect from network-connected devices after 8 PM. Returning to physical books and ambient music to wind down.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
