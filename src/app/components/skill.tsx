import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { SiDialogflow } from "react-icons/si";
import { SiChatbot } from "react-icons/si";

const Skill = () => {
  return (
    <div id='skills'>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xl text-blue-500 tracking-widest font-medium title-font mb-1">
        SKILLS
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">
      {/* SKILLS */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaCss3Alt className='text-1xl font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
              <div className='absolute bg-blue-500 h-1 rounded-xl w-[100%]'/>
            </div>
            <p className='font-bold text-blue-500 text-right'>100%</p>
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaHtml5 className='text-1xl font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
              <div className='absolute bg-blue-500 h-1 rounded-xl w-[95%]'/>
            </div>
            <p className='font-bold text-blue-500 text-right'>95%</p>
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <IoLogoJavascript className='text-1xl font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Javascript
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
              <div className='absolute bg-blue-500 h-1 rounded-xl w-[80%]'/>
            </div>
            <p className='font-bold text-blue-500 text-right'>80%</p>
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <BiLogoTypescript className='text-1xl font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              TypeScript
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
              <div className='absolute bg-blue-500 h-1 rounded-xl w-[90%]'/>
            </div>
            <p className='font-bold text-blue-500 text-right'>90%</p>
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <SiTailwindcss className='text-1xl font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Tailwind CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
              <div className='absolute bg-blue-500 h-1 rounded-xl w-[85%]'/>
            </div>
            <p className='font-bold text-blue-500 text-right'>85%</p>
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaPython className='text-1xl font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Python
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
              <div className='absolute bg-blue-500 h-1 rounded-xl w-[90%]'/>
            </div>
            <p className='font-bold text-blue-500 text-right'>90%</p>
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <TbMessageChatbotFilled className='text-1xl font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Chatbots
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
              <div className='absolute bg-blue-500 h-1 rounded-xl w-[100%]'/>
            </div>
            <p className='font-bold text-blue-500 text-right'>100%</p>
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <SiDialogflow className='text-1xl font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Dialogflow
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
              <div className='absolute bg-blue-500 h-1 rounded-xl w-[80%]'/>
            </div>
            <p className='font-bold text-blue-500 text-right'>80%</p>
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <SiChatbot className='text-1xl font-bold'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Kommunicate
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
              <div className='absolute bg-blue-500 h-1 rounded-xl w-[80%]'/>
            </div>
            <p className='font-bold text-blue-500 text-right'>80%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Skill
