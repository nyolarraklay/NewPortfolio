import React from 'react'
import aboutMePhoto from '../../assets/aboutmephoto.avif';
import working from '../../assets/working.png';
import imageBend from '../../assets/imageBend.png';

function AboutMe() {
  return (
    <div className=' h-auto p-8 flex items-center flex-col justify-between ' id='about'>
      <div className='p-1 flex justify-center lg:relative ' >
        <img src={aboutMePhoto} alt="" className='rounded-t-lg lg:rounded-xl lg:w-3/5' />
        <img src={working} alt="" className='aboutImage size-44  lg:right-[210px] lg:z-50' />
        <span>
        <img src={imageBend} alt="" className='aboutImage size-52  lg:right-48 animate-spin' />
        </span>
      </div>
      <div className='mx-auto p-6 text-center lg:text-start space-y-5 lg:px-48 lg:py-10'>
        <h1 className='font-black text-3xl text-blue-400 ' >About Me</h1>
        <h2 className='text-2xl font-bold'>Front-end Developer based in Oslo, Norway</h2>
        <p className='aboutParagraph'>Hello there! I'm Ernesto or you can call me Nyol, a passionate front-end developer based in Oslo, Norway, with a love for crafting beautiful and user-friendly web experiences. With a solid foundation in React, combined with Tailwind CSS and JavaScript, I specialize in building dynamic and responsive web applications that not only meet but exceed the expectations of users. </p>

        <p className='aboutParagraph'>
        With a keen eye for detail and a commitment to delivering high-quality work, I approach each project with enthusiasm and dedication. I believe in the power of collaboration and effective communication, working closely with teams to translate ideas into reality and achieve exceptional results.   
        </p>
      
      <p className='aboutParagraph'>
      I'm currently seeking new opportunities to contribute my expertise to exciting projects and collaborate with like-minded individuals and teams. If you're looking for a driven front-end developer who is committed to excellence and eager to make a meaningful impact, I'd love to connect!
      </p>

      <p className='italic aboutParagraph'> Show me your Design and I will make it a website for you. <br/> Let's bring your vision to life together.<br/> <span className='font-semibold aboutParagraph'>Contact me to start the conversation</span> . </p>
      </div>
   
    </div>
)
}

export default AboutMe