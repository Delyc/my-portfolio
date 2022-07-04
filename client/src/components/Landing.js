import React from 'react'
import About from './containers/About';
import Contact from './containers/Contact';
import Experience from './containers/Experience';
import Intro from './containers/Intro';
import Projects from './containers/Projects';
import Skills from './containers/Skills';
import Testimony from './containers/Testimony';
import NavBar from './navbar/NavBar';

function Landing() {
  return (
    <>
     
     <NavBar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimony />
      <Contact />

    </>
  )
}

export default Landing