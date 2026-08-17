'use client';

import { useEffect, useState } from "react";
import SectionTitle from "@/components/ui/sectionTitle";
import { SuMission, SuGoal } from "@/components/svg";
import { fetchAboutContent } from "@/lib/api";

interface AboutType {
  sectionSubtitle: string;
  mainHeading: string;
  description: string;
  aboutImage1: string;
  aboutImage2: string;
  experienceYears: string;
}

const defaultAboutTwo: AboutType = {
  sectionSubtitle: "About Us",
  mainHeading: "Sunspot Renewable Engineering",
  description: "SUNSPOT RENEWABLE ENGINEERING recognized leading solar energy solutions provider, specializing in high efficiency PV module comprehensive EPC solutions. We are working in Institutions, Residential Colonies, Office Buildings using Electricity Scale, Schools, Colleges, Universities, Government Offices, Giant Industries, Film Makers, Hotels, Restaurants, Cinema Halls, Terrace House Etc.",
  aboutImage1: "/img/about/about4.jpeg",
  aboutImage2: "/img/about/about6.jpg",
  experienceYears: "10",
};

const AboutTwo = () => {
  const [about, setAbout] = useState<AboutType>(defaultAboutTwo);

  const loadContent = () => {
    fetchAboutContent().then((data) => {
      if (data) {
        setAbout((prev) => ({
          ...prev,
          sectionSubtitle: data.sectionSubtitle || prev.sectionSubtitle,
          mainHeading: data.mainHeading || prev.mainHeading,
          description: data.description || prev.description,
          aboutImage1: data.aboutImage1 || prev.aboutImage1,
          aboutImage2: data.aboutImage2 || prev.aboutImage2,
          experienceYears: data.experienceYears ? String(data.experienceYears).replace('+', '') : prev.experienceYears,
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
                <div className="circle-shape">
                  <img src="/img/about/circle.png" alt="shape-img" />
                </div>
                <div className="counter-shape float-bob-y">
                  <div className="icon">
                    <img src="/img/about/icon-1.svg" alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3>
                      <span className="count">{about.experienceYears}</span>+
                    </h3>
                    <p>Of Experience</p>
                  </div>
                </div>
                <div
                  className="about-image-1 bg-cover wow slideLeft"
                  data-delay=".3"
                  style={{ backgroundImage: `url(${about.aboutImage1 || '/img/about/about4.jpeg'})` }}
                >
                  <div className="about-image-2 wow slideUp" data-delay=".5">
                    <img src={about.aboutImage2 || '/img/about/about6.jpg'} alt="about-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="about-content">
                <SectionTitle>
                  <SectionTitle.SubTitle>{about.sectionSubtitle}</SectionTitle.SubTitle>
                  <SectionTitle.Title>
                    {about.mainHeading}
                  </SectionTitle.Title>
                </SectionTitle>
                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                  {about.description}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
