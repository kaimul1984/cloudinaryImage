import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  _id: string;
  title: string;
  image: string;
};

async function getAllPost() {
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });
  if (!res.ok) return notFound();
  return res.json();
}

export default async function Posts() {
  const posts = await getAllPost();
  console.log(posts);
  return (
    <div>
      {posts.map((post: Props) => (
        <div key={post._id}>
          <li>{post.title}</li>
          {post.image && (
            <div>
              <Image src={post.image} alt="man" width={300} height={200} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
