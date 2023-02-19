import { Schema } from 'mongoose';

export const ImageSchema = new Schema(
  {
    url: String,
    name: String,
    description: String,
    source: String,
    tags: [String],
    transforms: [String],
    createdDate: Date,
  },
  {
    timestamps: true,
  },
);
