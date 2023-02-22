export interface CollectionDto {
  name: string;
  description: string;
  imageIds: string[];
  subCollectionIds: string[];
  cover: string;
}

export interface CollectionIdentifierTree {
  id: string;
  name: string;
  imageIdsCount: number;
  subCollections: CollectionIdentifierTree[];
}
