import express, { NextFunction, Request, Response } from 'express';
import { respond } from '../../utils/apiUtils';
import { createUser, deleteUser, getUser, updateUser } from './userController';

export const userRouter = express.Router();

userRouter.get(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await getUser(req.params.id);
      respond(res, response);
    } catch (error) {
      next(error);
    }
  },
);

userRouter.post(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('received psot');
      const response = await createUser(req.body);
      respond(res, response);
    } catch (error) {
      next(error);
    }
  },
);

userRouter.put(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('received update');
      const response = await updateUser(req.params.id, req.body);
      respond(res, response);
    } catch (error) {
      next(error);
    }
  },
);

userRouter.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('received delete');
      const response = await deleteUser(req.params.id);
      respond(res, response);
    } catch (error) {
      next(error);
    }
  },
);
