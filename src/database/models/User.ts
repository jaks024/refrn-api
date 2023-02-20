import mongoose from 'mongoose';
import { DB_C_USER_NAME } from '../constants';
import { UserSchema } from '../schemas/user';

export const User = mongoose.model('User', UserSchema, DB_C_USER_NAME);
