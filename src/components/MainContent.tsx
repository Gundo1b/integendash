import { useState, useEffect } from 'react';
import { MessageSquare, Code, Video, Image, Plus, TrendingUp, Zap, Palette, Mic, Sun, Moon } from 'lucide-react';

export default function MainContent() {
  const [showCommand, setShowCommand] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (showCommand && e.key === 'Escape') {
        setShowCommand(false);
      } else if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setShowCommand(true);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [showCommand]);

  const mainActions = [
    {
      icon: MessageSquare,
      title: 'AI Chat',
      description: 'Have intelligent conversations with our advanced AI models',
      color: 'from-[#64E1FF] to-[#009DFF]',
      models: 12,
      latency: '~0.8s avg',
      capabilities: ['Chat', 'Reasoning', 'Writing'],
      onClick: () => window.location.href = 'https://integenchatapp.vercel.app',
    },
    {
      icon: Code,
      title: 'AI Coder',
      description: 'Generate, debug, and optimize code with AI assistance',
      color: 'from-[#64E1FF] to-[#009DFF]',
      models: 8,
      latency: '~1.1s avg',
      capabilities: ['Code', 'Debug', 'Refactor'],
      onClick: () => window.location.href = 'https://integenaicoder.vercel.app',
    },
    {
      icon: Video,
      title: 'AI Video Generator',
      description: 'Create stunning videos from text prompts and ideas',
      color: 'from-[#64E1FF] to-[#009DFF]',
      models: 6,
      latency: '~2.5s avg',
      capabilities: ['Video', 'Animation', 'Editing'],
    },
    {
      icon: Image,
      title: 'AI Image Generator',
      description: 'Generate beautiful images and artwork with AI',
      color: 'from-[#64E1FF] to-[#009DFF]',
      models: 10,
      latency: '~1.8s avg',
      capabilities: ['Image', 'Art', 'Design'],
    },
  ];

  const whatsNew = [
    {
      icon: Zap,
      title: 'Lightning Fast Responses',
      description: 'Experience 3x faster AI processing with our new infrastructure',
      color: 'text-cyan-400',
    },
    {
      icon: Palette,
      title: 'Advanced Image Editing',
      description: 'State-of-the-art image generation and editing capabilities',
      color: 'text-violet-400',
    },
    {
      icon: Video,
      title: 'HD Video Generation',
      description: 'Create high-definition videos with enhanced quality and effects',
      color: 'text-purple-400',
    },
    {
      icon: Mic,
      title: 'Voice to Text AI',
      description: 'Convert speech to text with industry-leading accuracy',
      color: 'text-blue-300',
    },
  ];

  return (
    <main className="flex-1 overflow-y-auto ambient-bg">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-12">
          <div className="flex items-start justify-between mb-6">
            <div className="hero-glow">
              <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-[#64E1FF] to-[#009DFF] bg-clip-text text-transparent">
                Integen AI
              </h1>
              <p className="text-xl text-gray-400">
                The fastest path from prompt to production with AI
              </p>
              <div className="flex gap-2 mt-4">
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                  Models Online
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-violet-500/20 text-violet-400 text-xs rounded-full">
                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse"></div>
                  42 tasks running
                </span>
              </div>
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors">
              <Plus className="w-5 h-5" />
              New project
            </button>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="flex items-center gap-2 px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          <div className="mb-6 text-center">
            <p className="text-sm text-gray-400">⚡ 1,248 prompts processed today</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Try these examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-4 text-left hover:border-gray-700 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="text-sm font-medium mb-1">Generate a SaaS landing page</div>
                <div className="text-xs text-gray-500">Create a complete web page with design and code</div>
              </button>
              <button className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-4 text-left hover:border-gray-700 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="text-sm font-medium mb-1">Refactor this React hook</div>
                <div className="text-xs text-gray-500">Optimize and improve existing React code</div>
              </button>
              <button className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-4 text-left hover:border-gray-700 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="text-sm font-medium mb-1">Create a cinematic product video</div>
                <div className="text-xs text-gray-500">Generate video content for marketing</div>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mainActions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                className="group relative bg-black/20 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-left hover:border-gray-700 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/50 group-hover:perspective-1000 group-hover:rotate-x-2 animate-in slide-in-from-bottom-4 fade-in duration-700 gradient-border"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:rotate-[5deg] transition-transform duration-300`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed opacity-95 group-hover:opacity-100 transition-opacity duration-300">{action.description}</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{action.models} models</span>
                    <span className="text-xs text-gray-500">⚡ {action.latency}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {action.capabilities.map((cap, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-gray-800 text-gray-300 text-xs rounded-full">{cap}</span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Welcome back, Simthanda</h2>
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-all duration-300 cursor-pointer">
              <h3 className="text-lg font-semibold mb-2">Continue where you left off</h3>
              <p className="text-sm text-gray-400">AI Coder → Next.js Dashboard</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Recommended for you</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-all duration-300">
                <h4 className="text-md font-semibold mb-2">Advanced Image Editing</h4>
                <p className="text-sm text-gray-400">Enhance your images with professional-grade AI tools</p>
              </div>
              <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-all duration-300">
                <h4 className="text-md font-semibold mb-2">Voice to Text AI</h4>
                <p className="text-sm text-gray-400">Convert audio to accurate text transcripts</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Recently used models</h3>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">GPT-4</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">DALL-E 3</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">Claude</span>
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm rounded-full">Stable Diffusion</span>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">What's new</h2>
            <button className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2">
              View all updates
              <TrendingUp className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatsNew.map((item, index) => (
              <div
                key={index}
                className="group bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/50 group-hover:perspective-1000 group-hover:rotate-x-2 animate-in slide-in-from-bottom-4 fade-in duration-700 gradient-border inner-shadow"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="flex items-start gap-4">
                  <div className={`${item.color}`}>
                    <item.icon className="w-8 h-8 group-hover:rotate-[5deg] transition-transform duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed opacity-95 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to get started?</h3>
              <p className="text-gray-400">
                Explore our powerful AI tools and start creating amazing content today
              </p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-[#64E1FF] to-[#009DFF] text-white font-medium rounded-lg hover:from-[#64E1FF]/80 hover:to-[#009DFF]/80 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#64E1FF]/50">
              Get Started
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold mb-6 text-gray-300">Trusted by teams building with AI</h3>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-300">99.9%</div>
              <div className="text-sm text-gray-500">uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-300">SOC2</div>
              <div className="text-sm text-gray-500">ready</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-300">OpenRouter</div>
              <div className="text-sm text-gray-500">compatible</div>
            </div>
          </div>
        </div>
      </div>

      {showCommand && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setShowCommand(false)}>
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 w-96 max-w-md" onClick={(e) => e.stopPropagation()}>
            <div className="text-sm text-gray-400 mb-4">Command Palette</div>
            <div className="space-y-2">
              <button className="w-full text-left p-3 rounded hover:bg-gray-800 transition-colors">New Chat</button>
              <button className="w-full text-left p-3 rounded hover:bg-gray-800 transition-colors">Switch Model</button>
              <button className="w-full text-left p-3 rounded hover:bg-gray-800 transition-colors">Generate Image</button>
              <button className="w-full text-left p-3 rounded hover:bg-gray-800 transition-colors">Open Last Project</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
