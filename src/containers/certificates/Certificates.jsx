import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./certificates.css";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/scrollbar";
// import {
//   cert1,
//   cert2,
//   cert3,
//   cert4,
//   cert5,
//   cert6,
//   cert7,
//   cert8,
// } from "./imports";

const certs = [
  {
    id: 1,
    cert: "https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.15752-9/264161220_674641373697833_2715128616710813330_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeH58S43pVzUSbCsWhB34BslX9M_8ir96exf0z_yKv3p7EpeePWj-GuhjyR0VZ601Pj0eWefZNCeCkb6uDPuN3G2&_nc_ohc=vHg0rm7VuikAX93s_iQ&_nc_ht=scontent.fmnl8-2.fna&oh=03_AVLVWJSrkaj8KbBgri1Fg8nAqpz4VIuvmSPJmhvtVWcTbg&oe=61E7EC6B",
    title: "Intelectual Property Rights",
  },
  {
    id: 2,
    cert: "https://scontent.fmnl25-4.fna.fbcdn.net/v/t1.15752-9/264079285_597183044909856_4708698522621806465_n.png?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeEhl2NMVBb-33RHwJkdkghWA6LvJB2eQVsDou8kHZ5BW2mSgO6wZ5Ys0KfwbAo5BunXFYdaP_5XcygjmvYdYoir&_nc_ohc=wjiL9Gc0ruUAX8Xivgj&_nc_ht=scontent.fmnl25-4.fna&oh=03_AVIGm8cHVLsvXhTsRTidOmbDazSOArp4O7YrjIpAoTNA4w&oe=61E69809",
    title: "Strong Work Ethic",
  },
  {
    id: 3,
    cert: "https://scontent.fmnl25-3.fna.fbcdn.net/v/t1.15752-9/263961956_3427474374145900_4134779978434609849_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeEYLolX8fpsOYX9dS2YSZ0W_IcLXsiURob8hwteyJRGhj6TI_N9sDcAOmjNUAChO2ylN7VLBUscMd_gbmeQmi8t&_nc_ohc=Dpb28Aq0y-MAX9dihWO&_nc_ht=scontent.fmnl25-3.fna&oh=03_AVJHEpLCYi9AO-ReSsVLI1owYaf1IRZzSM36INeKQ7uXVg&oe=61E65B4B",
    title: "CISCO: Connecting things",
  },
  {
    id: 4,
    cert: "https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.15752-9/267371241_499927411287599_3180854836802441691_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeF7ISfJqf75r6jUBrGjka53d5nRW8tsnRx3mdFby2ydHNc9kPpe6ElaQOIvToHDg5Y7rrkoYYswXTXnERzqDFch&_nc_ohc=2v2GezDtMEMAX8FuPqh&_nc_ht=scontent.fmnl8-2.fna&oh=03_AVIwToL_03eu18D5BGuyPx840-EynXKLh_-eKc19MuwaBw&oe=61E6E496",
    title: "CISCO: Introduction to Network",
  },
  {
    id: 5,
    cert: "https://scontent.fmnl25-4.fna.fbcdn.net/v/t1.15752-9/263752548_960142921596546_6030399560087057531_n.png?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFzD21NRLXogY6A7Ejd5CjvXV5uM5JAnxJdXm4zkkCfEub0L68QblRr98qCIgB_-q0zLlFvqbWzPluY6NcqP07h&_nc_ohc=YLWU5FgRnpkAX9VIyDV&_nc_ht=scontent.fmnl25-4.fna&oh=03_AVJNcaSkbCn-fzrnmemrDhS9-CKqAilCFHDsZubSGENILQ&oe=61E5854F",
    title: "Routing and Switching",
  },
  {
    id: 6,
    cert: "https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.15752-9/265559447_690662115644807_4964396050470658104_n.png?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFPYueNGegYJK-YpkfleQSt6ycRJ01ExAHrJxEnTUTEAdTvgcxKTY9lgvDun1Ub-QuCQYq8545Z2_t3hnhgwZkE&_nc_ohc=qG85K2Jz80sAX-lxJ3q&_nc_ht=scontent.fmnl8-2.fna&oh=03_AVKFkCTs4WQ9z4dRHC2pw4X6_QHDsqnk_S780epF8wJQ_w&oe=61E53111",
    title: "ISO 9001 MANAGEMENT SYSTEM ASSOCIATE",
  },
  {
    id: 7,
    cert: "https://scontent.fmnl8-2.fna.fbcdn.net/v/t1.15752-9/267168937_394634739115806_8978539144599481621_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeE9jvED6NaRnw0EDMl47cjobywcU5cZiKlvLBxTlxmIqZdRp73f-LTM3wJXyCkqkvmCCmqo9aM58XIoYNmyeVdx&_nc_ohc=w4gBQ8sNv3MAX_Zv-Er&_nc_ht=scontent.fmnl8-2.fna&oh=03_AVJN0MFfV1TgiQpBFfU4c9-QVu3APeMT9Q29Ftwt7tvq6w&oe=61E65C1B",
    title: "ISO/IEC 27001 INFORMATION SECURITY ASSOCIATE",
  },
  {
    id: 8,
    cert: "https://scontent.fmnl25-3.fna.fbcdn.net/v/t1.15752-9/264122569_995738017822403_3379991445222845238_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeHuQdW9yOJTgeyHDAGXcSNYH5NHtQWzu8Mfk0e1BbO7wwcG2VNJNydK3iggVnKwnh8E_kJFcfsg19sHsTirIU_y&_nc_ohc=BF4P_guqUswAX9Jn8xl&_nc_ht=scontent.fmnl25-3.fna&oh=03_AVLryzvmFW0LaBXCeHLxL_KunjtQBbTSCLpg5Qlioj0iZg&oe=61E6F35F",
    title: "ISO 20000 IT SERVICE MANAGEMENT ASSOCIATE",
  },
];
const Certificates = () => {
  return (
    <div className="mon__certificates section__margin" id="certificates">
      <h1 className="gradient__text certificate text-center">Certificates</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {certs.map((certificates) => (
          <SwiperSlide key={certificates.id} className="slide">
            <div className="slide-content" data-swiper-autoplay="2000">
              <div className="certificate-image">
                <p className="text-center">{certificates.title}</p>
                <img className="img" src={certificates.cert} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Certificates;
