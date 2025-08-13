"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface RarityCard {
  id: string
  name: string
  level: number
  color: string
  bgGradient: string
  borderColor: string
  description: string
  icon: string
}

const rarityCards: RarityCard[] = [
  {
    id: "common",
    name: "Common",
    level: 1,
    color: "text-gray-300",
    bgGradient: "from-gray-700/30 to-gray-600/30",
    borderColor: "border-gray-500",
    description: "Basic cards for beginners",
    icon: "⚪",
  },
  {
    id: "rare",
    name: "Rare",
    level: 2,
    color: "text-blue-400",
    bgGradient: "from-blue-600/30 to-cyan-600/30",
    borderColor: "border-blue-500",
    description: "Uncommon cards with special abilities",
    icon: "🔵",
  },
  {
    id: "epic",
    name: "Epic",
    level: 3,
    color: "text-emerald-400",
    bgGradient: "from-emerald-600/30 to-green-600/30",
    borderColor: "border-emerald-500",
    description: "Powerful cards for advanced players",
    icon: "🟢",
  },
  {
    id: "legendary",
    name: "Legendary",
    level: 4,
    color: "text-yellow-400",
    bgGradient: "from-yellow-600/30 to-orange-600/30",
    borderColor: "border-yellow-500",
    description: "The most powerful cards in existence",
    icon: "🟡",
  },
  {
    id: "mythical",
    name: "Mythical",
    level: 5,
    color: "text-purple-400",
    bgGradient: "from-purple-600/30 to-pink-600/30",
    borderColor: "border-purple-500",
    description: "Cards of ancient power and mystery",
    icon: "🟣",
  },
]

const sampleCards = [
  { name: "Shadow Warrior", id: "001", image: "/dark-fantasy-warrior-card.png" },
  { name: "Lightning Mage", id: "002", image: "/electric-mage-card.png" },
  { name: "Fire Dragon", id: "003", image: "/fire-dragon-fantasy-card.png" },
  { name: "Ice Guardian", id: "004", image: "/ice-guardian-fantasy-card.png" },
  { name: "Storm Knight", id: "005", image: "/storm-knight-fantasy-card.png" },
  { name: "Void Assassin", id: "006", image: "/void-assassin-fantasy-card.png" },
]

