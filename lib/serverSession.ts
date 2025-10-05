"use server";

import { authOptions } from "@/helpers/authOptions";
import { getServerSession } from "next-auth";

export const serverSession = async () => {
  try {
    return await getServerSession(authOptions);
  } catch (error) {
    return null;
  }
};
