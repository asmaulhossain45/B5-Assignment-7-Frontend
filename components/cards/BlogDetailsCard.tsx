import defaultImage from "@/public/default_image.jpg";
import { TBlog } from "@/types/TBlog";
import Image from "next/image";

type Props = {
  blog: TBlog;
};

const BlogDetailsCard = ({ blog }: Props) => {
  return (
    <article className="space-y-4">
      <Image
        src={blog?.thumb || defaultImage}
        alt={blog.title}
        height={400}
        width={400}
        className="w-full rounded-lg aspect-video object-cover bg-card"
      />

      <h2 className="text-2xl font-bold font-primary">{blog.title}</h2>

      <h4 className="text-lg">{blog.excerpt}</h4>

      <p>{blog.content}</p>
    </article>
  );
};

export default BlogDetailsCard;
