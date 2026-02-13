import { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenuList from "./mobileNavBar";

const ExtraInfoOffcanvas = () => {
  const [isInfoOpen, setInfoOpen] = useState(false);

  const toggleOffcanvas = () => {
    setInfoOpen(!isInfoOpen);
  };

  return (
    <>
      <div className="sidebar__toggle" onClick={toggleOffcanvas}>
        <i className="fas fa-bars" />
      </div>
      <div className="fix-area">
        <div className={`offcanvas__info ${isInfoOpen ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link to="/">
                    <img src="/img/logo/sunspot_logo.jpg" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={toggleOffcanvas}>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <MobileMenuList />
              <p className="text d-none d-lg-block">
                SUNSPOT RENEWABLE ENGINEERING, a dedicated Solar Plant (EPC)
                Company founded in 2018.Within a short span of time, SUNSPOT has
                earned reputation in all types of solar Technologies. We are one
                of the suppliers of Hi-tech solar products in the market,
                enabled by a strong Installation & Development team
              </p>
              <div className="mobile-menu fix mb-3" />
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link to="#">
                        1,S.No8,Ponneri High Road, Manali New Town, Taminadu-600
                        103
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link to="mailto:info@azent.com">
                        <span className="mailto:sunspotengineering@gmail.com">
                          sunspotengineering@gmail.com
                        </span>
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link to="#">Mod-Sat, 09am -6pm</Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link to="tel:9094179527">+91 9094179527/9103 </Link>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link to="/contact" className="theme-btn text-center">
                    <span>
                      get A Quote
                      <i className="fa-solid fa-arrow-right-long" />
                    </span>
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <Link to="https://www.facebook.com/share/1Ha3ETEW8A/">
                    <i className="fab fa-facebook-f" />
                  </Link>

                  <Link to="https://youtube.com/@solarpasangachennai?si=gG0QLcdYN5VY4eWe">
                    <i className="fab fa-youtube" />
                  </Link>
                  <Link to="https://www.instagram.com/sunspot_solar_?utm_source=qr&igsh=MTZwZmdmbTB3eDlzcA==">
                    <i className="fab fa-instagram" />
                  </Link>
                  <Link to="https://www.linkedin.com/company/sunspot-solar/">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${isInfoOpen ? "overlay-open" : ""}`}
        onClick={toggleOffcanvas}
      />
    </>
  );
};

export default ExtraInfoOffcanvas;
