import React from 'react'
import './index.css'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testomonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
       <Header />
       <Nav />
       <About />
       <Experience />
       <Services />
       <Portfolio />
       <Testomonials />
       <Contact />
       <Footer />
    </>
  )
}

export default App