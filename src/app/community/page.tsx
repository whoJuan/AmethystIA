"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MessageCircle, Share2, Search, TrendingUp, Users, Award, Filter } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("feed")

  const feedPosts = [
    {
      id: 1,
      author: {
        name: "Luna Starweaver",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
        followers: 12500,
      },
      content:
        "Just finished the first chapter of my new fantasy series! The world-building is getting intense. Can't wait to share more with you all! ✨",
      project: {
        title: "Chronicles of Aethermoor",
        type: "series",
        genre: "Fantasy",
      },
      stats: {
        likes: 234,
        comments: 45,
        shares: 12,
      },
      timeAgo: "2 hours ago",
      image: "/fantasy-character-portrait.jpg",
    },
    {
      id: 2,
      author: {
        name: "Alex Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: false,
        followers: 3200,
      },
      content:
        "Working on a cyberpunk thriller screenplay. The AI integration themes are really resonating with current events. Here's a sneak peek at the main character design!",
      project: {
        title: "Neural Shadows",
        type: "movie",
        genre: "Sci-Fi",
      },
      stats: {
        likes: 156,
        comments: 28,
        shares: 8,
      },
      timeAgo: "4 hours ago",
      image: "/mysterious-character-portrait.jpg",
    },
    {
      id: 3,
      author: {
        name: "Maya Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
        followers: 8900,
      },
      content:
        "Romance writers, what's your favorite way to build tension between characters? I'm exploring some new techniques in my latest novel and would love your thoughts!",
      project: {
        title: "Hearts in Harmony",
        type: "book",
        genre: "Romance",
      },
      stats: {
        likes: 89,
        comments: 67,
        shares: 15,
      },
      timeAgo: "6 hours ago",
    },
  ]

  const trendingCreators = [
    {
      name: "Elena Nightshade",
      avatar: "/placeholder.svg?height=32&width=32",
      genre: "Horror",
      followers: 25600,
      growth: "+15%",
    },
    {
      name: "Marcus Steel",
      avatar: "/placeholder.svg?height=32&width=32",
      genre: "Thriller",
      followers: 18900,
      growth: "+12%",
    },
    {
      name: "Zara Moon",
      avatar: "/placeholder.svg?height=32&width=32",
      genre: "Fantasy",
      followers: 31200,
      growth: "+8%",
    },
  ]

  const challenges = [
    {
      title: "30-Day World Building",
      description: "Create a complete fictional world in 30 days",
      participants: 1247,
      daysLeft: 12,
      prize: "Featured Story Spotlight",
    },
    {
      title: "Character Depth Challenge",
      description: "Develop complex, multi-dimensional characters",
      participants: 892,
      daysLeft: 5,
      prize: "AI Character Generator Access",
    },
    {
      title: "Plot Twist Master",
      description: "Write the most unexpected plot twist",
      participants: 634,
      daysLeft: 18,
      prize: "Premium Template Pack",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-pink-950">
      <Navigation />

      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-black/20 border border-purple-800/30">
            <TabsTrigger value="feed" className="data-[state=active]:bg-purple-600/20">
              <Users className="h-4 w-4 mr-2" />
              Feed
            </TabsTrigger>
            <TabsTrigger value="trending" className="data-[state=active]:bg-purple-600/20">
              <TrendingUp className="h-4 w-4 mr-2" />
              Trending
            </TabsTrigger>
            <TabsTrigger value="challenges" className="data-[state=active]:bg-purple-600/20">
              <Award className="h-4 w-4 mr-2" />
              Challenges
            </TabsTrigger>
            <TabsTrigger value="discover" className="data-[state=active]:bg-purple-600/20">
              <Search className="h-4 w-4 mr-2" />
              Discover
            </TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Feed */}
              <div className="lg:col-span-2 space-y-6">
                {/* Search and Filter */}
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search community posts..."
                      className="pl-10 bg-black/20 border-purple-600/30 text-foreground"
                    />
                  </div>
                  <Button variant="outline" className="border-purple-600/30 hover:bg-purple-800/20 bg-transparent">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>

                {/* Feed Posts */}
                <div className="space-y-6">
                  {feedPosts.map((post) => (
                    <Card key={post.id} className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                      <CardContent className="p-6">
                        {/* Author Info */}
                        <div className="flex items-center gap-3 mb-4">
                          <Avatar>
                            <AvatarImage src={post.author.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-foreground">{post.author.name}</h3>
                              {post.author.verified && (
                                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                                  Verified
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {post.author.followers.toLocaleString()} followers • {post.timeAgo}
                            </p>
                          </div>
                        </div>

                        {/* Content */}
                        <p className="text-foreground mb-4">{post.content}</p>

                        {/* Project Info */}
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="outline" className="border-purple-600/30 text-purple-300">
                            {post.project.type === "book" && "📚"}
                            {post.project.type === "series" && "📖"}
                            {post.project.type === "movie" && "🎬"}
                            {post.project.type === "show" && "📺"}
                            {post.project.title}
                          </Badge>
                          <Badge variant="outline" className="border-pink-600/30 text-pink-300">
                            {post.project.genre}
                          </Badge>
                        </div>

                        {/* Image */}
                        {post.image && (
                          <div className="mb-4">
                            <img
                              src={post.image || "/placeholder.svg"}
                              alt="Post content"
                              className="w-full h-64 object-cover rounded-lg"
                            />
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex items-center gap-6 pt-4 border-t border-purple-800/30">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-pink-400 hover:bg-pink-400/10"
                          >
                            <Heart className="h-4 w-4 mr-2" />
                            {post.stats.likes}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-blue-400 hover:bg-blue-400/10"
                          >
                            <MessageCircle className="h-4 w-4 mr-2" />
                            {post.stats.comments}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-green-400 hover:bg-green-400/10"
                          >
                            <Share2 className="h-4 w-4 mr-2" />
                            {post.stats.shares}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Trending Creators */}
                <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-pink-400" />
                      Trending Creators
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {trendingCreators.map((creator, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={creator.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{creator.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium text-foreground text-sm">{creator.name}</p>
                          <p className="text-xs text-muted-foreground">{creator.genre}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-foreground">{creator.followers.toLocaleString()}</p>
                          <p className="text-xs text-green-400">{creator.growth}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-foreground">Community Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Active Writers</span>
                      <span className="text-foreground font-semibold">12,847</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Stories Shared</span>
                      <span className="text-foreground font-semibold">3,291</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Active Challenges</span>
                      <span className="text-foreground font-semibold">15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Reads</span>
                      <span className="text-foreground font-semibold">2.1M</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="challenges" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <Card key={index} className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <Award className="h-5 w-5 text-yellow-400" />
                      {challenge.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{challenge.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Participants</span>
                        <span className="text-foreground">{challenge.participants.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Days Left</span>
                        <span className="text-foreground">{challenge.daysLeft}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Prize</span>
                        <span className="text-purple-300">{challenge.prize}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      Join Challenge
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trending" className="space-y-6">
            <div className="text-center py-12">
              <TrendingUp className="h-16 w-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Trending Content</h3>
              <p className="text-muted-foreground">Discover the most popular stories and creators right now</p>
            </div>
          </TabsContent>

          <TabsContent value="discover" className="space-y-6">
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Discover New Voices</h3>
              <p className="text-muted-foreground">Find amazing creators and stories tailored to your interests</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
