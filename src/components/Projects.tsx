import React, { useState } from 'react'

interface ToolItem {
  id: string
  title: string
  category: 'web3' | 'general'
  badge: string
  icon: string
  tagline: string
  problem: string
  functionality: string
  implementation: string
  tags: string[]
  githubUrl?: string
}

interface RoadmapItem {
  id: string
  step: string
  project: string
  role: string
  chain: string
  link?: string
  image: string
  description: string
  highlights: string[]
  tags: string[]
}

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'roadmap' | 'tools'>('roadmap')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const tools: ToolItem[] = [
    {
      id: 'copy-mint-bot',
      title: 'High-Speed On-Chain Copy Mint Bot',
      category: 'web3',
      badge: 'Rust / EVM Systems',
      icon: '🦀',
      tagline: 'Sub-second EVM transaction listener & automated copy-mint execution engine controlled via Telegram.',
      problem: 'High-demand token and NFT contract mints happen in seconds. Manual contract interaction suffers from human latency, missed block inclusions, and high slippage.',
      functionality: 'Monitor selected wallets, track on-chain mint activity, and execute configured copy-mint actions through automated workflows.',
      implementation: 'Engineered an asynchronous state machine in Rust utilizing Tokio multi-threading and Alloy RPC bindings to stream mempool logs, calculate dynamic priority gas, submit signed transactions in milliseconds, and manage operations remotely via a secure Teloxide Telegram bot.',
      tags: ['Rust', 'Alloy', 'Tokio', 'Teloxide', 'SQLite', 'EVM RPC'],
      githubUrl: 'https://github.com/AjayiST/copy_mint_bot',
    },
    {
      id: 'job-scraper',
      title: 'Dual-Chain DEX & Community Scraper Bot',
      category: 'web3',
      badge: 'TypeScript / WebSocket Streams',
      icon: '⚡',
      tagline: 'Real-time WebSocket scanner discovering freshly launched DEX liquidity pools and active crypto communities.',
      problem: 'Securing early community moderation and CM roles requires discovering verified projects within minutes of contract launch, before announcements reach public feeds.',
      functionality: 'Subscribes to live WebSocket streams across Solana (PumpPortal WSS) and EVM (Uniswap V3), filters out low-liquidity honeypots, and extracts active Telegram and X links.',
      implementation: 'Implemented low-latency WebSocket consumers with automatic reconnection logic, social handle regex validators, in-memory deduplication caches, and rate-limited notification dispatchers to a private Telegram channel.',
      tags: ['TypeScript', 'Node.js', 'Solana WSS', 'Uniswap V3', 'Telegram API'],
      githubUrl: 'https://github.com/AjayiST/job-scraper',
    },
    {
      id: 'nft-alert-bot',
      title: 'Multi-Collection Supply & Mint Alert Bot',
      category: 'web3',
      badge: 'Python / On-Chain Automation',
      icon: '🔔',
      tagline: 'Multi-contract state monitor tracking real-time supply deltas and broadcasting instant volume surge alerts.',
      problem: 'Community leaders and collectors miss unexpected supply expansions, stealth mint phases, or volume surges across disparate NFT collections.',
      functionality: 'Monitors multiple ERC-721 and ERC-1155 smart contracts simultaneously, computes real-time supply velocity, and pushes visual alert embeds to Telegram chats.',
      implementation: 'Developed concurrent contract polling workers with Web3.py, resilient RPC error handling with exponential backoff, state delta algorithms for velocity detection, and formatted Telegram message builders.',
      tags: ['Python', 'Web3.py', 'JSON-RPC', 'Telegram Bot API', 'Smart Contracts'],
      githubUrl: 'https://github.com/AjayiST/NFT-SUPPLY-ALERT-BOT',
    },
    {
      id: 'sliding-game',
      title: 'Interactive Web Sliding Puzzle Game',
      category: 'general',
      badge: 'Front-End Web Application',
      icon: '🎮',
      tagline: 'Responsive browser tile puzzle featuring guaranteed-solvable permutation algorithms and zero-dependency UI.',
      problem: 'Demonstrating core client-side software engineering: managing dynamic 2D board state, calculating mathematical parity, and delivering 60 FPS interactions without framework bloat.',
      functionality: 'Generates configurable N-tile boards with guaranteed solvable layouts verified via inversion-count parity algorithms, move tracking, stopwatch, and win-state animations.',
      implementation: 'Built dependency-free vanilla JavaScript utilizing DOM matrix manipulation, inversion parity mathematics to eliminate unsolvable boards, LocalStorage high score persistence, and touch event support for seamless mobile gameplay.',
      tags: ['JavaScript', 'HTML5 DOM', 'CSS3 Transitions', 'Algorithms', 'LocalStorage'],
      githubUrl: 'https://github.com/AjayiST/SLIDING-GAME',
    },
  ]

  const featuredTool = tools.find((t) => t.id === 'copy-mint-bot')!
  const web3Tools = tools.filter((t) => t.category === 'web3')
  const generalTools = tools.filter((t) => t.category === 'general')

  const roadmap: RoadmapItem[] = [
    {
      id: '1',
      step: '01',
      project: 'Como on Base',
      role: 'Community Engagement Lead',
      chain: 'Base L2',
      image: '/pow/como.jpg',
      description: 'Came in to rally the Base community and lead social pushes during high-volume launch windows. Kept the chat buzzing, rallied holders behind milestone targets, and hit every goal within minutes.',
      highlights: [
        'Rallied community energy during key launch pushes',
        'Kept holders hyped, engaged, and coordinated',
      ],
      tags: ['Base L2', 'Community Lead', 'Holder Engagement'],
    },
    {
      id: '2',
      step: '02',
      project: 'Ghippo',
      role: 'Community Moderator',
      chain: 'Web3',
      image: '/pow/ghippo.jpg',
      description: 'Stepped up as trusted community mod to keep the vibes high and the chat clean. Onboarded new members, crushed spam bots instantly with custom Rose rules, and made sure prospective holders felt at home.',
      highlights: [
        'Cleaned up spam and scam links around the clock',
        'Built a welcoming, high-energy room for new holders',
      ],
      tags: ['Community Support', 'Rose Bot', 'Anti-Spam'],
    },
    {
      id: '3',
      step: '03',
      project: 'Wagmo',
      role: 'Community Outreach & Engagement',
      chain: 'Web3',
      image: '/pow/wagmo.jpg',
      description: 'Brought onto the team to run organic outreach and get Wagmo trending across Twitter/X and Telegram. Focused on punchy community content, coordinating social pushes, and keeping the project on everyone\'s feed.',
      highlights: [
        'Drove organic buzz and visibility across X & Telegram',
        'Coordinated interactive content and community drives',
      ],
      tags: ['Outreach', 'Social Drives', 'Telegram Growth'],
    },
    {
      id: '4',
      step: '04',
      project: '$HUEY on Base',
      role: 'Community Moderator',
      chain: 'Base L2',
      link: 'https://t.me/Huey_onbase',
      image: '/pow/huey.jpg',
      description: 'Took over moderation in the @Huey_onbase room on Base. Paced the chat, answered questions from prospective holders, and shielded the room against phishing links and impersonator accounts so the team could build in peace.',
      highlights: [
        'Protected the room from drainers and fake admin accounts',
        'Maintained lively daily banter and holder sentiment',
      ],
      tags: ['Base L2', 'Moderation', 'Holder Support'],
    },
    {
      id: '5',
      step: '05',
      project: 'Pokepixel',
      role: 'Admin & Community Lead',
      chain: 'Solana',
      link: 'https://t.me/pokepixelsolana',
      image: '/pow/pokepixel.jpg',
      description: 'Joined the core team as Admin for @pokepixelsolana on Solana. Handled daily operations, answered holder questions in real time, set up automated bot security, and kept the community energized around every announcement.',
      highlights: [
        'Hands-on day-to-day admin across the Solana chat',
        'Secured chat with anti-drainer rules and fast onboarding',
      ],
      tags: ['Solana', 'Admin', 'Chat Security'],
    },
    {
      id: '6',
      step: '06',
      project: 'Degenland',
      role: 'Community Manager & Growth Lead',
      chain: 'Web3',
      link: 'https://t.me/degenlandgroup',
      image: '/pow/degenland.jpg',
      description: 'Took the reins as Community Manager in @degenlandgroup. Personally scaled the room from 86 to 100+ active members in under 24 hours through targeted community drives, constant engagement, and keeping the room hype and drama-free.',
      highlights: [
        'Scaled room from 86 to 100+ active members in < 24 hours',
        'Ran daily community ops and high-velocity engagement pushes',
      ],
      tags: ['Community Manager', 'Fast Growth', 'Telegram Ops'],
    },
  ]

  const getChainBadgeStyle = (chain: string) => {
    if (chain.includes('Base')) {
      return 'bg-blue-500/20 text-blue-300 border border-blue-400/40 shadow-[0_0_10px_rgba(59,130,246,0.2)]'
    }
    if (chain.includes('Solana')) {
      return 'bg-indigo-500/20 text-indigo-300 border border-indigo-400/40 shadow-[0_0_10px_rgba(99,102,241,0.2)]'
    }
    return 'bg-sky-500/20 text-sky-300 border border-sky-400/40 shadow-[0_0_10px_rgba(56,189,248,0.2)]'
  }

  const renderMilestoneCard = (item: RoadmapItem) => (
    <div className="milestone-card glass-surface glass-surface-hover rounded-2xl shadow-[0_8px_30px_rgba(2,6,23,0.6)] transition-all duration-300 text-left flex flex-col justify-between overflow-hidden group border border-white/10 hover:border-sky-400/50">
      {/* Proof Photo Header with Click-to-Enlarge */}
      <div 
        onClick={() => setSelectedImage(item.image)}
        className="relative rounded-xl overflow-hidden border border-white/10 bg-[#060a14] group/img cursor-pointer hover:border-sky-400 transition-all flex-shrink-0 shadow-2xs"
      >
        <img
          src={item.image}
          alt={`${item.project} Role Proof`}
          className="milestone-card-img w-full object-cover object-top group-hover/img:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-center justify-between text-[10px] sm:text-xs text-white font-medium backdrop-blur-xs">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.8)]"></span>
            Role Proof
          </span>
          <span className="text-slate-300 group-hover/img:text-white transition-colors">
            Enlarge 🔍
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="milestone-card-body flex-1 flex flex-col justify-between min-h-0">
        <div className="min-h-0">
          {/* Header row: Network / Community & Telegram link */}
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className={`milestone-card-badge font-bold rounded-md ${getChainBadgeStyle(item.chain)}`}>
              {item.chain}
            </span>

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="milestone-card-badge font-semibold text-sky-400 hover:text-sky-300 underline flex items-center gap-1 cursor-pointer transition-colors !px-0"
              >
                Telegram ↗
              </a>
            )}
          </div>

          <h3 className="milestone-card-title font-bold text-white group-hover:text-sky-300 transition-colors truncate">
            {item.project}
          </h3>
          <p className="milestone-card-role font-bold uppercase tracking-wider text-sky-400 truncate">
            {item.role}
          </p>

          <p className="milestone-card-desc text-slate-300 line-clamp-2 lg:line-clamp-3 mb-1.5">
            {item.description}
          </p>
        </div>

        {/* Highlights */}
        <div className="milestone-card-highlights space-y-1 bg-white/[0.03] rounded-xl border border-white/10 backdrop-blur-sm shadow-2xs flex-shrink-0">
          {item.highlights.slice(0, 2).map((highlight, idx) => (
            <div key={idx} className="milestone-card-highlight-item flex items-start gap-1.5 text-slate-300">
              <span className="text-sky-400 font-bold">•</span>
              <span className="line-clamp-1">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tags footer */}
      <div className="milestone-card-tags flex flex-nowrap overflow-hidden border-t border-white/10 flex-shrink-0">
        {item.tags.slice(0, 3).map((tag, i) => (
          <span
            key={i}
            className="milestone-card-tag bg-white/[0.05] text-slate-300 font-medium rounded-md border border-white/10 shadow-3xs hover:border-sky-400/40 transition-colors whitespace-nowrap"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )

  const renderToolCard = (tool: ToolItem) => (
    <div
      key={tool.id}
      className="glass-surface glass-surface-hover rounded-2xl p-6 sm:p-7 shadow-[0_8px_30px_rgba(2,6,23,0.6)] transition-all duration-300 flex flex-col justify-between group border border-white/10 hover:border-sky-400/40"
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md glass-pill text-sky-300 border border-sky-500/30">
            {tool.badge}
          </span>
          <span className="text-2xl">{tool.icon}</span>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
            {tool.title}
          </h3>
          <p className="text-xs text-slate-400 font-medium mt-1 leading-relaxed">
            {tool.tagline}
          </p>
        </div>

        {/* Problem */}
        <div className="bg-white/[0.03] rounded-xl p-3 border border-white/10 text-xs">
          <p className="font-bold text-amber-400 mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            Problem It Solves
          </p>
          <p className="text-slate-300 leading-relaxed">{tool.problem}</p>
        </div>

        {/* Functionality */}
        <div className="bg-white/[0.03] rounded-xl p-3 border border-white/10 text-xs">
          <p className="font-bold text-sky-400 mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            Key Functionality
          </p>
          <p className="text-slate-300 leading-relaxed">{tool.functionality}</p>
        </div>

        {/* Implementation */}
        <div className="bg-white/[0.03] rounded-xl p-3 border border-white/10 text-xs">
          <p className="font-bold text-blue-400 mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            What I Implemented
          </p>
          <p className="text-slate-300 leading-relaxed">{tool.implementation}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-white/10 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {tool.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-white/[0.05] text-slate-300 text-[10px] font-medium rounded-md border border-white/10 shadow-3xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {tool.githubUrl && (
          <a
            href={tool.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 bg-white/[0.08] hover:bg-sky-500 text-white hover:text-black text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer border border-white/10 hover:border-sky-400"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View Repository on GitHub ↗
          </a>
        )}
      </div>
    </div>
  )

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-[#070b14] via-[#091326] to-[#070b14] border-b border-sky-500/15 relative overflow-hidden bg-glass-grid">
      {/* Ambient Blue Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-sky-500/12 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-blue-600/12 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-block px-4 py-1.5 glass-pill text-sky-300 border border-sky-500/30 text-xs font-semibold rounded-full mb-3 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
            Web3 Track Record & Engineering
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Web3 Experience & Technical Portfolio
          </h2>
          <p className="text-slate-300 text-base md:text-lg">
            A showcase of hands-on Web3 community leadership, chat safety systems, and production bots & tools built across EVM and Solana.
          </p>
        </div>

        {/* Track Record Stats Banner with Glowing Accents */}
        <div className="max-w-4xl mx-auto mb-14 p-6 glass-surface rounded-2xl shadow-[0_8px_30px_rgba(2,6,23,0.6)] grid grid-cols-2 sm:grid-cols-4 gap-6 text-center items-start border border-white/10 relative overflow-hidden">
          <div className="flex flex-col items-center">
            <p className="min-h-[2.25rem] flex items-center justify-center text-2xl md:text-3xl font-black text-white leading-tight">
              <span className="w-2 h-2 rounded-full bg-sky-400 mr-2 shadow-[0_0_6px_rgba(56,189,248,0.8)]"></span>
              5+
            </p>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1.5">Verified Roles</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="min-h-[2.25rem] flex items-center justify-center text-2xl md:text-3xl font-black text-white leading-tight">
              <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 shadow-[0_0_6px_rgba(6,182,212,0.8)] animate-pulse"></span>
              Active
            </p>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1.5">Community Moderation</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="min-h-[2.25rem] flex items-center justify-center text-2xl md:text-3xl font-black text-white leading-tight">
              <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 shadow-[0_0_6px_rgba(96,165,250,0.8)]"></span>
              4+
            </p>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1.5">Technical Tools Built</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="min-h-[2.25rem] flex items-center justify-center text-xl sm:text-xl md:text-[24px] font-black text-white leading-tight whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-indigo-400 mr-2 shadow-[0_0_6px_rgba(129,140,248,0.8)]"></span>
              Multi-Platform
            </p>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1.5">Discord & Telegram</p>
          </div>
        </div>

        {/* Two-Tab Toggle: Experience vs Technical Portfolio */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/[0.04] backdrop-blur-md p-1.5 rounded-xl border border-sky-500/20 inline-flex gap-2 shadow-2xs">
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`px-7 py-3 rounded-lg text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === 'roadmap'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-[0_0_20px_rgba(14,165,233,0.4)]'
                  : 'text-slate-300 hover:text-white hover:bg-sky-500/10'
              }`}
            >
              <span className="text-base">💼</span>
              Web3 Work Experience ({roadmap.length})
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-7 py-3 rounded-lg text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === 'tools'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-[0_0_20px_rgba(14,165,233,0.4)]'
                  : 'text-slate-300 hover:text-white hover:bg-sky-500/10'
              }`}
            >
              <span className="text-base">🛠️</span>
              Technical Portfolio ({tools.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Alternating Chronological Roadmap Timeline */}
        {activeTab === 'roadmap' && (
          <div className="relative w-full max-w-6xl mx-auto py-6 animate__animated animate__fadeIn">
            {/* Center Spine Line */}
            <div className="hidden min-[480px]:block absolute left-1/2 top-6 bottom-6 w-0.5 bg-gradient-to-b from-slate-800 via-sky-500/50 to-slate-800 -translate-x-1/2"></div>

            {/* Spine Line for Ultra-Narrow Screens (<480px) */}
            <div className="min-[480px]:hidden absolute left-4 top-6 bottom-6 w-0.5 bg-gradient-to-b from-slate-800 via-sky-500/50 to-slate-800"></div>

            <div className="space-y-8 min-[480px]:space-y-12 md:space-y-14">
              {roadmap.map((item, index) => {
                const isLeft = index % 2 === 0 // 0: Left (Como), 1: Right (Ghippo), 2: Left, 3: Right...

                return (
                  <div key={item.id} className="relative">
                    {/* Center Node Indicator between Left & Right boxes */}
                    <div className="hidden min-[480px]:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#070b14] border-2 border-sky-400 items-center justify-center shadow-[0_0_12px_rgba(56,189,248,0.7)] z-10 hover:scale-110 transition-transform">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-sky-400"></div>
                    </div>

                    {/* Ultra-Narrow Node Indicator (<480px) */}
                    <div className="min-[480px]:hidden absolute left-4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#070b14] border-2 border-sky-400 flex items-center justify-center shadow-[0_0_12px_rgba(56,189,248,0.7)] z-10">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
                    </div>

                    {/* Alternating Row Grid */}
                    <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-6 min-[480px]:gap-8 sm:gap-12 md:gap-14 items-center pl-8 min-[480px]:pl-0">
                      {/* Left Side Container */}
                      {isLeft ? (
                        <div className="flex justify-start min-[480px]:justify-end min-[480px]:pr-2 sm:pr-4">
                          {renderMilestoneCard(item)}
                        </div>
                      ) : (
                        <div className="hidden min-[480px]:block"></div>
                      )}

                      {/* Right Side Container */}
                      {!isLeft ? (
                        <div className="flex justify-start min-[480px]:pl-2 sm:pl-4">
                          {renderMilestoneCard(item)}
                        </div>
                      ) : (
                        <div className="hidden min-[480px]:block"></div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Technical Portfolio */}
        {activeTab === 'tools' && (
          <div className="space-y-12 animate__animated animate__fadeIn">
            {/* GitHub Header Banner */}
            <div className="flex items-center justify-between p-5 glass-surface rounded-2xl shadow-xs flex-wrap gap-3 border border-white/10">
              <div>
                <h3 className="text-base font-bold text-white">Technical Portfolio & Open-Source Repositories</h3>
                <p className="text-xs text-slate-300">Production bots, on-chain tools, and software implementations built across Rust, TypeScript, Python, and JavaScript.</p>
              </div>
              <a
                href="https://github.com/AjayiST"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)] cursor-pointer"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub Profile (@AjayiST) ↗
              </a>
            </div>

            {/* FEATURED TECHNICAL BUILD SPOTLIGHT */}
            <div className="relative glass-surface rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_16px_50px_rgba(2,6,23,0.8)] border border-sky-500/35 overflow-hidden group">
              {/* Subtle ambient blue glow */}
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-sky-500/25 via-blue-500/15 to-transparent rounded-full blur-3xl opacity-75 pointer-events-none"></div>

              <div className="relative z-10">
                {/* Top Badge & Action */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                      <span>⭐</span>
                      Featured Technical Build
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold glass-pill text-sky-200 border border-sky-500/30">
                      {featuredTool.badge}
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-sky-500/15 text-sky-300 border border-sky-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
                      Sub-Second Latency
                    </span>
                  </div>

                  {featuredTool.githubUrl && (
                    <a
                      href={featuredTool.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)] cursor-pointer"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      View on GitHub ↗
                    </a>
                  )}
                </div>

                {/* Title & Tagline */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl sm:text-4xl">{featuredTool.icon}</span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {featuredTool.title}
                    </h3>
                  </div>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-3xl font-medium">
                    {featuredTool.tagline}
                  </p>
                </div>

                {/* 3 Detail Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/10 shadow-xs">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      The Problem It Solves
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {featuredTool.problem}
                    </p>
                  </div>

                  <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/10 shadow-xs">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                      Key Functionality
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {featuredTool.functionality}
                    </p>
                  </div>

                  <div className="bg-white/[0.03] rounded-2xl p-4 border border-white/10 shadow-xs">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                      Architecture & Implementation
                    </h4>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {featuredTool.implementation}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10">
                  <span className="text-xs font-bold text-slate-300 mr-1 uppercase tracking-wider">Tech Stack:</span>
                  {featuredTool.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white/[0.05] text-slate-200 text-xs font-semibold rounded-lg border border-white/10 shadow-3xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CATEGORY 1: WEB3 AUTOMATION & BLOCKCHAIN TOOLS */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-500/40">
                  Web3 Automation & Blockchain Tools ({web3Tools.length})
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-sky-500/30 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {web3Tools.map((tool) => renderToolCard(tool))}
              </div>
            </div>

            {/* CATEGORY 2: OTHER DEVELOPMENT PROJECTS */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider glass-pill text-slate-300 border border-white/10">
                  Other Development Projects ({generalTools.length})
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {generalTools.map((tool) => renderToolCard(tool))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal for Enlarge Image */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer animate__animated animate__fadeIn"
        >
          <div className="relative max-w-3xl max-h-[90vh] bg-[#070d1e] border border-sky-500/25 rounded-2xl overflow-hidden p-2 shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-sm shadow-md transition-colors z-10 cursor-pointer"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Enlarged Role Proof"
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects