import React from 'react'
import { RiJavascriptFill, RiTailwindCssFill, RiHtml5Fill, RiCss3Fill, RiBootstrapLine } from "react-icons/ri";
import { RxExternalLink, RxGithubLogo } from "react-icons/rx";
import {  FaReact, FaSass   } from "react-icons/fa";
import { SiCypress, SiJest, SiVitest } from "react-icons/si";
import Bookipedia from '../../assets/Bookipedia.png';
import NoroffShop from '../../assets/NoroffShop.png';
import azAuction from '../../assets/azAuction.png';




function Projects() {
  return (
    <div className='bg-gray-100'>
     <div id='projects' className='my-5'>
        <div>
            <h1 className='text-4xl font-bold text-center my-10'>Projects</h1>
        </div>
        <div className=' space-y-5'>
            <div className='max-w-sm mx-auto p-1 rounded-lg border shadow-md border-black projectsForLgScreenDiv '>
                <div className='lg:px-7 pt-7 pb-32'>
                    <img src={Bookipedia} alt="screenshot of bookipedia.com" className='rounded-t-lg' />
                </div>
                <div>
                    <div className='p-5 space-y-2'>
                    <h3 className='text-2xl font-extrabold'>BOOKIPEDIA</h3>
                    <h4 className='text-lg font-semibold'>Online Booking Site</h4>
                    <p>A online booking website that allows users to book a venue and allows users with manager rights to create, edit and delete a venue and may view bookings for a venue they created. </p>
                    <p>The website provides an interface for searching venues, viewing booked dates, creating profiles, and logging in as either a user or a manager.</p>
                    </div>
                    <div className='p-5 space-y-2'>
                    <h3 className='text-2xl font-semibold'>Technologies</h3>   
                    <div>
                        <ul className='flex flex-wrap space-x-1 space-y-1 justify-start items-center'>
                            <li className='flex items-center bg-orange-500 rounded-md px-2 border shadow-md text-sm'><RiHtml5Fill className='text-md text-black' />HTML</li>
                            <li className='flex items-center  bg-blue-400 rounded-md px-2 border shadow-md text-sm text-white' ><RiCss3Fill className='text-md text-white' /> CSS</li>
                            <li className='flex items-center bg-yellow-500 rounded-md px-2 border shadow-md text-sm text-black'><RiJavascriptFill className='text-lg ' />JavaScript</li>
                            <li className='flex items-center  bg-cyan-600 rounded-md px-2 border shadow-md text-sm text-white' ><RiTailwindCssFill className='text-md text-white' /> Tailwind CSS</li>
                            <li className='flex items-center bg-cyan-300 rounded-md px-2 border shadow-md text-sm text-black'><FaReact className='text-md ' />React</li>
                            <li className='flex items-center bg-emerald-600 rounded-md px-2 border shadow-md text-sm text-white'><SiVitest className='text-lg mr-1' />Vitest</li>
                            <li className='flex items-center  bg-rose-600 rounded-md px-2 border shadow-md text-sm text-white'>Deployed on Vite <img src='/vite.svg' className='size-5 ml-2'></img> </li>
                        </ul>
                    </div> 
                    </div>
                    <div className='flex justify-center gap-10 my-8'>
                    <a href="https://github.com/nyolarraklay/Noroff" className='flex gap-1 font-semibold'>Code <RxGithubLogo className='text-2xl' /></a>
                    <a href="https://bookipedia-onlinebooking.netlify.app/" className='flex gap-1 font-semibold'>Live Demo<RxExternalLink className='text-2xl' /></a> 
                    </div>   
                </div>
               
            </div>
            <div className='max-w-sm mx-auto p-1 rounded-lg border shadow-md border-black projectsForLgScreenDiv'>
                <div className='lg:px-7 pt-7 pb-32'>
                    <img src={NoroffShop} alt="screenshot of noroffshop.com" className='rounded-t-lg' />
                </div>
                <div>
                       <div className='p-5 space-y-2'>
                    <h3 className='text-2xl font-extrabold'>Noroff Shop</h3>
                    <h4 className='text-lg font-semibold'>E-Commerce Site</h4>
                    <p>Noroff Shop is an online store that allows buyers to search for items, browse through all products, pick out products, add them to the cart, and perform validation before checking out.</p>
                    <p>The website provides an interface for searching products, adding items to the cart, increasing item quantities in the cart, deleting items from the cart, performing validation checks for inputs, and handling checkout procedures.</p>
                        </div>
                        <div className='p-5 space-y-2'>
                            <h3>Technologies</h3>   
                            <hr />
                            <div>
                            <ul className='flex flex-wrap space-x-1 space-y-1 justify-start items-center'>
                            <li className='flex items-center bg-orange-500 rounded-md px-2 border shadow-md text-sm'><RiHtml5Fill className='text-md text-black' />HTML</li>
                            <li className='flex items-center  bg-blue-400 rounded-md px-2 border shadow-md text-sm text-white' ><RiCss3Fill className='text-md text-white' /> CSS</li>
                            <li className='flex items-center bg-yellow-500 rounded-md px-2 border shadow-md text-sm text-black'><RiJavascriptFill className='text-lg ' />JavaScript</li>
                            <li className='flex items-center bg-cyan-300 rounded-md px-2 border shadow-md text-sm text-black'><FaReact className='text-md ' />React</li>
                            <li className='flex items-center  bg-cyan-600 rounded-md px-2 border shadow-md text-sm text-white' ><RiTailwindCssFill className='text-md text-white' /> Tailwind CSS</li>
                            <li className='flex items-center  bg-rose-600 rounded-md px-2 border shadow-md text-sm text-white'>Deployed on Vite <img src='/vite.svg' className='size-5 ml-2'></img> </li>
                            </ul>
                        </div> 
                </div>
                <div className='flex justify-center gap-10 my-8'>
                <a href="https://github.com/nyolarraklay/ReactPractice2" className='flex gap-1 font-semibold'>Code <RxGithubLogo className='text-2xl' /></a>
                <a href="https://noroffonlineshop.netlify.app/" className='flex gap-1 font-semibold'>Live Demo<RxExternalLink className='text-2xl' /></a> 
                </div>  
                </div>
                
                 
            </div>
             <div className='max-w-sm mx-auto p-1 rounded-lg border shadow-md border-black projectsForLgScreenDiv'>
                <div className='lg:px-7 pt-7 pb-32'>
                    <img src={azAuction} alt="screenshot of a&z.com" className='rounded-t-lg' />
                </div>
                <div>
     <div className='p-5 space-y-2'>
                    <h3 className='text-2xl font-extrabold'>A & Z Auction</h3>
                    <h4 className='text-lg font-semibold'>Online Auction Site</h4>
                    <p>A & Z auction is a user interaction platform that allows users with stud.noroff.no emails to register, login, update avatars, and view total credit. Registered users can create listings with a title, deadline date, media gallery, and description, as well as add bids to other listings and view bids on their listings.</p>
                    <p>Unregistered users can search through listings, ensuring access to a wide audience.</p>
                    <p>The platform provides interfaces for user registration, login, profile management, listing creation, bid management, and search functionality for unregistered users.</p>
                </div>
                <div className='p-5 space-y-2'>
                    <h3>Technologies</h3>   
                    <hr />
                    <div>
                        <ul className='flex flex-wrap space-x-1 space-y-1 justify-start items-center'>
                            <li className='flex items-center bg-orange-500 rounded-md px-2 border shadow-md text-sm'><RiHtml5Fill className='text-md text-black' />HTML</li>
                            <li className='flex items-center  bg-blue-400 rounded-md px-2 border shadow-md text-sm text-white' ><RiCss3Fill className='text-md text-white' /> CSS</li>
                            <li className='flex items-center bg-yellow-500 rounded-md px-2 border shadow-md text-sm text-black'><RiJavascriptFill className='text-lg ' />JavaScript</li>
                            <li className='flex items-center  bg-purple-600 rounded-md px-2 border shadow-md text-sm text-white' ><RiBootstrapLine className='text-lg' /> Bootstrap</li>
                            <li className='flex items-center bg-rose-200 rounded-md px-2 border shadow-md text-sm text-black'><FaSass className='text-lg ' />Sass</li>
                            
                            <li className='flex items-center bg-amber-800 rounded-md px-2 border shadow-md text-sm text-white'><SiJest className='text-lg mr-1 ' />Jest</li>
                            <li className='flex items-center bg-emerald-400 rounded-md px-2 border shadow-md text-sm text-black'><SiCypress className='text-lg mr-1' />Sass</li>
                            <li className='flex items-center  bg-rose-600 rounded-md px-2 border shadow-md text-sm text-white'>Deployed on GitHub Pages</li>
                        </ul>
                    </div> 
                </div>   
                <div className='flex justify-center gap-10 my-8'>
                <a href="https://github.com/nyolarraklay/SemesterProject-AuctionWebsite" className='flex gap-1 font-semibold'>Code <RxGithubLogo className='text-2xl' /></a>
                <a href="https://nyolarraklay.github.io/SemesterProject-AuctionWebsite/" className='flex gap-1 font-semibold'>Live Demo<RxExternalLink className='text-2xl' /></a> 
                </div> 
                </div>

                   
            </div> 
        </div>
    </div>
    </div>

   
  )
}

export default Projects