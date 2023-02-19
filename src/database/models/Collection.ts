import mongoose from 'mongoose';
import { DB_C_COLLECTION_NAME } from '../constants';
import { collectionSchema } from '../schemas/collection';

export const Collection = mongoose.model(
  'Collection',
  collectionSchema,
  DB_C_COLLECTION_NAME,
);
