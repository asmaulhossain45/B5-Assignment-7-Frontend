import defaultImage from "@/public/default_image.jpg";
import { TProject } from "@/types/TProject";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  project: TProject;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <li className="group border bg-card rounded-xl overflow-hidden space-y-4 p-4">
      <Image
        src={defaultImage}
        alt={project.title}
        width={200}
        height={200}
        className="aspect-video w-full object-cover rounded-lg"
      />

      <div className="flex items-center justify-between gap-4">
        <div>
          <span className="text-sm text-primary font-semibold">
            {project.category}
          </span>
          <Link
            href={`/projects/${project.slug}`}
            className="block text-2xl font-primary font-bold hover:text-primary transition-colors duration-300"
          >
            {project.title}
          </Link>
        </div>

        <Link href={`/projects/${project.slug}`}>
          <button className="border rounded-full p-2 group-hover:bg-primary transition-all duration-300 hover:rotate-45">
            <ArrowUpRight size={20} />
          </button>
        </Link>
      </div>
    </li>
  );
};

export default ProjectCard;
