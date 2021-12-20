import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
  cert7,
  cert8,
} from "./imports";

import "swiper/css";
const Certificates = () => {
  return (
    <div className="mon__certificates section__margin">
      <div className="mon__certificates-swiper">
        <h1 className="text-center">Certificates</h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className="mon__certificates-container__swipper">
            <SwiperSlide>{<img src={cert1} alt="" />}</SwiperSlide>
            <SwiperSlide>
              <img src={cert2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={cert3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={cert4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={cert5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={cert6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={cert7} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={cert8} alt="" />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Certificates;
