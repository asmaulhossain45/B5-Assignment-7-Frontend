export const RevalidateTag = {
  BLOG: "blog",
  PROJECT: "project",
};

export type RevalidateTag = (typeof RevalidateTag)[keyof typeof RevalidateTag];

export const PostStatus = {
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
  ARCHIVED: "ARCHIVED",
};

export type PostStatus = (typeof PostStatus)[keyof typeof PostStatus];
