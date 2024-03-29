import React, { createContext, useState, useContext } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "CC Cleaning",
      tech: "Next.js - React.js - TailwindCSS",
      shortDesc:
        "Created a client website for a cleaning company. This was used by the company until they closed down. Built with Next.js, TailwindCSS, and React.js.",
      longDesc1: "",
      longDesc2: "",
      img: "/images/cccleaning.png",
      website: "/cc-cleaning.vercel.app/",
      git: "https://github.com/carlos-req/cccleaning",
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
  ]);

  return (
    <DataContext.Provider value={{ projects }}>{children}</DataContext.Provider>
  );
};

export default DataContext;
