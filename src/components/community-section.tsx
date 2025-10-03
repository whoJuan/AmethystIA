"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, MessageCircle, Heart, Eye, Star, Trophy, Zap, Search, UserPlus, Share2, ThumbsUp } from "lucide-react"

export function CommunitySection() {
  const [activeTab, setActiveTab] = useState("feed")

  const communityPosts = [
    {
      id: 1,
      author: {
        name: "Elena Rodriguez",
        avatar: "/fantasy-character-portrait.jpg",
        badge: "Rising Star",
        followers: 2400,
      },
      content: {
        title: "Just finished my first AI-generated fantasy novel!",
        description:
          "After 3 months of collaboration with Narratica, 'The Crystal Prophecy' is finally complete. The AI helped me develop complex character arcs and plot twists I never would have thought of alone.",
        type: "Book",
        genre: "Fantasy",
        cover: "/mysterious-character-portrait.jpg",
      },
      engagement: {
        likes: 342,
        comments: 89,
        shares: 23,
        views: 1200,
      },
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      author: {
        name: "Marcus Chen",
        avatar: "/fantasy-character-portrait.jpg",
        badge: "AI Pioneer",
        followers: 5600,
      },
      content: {
        title: "New interactive movie series dropping next week!",
        description:
          "Excited to share 'Neon Futures' - a cyberpunk interactive movie where viewers make choices that affect the storyline. Created entirely with AI assistance for both script and visuals.",
        type: "Interactive Movie",
        genre: "Sci-Fi",
        cover: "/mysterious-character-portrait.jpg",
      },
      engagement: {
        likes: 567,
        comments: 134,
        shares: 45,
        views: 2800,
      },
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      author: {
        name: "Aria Thompson",
        avatar: "/mysterious-character-portrait.jpg",
        badge: "Community Leader",
        followers: 8900,
      },
      content: {
        title: "Tips for collaborating with AI on character development",
        description:
          "Here's what I've learned after creating 50+ characters with AI assistance. The key is being specific about personality traits and backstory elements...",
        type: "Tutorial",
        genre: "Educational",
        cover: "/fantasy-character-portrait.jpg",
      },
      engagement: {
        likes: 789,
        comments: 203,
        shares: 156,
        views: 4200,
      },
      timestamp: "1 day ago",
    },
  ]

  const topCreators = [
    {
      name: "Sarah Kim",
      avatar: "/fantasy-character-portrait.jpg",
      specialty: "Fantasy Novels",
      followers: 12500,
      works: 23,
      rating: 4.9,
    },
    {
      name: "David Park",
      avatar: "/mysterious-character-portrait.jpg",
      specialty: "Sci-Fi Series",
      followers: 9800,
      works: 15,
      rating: 4.8,
    },
    {
      name: "Luna Martinez",
      avatar: "/fantasy-character-portrait.jpg",
      specialty: "Interactive Movies",
      followers: 7600,
      works: 8,
      rating: 4.9,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Community Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-2">Creative Community</h2>
          <p className="text-muted-foreground">Connect, share, and discover amazing AI-powered creations</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search community..." className="pl-10 w-64 bg-background/50" />
          </div>
          <Button variant="outline" className="bg-transparent">
            <UserPlus className="w-4 h-4 mr-2" />
            Follow Creators
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-card/50 backdrop-blur-sm">
          <TabsTrigger value="feed" className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Community Feed
          </TabsTrigger>
          <TabsTrigger value="creators" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Top Creators
          </TabsTrigger>
          <TabsTrigger value="challenges" className="flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            Challenges
          </TabsTrigger>
        </TabsList>

        <TabsContent value="feed" className="mt-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              {communityPosts.map((post) => (
                <Card
                  key={post.id}
                  className="gradient-card border-primary/20 hover:border-primary/30 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12 border-2 border-primary/30">
                        <AvatarImage src={post.author.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {post.author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{post.author.name}</h4>
                          <Badge variant="secondary" className="bg-primary/20 text-primary text-xs">
                            {post.author.badge}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {post.author.followers.toLocaleString()} followers • {post.timestamp}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{post.content.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{post.content.description}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="aspect-video w-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden">
                        <img
                          src={post.content.cover || "/placeholder.svg"}
                          alt={post.content.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="bg-transparent">
                            {post.content.type}
                          </Badge>
                          <Badge variant="secondary" className="bg-secondary/20">
                            {post.content.genre}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {post.engagement.views.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center gap-6">
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-400">
                          <Heart className="w-4 h-4 mr-2" />
                          {post.engagement.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-blue-400">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          {post.engagement.comments}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-400">
                          <Share2 className="w-4 h-4 mr-2" />
                          {post.engagement.shares}
                        </Button>
                      </div>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <ThumbsUp className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="gradient-card border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Trending Topics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "#AIStorytelling",
                    "#FantasyNovel",
                    "#InteractiveMedia",
                    "#SciFiSeries",
                    "#CharacterDevelopment",
                  ].map((tag, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-primary font-medium">{tag}</span>
                      <Badge variant="secondary" className="bg-secondary/20 text-xs">
                        {Math.floor(Math.random() * 1000) + 100}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="gradient-card border-accent/20">
                <CardHeader>
                  <CardTitle className="text-lg">Weekly Challenge</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center">
                      <Trophy className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold">Time Travel Tales</h4>
                    <p className="text-sm text-muted-foreground">
                      Create a short story involving time travel with an unexpected twist. Use AI to help develop the
                      paradox!
                    </p>
                    <Button className="w-full glow-accent">
                      <Zap className="w-4 h-4 mr-2" />
                      Join Challenge
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="creators" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCreators.map((creator, index) => (
              <Card
                key={index}
                className="gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group cursor-pointer"
              >
                <CardHeader className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-primary/30 group-hover:border-primary/50 transition-colors">
                    <AvatarImage src={creator.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {creator.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="group-hover:text-primary transition-colors">{creator.name}</CardTitle>
                  <CardDescription>{creator.specialty}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-primary">{creator.followers.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">Followers</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-secondary">{creator.works}</div>
                      <div className="text-xs text-muted-foreground">Works</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-accent flex items-center justify-center gap-1">
                        <Star className="w-4 h-4 fill-current" />
                        {creator.rating}
                      </div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                  </div>
                  <Button className="w-full glow-primary">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Follow
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="challenges" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Time Travel Tales",
                description: "Create stories with temporal paradoxes and unexpected twists",
                participants: 234,
                prize: "Featured Story Spotlight",
                deadline: "3 days left",
                difficulty: "Intermediate",
              },
              {
                title: "AI Character Challenge",
                description: "Design the most compelling AI-generated character backstory",
                participants: 156,
                prize: "$500 Creative Grant",
                deadline: "1 week left",
                difficulty: "Beginner",
              },
              {
                title: "Interactive Movie Marathon",
                description: "Build a complete interactive movie experience in 30 days",
                participants: 89,
                prize: "Platform Feature + $1000",
                deadline: "2 weeks left",
                difficulty: "Advanced",
              },
            ].map((challenge, index) => (
              <Card
                key={index}
                className="gradient-card border-accent/20 hover:border-accent/40 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-accent" />
                        {challenge.title}
                      </CardTitle>
                      <CardDescription className="mt-2">{challenge.description}</CardDescription>
                    </div>
                    <Badge
                      variant="secondary"
                      className={
                        challenge.difficulty === "Beginner"
                          ? "bg-green-500/20 text-green-400"
                          : challenge.difficulty === "Intermediate"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-red-500/20 text-red-400"
                      }
                    >
                      {challenge.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Participants:</span>
                      <div className="font-semibold">{challenge.participants}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Deadline:</span>
                      <div className="font-semibold text-accent">{challenge.deadline}</div>
                    </div>
                  </div>
                  <div className="p-3 bg-background/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Prize:</span>
                    <div className="font-semibold text-primary">{challenge.prize}</div>
                  </div>
                  <Button className="w-full glow-accent">
                    <Zap className="w-4 h-4 mr-2" />
                    Join Challenge
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
