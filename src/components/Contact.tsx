import React, { useState } from 'react'
import axios from 'axios'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const _response = await axios.post('http://localhost:5000/contact', formData)
      setSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError('Failed to send message. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50 to-slate-900/50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Have a project in mind? Let's discuss it and bring your ideas to life.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 text-white placeholder-gray-500"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 text-white placeholder-gray-500"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 text-white placeholder-gray-500"
              placeholder="Project subject"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 text-white placeholder-gray-500 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          {/* Success Message */}
          {success && (
            <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300">
              ✗ {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-200 font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-16 flex justify-center gap-12">
          <a href="https://linkedin.com/in/samuelajayittobiloba" target="_blank" rel="noopener noreferrer" className="text-7xl hover:text-blue-500 hover:scale-125 active:scale-110 transition-all duration-200 transform cursor-pointer font-bold" style={{color: '#0A66C2'}}>
            in
          </a>
          <a href="https://discord.com/users/belmontt" target="_blank" rel="noopener noreferrer" className="text-7xl hover:scale-125 active:scale-110 transition-all duration-200 transform cursor-pointer" style={{filter: 'drop-shadow(0 0 8px rgba(88, 101, 242, 0.5))'}}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" style={{color: '#5865F2'}}>
              <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.396-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.027c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.294.075.075 0 0 1 .078-.011c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.198.373.295a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.076.076 0 0 0-.041.107c.359.698.77 1.364 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-4.783-.838-8.94-3.549-12.617a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.122 0-2.046-1.029-2.046-2.291 0-1.263.922-2.291 2.046-2.291 1.125 0 2.065 1.029 2.046 2.291 0 1.263-.92 2.291-2.046 2.291zm7.973 0c-1.122 0-2.046-1.029-2.046-2.291 0-1.263.922-2.291 2.046-2.291 1.125 0 2.065 1.029 2.046 2.291 0 1.263-.92 2.291-2.046 2.291z"/>
            </svg>
          </a>
          <a href="https://x.com/0x_belmont" target="_blank" rel="noopener noreferrer" className="text-7xl hover:text-gray-400 hover:scale-125 active:scale-110 transition-all duration-200 transform cursor-pointer">
            𝕏
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
