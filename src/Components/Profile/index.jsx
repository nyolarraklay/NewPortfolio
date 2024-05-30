import React from 'react'
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import {  FaReact, FaBootstrap, FaSass, FaWordpress, FaGit   } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill, RiHtml5Fill, RiCss3Fill } from "react-icons/ri";

function Profile() {
  return (
    <div id='home' className='flex justify-evenly relative flex-col h-screen text-center items-center p-10'>
   <div className="size-96 border-4 border-black rounded-full bg-[url('./assets/bildemedbg.png')] bg-contain bg-bottom bg-no-repeat shadow-lg animate-morph transition-all duration-100 ease-in-out"
      ></div>
      <div className='flex flex-col relative max-w-4xl'>
        
        <h1 className='text-5xl sm:text-6xl font-bold my-8'>Front-end Developer</h1>
       
        <p className='text-lg font-semibold'>Hi, I'm Ernesto Osorio Jr. A pssionate Front-end React Developer based in Oslo, Norway. ✈️ </p>
        <span className='flex cursor-pointer justify-center my-5 gap-2'><a href="https://www.linkedin.com/in/ernesto-jr-osorio-16b698248/"><RxLinkedinLogo className='text-2xl' /></a>
        <a href="https://github.com/nyolarraklay"><RxGithubLogo className='text-2xl' /></a> 
        </span>
      </div>
      <div>
        <p>Tech Stack</p>
          <div>
            <ul className='flex flex-wrap space-x-3 justify-center items-center'>
                <li><RiHtml5Fill className='text-6xl text-orange-400' /></li>
                <li><RiCss3Fill className='text-5xl rounded-md bg-blue-400 text-white' /></li>
                <li><RiJavascriptFill className='text-6xl text-yellow-400' /></li>
                <li><FaReact className='text-5xl text-cyan-300 rounded-md bg-black'  /></li>
                <li><FaBootstrap className='text-6xl text-purple-700' /></li>
                <li><RiTailwindCssFill className='text-5xl text-cyan-600 bg-white rounded-md' /></li>
                <li><FaSass className='text-5xl text-pink-400 bg-black rounded-md' /></li>
                <li><FaWordpress className='text-5xl text-white bg-black rounded-md' /></li>
                <li><FaGit className='text-5xl text-white bg-black rounded-md' /></li>
                <li><RxGithubLogo className='text-5xl text-white bg-black rounded-md' /></li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Profile