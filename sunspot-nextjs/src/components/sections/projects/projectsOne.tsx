import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { projectsOneData, ProjectDataType } from "@/db/projectsOneData";
import { Autoplay, Pagination } from "swiper/modules";
import ProjectCard from "./projectCard";
import { fetchProjectsContent } from "@/lib/api";

const ProjectsOne = () => {
    const [projects, setProjects] = useState<ProjectDataType[]>(projectsOneData);

    const loadProjects = () => {
        fetchProjectsContent().then((data) => {
            if (data && data.length > 0) {
                setProjects(data);
            }
        });
    };

    useEffect(() => {
        loadProjects();
        const interval = setInterval(loadProjects, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="projects" className="project-section section-padding pt-0 fix">
            <Swiper
                spaceBetween={30}
                speed={2000}
                loop
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: ".dot-1",
                    clickable: true,
                }}
                breakpoints={{
                    1199: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                }}
                modules={[Pagination, Autoplay]}
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <ProjectCard project={project} />
                    </SwiperSlide>
                ))}
                <div className="swiper-dot text-center pt-5">
                    <div className="dot-1" />
                </div>
            </Swiper>
        </section>
    );
};

export default ProjectsOne;