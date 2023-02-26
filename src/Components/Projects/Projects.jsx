import React from 'react';
import AvatarHeader from "../Header/AvatarHeader";

function Projects() {
  return (
    <div className='py-[15rem]'>
        <AvatarHeader />
        <div className='h-screen flex justify-center items-center'>
            <ul className="p-4 lg:p-[7rem]">
                <li>
                    <article>
                        <label rel="noopener noreferrer" htmlFor="aegis" className="cursor-pointer grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:bg-neutral">
                            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Aegis Nexus</h3>
                            <time datetime="" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:dark:text-gray-400">Feb 12, 2023</time>
                            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:dark:text-gray-300">Aegis Nexus is a cutting-edge blockchain-based platform that provides a secure and decentralized storage solution for people's medical certificates. With Aegis Nexus, individuals can store their medical records and important health information in a tamper-proof and easily accessible manner.</p>
                        </label>
                    </article>
                </li>
                <li>
                    <article>
                        <label rel="noopener noreferrer" htmlFor='blockproffer' className="cursor-pointer grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:bg-neutral">
                            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Blockproffer</h3>
                            <time datetime="" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:dark:text-gray-400">Jan 26, 2023</time>
                            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:dark:text-gray-300">BlockProffer is a responsive, decentralised web application working on the MERN Stack and Ethereum blockchain.</p>
                        </label>
                    </article>
                </li>
                <li>
                    <article>
                        <label rel="noopener noreferrer" htmlFor="flocc" className="cursor-pointer grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:bg-neutral">
                            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Floc.c</h3>
                            <time datetime="" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:dark:text-gray-400">Sept 27, 2022</time>
                            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:dark:text-gray-300">An Online Compiler with Multiple Language Support.</p>
                        </label>
                    </article>
                </li>
                <li>
                    <article>
                        <label rel="noopener noreferrer" htmlFor="career" className="cursor-pointer grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:bg-neutral">
                            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Career Compass</h3>
                            <time datetime="" className="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:dark:text-gray-400">April 14, 2022</time>
                            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:dark:text-gray-300">Career Compass is a Career Guidance System which generates an overall report of Strengths and Weaknesses of User in Different aspects like Response Time, Mental Abilities, Memory etc by asking user to answer few questions and play some brain games. Based on the Generated Data of Strengths and Weaknesses, Career Compass Recommends a Good Career Option to the User that would suit them.</p>
                        </label>
                    </article>
                </li>
            </ul>
        </div>


        {/* Modals */}

        {/* Aegis Nexus */}
        <input type="checkbox" id="aegis" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box w-11/12 max-w-3xl">
                <label htmlFor="aegis" className="btn btn-sm btn-circle absolute right-2 top-2 font-[900]">✕</label>
                <h3 className="text-lg font-bold">Aegis Nexus</h3>
                <p>Aegis Nexus is a cutting-edge blockchain-based platform that provides a secure and decentralized storage solution for people's medical certificates. With Aegis Nexus, individuals can store their medical records and important health information in a tamper-proof and easily accessible manner.</p>
                <p className="py-6">Project Link : <a className='link link-primary' href='https://github.com/VaneWeave/TRINIT_VANEWEAVE_WEB_02-Aegis-Nexus.git'>https://github.com/VaneWeave/TRINIT_VANEWEAVE_WEB_02-Aegis-Nexus.git</a> </p>
            </div>
        </div>
        
        {/* BlockProffer */}
        <input type="checkbox" id="blockproffer" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box w-11/12 max-w-3xl">
                <label htmlFor="blockproffer" className="btn btn-sm btn-circle absolute right-2 top-2 font-[900]">✕</label>
                <h3 className="text-lg font-bold">BlockProffer</h3>
                <p>BlockProffer is a responsive, decentralised web application working on the MERN Stack and Ethereum blockchain.</p>
                <p className="py-6">Project Link : <a className='link link-primary' href='https://github.com/Semicolon-Stardust/blockproffer-api.git'>https://github.com/Semicolon-Stardust/blockproffer-api.git</a> </p>
            </div>
        </div>

        {/* Floc.c */}
        <input type="checkbox" id="flocc" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box w-11/12 max-w-3xl">
                <label htmlFor="flocc" className="btn btn-sm btn-circle absolute right-2 top-2 font-[900]">✕</label>
                <h3 className="text-lg font-bold">BlockProffer</h3>
                <p>An Online Compiler with Multiple Language Support.</p>
                <p className="py-6">Project Link : <a className='link link-primary' href='https://github.com/Semicolon-Stardust/Online-Compiler.git'>https://github.com/Semicolon-Stardust/Online-Compiler.git</a> </p>
            </div>
        </div>

        {/* Career Compass */}
        <input type="checkbox" id="career" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box w-11/12 max-w-3xl">
                <label htmlFor="career" className="btn btn-sm btn-circle absolute right-2 top-2 font-[900]">✕</label>
                <h3 className="text-lg font-bold">Career Compass</h3>
                <p>Career Compass is a Career Guidance System which generates an overall report of Strengths and Weaknesses of User in Different aspects like Response Time, Mental Abilities, Memory etc by asking user to answer few questions and play some brain games. Based on the Generated Data of Strengths and Weaknesses, Career Compass Recommends a Good Career Option to the User that would suit them.</p>
                <p className="py-6">Project Link : <a className='link link-primary' href='https://github.com/Semicolon-Stardust/Career-Compass.git'>https://github.com/Semicolon-Stardust/Career-Compass.git</a> </p>
            </div>
        </div>

    </div>
  )
}

export default Projects