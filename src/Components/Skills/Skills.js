import SkillsCategory from "./SkillsCategory";
import Sqlimg from "../../Assets/sql.png";
import Javaimg from "../../Assets/java.svg";
import Goimg from "../../Assets/Go-Logo_Aqua.svg";
import DockerImg from "../../Assets/docker.svg";
import KubernetesImg from "../../Assets/kubernetes.svg";
import azure from "../../Assets/azure.svg";
import apache from "../../Assets/spark.svg";
import Hadoop from "../../Assets/hadoop.svg";
import PowerShellImg from "../../Assets/powershell.svg";
import Kafka from "../../Assets/kafka.svg";
//import grpcImg from "../../Assets/grpc.svg";
import versionControl from "../../Assets/versionControl.png";
import posstgreimg from "../../Assets/postgre.svg";
import redisimg from "../../Assets/redis.svg";
import casandraimg from "../../Assets/cassandra.svg";
import oracleimg from "../../Assets/oracle.svg";
import myswlimg from "../../Assets/mysql.svg";
import oopimg from "../../Assets/oopimg.jpg";
import cplus from "../../Assets/cplus.svg";
import pythonimg from "../../Assets/python.svg";
import cimg from "../../Assets/c.svg";

export default function Skills() {
  const skills = {
    Languages: [
      "C",
      "C++",
      "Python (Pandas, Numpy, Scipy)",
      "SQL (Proficient)",
      "Java (Intermediate)",
      "Go (Beginner)",
    ],
    Software: [
      "Docker",
      "Kubernetes",
      "Azure Stream Analytics",
      "Apache Spark",
      "Hadoop",
      "PowerShell",
      "Kafka",
    ],
    Technology: [
      "gRPC",
      "PowerShell",
      "Python Scripting",
      "Object Oriented programming",
      "Version Control",
    ],
    Databases: ["Postgres", "Redis", "Cassandra", "Oracle", "MySQL"],
  };

  const skillsIcons = {
    Languages: {
      C: cimg,
      "C++": cplus,
      "Python (Pandas, Numpy, Scipy)": pythonimg,

      "SQL (Proficient)": Sqlimg,
      "Java (Intermediate)": Javaimg,
      "Go (Beginner)": Goimg,
    },
    Software: {
      Docker: DockerImg,
      Kubernetes: KubernetesImg,
      "Azure Stream Analytics": azure,
      "Apache Spark": apache,
      Hadoop: Hadoop,
      PowerShell: PowerShellImg,
      Kafka: Kafka,
    },
    Technology: {
      gRPC: "https://icons8.com/icon/124846/grpc",
      //change to bash
      PowerShell: PowerShellImg,
      "Python Scripting": pythonimg,
      "Object Oriented Programming": oopimg,
      "Version Control": versionControl,
    },
    Databases: {
      Postgres: posstgreimg,
      Redis: redisimg,
      Cassandra: casandraimg,
      Oracle: oracleimg,
      MySQL: myswlimg,
    },
  };

  return (
    <div className="container pl-8 font-serif w-fit mt-16">
      <header
        class="section-header text-center wow zoomIn"
        data-wow-delay="0.1s"
      >
        <p>My skills</p>
        <h2>Technical Skills</h2>
      </header>

      <SkillsCategory
        category={skills.Languages}
        categoryName={"Languages"}
        categoryIcons={skillsIcons.Languages}
      ></SkillsCategory>
      <SkillsCategory
        category={skills.Software}
        categoryName={"Software"}
        categoryIcons={skillsIcons.Software}
      ></SkillsCategory>
      <SkillsCategory
        category={skills.Technology}
        categoryName={"Technology"}
        categoryIcons={skillsIcons.Technology}
      ></SkillsCategory>
      <SkillsCategory
        category={skills.Databases}
        categoryName={"Databases"}
        categoryIcons={skillsIcons.Databases}
      ></SkillsCategory>
    </div>
  );
}
