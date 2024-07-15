import React, { useEffect } from "react";
import { Waypoint } from "react-waypoint";
import $ from "jquery";
import msbadge from "../../Assets/msAzure.png";
import mscert from "../../Assets/mscert.png";

export default function LearnAboutMe({ skills }) {
  const handleWaypointEnter = () => {
    $(".progress .progress-bar").each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + "%");
    });
  };

  return (
    <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-5 p-8">
            <img src={msbadge} className="h-36 w-36 mb-4 mx-auto" />
            <img src={mscert} className="h-62 w-84 mx-auto" />
          </div>
          <div className="col-lg-7">
            <div className="about-content">
              <div className="section-header text-left">
                <p>Learn About Me</p>
                <h2>3 Years Experience</h2>
              </div>
              <div className="about-text">
                <p>
                  I'm a tech enthusiast and problem solver who loves tackling
                  complex challenges and turning ideas into reality. With
                  creativity and a solid tech background, I bring innovative
                  solutions that drive success. My journey focuses on learning,
                  growing, and pushing tech boundaries. I thrive on automating
                  workflows and optimizing performance, making things better and
                  more efficient. I enjoy working in teams and explaining tech
                  concepts clearly. Let's connect and make awesome things happen
                  together!
                </p>
              </div>
              <Waypoint onEnter={handleWaypointEnter}>
                <div className="skills">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="skill-name">
                        <p>{skill.skill}</p>
                        <p>{skill.percentage}%</p>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={skill.percentage}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Waypoint>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
