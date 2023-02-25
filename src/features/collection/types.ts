export interface CollectionDto {
  name: string;
  description: string;
  imageIds: string[];
  subCollectionIds: string[];
  cover: string;
  parentId: string;
}

export interface CollectionIdentifierTree {
  id: string;
  name: string;
  imageIdsCount: number;
  subCollections: CollectionIdentifierTree[];
}

export interface DeleteCollectionDto {
  parentId: string;
}
