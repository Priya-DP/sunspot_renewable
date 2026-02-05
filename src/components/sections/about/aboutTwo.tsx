import SectionTitle from "@/components/ui/sectionTitle";
// import { Link } from "react-router-dom";
import { SuMission, SuGoal } from "@/lib/icons";

const AboutTwo = () => {
  return (
    <section
      id="about"
      className="about-section section-padding fix bg-cover"
      style={{ backgroundImage: 'url("/img/service/service-bg-2.jpg")' }}
    >
      <div className="container">
        <div className="about-wrapper style-2">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-image-items">
                <div></div>
                <div className="circle-shape">
                  <img src="/img/about/circle.png" alt="shape-img" />
                </div>
                <div className="counter-shape float-bob-y">
                  <div className="icon">
                    <img src="/img/about/icon-1.svg" alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3>
                      <span className="count">10</span>Years
                    </h3>
                    <p>Of Experience</p>
                  </div>
                </div>
                <div
                  className="about-image-1 bg-cover wow slideLeft"
                  data-delay=".3"
                  style={{ backgroundImage: 'url("/img/about/03.png")' }}
                >
                  <div className="about-image-2 wow slideUp" data-delay=".5">
                    <img src="/img/about/04.jpg" alt="about-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="about-content">
                <SectionTitle>
                  <SectionTitle.SubTitle>About Us</SectionTitle.SubTitle>
                  <SectionTitle.Title>
                    Sunspot Renewable Engineering
                  </SectionTitle.Title>
                </SectionTitle>
                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                  SUNSPOT RENEWABLE ENGINEERING recognized leading solar energy
                  solutions provider, specializing in high efficiency PV module
                  comprehensive EPC solutions. We are working in
                  Institutions,Residential Colonies,Office Buildings using
                  Electricity Scale,Schools,Colleges, Universities, Government
                  Offices, Giant Industries, Film Makers, Hotels, Restaurants,
                  Cinema Halls, Terrace House Etc.
                </p>
                <div className="about-icon-items">
                  <div className="icon-items wow slideUp" data-delay=".7">
                    <div className="icon">
                      <SuMission />
                    </div>
                    <div className="content">
                      <h4>Our Mission</h4>
                      <p>
                        Our mission is to ensure that solar energy becomes an
                        affordable source even for the masses by managing our
                        own costs so that the savings pass to you–our valued
                        customers.
                      </p>
                    </div>
                  </div>
                  <div className="icon-items wow slideUp" data-delay=".9">
                    <div className="icon">
                      <SuGoal />
                    </div>
                    <div className="content">
                      <h4>Our Goal</h4>
                      <p>
                        Our aim is to build for valued relationships with our
                        customers and provide the same level of dedication and
                        customization to all our projects
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="about-author">
                  <div className="about-button wow slideUp" data-delay=".5">
                    <Link to="/about" className="theme-btn">
                      Explore More
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                  <div className="author-image wow slideUp" data-delay=".7">
                    <img src="/img/about/author.png" alt="author-img" />
                    <div className="content">
                      <h6>Ronald Richards</h6>
                      <p>Co, Founder</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
