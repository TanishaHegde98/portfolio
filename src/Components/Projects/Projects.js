import Project from "./Project";

export default function Projects() {
  const projectList = [
    {
      title: "Database Optimizer for KV databases",
      techs:
        "Big Data Systems, Machine Learning, Cassandra, Redis, Docker, Python",
      date: "Apr 2024",
      url: "https://github.com/TanishaHegde98/database-optimizer",
      description: [
        "Tuned Key-Value Databases (NoSQL) like Cassandra and Redis using Machine Learning and Bayes Optimizer.",
        "Achieved 23% increase in throughput for YCSB workload C for Cassandra and 5% for Redis.",
      ],
    },
    {
      title: "Parallel Training of VGG16 using Gloo and OpenMPI",
      date: "Feb 2024",
      url: "https://github.com/TanishaHegde98/parallel-training-ML",
      techs:
        "Big Data Systems, Distributed Training, Cloud Infrastructure, GPU applications",
      description: [
        "Implements ML training models using PyTorch and different data parallel model techniques.",
        "Trained VGG-11 on CIFAR-10 in a four-node architecture, optimizing with Gloo and DistributedDataParallel (DDP)",
      ],
    },

    {
      title: "HTTP Archives Data Analysis with Google Big Query",
      date: "Dec 2023",
      url: "https://github.com/TanishaHegde98/WeightOfWeb_httparchive",
      techs: "Data Analysis, Data Visualization, GCP, BigQuery",
      description: [
        "Analyzed the weight of the web for top technologies like JavaScript Frameworks, E-commerce, and Advertising.",
        "Concluded these technologies have 70% of JavaScript and Image bytes that impact compute and execution time.",
      ],
    },
    {
      title: "Auto-scaling with Docker Swarm",
      date: "Feb 2023",
      url: "https://github.com/TanishaHegde98/docker-swarm-autoscaler",
      techs:
        "Container orchestration, Docker, Docker Swarm, Grafana, Prometheus, C++, Linux",
      description: [
        "Evaluated auto-scaling for CPU utilization, memory, and HTTP requests, with Prometheus and Grafana across varying loads on a 3-node architecture.",
      ],
    },
  ];

  return (
    <div class="container service">
      <header
        class="section-header text-center wow zoomIn"
        data-wow-delay="0.1s"
      >
        <p>My Work</p>
        <h2>Projects</h2>
      </header>
      <div className=" font-serif grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {projectList.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
