import React from "react";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding flex flex-col md:flex-row gap-gutter items-center min-h-[716px]">
        <div className="flex-1 w-full relative image-texture aspect-[4/5] md:aspect-square bg-surface-container overflow-hidden">
          <img 
            alt="Brutalist architecture" 
            className="w-full h-full object-cover object-center grayscale-[20%] opacity-90" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ6AGgq_bW1CvEyRbGYpl26H12nmrKBKK3RzDupXD0frhuC0v0XTs_GQPrn2r-NFr0bvDdlDziDAhiK-Q4g2UARV9Qv13GW-Z7rkJ-ovaXv6zK7tx17fesYrBf8aig9-tSVRIIj90Z3syGmjOLeC_k-N6lip96dmPx8Q0oncMdszzEX7yqqtjtLQulpBZE6tye6-F9CrHFcM9KvHNFAR-Dd52AenULN0I1cZ9_ASzZhgYyMjEocNYmscRVoX6SZU5vnwYsoh2Yk7Ar"
          />
        </div>
        <div className="flex-1 w-full flex flex-col justify-center space-y-stack-md pt-12 md:pt-0">
          <h1 className="font-display-lg text-display-lg text-primary">Archit Sharma</h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-lg">
            Things I build. Things I think. A collection of thoughts on software, design, and the quiet spaces in between.
          </p>
        </div>
      </section>

      {/* Selected Builds Section */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding">
        <h2 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-stack-lg">Selected Builds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-section-padding">
          {/* Build Item 1 */}
          <article className="flex flex-col group cursor-pointer">
            <div className="w-full aspect-video bg-surface-variant mb-stack-sm overflow-hidden relative image-texture">
              <img 
                alt="Project preview" 
                className="w-full h-full object-cover grayscale-[30%] group-hover:scale-105 transition-transform duration-700 ease-out" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkOrmG1pzllsfIXBd0qU7Ulxs_rIRH0fadA8DcK9FCeS8RUGQaSytZze6ru3gG5e-aqTVlHeYNG1bzkLMCfEmpXRzcQmExpyms4m-enN1tu_tbOSoUGECtC0iP7GWMbJGYgW5efk6gMSc5U2vWnJ3FsE_NZyO6JxTDAFZZfh6rVpYdfJCRWG_wHiWSy3OFjJJj4X6TcdFuK-vh5ecAY8heMc7UrguWKHrLzacftQ34998wXa52I-WKpNeaMeGxdP5LVbcq2MvqN1pn"
              />
            </div>
            <div className="flex justify-between items-baseline mt-4">
              <h3 className="font-headline-md text-headline-md text-primary">Overture</h3>
              <span className="font-label-caps text-label-caps text-secondary">2023</span>
            </div>
            <p className="font-body-md text-body-md text-secondary mt-2 max-w-md">
              A minimalist writing environment designed to remove friction between thought and text.
            </p>
          </article>
          {/* Build Item 2 */}
          <article className="flex flex-col group cursor-pointer md:mt-24">
            <div className="w-full aspect-[4/3] bg-surface-variant mb-stack-sm overflow-hidden relative image-texture">
              <img 
                alt="Project preview" 
                className="w-full h-full object-cover grayscale-[30%] group-hover:scale-105 transition-transform duration-700 ease-out" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCCc0qpXxMiTltWNUvtIXXvZPLm56HQZcQFpAKt7ZTXHi8ZyE6nbbhmGsd12qyr197tZPmnFk9h8WCzM7Kdz5_50ENCL2_vQNTHf06z7YJoHEuam9Y6OYRThUl6yivncAwRAmOLB8CuGiTJo35i-KwzqnQaW5a9M424gjTjxKjUUJQTmirNTog6svag1tYtC_kkWoCqYXPBGXF5P5sW4rjg7UxKJ6NQdkBY36bg5Ju2j4zx_H0DjVhRYet7DhkeYaYq-yIMjwhn1W5"
              />
            </div>
            <div className="flex justify-between items-baseline mt-4">
              <h3 className="font-headline-md text-headline-md text-primary">Lumina</h3>
              <span className="font-label-caps text-label-caps text-secondary">2022</span>
            </div>
            <p className="font-body-md text-body-md text-secondary mt-2 max-w-md">
              Personal knowledge management through spatial organization rather than hierarchical folders.
            </p>
          </article>
        </div>
      </section>

      {/* Recent Writing Section */}
      <section className="max-w-container-max mx-auto px-gutter py-section-padding border-t border-surface-variant">
        <h2 className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-stack-lg">Recent Writing</h2>
        <div className="flex flex-col space-y-stack-md">
          {/* Writing Item 1 */}
          <a className="group block border-b border-surface-variant pb-8 hover:bg-surface-container-low transition-colors duration-300 -mx-4 px-4" href="/writing">
            <article className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
              <div className="max-w-2xl">
                <h3 className="font-headline-md text-headline-md text-primary group-hover:text-on-tertiary-container transition-colors duration-300">The Architecture of Silence</h3>
                <p className="font-body-md text-body-md text-secondary mt-2">Why modern software needs intentional friction and quiet spaces.</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-label-caps text-label-caps text-secondary bg-surface-container px-3 py-1">Design</span>
                <span className="font-nav-link text-nav-link text-secondary">Oct 12</span>
              </div>
            </article>
          </a>
          {/* Writing Item 2 */}
          <a className="group block border-b border-surface-variant pb-8 hover:bg-surface-container-low transition-colors duration-300 -mx-4 px-4" href="/writing">
            <article className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
              <div className="max-w-2xl">
                <h3 className="font-headline-md text-headline-md text-primary group-hover:text-on-tertiary-container transition-colors duration-300">Beyond the Feed</h3>
                <p className="font-body-md text-body-md text-secondary mt-2">Rethinking chronological consumption in favor of curated gardens.</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-label-caps text-label-caps text-secondary bg-surface-container px-3 py-1">Thoughts</span>
                <span className="font-nav-link text-nav-link text-secondary">Sep 28</span>
              </div>
            </article>
          </a>
          {/* Writing Item 3 */}
          <a className="group block border-b border-surface-variant pb-8 hover:bg-surface-container-low transition-colors duration-300 -mx-4 px-4" href="/writing">
            <article className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
              <div className="max-w-2xl">
                <h3 className="font-headline-md text-headline-md text-primary group-hover:text-on-tertiary-container transition-colors duration-300">Typography as Interface</h3>
                <p className="font-body-md text-body-md text-secondary mt-2">When words are the only UI elements you need.</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-label-caps text-label-caps text-secondary bg-surface-container px-3 py-1">Engineering</span>
                <span className="font-nav-link text-nav-link text-secondary">Aug 04</span>
              </div>
            </article>
          </a>
        </div>
        <div className="mt-12">
          <a className="font-nav-link text-nav-link text-primary border-b border-primary pb-1 hover:text-on-tertiary-container hover:border-on-tertiary-container transition-colors duration-300" href="/writing">View all writing</a>
        </div>
      </section>
    </main>
  );
}
