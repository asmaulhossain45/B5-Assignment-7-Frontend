export type TBlog = {
  id: number;
  title: string;
  slug: string;
  status: string;
  excerpt: string;
  content: string;
  thumb: string;

  views: number;

  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
};
