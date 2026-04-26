import React from 'react'

interface NavbarProps {
  scrollPosition: number
}

const Navbar: React.FC<NavbarProps> = ({ scrollPosition }) => {
  const isScrolled = scrollPosition > 50

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#151515] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Let's Connect Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-200 font-semibold"
          >
            Let's Connect
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-purple-400" title="Toggle mobile menu" aria-label="Toggle mobile menu">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
