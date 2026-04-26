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
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-500/20 hover:bg-purple-500/40 rounded-lg flex items-center justify-center transition-all duration-200"
                title="LinkedIn"
              >
                💼
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-500/20 hover:bg-purple-500/40 rounded-lg flex items-center justify-center transition-all duration-200"
                title="GitHub"
              >
                🔗
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-purple-500/20 hover:bg-purple-500/40 rounded-lg flex items-center justify-center transition-all duration-200"
                title="Twitter"
              >
                𝕏
              </a>
              <a
                href="mailto:hello@portfolio.com"
                className="w-10 h-10 bg-purple-500/20 hover:bg-purple-500/40 rounded-lg flex items-center justify-center transition-all duration-200"
                title="Email"
              >
                📧
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
