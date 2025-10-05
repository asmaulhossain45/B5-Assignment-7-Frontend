import { TProject } from "@/types/TProject";
import {
  CalendarDaysIcon,
  CalendarRangeIcon,
  GithubIcon,
  GlobeIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PageProps = {
  project: TProject;
};

const ProjectDetailsCard = ({ project }: PageProps) => {
  return (
    <article className="space-y-4">
      <Image
        src={project?.thumb}
        alt={project?.title}
        width={400}
        height={400}
        className="w-full rounded-lg aspect-video object-cover bg-card"
      />

      <div>
        <h2 className="text-2xl font-bold font-primary">{project?.title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border p-4 bg-card rounded-lg">
          <h5 className="flex items-center gap-2">
            <strong className="flex items-center gap-2">
              <CalendarDaysIcon size={16} /> Start Date:
            </strong>
            {project.startDate ? (
              <span>
                {new Date(project.startDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            ) : (
              <span className="text-info">-</span>
            )}
          </h5>

          <h5 className="flex items-center gap-2">
            <strong className="flex items-center gap-2">
              <CalendarRangeIcon size={16} /> End Date:
            </strong>
            {project.endDate ? (
              <span>
                {new Date(project.endDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            ) : (
              <span className="text-info">Ongoing</span>
            )}
          </h5>
        </div>

        <div className="border p-4 bg-card rounded-lg">
          <h5 className="flex items-center gap-2">
            <strong className="flex items-center gap-2">
              <GithubIcon size={16} /> Repo URL:
            </strong>
            {project.repoUrl ? (
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-info hover:underline"
              >
                See the code
              </Link>
            ) : (
              <span className="text-info">Not Available</span>
            )}
          </h5>

          <h5 className="flex items-center gap-2">
            <strong className="flex items-center gap-2">
              <GlobeIcon size={16} /> Live URL:
            </strong>
            {project.liveUrl ? (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-info hover:underline"
              >
                Visit the live site
              </Link>
            ) : (
              <span className="text-info">Not Available</span>
            )}
          </h5>
        </div>
      </div>

      <p>{project?.description}</p>
    </article>
  );
};

export default ProjectDetailsCard;
