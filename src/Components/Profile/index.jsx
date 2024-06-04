import TechStack from '../TechStack';
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

function Profile() {
  return (
    <div className='bg-gray-100'>
          <div id='home' className='flex flex-col justify-center space-y-10 relative pt-10 mx-auto pb-36 h-screen lgSize'>
      <div className='flex justify-between flex-col items-center text-center px-20 lg:flex-row-reverse lg:items-center lg:text-left lg:px-5 lg:h-[500px]'>
        <div className="size-64 border-4 border-black rounded-full bg-[url('./assets/bildemedbg.png')] bg-cover bg-no-repeat shadow-lg bg-top animate-morph transition-all duration-100 ease-in-out  lg:content-center lg:basis-3/5 lg:h-3/4 "></div>
          <div className='flex flex-col relative max-w-4xl gap-5 lg:px-10'>
            <h1 className='text-5xl sm:text-6xl font-bold my-2 '>Front-end React Developer</h1>
            <p className='text-lg font-semibold lg:pr-48'>Hi, I'm Ernesto Osorio Jr. A passionate Front-end React Developer based in Oslo, Norway. ✈️ </p>
            <span className='flex cursor-pointer justify-center mt-2 gap-2 md:justify-start'><a href="https://www.linkedin.com/in/ernesto-jr-osorio-16b698248/" aria-label="Go to my linked-in account"><img src={linkedin} alt="" className='size-10' /></a>
            <a href="https://github.com/nyolarraklay" aria-label="Visit my github profile"><img src={github} alt="" className='size-10' /></a> 
            </span>
          </div>
      </div>
      <div className='px-10 lg:flex lg:items-center lg:justify-start lg:mx-5'>
        <p className='font-semibold text-2xl text-center'>Tech Stack</p>
        <span className='hidden lg:block text-4xl ml-5 mr-20'>|</span>
        <hr className='my-3 lg:hidden'/>
        <TechStack />
      </div>
    </div>
    </div>

  )
}

export default Profile