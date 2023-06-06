import { getPosts } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Archive() {
  const posts = await getPosts();

  return (
    <div>
      <ul className="text-white">
        <li>
          <Link href="/marx">Marx</Link>
        </li>
        <li>
          <Link href="/misc">Misc</Link>
        </li>
      </ul>
    </div>
  );
}
