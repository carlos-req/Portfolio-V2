import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div
      style={{ backgroundImage: `url(http://localhost:5173${project.img})` }}
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
          <Link to={`/work/${project.id}`}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-red-700 font-bold text-lg">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
