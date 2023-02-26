import React from 'react'
import { Link } from 'react-router-dom'


function Projects() {
  return (
    <div>
        <div className='h-screen flex justify-center items-center lg:flex-row sm:flex-col flex-col-reverse'>
            <div className="container max-w-5xl px-14 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="flex flex-col gap-[2rem] text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-orange-400">
                            <h3 className="text-[2rem] font-semibold">Latest Projects</h3>
                            <Link target='_blank' to='/projects' className="text-xl btn btn-primary">All Projects</Link>
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:dark:bg-gray-700">
                            <Link to='/projects' target='_blank' className="cursor-pointer hover:bg-neutral p-4 rounded-xl flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:dark:bg-orange-400">
                                <h3 className="text-xl font-semibold tracking-wide">Aegis Nexus</h3>
                                <time className="text-xs tracking-wide uppercase dark:dark:text-gray-400">Feb 2023</time>
                                <p className="mt-3">Aegis Nexus is a cutting-edge blockchain-based platform that provides a secure and decentralized storage solution for people's medical certificates. With Aegis Nexus, individuals can store their medical records and important health information in a tamper-proof and easily accessible manner.</p>
                            </Link>
                            <Link to='/projects' target='_blank' className="cursor-pointer hover:bg-neutral p-4 rounded-xl flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:dark:bg-orange-400">
                                <h3 className="text-xl font-semibold tracking-wide">BlockProffer</h3>
                                <time className="text-xs tracking-wide uppercase dark:dark:text-gray-400">Jan 2023</time>
                                <p className="mt-3">BlockProffer is a responsive, decentralised web application working on the MERN Stack and Ethereum blockchain.</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:m-[4rem] '>
                <div className='bg-[rgba(255,255,255,0.6)] rounded-xl p-[2rem]'>
                    <img src='https://cdn.pixabay.com/photo/2015/09/09/20/40/drawing-933207_960_720.jpg' alt='Hero-Image' className="rounded-lg drop-shadow-2xl lg:w-[700px]" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects