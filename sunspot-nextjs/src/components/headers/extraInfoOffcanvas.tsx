'use client';

import { useState } from "react";
import Link from "next/link";
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
                  <Link href="/">
                    <img src="/img/logo/sunspot_logo.jpg" alt="logo-img" style={{ height: '50px', borderRadius: '8px' }} />
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
                Company founded in 2018. Within a short span of time, SUNSPOT has
                earned reputation in all types of solar Technologies.
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
                      <Link href="#">
                        S.No 8, Ponneri High Road, Manali New Town, Tamil Nadu-600 103
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:sunspotengineering@gmail.com">
                        sunspotengineering@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link href="#">Mon-Sat, 09am - 6pm</Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:9094179527">+91 9094179527/9103</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link href="/contact" className="theme-btn text-center">
                    <span>
                      Get A Quote
                      <i className="fa-solid fa-arrow-right-long" />
                    </span>
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="https://www.facebook.com/share/1Ha3ETEW8A/" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="https://youtube.com/@solarpasangachennai?si=gG0QLcdYN5VY4eWe" target="_blank" rel="noreferrer">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="https://www.instagram.com/sunspot_solar_?utm_source=qr&igsh=MTZwZmdmbTB3eDlzcA==" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="https://www.linkedin.com/company/sunspot-solar/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin-in" />
                  </a>
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
