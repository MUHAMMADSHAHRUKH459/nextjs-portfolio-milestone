import React from 'react'
import Image from 'next/image'; 
import srk2 from '../../../public/assets/picture/srk2.jpg'; 

const About = () => {
  return (
    <div id='about'>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-8">
            <Image
              className="object-cover object-center rounded h-[300px]"  
              alt="hero"
              src={srk2}  
              width={500}      
              height={500} 
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed">
              Hello! I am Muhammad Shahrukh, a passionate software engineer and founder of Intellibot Creation. My journey in tech began with Python and has grown to encompass artificial intelligence, chatbot development, and innovative automation solutions. Currently, I am focused on creating interactive chatbot experiences using Dialogflow and Kommunicate, enabling businesses to connect with their audiences through AI-driven conversations.
            </p>
            <p className="mb-5 leading-relaxed">
              I am also skilled in Next.js and TypeScript, which I use to build fast, scalable web applications with a focus on user experience and responsive design. My projects merge functionality with user-centered design, and I take pride in delivering solutions that make an impact.
              When I am not coding, you can find me exploring the latest in AI or refining my web development skills. I believe in learning through hands-on projects and love building meaningful solutions from scratch.
            </p>
            <div className="flex justify-center">
              <a target='_blank' href={'/assets/CV/Profile.pdf'}>  {/* Corrected target='_blank' */}
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  View CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;