export default function MarketplacePage() {
  const [selectedRarity, setSelectedRarity] = useState<RarityCard | null>(null)
  const [isOpening, setIsOpening] = useState(false)
  const [revealedCard, setRevealedCard] = useState<any>(null)
  const [showCard, setShowCard] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const handleRarityClick = (rarity: RarityCard) => {
    setSelectedRarity(rarity)
    setIsOpening(true)
    setShowCard(false)
    setRevealedCard(null)

    setTimeout(() => {
      const randomCard = sampleCards[Math.floor(Math.random() * sampleCards.length)]
      setRevealedCard({ ...randomCard, rarity: rarity.name, level: rarity.level })
      setIsOpening(false)
      setShowCard(true)
    }, 2500)
  }

  const resetSelection = () => {
    setSelectedRarity(null)
    setIsOpening(false)
    setRevealedCard(null)
    setShowCard(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header walletConnected={true} />

      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 font-mono neon-text">NFT Marketplace</h1>
          <p className="text-xl text-gray-300 font-sans">Choose your rarity level and unlock mystery cards</p>
        </div>

        {!selectedRarity ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {rarityCards.map((rarity) => (
              <Card
                key={rarity.id}
                className={`bg-gradient-to-br ${rarity.bgGradient} border-2 ${rarity.borderColor} 
                  hover:scale-105 hover:shadow-2xl hover:shadow-${rarity.color.split("-")[1]}-500/50 
                  cursor-pointer transition-all duration-500 transform-gpu
                  ${hoveredCard === rarity.id ? "animate-pulse" : ""}
                  hover:border-opacity-100 border-opacity-50
                  relative overflow-hidden group`}
                onClick={() => handleRarityClick(rarity)}
                onMouseEnter={() => setHoveredCard(rarity.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                  -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                ></div>

                <CardContent className="p-6 text-center relative z-10">
                  <div
                    className={`text-6xl mb-4 transition-transform duration-300 
                    ${hoveredCard === rarity.id ? "scale-110 rotate-12" : ""}`}
                  >
                    {rarity.icon}
                  </div>

                  <h3
                    className={`text-2xl font-bold ${rarity.color} mb-2 font-mono 
                    transition-all duration-300 ${hoveredCard === rarity.id ? "text-shadow-lg" : ""}`}
                  >
                    {rarity.name}
                  </h3>

                  <div
                    className={`text-lg font-semibold mb-3 transition-colors duration-300
                    ${hoveredCard === rarity.id ? rarity.color : "text-gray-400"}`}
                  >
                    Level {rarity.level}
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">{rarity.description}</p>

                  <div
                    className={`mt-4 text-xs uppercase tracking-wider font-semibold
                    transition-all duration-300 ${hoveredCard === rarity.id ? rarity.color : "text-gray-500"}`}
                  >
                    Click to Open
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            {isOpening ? (
              <div className="mystery-box">
                <Card
                  className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-blue-500 p-12 
                  shadow-2xl shadow-blue-500/30"
                >
                  <CardContent className="text-center">
                    <div className="text-8xl mb-6 animate-bounce">📦</div>
                    <h2 className="text-3xl font-bold text-white mb-4 font-mono neon-text">Opening Mystery Box...</h2>
                    <p className={`text-lg mb-6 ${selectedRarity.color}`}>Revealing your {selectedRarity.name} card</p>

                    <div className="mt-6">
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-cyan-500 h-3 rounded-full 
                          animate-pulse shadow-lg shadow-blue-500/50 w-full"
                        ></div>
                      </div>
                    </div>

                    <div className="flex justify-center mt-6 space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-blue-400 rounded-full animate-ping"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        ></div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : showCard && revealedCard ? (
              <div className="animate-in fade-in duration-1000 slide-in-from-bottom-4">
                <Card
                  className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-emerald-500 p-8
                  shadow-2xl shadow-emerald-500/30"
                >
                  <CardContent className="text-center">
                    <div className="text-4xl mb-4 animate-bounce">🎉</div>
                    <h2 className="text-3xl font-bold text-white mb-6 font-mono neon-text">Card Revealed!</h2>

                    <div
                      className="bg-black/50 rounded-lg p-6 mb-6 border border-gray-700 
                      hover:border-emerald-500 transition-colors duration-300"
                    >
                      <img
                        src={revealedCard.image || "/placeholder.svg"}
                        alt={revealedCard.name}
                        className="w-48 h-64 mx-auto rounded-lg mb-4 object-cover 
                          hover:scale-105 transition-transform duration-300 shadow-lg"
                      />
                      <h3 className="text-2xl font-bold text-white mb-2">{revealedCard.name}</h3>
                      <p className="text-gray-400 mb-2">#{revealedCard.id}</p>
                      <div className={`text-lg font-semibold ${selectedRarity.color}`}>
                        {revealedCard.rarity} - Level {revealedCard.level}
                      </div>
                    </div>

                    <div className="flex gap-4 justify-center">
                      <Link href={`/nft/${revealedCard.id}?rarity=${selectedRarity.id}&level=${selectedRarity.level}`}>
                        <Button
                          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg 
                          font-semibold neon-glow hover:scale-105 transition-all duration-300"
                        >
                          Collect Card
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        onClick={resetSelection}
                        className="border-gray-500 text-gray-300 hover:bg-gray-700 px-8 py-3 text-lg 
                          bg-transparent hover:scale-105 transition-all duration-300"
                      >
                        Open Another
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : null}
          </div>
        )}
      </main>
    </div>
  )
}
