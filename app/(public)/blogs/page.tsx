import BlogCard from "@/components/cards/BlogCard";
import { baseApi } from "@/config/baseApi";
import { RevalidateTag } from "@/config/enums";
import { TBlog } from "@/types/TBlog";

const BlogsPage = async () => {
  const res = await fetch(`${baseApi}/public/blogs`, {
    next: {
      tags: [RevalidateTag.BLOG],
    },
  });

  const { data: blogs } = await res.json();

  return (
    <section>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog: TBlog, index: number) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </ul>
    </section>
  );
};

export default BlogsPage;
