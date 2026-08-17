'use client';

import Link from "next/link";

const TopHeaderOne = () => {
  return (
    <div className="top-header-section style-2 border-bottom">
      <div className="container-fluid">
        <div className="top-header-wrapper">
          <ul className="contact-list">
            <li>
              <i className="far fa-envelope" />
              <a href="mailto:sunspotengineering@gmail.com" className="link">
                sunspotengineering@gmail.com
              </a>
            </li>
            <li>
              <i className="fa-solid fa-phone-volume" />
              <a href="tel:+919094179527">+91 9094179527/9103545543</a>
            </li>
          </ul>
          <div className="top-right">
            <div className="social-icon d-flex align-items-center">
              <span>Follow Us:</span>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-youtube" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
            <div className="ms-3">
              <Link href="/login" className="theme-btn py-1 px-3" style={{ fontSize: '12px' }}>
                <span>Admin Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeaderOne;
