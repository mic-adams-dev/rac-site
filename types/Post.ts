import { PortableTextBlock } from "sanity";

export type Post = {
  _id: string;
  _createdAt: string;
  name: string;
  author: string;
  category: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
};
