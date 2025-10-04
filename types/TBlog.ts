export type TBlog = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumb: string;
  category: string;
  status: string;

  views: number;

  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
};
