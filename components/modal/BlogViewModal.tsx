import { TBlog } from "@/types/TBlog";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

type Props = {
  children: React.ReactNode;
  blog: TBlog;
};

const BlogViewModal = ({ children, blog }: Props) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <Image
            src={blog?.thumb}
            alt={blog?.title || "Blog Image"}
            width={200}
            height={200}
            className="aspect-video w-full object-cover rounded-lg"
          />

          <DialogTitle>{blog?.title}</DialogTitle>
          <DialogDescription className="sr-only">
            {blog?.content}
          </DialogDescription>
        </DialogHeader>

        <h5 className="line-clamp-2 text-muted-foreground">
          <strong className="text-foreground">Excerpt:</strong> {blog?.excerpt}
        </h5>
        <h6 className="line-clamp-4 text-muted-foreground">
          <strong className="text-foreground">Content:</strong> {blog?.content}
        </h6>

        <h6 className="line-clamp-4 text-muted-foreground">
          <strong className="text-foreground">Category:</strong>{" "}
          {blog?.category}
        </h6>

        <h6 className="line-clamp-4 text-muted-foreground">
          <strong className="text-foreground">Status:</strong> {blog?.status}
        </h6>
      </DialogContent>
    </Dialog>
  );
};

export default BlogViewModal;
