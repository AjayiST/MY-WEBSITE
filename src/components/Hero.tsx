import React, { useState, useEffect } from 'react'

const Hero: React.FC = () => {
  const titles = ['Project Developer', 'Mechanical Designer', 'AI Tech Enthusiast']
  const [displayedText, setDisplayedText] = useState('')
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const deleteDelay = 2000

    let timer: ReturnType<typeof setTimeout>

    if (!isDeleting && charIndex < currentTitle.length) {
      // Typing
      timer = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, typingSpeed)
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timer = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, typingSpeed)
    } else if (!isDeleting && charIndex === currentTitle.length) {
      // Finished typing, wait before deleting
      timer = setTimeout(() => {
        setIsDeleting(true)
      }, deleteDelay)
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, move to next title
      setTitleIndex((prev) => (prev + 1) % titles.length)
      setIsDeleting(false)
    }

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, titleIndex, titles])

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="animate__animated animate__fadeInLeft">
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Belmont</span>
          </h2>
          <div className="h-20 mb-6">
            <p className="text-2xl md:text-4xl text-purple-400 font-semibold">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          <p className="text-gray-300 text-lg mb-8 max-w-xl">
            I create innovative solutions blending cutting-edge technology with creative design. 
            From Web3 projects to mechanical innovations, I turn ideas into reality.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-200 font-semibold"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-purple-400 rounded-lg hover:bg-purple-400 hover:bg-opacity-10 transition-all duration-200 font-semibold"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Content - Hero Image with Animation */}
        <div className="flex justify-center">
          <div className="relative w-80 h-80 animate__animated animate__fadeInRight">
            {/* Animated Background Circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            
            {/* Hero Image Container with Bounce Animation */}
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-pink-600 p-1 flex items-center justify-center hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 animate-float">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl">
                🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
