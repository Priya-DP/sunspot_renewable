'use client';

import Link from "next/link";

const NewsLetter = () => {
    return (
        <section className="cta-section fix section-padding">
            <div className="container">
                <div className="cta-wrapper bg-cover" style={{ backgroundImage: 'url("/img/cta.png")' }}>
                    <div className="cta-items">
                        <h3 className="wow slideUp" data-delay=".5">Get Free Consultancy?</h3>
                        <Link href="/contact" className="theme-btn bg-white wow slideUp" data-delay=".7">
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

export default NewsLetter;