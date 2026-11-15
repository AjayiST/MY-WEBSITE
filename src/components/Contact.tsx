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
      await axios.post('http://localhost:5000/contact', formData)
      setSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError('Failed to send message. Please reach out directly on socials!')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const socialLinks = [
    {
      name: 'Telegram',
      handle: '@belmonttg',
      url: 'https://t.me/belmonttg',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
        </svg>
      ),
      hoverColor: 'group-hover:text-[#229ED9]',
    },
    {
      name: 'GitHub',
      handle: '@AjayiST',
      url: 'https://github.com/AjayiST',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
      hoverColor: 'group-hover:text-white',
    },
    {
      name: 'X',
      handle: '@still_belmont',
      url: 'https://x.com/still_belmont',
      icon: <span className="font-bold text-lg leading-none">𝕏</span>,
      hoverColor: 'group-hover:text-white',
    },
    {
      name: 'Discord',
      handle: '@belmontt',
      url: 'https://discord.com/users/belmontt',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.396-.875-.607-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.027c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.042-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.294.075.075 0 0 1 .078-.011c3.928 1.793 8.18 1.793 12.062 0a.075.075 0 0 1 .079.009c.12.098.246.198.373.295a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.076.076 0 0 0-.041.107c.359.698.77 1.364 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-4.783-.838-8.94-3.549-12.617a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.122 0-2.046-1.029-2.046-2.291 0-1.263.922-2.291 2.046-2.291 1.125 0 2.065 1.029 2.046 2.291 0 1.263-.92 2.291-2.046 2.291zm7.973 0c-1.122 0-2.046-1.029-2.046-2.291 0-1.263.922-2.291 2.046-2.291 1.125 0 2.065 1.029 2.046 2.291 0 1.263-.92 2.291-2.046 2.291z"/>
        </svg>
      ),
      hoverColor: 'group-hover:text-[#5865F2]',
    },
    {
      name: 'LinkedIn',
      handle: 'Samuel Ajayi',
      url: 'https://linkedin.com/in/samuelajayittobiloba',
      icon: <span className="font-bold text-lg leading-none">in</span>,
      hoverColor: 'group-hover:text-[#0A66C2]',
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-[#09090b] via-[#0d1512] to-[#09090b] bg-glass-grid relative overflow-hidden border-t border-white/10">
      {/* Ambient Emerald Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-emerald-500/10 via-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 glass-pill text-emerald-400 border border-emerald-500/30 text-xs font-semibold rounded-full mb-3 shadow-2xs">
            Start a Conversation
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
            Looking for a dedicated Community Manager or custom vibecoded tools and bots? Let's talk!
          </p>
        </div>

        <div className="glass-surface border border-white/10 rounded-2xl p-8 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-xl focus:border-emerald-500 focus:bg-white/[0.08] focus:ring-2 focus:ring-emerald-500/20 transition-all text-white placeholder-zinc-500 text-sm shadow-xs"
                placeholder="e.g. Alex"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-xl focus:border-emerald-500 focus:bg-white/[0.08] focus:ring-2 focus:ring-emerald-500/20 transition-all text-white placeholder-zinc-500 text-sm shadow-xs"
                placeholder="alex@project.xyz"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-xl focus:border-emerald-500 focus:bg-white/[0.08] focus:ring-2 focus:ring-emerald-500/20 transition-all text-white placeholder-zinc-500 text-sm shadow-xs"
                placeholder="Community Manager Role / Custom Bot Build"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-xl focus:border-emerald-500 focus:bg-white/[0.08] focus:ring-2 focus:ring-emerald-500/20 transition-all text-white placeholder-zinc-500 text-sm resize-none shadow-xs"
                placeholder="Tell me about your project, community goals, or bot requirements..."
              />
            </div>

            {/* Success Message */}
            {success && (
              <div className="p-4 bg-emerald-950/80 border border-emerald-500/40 rounded-xl text-emerald-300 text-sm font-medium shadow-xs">
                ✓ Message sent successfully! I'll reply promptly.
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-rose-950/80 border border-rose-500/40 rounded-xl text-rose-300 text-sm font-medium shadow-xs">
                ✗ {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.55)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed text-sm tracking-wide"
            >
              {loading ? 'Sending Message...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Interactive Social Buttons (Handles Hidden until Hover) */}
        <div className="mt-14 flex items-center justify-center gap-3.5 flex-wrap">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-12 min-w-[48px] px-3.5 rounded-xl glass-surface hover:bg-white/[0.08] text-zinc-300 hover:text-white border border-white/10 hover:border-emerald-500/40 flex items-center justify-center hover:-translate-y-0.5 shadow-xs hover:shadow-md transition-all duration-300 ease-out cursor-pointer overflow-hidden whitespace-nowrap"
              title={`${social.name}: ${social.handle}`}
            >
              <span className={`flex-shrink-0 flex items-center justify-center transition-colors ${social.hoverColor}`}>
                {social.icon}
              </span>
              <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-[240px] group-hover:opacity-100 group-hover:ml-2.5 transition-all duration-300 ease-out font-bold text-xs sm:text-sm text-zinc-100">
                {social.handle}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact