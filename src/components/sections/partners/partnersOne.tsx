import { partnetsOneData } from "@/db/partnersOneData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const PartnersOne = ({ className }: { className?: string }) => {
  return (
    <div className={`brand-section fix section-padding ${className}`}>
      <div className="container">
        <div className="brand-wrapper">
          <h6 className="text-center wow slideUp" data-delay=".3">
            50 + Brands Trust Us
          </h6>
          <Swiper
            breakpoints={{
              1199: {
                slidesPerView: 5,
              },
              991: {
                slidesPerView: 4,
              },
              767: {
                slidesPerView: 3,
              },
              575: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            spaceBetween={30}
            speed={1300}
            centeredSlides
            loop
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {partnetsOneData.map(({ id, img }) => {
              return (
                <SwiperSlide key={id}>
                  <div
                    className="brand-image"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "120px",
                      padding: "20px 0",
                    }}
                  >
                    <img
                      src={img}
                      alt="brand-img"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "80px",
                        width: "auto",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PartnersOne;
