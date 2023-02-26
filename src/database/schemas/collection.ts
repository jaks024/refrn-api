import { Schema } from 'mongoose';

export const collectionSchema = new Schema(
  {
    name: String,
    description: String,
    imageIds: [String],
    subCollectionIds: [String],
    tags: [String],
    cover: String,
  },
  { timestamps: true },
);
