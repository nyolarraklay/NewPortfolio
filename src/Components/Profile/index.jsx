import React from 'react'
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import {  FaReact, FaBootstrap, FaSass, FaWordpress, FaGit   } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill, RiHtml5Fill, RiCss3Fill } from "react-icons/ri";



function Profile() {
  return (
    <div className='bg-gray-100'>
          <div id='home' className='flex flex-col justify-between relative pt-10 mx-auto pb-32 h-screen lgSize'>
      <div className='flex justify-between flex-col items-center text-center px-20 lg:flex-row-reverse lg:items-center lg:text-left lg:px-5 lg:h-[500px]'>
        <div className="size-64 border-4 border-black rounded-full bg-[url('./assets/bildemedbg.png')] bg-cover bg-no-repeat shadow-lg bg-top animate-morph transition-all duration-100 ease-in-out  lg:content-center lg:basis-3/5 lg:h-3/4 "></div>
          <div className='flex flex-col relative max-w-4xl gap-5 lg:px-10'>
            <h1 className='text-5xl sm:text-6xl font-bold my-2 '>Front-end React Developer</h1>
            <p className='text-lg font-semibold lg:pr-48'>Hi, I'm Ernesto Osorio Jr. A pssionate Front-end React Developer based in Oslo, Norway. ✈️ </p>
            <span className='flex cursor-pointer justify-center mt-2 gap-2 md:justify-start'><a href="https://www.linkedin.com/in/ernesto-jr-osorio-16b698248/"><RxLinkedinLogo className='text-2xl' /></a>
            <a href="https://github.com/nyolarraklay"><RxGithubLogo className='text-2xl' /></a> 
            </span>
          </div>
      </div>
      <div className='px-10 pt-5 lg:flex lg:items-center lg:justify-start lg:mx-5'>
        <p className='font-semibold text-2xl text-center'>Tech Stack</p>
        <span className='hidden lg:block text-4xl ml-5 mr-20'>|</span>
        <hr className='my-3 lg:hidden'/>
        
          <div>
            <ul className='flex flex-wrap space-x-1 justify-center items-center lg:space-x-5'>
                <li><RiHtml5Fill className='iconSize text-orange-400' /></li>
                <li><RiCss3Fill className='iconSize rounded-md bg-blue-400 text-white' /></li>
                <li><RiJavascriptFill className='iconSize text-yellow-400' /></li>
                <li><FaReact className='iconSize text-cyan-300 rounded-md bg-black'  /></li>
                <li><FaBootstrap className='iconSize text-purple-700' /></li>
                <li><RiTailwindCssFill className='iconSize text-cyan-600 bg-white rounded-md' /></li>
                <li><FaSass className='iconSize text-pink-400 bg-black rounded-md' /></li>
                <li><FaWordpress className='iconSize text-white bg-black rounded-md' /></li>
                <li><FaGit className='iconSize text-white bg-black rounded-md' /></li>
                <li><RxGithubLogo className='iconSize text-white bg-black rounded-md' /></li>
            </ul>
          </div>
      </div>
    </div>
    </div>

  )
}

export default Profile