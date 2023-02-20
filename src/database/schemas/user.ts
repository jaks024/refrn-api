import { Schema } from 'mongoose';

export const UserSchema = new Schema(
  {
    username: String,
    email: String,
    googleId: String,
    collectionIds: [String],
  },
  {
    timestamps: true,
  },
);
