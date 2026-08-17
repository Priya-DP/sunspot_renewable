'use client';

import Link from "next/link";
import { PricingPlanDataType } from "@/db/pricingData";

interface PriceCardProps {
  plan: PricingPlanDataType;
}

const PriceCard = ({ plan }: PriceCardProps) => {
  return (
    <div className="pricing-card-items">
      <div className="pricing-header">
        <div className="icon">
          <i className="fa-solid fa-solar-panel" />
        </div>
        <div className="content">
          <h3>{plan.title}</h3>
          <p>{plan.subtitle}</p>
        </div>
      </div>
      <div className="price flex-wrap gap-2">
        <h2>
          ${plan.price}<span>/Monthly</span>
        </h2>
      </div>
      <div className="pricing-body">
        <ul className="pricing-feature">
          {plan.features.map((feature, i) => (
            <li key={i} className={feature.active ? "" : "off font-semibold"}>
              <i className={feature.active ? "fa-solid fa-check" : "fa-solid fa-xmark"} />
              {feature.text}
            </li>
          ))}
        </ul>
        <div className="pricing-button">
          <p>Up to 10 users + 1.99 per user</p>
          <Link href={plan.buttonLink || "/contact"} className="pricing-btn mt-4">
            <span>
              {plan.buttonText}
              <i className="fa-solid fa-arrow-right-long" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;