import ProjectDetailsCard from "@/components/cards/ProjectDetailsCard";
import { baseApi } from "@/config/baseApi";
import { TProject } from "@/types/TProject";

type PageProps = {
  params: {
    slug: string;
  };
};

const ProjectDetailsPage = async ({ params }: PageProps) => {
  const { slug } = params;
  const res = await fetch(`${baseApi}/public/projects/${slug}`);

  const { data: project }: { data: TProject } = await res.json();

  return (
    <section>
      <ProjectDetailsCard project={project} />
    </section>
  );
};

export default ProjectDetailsPage;
