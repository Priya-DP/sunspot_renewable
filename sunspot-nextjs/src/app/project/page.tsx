'use client';

import HeaderOne from "@/components/headers/headerOne";
import PageTitle from "@/components/sections/pageTitle";
import ProjectsOne from "@/components/sections/projects/projectsOne";
import Footer from "@/components/sections/footer";

export default function ProjectsPage() {
  return (
    <>
      <HeaderOne />
      <PageTitle pageName="Projects" />
      <ProjectsOne />
      <Footer />
    </>
  );
}
