import { Schema } from 'mongoose';

export const ImageSchema = new Schema(
  {
    url: String,
    name: String,
    description: String,
    sourceName: String,
    sourceUrl: String,
    tags: [String],
    transforms: [String],
  },
  {
    timestamps: true,
  },
);
