import React from 'react'

interface Skill {
  name: string
  icon: React.ReactNode
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { 
      name: 'Python', 
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="pythonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3776AB"/>
              <stop offset="100%" stopColor="#FFD43B"/>
            </linearGradient>
          </defs>
          <path d="M30 5C16.73 5 6 14.25 6 25.5c0 6.75 3.75 12.75 10.5 16.5v6h27v-6c6.75-3.75 10.5-9.75 10.5-16.5C54 14.25 43.27 5 30 5zm-7.5 12c1.875 0 3.375 1.5 3.375 3.375S23.625 23.75 21.75 23.75 18.375 22.25 18.375 20.375 19.875 17 21.75 17zm15 0c1.875 0 3.375 1.5 3.375 3.375S40.625 23.75 38.75 23.75 35.375 22.25 35.375 20.375 36.875 17 38.75 17z" fill="url(#pythonGradient)"/>
        </svg>
      )
    },
    { name: 'Web Development', icon: '🌐' },
    { 
      name: 'Selenium', 
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="25" fill="#04AA1D"/>
          <text x="30" y="38" fontSize="28" fontWeight="bold" textAnchor="middle" fill="white">Se</text>
        </svg>
      )
    },
    { name: 'Bot Development', icon: '🤖' },
    { 
      name: 'SQLAlchemy', 
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="40" height="40" rx="4" fill="#FFA500"/>
          <text x="30" y="38" fontSize="18" fontWeight="bold" textAnchor="middle" fill="white">SQL</text>
        </svg>
      )
    },
    { name: '3D CAD Modeling', icon: '🎛️' },
    { 
      name: 'Flask App Development', 
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 8H40V12H20Z" fill="#000"/>
          <path d="M22 12H38V35C38 40 35 45 30 45C25 45 22 40 22 35Z" fill="none" stroke="#000" strokeWidth="2"/>
          <path d="M26 35C26 38.5 27.5 42 30 42C32.5 42 34 38.5 34 35" fill="none" stroke="#FF6B35" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="30" cy="28" r="5" fill="none" stroke="#FF6B35" strokeWidth="1.5"/>
        </svg>
      )
    },
    { name: 'Community Management', icon: '👥' },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900/50 to-purple-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Technical skills honed through years of experience and continuous learning
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
          {skills.map((skill, index) => (
            <div key={index} className="px-4">
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg p-8 h-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center">
                <div className="text-6xl mb-4 flex items-center justify-center">
                  {typeof skill.icon === 'string' ? skill.icon : skill.icon}
                </div>
                <h3 className="text-xl font-bold text-center">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
