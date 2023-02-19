import express, { Request, Response, NextFunction } from 'express';
import {
  createCollection,
  deleteCollection,
  getCollection,
  updateCollection,
} from './collectionsController';

export const collectionRouter = express.Router();

collectionRouter.get(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await getCollection(req.params.id);
      res.send(response);
    } catch (error) {
      next(error);
    }
  },
);

collectionRouter.post(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('received psot');
      const response = await createCollection(req.body);
      res.send(response);
    } catch (error) {
      next(error);
    }
  },
);

collectionRouter.put(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('received update');
      const response = await updateCollection(req.params.id, req.body);
      res.send(response);
    } catch (error) {
      next(error);
    }
  },
);

collectionRouter.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('received delete');
      const response = await deleteCollection(req.params.id);
      res.send(response);
    } catch (error) {
      next(error);
    }
  },
);
