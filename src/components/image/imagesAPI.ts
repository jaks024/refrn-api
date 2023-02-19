import express, { NextFunction, Request, Response } from 'express';
import {
  createImage,
  deleteImage,
  getImage,
  updateImage,
} from './imagesController';

export const imageRouter = express.Router();

imageRouter.get(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await getImage(req.params.id);
      res.send(response);
    } catch (error) {
      next(error);
    }
  },
);

imageRouter.post(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('received psot');
      const response = await createImage(req.body);
      res.send(response);
    } catch (error) {
      next(error);
    }
  },
);

imageRouter.put(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('received update');
      const response = await updateImage(req.params.id, req.body);
      res.send(response);
    } catch (error) {
      next(error);
    }
  },
);

imageRouter.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('received delete');
      const response = await deleteImage(req.params.id);
      res.send(response);
    } catch (error) {
      next(error);
    }
  },
);
