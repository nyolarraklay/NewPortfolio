import React from 'react'
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";

function Footer() {
  return (
    <div className='bg-black p-10 w-full relative'>
        <div>
            <div className='flex items-center justify-between text-white font-semibold flex-wrap gap-5'>
                <h3 className='text-center flex-grow'>Copyright © 2024. All rights are reserve</h3>
                <div className='flex justify-center gap-4 items-center basis-full'>
                    <a href="https://www.linkedin.com/in/ernesto-jr-osorio-16b698248/"><RxLinkedinLogo className='text-2xl' /></a>
                    <a href="https://github.com/nyolarraklay"><RxGithubLogo className='text-2xl' /></a> 
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Footer