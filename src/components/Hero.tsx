import React, { useState, useEffect } from 'react'

const TITLES = [
  'Community Manager',
  'Community Moderator',
  'Bot & Tool Builder',
]

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTitle = TITLES[titleIndex % TITLES.length]
    const typingSpeed = isDeleting ? 45 : 85
    const deleteDelay = 2200

    let timer: ReturnType<typeof setTimeout>

    if (!isDeleting && charIndex < currentTitle.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, typingSpeed)
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, typingSpeed)
    } else if (!isDeleting && charIndex >= currentTitle.length) {
      timer = setTimeout(() => {
        setIsDeleting(true)
      }, deleteDelay)
    } else if (isDeleting && charIndex === 0) {
      setTitleIndex((prev) => (prev + 1) % TITLES.length)
      setIsDeleting(false)
    }

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, titleIndex])

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 bg-gradient-to-b from-[#caf0f8] via-[#def2f7] to-[#caf0f8] bg-glass-grid relative overflow-hidden">
      {/* Ambient Frosted Ocean Blue Serenity Orbs */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-[#90e0ef]/65 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-[#ade8f4]/75 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl w-full grid grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="col-span-7 min-w-0 animate__animated animate__fadeInLeft">
          {/* Status Badge with Live Pulse */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl sm:rounded-full glass-pill text-[#023e8a] border border-[#48cae4]/70 text-[10px] sm:text-xs font-semibold mb-4 sm:mb-6 shadow-[0_4px_16px_rgba(0,180,216,0.2)] max-w-full leading-snug">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00b4d8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0077b6]"></span>
            </span>
            <span>Available for Community Management & Web3 Automation Projects</span>
          </div>

          <h2 className="text-2xl min-[480px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#03045e] mb-3 sm:mb-4 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-[#023e8a] via-[#0077b6] to-[#00b4d8] bg-clip-text text-transparent underline decoration-[#48cae4] underline-offset-4 sm:underline-offset-8">Belmont</span>
          </h2>

          <div className="min-h-[2.25rem] sm:h-14 md:h-16 mb-3 sm:mb-6 flex items-center">
            <p className="text-sm min-[480px]:text-lg sm:text-2xl md:text-3xl text-[#023e8a] font-semibold tracking-tight">
              {displayedText}
              <span className="inline-block w-0.5 h-4 min-[480px]:h-5 sm:h-7 ml-1 bg-[#00b4d8] shadow-[0_0_8px_rgba(0,180,216,0.8)] animate-pulse align-middle"></span>
            </p>
          </div>

          <p className="text-[#002d5a] text-xs min-[480px]:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-5 sm:mb-7 max-w-xl font-normal">
            I help Web3 projects manage active, safe and hyped communities. I combine hands-on moderation and community growth with vibecoding custom bots, web utilities, and automations that make chats run smoothly.
          </p>

          {/* Quick Value Pills */}
          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/85 border border-[#ade8f4] text-[11px] sm:text-xs font-semibold text-[#023e8a] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8] shadow-[0_0_6px_rgba(0,180,216,0.8)]"></span>
              ⚡ Sub-Second Rust Bots
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/85 border border-[#ade8f4] text-[11px] sm:text-xs font-semibold text-[#023e8a] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#48cae4] shadow-[0_0_6px_rgba(72,202,228,0.8)]"></span>
              🛡️ Anti-Drainer Security
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/85 border border-[#ade8f4] text-[11px] sm:text-xs font-semibold text-[#023e8a] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0077b6] shadow-[0_0_6px_rgba(0,119,182,0.8)]"></span>
              🚀 Organic Telegram Growth
            </span>
          </div>

          <div className="flex gap-2.5 sm:gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-4 py-2.5 sm:px-7 sm:py-3.5 bg-gradient-to-r from-[#0077b6] via-[#0096c7] to-[#00b4d8] hover:from-[#023e8a] hover:via-[#0077b6] hover:to-[#0096c7] text-white text-xs sm:text-sm md:text-base font-bold rounded-xl shadow-[0_4px_20px_rgba(0,150,199,0.35)] hover:shadow-[0_6px_25px_rgba(0,180,216,0.5)] transition-all duration-200 cursor-pointer"
            >
              View Work Experience
            </a>
            <a
              href="#contact"
              className="px-4 py-2.5 sm:px-7 sm:py-3.5 glass-surface glass-surface-hover text-[#03045e] hover:text-[#023e8a] border border-[#ade8f4] hover:border-[#00b4d8] text-xs sm:text-sm md:text-base rounded-xl font-semibold transition-all duration-200 cursor-pointer"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Content - Hero Image with Frosted Ocean Glass Frame */}
        <div className="col-span-5 min-w-0 flex justify-center">
          <div className="relative w-full max-w-[180px] min-[480px]:max-w-[230px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[350px] animate__animated animate__fadeInRight">
            {/* Ambient Aura Frame */}
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#90e0ef] via-[#ade8f4] to-[#48cae4] rounded-3xl blur-xl sm:blur-2xl opacity-75"></div>

            {/* Profile Card Container with Crystal Frosted Glass Surface */}
            <div className="relative w-full aspect-square rounded-2xl sm:rounded-3xl glass-surface p-1.5 sm:p-3 animate-float border border-white/95 shadow-[0_15px_35px_rgba(0,119,182,0.18)]">
              <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-[#caf0f8] via-[#def2f7] to-[#ade8f4] border border-white/90 relative">
                <img
                  src="/yo.jpg"
                  alt="Belmont Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Verified Lead Pill */}
              <div className="absolute -bottom-2 -right-2 glass-pill px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold text-[#023e8a] border border-[#48cae4]/80 shadow-md flex items-center gap-1.5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#00b4d8] shadow-[0_0_6px_rgba(0,180,216,0.8)] animate-pulse"></span>
                <span>Verified Lead</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero