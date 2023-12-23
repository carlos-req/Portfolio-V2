import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#111111] ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-zinc-200 text-4xl font-bold inline border-b-4 border-red-500">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-zinc-300">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Carlos, nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p>
              Hey there, I'm Carlos, a software engineer passionate about the
              front-end applications. I've been hooked on tech since I was 8,
              thanks to my gaming days. At 14, I dove into graphic design and
              VFX, even getting hired for gigs. Beyond coding, my passions
              include working out, hanging with my corgi, savoring good food,
              and of course, gaming. I made a career switch from nursing to
              computer science, and once I discovered it, there was no turning
              back. I've spent the last few years self-teaching and studying
              computer science in college, finishing my bachelor's in technology
              and management. A very exciting journey ahead!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
