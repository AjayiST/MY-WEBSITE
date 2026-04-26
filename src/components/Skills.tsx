import React from 'react'

interface Skill {
  name: string
  percentage: number
  icon: string
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React', percentage: 95, icon: '⚛️' },
    { name: 'TypeScript', percentage: 90, icon: '📘' },
    { name: 'Web3', percentage: 85, icon: '🔗' },
    { name: 'Tailwind CSS', percentage: 95, icon: '🎨' },
    { name: 'Node.js', percentage: 88, icon: '🟩' },
    { name: 'Python', percentage: 85, icon: '🐍' },
    { name: 'Mechanical Design', percentage: 80, icon: '⚙️' },
    { name: 'Machine Learning', percentage: 82, icon: '🤖' },
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
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg p-8 h-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-6xl mb-4 text-center">{skill.icon}</div>
                <h3 className="text-xl font-bold text-center mb-4">{skill.name}</h3>
                
                {/* Circular Progress */}
                <div className="flex justify-center">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                      {/* Background Circle */}
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="rgba(139, 92, 246, 0.2)"
                        strokeWidth="4"
                      />
                      {/* Progress Circle */}
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="4"
                        strokeDasharray={`${2 * Math.PI * 54}`}
                        strokeDashoffset={`${2 * Math.PI * 54 * (1 - skill.percentage / 100)}`}
                        strokeLinecap="round"
                        className="transition-all duration-1000"
                      />
                      <defs>
                        <linearGradient
                          id={`gradient-${index}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold">{skill.percentage}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
