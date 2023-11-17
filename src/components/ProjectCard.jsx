import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{ backgroundImage: `url(${project.img})` }}
      className="shadow-lg shadow-[#000000] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      {/* Hover Effects */}
      <div className="opacity-0 group-hover:opacity-100">
        <p className="text-2xl text-center font-bold text-zinc-100 tracking-wider">
          {project.name}
        </p>
        <p className="text-xs text-center font-bold text-zinc-300 tracking-wider">
          {project.tech}
        </p>

        <div className="md:pt-1 sm:pt-4 text-center">
          <button
            onClick={() => {
              navigate(`/work/${project.id}`);
            }}
            className="text-center rounded-lg px-4 py-3 m-2 bg-white text-red-700 font-bold text-lg"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
