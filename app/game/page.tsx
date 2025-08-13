"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function GameLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />

      <main className="container mx-auto px-6 py-20">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 font-mono neon-text">
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Bad Days
            </span>
            <br />
            <span className="text-blue-400">Card Battle</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-sans leading-relaxed">
            Enter the Arena of Strategic Combat
          </p>

          <p className="text-lg text-gray-400 mb-16 max-w-3xl mx-auto">
            Master the art of tactical card battles in this intense multiplayer arena. Deploy your NFT cards
            strategically, unleash devastating combos, and climb the ranks to become the ultimate Card Battle Champion.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-12 py-6 text-xl font-semibold neon-glow card-hover border-0"
            >
              Try Demo
            </Button>

            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 text-xl font-semibold neon-glow card-hover border-0"
              onClick={() => (window.location.href = "/game/lobby")}
            >
              Real Game
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="gradient-border card-hover">
              <div className="gradient-border-inner p-8 h-full">
                <div className="text-5xl mb-6">⚔️</div>
                <h3 className="text-2xl font-bold text-white mb-4 font-mono">Strategic Combat</h3>
                <p className="text-gray-400 leading-relaxed">
                  Plan your moves carefully. Every card placement and timing decision can turn the tide of battle.
                </p>
              </div>
            </div>

            <div className="gradient-border card-hover">
              <div className="gradient-border-inner p-8 h-full">
                <div className="text-5xl mb-6">🏆</div>
                <h3 className="text-2xl font-bold text-white mb-4 font-mono">Ranked Battles</h3>
                <p className="text-gray-400 leading-relaxed">
                  Compete against players worldwide. Climb the leaderboard and earn exclusive rewards.
                </p>
              </div>
            </div>

            <div className="gradient-border card-hover">
              <div className="gradient-border-inner p-8 h-full">
                <div className="text-5xl mb-6">💎</div>
                <h3 className="text-2xl font-bold text-white mb-4 font-mono">NFT Integration</h3>
                <p className="text-gray-400 leading-relaxed">
                  Use your collected NFT cards in battle. Rarer cards provide unique advantages and abilities.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-12 border border-gray-700">
            <h2 className="text-4xl font-bold text-white mb-6 font-mono">Game Modes</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/30 border-2 border-emerald-600/30">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">🎮</div>
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4 font-mono">Demo Mode</h3>
                  <p className="text-gray-300 mb-6">
                    Learn the basics with pre-built decks. Perfect for newcomers to understand game mechanics and
                    strategies without risking your NFT cards.
                  </p>
                  <ul className="text-left text-gray-400 space-y-2">
                    <li>• Tutorial battles</li>
                    <li>• Practice against AI</li>
                    <li>• No NFT cards required</li>
                    <li>• Learn combos and strategies</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-900/30 to-red-800/30 border-2 border-red-600/30">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">🔥</div>
                  <h3 className="text-2xl font-bold text-red-400 mb-4 font-mono">Real Game</h3>
                  <p className="text-gray-300 mb-6">
                    Enter the competitive arena with your NFT card collection. Battle for rankings, rewards, and glory
                    in intense multiplayer matches.
                  </p>
                  <ul className="text-left text-gray-400 space-y-2">
                    <li>• Use your NFT cards</li>
                    <li>• Ranked multiplayer battles</li>
                    <li>• Earn rewards and tokens</li>
                    <li>• Seasonal tournaments</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
