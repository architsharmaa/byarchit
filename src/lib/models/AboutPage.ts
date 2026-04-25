import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAboutSection {
  label: string;
  type: "prose" | "list";
  paragraphs?: string[];
  items?: string[];
}

export interface IAboutPage extends Document {
  heading: string;
  bio: string;
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
  contactEmail: string;
  sections: IAboutSection[];
  updatedAt: Date;
}

const AboutSectionSchema = new Schema<IAboutSection>(
  {
    label: { type: String, required: true },
    type: { type: String, enum: ["prose", "list"], required: true },
    paragraphs: { type: [String], default: undefined },
    items: { type: [String], default: undefined },
  },
  { _id: false }
);

const AboutPageSchema = new Schema<IAboutPage>(
  {
    heading: { type: String, required: true },
    bio: { type: String, required: true },
    imageUrl: { type: String, default: "" },
    imageAlt: { type: String, default: "" },
    imageCaption: { type: String, default: "" },
    contactEmail: { type: String, default: "" },
    sections: { type: [AboutSectionSchema], default: [] },
  },
  { timestamps: true }
);

const AboutPage: Model<IAboutPage> =
  mongoose.models.AboutPage ||
  mongoose.model<IAboutPage>("AboutPage", AboutPageSchema);

export default AboutPage;
