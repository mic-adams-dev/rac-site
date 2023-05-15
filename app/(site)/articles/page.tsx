import { getPosts } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Articles() {
  const posts = await getPosts();

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-white text-5xl font-extrabold">Articles</h1>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            href={`/posts/${post.slug}`}
            className="border-2 border-gray-400 rounded-sm p-1 grid grid-cols-2 transition hover:scale-105 hover:border-gray-100"
            key={post._id}
          >
            {post.image && (
              <Image
                src={post.image}
                alt={post.name}
                width={750}
                height={300}
                className="object-cover row-span-2 rounded-sm border border-gray-400"
              />
            )}
            <h1 className="text-right text-red-500 text-3xl font-bold">
              {post.name}
            </h1>
            <h1 className="text-right text-white text-xl font-bold">
              {post.author}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}
