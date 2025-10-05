import ProjectCard from "@/components/cards/ProjectCard";
import { baseApi } from "@/config/baseApi";
import { RevalidateTag } from "@/config/enums";
import { TProject } from "@/types/TProject";
import { OctagonXIcon } from "lucide-react";

const ProjectsPage = async () => {
  const res = await fetch(`${baseApi}/public/projects`, {
    next: {
      tags: [RevalidateTag.PROJECT],
    },
  });

  const { data: projects } = await res.json();

  return (
    <section className="h-full">
      {projects.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project: TProject, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ul>
      ) : (
        <div className="h-full flex flex-col items-center justify-center gap-6 py-16">
          <OctagonXIcon size={48} />
          <h2 className="text-center text-2xl font-bold">No project found!</h2>
        </div>
      )}
    </section>
  );
};

export default ProjectsPage;
