import { Collection } from '../../database/models/Collection';
import { CollectionDto, CollectionIdentifierTree } from './types';

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

export const updateCollectionSubCollection = async (
  collectionId: string,
  subCollectionIds: string[],
) => {
  const updatedCollection = await Collection.findByIdAndUpdate(collectionId, {
    $set: {
      subCollectionIds: subCollectionIds,
    },
  });
  return updatedCollection;
};

export const deleteCollection = async (collectionId: string) => {
  const deletedCollection = await Collection.findByIdAndDelete(collectionId);
  return deletedCollection;
};

export const createCollection = async (collectionDto: CollectionDto) => {
  const newCollection = await Collection.create(collectionDto);
  console.log(newCollection);
  if (collectionDto.parentId.length > 0) {
    await Collection.findByIdAndUpdate(collectionDto.parentId, {
      $push: { subCollectionIds: newCollection._id },
    });
  }
  return { id: newCollection._id };
};

export const getAllCollections = async () => {
  const allCollections = await Collection.find();
  console.log(allCollections);
  if (allCollections.length === 0) {
    return null;
  }
  return allCollections;
};

export const GetCollectionTree = async (
  collectionId: string,
): Promise<CollectionIdentifierTree> => {
  const collection = await Collection.findById(collectionId);
  if (collection === null) {
    return {
      id: '',
      name: '',
      imageIdsCount: 0,
      subCollections: [],
    };
  }
  const subCollection = await Promise.all(
    collection.subCollectionIds.map((id) => {
      return GetCollectionTree(id);
    }),
  );

  return {
    id: collection?.id,
    name: collection.name ? collection.name : '',
    imageIdsCount: collection.imageIds ? collection.imageIds.length : -1,
    subCollections: subCollection.filter((c) => c.id.length > 0),
  };
};

export const GetSubCollections = async (collectionId: string) => {
  const collection = await Collection.findById(collectionId);
  if (collection === null) {
    return [];
  }
  const subCollection = await Promise.all(
    collection.subCollectionIds.map(async (id) => {
      return await Collection.findById(id);
    }),
  );
  return subCollection;
};
