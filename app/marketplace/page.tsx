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
  description: string
}

const rarityCards: RarityCard[] = [
  {
    id: "legendary",
    name: "Legendary",
    level: 4,
    color: "text-yellow-400",
    bgGradient: "from-yellow-600/20 to-orange-600/20",
    description: "The most powerful cards in existence",
  },
  {
    id: "common",
    name: "Common",
    level: 1,
    color: "text-gray-400",
    bgGradient: "from-gray-600/20 to-gray-500/20",
    description: "Basic cards for beginners",
  },
  {
    id: "mythical",
    name: "Mythical",
    level: 5,
    color: "text-purple-400",
    bgGradient: "from-purple-600/20 to-pink-600/20",
    description: "Cards of ancient power",
  },
  {
    id: "rare",
    name: "Rare",
    level: 2,
    color: "text-blue-400",
    bgGradient: "from-blue-600/20 to-cyan-600/20",
    description: "Uncommon cards with special abilities",
  },
  {
    id: "epic",
    name: "Epic",
    level: 3,
    color: "text-emerald-400",
    bgGradient: "from-emerald-600/20 to-green-600/20",
    description: "Powerful cards for advanced players",
  },
  {
    id: "ultra-rare",
    name: "Ultra Rare",
    level: 6,
    color: "text-red-400",
    bgGradient: "from-red-600/20 to-rose-600/20",
    description: "Extremely rare and powerful",
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

  const handleRarityClick = (rarity: RarityCard) => {
    setSelectedRarity(rarity)
    setIsOpening(true)
    setShowCard(false)
    setRevealedCard(null)

    // Simulate mystery box opening animation
    setTimeout(() => {
      const randomCard = sampleCards[Math.floor(Math.random() * sampleCards.length)]
      setRevealedCard({ ...randomCard, rarity: rarity.name, level: rarity.level })
      setIsOpening(false)
      setShowCard(true)
    }, 2000)
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {rarityCards.map((rarity) => (
              <Card
                key={rarity.id}
                className={`bg-gradient-to-br ${rarity.bgGradient} border-2 border-gray-700 hover:border-${rarity.color.split("-")[1]}-500 card-hover cursor-pointer transition-all duration-300`}
                onClick={() => handleRarityClick(rarity)}
              >
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">🎴</div>
                  <h3 className={`text-2xl font-bold ${rarity.color} mb-2 font-mono`}>{rarity.name}</h3>
                  <div className="text-sm text-gray-400 mb-4">Level {rarity.level}</div>
                  <p className="text-gray-300 text-sm">{rarity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            {isOpening ? (
              <div className="mystery-box">
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-blue-500 p-12">
                  <CardContent className="text-center">
                    <div className="text-8xl mb-6 animate-bounce">📦</div>
                    <h2 className="text-3xl font-bold text-white mb-4 font-mono">Opening Mystery Box...</h2>
                    <p className="text-blue-400 text-lg">Revealing your {selectedRarity.name} card</p>
                    <div className="mt-6">
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full animate-pulse w-full"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : showCard && revealedCard ? (
              <div className="animate-in fade-in duration-1000">
                <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-emerald-500 p-8">
                  <CardContent className="text-center">
                    <div className="text-4xl mb-4">🎉</div>
                    <h2 className="text-3xl font-bold text-white mb-6 font-mono">Card Revealed!</h2>

                    <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-gray-700">
                      <img
                        src={revealedCard.image || "/placeholder.svg"}
                        alt={revealedCard.name}
                        className="w-48 h-64 mx-auto rounded-lg mb-4 object-cover"
                      />
                      <h3 className="text-2xl font-bold text-white mb-2">{revealedCard.name}</h3>
                      <p className="text-gray-400 mb-2">#{revealedCard.id}</p>
                      <div className={`text-lg font-semibold ${selectedRarity.color}`}>
                        {revealedCard.rarity} - Level {revealedCard.level}
                      </div>
                    </div>

                    <div className="flex gap-4 justify-center">
                      <Link href={`/nft/${revealedCard.id}?rarity=${selectedRarity.id}&level=${selectedRarity.level}`}>
                        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-semibold neon-glow">
                          Collect Card
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        onClick={resetSelection}
                        className="border-gray-500 text-gray-300 hover:bg-gray-700 px-8 py-3 text-lg bg-transparent"
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
