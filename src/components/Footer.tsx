import React, { useState } from 'react'
import axios from 'axios'

const Footer: React.FC = () => {
  const [email, setEmail] = useState('')
  const [subscribeLoading, setSubscribeLoading] = useState(false)
  const [subscribeMessage, setSubscribeMessage] = useState('')

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribeLoading(true)

    try {
      // You would integrate with Mailchimp API here
      // For now, we'll just show a success message
      setSubscribeMessage('Thanks for subscribing!')
      setEmail('')
      setTimeout(() => setSubscribeMessage(''), 5000)
    } catch (error) {
      setSubscribeMessage('Failed to subscribe. Please try again.')
    } finally {
      setSubscribeLoading(false)
    }
  }

  return (
    <footer className="bg-gradient-to-br from-slate-950 to-purple-950 border-t border-purple-500/20 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="mb-16 max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4">
            Stay Updated
          </h3>
          <p className="text-center text-gray-400 mb-6">
            Subscribe to my newsletter for the latest projects and insights
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 text-white placeholder-gray-500"
            />
            <button
              type="submit"
              disabled={subscribeLoading}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-200 font-semibold disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {subscribeLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {subscribeMessage && (
            <p className="text-center text-green-400 mt-3">{subscribeMessage}</p>
          )}
        </div>

        <hr className="border-purple-500/20 mb-12" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-3">
              Portfolio
            </h2>
            <p className="text-gray-400 text-sm">
              Crafting innovative solutions at the intersection of technology and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-purple-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-purple-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-purple-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Web3
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Full-Stack
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Mechanical
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  AI/ML
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-6">
              <a
                href="https://linkedin.com/in/samuelajayittobiloba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-blue-500 hover:scale-125 active:scale-110 transition-all duration-200 transform cursor-pointer font-bold"
                title="LinkedIn"
                style={{color: '#0A66C2'}}
              >
                in
              </a>
              <a
                href="https://discord.com/users/belmontt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:scale-125 active:scale-110 transition-all duration-200 transform cursor-pointer"
                title="Discord"
                style={{filter: 'drop-shadow(0 0 8px rgba(88, 101, 242, 0.5))'}}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style={{color: '#5865F2'}}>
                  <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.396-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.027c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.294.075.075 0 0 1 .078-.011c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.198.373.295a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.076.076 0 0 0-.041.107c.359.698.77 1.364 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-4.783-.838-8.94-3.549-12.617a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.122 0-2.046-1.029-2.046-2.291 0-1.263.922-2.291 2.046-2.291 1.125 0 2.065 1.029 2.046 2.291 0 1.263-.92 2.291-2.046 2.291zm7.973 0c-1.122 0-2.046-1.029-2.046-2.291 0-1.263.922-2.291 2.046-2.291 1.125 0 2.065 1.029 2.046 2.291 0 1.263-.92 2.291-2.046 2.291z"/>
                </svg>
              </a>
              <a
                href="https://x.com/0x_belmont"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-gray-400 hover:scale-125 active:scale-110 transition-all duration-200 transform cursor-pointer"
                title="X"
              >
                𝕏
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <hr className="border-purple-500/20 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2024 Belmont. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
