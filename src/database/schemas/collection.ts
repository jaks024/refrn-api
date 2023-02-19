import { Schema } from 'mongoose';

export const collectionSchema = new Schema({
  name: String,
  description: String,
  imageIds: [String],
  cover: String,
});
