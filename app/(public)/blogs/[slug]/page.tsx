import BlogDetailsCard from "@/components/cards/BlogDetailsCard";
import { baseApi } from "@/config/baseApi";
import { TBlog } from "@/types/TBlog";

type PageProps = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = async () => {
  const res = await fetch(`${baseApi}/public/blogs`);
  const data = await res.json();

  return data.data.map((blog: TBlog) => ({
    slug: blog.slug,
  }));
};

const BlogDetailsPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  const res = await fetch(`${baseApi}/public/blogs/${slug}`, {
    next: { tags: [`blog-${slug}`] },
  });

  const { data: blog }: { data: TBlog } = await res.json();

  return (
    <section>
      {blog ? <BlogDetailsCard blog={blog} /> : <div>Blog not found</div>}
    </section>
  );
};

export default BlogDetailsPage;
