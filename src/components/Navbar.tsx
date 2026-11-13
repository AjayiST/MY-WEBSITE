import React, { useState } from 'react'

interface NavbarProps {
  scrollPosition: number
}

const Navbar: React.FC<NavbarProps> = ({ scrollPosition }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isScrolled = scrollPosition > 30

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Experience & Portfolio', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#faf7f2]/85 backdrop-blur-xl border-b border-[#e8e1d5]/80 shadow-[0_4px_30px_rgba(60,48,35,0.03)]'
          : 'bg-[#faf7f2]/40 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            <h1 className="text-xl font-extrabold tracking-tight text-stone-900 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-stone-900 inline-block shadow-sm"></span>
              Belmont
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-stone-600 hover:text-stone-950 hover:bg-[#ede7dc]/60 px-3.5 py-1.5 rounded-xl transition-all duration-200 font-medium text-sm cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/AjayiST"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-stone-700 hover:text-stone-950 bg-[#faf8f5]/80 hover:bg-[#faf8f5] border border-[#e4ded3] rounded-xl shadow-2xs transition-all cursor-pointer"
              title="GitHub Profile (@AjayiST)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://discord.com/users/belmontt"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-stone-900 hover:bg-black text-[#faf8f4] font-semibold rounded-xl text-sm transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2 group"
              title="Connect on Discord: @belmontt"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#faf8f4] group-hover:scale-110 transition-transform">
                <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.396-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.027c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.294.075.075 0 0 1 .078-.011c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.198.373.295a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.076.076 0 0 0-.041.107c.359.698.77 1.364 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-4.783-.838-8.94-3.549-12.617a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.122 0-2.046-1.029-2.046-2.291 0-1.263.922-2.291 2.046-2.291 1.125 0 2.065 1.029 2.046 2.291 0 1.263-.92 2.291-2.046 2.291zm7.973 0c-1.122 0-2.046-1.029-2.046-2.291 0-1.263.922-2.291 2.046-2.291 1.125 0 2.065 1.029 2.046 2.291 0 1.263-.92 2.291-2.046 2.291z"/>
              </svg>
              Let's Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-stone-700 hover:text-stone-950 p-2 cursor-pointer"
              title="Toggle mobile menu"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#e8e1d5] bg-[#faf7f2]/95 backdrop-blur-xl space-y-2 rounded-b-2xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2.5 text-stone-700 hover:bg-[#ede7dc] hover:text-stone-950 font-medium rounded-xl text-base cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://discord.com/users/belmontt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-stone-900 text-[#faf8f4] font-semibold rounded-xl text-sm cursor-pointer shadow-sm mx-2 mt-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.396-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.027c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.294.075.075 0 0 1 .078-.011c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.198.373.295a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.076.076 0 0 0-.041.107c.359.698.77 1.364 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-4.783-.838-8.94-3.549-12.617a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.122 0-2.046-1.029-2.046-2.291 0-1.263.922-2.291 2.046-2.291 1.125 0 2.065 1.029 2.046 2.291 0 1.263-.92 2.291-2.046 2.291zm7.973 0c-1.122 0-2.046-1.029-2.046-2.291 0-1.263.922-2.291 2.046-2.291 1.125 0 2.065 1.029 2.046 2.291 0 1.263-.92 2.291-2.046 2.291z"/>
              </svg>
              Let's Connect (Discord)
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
