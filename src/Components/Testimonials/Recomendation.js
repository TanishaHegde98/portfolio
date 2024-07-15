import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
import "swiper/css";
export default function Recommendation() {
  const recommendations = [
    {
      name: "Siddhesh Bhande",
      role: "Senior Software Engineer",
      recommendation:
        "I've had the pleasure of working with Tanisha on several complex projects. Her expertise in container orchestration and system design is unparalleled. She has a knack for simplifying complex problems and implementing scalable solutions. Tanisha's innovative mindset and dedication to continuous learning make her an invaluable asset to any team.",
    },
    {
      name: "Priya Sharma",
      role: "Data Scientist",
      recommendation:
        "Tanisha is a powerhouse of knowledge and skill. Her ability to manage and optimize both relational and NoSQL databases is impressive. She's incredibly detail-oriented and ensures data integrity in all her projects. Beyond her technical skills, Tanisha is a fantastic collaborator and always willing to help others, making her a joy to work with.",
    },
    {
      name: "Rahul Mehta",
      role: "Cloud Solutions Architect",
      recommendation:
        "Tanisha's passion for technology and innovation is truly inspiring. Her work in identity and access management has significantly improved our security protocols. She seamlessly integrates new technologies and always finds efficient solutions to complex problems. Tanisha's proactive approach and excellent communication skills set her apart as a leader in the tech field.",
    },
  ];

  return (
    <>
      {recommendations.map((recommendation) => (
        <div class="testimonial-item">
          <div class="testimonial-img">
            {/* <img src="img/testimonial-3.jpg" alt="Image"> */}
          </div>
          <div class="testimonial-text">
            <p>{recommendation.recommendation}</p>
            <h3>{recommendation.name}</h3>
            <h4>{recommendation.role}</h4>
          </div>
        </div>
      ))}
    </>
  );
}
