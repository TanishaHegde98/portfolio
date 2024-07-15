import { useState } from "react";
import DatabaseOptimizer from "./DatabaseOptimizer";
import expandimg from "../../Assets/expand.png";

export default function Project({ project }) {
  const [isMinimised, setIsMinimised] = useState(true);

  function HeadingClickhandler() {
    setIsMinimised((prev) => !prev);
  }

  return (
    <>
      {isMinimised && (
        <div className="col-span-1 p-4 shadow-md pb-0 rounded-md ">
          <div
            onClick={() => HeadingClickhandler()}
            className="pb-2 text-lg lg:text-xl text-[#e62e3f] font-bold font-serif italic mb-2"
          >
            {project.title}
            <span className="text-bs"> - {project.date}</span>
            <span onClick={() => setIsMinimised(true)}>
              <img
                src={expandimg}
                className="h-6 w-6 float-right rounded-full shadow-md cursor-pointer hover:bg-slate-300"
              />
            </span>
          </div>

          <div className="border-t-2 border-gray-50">
            <h2 className="text-sm text-gray-400">Technologies:</h2>
            <h3 className="text-gray-800 text-sm">&nbsp; {project.techs}</h3>
          </div>
          <div className="text-sm">
            <h2 className="text-sm text-gray-400">Description</h2>
            <ul className="pl-4 list-disc">
              {project.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
          <div className="">
            <button className="btn float-right h-8 p-2 pt-0 hover:text-red-300 ">
              <a href={project.url} className="text-white">
                Learn More
              </a>
            </button>
          </div>
        </div>
      )}

      {!isMinimised && (
        <div className="p-4 shadow-md pb-0 rounded-md col-span-2 ">
          <DatabaseOptimizer setIsMinimised={setIsMinimised} />
        </div>
      )}
    </>
  );
}
