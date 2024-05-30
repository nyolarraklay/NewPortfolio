import React from 'react'

function AboutMe() {
  return (
    <div className='bg-gray-100 h-screen p-8' id='about'>
      <div className='p-1' >
        <img src="./assets/aboutmephoto.avif" alt="" className='rounded-t-lg' />
      </div>
        <div className='mx-auto p-6 text-center space-y-5'>
        <h1 className='font-semibold text-2xl text-blue-400' >About Me</h1>
        <p>Hello there! I'm Ernesto or you can call me Nyol, a passionate front-end developer based in Oslo, Norway, with a love for crafting beautiful and user-friendly web experiences. With a solid foundation in React, combined with Tailwind CSS and JavaScript, I specialize in building dynamic and responsive web applications that not only meet but exceed the expectations of users. </p>

        <p>
        With a keen eye for detail and a commitment to delivering high-quality work, I approach each project with enthusiasm and dedication. I believe in the power of collaboration and effective communication, working closely with teams to translate ideas into reality and achieve exceptional results.   
        </p>
      
      <p>
      I'm currently seeking new opportunities to contribute my expertise to exciting projects and collaborate with like-minded individuals and teams. If you're looking for a driven front-end developer who is committed to excellence and eager to make a meaningful impact, I'd love to connect!
      </p>

      <p className='italic'> Show me your Design and I will make it a website for you. <br/> Let's bring your vision to life together.<br/> <span className='font-semibold'>Contact me to start the conversation</span> . </p>
    </div>
   
    </div>
)
}

export default AboutMe