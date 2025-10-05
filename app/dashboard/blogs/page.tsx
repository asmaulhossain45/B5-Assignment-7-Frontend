import { AppTable } from "@/components/table/AppTable";
import { blogColumns } from "@/components/table/blogColumns";
import { baseApi } from "@/config/baseApi";
import { serverSession } from "@/lib/serverSession";

const ManageBlogsPage = async () => {
  const session = await serverSession();
  const res = await fetch(`${baseApi}/blog`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session?.user?.token}`,
    },
  });
  const result = await res.json();

  return (
    <>
      <AppTable columns={blogColumns} data={result?.data || []} />
    </>
  );
};

export default ManageBlogsPage;
