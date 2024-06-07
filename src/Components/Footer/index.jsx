import github from '../../assets/githubwhite.png'
import linkedin from '../../assets/linkedin.png'


function Footer() {
  return (
    <div className='bg-black p-10 w-full relative'>
        <div>
            <div className='flex items-center justify-between text-white font-semibold flex-wrap gap-5'>
                <p className='text-center flex-grow'>Copyright © 2024. All rights are reserve</p>
                <div className='flex justify-center gap-4 items-center basis-full'>
                <a href="https://www.linkedin.com/in/ernesto-jr-osorio-16b698248/" aria-label="Go to my linked-in account"><img src={linkedin} alt="" className='size-10' /></a>
            <a href="https://github.com/nyolarraklay" aria-label="Visit my github profile"><img src={github} alt="" className='size-10' /></a> 
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Footer