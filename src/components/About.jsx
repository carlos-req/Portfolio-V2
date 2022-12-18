import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#111111] '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='text-left sm:text-right pb-8 pl-4'>
              <p className='text-zinc-200 text-4xl font-bold inline border-b-4 border-red-500'>
                About
              </p>
            </div>
          </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-zinc-300'>
              <div className='sm:text-right text-4xl font-bold'>
                <p>Hi, I'm Carlos, nice to meet you. Please take a look around</p>
              </div>
              <div>
                <p>My name is Carlos, I am a software engineer with a passion for front end applications. I started tinkering with technology when I was just 8 years olds. I was an avid gamer growing up and still am to this day. I took up a lot of graphic design and VFX work at the age of 14, so much so I used to get hired for it. I have a huge passion for it as well as gaming. My current passions are working out, walking my corgi, eating food & coding. I had a career change from nursing school to coding. Once I found coding, I absolutely fell in love with it. I have spent the last year self-teaching as well as attending college for web development and plan to pursue a bachelor's in technology and management.</p>
              </div>
            </div>

        </div>
      </div>
  )
}

export default About