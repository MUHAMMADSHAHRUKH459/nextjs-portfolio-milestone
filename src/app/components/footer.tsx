import React from 'react'
import Link from 'next/link'
import Image from 'next/image'; 
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedinSquare } from "react-icons/bi";


const Footer = () => {
  return (
    <div className='bg-blue-50'> 
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image 
            src="/assets/picture/shahrukhlogo.jpg" 
            alt="shahrukh-javed" 
            width={100} 
            height={100} 
            className="rounded-full w-[55px]" />
      <span className="ml-3 text-xl">Shahrukh Javed</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      <a href="https://www.linkedin.com/in/shahrukh-javed459/">© 2024 ShahrukhJaved-</a>
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link target='_blank' href={"https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=shahrukhjaved459@gmail.com"} className="text-gray-500">
      <SiGmail className='text-2xl hover:text-[#BB001B]' />
      </Link>
      <Link target='_blank' href={"https://github.com/MUHAMMADSHAHRUKH459"} className="ml-3 text-gray-500">
      <FaGithub className='text-2xl hover:text-[#211F1F]' />
      </Link>
      <Link target='_blank' href={"https://www.instagram.com/shahruk_javed_/"} className="ml-3 text-gray-500">
      <AiOutlineInstagram className='text-2xl hover:text-[#C13584]'  />
      </Link>
      <Link target='_blank' href={"https://www.linkedin.com/in/shahrukh-javed459/"} className="ml-3 text-gray-500">
      <BiLogoLinkedinSquare className='text-2xl hover:text-[#0a66c2]' />
      </Link>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer