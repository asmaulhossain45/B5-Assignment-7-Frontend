"use server";

import { baseApi } from "@/config/baseApi";
import { authOptions } from "@/helpers/authOptions";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export const createBlog = async (data: Record<string, any>) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.token) throw new Error("User not authenticated");

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        if (value instanceof File) formData.append(key, value);
        else formData.append(key, String(value));
      }
    });

    const res = await fetch(`${baseApi}/blog`, {
      method: "POST",
      body: formData,
      headers: { Authorization: `Bearer ${session.user.token}` },
    });

    if (!res.ok) throw new Error((await res.text()) || "Failed to create blog");
    revalidateTag("blog");
    return await res.json();
  } catch (error: any) {
    return { success: false, message: error.message || "Something went wrong" };
  }
};
