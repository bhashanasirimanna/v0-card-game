"use client"

import { useState, useEffect } from "react"
import { useParams, useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { SidebarNav } from "@/components/sidebar-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const sampleCards = [
  { name: "Shadow Warrior", id: "001", image: "/dark-fantasy-warrior-card.png", price: "0.5 ETH" },
  { name: "Lightning Mage", id: "002", image: "/electric-mage-card.png", price: "0.8 ETH" },
  { name: "Fire Dragon", id: "003", image: "/fire-dragon-fantasy-card.png", price: "1.2 ETH" },
  { name: "Ice Guardian", id: "004", image: "/ice-guardian-fantasy-card.png", price: "0.7 ETH" },
  { name: "Storm Knight", id: "005", image: "/storm-knight-fantasy-card.png", price: "0.9 ETH" },
  { name: "Void Assassin", id: "006", image: "/void-assassin-fantasy-card.png", price: "1.5 ETH" },
]

const rarityColors = {
  legendary: "text-yellow-400",
  common: "text-gray-400",
  mythical: "text-purple-400",
  rare: "text-blue-400",
  epic: "text-emerald-400",
  "ultra-rare": "text-red-400",
}

export default function NFTDetailPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const [randomCard, setRandomCard] = useState<any>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const cardId = params.id as string
  const rarity = searchParams.get("rarity") || "common"
  const level = searchParams.get("level") || "1"

  const currentCard = sampleCards.find((card) => card.id === cardId) || sampleCards[0]

  const generateRandomCard = () => {
    setIsGenerating(true)
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * sampleCards.length)
      const selectedCard = sampleCards[randomIndex]
      setRandomCard({
        ...selectedCard,
        rarity,
        level,
        id: `${selectedCard.id}-${Date.now()}`,
      })
      setIsGenerating(false)
    }, 1500)
  }

  useEffect(() => {
    generateRandomCard()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header walletConnected={true} />

      <div className="flex">
        <SidebarNav />

        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8 font-mono neon-text">NFT Details</h1>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Section - Random NFT Generator */}
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white font-mono">Random NFT based on level</CardTitle>
                  <p className="text-gray-400">
                    Level {level} • {rarity.charAt(0).toUpperCase() + rarity.slice(1)} Rarity
                  </p>
                </CardHeader>
                <CardContent>
                  {isGenerating ? (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4 animate-spin">🎲</div>
                      <h3 className="text-xl font-bold text-white mb-2">Generating Random NFT...</h3>
                      <p className="text-blue-400">Rolling the dice for your level {level} card</p>
                      <div className="mt-4">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full animate-pulse w-full"></div>
                        </div>
                      </div>
                    </div>
                  ) : randomCard ? (
                    <div className="text-center">
                      <img
                        src={randomCard.image || "/placeholder.svg"}
                        alt={randomCard.name}
                        className="w-full max-w-sm mx-auto rounded-lg mb-4 object-cover"
                      />
                      <h3 className="text-xl font-bold text-white mb-2">{randomCard.name}</h3>
                      <p className="text-gray-400 mb-2">#{randomCard.id}</p>
                      <div
                        className={`text-lg font-semibold mb-4 ${rarityColors[rarity as keyof typeof rarityColors]}`}
                      >
                        {rarity.charAt(0).toUpperCase() + rarity.slice(1)} - Level {level}
                      </div>
                      <Button
                        onClick={generateRandomCard}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 mb-4"
                      >
                        Generate New Random NFT
                      </Button>
                    </div>
                  ) : null}
                </CardContent>
              </Card>

              {/* Right Section - Current NFT Details */}
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white font-mono">
                    {currentCard.name} #{currentCard.id}
                  </CardTitle>
                  <p className={`${rarityColors[rarity as keyof typeof rarityColors]} font-semibold`}>
                    {rarity.charAt(0).toUpperCase() + rarity.slice(1)} • Level {level}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <img
                      src={currentCard.image || "/placeholder.svg"}
                      alt={currentCard.name}
                      className="w-full max-w-sm mx-auto rounded-lg object-cover"
                    />

                    <div className="space-y-4">
                      <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                        <h4 className="text-white font-semibold mb-2">Card Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Rarity:</span>
                            <span className={rarityColors[rarity as keyof typeof rarityColors]}>
                              {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Level:</span>
                            <span className="text-white">{level}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Attack Power:</span>
                            <span className="text-red-400">{Number.parseInt(level) * 25}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Defense:</span>
                            <span className="text-blue-400">{Number.parseInt(level) * 20}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Speed:</span>
                            <span className="text-emerald-400">{Number.parseInt(level) * 15}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                        <h4 className="text-white font-semibold mb-2">Price</h4>
                        <div className="text-2xl font-bold text-emerald-400 mb-4">{currentCard.price}</div>
                        <Button
                          size="lg"
                          className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold neon-glow"
                        >
                          Buy Now
                        </Button>
                      </div>

                      <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                        <h4 className="text-white font-semibold mb-2">Special Abilities</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Elemental Mastery</li>
                          <li>• Critical Strike Chance +{Number.parseInt(level) * 5}%</li>
                          <li>• Damage Resistance +{Number.parseInt(level) * 3}%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
