"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigationItems = [
  { name: "Marketplace", href: "/marketplace", icon: "🏪" },
  { name: "My Collection", href: "/collection", icon: "🎴" },
  { name: "Trading", href: "/trading", icon: "🔄" },
  { name: "Leaderboard", href: "/leaderboard", icon: "🏆" },
  { name: "Profile", href: "/profile", icon: "👤" },
  { name: "Settings", href: "/settings", icon: "⚙️" },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="w-64 bg-gray-900/80 backdrop-blur-sm border-r border-gray-700 min-h-screen p-6">
      <div className="space-y-2">
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-gray-800",
              pathname === item.href
                ? "bg-blue-600/20 text-blue-400 border border-blue-600/30"
                : "text-gray-300 hover:text-white",
            )}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700">
        <h3 className="text-white font-semibold mb-2">Quick Stats</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Cards Owned:</span>
            <span className="text-white">24</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Total Value:</span>
            <span className="text-emerald-400">2.4 ETH</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Rank:</span>
            <span className="text-yellow-400">#156</span>
          </div>
        </div>
      </div>
    </nav>
  )
}
