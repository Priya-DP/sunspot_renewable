import SectionTitle from "@/components/ui/sectionTitle";
import AboutRoundedTextVideoPopup from "./aboutRoundedTextVideoPopup";
import { Link } from "react-router-dom";

const AboutOne = () => {
  return (
    <section id="about" className="about-section section-padding fix">
      <div className="container">
        <div className="about-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-image-items">
                <div className="counter-shape float-bob-y">
                  <div className="icon">
                    <img src="/img/about/icon-1.svg" alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3>
                      <span className="count">651</span>+
                    </h3>
                  </div>
                </div>
                <AboutRoundedTextVideoPopup />
                <div
                  className="about-image-1 bg-cover wow slideLeft"
                  data-delay=".3"
                  style={{ backgroundImage: 'url("/img/about/01.jpg")' }}
                >
                  <div className="about-image-2 wow slideUp" data-delay=".5">
                    <img src="/img/about/02.jpg" alt="about-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="about-content">
                <SectionTitle>
                  <SectionTitle.SubTitle>
                    About Ussadasads
                  </SectionTitle.SubTitle>
                  <SectionTitle.Title>
                    {" "}
                    Welcome To Sunspot Renewable Energy System
                  </SectionTitle.Title>
                </SectionTitle>
                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                  <span className="font-extrabold text-black">
                    SUNSPOT Renewable Engineering
                  </span>{" "}
                  is backed by a highly qualified team of engineers, designers,
                  and certified project managers. With years of industry
                  experience, our team delivers reliable solar solutions that
                  build trust and long-term value for our clients.
                </p>
                <div className="about-icon-items">
                  <div className="icon-items wow slideUp" data-delay=".7">
                    <div className="icon">
                      <img src="/img/about/icon-2.svg" alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>Reliability and Performance</h4>
                      <p>
                        Proven solar solutions delivering consistent,
                        high-efficiency performance.
                      </p>
                    </div>
                  </div>
                  <div className="icon-items wow slideUp" data-delay=".9">
                    <div className="icon">
                      <img src="/img/about/icon-3.svg" alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>BrightSun Support</h4>
                      <p>
                        Complete support from installation to after-sales
                        service.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-author">
                  <div className="about-button wow slideUp" data-delay=".5">
                    <Link to="/about" className="theme-btn">
                      Explore More
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                  <div className="author-image wow slideUp" data-delay=".7">
                    <img src="/img/about/author.png" alt="author-img" />
                    <div className="content">
                      <h6>
                        MR.M KARUNAKARAN <span>B.E.,MBA.,</span>
                      </h6>
                      <p>Managing Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
