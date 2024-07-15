export default function Education() {
  const education = [
    {
      institution: "University of Wisconsin – Madison, WI",
      duration: "Sep 2022 – May 2024",
      degree: "Master of Science in Computer Science",
      gpa: "3.8/4.0",
      courses: [
        "Operating System",
        "Distributed Systems",
        "Big Data Systems",
        "Cloud Databases",
      ],
    },
    {
      institution: "Vishwakarma Institute of Technology – Pune, India",
      duration: "Aug 2016 – Jun 2020",
      degree: "Bachelor of Technology; Major in Computer Engineering",
      gpa: "3.8/4.0",
      courses: [
        "Data Structure",
        "Algorithms",
        "Computer Architecture",
        "Networks",
        "OOP",
      ],
    },
  ];

  return (
    <div class="experience" id="education">
      <div class="container">
        <header
          class="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>My Education</p>
          <h2>Educational Background</h2>
        </header>
        <div class="timeline">
          <div class="timeline-item left wow slideInLeft" data-wow-delay="0.1s">
            <div class="timeline-text">
              <div class="timeline-date">
                {education[0].duration}
                <p>GPA: {education[0].gpa}</p>
              </div>
              <h2>{education[0].degree}</h2>
              <h4>{education[0].institution}</h4>

              <p>Courses:</p>
              <ul className="list-disc pl-4">
                {education[0].courses.map((course) => (
                  <li>{course}</li>
                ))}
              </ul>
            </div>
          </div>
          <div
            class="timeline-item right wow slideInRight"
            data-wow-delay="0.1s"
          >
            <div class="timeline-text">
              <div class="timeline-date">
                {education[1].duration}
                <p>GPA: {education[1].gpa}</p>
              </div>
              <h2>{education[1].degree}</h2>
              <h4>{education[1].institution}</h4>

              <p>Courses:</p>
              <ul className="list-disc pl-4">
                {education[1].courses.map((course) => (
                  <li>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
