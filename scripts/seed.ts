import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

// ── Inline schemas (mirrors src/lib/models but standalone for script) ──

const SocialLinkSchema = new mongoose.Schema(
  { platform: String, url: String },
  { _id: false }
);

const SiteConfigSchema = new mongoose.Schema(
  {
    heroHeading: String,
    heroSubtext: String,
    heroImageUrl: String,
    heroImageAlt: String,
    contactEmail: String,
    socialLinks: [SocialLinkSchema],
  },
  { timestamps: true }
);

const BuildSchema = new mongoose.Schema(
  {
    title: String,
    slug: { type: String, unique: true },
    year: Number,
    category: String,
    description: String,
    imageUrl: String,
    imageAlt: String,
    techStack: [String],
    linkLabel: String,
    linkUrl: String,
    featured: Boolean,
    displayOrder: Number,
    layout: String,
  },
  { timestamps: true }
);

const WritingSchema = new mongoose.Schema(
  {
    title: String,
    slug: { type: String, unique: true },
    excerpt: String,
    category: String,
    publishedAt: Date,
    imageUrl: String,
    imageAlt: String,
    featured: Boolean,
    content: String,
  },
  { timestamps: true }
);

const NowItemSchema = new mongoose.Schema(
  { type: String, title: String, body: String },
  { _id: false }
);
const NowSectionSchema = new mongoose.Schema(
  { label: String, items: [NowItemSchema] },
  { _id: false }
);
const NowPageSchema = new mongoose.Schema(
  {
    intro: { heading: String, body: String },
    imageUrl: String,
    imageAlt: String,
    sections: [NowSectionSchema],
  },
  { timestamps: true }
);

const AboutSectionSchema = new mongoose.Schema(
  {
    label: String,
    type: String,
    paragraphs: [String],
    items: [String],
  },
  { _id: false }
);
const AboutPageSchema = new mongoose.Schema(
  {
    heading: String,
    bio: String,
    imageUrl: String,
    imageAlt: String,
    imageCaption: String,
    contactEmail: String,
    sections: [AboutSectionSchema],
  },
  { timestamps: true }
);

// ── Models ──────────────────────────────────────────────────

const SiteConfig =
  mongoose.models.SiteConfig ||
  mongoose.model("SiteConfig", SiteConfigSchema);
const Build =
  mongoose.models.Build || mongoose.model("Build", BuildSchema);
const Writing =
  mongoose.models.Writing || mongoose.model("Writing", WritingSchema);
const NowPage =
  mongoose.models.NowPage || mongoose.model("NowPage", NowPageSchema);
const AboutPage =
  mongoose.models.AboutPage ||
  mongoose.model("AboutPage", AboutPageSchema);

// ── Seed Data ───────────────────────────────────────────────

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://archit04sharma_db_user:YQr2cIokdOAgponT@cluster0.kicby6l.mongodb.net/?appName=Cluster0";

