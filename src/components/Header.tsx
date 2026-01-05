import { Menu, Bell, Settings, Sparkles } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="bg-[#1a1a1a] border-b border-gray-800">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 max-w-3xl mx-auto px-4">
          <div className="bg-[#0a0a0a] border border-cyan-500/30 rounded-lg px-4 py-2 flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">
              <span className="text-cyan-400 font-medium">New</span> Integen AI Pro: Our most powerful AI suite to date.
            </span>
            <button className="ml-auto px-4 py-1 bg-white text-black text-sm font-medium rounded hover:bg-gray-200 transition-colors">
              Try it
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
