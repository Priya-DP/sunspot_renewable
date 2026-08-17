'use client';

import Link from "next/link";
import { ProjectDataType } from "@/db/projectsOneData";

interface ProjectCardProps {
  project: ProjectDataType;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, image, category } = project;
  return (
    <div className="project-card-items">
      <div className="project-image">
        <img src={image || '/img/project/01.jpg'} alt="project-img" />
        <div className="project-content">
          <span className="sub-title">{category || "Solar Energy"}</span>
          <h3>
            <Link href="/project">{title}</Link>
          </h3>
          <Link href="/project" className="icon">
            <i className="fa-solid fa-arrow-right-long" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;