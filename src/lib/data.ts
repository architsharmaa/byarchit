import dbConnect from "./mongodb";
import SiteConfig, { ISiteConfig } from "./models/SiteConfig";
import Build, { IBuild } from "./models/Build";
import Writing, { IWriting } from "./models/Writing";
import NowPageModel, { INowPage } from "./models/NowPage";
import AboutPageModel, { IAboutPage } from "./models/AboutPage";

// ── Site Config ──────────────────────────────────────────────

export async function getSiteConfig(): Promise<ISiteConfig | null> {
  await dbConnect();
  const config = await SiteConfig.findOne().lean<ISiteConfig>();
  return config ? JSON.parse(JSON.stringify(config)) : null;
}

// ── Builds ───────────────────────────────────────────────────

export async function getFeaturedBuilds(): Promise<IBuild[]> {
  await dbConnect();
  const builds = await Build.find({ featured: true })
    .sort({ displayOrder: 1 })
    .lean<IBuild[]>();
  return JSON.parse(JSON.stringify(builds));
}

export async function getAllBuilds(): Promise<IBuild[]> {
  await dbConnect();
  const builds = await Build.find()
    .sort({ displayOrder: 1 })
    .lean<IBuild[]>();
  return JSON.parse(JSON.stringify(builds));
}

export async function getBuildById(id: string): Promise<IBuild | null> {
  await dbConnect();
  const build = await Build.findById(id).lean<IBuild>();
  return build ? JSON.parse(JSON.stringify(build)) : null;
}

export async function getBuildBySlug(slug: string): Promise<IBuild | null> {
  await dbConnect();
  const build = await Build.findOne({ slug }).lean<IBuild>();
  return build ? JSON.parse(JSON.stringify(build)) : null;
}

// ── Writing ──────────────────────────────────────────────────

export async function getFeaturedWriting(): Promise<IWriting | null> {
  await dbConnect();
  const writing = await Writing.findOne({ featured: true })
    .sort({ publishedAt: -1 })
    .lean<IWriting>();
  return writing ? JSON.parse(JSON.stringify(writing)) : null;
}

export async function getRecentWritings(limit: number = 10): Promise<IWriting[]> {
  await dbConnect();
  const writings = await Writing.find({ featured: { $ne: true } })
    .sort({ publishedAt: -1 })
    .limit(limit)
    .lean<IWriting[]>();
  return JSON.parse(JSON.stringify(writings));
}

export async function getAllWritings(): Promise<IWriting[]> {
  await dbConnect();
  const writings = await Writing.find()
    .sort({ publishedAt: -1 })
    .lean<IWriting[]>();
  return JSON.parse(JSON.stringify(writings));
}

export async function getWritingById(id: string): Promise<IWriting | null> {
  await dbConnect();
  const writing = await Writing.findById(id).lean<IWriting>();
  return writing ? JSON.parse(JSON.stringify(writing)) : null;
}

export async function getWritingBySlug(slug: string): Promise<IWriting | null> {
  await dbConnect();
  const writing = await Writing.findOne({ slug }).lean<IWriting>();
  return writing ? JSON.parse(JSON.stringify(writing)) : null;
}

// ── Now Page ─────────────────────────────────────────────────

export async function getNowPage(): Promise<INowPage | null> {
  await dbConnect();
  const page = await NowPageModel.findOne().lean<INowPage>();
  return page ? JSON.parse(JSON.stringify(page)) : null;
}

// ── About Page ───────────────────────────────────────────────

export async function getAboutPage(): Promise<IAboutPage | null> {
  await dbConnect();
  const page = await AboutPageModel.findOne().lean<IAboutPage>();
  return page ? JSON.parse(JSON.stringify(page)) : null;
}

// ── Global Site Data Wrapper ─────────────────────────────────

export async function getSiteData() {
  const [config, featuredBuilds, builds, featuredWriting, writings, now, about] = await Promise.all([
    getSiteConfig(),
    getFeaturedBuilds(),
    getAllBuilds(),
    getFeaturedWriting(),
    getAllWritings(),
    getNowPage(),
    getAboutPage(),
  ]);

  return {
    config,
    featuredBuilds,
    builds,
    featuredWriting,
    writings,
    now,
    about,
  };
}
