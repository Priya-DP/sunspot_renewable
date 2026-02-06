import PageTitle from "@/components/sections/pageTitle";
import ProjectsFive from "@/components/sections/projects/projectsFive";
import { projectsFourData } from "@/db/projectsFourData";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <PageTitle title="Project" currentPage="Project" />
      <section className="project-section section-padding fix">
        <div className="container solar-intro-alt text-center mb-5">
          <span className="solar-badge">Our Completed Projects</span>

          <h2 className="solar-heading">
            Delivering Reliable Solar <br /> Across Diverse Environments
          </h2>
        </div>
        <div className="container">
          <div className="row g-4">
            {projectsFourData.map((project) => (
              <div
                key={project.id}
                className="col-xl-4 col-lg-6 col-md-6 wow slideUp"
                data-delay=".3"
              >
                <div className="project-items style-2">
                  <div className="project-image">
                    <img src={project.image} alt="project-img" />
                    <div className="project-content">
                      <p>{project.category}</p>
                      <h4>
                        <Link to={project.link}>{project.title}</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectsFive />
    </>
  );
};

export default Project;
