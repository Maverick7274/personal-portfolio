import React from 'react'
import { Link } from 'react-router-dom'
import AboutImage from '../../../Assets/AboutImage.jpg';


function About() {
  return (
    <div>
                <div className='pt-[14rem] h-screen flex justify-center items-center lg:flex-row sm:flex-col flex-col gap-[2rem]'>
            <div className='lg:m-[4rem] sm:m-[2rem]'>
                <div className='bg-[rgba(255,255,255,0.6)] rounded-xl p-[1rem]'>
                    <img src={AboutImage} alt='Hero-Image' className="rounded-lg drop-shadow-2xl lg:w-[3000px] w-[300px]" />
                </div>
            </div>
            <div className='mx-[5rem]'>
                <h2 className="text-5xl font-bold text-white md:text-[2.7rem] lg:text-[3rem] text-[4rem] sm:[3rem]">Who Am I?</h2>
                <div className='lg:text-[1.2rem] sm:text-[1rem] text-1rem'>
                    <p className="mt-6 lg:leading-6 md:leading-[1.2rem] leading-[1.4rem] text-300">
                        I am a skilled Engineer, Video and Music Production Artist, possessing a unique blend of technical expertise and creative talent. With a deep understanding of mathematics, physics, and computer science, I am capable of designing and implementing complex systems, analyzing data, and solving complex problems. As a video and music production artist.
                    </p>
                    <p className="mt-6 lg:leading-6 md:leading-[1.2rem] leading-[1.4rem] text-300">
                    I possesses a keen eye for visual aesthetics and a deep understanding of the creative process involved in producing high-quality content. Using industry-standard software, I can create visually stunning videos and produce emotionally evocative music that connects with audiences on a deep level. With the ability to balance technical precision with artistic expression.
                    </p>
                    <p class="mt-6 lg:leading-6 md:leading-[1.2rem] leading-[1.4rem] text-300">
                        I am currently a student at <a href='https://www.amity.edu/greaternoida/' target='_blank' className='link link-primary'>Amity University, Greater Noida</a>, pursuing a Bachelors in Computer Science and Engineering.
                    </p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default About