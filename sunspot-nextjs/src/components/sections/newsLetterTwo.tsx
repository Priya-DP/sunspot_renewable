'use client';

import Link from "next/link";

const NewsLetterTwo = () => {
    return (
        <section className="cta-banner-section fix section-padding pt-0">
            <div className="container">
                <div className="cta-banner-wrapper bg-cover" style={{ backgroundImage: 'url("/img/cta-2.jpg")' }}>
                    <div className="cta-banner-items">
                        <div className="icon">
                            <i className="fa-solid fa-phone-volume" />
                        </div>
                        <div className="content">
                            <span>Call Us Now</span>
                            <h4>
                                <a href="tel:+919094179527">+91-9094179527/9103</a>
                            </h4>
                        </div>
                    </div>
                    <div className="cta-button">
                        <Link href="/contact" className="theme-btn">
                            <span>
                                Get A Quote
                                <i className="fa-solid fa-arrow-right-long" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetterTwo;