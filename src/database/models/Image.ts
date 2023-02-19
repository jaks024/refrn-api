import mongoose from 'mongoose';
import { DB_C_IMAGE_NAME } from '../constants';
import { ImageSchema } from '../schemas/image';

export const Image = mongoose.model('Image', ImageSchema, DB_C_IMAGE_NAME);
