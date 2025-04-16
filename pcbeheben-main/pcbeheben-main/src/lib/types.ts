import { TypedObject } from 'sanity';

export type Blog = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  keywords: string[];
  content: TypedObject[];
};
