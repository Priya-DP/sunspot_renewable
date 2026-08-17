'use client';

import Link from "next/link";
import { ServiceDataType } from "@/db/serviceOneData";

interface ServiceCardProps {
  service: ServiceDataType;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { icon, title, description, id, image } = service;
  return (
    <div className="service-card-items">
      <div className="service-image">
        <img src={image || '/img/service/01.jpg'} alt="service-img" />
      </div>
      <div className="service-content">
        <div className="icon">
          {icon ? <img src={icon} alt="icon-img" /> : <i className="fa-solid fa-solar-panel" />}
        </div>
        <h4>
          <Link href="/service">{title}</Link>
        </h4>
        <p>{description}</p>
        <Link href="/service" className="theme-btn">
          <span>
            Read More <i className="fa-solid fa-arrow-right-long" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
