"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Send, Crown, Trophy, Medal, Users, Gamepad2, Share } from "lucide-react"
import { useState } from "react"

export default function GameLobbyPage() {
  const [chatMessage, setChatMessage] = useState("")
  const [chatMessages, setChatMessages] = useState([
    { id: 1, player: "DragonSlayer", message: "Looking for a ranked match!", time: "2m ago" },
    { id: 2, player: "CardMaster99", message: "GG everyone in that last tournament", time: "5m ago" },
    { id: 3, player: "NeonKnight", message: "Anyone want to practice combos?", time: "8m ago" },
  ])

  const sendMessage = () => {
    if (chatMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        {
          id: chatMessages.length + 1,
          player: "You",
          message: chatMessage,
          time: "now",
        },
      ])
      setChatMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header walletConnected={true} />

      <main className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4 font-mono neon-text">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Game Lobby
            </span>
          </h1>
          <p className="text-xl text-gray-300">Connect, compete, and conquer</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 h-[calc(100vh-300px)]">
          {/* Left Section - Leaderboard */}
          <div className="space-y-6">
            <Card className="bg-black border-2 border-purple-500/30 h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-400 font-mono flex items-center gap-2">
                  <Trophy className="w-6 h-6" />
                  Leader Board
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center gap-4 mb-6">
                  <div className="text-center">
                    <div className="w-18 h-22 bg-gradient-to-b from-gray-300 to-gray-500 rounded-lg flex flex-col items-center justify-center mb-2 p-2">
                      <div className="w-6 h-6 bg-gray-800 rounded-full mb-1 flex items-center justify-center">
                        <Medal className="w-4 h-4 text-gray-300" />
                      </div>
                      <div className="text-xs text-gray-900 font-bold">NeonMaster</div>
                    </div>
                    <Badge className="bg-gray-400 text-black font-bold">#2</Badge>
                    <div className="text-emerald-400 font-bold text-sm mt-1">$8,750</div>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-24 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-lg flex flex-col items-center justify-center mb-2 neon-glow p-2">
                      <div className="w-8 h-8 bg-gray-800 rounded-full mb-1 flex items-center justify-center">
                        <Crown className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div className="text-xs text-gray-900 font-bold">CryptoKing</div>
                    </div>
                    <Badge className="bg-yellow-600 text-black font-bold text-lg px-3 py-1">#1</Badge>
                    <div className="text-emerald-400 font-bold text-sm mt-1">$15,420</div>
                  </div>
                  <div className="text-center">
                    <div className="w-18 h-22 bg-gradient-to-b from-orange-400 to-orange-600 rounded-lg flex flex-col items-center justify-center mb-2 p-2">
                      <div className="w-6 h-6 bg-gray-800 rounded-full mb-1 flex items-center justify-center">
                        <Medal className="w-4 h-4 text-orange-400" />
                      </div>
                      <div className="text-xs text-gray-900 font-bold">CardWizard</div>
                    </div>
                    <Badge className="bg-orange-500 text-black font-bold">#3</Badge>
                    <div className="text-emerald-400 font-bold text-sm mt-1">$5,200</div>
                  </div>
                </div>

                {/* Leaderboard List */}
                <div className="space-y-3">
                  {[
                    { rank: "#01", player: "CryptoKing", winnings: "$15,420" },
                    { rank: "#02", player: "NeonMaster", winnings: "$8,750" },
                    { rank: "#03", player: "CardWizard", winnings: "$5,200" },
                    { rank: "#04", player: "DragonSlayer", winnings: "$3,890" },
                    { rank: "#05", player: "ShadowBlade", winnings: "$2,150" },
                  ].map((entry, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 rounded-lg p-3 flex justify-between items-center border border-purple-500/20"
                    >
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-purple-400 border-purple-400/50">
                          {entry.rank}
                        </Badge>
                        <span className="text-white font-medium">{entry.player}</span>
                      </div>
                      <span className="text-emerald-400 font-bold">{entry.winnings}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Middle Section - Room Management */}
          <div className="space-y-6">
            <Card className="bg-black border-2 border-orange-500/30 h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-orange-400 font-mono flex items-center gap-2">
                  <Gamepad2 className="w-6 h-6" />
                  Room Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3 neon-glow">
                  Create Room
                </Button>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">Available Rooms</h3>
                  {[
                    { name: "High Stakes Arena", players: ["CryptoKing"], betting: "$500", playerCount: 1 },
                    { name: "Pro Tournament", players: ["NeonMaster", "CardWizard"], betting: "$1000", playerCount: 2 },
                    { name: "Casual Match", players: ["DragonSlayer"], betting: "$50", playerCount: 1 },
                    { name: "Elite Battle", players: ["ShadowBlade", "NeonKnight"], betting: "$750", playerCount: 2 },
                    { name: "Speed Duel", players: ["CardMaster99"], betting: "$200", playerCount: 1 },
                  ].map((room, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-orange-800/20 to-red-800/20 rounded-lg p-4 border border-orange-500/20"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-white font-medium">{room.name}</h4>
                        <Badge
                          variant={room.playerCount < 2 ? "default" : "secondary"}
                          className={room.playerCount < 2 ? "bg-orange-600" : "bg-red-600"}
                        >
                          {room.playerCount < 2 ? "Waiting" : "Full"}
                        </Badge>
                      </div>
                      <div className="mb-3">
                        <div className="text-gray-400 text-sm mb-1">Players ({room.playerCount}/2):</div>
                        <div className="text-white text-sm">
                          {room.players.join(", ")}
                          {room.playerCount < 2 && " + 1 slot available"}
                        </div>
                        <div className="text-emerald-400 font-bold text-sm mt-1">Betting: {room.betting}</div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-orange-500/50 text-orange-400 hover:bg-orange-600/20 bg-transparent flex-1"
                        >
                          <Share className="w-3 h-3 mr-1" />
                          Share
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-orange-500/50 text-orange-400 hover:bg-orange-600/20 bg-transparent flex-1"
                          disabled={room.playerCount >= 2}
                        >
                          {room.playerCount >= 2 ? "Full" : "Join"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Section - Public Chat */}
          <div className="space-y-6">
            <Card className="bg-black border-2 border-teal-500/30 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-teal-400 font-mono flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Public Chat
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                {/* Message List */}
                <div className="flex-1 space-y-3 mb-4 overflow-y-auto">
                  {chatMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className="bg-gradient-to-r from-teal-800/20 to-cyan-800/20 rounded-lg p-3 border border-teal-500/20"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-teal-400 font-semibold text-sm">{msg.player}</span>
                        <span className="text-gray-500 text-xs">{msg.time}</span>
                      </div>
                      <p className="text-gray-200">{msg.message}</p>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="flex gap-2">
                  <Input
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  />
                  <Button onClick={sendMessage} size="icon" className="bg-teal-600 hover:bg-teal-700 neon-glow">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
