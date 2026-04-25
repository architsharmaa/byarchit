import React from "react";

export default function Builds() {
  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-gutter py-section-padding">
      {/* Header Section */}
      <section className="mb-section-padding max-w-3xl">
        <h1 className="font-display-lg text-display-lg text-on-background mb-stack-md">Builds</h1>
        <p className="font-body-lg text-body-lg text-secondary">An ongoing archive of technical explorations, hardware prototypes, and digital tools. A focus on utility, minimal friction, and the mechanics of creation.</p>
      </section>

      {/* Project 1: Asymmetrical Layout */}
      <section className="mb-section-padding">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7 image-texture">
            <img 
              alt="Hardware Prototype" 
              className="w-full h-[600px] object-cover grayscale opacity-90 transition-opacity duration-500 hover:opacity-100 hover:grayscale-0" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWwhtejylOb8aaqgf1jtTaZD6IzCuUNM8u7HJ3BmRc-Lk3vnIX-dvfCVtWZMU4TBLTTe_XTLbCt_10p_aCLVLh4TlIx5EGP9NwjR1i5s59nWsfzeHjIERXZC9V52nYOLBzIRaFeFqM5Sk-WXfwppi2Ue9Shy-TI5G82sPw2SzcuUeuoI772grRRIcj2sYAl-O_86SuZ4kU6Ds75LezNkq9DsX4jiSkpHpuUZpFUa_5u5cgo-ORQbMekYhpegLmqGZ1HCvg6kNQHX7b"
            />
          </div>
          <div className="md:col-span-5 md:pl-stack-md flex flex-col justify-center">
            <div className="mb-stack-sm">
              <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">Hardware • 2023</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-background mb-stack-md">E-Ink Desk Display</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">A distraction-free, low-power display built on a Raspberry Pi Zero. Designed to pull in daily agendas and focus metrics without the glare of an LCD screen. The enclosure is milled from a single block of oxidized aluminum.</p>
            <div className="flex flex-wrap gap-unit mb-stack-lg">
              <span className="font-label-caps text-label-caps bg-surface-container-high text-on-surface px-3 py-1">Python</span>
              <span className="font-label-caps text-label-caps bg-surface-container-high text-on-surface px-3 py-1">C++</span>
              <span className="font-label-caps text-label-caps bg-surface-container-high text-on-surface px-3 py-1">CAD</span>
            </div>
            <a className="inline-flex items-center font-nav-link text-nav-link text-on-background group w-max" href="#">
              <span className="border-b border-primary group-hover:border-on-tertiary-container transition-colors duration-300 pb-1">Read Case Study</span>
              <span className="material-symbols-outlined ml-2 text-sm group-hover:text-on-tertiary-container transition-colors duration-300">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Project 2: Editorial Spread */}
      <section className="mb-section-padding bg-surface-container-low -mx-gutter px-gutter py-stack-lg md:py-[80px]">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-gutter">
            <div className="md:w-1/3 flex flex-col justify-between">
              <div>
                <div className="mb-stack-sm">
                  <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">Software • 2022</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-background mb-stack-md">Lexicon CLI</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">A blazingly fast, rust-based command-line tool for semantic code search. Built to navigate massive monorepos with natural language queries rather than rigid regex patterns.</p>
                <a className="inline-flex items-center font-nav-link text-nav-link text-on-background group w-max mb-stack-lg md:mb-0" href="#">
                  <span className="border-b border-primary group-hover:border-on-tertiary-container transition-colors duration-300 pb-1">View Repository</span>
                  <span className="material-symbols-outlined ml-2 text-sm group-hover:text-on-tertiary-container transition-colors duration-300">arrow_outward</span>
                </a>
              </div>
            </div>
            <div className="md:w-2/3 image-texture">
              <img 
                alt="Code Screenshot" 
                className="w-full h-auto object-cover shadow-sm" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABZ-pZhYms9TZeLlAlIBU1Y-aqWpKlgPLWYqibUb9l2_pjSyUjqoMV1838c-GBeZsBH2zOvzX0yXgdeUtQMctiwbiAnIXUYM4xzNo3ExyZP-AmPPXf7OhaHJPVrDluqATtXImFtSY4R82DOHyS2Xf3OIuJqqMY1AwkYLjeQsSpbRJO71LMOA-6TtztqTWwYZ334RwsuZJoQGrUBszw05yzFkTB5ze7iS8zG5aP2cZrNQkDdYKeZV2AiHJvXprbU3beV6l9A1-j2T4N"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project 3: Full Bleed Image with Overlay Text */}
      <section className="mb-section-padding relative h-[716px] min-h-[600px] flex items-center justify-center image-texture overflow-hidden">
        <img 
          alt="Abstract Data Visualization" 
          className="absolute inset-0 w-full h-full object-cover opacity-80" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfw3-XK9Bl_BR2WNq4UfqCho1lHLdcYxU-CIoPiggJUI5QtTVOhLGjm4A6xFGjHJurj-wcA5Xt2WxZrm0smYARULBO9eYpwaTMajgPJ07fk2z754xPUnMzwAy3gSu_nxfOoGu9J7CPXAURjdRBeAM31b28Rv5NsD3B_wUp-wF4INNOLuhPSH2ULhUa5RSJ0ljp2LHMcyvW2MmuOaHF09vYBsnkN1rBg34-U2EbRd4aL0gHtSfwqFCgG7_hdmMIxxR7SfF1y9u3YGvv"
        />
        <div className="absolute inset-0 bg-background/30 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-2xl text-center px-8">
          <div className="mb-stack-sm">
            <span className="font-label-caps text-label-caps text-on-background tracking-widest uppercase bg-surface-container-low/80 px-2 py-1">Data Viz • 2024</span>
          </div>
          <h2 className="font-display-md text-display-md text-on-background mb-stack-md">Topology of Thought</h2>
          <p className="font-body-lg text-body-lg text-on-background mb-stack-md bg-surface-container-low/80 p-4 inline-block">An experimental visualization engine that maps personal journal entries into navigable 3D landscapes based on semantic similarity and emotional resonance.</p>
          <div>
            <a className="inline-block font-nav-link text-nav-link bg-primary text-on-primary px-6 py-3 hover:bg-tertiary-container transition-colors duration-300" href="#">Explore Interactive Canvas</a>
          </div>
        </div>
      </section>

      {/* Minor Projects / List View */}
      <section className="mb-section-padding max-w-4xl mx-auto">
        <h3 className="font-headline-md text-headline-md text-on-background mb-stack-lg border-b border-surface-variant pb-stack-sm">Experiments & Forks</h3>
        <div className="flex flex-col space-y-stack-md">
          {/* List Item 1 */}
          <div className="group flex flex-col md:flex-row justify-between items-baseline border-b border-surface-variant pb-stack-sm hover:border-outline transition-colors duration-300">
            <div className="md:w-2/3">
              <h4 className="font-body-lg text-body-lg text-on-background font-medium group-hover:text-on-tertiary-container transition-colors duration-300">Minimalist RSS Reader</h4>
              <p className="font-body-md text-body-md text-secondary mt-1">A terminal-based feed reader prioritizing typography and reading flow over features.</p>
            </div>
            <div className="mt-2 md:mt-0 font-label-caps text-label-caps text-outline text-right">
              Go / 2021
            </div>
          </div>
          {/* List Item 2 */}
          <div className="group flex flex-col md:flex-row justify-between items-baseline border-b border-surface-variant pb-stack-sm hover:border-outline transition-colors duration-300">
            <div className="md:w-2/3">
              <h4 className="font-body-lg text-body-lg text-on-background font-medium group-hover:text-on-tertiary-container transition-colors duration-300">Typeface Anatomy Tool</h4>
              <p className="font-body-md text-body-md text-secondary mt-1">Interactive web experiment breaking down structural differences in classic serif fonts.</p>
            </div>
            <div className="mt-2 md:mt-0 font-label-caps text-label-caps text-outline text-right">
              Three.js / 2023
            </div>
          </div>
          {/* List Item 3 */}
          <div className="group flex flex-col md:flex-row justify-between items-baseline border-b border-surface-variant pb-stack-sm hover:border-outline transition-colors duration-300">
            <div className="md:w-2/3">
              <h4 className="font-body-lg text-body-lg text-on-background font-medium group-hover:text-on-tertiary-container transition-colors duration-300">Mechanical Keyboard PCB</h4>
              <p className="font-body-md text-body-md text-secondary mt-1">Custom 40% ortholinear layout designed for minimal finger travel and optimal vim usage.</p>
            </div>
            <div className="mt-2 md:mt-0 font-label-caps text-label-caps text-outline text-right">
              KiCad / 2020
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
