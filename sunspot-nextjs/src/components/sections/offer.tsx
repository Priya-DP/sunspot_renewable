'use client';

import {
  GroundMountedIcon,
  RooftopSolarIcon,
  SolarPanelIcon,
  SolarPowerPlantIcon,
} from "@/components/svg";
import SectionTitle from "../ui/sectionTitle";

const offerItems = [
  {
    icon: <SolarPowerPlantIcon />,
    title: "Solar Power Plant",
    desc: "Complete EPC solution for Utility Scale Power Plants",
  },
  {
    icon: <RooftopSolarIcon />,
    title: "Rooftop Solar",
    desc: "Residential & Commercial Rooftop Solutions",
  },
  {
    icon: <GroundMountedIcon />,
    title: "Ground Mounted Solar",
    desc: "High Capacity Ground Installed Solar Panels",
  },
  {
    icon: <SolarPanelIcon />,
    title: "Solar PV Modules",
    desc: "Premium High Efficiency PV Modules",
  },
];

const Offer = () => {
  return (
    <section className="offer-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <SectionTitle>
            <SectionTitle.SubTitle>What We Offer</SectionTitle.SubTitle>
            <SectionTitle.Title>High Efficiency Solar Solutions</SectionTitle.Title>
          </SectionTitle>
        </div>
        <div className="row g-4">
          {offerItems.map((item, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6">
              <div className="offer-card-items text-center">
                <div className="icon mb-3">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
