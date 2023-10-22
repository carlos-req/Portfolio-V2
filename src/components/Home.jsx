import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="/" className="w-full h-screen bg-[#111111] ">
      {/* Containter */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-500">Hi my name is,</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-zinc-100">
          Carlos Requena
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-zinc-500">
          I'm a Front End Developer.
        </h2>
        <p className="text-zinc-300 py-4 max-w-[700px]">
          I'm a front end developer specializing in building and deploying
          exceptional digital experiences 🚀.Currently, I'm focused on building
          responsive front end web applications 🎯. I also have a thing for
          chicken wings 🍗, Yum.
        </p>

        <div>
          <Link to="work">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover hover:border-red-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
