import BlogForm from "@/components/forms/BlogForm";
import { baseApi } from "@/config/baseApi";
import { authOptions } from "@/helpers/authOptions";
import { getServerSession } from "next-auth";

type Props = {
  params: {
    slug: string;
  };
};

const BlogEditPage = async ({ params }: Props) => {
  const { slug } = await params;
  const session = await getServerSession(authOptions);
  const result = await fetch(`${baseApi}/blog/${slug}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.user?.token}`,
    },
  });

  const { data: blog } = await result.json();

  return (
    <div className="h-full flex items-center justify-center">
      <BlogForm initialBlog={blog} buttonText="Update" />
    </div>
  );
};

export default BlogEditPage;
