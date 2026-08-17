// src/data/servicesData.ts

export interface ServiceContent {
  title: string;
  image: string;
  description: string;
  fullDescription: string;
  benefitsTitle: string;
  benefitsDescription: string;
  benefitsList: string[];
  secondDescription: string;
  thirdDescription: string; // Added third description
  faqType: string;
}

export const servicesData: Record<string, ServiceContent> = {
  "solar-pv-modules": {
    title: "Solar PV Modules",
    image: "/img/project/300KW_KPL_image_1.jpg",
    description:
      "Premium solar panels designed to deliver reliable and efficient power for residential and commercial use.",

    fullDescription:
      "Our solar PV modules are engineered to provide high efficiency and long-term performance. Built with advanced photovoltaic technology, they convert sunlight into electricity with maximum output, even in low-light and high-temperature conditions. These panels are ideal for customers looking for a durable, cost-effective, and future-ready energy solution.",

    benefitsTitle: "Benefits of Solar PV Modules",
    benefitsDescription:
      "Reliable performance and long-term value for your energy needs.",

    benefitsList: [
      "Reduce electricity bills with consistent power generation",
      "High efficiency ensures better output in all weather conditions",
      "Long operational life with performance warranty up to 25 years",
      "Strong and durable design for harsh environmental conditions",
      "Minimal maintenance with dependable performance",
      "Supports eco-friendly and sustainable living",
    ],

    secondDescription:
      "All our solar panels meet international quality standards and undergo strict testing for safety and durability. They are designed to perform efficiently across different climates, ensuring stable energy generation throughout the year.",

    thirdDescription:
      "Choosing our solar PV modules means investing in a reliable and long-lasting energy solution. You benefit from reduced power costs, improved energy independence, and a cleaner, greener future. Our high-efficiency monocrystalline panels deliver 20-30% more energy than conventional options, even in low-light conditions.",

    faqType: "pv",
  },

  "solar-rooftop": {
    title: "Solar Rooftop System",
    image: "/img/project/Bangalore_metro station_1.jpg",
    description:
      "Convert your rooftop into a powerful energy source and significantly cut down your electricity expenses.",

    fullDescription:
      "Our rooftop solar systems are customized to suit your building structure and energy consumption. We carefully design each system to maximize solar generation by analyzing roof orientation, shading, and usage patterns. From consultation and design to installation and approvals, we provide complete end-to-end service.",

    benefitsTitle: "Rooftop Solar Benefits",
    benefitsDescription:
      "Smart energy solution for long-term savings and sustainability.",

    benefitsList: [
      "Save up to 70–90% on electricity bills",
      "Increase property value with solar installation",
      "Avail government subsidies and financial incentives",
      "Low maintenance with long-lasting performance",
      "Protection from rising electricity tariffs",
      "Environment-friendly and reduces carbon footprint",
    ],

    secondDescription:
      "Our experienced team handles the entire installation process quickly and safely, ensuring minimal disruption to your daily routine. We take care of all technical work with precision and attention to detail. From documentation to government approvals, we guide you at every step. Our support with net metering ensures you get maximum savings from your system. With us, the entire process is smooth, transparent, and completely hassle-free.",

    thirdDescription:
      "Rooftop solar is a smart one-time investment that provides long-term financial savings and environmental benefits. It helps you significantly reduce your monthly electricity bills and protects you from rising energy costs. With minimal maintenance, the system delivers reliable performance for decades.",

    faqType: "rooftop",
  },

  "ground-mounted": {
    title: "Ground Mounted Solar System",
    image: "/img/project/ground-mounted.jpg",
    description:
      "High-capacity solar solutions for large land areas and commercial energy requirements.",

    fullDescription:
      "Ground-mounted solar systems are ideal for industries, businesses, and large properties with available land. These systems are installed at optimal angles and orientations to ensure maximum energy generation. They are highly scalable and can be expanded as your energy needs grow.",

    benefitsTitle: "Ground Mount Benefits",
    benefitsDescription:
      "Maximum efficiency and flexibility for large-scale energy generation.",

    benefitsList: [
      "Higher power generation with optimal panel positioning",
      "Easy maintenance due to ground-level access",
      "No dependency on roof structure or limitations",
      "Scalable system design for future expansion",
      "Suitable for commercial and industrial applications",
      "Better airflow improves panel efficiency",
    ],

    secondDescription:
      "Our installation process is carried out with precision to ensure safety and efficiency. We use high-quality materials and proven techniques for reliable performance. Our systems are designed to withstand various environmental conditions. This ensures long-term durability and consistent energy generation.",

    thirdDescription:
      "Ground-mounted solar systems are an ideal choice for businesses and large properties looking to maximize energy production. They are installed with optimal tilt and orientation to ensure higher efficiency and better performance compared to rooftop systems.",

    faqType: "ground",
  },

  "water-pumping": {
    title: "Solar Water Pumping System",
    image: "/img/project/solar_water_heater_100LPA.jpeg",
    description:
      "Reliable and cost-effective water pumping solution powered entirely by solar energy.",

    fullDescription:
      "Solar water pumping systems provide an efficient way to pump water for agricultural and rural applications. These systems operate using solar power, eliminating the need for grid electricity or diesel, and ensuring consistent water supply throughout the day.",

    benefitsTitle: "Solar Pump Benefits",
    benefitsDescription:
      "Cost-saving and dependable water solutions for agriculture and rural use.",

    benefitsList: [
      "Zero electricity or fuel costs after installation",
      "Ideal for remote areas without power supply",
      "Low maintenance and long service life",
      "Reliable water pumping during daylight hours",
      "Government subsidies available for farmers",
      "Eco-friendly alternative to diesel pumps",
    ],

    secondDescription:
      "Our solar water pumping systems are designed to suit a wide range of applications, including borewells, open wells, and irrigation needs. We offer multiple capacity options to match your exact water requirements. Each system is customized to ensure efficient performance based on your location and usage. This helps you get reliable water supply without depending on electricity or fuel.",

    thirdDescription:
      "Solar water pumps provide a cost-effective and dependable solution for farmers and rural users. They help you eliminate ongoing fuel and electricity expenses while ensuring consistent water availability. With low maintenance and long-lasting performance, you can focus more on productivity.",
    faqType: "pump",
  },

  "street-lighting": {
    title: "Solar Street Lighting System",
    image: "/img/project/solar-street-light.jpg",
    description:
      "Energy-efficient lighting solution for streets, parks, and public areas without electricity dependency.",

    fullDescription:
      "Solar street lighting systems are self-sufficient units that provide illumination using solar energy. They are designed to operate automatically from dusk to dawn and are ideal for both urban and rural infrastructure projects.",

    benefitsTitle: "Solar Street Light Benefits",
    benefitsDescription:
      "Efficient, reliable, and cost-free outdoor lighting solution.",

    benefitsList: [
      "No electricity bills or cabling required",
      "Automatic operation with built-in sensors",
      "Quick and easy installation",
      "Long battery life with minimal maintenance",
      "Reliable performance in all weather conditions",
      "Improves safety and visibility in public areas",
    ],

    secondDescription:
      "Our solar street lighting systems are built using high-quality components to ensure durability and long-term performance. They are designed to operate reliably in all weather conditions with minimal maintenance. These systems are ideal for roads, parks, campuses, and residential communities. ",

    thirdDescription:
      "Solar street lighting is a smart, eco-friendly solution for modern infrastructure needs. It helps reduce electricity costs while providing reliable illumination for safety and visibility. With automatic operation and long battery life, it ensures uninterrupted performance. These systems also lower carbon emissions and support sustainable development.",

    faqType: "lighting",
  },
};
