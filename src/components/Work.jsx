import React from 'react'
import Mock1 from '../assets/projects/img-1.png'
import Mock2 from '../assets/projects/img-2.png'
import Mock3 from '../assets/projects/img-3.png'
import IRC from '../assets/projects/IntractiveRatingComponent.jpg'
import MomentClone from '../assets/projects/MomentClone.png'
import MovieDeck from '../assets/projects/MovieDeck.jpg'



const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-zinc-300 bg-[#111111]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-zinc-100 border-red-500'>Work</p>
          <p className='py-6 text-zinc-300'>Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${MovieDeck})`}} className='shadow-lg shadow-[#000000] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <p className='text-2xl text-center font-bold text-zinc-100 tracking-wider'>
                MovieDeck 
              </p>
              <p className='text-xs text-center font-bold text-zinc-300 tracking-wider'>
                HTML - CSS - JavaScript - REST API
              </p>
              <p className='text-xs text-center font-bold text-zinc-300 tracking-wider m-2'>
              I created this project to work with API's with using Fetch() to get movies and movie overviews as well as their raitings. I also used try and catch to make sure I catch any Network Errors as well as used the search box with a new API Url.
              </p>
              <div className=' md:pt-1 sm:pt-4 text-center'>
                <a href="https://carlos-req.github.io/MovieDeck/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-red-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/carlos-req/MovieDeck'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-red-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${MomentClone})`}} className='shadow-lg shadow-[#000000] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <p className='text-2xl text-center font-bold text-zinc-100 tracking-wider'>
                  Moment Clone
                </p>
                <p className='text-xs text-center font-bold text-zinc-300 tracking-wider'>
                  HTML - CSS - JavaScript
                </p>
                <p className='text-xs text-center font-bold text-zinc-300 tracking-wider m-2'>
                This was my first JavaScript project, that I manipulated the DOM, used the New Date() method and implemented 12 hour times. 
                </p>
              <div className='md:pt-1 sm:pt-4 text-center'>
                <a href="https://carlos-req.github.io/Moment-Extension-Clone/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-red-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/carlos-req/Moment-Extension-Clone'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-red-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>          {/* Grid Item */}
          <div style={{backgroundImage: `url(${IRC})`}} className='shadow-lg shadow-[#000000] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <p className='text-2xl text-center font-bold text-zinc-100 tracking-wider'>
                Interactive Rating Component
              </p>
              <p className='text-xs text-center font-bold text-zinc-300 tracking-wider'>
                HTML - CSS - JavaScript
              </p>
              <p className='text-xs text-center font-bold text-zinc-300 tracking-wider m-2'>
                Interactive Rating Component created using a design file and which I had to recreate to complete a FrontEndMentor Challenge.
              </p>
              <div className='md:pt-1 sm:pt-4 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-red-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-red-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${Mock1})`}} className='shadow-lg shadow-[#000000] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <p className='text-2xl text-center font-bold text-zinc-100 tracking-wider'>
                  React JS Application
                </p>
                <p className='text-xs text-center font-bold text-zinc-300 tracking-wider'>
                  HTML - CSS - JavaScript - React
                </p>
                <p className='text-xs text-center font-bold text-zinc-300 tracking-wider m-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem libero delectus quam voluptatum itaque labore. Totam sit maiores accusantium. Reiciendis provident sint non veritatis quae mollitia! Consectetur iusto commodi repudiandae.
                </p>
              <div className='md:pt-1 sm:pt-4 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-red-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-red-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${Mock2})`}} className='shadow-lg shadow-[#000000] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <p className='text-2xl text-center font-bold text-zinc-100 tracking-wider'>
                React JS Application
              </p>
              <p className='text-xs text-center font-bold text-zinc-300 tracking-wider'>
                HTML - CSS - JavaScript - React
              </p>
              <p className='text-xs text-center font-bold text-zinc-300 tracking-wider m-2'>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem libero delectus quam voluptatum itaque labore. Totam sit maiores accusantium. Reiciendis provident sint non veritatis quae mollitia! Consectetur iusto commodi repudiandae.
              </p>
              <div className='md:pt-1 sm:pt-4 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-red-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-red-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div style={{backgroundImage: `url(${Mock3})`}} className='shadow-lg shadow-[#000000] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <p className='text-2xl text-center font-bold text-zinc-100 tracking-wider'>
                  React JS Application
                </p>
                <p className='text-xs text-center font-bold text-zinc-300 tracking-wider'>
                  HTML - CSS - JavaScript - React
                </p>
                <p className='text-xs text-center font-bold text-zinc-300 tracking-wider m-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem libero delectus quam voluptatum itaque labore. Totam sit maiores accusantium. Reiciendis provident sint non veritatis quae mollitia! Consectetur iusto commodi repudiandae.
                </p>
              <div className='md:pt-1 sm:pt-4 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-red-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-red-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work