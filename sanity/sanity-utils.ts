import { Post } from "@/types/Post";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getPosts(category?: string): Promise<Post[]> {
  const client = createClient(clientConfig);

  if (typeof category !== "undefined") {
    return await client.fetch(
      groq`*[_type == "post" && category == $category]{
_id,
_createdAt,
name,
author,
category,
"slug": slug.current,
"image": header.asset->url,
url,
}`,
      { category: category }
    )
  }
  return await client.fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      name,
      author,
      category,
      "slug": slug.current,
      "image": header.asset->url,
      url,
    }`
  );
}

export async function getPost(slug: string): Promise<Post> {
  const client = createClient(clientConfig);
  return await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      author,
      category,
      "slug": slug.current,
      "image": header.asset->url,
      url,
      content
    }`,
    { slug }
  );
}

