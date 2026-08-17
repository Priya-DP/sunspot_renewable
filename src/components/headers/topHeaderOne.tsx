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
              <Link to="tel:9094179527">91-9094179527/9103545543 </Link>
            </li>
          </ul>
          <div className="top-right">
            <div className="social-icon d-flex align-items-center">
              <span>Follow Us:</span>
              <Link to="https://www.facebook.com/share/1Ha3ETEW8A/">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link to="https://www.instagram.com/sunspot_solar_?utm_source=qr&igsh=MTZwZmdmbTB3eDlzcA==">
                <i className="fab fa-instagram" />
              </Link>
              <Link to="https://youtube.com/@solarpasangachennai?si=gG0QLcdYN5VY4eWe">
                <i className="fa-brands fa-youtube" />
              </Link>
              <Link to="https://www.linkedin.com/company/sunspot-solar/">
                <i className="fab fa-linkedin-in" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeaderOne;
