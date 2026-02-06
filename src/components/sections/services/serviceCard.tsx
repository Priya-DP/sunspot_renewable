import { ServiceDataType } from "@/db/serviceOneData";
import { Link } from "react-router-dom";

const ServiceCard = ({
  service,
  className,
}: {
  service: ServiceDataType;
  className?: string;
}) => {
  const { icon } = service;

  return (
    <div className={`service-box-items ${className ?? ""}`}>
      <div className="icon">
        {typeof icon === "string" ? (
          // ✅ image icon
          <img src={icon} alt={`${service.title} icon`} />
        ) : (
          // ✅ svg component
          (() => {
            const Icon = icon;
            return <Icon width={64} height={64} />;
          })()
        )}
      </div>

      <div className="content">
        <h4>
          <Link to={service.link}>{service.title}</Link>
        </h4>
        <p>{service.description}</p>
        <Link to={service.link} className="theme-btn-2 mt-3">
          Read More
          <i className="fa-solid fa-arrow-right-long" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
