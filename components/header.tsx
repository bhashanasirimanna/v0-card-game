"use client"

import { Button } from "@/components/ui/button"

interface HeaderProps {
  walletConnected?: boolean
}

export function Header({ walletConnected = false }: HeaderProps) {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-gray-900/80 backdrop-blur-sm border-b border-blue-600/20">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">NR</span>
        </div>
        <h1 className="text-xl font-bold text-white font-mono">Neon Realm</h1>
      </div>

      <div className="hidden md:block">
        <h2 className="text-lg font-semibold text-blue-400 neon-text">NFT Card Battle Arena</h2>
      </div>

      <Button
        className={`${
          walletConnected
            ? "bg-emerald-600 hover:bg-emerald-700 text-white"
            : "bg-blue-600 hover:bg-blue-700 text-white neon-glow"
        } font-semibold transition-all duration-300`}
      >
        {walletConnected ? "Connected" : "Connect Wallet"}
      </Button>
    </header>
  )
}
