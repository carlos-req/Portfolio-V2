import React, { useContext } from "react";
import ProjectCard from "./ProjectCard";
import DataContext from "../context/DataContext";

const Work = () => {
  const { projects } = useContext(DataContext);
  return (
    <div className="w-full md:h-screen text-zinc-300 bg-[#111111]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-zinc-100 border-red-500">
            Work
          </p>
          <p className="py-6 text-zinc-300">Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
