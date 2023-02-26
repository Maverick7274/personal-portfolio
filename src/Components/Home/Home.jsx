import React from 'react'
import HeroVideo from '../Videos/HeroVideo'
import HeroImage from '../../Assets/HeroImage.jpg'
import BigFooter from "../Footer/BigFooter";

function Home() {
  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
            <div className='2xl:w-full'>
                <HeroVideo />
            </div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className=''>
                    <img src={HeroImage} alt='Hero-Image' className="max-w-sm rounded-lg drop-shadow-2xl" />
                </div>
                <div>
                <h1 className="text-[2rem] lg:text-[4rem] md:text-[3rem] sm:text-[2.6rem] text-center sm:text-left md:text-left lg:text-right leading-[2rem] lg:leading-[5rem] md:leading-[3rem] sm:leading-[3rem] bg-[rgba(0,0,0,0.5)] text-[#fff] pt-[0.5rem] pb-[0.5rem] pr-[1rem] pl-[1rem] rounded-xl drop-shadow-2xl font-bold">Creating digital experiences that stand out</h1>
                <div className="chat chat-end">
                    <div className="bg-[rgba(0,0,0,0.8)] rounded-xl text-[1.3rem] text-center lg:text-right md:text-left sm:text-left my-6 pt-[0.5rem] pb-[0.5rem] pr-[1rem] pl-[1rem] text-[#fff]">👋🏼 I'm Neelanjan Mukherji, a software engineer, video and music production artist, and digital marketing expert.</div>
                </div>
                <div className='grid sm:justify-start lg:justify-end md:justify-start justify-center'>
                    <button className="btn drop-shadow-2xl btn-primary text-[1.3rem]">Explore My Work</button>
                </div>
                </div>
            </div>
        </div>
        <BigFooter />
    </div>
  )
}

export default Home