import React from "react";

const ProjectCard = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.img})` }}
      className="shadow-lg shadow-[#000000] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      {/* Hover Effects */}
      <div className="opacity-0 group-hover:opacity-100">
        <p className="text-2xl text-center font-bold text-zinc-100 tracking-wider">
          {props.name}
        </p>
        <p className="text-xs text-center font-bold text-zinc-300 tracking-wider">
          {props.tech}
        </p>
        <p className="text-xs text-center font-bold text-zinc-300 tracking-wider m-2">
          {props.shortDesc}
        </p>
        <div className="md:pt-1 sm:pt-4 text-center">
          <a href={props.git}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-red-700 font-bold text-lg">
              View More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
