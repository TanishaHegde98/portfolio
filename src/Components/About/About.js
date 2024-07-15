import LearnAboutMe from "./LearnAboutMe";
import WhatIDo from "./WhatIDo";

export default function About() {
  const skills = [
    {
      skill: "Container Orchestration",
      description:
        "I implement auto-scaling with Docker Swarm and Kubernetes, enhancing performance and reducing costs. My expertise ensures optimal resource allocation, driving efficiency across diverse environments.",
      iconclass: "fa fa-laptop",
      percentage: 85,
    },
    {
      skill: "System Design",
      description:
        "I design robust, scalable systems focusing on performance optimization, high availability, and security, addressing bottlenecks and ensuring long-term adaptability.",
      iconclass: "fa fa-laptop-code",
      percentage: 95,
    },
    {
      skill: "Database Management",
      description:
        "I manage relational and NoSQL databases, optimizing performance and ensuring data integrity. My expertise covers design, migration, and recovery for handling large data volumes.",
      iconclass: "fab fa-android",
      percentage: 80,
    },
    {
      skill: "Identity and Access Management",
      description:
        "I develop secure IAM systems with role-based access control. My work with Azure AD and AWS APIs enhances security and efficiency, safeguarding information.",
      iconclass: "fab fa-apple",
      percentage: 95,
    },
  ];

  return (
    <div className="w-full">
      <LearnAboutMe skills={skills}></LearnAboutMe>
      <WhatIDo skills={skills}></WhatIDo>
    </div>
  );
}