async function seed() {
  const start = Date.now();
  console.log("\n🚀 Starting database seed process...");

  // Mask password for safe logging
  const maskedUri = MONGODB_URI.replace(/:([^@]+)@/, ":****@");
  console.log(`📡 Target URI: ${maskedUri}`);

  try {
    console.log("🔗 Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected successfully!");

    // Clear existing data (DISABLED to preserve manual edits)
    /*
    console.log("\n🗑️  Cleaning up collections...");
    const clearResults = await Promise.allSettled([
      SiteConfig.deleteMany({}),
      Build.deleteMany({}),
      Writing.deleteMany({}),
      NowPage.deleteMany({}),
      AboutPage.deleteMany({}),
    ]);
    */

    console.log("Seeding initial data if collections are empty...");
    if (await Build.countDocuments() === 0) {
      await Build.insertMany(builds);
      console.log("   - Seeded Builds");
    }
    if (await Writing.countDocuments() === 0) {
      await Writing.insertMany(writings);
      console.log("   - Seeded Writings");
    }
    if (await SiteConfig.countDocuments() === 0) {
      await SiteConfig.create(siteConfig);
      console.log("   - Seeded SiteConfig");
    }
    if (await NowPage.countDocuments() === 0) {
      await NowPage.create(nowData);
      console.log("   - Seeded NowPage");
    }
    if (await AboutPage.countDocuments() === 0) {
      await AboutPage.create(aboutData);
      console.log("   - Seeded AboutPage");
    }

    // ── Site Config ──────────────────────────────────────────

    console.log("\n📝 Seeding SiteConfig...");
    await SiteConfig.create({
      heroHeading: "Archit Sharma",
      heroSubtext:
        "Things I build. Things I think. A collection of thoughts on software, design, philosophy and the quiet spaces in between.",
      heroImageUrl: "./images/cover.jpeg",
      heroImageAlt: "Brutalist architecture",
      contactEmail: "contact@example.com",
      socialLinks: [
        { platform: "Twitter", url: "#" },
        { platform: "GitHub", url: "#" },
        { platform: "RSS", url: "#" },
      ],
    });
    console.log("   ✅ SiteConfig seeded.");

    // ── Builds ───────────────────────────────────────────────

    console.log("\n🏗️  Seeding Builds...");
    const builds = await Build.insertMany([
      // Featured builds (shown on homepage)
      {
        title: "Overture",
        slug: "overture",
        year: 2023,
        category: "Software",
        description:
          "A minimalist writing environment designed to remove friction between thought and text.",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAkOrmG1pzllsfIXBd0qU7Ulxs_rIRH0fadA8DcK9FCeS8RUGQaSytZze6ru3gG5e-aqTVlHeYNG1bzkLMCfEmpXRzcQmExpyms4m-enN1tu_tbOSoUGECtC0iP7GWMbJGYgW5efk6gMSc5U2vWnJ3FsE_NZyO6JxTDAFZZfh6rVpYdfJCRWG_wHiWSy3OFjJJj4X6TcdFuK-vh5ecAY8heMc7UrguWKHrLzacftQ34998wXa52I-WKpNeaMeGxdP5LVbcq2MvqN1pn",
        imageAlt: "Project preview",
        techStack: [],
        linkLabel: "",
        linkUrl: "#",
        featured: true,
        displayOrder: 1,
        layout: "asymmetric",
      },
      {
        title: "Lumina",
        slug: "lumina",
        year: 2022,
        category: "Software",
        description:
          "Personal knowledge management through spatial organization rather than hierarchical folders.",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCCCc0qpXxMiTltWNUvtIXXvZPLm56HQZcQFpAKt7ZTXHi8ZyE6nbbhmGsd12qyr197tZPmnFk9h8WCzM7Kdz5_50ENCL2_vQNTHf06z7YJoHEuam9Y6OYRThUl6yivncAwRAmOLB8CuGiTJo35i-KwzqnQaW5a9M424gjTjxKjUUJQTmirNTog6svag1tYtC_kkWoCqYXPBGXF5P5sW4rjg7UxKJ6NQdkBY36bg5Ju2j4zx_H0DjVhRYet7DhkeYaYq-yIMjwhn1W5",
        imageAlt: "Project preview",
        techStack: [],
        linkLabel: "",
        linkUrl: "#",
        featured: true,
        displayOrder: 2,
        layout: "asymmetric",
      },
      // Full builds page items
      {
        title: "E-Ink Desk Display",
        slug: "e-ink-desk-display",
        year: 2023,
        category: "Hardware",
        description:
          "A distraction-free, low-power display built on a Raspberry Pi Zero. Designed to pull in daily agendas and focus metrics without the glare of an LCD screen. The enclosure is milled from a single block of oxidized aluminum.",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBWwhtejylOb8aaqgf1jtTaZD6IzCuUNM8u7HJ3BmRc-Lk3vnIX-dvfCVtWZMU4TBLTTe_XTLbCt_10p_aCLVLh4TlIx5EGP9NwjR1i5s59nWsfzeHjIERXZC9V52nYOLBzIRaFeFqM5Sk-WXfwppi2Ue9Shy-TI5G82sPw2SzcuUeuoI772grRRIcj2sYAl-O_86SuZ4kU6Ds75LezNkq9DsX4jiSkpHpuUZpFUa_5u5cgo-ORQbMekYhpegLmqGZ1HCvg6kNQHX7b",
        imageAlt: "Hardware Prototype",
        techStack: ["Python", "C++", "CAD"],
        linkLabel: "Read Case Study",
        linkUrl: "#",
        featured: false,
        displayOrder: 3,
        layout: "asymmetric",
      },
      {
        title: "Lexicon CLI",
        slug: "lexicon-cli",
        year: 2022,
        category: "Software",
        description:
          "A blazingly fast, rust-based command-line tool for semantic code search. Built to navigate massive monorepos with natural language queries rather than rigid regex patterns.",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuABZ-pZhYms9TZeLlAlIBU1Y-aqWpKlgPLWYqibUb9l2_pjSyUjqoMV1838c-GBeZsBH2zOvzX0yXgdeUtQMctiwbiAnIXUYM4xzNo3ExyZP-AmPPXf7OhaHJPVrDluqATtXImFtSY4R82DOHyS2Xf3OIuJqqMY1AwkYLjeQsSpbRJO71LMOA-6TtztqTWwYZ334RwsuZJoQGrUBszw05yzFkTB5ze7iS8zG5aP2cZrNQkDdYKeZV2AiHJvXprbU3beV6l9A1-j2T4N",
        imageAlt: "Code Screenshot",
        techStack: ["Rust"],
        linkLabel: "View Repository",
        linkUrl: "#",
        featured: false,
        displayOrder: 4,
        layout: "editorial",
      },
      {
        title: "Topology of Thought",
        slug: "topology-of-thought",
        year: 2024,
        category: "Data Viz",
        description:
          "An experimental visualization engine that maps personal journal entries into navigable 3D landscapes based on semantic similarity and emotional resonance.",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDfw3-XK9Bl_BR2WNq4UfqCho1lHLdcYxU-CIoPiggJUI5QtTVOhLGjm4A6xFGjHJurj-wcA5Xt2WxZrm0smYARULBO9eYpwaTMajgPJ07fk2z754xPUnMzwAy3gSu_nxfOoGu9J7CPXAURjdRBeAM31b28Rv5NsD3B_wUp-wF4INNOLuhPSH2ULhUa5RSJ0ljp2LHMcyvW2MmuOaHF09vYBsnkN1rBg34-U2EbRd4aL0gHtSfwqFCgG7_hdmMIxxR7SfF1y9u3YGvv",
        imageAlt: "Abstract Data Visualization",
        techStack: ["Three.js"],
        linkLabel: "Explore Interactive Canvas",
        linkUrl: "#",
        featured: false,
        displayOrder: 5,
        layout: "fullbleed",
      },
      // List items
      {
        title: "Minimalist RSS Reader",
        slug: "minimalist-rss-reader",
        year: 2021,
        category: "Software",
        description:
          "A terminal-based feed reader prioritizing typography and reading flow over features.",
        imageUrl: "",
        imageAlt: "",
        techStack: ["Go"],
        linkLabel: "",
        linkUrl: "#",
        featured: false,
        displayOrder: 6,
        layout: "list",
      },
      {
        title: "Typeface Anatomy Tool",
        slug: "typeface-anatomy-tool",
        year: 2023,
        category: "Software",
        description:
          "Interactive web experiment breaking down structural differences in classic serif fonts.",
        imageUrl: "",
        imageAlt: "",
        techStack: ["Three.js"],
        linkLabel: "",
        linkUrl: "#",
        featured: false,
        displayOrder: 7,
        layout: "list",
      },
      {
        title: "Mechanical Keyboard PCB",
        slug: "mechanical-keyboard-pcb",
        year: 2020,
        category: "Hardware",
        description:
          "Custom 40% ortholinear layout designed for minimal finger travel and optimal vim usage.",
        imageUrl: "",
        imageAlt: "",
        techStack: ["KiCad"],
        linkLabel: "",
        linkUrl: "#",
        featured: false,
        displayOrder: 8,
        layout: "list",
      },
    ]);
    console.log(`   ✅ Seeded ${builds.length} builds.`);

    // ── Writings ─────────────────────────────────────────────

    console.log("\n✍️  Seeding Writings...");
    const writings = await Writing.insertMany([
      // Featured
      {
        title: "The Architecture of Silence in UI",
        slug: "architecture-of-silence-in-ui",
        excerpt:
          "Exploring how the deliberate use of negative space and absence of visual noise can create more profound digital experiences, drawing parallels from minimalist architecture.",
        category: "Essay",
        publishedAt: new Date("2023-10-24"),
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCMlVSREqUhZV-oobW5BaNUp0yaNZTUHkAc2WRkqWDi3IikKpR8ztNC-KSXd7aaq9_T2qNLy2A356u2Y-ZJfcumzZIe5Wv3fKnRU2d3dp_3vhwuExEneq3tC9tbfXyZY__-_c_V2jj0ruIFlZLMqdqu03SbjSOUN2DAr9pZnBX7d7OpkEJTarwoY7fh-r6Aq3F8y52bHTaDfBlE-SxDka2u0_z_bw85EQmSHGx4c5AerLKeGUyMf2m6v3M3Jpqp08nkvWAvxzP1CV2D",
        imageAlt: "Featured image",
        featured: true,
        content: "",
      },
      // Recent (non-featured, shown on homepage)
      {
        title: "The Architecture of Silence",
        slug: "architecture-of-silence",
        excerpt:
          "Why modern software needs intentional friction and quiet spaces.",
        category: "Design",
        publishedAt: new Date("2023-10-12"),
        imageUrl: "",
        imageAlt: "",
        featured: false,
        content: "",
      },
      {
        title: "Beyond the Feed",
        slug: "beyond-the-feed",
        excerpt:
          "Rethinking chronological consumption in favor of curated gardens.",
        category: "Thoughts",
        publishedAt: new Date("2023-09-28"),
        imageUrl: "",
        imageAlt: "",
        featured: false,
        content: "",
      },
      {
        title: "Typography as Interface",
        slug: "typography-as-interface",
        excerpt: "When words are the only UI elements you need.",
        category: "Engineering",
        publishedAt: new Date("2023-08-04"),
        imageUrl: "",
        imageAlt: "",
        featured: false,
        content: "",
      },
      // Additional writings for /writing page
      {
        title: "Beyond the Glass: Tactility in Screens",
        slug: "beyond-the-glass",
        excerpt:
          "Why modern interfaces are returning to skeuomorphic hints and textural depth after a decade of extreme flatness.",
        category: "Design",
        publishedAt: new Date("2023-09-12"),
        imageUrl: "",
        imageAlt: "",
        featured: false,
        content: "",
      },
      {
        title: "Systems vs. Sensibility",
        slug: "systems-vs-sensibility",
        excerpt:
          "Finding the balance between rigorous design systems and the need for organic, intuitive creative decisions.",
        category: "Design",
        publishedAt: new Date("2023-08-05"),
        imageUrl: "",
        imageAlt: "",
        featured: false,
        content: "",
      },
      {
        title: "The Typographic Grid as a Blueprint",
        slug: "typographic-grid-blueprint",
        excerpt:
          "How print layout traditions can inform more structurally sound and readable web experiences.",
        category: "Engineering",
        publishedAt: new Date("2023-07-18"),
        imageUrl: "",
        imageAlt: "",
        featured: false,
        content: "",
      },
      {
        title: "Pacing the User Journey",
        slug: "pacing-user-journey",
        excerpt:
          "Treating interaction design like a narrative arc—understanding when to speed up the user and when to slow them down.",
        category: "Design",
        publishedAt: new Date("2023-06-22"),
        imageUrl: "",
        imageAlt: "",
        featured: false,
        content: "",
      },
    ]);
    console.log(`   ✅ Seeded ${writings.length} writings.`);

    // ── Now Page ─────────────────────────────────────────────

    console.log("\n📌 Seeding NowPage...");
    await NowPage.create({
      intro: {
        heading: "What I'm doing now.",
        body: "This is a declaration of intent. A snapshot of my current priorities, the projects actively in flight, and the ideas taking up residence in my mind. Inspired by Derek Sivers' concept, this page is updated rhythmically, prioritizing deep focus over continuous broadcasting.",
      },
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBAJInqXSC8ncLlhOVclliBCYwt4mr74I_a_p-eKXfcLgnEYR_Ppq1eexJE1k0DhlWn6e-Ywri8Mq04O-FaPpQ4Nm4POwO-umfGwhS9GEKrO9oJUQTAtM9oJGsUpi2ecpFhvpCGp4QxrEDiVMTIYdxqHMqmW7Zl53c1azFzwy7FtUyAlxSHYfN1jkILcTkrAPeJoBQXCKCo2_1P9j4O-VV0Gu7H_QXA1K6h5Z5XF5yc63db_ij6o_-g_cAXa9MDJUlx4TWXt0IT-qNk",
      imageAlt:
        "Abstract architectural photography of shadows playing across a textured concrete wall, soft warm sunlight, minimalist composition",
      sections: [
        {
          label: "Current Work",
          items: [
            {
              title: "Refining the Editorial System",
              body: "Building a custom publishing platform that merges the typographic rigor of print journalism with the fluidity of modern web architecture. Currently exploring how to implement asymmetrical grid structures procedurally.",
            },
            {
              title: 'Essays on "Quiet Luxury" in Software',
              body: "Drafting a series of long-form pieces examining why enterprise software feels so hostile, and how applying principles from interior architecture can yield calmer, more focused digital environments.",
            },
          ],
        },
        {
          label: "Reading & Research",
          items: [
            {
              type: "Book",
              title: "The Architecture of Happiness",
              body: "Alain de Botton's exploration of how our built environment affects our psychology. Re-reading this to extract principles applicable to UI design.",
            },
            {
              type: "Paper",
              title: "Local-First Software",
              body: "Revisiting Ink & Switch's manifesto on owning your data and reducing reliance on cloud infrastructure for personal tooling.",
            },
          ],
        },
        {
          label: "Habits",
          items: [
            {
              title: "Morning Pages",
              body: "750 words strictly longhand before engaging with any screens. An exercise in clearing mental static rather than producing polished prose.",
            },
            {
              title: "Digital Twilight",
              body: "Enforcing a hard disconnect from network-connected devices after 8 PM. Returning to physical books and ambient music to wind down.",
            },
          ],
        },
      ],
    });
    console.log("   ✅ NowPage seeded.");

    // ── About Page ───────────────────────────────────────────

    console.log("\n👤 Seeding AboutPage...");
    await AboutPage.create({
      heading: "About",
      bio: "I am an engineer and a writer, exploring the intersection of complex systems, human behavior, and the philosophical underpinnings of modern technology. My work is an attempt to map the territories between what we build and why we build it.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB5KAEmem4ptYxm1Dd0pl_0dH2KD37-xAA0mgjBrDdONGk-seEcNSuukG1M0aJ0rjWLfkqhnCI-BwbOTZ3bXqrEjmU0hmH4qbJj9RJyApt3-nNbPqA-A011dINdWUMJqtjbkayjzxIGmBvlo4jYXS8xpuHZ5hbP7p_xPQSjQwPx4Bh19VkJiVkQ0CdKRgJsw77Nh7ohrCz4X9_-M_5TpOvujJdy95cIZXrCiQg9svgeD_Z5bHK_eJLKt7oxNYIGJeVQRkgfCBkR1-Mc",
      imageAlt: "A quiet workspace",
      imageCaption: "A space for thought.",
      contactEmail: "contact@example.com",
      sections: [
        {
          label: "Philosophy",
          type: "prose",
          paragraphs: [
            "I believe in the quiet luxury of well-crafted tools. Software should not just solve a problem; it should respect the user's time and attention. I am drawn to minimalism not as an aesthetic choice, but as an operational necessity in a noisy world.",
            "The tension between ambition and contentment is a recurring theme in my writing. I am interested in how we construct meaning through our daily habits, our chosen professions, and the artifacts we leave behind.",
          ],
        },
        {
          label: "Current Focus",
          type: "list",
          items: [
            "Developing robust architectures for distributed systems.",
            "Writing essays on the cognitive load of modern interfaces.",
            "Studying stoic texts and their application to software engineering.",
          ],
        },
      ],
    });
    console.log("   ✅ AboutPage seeded.");

    const duration = ((Date.now() - start) / 1000).toFixed(2);
    console.log(`\n✨ Done! Database fully populated in ${duration}s. ✨\n`);

  } catch (error) {
    console.error("\n💥 SEED PROCESS FAILED:");
    if (error instanceof Error) {
      console.error(`   Message: ${error.message}`);
      // Special hint for auth errors
      if (error.message.includes("auth")) {
        console.warn("   💡 Hint: Check your MONGODB_URI password in .env.local and ensure your IP is whitelisted in MongoDB Atlas.");
      }
    } else {
      console.error("   An unknown error occurred:", error);
    }
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB.");
    process.exit(0);
  }
}

seed();
