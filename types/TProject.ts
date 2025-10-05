import { PostStatus } from "@/config/enums";

export type TProject = {
  id: number;
  title: string;
  slug: string;
  status: PostStatus;
  category: string;
  description: string;
  thumb: string;

  liveUrl: string;
  repoUrl: string;

  startDate: Date;
  endDate: Date;

  createdAt: Date;
  updatedAt: Date;
};
