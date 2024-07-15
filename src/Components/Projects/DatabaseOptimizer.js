import colapseIcon from "../../Assets/downarrow.png";

export default function DatabaseOptimizer({ setIsMinimised }) {
  return (
    <div class="p-2 md:p-6 bg-white rounded-lg text-justify col-span-2">
      <span onClick={() => setIsMinimised(true)}>
        <img
          src={colapseIcon}
          className="h-6 w-6 float-right rounded-full shadow-md hover:bg-slate-300 p-1 bg-slate-50"
        />
      </span>
      <h1 class="text-xl md:text-4xl font-bold text-[#e62e3f]  mb-8 text-left">
        Optimizing Key-Value Databases Using Machine Learning: A Comprehensive
        Approach
      </h1>
      <h2 class="text-xl font-semibold text-gray-700 mb-4">
        By Tanisha Hegde, Project Lead
      </h2>

      <section class="pb-4 mb-4 border-b-2 border-blue-50">
        <h3 class="text-lg md:text-2xl font-semibold text-gray-700 mb-4">
          Introduction
        </h3>
        <p class="text-gray-700 leading-relaxed text-sm md:text-lg">
          In the rapidly evolving landscape of data management, optimizing
          database performance is paramount. With the surge in unstructured
          data, the need for efficient key-value store optimizations has never
          been greater. Our project, "Optimizing Key-Value Databases Using
          Machine Learning," embarked on this mission with a blend of innovative
          methodologies and cutting-edge technologies. This blog delves into our
          journey, highlighting the technical intricacies and impactful results
          that emerged from our work.
        </p>
      </section>

      <section class="pb-4 mb-4 border-b-2 border-blue-50">
        <h3 class="text-2xl font-semibold text-gray-700 mb-4">Motivation</h3>
        <p class="text-gray-700 leading-relaxed  text-sm md:text-lg">
          Our project was driven by three primary motivations:
        </p>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed pl-4  text-sm md:text-lg">
          <li>
            <strong>Workload-Specific Performance of Databases</strong>:
            Enhancing database performance to meet specific workloads is
            critical. Different applications and scenarios demand varied
            database configurations to ensure optimal performance.
          </li>
          <li>
            <strong>Machine Learning in Database Management</strong>: Leveraging
            machine learning to assess and improve the performance of Database
            Management Systems (DBMS) across diverse configurations is a
            burgeoning field. It offers a systematic approach to understand and
            tune complex systems.
          </li>
          <li>
            <strong>Necessity for Key-Value Database Optimization</strong>: The
            exponential increase in unstructured data necessitates specialized
            optimization techniques for key-value stores. These databases,
            fundamental to many modern applications, require fine-tuning to
            handle massive data volumes efficiently.
          </li>
        </ul>
      </section>

      <section class="pb-4 mb-4 border-b-2 border-blue-50">
        <h3 class="text-2xl font-semibold text-gray-700 mb-4">
          Problem Statement
        </h3>
        <p class="text-gray-700 leading-relaxed text-sm md:text-lg">
          Our problem statement bifurcated into two core tasks:
        </p>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed pl-4 text-sm md:text-lg">
          <li>
            <strong>Benchmarking Default Configurations</strong>: Obtaining
            benchmark metrics with the default settings of the database to
            establish a performance baseline.
          </li>
          <li>
            <strong>Tuning Database Configurations</strong>: Using benchmark
            results to explore and optimize the configuration space, ensuring
            the database is tailored to specific workloads.
          </li>
        </ul>
        <p class="text-gray-700 leading-relaxed text-sm md:text-lg">
          We employed two frameworks to tackle these tasks:
        </p>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed pl-4 text-sm md:text-lg">
          <li>
            <strong>Nautilus</strong>: An in-house version of Ray, designed for
            distributed framework simulations and training.
          </li>
          <li>
            <strong>MLOS</strong>: An offline tuning approach to optimize
            database configurations.
          </li>
        </ul>
      </section>

      <section class="pb-4 mb-4 border-b-2 border-blue-50">
        <h3 class="text-2xl font-semibold text-gray-700 mb-4 text-sm md:text-lg">
          System Flow
        </h3>
        <p class="text-gray-700 leading-relaxed">
          Our system flow was designed to iteratively refine database
          configurations based on performance feedback:
        </p>
        <ol class="list-decimal list-inside text-gray-700 leading-relaxed pl-4 text-sm md:text-lg">
          <li>
            <strong>Run Workload Against Database</strong>: Execute a predefined
            workload on the database to gather performance metrics.
          </li>
          <li>
            <strong>Retrieve Benchmark Results</strong>: Collect performance
            data along with other relevant metrics.
          </li>
          <li>
            <strong>Feed Data to Optimizer</strong>: Input the collected data
            into our optimization framework (SMAC).
          </li>
          <li>
            <strong>Generate New Configurations</strong>: The optimizer suggests
            new configurations based on the input data.
          </li>
          <li>
            <strong>Apply New Configurations</strong>: Implement the new
            configurations in the database.
          </li>
          <li>
            <strong>Repeat</strong>: Continue the cycle for a predefined number
            of iterations to ensure convergence to an optimal configuration.
          </li>
        </ol>
      </section>

      <section class="pb-4 mb-4 border-b-2 border-blue-50">
        <h3 class="text-2xl font-semibold text-gray-700 mb-4">Methodology</h3>
        <p class="text-gray-700 leading-relaxed text-sm md:text-lg">
          Our methodology revolved around a systematic tuning process:
        </p>
        <ol class="list-decimal list-inside text-gray-700 leading-relaxed pl-4 text-sm md:text-lg">
          <li>
            <strong>Select Top 10 Important Knobs in Cassandra</strong>:
            Identify the most influential configuration parameters in the
            Cassandra database.
          </li>
          <li>
            <strong>Start with Default Configurations</strong>: Establish a
            baseline by running the workload with default settings.
          </li>
          <li>
            <strong>Run YCSB Workload for 21 Iterations</strong>: Execute the
            Yahoo! Cloud Serving Benchmark (YCSB) workload to simulate realistic
            scenarios.
          </li>
          <li>
            <strong>Use Nautilus and MLOS for Each Iteration</strong>: Employ
            our frameworks to suggest and apply new configurations iteratively.
          </li>
          <li>
            <strong>Compare Throughput Across Iterations</strong>: Measure and
            analyze the throughput improvements after each iteration to gauge
            the effectiveness of the optimizations.
          </li>
        </ol>
      </section>

      <section class="pb-4 mb-4 border-b-2 border-blue-50">
        <h3 class="text-2xl font-semibold text-gray-700 mb-4">Results</h3>
        <p class="text-gray-700 leading-relaxed text-sm md:text-lg">
          Our efforts yielded significant improvements in database performance:
        </p>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed pl-4 text-sm md:text-lg">
          <li>
            <strong>Throughput Increase</strong>: The best iteration increased
            throughput by 23%, from 42000 to 52000 operations per second.
          </li>
          <li>
            <strong>Optimal Configuration</strong>: We discovered that the
            default column index cache configuration was optimal for our
            workload.
          </li>
          <li>
            <strong>Memory Optimization</strong>: The Trickle Fsync Interval
            needed to be adjusted from 18 MB to 14 MB, enhancing memory usage
            efficiency.
          </li>
        </ul>
      </section>

      <section class="pb-4 mb-4 border-b-2 border-blue-50">
        <h3 class="text-2xl font-semibold text-gray-700 mb-4">Challenges</h3>
        <p class="text-gray-700 leading-relaxed text-sm md:text-lg">
          Despite our successes, we encountered several challenges:
        </p>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed pl-4 text-sm md:text-lg">
          <li>
            <strong>Load Optimization Complexity</strong>: Tuning
            write-intensive workloads is inherently difficult due to the absence
            of a query optimizer.
          </li>
          <li>
            <strong>Configuration Space Exploration</strong>: The vast
            configuration space required meticulous research and
            experimentation.
          </li>
          <li>
            <strong>Training Time</strong>: High training times were necessary
            to achieve meaningful results, tailored to specific workloads.
          </li>
          <li>
            <strong>Database-Specific Nuances</strong>: Each database comes with
            its own set of default configurations and drivers, complicating the
            optimization process.
          </li>
        </ul>
      </section>

      <section class="pb-4 mb-4 border-b-2 border-blue-50">
        <h3 class="text-2xl font-semibold text-gray-700 mb-4">Next Steps</h3>
        <p class="text-gray-700 leading-relaxed text-sm md:text-lg">
          Our next steps aim to build on the foundation laid by this project:
        </p>
        <ul class="list-disc list-inside text-gray-700 leading-relaxed pl-4 text-sm md:text-lg">
          <li>
            <strong>Compare Configurations with Latency</strong>: Extend our
            analysis to include latency metrics alongside throughput.
          </li>
          <li>
            <strong>Performance of Frameworks: SQL vs. NoSQL</strong>: Evaluate
            our frameworks' performance across different types of databases to
            generalize our approach.
          </li>
        </ul>
      </section>

      <section class="pb-4 mb-4 border-b-2 border-blue-50">
        <h3 class="text-2xl font-semibold text-gray-700 mb-4">Conclusion</h3>
        <p class="text-gray-700 leading-relaxed text-sm md:text-lg">
          Optimizing key-value databases using machine learning presents a
          promising avenue to enhance performance in the face of growing data
          demands. Our project demonstrated substantial improvements and
          provided a robust framework for future research and application. As we
          continue to refine our methodologies and expand our scope, the
          potential for machine learning in database optimization remains vast
          and largely untapped.
        </p>
        <p class="text-gray-700 leading-relaxed text-sm md:text-lg">
          By addressing the unique challenges and leveraging advanced tools, we
          can pave the way for more efficient, adaptable, and powerful database
          systems.
        </p>
      </section>

      <section class="pb-4 mb-4 border-b-2 border-blue-50">
        <h3 class="text-2xl font-semibold text-gray-700 mb-4">
          About the Author
        </h3>
        <p class="text-gray-700 leading-relaxed text-sm md:text-lg">
          <strong>Tanisha Hegde</strong> is a seasoned database specialist with
          a keen interest in machine learning and optimization techniques. As
          the project lead for this initiative, she has spearheaded numerous
          successful endeavors in the realm of data management and performance
          tuning.
        </p>
        <p class="text-gray-700 leading-relaxed text-sm md:text-lg">
          For more insights and updates, follow Tanisha on&nbsp;
          <a
            href="https://www.linkedin.com"
            class="text-blue-500 hover:underline"
          >
            LinkedIn
          </a>{" "}
          and&nbsp;
          <a
            href="https://www.twitter.com"
            class="text-blue-500 hover:underline"
          >
            Twitter
          </a>
          .
        </p>
      </section>
    </div>
  );
}
