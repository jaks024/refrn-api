import { Collection } from '../../database/models/Collection';
import { User } from '../../database/models/User';
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

const deleteAllSubCollections = async (collectionId: string) => {
  const deletedCollection = await Collection.findByIdAndDelete(collectionId);
  if (
    deletedCollection === null ||
    deletedCollection.subCollectionIds.length === 0
  ) {
    return;
  }
  await Promise.all(
    deletedCollection.subCollectionIds.map(async (id) => {
      return deleteAllSubCollections(id);
    }),
  );
};

export const deleteCollection = async (
  collectionId: string,
  parentId: string,
  isParentUser: boolean,
) => {
  const deletedCollection = await Collection.findByIdAndDelete(collectionId);
  if (deletedCollection !== null) {
    await Promise.all(
      deletedCollection.subCollectionIds.map(async (id) => {
        return deleteAllSubCollections(id);
      }),
    );
  }
  if (!isParentUser) {
    await Collection.findByIdAndUpdate(parentId, {
      $pull: { subCollectionIds: collectionId },
    });
  } else {
    await User.findByIdAndUpdate(parentId, {
      $pull: { collectionIds: collectionId },
    });
  }
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
