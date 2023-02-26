import React from 'react'
import Header from '../Header/Header';
import Hero from './Fragments/Hero';
import About from './Fragments/About';
import Projects from './Fragments/Projects';

function Home() {
  return (
    <div>
        <Header />


        {/* Hero */}

        <Hero />

        {/* About Page */}

        <About />


        {/* Projects */}

        <Projects />

    </div>
  )
}

export default Home