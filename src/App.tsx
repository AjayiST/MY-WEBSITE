import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-transparent text-slate-100 selection:bg-sky-500 selection:text-white">
      <Navbar scrollPosition={scrollPosition} />
      <main>
        <div id="home">
          <Hero />
        </div>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App