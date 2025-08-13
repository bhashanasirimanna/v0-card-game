import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />

      <main className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 font-mono neon-text">
            Dive into the{" "}
            <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-orange-600 bg-clip-text text-transparent">
              Neon Realm
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-sans leading-relaxed">
            Collect, Trade, and Conquer with Rare Cards!
            <br />
            <span className="text-blue-400">Unleash the Power of Rarity in Epic NFT Battles</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/marketplace">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold neon-glow card-hover border-0"
              >
                🎴 Buy NFT Cards
              </Button>
            </Link>

            <Link href="/game">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white px-8 py-4 text-lg font-semibold card-hover bg-transparent"
              >
                ⚔️ Play Game
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="gradient-border card-hover">
              <div className="gradient-border-inner p-6 h-full">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">Rare Collections</h3>
                <p className="text-gray-400">Discover cards from Common to Legendary rarity levels</p>
              </div>
            </div>

            <div className="gradient-border card-hover">
              <div className="gradient-border-inner p-6 h-full">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">Mystery Boxes</h3>
                <p className="text-gray-400">Unlock surprises with thrilling mystery box openings</p>
              </div>
            </div>

            <div className="gradient-border card-hover">
              <div className="gradient-border-inner p-6 h-full">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">Epic Battles</h3>
                <p className="text-gray-400">Engage in strategic card battles and climb the ranks</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
