export interface CollectionDto {
  name: string;
  description: string;
  imageIds: string[];
  subCollectionIds: string[];
  cover: string;
  parentId: string;
}

export interface DeleteCollectionDto {
  parentId: string;
}
