import mongoose, { Schema, Document, Model } from "mongoose";

export interface IWriting extends Document {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  publishedAt: Date;
  imageUrl: string;
  imageAlt: string;
  featured: boolean;
  content: string;
}

const WritingSchema = new Schema<IWriting>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    category: { type: String, required: true },
    publishedAt: { type: Date, required: true },
    imageUrl: { type: String, default: "" },
    imageAlt: { type: String, default: "" },
    featured: { type: Boolean, default: false },
    content: { type: String, default: "" },
  },
  { timestamps: true }
);

const Writing: Model<IWriting> =
  mongoose.models.Writing ||
  mongoose.model<IWriting>("Writing", WritingSchema);

export default Writing;
