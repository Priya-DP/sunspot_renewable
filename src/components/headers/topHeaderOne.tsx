import { Link } from "react-router-dom";

const TopHeaderOne = ({
  wrapperClass,
  className,
}: {
  wrapperClass?: string;
  className?: string;
}) => {
  return (
    <div className={`header-top-section fix ${className}`}>
      <div className="container-fluid">
        <div className={`header-top-wrapper ${wrapperClass}`}>
          <ul className="contact-list">
            <li>
              <i className="far fa-envelope" />
              <Link to="mailto:sunspotengineering@gmail.com" className="link">
                sunspotengineering@gmail.com{" "}
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-phone-volume" />
              <Link to="tel:9094179527">91-9094179527/9103 </Link>
            </li>
          </ul>
          <div className="top-right">
            <div className="social-icon d-flex align-items-center">
              <span>Follow Us:</span>
              <Link to="#">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link to="#">
                <i className="fa-brands fa-x-twitter" />
              </Link>
              <Link to="#">
                <i className="fa-brands fa-linkedin-in" />
              </Link>
              <Link to="#">
                <i className="fa-brands fa-youtube" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeaderOne;
