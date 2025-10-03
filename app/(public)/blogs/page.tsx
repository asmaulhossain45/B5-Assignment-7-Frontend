import BlogCard from "@/components/cards/BlogCard";
import { AppPagintation } from "@/components/common/AppPagintation";
import { baseApi } from "@/config/baseApi";
import { TBlog } from "@/types/TBlog";

const BlogsPage = async () => {
  const res = await fetch(`${baseApi}/public/blogs`, {
    next: {
      tags: ["blog"],
    },
  });

  const result = await res.json();

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {result?.data?.map((blog: TBlog, index: number) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </ul>

      <AppPagintation meta={result.meta} setPage={result.setPage} />
    </div>
  );
};

export default BlogsPage;
