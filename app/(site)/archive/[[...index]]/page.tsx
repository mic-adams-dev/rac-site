import { getPosts } from "@/sanity/sanity-utils";
import Link from "next/link";
import { Post } from "@/types/Post";

export default async function Archive() {
  const posts: Post[] = await getPosts();
  const categories = posts
    .map((post: Post) => post.category)
    .flat()
    .filter((category, index, self) =>
      self.indexOf(category) === index);

  return (
    <div className="text-white">
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link href={`/category/${category}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
