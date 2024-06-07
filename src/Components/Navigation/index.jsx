import React from 'react'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";


function Navigation() {
const [hideNav, setHideNav] = useState(false)

const handleNav = () => {
    setHideNav(!hideNav)
}
 const handleClick = (e, targetId)=>{
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
        window.scrollTo({
            top: target.offsetTop -75,
            behavior: 'smooth'
        });
    }
  }
  return (
    <div className='flex flex-wrap items-center justify-between left-0  sticky top-0 z-[200] h-auto w-full bg-white shadow-md px-10 py-5 '>
        {/* Logo */}
        <div>
            <h1 className="text-xl font-bold">Nyolosorio.dev</h1>
        </div>  {/* End of Logo */}
        <button onClick={handleNav} className="block sm:hidden" aria-label="Hamburger-menu"> <GiHamburgerMenu className='text-xl font-bold' /> </button>
         {/* Nav (desktop) */}
        <div className='hidden sm:flex sm:flex-grow sm:justify-end'>
            <ul className='flex space-x-10 text-md font-bold'>
                <li onClick={(e) => handleClick(e, '#home')}>
                    <a href="#home" >Home</a>
                </li>
                <li onClick={(e) => handleClick(e, '#about')}>
                    <a href="#about">About</a>
                </li>
                <li onClick={(e) => handleClick(e, '#projects')}>
                    <a href="#projects">Projects</a>
                </li>
                <li onClick={(e) => handleClick(e, '#contacts')}>
                    <a href="#contacts">Contact</a>
                </li>
            </ul>
        </div> {/* End of Nav (desktop) */}
        {/* Nav (mobile) */}
        <div
        className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col justify-center items-center text-2xl transition-all duration-300 ease-in-out ${
          hideNav ? 'translate-x-0' : '-translate-x-full'
        } sm:hidden`}
      >
            <span className='absolute right-10 top-6' onClick={handleNav}><MdClose className='text-2xl' /> </span>
            <ul className='flex flex-col space-y-10 text-md font-bold'>
            <li onClick={(e) => handleClick(e, '#home')}>
                    <a href="#home" onClick={handleNav} >Home</a>
                </li>
                <li onClick={(e) => handleClick(e, '#about')}>
                    <a href="#about" onClick={handleNav}>About</a>
                </li>
                <li onClick={(e) => handleClick(e, '#projects')}>
                    <a href="#projects" onClick={handleNav}>Projects</a>
                </li>
                <li onClick={(e) => handleClick(e, '#contacts')}>
                    <a href="#contacts" onClick={handleNav}>Contact</a>
                </li>
            </ul>
        </div>  {/* End of Nav (mobile) */}
    </div>
  )
}

export default Navigation