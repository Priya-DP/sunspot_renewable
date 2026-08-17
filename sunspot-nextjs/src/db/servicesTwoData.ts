import { ServiceDataType } from "./serviceOneData";
import {
  SolarPanelIcon,
  SolarPowerPlantIcon,
  RooftopSolarIcon,
  GroundMountedIcon,
} from "@/components/svg";

export const servicesTwoData: ServiceDataType[] = [
  {
    id: 1,
    icon: SolarPanelIcon,
    title: "Solar PV Modules",
    description: "High efficiency solar modules for reliable power generation",
    link: "/service-details",
    delay: ".3",
  },
  {
    id: 2,
    icon: SolarPowerPlantIcon,
    title: "Solar Power Plant",
    description: "Complete megawatt scale solar power plant solutions",
    link: "/service-details",
    delay: ".5",
    active: true,
  },
  {
    id: 3,
    icon: RooftopSolarIcon,
    title: "Solar RoofTop Plant",
    description: "Customized rooftop solar systems for commercial applications",
    link: "/service-details",
    delay: ".7",
  },
  {
    id: 4,
    icon: GroundMountedIcon,
    title: "Solar Ground Mounted",
    description:
      "Large scale ground mounted solar installations with efficiency",
    link: "/service-details",
    delay: ".9",
  },
];
