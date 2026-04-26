import React, { useState } from 'react'

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  category: 'web3' | 'fullstack' | 'mechanical'
}

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'web3' | 'fullstack' | 'mechanical'>('web3')

  const projects: Project[] = [
    {
      id: '1',
      title: 'Blockchain DApp',
      description: 'A decentralized application built with Solidity and React for token management and smart contract interaction.',
      tags: ['Solidity', 'React', 'Web3.js', 'Ethereum'],
      category: 'web3',
    },
    {
      id: '2',
      title: 'NFT Marketplace',
      description: 'Full-featured NFT marketplace with minting, listing, and auction capabilities powered by IPFS.',
      tags: ['Smart Contracts', 'React', 'IPFS', 'Web3'],
      category: 'web3',
    },
    {
      id: '3',
      title: 'Web3 Portfolio',
      description: 'Integrated portfolio with crypto wallet connection and blockchain-based portfolio showcase.',
      tags: ['Wallet Connect', 'React', 'Blockchain'],
      category: 'web3',
    },
    {
      id: '4',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment gateway, inventory management, and real-time analytics.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
    },
    {
      id: '5',
      title: 'Real-time Chat App',
      description: 'Scalable chat application with real-time messaging, file sharing, and video conferencing.',
      tags: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      category: 'fullstack',
    },
    {
      id: '6',
      title: 'AI-Powered Dashboard',
      description: 'Data visualization dashboard with machine learning predictions and automated reporting.',
      tags: ['React', 'Python', 'TensorFlow', 'D3.js'],
      category: 'fullstack',
    },
    {
      id: '7',
      title: 'Robotic Arm System',
      description: 'Autonomous robotic arm with precision control and machine vision integration.',
      tags: ['CAD', 'Robotics', 'Python', 'ROS'],
      category: 'mechanical',
    },
    {
      id: '8',
      title: 'Drone Design',
      description: 'Custom drone design with optimized aerodynamics and autonomous flight capabilities.',
      tags: ['CAD', 'Aerospace', 'Control Systems'],
      category: 'mechanical',
    },
    {
      id: '9',
      title: 'IoT Sensor Network',
      description: 'Distributed IoT sensor network for environmental monitoring with predictive analytics.',
      tags: ['IoT', 'Embedded Systems', 'Data Analysis'],
      category: 'mechanical',
    },
  ]

  const filteredProjects = projects.filter((p) => p.category === activeTab)

  const tabs = [
    { id: 'web3', label: 'Web3 Projects', icon: '🔗' },
    { id: 'fullstack', label: 'Full-Stack', icon: '💻' },
    { id: 'mechanical', label: 'Mechanical', icon: '⚙️' },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          A selection of my best work across different domains and technologies
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'web3' | 'fullstack' | 'mechanical')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg shadow-purple-500/50'
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg overflow-hidden h-80 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
            >
              {/* Base Content */}
              <div className="p-6 h-full flex flex-col justify-between relative z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/50 text-purple-100 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/80 to-pink-600/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center">
                <p className="text-center text-white px-6 mb-6">{project.description}</p>
                <div className="flex gap-2 flex-wrap justify-center mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/20 text-white rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
