import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import siddhesh from "../../Assets/siddhesh.png";
import madhushree from "../../Assets/madhushree.png";
import sumedha from "../../Assets/sumedha.png";

const Testimonials = () => {
  const recommendations = [
    {
      name: "Siddhesh Bhande",
      role: "Senior Software Engineer",
      photo: siddhesh,

      recommendation:
        "I've had the pleasure of working with Tanisha on several complex projects. Her expertise in container orchestration and system design is unparalleled. She has a knack for simplifying complex problems and implementing scalable solutions. Tanisha's innovative mindset and dedication to continuous learning make her an invaluable asset to any team.",
    },
    {
      name: "Madhushree Nijagal",
      role: "Data Scientist",
      photo: madhushree,
      recommendation:
        "Tanisha is a powerhouse of knowledge and skill. Her ability to manage and optimize both relational and NoSQL databases is impressive. She's incredibly detail-oriented and ensures data integrity in all her projects. Beyond her technical skills, Tanisha is a fantastic collaborator and always willing to help others, making her a joy to work with.",
    },
    {
      name: "Sumedha Joshirao",
      role: "Cloud Solutions Architect",
      photo: sumedha,
      recommendation:
        "Tanisha's passion for technology and innovation is truly inspiring. Her work in identity and access management has significantly improved our security protocols. She seamlessly integrates new technologies and always finds efficient solutions to complex problems. Tanisha's proactive approach and excellent communication skills set her apart as a leader in the tech field.",
    },
  ];

  return (
    <div className="testimonial wow fadeInUp" data-wow-delay="0.1s" id="review">
      <div className="container">
        <div className="testimonial-icon">
          <i className="fa fa-quote-left"></i>
        </div>
        <Swiper
          loop={true}
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {recommendations.map((recommendation, index) => (
            <SwiperSlide key={index} className="!flex !flex-col h-full !gap-8">
              <div className="testimonial-item">
                <div className="testimonial-img">
                  <img src={recommendation.photo} alt="Image" />
                </div>
                <div className="testimonial-text">
                  <p>{recommendation.recommendation}</p>
                  <h3>{recommendation.name}</h3>
                  <h4>{recommendation.role}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
