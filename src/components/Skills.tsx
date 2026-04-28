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
          <path d="M30 5C16.2 5 5 16.2 5 30s11.2 25 25 25 25-11.2 25-25S43.8 5 30 5zm-5 10c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm10 30h-20v-3h20v3zm0-8h-20v-10h20v10z" fill="#3776AB"/>
          <path d="M30 5C16.2 5 5 16.2 5 30s11.2 25 25 25 25-11.2 25-25S43.8 5 30 5zm5 10c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z" fill="#FFD43B"/>
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
          <path d="M30 5C16.2 5 5 16.2 5 30s11.2 25 25 25 25-11.2 25-25S43.8 5 30 5zm0 45c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z" fill="#000"/>
          <path d="M25 20h10v5H25zm5 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" fill="#000"/>
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
