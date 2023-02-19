import { Collection } from '../../database/models/Collection';
import { CollectionDto } from './types';

export const getCollection = async (collectionId: string) => {
  const collection = await Collection.findById(collectionId);
  return collection;
};

export const updateCollection = async (
  collectionId: string,
  collectionDto: CollectionDto,
) => {
  const updatedCollection = await Collection.findOneAndUpdate(
    { _id: collectionId },
    collectionDto,
  );
  return updatedCollection;
};

export const deleteCollection = async (collectionId: string) => {
  const deletedCollection = await Collection.findByIdAndDelete(collectionId);
  return deletedCollection;
};

export const createCollection = async (collectionDto: CollectionDto) => {
  const newCollection = await Collection.create(collectionDto);
  console.log(newCollection);
  return { id: newCollection._id };
};
