import React from "react";
import ProjectCard from "./ProjectCard";

const Work = () => {
  let projects = [
    {
      id: 1,
      name: "Jamming",
      tech: "HTML - CSS - JavaScript - React",
      shortDesc:
        "Calls the Spotify API to search for songs, create new playlist and upload this new playlist to your Spotify account This project help me futher understand props and states",
      longDesc1: "",
      longDesc2: "",
      img: "/images/Jamming.png",
      website: "https://carlos-req.github.io/jamming/",
      git: "https://github.com/carlos-req/jamming",
    },
    {
      id: 2,
      name: "Movie Deck",
      tech: "HTML - CSS - JavaScript - REST API",
      shortDesc:
        "I created this project to work with API's with using Fetch() to get movies and movie overviews as well as their raitings. I also used try and catch to make sure I catch any Network Errors as well as used the search box with a new API Url.",
      longDesc1: "",
      longDesc2: "",
      img: "/images/MovieDeck.jpg",
      website: "https://carlos-req.github.io/MovieDeck/",
      git: "https://github.com/carlos-req/MovieDeck",
    },
    {
      id: 3,
      name: "Moment Clone",
      tech: "HTML - CSS - JavaScript",
      shortDesc:
        "This was my first JavaScript project, that I manipulated the DOM, used the New Date() method and implemented 12 hour times.",
      longDesc1: "",
      longDesc2: "",
      img: "/images/MomentClone.png",
      website: "https://carlos-req.github.io/Moment-Extension-Clone/",
      git: "https://github.com/carlos-req/Moment-Extension-Clone",
    },
    {
      id: 4,
      name: "Interactive Rating Component",
      tech: "HTML - CSS - JavaScript",
      shortDesc:
        "Interactive Rating Component created using a design file and which I had to recreate to complete a FrontEndMentor Challenge.",
      longDesc1: "",
      longDesc2: "",
      img: "/images/IntractiveRatingComponent.jpg",
      website: "https://carlos-req.github.io/Interactive-Rating-Component/",
      git: "https://github.com/carlos-req/Interactive-Rating-Component",
    },
    {
      id: 5,
      name: "Portfolio V1",
      tech: "HTML - CSS",
      shortDesc:
        "This project was my first love, it was also my first fully responsive project.",
      longDesc1: "",
      longDesc2: "",
      img: "/images/portfoliov1.png",
      website: "https://carlos-req.github.io/CarlosRequena.io/",
      git: "https://github.com/carlos-req/CarlosRequena.io",
    },
    {
      id: 6,
      name: "React JS Application",
      tech: "HTML - CSS - JavaScript - React",
      shortDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem libero delectus quam voluptatum itaque labore. Totam sit maiores accusantium. Reiciendis provident sint non veritatis quae mollitia! Consectetur iusto commodi repudiandae.",
      longDesc1: "",
      longDesc2: "",
      img: "/images/img-3.png",
      website: "/",
      git: "https://github.com/carlos-req",
    },
  ];
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
