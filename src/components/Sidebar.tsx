import { Home, Sparkles, Layout, FileText, ChevronRight, Menu } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Sparkles, label: 'Playground', expandable: true },
    { icon: Layout, label: 'Dashboard', expandable: true },
    { icon: FileText, label: 'Documentation', external: true },
  ];

  return (
    <>
      <div
        className={`${
          isOpen ? 'w-64' : 'w-0'
        } bg-[#1a1a1a] border-r border-gray-800 transition-all duration-300 overflow-hidden flex flex-col`}
      >
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-semibold text-lg">Integen AI</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-1 hover:bg-gray-800 rounded"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                item.active
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </div>
              {item.expandable && <ChevronRight className="w-4 h-4" />}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">User Account</p>
              <p className="text-xs text-gray-400 truncate">user@integen.ai</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
