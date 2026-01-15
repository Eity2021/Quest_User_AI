"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Trophy, Flame, Book, Zap, Lock, Star } from "lucide-react"

export default function page() {
  const [activeTab, setActiveTab] = useState("achievements")
  const [xpToAdd, setXpToAdd] = useState(0)

  const userStats = {
    totalXP: 2450,
    currentLevel: 7,
    nextLevelXP: 320,
    nextLevelTotal: 500,
    rewards: 1320,
  }

  const achievements = [
    { id: 1, name: "First Quiz", icon: Trophy, color: "text-yellow-400", locked: false, xp: 50 },
    { id: 2, name: "7 Day Streak", icon: Flame, color: "text-orange-400", locked: false, xp: 100 },
    { id: 3, name: "Scholar", icon: Book, color: "text-blue-400", locked: false, xp: 150 },
    { id: 4, name: "Top Student", icon: Zap, color: "text-purple-400", locked: false, xp: 200 },
    { id: 5, name: "Ascend", icon: Star, color: "text-gray-400", locked: true, xp: 300 },
    { id: 6, name: "Masters", icon: Trophy, color: "text-gray-400", locked: true, xp: 500 },
  ]

  const recentRedemptions = [
    { id: 1, name: "TDE Booster Pack", icon: "rocket", cost: 500, date: "2 days ago" },
    { id: 2, name: "Premium Access", icon: "crown", cost: 1000, date: "5 days ago" },
  ]

  const progressPercentage = (userStats.nextLevelXP / userStats.nextLevelTotal) * 100

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur">
        <div className="mx-auto container px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-balance">Rewards Dashboard</h1>
            <p className="text-muted-foreground mt-1">Track your progress and achievements</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Total Rewards</div>
            <div className="text-4xl font-bold text-accent">{userStats.rewards.toLocaleString()}</div>
          </div>
        </div>
      </header>

      <main className="mx-auto conatiner px-6 py-12">
        {/* XP Progress Card */}
        <Card className="mb-8 border-border bg-card/50 p-8 backdrop-blur">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div>
              <div className="text-sm text-muted-foreground mb-2">Total Experience Points</div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold bg-linear-to-r from-accent to-primary bg-clip-text text-transparent">
                  {userStats.totalXP.toLocaleString()}
                </span>
                <span className="text-xl text-accent">XP</span>
              </div>
              <div className="mt-2 text-muted-foreground">Level {userStats.currentLevel}</div>
            </div>
            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium">Progress to Level {userStats.currentLevel + 1}</span>
                <span className="text-sm text-accent font-bold">{userStats.nextLevelXP} XP</span>
              </div>
              <div className="h-3 rounded-full bg-secondary/50 overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-accent to-primary transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                {userStats.nextLevelTotal - userStats.nextLevelXP} XP to next level
              </div>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <div className="mb-8 border-b border-border flex gap-8">
          {[
            { id: "achievements", label: "Achievements" },
            { id: "rewards", label: "Rewards" },
            { id: "leaderboard", label: "Leaderboard" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 px-2 font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-b-2 border-accent text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        {activeTab === "achievements" && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement) => {
              const IconComponent = achievement.icon
              return (
                <Card
                  key={achievement.id}
                  className={`p-6 border transition-all hover:shadow-lg hover:border-accent/50 ${
                    achievement.locked ? "opacity-50" : ""
                  } border-border bg-card/50 backdrop-blur`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-secondary/50 ${achievement.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {achievement.locked && <Lock className="w-5 h-5 text-muted-foreground" />}
                  </div>
                  <h3 className="font-semibold mb-1">{achievement.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">+{achievement.xp} XP</p>
                  {!achievement.locked && (
                    <Badge className="bg-accent/20 text-accent border border-accent/30">Unlocked</Badge>
                  )}
                  {achievement.locked && (
                    <Badge variant="outline" className="border-muted-foreground">
                      Locked
                    </Badge>
                  )}
                </Card>
              )
            })}
          </div>
        )}

        {/* Rewards Tab */}
        {activeTab === "rewards" && (
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              {recentRedemptions.map((reward) => (
                <Card
                  key={reward.id}
                  className="p-6 border-border bg-card/50 backdrop-blur flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-semibold">{reward.name}</h4>
                    <p className="text-sm text-muted-foreground">{reward.date}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-accent font-bold">Add XP</div>
                    <p className="text-sm text-muted-foreground">{reward.cost} XP</p>
                  </div>
                </Card>
              ))}
            </div>
            <Card className="p-6 border-border bg-card/50 backdrop-blur">
              <h3 className="font-semibold mb-4">Redeem Rewards</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium block mb-2">Select Reward Pack</label>
                  <select className="w-full px-4 py-2 rounded-lg bg-secondary/50 border border-border text-foreground">
                    <option>Bronze Pack - 500 XP</option>
                    <option>Silver Pack - 1000 XP</option>
                    <option>Gold Pack - 2000 XP</option>
                  </select>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Claim Reward
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* Leaderboard Tab */}
        {activeTab === "leaderboard" && (
          <Card className="p-8 border-border bg-card/50 backdrop-blur">
            <h3 className="text-xl font-semibold mb-6">Top Learners</h3>
            <div className="space-y-4">
              {[
                { rank: 1, name: "Alex Chen", xp: 5230, badge: "👑" },
                { rank: 2, name: "Jordan Smith", xp: 4850, badge: "🥈" },
                { rank: 3, name: "Casey Williams", xp: 4520, badge: "🥉" },
                { rank: 4, name: "You", xp: 2450, badge: "⭐" },
                { rank: 5, name: "Morgan Lee", xp: 1920, badge: "🚀" },
              ].map((entry) => (
                <div
                  key={entry.rank}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold w-8 text-center">{entry.badge}</span>
                    <div>
                      <p className="font-semibold">{entry.name}</p>
                      <p className="text-sm text-muted-foreground">Level {Math.floor(entry.xp / 500)}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-accent">{entry.xp.toLocaleString()} XP</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}
      </main>
    </div>
  )
}
