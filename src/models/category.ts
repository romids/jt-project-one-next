export enum IdValues {}

export enum CreatedAtValues {}

export enum UpdatedAtValues {}

export enum NameValues {}

export enum DescriptionValues {}

export type CategoryModel = {
  id: number;
  created_at: Date;
  updated_at: Date;
  name: string;
  description: string;
};

export type CategoryModels = CategoryModel[];
