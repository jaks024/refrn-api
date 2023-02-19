import express, { NextFunction, Request, Response } from 'express';
import { respond } from '../../utils/apiUtils';
import {
  createImage,
  deleteImage,
  getAllImagesInCollection,
  getImage,
  updateImage,
} from './imagesController';

export const imageRouter = express.Router();

imageRouter.get(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await getImage(req.params.id);
      respond(res, response);
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
      respond(res, response);
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
      respond(res, response);
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
      respond(res, response);
    } catch (error) {
      next(error);
    }
  },
);

imageRouter.get(
  '/all/:collectionId',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('received delete');
      const response = await getAllImagesInCollection(req.params.collectionId);
      respond(res, response);
    } catch (error) {
      next(error);
    }
  },
);
