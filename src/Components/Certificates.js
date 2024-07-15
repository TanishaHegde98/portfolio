import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import nncert from "../Assets/nncert.png";
import mlcert from "../Assets/mlcert.png";
import deepnn from "../Assets/deepnncert.png";

const Certificates = () => {
  const certificates = [
    {
      photo: nncert,
    },
    {
      photo: mlcert,
    },
    {
      photo: deepnn,
    },
  ];

  return (
    <>
      <header
        class="section-header text-center wow zoomIn"
        data-wow-delay="0.1s"
      >
        <p>My Education</p>
        <h2>Certification</h2>
      </header>
      <div
        className="testimonial wow fadeInUp"
        data-wow-delay="0.1s"
        id="review"
      >
        <div className="container  xl:w-4/5 m-auto">
          <Swiper
            loop={true}
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            className="h-full w-full"
          >
            {certificates.map((certificate, index) => (
              <SwiperSlide
                key={index}
                className="!flex !flex-col h-full !gap-8"
              >
                <img src={certificate.photo} alt="Image" />

                {/* <div className="testimonial-text">
                  <p>{recommendation.recommendation}</p>
                  <h3>{recommendation.name}</h3>
                  <h4>{recommendation.role}</h4>
                </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Certificates;
