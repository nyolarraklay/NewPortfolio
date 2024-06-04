import sass from '../../assets/sass.png'
import github from '../../assets/github.png'
import git from '../../assets/git.png'
import bootstrap from '../../assets/bootstrap.png'
import wordpress from '../../assets/wordpress.png'
import javascript from '../../assets/js.png'
import react from '../../assets/science.png'
import html from '../../assets/html-5.png'
import css from '../../assets/social.png'
import tailwind from '../../assets/tailwind.png'

function TechStack() {
  return (
    <div className='my-0'>
        <ul className='flex flex-wrap space-x-1 justify-center items-center lg:space-x-3'>
            <li><img src={html} alt="an image of an icon html"className='iconSizeTech' /></li>
            <li><img src={css} alt="an image of an icon css" className='iconSizeTech'/></li>
            <li><img src={javascript} alt="an image of an icon js"className='iconSizeTech' /></li>
            <li><img src={react} alt="an image of an icon react"className='iconSizeTech' /></li>
            <li><img src={bootstrap} alt="an image of an icon bootstrap"className='iconSizeTech' /></li>
            <li><img src={sass} alt="an image of an icon saa" className='iconSizeTech'/></li>
            <li><img src={tailwind} alt="an image of an icon tailwind" className='w-12 h-7'/></li>
            <li><img src={wordpress} alt="an image of an icon wordpress"className='iconSizeTech' /></li>
            <li><img src={git} alt="an image of an icon git" className='iconSizeTech'/></li>
            <li><img src={github} alt="an image of an icon github"className='iconSizeTech' /></li>
        </ul>
    </div>
  )
}

export default TechStack