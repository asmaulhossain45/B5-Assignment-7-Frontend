import { timeAgo } from "@/lib/timeAgo";
import { cn } from "@/lib/utils";
import DefaultImage from "@/public/default_image.jpg";
import { TBlog } from "@/types/TBlog";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  blog: TBlog;
};

const BlogCard = ({ blog }: Props) => {
  console.log("Blog:", blog);
  return (
    <div className={cn("group border bg-card rounded-xl p-4 space-y-2")}>
      <Image
        src={blog.thumb || DefaultImage}
        alt={blog.title || "Blog Image"}
        width={200}
        height={200}
        className={cn(
          "aspect-video w-full object-cover rounded-lg",
          "group-hover:grayscale-50 transition-all duration-300"
        )}
      />

      <div className="flex items-center justify-between gap-4 border-b pb-1">
        <h5 className="text-sm">Category</h5>
        <span className="text-sm">{timeAgo(blog.publishedAt)}</span>
      </div>

      <Link
        href={`/blogs/${blog.slug}`}
        className="font-primary text-2xl hover:text-primary font-semibold line-clamp-2 transition-colors duration-300"
      >
        {blog.title}
      </Link>

      <p className="text-foreground text-sm line-clamp-3">{blog.excerpt}</p>

      <div className="flex items-center justify-between gap-4">
        <span className="text-sm">Views: {blog?.views || 0}</span>

        <Link href={`/blogs/${blog.slug}`}>
          <Button variant={"default"} className="text-white">
            Read More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
