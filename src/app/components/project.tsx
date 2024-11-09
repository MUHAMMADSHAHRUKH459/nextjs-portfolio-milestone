import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import bluewaveImage from '../../../public/assets/portfolio/bluewave.png'; 
import fast from '../../../public/assets/portfolio/fast.png'; 
import Intellibot from '../../../public/assets/portfolio/Intellibot.png'; 

const Project = () => {
  return (
    <div id='project'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Explore a range of innovative projects crafted with precision and creativity. Each project showcases unique solutions and technical expertise.
            </p>
          </div>
          <div className="flex flex-wrap -m-8">
            {/* project */}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={bluewaveImage.src} 
                  width={400} 
                  height={300} 
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    BlueWave Aviation Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Air Travel
                  </h1>
                  <p className="leading-relaxed">
                    This is BlueWave Aviation Project, a web application for booking flights.
                  </p>
                  <Link target='_blank' href="https://bluewave-aviation.vercel.app/">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={fast.src} 
                  width={400} 
                  height={300} 
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    Flavor & Feast Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Restraunts
                  </h1>
                  <p className="leading-relaxed">
                  a fully responsive restaurant website built using Tailwind CSS!
                  </p>
                  <Link target='_blank' href="https://flavor-feast-website.vercel.app/?vercelToolbarCode=_Ub6wAlRhnq_taM">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={Intellibot.src} 
                  width={400} 
                  height={300} 
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                   Intellibot Creation Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    ChatBot Agency
                  </h1>
                  <p className="leading-relaxed">
                  Unlock the power of AI with our top-notch automation solutions. At Intellibot Creation.
                  </p>
                  <Link target='_blank' href="https://intellibot-creation.vercel.app/">
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
