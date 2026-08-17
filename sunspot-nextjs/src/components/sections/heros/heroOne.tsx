'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import Link from "next/link";
import { fetchHomeContent } from "@/lib/api";

interface SlideType {
  id: number;
  image: string;
  title: string;
  heading: string;
  description: string;
  link: string;
}

const defaultSlides: SlideType[] = [
  {
    id: 1,
    image: "/img/hero/hero-8.jpg",
    title: "WELCOME TO THE SUNSPOT RENEWABLE ENERGY",
    heading: "Power For <br /> A Sustainable Future <br /> with Solar Energy",
    description: "Harness the power of the sun to create clean, reliable, and cost-effective energy. Our solar solutions help reduce carbon emissions, lower electricity bills, and build a sustainable future for homes and businesses.",
    link: "/",
  },
  {
    id: 2,
    image: "/img/hero/hero.jpg",
    title: "WELCOME TO THE SUNSPOT RENEWABLE ENERGY",
    heading: "Powering the Future <br /> with Our Renewable <br /> Solar Energy",
    description: "We deliver advanced solar energy solutions designed for efficiency and long-term performance. From residential rooftops to large-scale projects, our renewable systems provide dependable power while protecting the environment.",
    link: "/",
  },
];

const HeroOne = () => {
  const [slides, setSlides] = useState<SlideType[]>(defaultSlides);

  const loadSlides = () => {
    fetchHomeContent().then((data) => {
      if (data && data.length > 0) {
        setSlides(data);
      }
    });
  };

  useEffect(() => {
    loadSlides();
    const interval = setInterval(loadSlides, 3000);
    return () => clearInterval(interval);
  }, []);

  const swiperKey = slides.map((s) => `${s.id}-${s.heading}-${s.title}`).join('|');

  return (
    <section className="hero-section hero-1">
      <div className="array-button">
        <button className="array-prev">
          <i className="fa-regular fa-arrow-left-long" />
        </button>
        <button className="array-next">
          <i className="fa-regular fa-arrow-right-long" />
        </button>
      </div>

      <Swiper
        key={swiperKey}
        spaceBetween={0}
        speed={2000}
        loop
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".array-next",
          prevEl: ".array-prev",
        }}
        modules={[Autoplay, EffectFade, Navigation]}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="single-slider bg-cover relative"
              style={{ backgroundImage: `url(${slide.image || '/img/hero/hero.jpg'})` }}
            >
              <div className="absolute inset-0 bg-slate-950/40" />

              <div className="container relative z-10">
                <div className="row g-4 justify-content-between align-items-center">
                  <div className="col-lg-8">
                    <div className="slider-content">
                      <motion.h6
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-white font-semibold tracking-wider uppercase mb-2"
                        style={{ color: '#ffffff' }}
                      >
                        {slide.title}
                      </motion.h6>
                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-white font-bold tracking-tight mb-4"
                        style={{ color: '#ffffff' }}
                        dangerouslySetInnerHTML={{ __html: slide.heading }}
                      />
                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-slate-100 text-base md:text-lg mb-6"
                        style={{ color: '#f1f5f9' }}
                      >
                        {slide.description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="hero-button"
                      >
                        <Link
                          href={slide.link || "/"}
                          className="theme-btn hover-white"
                        >
                          <span>
                            Explore More
                            <i className="fa-solid fa-arrow-right-long" />
                          </span>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroOne;
