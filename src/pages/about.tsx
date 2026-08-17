import { useEffect, useState } from "react";
import AboutTwo from "@/components/sections/about/aboutTwo";
import MarqueTwo from "@/components/sections/marques/marqueTwo";
import PartnersOne from "@/components/sections/partners/partnersOne";
import Offer from "@/components/sections/offer";
import PageTitle from "@/components/sections/pageTitle";
import TeamesThree from "@/components/sections/teames/teamesThree";
import { fetchAboutContent } from "@/lib/api";

const About = () => {
  const [subtitle, setSubtitle] = useState("About Us");

  const loadContent = () => {
    fetchAboutContent().then((data) => {
      if (data && data.sectionSubtitle) {
        setSubtitle(data.sectionSubtitle);
      }
    });
  };

  useEffect(() => {
    loadContent();
    const interval = setInterval(loadContent, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <PageTitle title={subtitle} currentPage={subtitle} />
      <AboutTwo />
      <Offer />
      <MarqueTwo className="section-padding" />
      <TeamesThree />
      <PartnersOne />
    </>
  );
};

export default About;
