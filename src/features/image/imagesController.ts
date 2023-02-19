import { Collection } from '../../database/models/Collection';
import { Image } from '../../database/models/Image';
import { ImageDto } from './types';

export const getImage = async (imageId: string) => {
  const image = await Image.findById(imageId);
  return image;
};

export const updateImage = async (imageId: string, imageDto: ImageDto) => {
  const updatedImage = await Image.findOneAndUpdate({ _id: imageId }, imageDto);
  return updatedImage;
};

export const deleteImage = async (imageId: string) => {
  const deletedImage = await Image.findByIdAndDelete(imageId);
  return deletedImage;
};

export const createImage = async (imageDto: ImageDto) => {
  const newImage = await Image.create(imageDto);
  console.log(newImage);
  return { id: newImage._id };
};

export const getAllImagesInCollection = async (collectionId: string) => {
  const collection = await Collection.findById(collectionId);
  const images = await Image.find({ _id: { $in: collection?.imageIds } });
  console.log(images);
  if (images.length === 0) {
    return null;
  }
  return images;
};
