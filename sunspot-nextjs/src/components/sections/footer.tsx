'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchContactContent } from "@/lib/api";

const Footer = () => {
  const [contact, setContact] = useState({
    phone: "+91-9094179527/9103",
    email: "sunspotengineering@gmail.com",
    address: "S.No 8, Ponneri High Road, Manali New Town, Tamil Nadu-600 103",
  });

  useEffect(() => {
    fetchContactContent().then((data) => {
      if (data) {
        setContact((prev) => ({
          ...prev,
          phone: data.phone || prev.phone,
          email: data.email || prev.email,
          address: data.address || prev.address,
        }));
      }
    });
  }, []);

  return (
    <footer className="footer-section fix bg-cover" style={{ backgroundImage: 'url("/img/service/service-bg-3.jpg")' }}>
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <img src="/img/logo/sunspot_logo.jpg" alt="logo-img" style={{ height: '60px', borderRadius: '8px' }} />
                  </Link>
                </div>
                <div className="footer-content">
                  <p className="mt-3">
                    SUNSPOT RENEWABLE ENGINEERING is a recognized leading solar energy solutions provider, specializing in high efficiency PV modules and turnkey solar EPC projects.
                  </p>
                  <div className="social-icon d-flex align-items-center mt-4">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-instagram" /></a>
                    <a href="#"><i className="fab fa-youtube" /></a>
                    <a href="#"><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="single-footer-widget ps-lg-5">
                <div className="widget-head">
                  <h3>Quick Links</h3>
                </div>
                <ul className="list-area">
                  <li><Link href="/"><i className="fa-solid fa-chevron-right" /> Home</Link></li>
                  <li><Link href="/about"><i className="fa-solid fa-chevron-right" /> About Us</Link></li>
                  <li><Link href="/service"><i className="fa-solid fa-chevron-right" /> Services</Link></li>
                  <li><Link href="/project"><i className="fa-solid fa-chevron-right" /> Projects</Link></li>
                  <li><Link href="/team"><i className="fa-solid fa-chevron-right" /> Team</Link></li>
                  <li><Link href="/contact"><i className="fa-solid fa-chevron-right" /> Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Our Services</h3>
                </div>
                <ul className="list-area">
                  <li><Link href="/service"><i className="fa-solid fa-chevron-right" /> Solar PV Modules</Link></li>
                  <li><Link href="/service"><i className="fa-solid fa-chevron-right" /> Rooftop Solar Systems</Link></li>
                  <li><Link href="/service"><i className="fa-solid fa-chevron-right" /> Ground Mounted Solar</Link></li>
                  <li><Link href="/service"><i className="fa-solid fa-chevron-right" /> Solar Water Pumps</Link></li>
                  <li><Link href="/service"><i className="fa-solid fa-chevron-right" /> Solar Water Heaters</Link></li>
                  <li><Link href="/service"><i className="fa-solid fa-chevron-right" /> Solar Street Lights</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Contact Info</h3>
                </div>
                <div className="footer-content">
                  <ul className="contact-info">
                    <li>
                      <i className="fa-solid fa-location-dot" />
                      <span>{contact.address}</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-phone-volume" />
                      <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                    </li>
                    <li>
                      <i className="far fa-envelope" />
                      <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Sunspot Renewable Engineering. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
