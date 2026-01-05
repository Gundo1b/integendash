import { MessageSquare, Code, Video, Image, Plus, TrendingUp, Zap, Palette, Mic } from 'lucide-react';

export default function MainContent() {
  const mainActions = [
    {
      icon: MessageSquare,
      title: 'AI Chat',
      description: 'Have intelligent conversations with our advanced AI models',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code,
      title: 'AI Coder',
      description: 'Generate, debug, and optimize code with AI assistance',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Video,
      title: 'AI Video Generator',
      description: 'Create stunning videos from text prompts and ideas',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Image,
      title: 'AI Image Generator',
      description: 'Generate beautiful images and artwork with AI',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const whatsNew = [
    {
      icon: Zap,
      title: 'Lightning Fast Responses',
      description: 'Experience 3x faster AI processing with our new infrastructure',
      color: 'text-yellow-400',
    },
    {
      icon: Palette,
      title: 'Advanced Image Editing',
      description: 'State-of-the-art image generation and editing capabilities',
      color: 'text-pink-400',
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
      color: 'text-cyan-400',
    },
  ];

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-12">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Integen AI
              </h1>
              <p className="text-xl text-gray-400">
                The fastest path from prompt to production with AI
              </p>
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors">
              <Plus className="w-5 h-5" />
              New project
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mainActions.map((action, index) => (
              <button
                key={index}
                className="group relative bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 text-left hover:border-gray-700 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{action.description}</p>
              </button>
            ))}
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
                className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`${item.color}`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
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
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
