// src/db/serviceOneData.ts
import {
  SolarPanelIcon,
  SolarPowerPlantIcon,
  RooftopSolarIcon,
  GroundMountedIcon,
  WaterPumpIcon,
  WaterHeaterIcon,
  StreetLightIcon,
  SolarFencingIcon,
  SolarLanternIcon,
} from "@/components/svg";

export interface ServiceDataType {
  id: number | string;
  title: string;
  description: string;
  icon: React.ComponentType;
  link: string;
  delay: string;
  active?: boolean;
  image?: string;
}

export const serviceOneData: ServiceDataType[] = [
  {
    id: 1,
    title: "Solar PV Modules",
    description: "High efficiency solar modules for reliable power generation",
    icon: SolarPanelIcon,
    link: "/service-details",
    delay: ".3",
  },
  {
    id: 2,
    title: "Solar Power Plant",
    description: "Complete megawatt scale solar power plant solutions",
    icon: SolarPowerPlantIcon,
    link: "/service-details",
    delay: ".5",
    active: true,
  },
  {
    id: 3,
    title: "Solar RoofTop Plant",
    description: "Customized rooftop solar systems for commercial applications",
    icon: RooftopSolarIcon,
    link: "/service-details",
    delay: ".7",
  },
  {
    id: 4,
    title: "Solar Ground Mounted",
    description:
      "Large scale ground mounted solar installations with efficiency",
    icon: GroundMountedIcon,
    link: "/service-details",
    delay: ".9",
  },
  {
    id: 5,
    title: "Solar Water Pump",
    description:
      "Energy efficient solar pumping solutions for agriculture needs",
    icon: WaterPumpIcon,
    link: "/service-details",
    delay: ".3",
  },
  {
    id: 6,
    title: "Solar Water Heater",
    description: "Cost effective solar water heating systems for daily",
    icon: WaterHeaterIcon,
    link: "/service-details",
    delay: ".5",
  },
  {
    id: 7,
    title: "Solar Street Light",
    description: "Standalone solar street lighting systems for public spaces",
    icon: StreetLightIcon,
    link: "/service-details",
    delay: ".7",
  },
  {
    id: 8,
    title: "Solar Fencing",
    description:
      "Solar powered fencing systems for agricultural land protection",
    icon: SolarFencingIcon,
    link: "/service-details",
    delay: ".9",
  },
  {
    id: 9,
    title: "Solar Lanterns",
    description: "Portable solar lanterns providing reliable off grid lighting",
    icon: SolarLanternIcon,
    link: "/service-details",
    delay: ".9",
  },
];
