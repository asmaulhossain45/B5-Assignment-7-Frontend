type Props = {
  params: {
    slug: string;
  };
};

const BlogDetails = async ({ params }: Props) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/blog/${params.slug}`
  );
  const blog = await result.json();
  console.log("Blog:", blog.data);
  return <div>BlogDetails</div>;
};

export default BlogDetails;
