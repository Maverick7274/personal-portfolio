import React from 'react'
import HeroVideo from '../Videos/HeroVideo'
import HeroImage from '../../Assets/HeroImage.jpg'
import BigFooter from "../Footer/BigFooter";
import { Link } from 'react-router-dom';
import AboutImage from '../../Assets/AboutImage.jpg';
import Header from '../Header/Header';
import Hero from './Fragments/Hero';
import About from './Fragments/About';
import Projects from './Fragments/Projects';

function Home() {
  return (
    <div className='lg:pt-[3rem]'>
        <Header />


        {/* Hero */}

        <Hero />

        {/* About Page */}

        <About />


        {/* Projects */}

        <Projects />

        <BigFooter />
    </div>
  )
}

export default Home