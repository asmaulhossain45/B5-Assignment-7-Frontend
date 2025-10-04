export const PostStatus = {
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
  ARCHIVED: "ARCHIVED",
};

export type PostStatus = (typeof PostStatus)[keyof typeof PostStatus];
