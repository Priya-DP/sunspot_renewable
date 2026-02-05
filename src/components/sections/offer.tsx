import {
  RooftopSolarIcon,
  StreetLightIcon,
  WaterHeaterIcon,
  WaterPumpIcon,
  SolarPanelIcon,
  SolarPowerPlantIcon,
} from "@/lib/icons";
import SectionTitle from "../ui/sectionTitle";

const offerItems = [
  {
    id: 1,
    icon: <SolarPowerPlantIcon />,
    title: "Solar Power",
    isActive: false,
    delay: ".2",
  },
  {
    id: 2,
    icon: <RooftopSolarIcon />,
    title: "Solar RoofTop",
    isActive: false,
    delay: ".4",
  },
  {
    id: 3,
    icon: <StreetLightIcon />,
    title: "Solar Street Light",
    isActive: false,
    delay: ".6",
  },
  {
    id: 4,
    icon: <WaterHeaterIcon />,
    title: "Solar Water Heater",
    isActive: false,
    delay: ".8",
  },
  {
    id: 5,
    icon: <WaterPumpIcon />,
    title: "Solar Water Pump",
    isActive: false,
    delay: ".9",
  },
  {
    id: 6,
    icon: <SolarPanelIcon />,
    title: "Solar Pv Module",
    isActive: false,
    delay: ".9",
  },
];

const Offer = () => {
  return (
    <section className="offer-section fix section-bg-2 section-padding">
      <div className="line-shape">
        <img src="/img/team/line-shape.png" alt="shape-img" />
      </div>
      <div className="mask-shape">
        <img src="/img/team/mask-shape.png" alt="shape-img" />
      </div>
      <div className="container">
        <SectionTitle className="text-center">
          <SectionTitle.SubTitle>Our offering</SectionTitle.SubTitle>
          <SectionTitle.Title className="text-white">
            Harnessing The Sun The Bright <br />
            Choice For Future
          </SectionTitle.Title>
        </SectionTitle>
        ``
        <div className="row">
          {offerItems.map((item) => (
            <div
              key={item.id}
              className={`col-xl-2 col-lg-4 col-md-4 col-sm-6 wow slideUp `}
              data-delay={item.delay}
            >
              <div className={`offer-items ${item.isActive ? "active" : ""}`}>
                <div className="shape-top">
                  <img src="/img/shape/offer-top.png" alt="shape-img" />
                </div>
                <div className="shape-bottom">
                  <img src="/img/shape/offer-bottom.png" alt="shape-img" />
                </div>
                <div className="icon">{item.icon}</div>
                <div className="content">
                  <h5>{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
