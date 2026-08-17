'use client';

import HeaderOne from "@/components/headers/headerOne";
import HeroOne from "@/components/sections/heros/heroOne";
import AboutOne from "@/components/sections/about/aboutOne";
import ServicesOne from "@/components/sections/services/servicesOne";
import ProjectsOne from "@/components/sections/projects/projectsOne";
import TeamesOne from "@/components/sections/teames/teamesOne";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <HeaderOne />
      <HeroOne />
      <AboutOne />
      <ServicesOne />
      <ProjectsOne />
      <TeamesOne />
      <Footer />
    </>
  );
}
