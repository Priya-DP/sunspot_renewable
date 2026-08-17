import { useState, useEffect } from "react";
import { ServiceDataType } from "@/db/serviceOneData";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "./serviceCard";
import SectionTitle from "@/components/ui/sectionTitle";
import { fetchServicesContent } from "@/lib/api";

const ServicesOne = () => {
  const [services, setServices] = useState<ServiceDataType[]>([]);

  const loadServices = () => {
    fetchServicesContent().then((data) => {
      if (data && data.length > 0) {
        setServices(data);
      }
    });
  };

  useEffect(() => {
    loadServices();
    const interval = setInterval(loadServices, 3000);
    return () => clearInterval(interval);
  }, []);

  if (services.length === 0) return null;

  const swiperKey = services.map((s) => `${s.id}-${s.title}`).join('|');

  return (
    <section
      id="services"
      className="service-section fix section-padding bg-cover"
      style={{ backgroundImage: 'url("/img/service/service-bg.jpg")' }}
    >
      <div className="container">
        <div className="section-title-area">
          <SectionTitle>
            <SectionTitle.SubTitle>Services We Offer</SectionTitle.SubTitle>
            <SectionTitle.Title>
              Provide Comprehensive Ecological
              <br /> Service
            </SectionTitle.Title>
          </SectionTitle>
          <div className="array-button">
            <button className="array-prev">
              <i className="fa-regular fa-arrow-left-long" />
            </button>
            <button className="array-next">
              <i className="fa-regular fa-arrow-right-long" />
            </button>
          </div>
        </div>
        <div className="service-wrapper">
          <Swiper
            key={swiperKey}
            spaceBetween={30}
            speed={1500}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".array-next",
              prevEl: ".array-prev",
            }}
            breakpoints={{
              1199: {
                slidesPerView: 4,
              },
              991: {
                slidesPerView: 3,
              },
              767: {
                slidesPerView: 2,
              },
              575: {
                slidesPerView: 1,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            modules={[Navigation]}
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <ServiceCard service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServicesOne;
