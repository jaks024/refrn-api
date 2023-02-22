import express, { Request, Response, NextFunction } from 'express';
import { respond } from '../../utils/apiUtils';
import {
  createCollection,
  deleteCollection,
  getAllCollections,
  getCollection,
  GetCollectionTree,
  updateCollection,
} from './collectionsController';

export const collectionRouter = express.Router();

collectionRouter.get(
  '/all',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('called all');
      const response = await getAllCollections();
      respond(res, response);
    } catch (error) {
      next(error);
    }
  },
);

collectionRouter.get(
  '/:id/all',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('called all');
      const response = await GetCollectionTree(req.params.id);
      respond(res, response);
    } catch (error) {
      next(error);
    }
  },
);

collectionRouter.get(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('called get');
      const response = await getCollection(req.params.id);
      respond(res, response);
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
      respond(res, response);
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
      respond(res, response);
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
      respond(res, response);
    } catch (error) {
      next(error);
    }
  },
);
