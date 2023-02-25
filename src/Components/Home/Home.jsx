import React from 'react'
import HeroVideo from '../Videos/HeroVideo'
import HeroImage from '../../Assets/HeroImage.jpg'

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
                <h1 className="text-[4rem] text-right text-[#fff] leading-[4rem] bg-[rgba(0,0,0,0.5)] pt-[0.5rem] pb-[0.5rem] pr-[1rem] pl-[1rem] rounded-xl drop-shadow-2xl font-bold">Creating digital experiences that stand out</h1>
                <div className="chat chat-end">
                    <div className="chat-bubble text-[1.3rem] text-[#fff] my-6">👋🏼 I'm Neelanjan Mukherji, a software engineer, video and music production artist, and digital marketing expert.</div>
                </div>
                <div className='grid justify-end'>
                    <button className="btn drop-shadow-2xl btn-primary text-[1.3rem]">Explore My Work</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home