import React, { useState } from 'react'

const Footer: React.FC = () => {
  const [email, setEmail] = useState('')
  const [subscribeLoading, setSubscribeLoading] = useState(false)
  const [subscribeMessage, setSubscribeMessage] = useState('')

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribeLoading(true)

    try {
      setSubscribeMessage('Thanks for subscribing!')
      setEmail('')
      setTimeout(() => setSubscribeMessage(''), 5000)
    } catch {
      setSubscribeMessage('Failed to subscribe. Please try again.')
    } finally {
      setSubscribeLoading(false)
    }
  }

  return (
    <footer className="bg-[#040711] bg-gradient-to-b from-[#070b14] via-[#040711] to-[#020409] text-slate-400 py-16 px-4 border-t border-sky-500/15 relative overflow-hidden">
      {/* Subtle Cyber Blue Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-glass-grid-dark pointer-events-none"></div>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-sky-500/[0.06] rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Newsletter Section */}
        <div className="mb-16 max-w-xl mx-auto text-center glass-surface-dark rounded-2xl p-8 sm:p-10 border border-sky-500/20 shadow-[0_10px_35px_rgba(2,6,23,0.7)]">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
            Stay in the Loop
          </h3>
          <p className="text-slate-300 text-sm mb-6 leading-relaxed">
            Get updates on community management strategies, custom Web3 bots, and personal experiments.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-white/[0.05] border border-white/15 rounded-xl focus:outline-none focus:border-sky-400 focus:bg-white/[0.08] transition-all duration-200 text-white placeholder-slate-500 text-sm shadow-xs"
            />
            <button
              type="submit"
              disabled={subscribeLoading}
              className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-200 text-sm shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
            >
              {subscribeLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {subscribeMessage && (
            <p className="text-center text-sky-400 text-sm mt-3 font-medium">{subscribeMessage}</p>
          )}
        </div>

        <hr className="border-white/10 mb-12" />

        {/* Main Footer Content */}
        <div className="max-w-xl mx-auto flex justify-between gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#home" className="hover:text-sky-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-sky-400 transition-colors">
                  Experience & Portfolio
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-sky-400 transition-colors">
                  Technical Tools
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-400 transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-xs uppercase tracking-wider">
              Direct Connect
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="https://t.me/belmonttg" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                  Telegram
                </a>
              </li>
              <li>
                <a href="https://github.com/AjayiST" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://x.com/still_belmont" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors flex items-center gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  X
                </a>
              </li>
              <li>
                <a href="https://discord.com/users/belmontt" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0">
                    <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.396-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.027c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.294.075.075 0 0 1 .078-.011c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.198.373.295a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.076.076 0 0 0-.041.107c.359.698.77 1.364 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-4.783-.838-8.94-3.549-12.617a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.122 0-2.046-1.029-2.046-2.291 0-1.263.922-2.291 2.046-2.291 1.125 0 2.065 1.029 2.046 2.291 0 1.263-.92 2.291-2.046 2.291zm7.973 0c-1.122 0-2.046-1.029-2.046-2.291 0-1.263.922-2.291 2.046-2.291 1.125 0 2.065 1.029 2.046 2.291 0 1.263-.92 2.291-2.046 2.291z"/>
                  </svg>
                  Discord
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/samuelajayittobiloba" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <hr className="border-white/10 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Belmont. Web3 Community Manager & Vibecoder.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#home" className="hover:text-sky-400 transition-colors font-medium">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer