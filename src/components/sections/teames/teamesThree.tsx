import { teamMembersThreeData } from "@/db/teamMembersThreeData";
import TeamCardTwo from "./teamCardTwo";
import SectionTitle from "@/components/ui/sectionTitle";
import { Link } from "react-router-dom";

const TeamesThree = () => {
  return (
    <section
      id="team"
      className="team-section-3 fix section-padding section-bg"
    >
      <div className="line-shape">
        <img src="/img/team/line-shape.png" alt="shape-img" />
      </div>
      <div className="mask-shape">
        <img src="/img/team/mask-shape-2.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="section-title-area">
          <SectionTitle>
            <SectionTitle.SubTitle>Our MD & Team Members</SectionTitle.SubTitle>
            <SectionTitle.Title>Our Managing Director</SectionTitle.Title>
          </SectionTitle>
          <Link to="/team" className="theme-btn wow slideUp" data-delay=".5">
            All Member
            <i className="fa-solid fa-arrow-right-long" />
          </Link>
        </div>

        {/* Managing Director Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div
              className="managing-director-card wow fadeInUp"
              data-delay=".3"
            >
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-5">
                  <div className="md-image">
                    <img src="/img/team/hover-1.png" alt="Managing Director" />
                    <div className="experience-badge">
                      <span className="number">10+</span>
                      <span className="text">Years Experience</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-7 mt-4 mt-md-0">
                  <div className="md-content">
                    <div className="designation-badge">Managing Director</div>
                    <h2 className="md-name">MR.M KARUNAKARAN B.E.,MBA.,</h2>
                    <p className="md-bio">
                      <span>Mr.Karunakaran M B.E.,MBA.,</span> has been
                      associated with solar industry for over 10 years. He is a
                      dynamic and dedicated personality. This is his vision and
                      hard work that Sunspot Solar Company has achieved this
                      success and goal. This company is fastest growing company
                      because of him. He believes in providing best service to
                      customers and make them happy. Under his leadership this
                      company has achieved all the goals. He has successfully
                      executed large number of solar panel projects in
                      commercial industry. He also believes in team work and
                      make sure all the teams are doing their best.
                    </p>

                    <p className="md-bio">
                      He has proven track record of successfully managing a
                      company. Also having excellent leadership, communication
                      and organizational skills. He can successfully build and
                      manage diverse group of employees, achieve company growth
                      projections and targets in a dynamic and competitive
                      environment, manage operations and adopt processes within
                      time and budgets.
                    </p>

                    <div className="md-highlights">
                      <div className="highlight-item">
                        <i className="fa-solid fa-award"></i>
                        <span>Industry Leader Award 2023</span>
                      </div>
                      <div className="highlight-item">
                        <i className="fa-solid fa-certificate"></i>
                        <span>Certified Solar Expert</span>
                      </div>
                      <div className="highlight-item">
                        <i className="fa-solid fa-globe"></i>
                        <span>500+ Projects Completed</span>
                      </div>
                    </div>
                    <div className="md-social">
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="row">
          <div>
            <SectionTitle>
              <SectionTitle.SubTitle>Team Members</SectionTitle.SubTitle>
              <SectionTitle.Title>
                Our Dedicated Team <br /> Members
              </SectionTitle.Title>
            </SectionTitle>
          </div>
          {teamMembersThreeData.slice(0, 6).map((member) => (
            <div
              key={member.id}
              className={`col-xl-3 col-lg-4 col-md-6 wow slideUp`}
              data-delay={member.delay}
            >
              <TeamCardTwo member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamesThree;
