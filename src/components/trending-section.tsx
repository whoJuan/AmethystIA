"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TrendingUp, Star, Eye, Heart, Zap, Play, Share2, Award, Flame } from "lucide-react"

export function TrendingSection() {
  const [timeframe, setTimeframe] = useState("week")
  const [category, setCategory] = useState("all")

  const trendingContent = [
    {
      id: 1,
      title: "The Quantum Paradox",
      author: "Dr. Sarah Chen",
      authorAvatar: "/fantasy-character-portrait.jpg",
      type: "Science Fiction Novel",
      cover: "/mysterious-character-portrait.jpg",
      description: "A mind-bending journey through parallel universes where quantum physics meets human emotion.",
      stats: {
        views: 45200,
        likes: 3400,
        rating: 4.9,
        chapters: 24,
      },
      trending: {
        position: 1,
        change: "+3",
        velocity: "🔥 Hot",
      },
      tags: ["Sci-Fi", "Quantum Physics", "Parallel Worlds"],
    },
    {
      id: 2,
      title: "Neon Dreams: Interactive",
      author: "Alex Rivera",
      authorAvatar: "/fantasy-character-portrait.jpg",
      type: "Interactive Movie",
      cover: "/mysterious-character-portrait.jpg",
      description: "A cyberpunk thriller where your choices determine the fate of Neo-Tokyo's underground resistance.",
      stats: {
        views: 38900,
        likes: 2800,
        rating: 4.8,
        duration: "2h 15m",
      },
      trending: {
        position: 2,
        change: "new",
        velocity: "⚡ Rising Fast",
      },
      tags: ["Cyberpunk", "Interactive", "Thriller"],
    },
    {
      id: 3,
      title: "Chronicles of Aethermoor",
      author: "Luna Blackwood",
      authorAvatar: "/mysterious-character-portrait.jpg",
      type: "Fantasy Series",
      cover: "/fantasy-character-portrait.jpg",
      description: "An epic fantasy saga following the last mage's quest to restore magic to a dying world.",
      stats: {
        views: 52100,
        likes: 4200,
        rating: 4.9,
        episodes: 12,
      },
      trending: {
        position: 3,
        change: "-1",
        velocity: "📈 Steady Growth",
      },
      tags: ["Fantasy", "Magic", "Epic Adventure"],
    },
  ]

  const topGenres = [
    { name: "Science Fiction", growth: "+45%", color: "text-blue-400" },
    { name: "Fantasy", growth: "+32%", color: "text-purple-400" },
    { name: "Interactive Media", growth: "+78%", color: "text-green-400" },
    { name: "Mystery/Thriller", growth: "+23%", color: "text-red-400" },
    { name: "Romance", growth: "+19%", color: "text-pink-400" },
  ]

  const risingCreators = [
    {
      name: "Maya Patel",
      avatar: "/fantasy-character-portrait.jpg",
      specialty: "AI-Enhanced Storytelling",
      growth: "+156%",
      followers: 8900,
    },
    {
      name: "Jordan Kim",
      avatar: "/mysterious-character-portrait.jpg",
      specialty: "Interactive Narratives",
      growth: "+134%",
      followers: 6700,
    },
    {
      name: "Carlos Rodriguez",
      avatar: "/fantasy-character-portrait.jpg",
      specialty: "Sci-Fi World Building",
      growth: "+98%",
      followers: 5400,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Trending Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-primary" />
            Trending Now
          </h2>
          <p className="text-muted-foreground">Discover the hottest AI-powered creations taking the world by storm</p>
        </div>
        <div className="flex items-center gap-3">
          <Tabs value={timeframe} onValueChange={setTimeframe}>
            <TabsList className="bg-card/50">
              <TabsTrigger value="day">Today</TabsTrigger>
              <TabsTrigger value="week">This Week</TabsTrigger>
              <TabsTrigger value="month">This Month</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Category Filter */}
      <Tabs value={category} onValueChange={setCategory}>
        <TabsList className="bg-card/50 backdrop-blur-sm">
          <TabsTrigger value="all">All Content</TabsTrigger>
          <TabsTrigger value="books">Books</TabsTrigger>
          <TabsTrigger value="series">Series</TabsTrigger>
          <TabsTrigger value="movies">Movies</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Trending List */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="gradient-card border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-orange-400" />
                    Top Trending Content
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {trendingContent.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-4 p-4 bg-background/30 rounded-lg hover:bg-background/50 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-sm">
                        #{item.trending.position}
                      </div>

                      <div className="w-16 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.cover || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold group-hover:text-primary transition-colors line-clamp-1">
                              {item.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">by {item.author}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="secondary"
                              className={
                                item.trending.change === "new"
                                  ? "bg-green-500/20 text-green-400"
                                  : item.trending.change.startsWith("+")
                                    ? "bg-blue-500/20 text-blue-400"
                                    : "bg-orange-500/20 text-orange-400"
                              }
                            >
                              {item.trending.change === "new" ? "NEW" : item.trending.change}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {item.stats.views.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-3 h-3" />
                            {item.stats.likes.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            {item.stats.rating}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {item.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs bg-transparent">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Play className="w-3 h-3" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Share2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trending Genres */}
              <Card className="gradient-card border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="w-5 h-5 text-secondary" />
                    Trending Genres
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {topGenres.map((genre, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className={`font-medium ${genre.color}`}>{genre.name}</span>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                        {genre.growth}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Rising Creators */}
              <Card className="gradient-card border-accent/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Zap className="w-5 h-5 text-accent" />
                    Rising Creators
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {risingCreators.map((creator, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 border-2 border-accent/30">
                        <AvatarImage src={creator.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {creator.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm">{creator.name}</h4>
                        <p className="text-xs text-muted-foreground">{creator.specialty}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="bg-green-500/20 text-green-400 text-xs">
                            {creator.growth}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {creator.followers.toLocaleString()} followers
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Trending Stats */}
              <Card className="gradient-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Platform Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">2.4M</div>
                      <div className="text-xs text-muted-foreground">Total Views Today</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">156K</div>
                      <div className="text-xs text-muted-foreground">New Creations</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">89K</div>
                      <div className="text-xs text-muted-foreground">Active Creators</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">+23%</div>
                      <div className="text-xs text-muted-foreground">Growth This Week</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
