import mongoose, { Schema, Document, Model } from "mongoose";

export interface INowItem {
  type?: string;
  title: string;
  body: string;
}

export interface INowSection {
  label: string;
  items: INowItem[];
}

export interface INowPage extends Document {
  intro: { heading: string; body: string };
  imageUrl: string;
  imageAlt: string;
  sections: INowSection[];
  updatedAt: Date;
}

const NowItemSchema = new Schema<INowItem>(
  {
    type: { type: String },
    title: { type: String, required: true },
    body: { type: String, required: true },
  },
  { _id: false }
);

const NowSectionSchema = new Schema<INowSection>(
  {
    label: { type: String, required: true },
    items: { type: [NowItemSchema], default: [] },
  },
  { _id: false }
);

const NowPageSchema = new Schema<INowPage>(
  {
    intro: {
      heading: { type: String, required: true },
      body: { type: String, required: true },
    },
    imageUrl: { type: String, default: "" },
    imageAlt: { type: String, default: "" },
    sections: { type: [NowSectionSchema], default: [] },
  },
  { timestamps: true }
);

const NowPage: Model<INowPage> =
  mongoose.models.NowPage ||
  mongoose.model<INowPage>("NowPage", NowPageSchema);

export default NowPage;
