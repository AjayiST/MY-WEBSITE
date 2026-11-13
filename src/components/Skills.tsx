import React from 'react'

interface Skill {
  name: string
  description: string
  icon: React.ReactNode
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { 
      name: 'Telegram Community Management', 
      description: 'Active daily moderation, discussion pacing, welcoming newcomers, and cultivating a positive vibe',
      icon: (
        <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="26" fill="#0f172a"/>
          <path d="M43 19L38 41C37.6 42.6 36.6 43 35.2 42.2L28 36.8L24.5 40.2C24.1 40.6 23.8 41 23 41L23.5 33.8L37.5 21.2C38.1 20.7 37.4 20.4 36.6 20.9L19.3 31.8L12.3 29.6C10.8 29.1 10.8 28.1 12.6 27.4L40 16.8C41.3 16.3 42.4 17.1 43 19Z" fill="white"/>
        </svg>
      )
    },
    { 
      name: 'Community Safety & Anti-Scam', 
      description: 'Configuring Rose, Guardian, interactive captchas, and anti-phishing protocols to shield members',
      icon: (
        <svg width="36" height="36" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 10L14 17V31C14 42 20.8 52 30 54.5C39.2 52 46 42 46 31V17L30 10Z" fill="#0f172a" fillOpacity="0.08" stroke="#0f172a" strokeWidth="3"/>
          <path d="M25 30L28.5 33.5L35.5 26.5" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      name: 'Custom Bots & Automation', 
      description: 'Vibecoding Telegram bots, community utilities, alert systems, and automated workflows',
      icon: <span className="text-3xl">🤖</span>
    },
    { 
      name: 'Community Growth & Engagement', 
      description: 'Driving organic discussions, social pushes, and interactive campaigns that retain active members',
      icon: <span className="text-3xl">📈</span>
    },
    { 
      name: 'Vibecoding & AI Prototyping', 
      description: 'Pragmatic, rapid execution turning ideas into working bots and tools using modern AI workflows',
      icon: <span className="text-3xl">⚡</span>
    },
    { 
      name: 'AMAs & Community Campaigns', 
      description: 'Organizing voice chats, project AMAs, trivia sessions, and transparent reward distributions',
      icon: <span className="text-3xl">🎙️</span>
    },
    { 
      name: 'Python & Automation Scripting', 
      description: 'Building custom scripts for floor scrapers, data monitors, and activity loggers',
      icon: (
        <img src="/pytho.webp" alt="Python" className="w-10 h-10 object-contain" />
      )
    },
    { 
      name: 'Multi-Chain Operations', 
      description: 'Experienced in managing and moderating communities across Solana, Base L2, and EVM ecosystems',
      icon: <span className="text-3xl">⛓️</span>
    },
  ]

  return (
    <section className="py-24 px-4 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-slate-100 text-slate-800 text-xs font-semibold rounded-full mb-3 border border-slate-200">
            Skills & Core Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Skills & Superpowers
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Proven community leadership and safety combined with custom bot development and automation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-50/70 hover:bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col items-start group"
            >
              <div className="w-14 h-14 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                {skill.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{skill.name}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
