import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBuild extends Document {
  title: string;
  slug: string;
  year: number;
  category: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  techStack: string[];
  linkLabel: string;
  linkUrl: string;
  githubUrl?: string;
  designDocUrl?: string;
  content: string;
  featured: boolean;
  displayOrder: number;
  layout: "asymmetric" | "editorial" | "fullbleed" | "list";
}

const BuildSchema = new Schema<IBuild>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    year: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, default: "" },
    imageAlt: { type: String, default: "" },
    techStack: { type: [String], default: [] },
    linkLabel: { type: String, default: "" },
    linkUrl: { type: String, default: "#" },
    githubUrl: { type: String, default: "" },
    designDocUrl: { type: String, default: "" },
    content: { type: String, default: "" },
    featured: { type: Boolean, default: false },
    displayOrder: { type: Number, default: 0 },
    layout: {
      type: String,
      enum: ["asymmetric", "editorial", "fullbleed", "list"],
      default: "list",
    },
  },
  { timestamps: true }
);

if (mongoose.models.Build) {
  // Clear the cache to ensure new schema fields (like githubUrl) are picked up in HMR
  delete mongoose.models.Build;
}

const Build: Model<IBuild> = mongoose.model<IBuild>("Build", BuildSchema);

export default Build;
