import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import Home from './pages/Home'
import Header from './../src/components/Header'
import Hero from './../src/components/Hero'
import About from './../src/components/About'
import Portfolio from './../src/components/Portfolio'
import Services from './../src/components/Services'
import Testimonials from './../src/components/Testimonials'
import Contact from './../src/components/Contact'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Home />
    </>
  )
}

export default App
