import React from "react";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const { id } = useParams();

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
