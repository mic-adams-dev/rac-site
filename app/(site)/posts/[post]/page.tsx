import { getPost } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { post: string };
};
export default async function Post({ params }: Props) {
  const slug = params.post;
  const post = await getPost(slug);

  return (
    <div className="max-w-5xl mx-auto py-10">
      <div className="flex justify-between">
        <div>
          <h1 className="text-white font-extrabold text-5xl font-sans">
            {post.name}
          </h1>
          <h1 className="py-5
                         text-red-500 font-bold text-3xl font-sans">
            {post.author}
          </h1>
        </div>
        {post.image && (
          <Image
            src={post.image}
            alt={post.name}
            width={2000}
            height={2000}
            className="md:max-w-lg md:w-auto object-scale-down w-48"
          />
        )}
      </div>
      <div className="font-fancy py-10 text-white">
        <PortableText value={post.content} />
      </div>
    </div>
  );
}
