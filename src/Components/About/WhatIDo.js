import Service from "./Service";

export default function WhatIDo({ skills }) {
  return (
    <div class="service" id="service">
      <div class="container">
        <div
          class="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>What I do</p>
          <h2>Awesome Quality Services</h2>
        </div>
        <div class="row">
          {skills.map((skill) => (
            <Service service={skill}></Service>
          ))}
        </div>
      </div>
    </div>
  );
}
