import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { serviceThreeData } from "@/db/serviceThreeData";
import ServiceCardTwo from "./serviceCardTwo";
import { Autoplay, Pagination } from "swiper/modules";

const ServicesFive = () => {
  return (
    <section id="services" className="service-section-3 fix section-padding">
      <div className="container solar-intro-alt text-center mb-5">
        <span className="solar-badge">Why Choose Us</span>

        <h2 className="solar-heading">
          Smart Solar Solutions <br /> Built for Long-Term Value
        </h2>

        <p className="solar-description">
          Our solar services combine advanced technology, expert engineering,
          and dependable support to deliver maximum performance. We help homes
          and businesses transition to clean energy with confidence, efficiency,
          and measurable savings.
        </p>

        <div className="solar-points">
          <span>✔ Customized System Design</span>
          <span>✔ High-Efficiency Solar Panels</span>
          <span>✔ Reliable Installation & Support</span>
        </div>
      </div>

      <div className="container">
        <Swiper
          spaceBetween={30}
          speed={40000}
          loop
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".dot-2",
            clickable: true,
          }}
          // breakpoints={{
          //     1199: {
          //         slidesPerView: 4,
          //     },
          //     991: {
          //         slidesPerView: 2,
          //     },
          //     767: {
          //         slidesPerView: 2,
          //     },
          //     575: {
          //         slidesPerView: 2,
          //     },
          //     0: {
          //         slidesPerView: 1,
          //     },
          // }}
          modules={[Pagination, Autoplay]}
        >
          {serviceThreeData.map((service) => (
            <SwiperSlide key={service.id}>
              <ServiceCardTwo />
            </SwiperSlide>
          ))}
          <div className="swiper-dot-2">
            <div className="dot-2" />
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesFive;
