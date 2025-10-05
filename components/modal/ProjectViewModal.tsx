import { TProject } from "@/types/TProject";
import Image from "next/image";
import React from "react";
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
  project: TProject;
};

const ProjectViewModal = ({ children, project }: Props) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <Image
            src={project?.thumb}
            alt={project?.title || "Project Image"}
            width={200}
            height={200}
            className="aspect-video w-full object-cover rounded-lg"
          />

          <DialogTitle>{project?.title}</DialogTitle>
          <DialogDescription className="sr-only">
            {project?.description}
          </DialogDescription>
        </DialogHeader>

        <h5 className="line-clamp-2 text-muted-foreground">
          <strong className="text-foreground">Excerpt:</strong>{" "}
          {project?.liveUrl}
        </h5>
        <h6 className="line-clamp-4 text-muted-foreground">
          <strong className="text-foreground">Content:</strong>{" "}
          {project?.repoUrl}
        </h6>

        <h6 className="line-clamp-4 text-muted-foreground">
          <strong className="text-foreground">Category:</strong>{" "}
          {project?.category}
        </h6>

        <h6 className="line-clamp-4 text-muted-foreground">
          <strong className="text-foreground">Status:</strong> {project?.status}
        </h6>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectViewModal;
