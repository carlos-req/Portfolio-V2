import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../context/DataContext";

const ProjectPage = () => {
  const { id } = useParams();
  const { projects } = useContext(DataContext);
  return (
    <div name="about" className="w-full h-screen bg-[#111111] ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-zinc-200 text-4xl font-bold inline border-b-4 border-red-500">
              {projects[id - 1].name}
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-zinc-300">
          <div className="sm:text-right text-4xl font-bold">
            <img src={projects[id - 1].img} />
          </div>
          <div>
            <p className="pb-2">{projects[id - 1].shortDesc}</p>
            <p className="pb-2 text-center">{projects[id - 1].tech}</p>
            <div className="md:pt-1 sm:pt-4 text-center">
              <a href={projects[id - 1].website}>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-red-700 font-bold text-lg">
                  Live
                </button>
              </a>
              <a href={projects[id - 1].git}>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-red-700 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
