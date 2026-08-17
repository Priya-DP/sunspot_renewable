import { useEffect, useState } from "react";
import SectionTitle from "@/components/ui/sectionTitle";
import AboutRoundedTextVideoPopup from "./aboutRoundedTextVideoPopup";
import { Link } from "react-router-dom";
import { fetchAboutContent } from "@/lib/api";

interface AboutType {
  sectionSubtitle: string;
  mainHeading: string;
  description: string;
  aboutImage1: string;
  aboutImage2: string;
  experienceYears: string;
  reliabilityTitle: string;
  reliabilityDesc: string;
  supportTitle: string;
  supportDesc: string;
}

const defaultAbout: AboutType = {
  sectionSubtitle: "About Us",
  mainHeading: "Welcome To Sunspot Renewable Energy System",
  description: "SUNSPOT Renewable Engineering is backed by a highly qualified team of engineers, designers, and certified project managers. With years of industry experience, our team delivers reliable solar solutions that build trust and long-term value for our clients.",
  aboutImage1: "/img/about/about3.jpeg",
  aboutImage2: "/img/about/about1.jpg",
  experienceYears: "60+",
  reliabilityTitle: "Reliability and Performance",
  reliabilityDesc: "Proven solar solutions delivering consistent, high-efficiency performance.",
  supportTitle: "BrightSun Support",
  supportDesc: "Complete support from installation to after-sales service.",
};

const AboutOne = () => {
  const [about, setAbout] = useState<AboutType>(defaultAbout);

  const loadContent = () => {
    fetchAboutContent().then((data) => {
      if (data) {
        setAbout((prev) => ({
          ...prev,
          ...data,
          aboutImage1: data.aboutImage1 || prev.aboutImage1,
          aboutImage2: data.aboutImage2 || prev.aboutImage2,
        }));
      }
    });
  };

  useEffect(() => {
    loadContent();
    const interval = setInterval(loadContent, 3000);
    return () => clearInterval(interval);
  }, []);

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
                      <span className="count">{about.experienceYears ? String(about.experienceYears).replace('+', '') : '60'}</span>+
                    </h3>
                  </div>
                </div>
                <AboutRoundedTextVideoPopup />
                <div
                  className="about-image-1 bg-cover wow slideLeft"
                  data-delay=".3"
                  style={{ backgroundImage: `url(${about.aboutImage1 || '/img/about/about3.jpeg'})` }}
                >
                  <div className="about-image-2 wow slideUp" data-delay=".5">
                    <img src={about.aboutImage2 || '/img/about/about1.jpg'} alt="about-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="about-content">
                <SectionTitle>
                  <SectionTitle.SubTitle>
                    {about.sectionSubtitle}
                  </SectionTitle.SubTitle>
                  <SectionTitle.Title>
                    {" "}
                    {about.mainHeading}
                  </SectionTitle.Title>
                </SectionTitle>
                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                  {about.description}
                </p>
                <div className="about-icon-items">
                  <div className="icon-items wow slideUp" data-delay=".7">
                    <div className="icon">
                      <img src="/img/about/icon-2.svg" alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>{about.reliabilityTitle}</h4>
                      <p>{about.reliabilityDesc}</p>
                    </div>
                  </div>
                  <div className="icon-items wow slideUp" data-delay=".9">
                    <div className="icon">
                      <img src="/img/about/icon-3.svg" alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>{about.supportTitle}</h4>
                      <p>{about.supportDesc}</p>
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
