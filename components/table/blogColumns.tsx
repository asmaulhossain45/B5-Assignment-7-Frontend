"use client";

import { TBlog } from "@/types/TBlog";
import { ColumnDef } from "@tanstack/react-table";
import { EditIcon, EyeIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const blogColumns: ColumnDef<TBlog>[] = [
  {
    accessorKey: "createdAt",
    header: () => (
      <>
        <span>Created Date</span>
        <br />
        <span className="text-xs text-muted-foreground">Published At</span>
      </>
    ),
    cell: ({ row }) => {
      const createdAt = new Date(row.original?.createdAt);
      const publishedAt = new Date(row.original?.publishedAt);

      return (
        <>
          <span>{createdAt.toDateString()}</span>
          <br />
          <span className="text-xs text-muted-foreground">
            {publishedAt && publishedAt.toDateString()}
          </span>
        </>
      );
    },
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const blogTitle = row.original?.title;
      const blogThumb = row.original?.thumb;

      return (
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={blogThumb} />
            <AvatarFallback>{blogTitle?.[0]}</AvatarFallback>
          </Avatar>

          <span>{blogTitle}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "action",
    header: "Actions",
    meta: { className: "text-center" },
    cell: ({ row }) => {
      const blog = row.original;

      return (
        <div className="flex items-center gap-2 justify-center">
          <EyeIcon size={20} />
          <Link href={`/dashboard/blogs/${blog.slug}`}>
            <EditIcon size={20} />
          </Link>
          <Trash2Icon size={20} className="text-destructive" />
        </div>
      );
    },
  },
];
