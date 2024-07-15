export default function Work() {
  const experience = [
    {
      company: "Persistent Systems",
      duration: "Oct 2020 - Jun 2022",
      role: "Software Engineer",
      technologies: [
        "Java",
        "Oracle Database",
        "Postman",
        "Data Analysis",
        "Data Visualization",
      ],
      description: `At Persistent Systems, I automated data flow from HRMS to Target Applications using RBAC, significantly reducing manual efforts by 90%. I developed Java solutions to connect applications on SaaS IAM Managers, achieving a client satisfaction rating of 10/10. I integrated RESTful API applications with Azure Active Directory and provided production environment support. Additionally, I validated AWS APIs for Amazon Services such as EC2 and S3, collaborating with the Amazon Team to mitigate possible vulnerabilities.`,
    },
    {
      company: "Seagate Technology",
      duration: "Jul 2019 - May 2020",
      role: "Firmware Developer",
      technologies: ["C/C++", "Flash Drives", "PCIe", "Unit Testing"],
      description: `At Seagate Technology, I utilized my knowledge of C/C++ and operating systems to develop SSD diagnostic commands, reducing troubleshooting time by 50%. I participated in code reviews and adhered to Agile SDLC methodologies using Git, JIRA, and Bitbucket for CI/CD. My unit testing efforts achieved 98% code coverage, followed by simulated testing before firmware deployment. I also debugged issues in the HARE component of the open-source distributed object storage project, CORTX.`,
    },
  ];

  return (
    <div class="experience" id="experience">
      <div class="container">
        <header
          class="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>My Resume</p>
          <h2>Working Experience</h2>
        </header>
        <div class="timeline">
          <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
            <div class="timeline-text">
              <div class="timeline-date">
                {experience[0].duration}
                <p>
                  <h3 className="text-slate-800 text-sm">Technologies Used:</h3>
                  <ul className="">
                    {experience[0].technologies.map((tech) => (
                      <li>{tech}</li>
                    ))}
                  </ul>
                </p>
              </div>
              <h2>{experience[0].role}</h2>
              <h4>{experience[0].company}</h4>
              <p>{experience[0].description}</p>
            </div>
          </div>
          <div
            class="timeline-item right wow slideInRight"
            data-wow-delay="0.1s"
          >
            <div class="timeline-text">
              <div class="timeline-date">
                {experience[1].duration}
                <p>
                  <h3 className="text-slate-800 text-sm">Technologies Used:</h3>

                  <ul>
                    {experience[1].technologies.map((tech) => (
                      <li className="">{tech}</li>
                    ))}
                  </ul>
                </p>
              </div>
              <h2>{experience[1].role}</h2>
              <h4>{experience[1].company}</h4>
              <p>{experience[1].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
