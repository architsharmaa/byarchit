import mongoose, { Schema, Document, Model } from "mongoose";

export interface ISocialLink {
  platform: string;
  url: string;
}

export interface ISiteConfig extends Document {
  heroHeading: string;
  heroSubtext: string;
  heroImageUrl: string;
  heroImageAlt: string;
  contactEmail: string;
  socialLinks: ISocialLink[];
}

const SocialLinkSchema = new Schema<ISocialLink>(
  {
    platform: { type: String, required: true },
    url: { type: String, required: true },
  },
  { _id: false }
);

const SiteConfigSchema = new Schema<ISiteConfig>(
  {
    heroHeading: { type: String, required: true },
    heroSubtext: { type: String, required: true },
    heroImageUrl: { type: String, required: true },
    heroImageAlt: { type: String, default: "" },
    contactEmail: { type: String, default: "" },
    socialLinks: { type: [SocialLinkSchema], default: [] },
  },
  { timestamps: true }
);

const SiteConfig: Model<ISiteConfig> =
  mongoose.models.SiteConfig ||
  mongoose.model<ISiteConfig>("SiteConfig", SiteConfigSchema);

export default SiteConfig;
