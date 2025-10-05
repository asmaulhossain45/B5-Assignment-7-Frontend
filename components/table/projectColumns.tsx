"use client";

import { PostStatus } from "@/config/enums";
import { cn } from "@/lib/utils";
import { TProject } from "@/types/TProject";
import { ColumnDef } from "@tanstack/react-table";
import { EditIcon, EyeIcon, RotateCcwSquare, Trash2Icon } from "lucide-react";
import Link from "next/link";
import DeleteModal from "../modal/DeleteModal";
import ProjectViewModal from "../modal/ProjectViewModal";
import UpdateStatusModal from "../modal/UpdateStatusModal";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const projectColumns: ColumnDef<TProject>[] = [
  {
    accessorKey: "createdAt",
    header: () => (
      <>
        <span>Created Date</span>
        <br />
        <span className="text-xs text-muted-foreground">Updated At</span>
      </>
    ),
    cell: ({ row }) => {
      const createdAt = new Date(row.original?.createdAt);
      const updatedAt = new Date(row.original?.updatedAt);

      return (
        <>
          <span>{createdAt.toDateString()}</span>
          <br />
          <span className="text-xs text-muted-foreground">
            {updatedAt && updatedAt.toDateString()}
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
    cell: ({ row }) => {
      const status = row.original?.status;

      return (
        <span
          className={cn(
            "capitalize",
            status === PostStatus.DRAFT && "text-warning",
            status === PostStatus.PUBLISHED && "text-success",
            status === PostStatus.ARCHIVED && "text-destructive"
          )}
        >
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "views",
    header: "Views",
  },
  {
    accessorKey: "action",
    header: "Actions",
    meta: { className: "text-center" },
    cell: ({ row }) => {
      const project = row.original;

      return (
        <div className="flex items-center gap-2 justify-center">
          <ProjectViewModal project={project}>
            <EyeIcon size={20} />
          </ProjectViewModal>
          <Link href={`/dashboard/blogs/${project.slug}`}>
            <EditIcon size={20} className="text-warning" />
          </Link>
          <UpdateStatusModal<TProject> data={project}>
            <RotateCcwSquare size={20} className="text-success" />
          </UpdateStatusModal>
          <DeleteModal>
            <Trash2Icon size={20} className="text-destructive" />
          </DeleteModal>
        </div>
      );
    },
  },
];
