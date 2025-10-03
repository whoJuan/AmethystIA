"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Navigation } from "@/components/navigation"
import {
  BookOpen,
  Film,
  Tv,
  Sparkles,
  Users,
  Play,
  Plus,
  Star,
  Eye,
  Heart,
  MessageCircle,
  Zap,
  Palette,
  Brain,
  Wand2,
} from "lucide-react"

export default function CreativePlatform() {
  const [activeProject, setActiveProject] = useState("book")

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-pink-950">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
              Unleash Your Creative Universe
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your ideas into captivating stories, immersive series, and cinematic experiences with the power
              of AI. Join thousands of creators building the future of storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow-primary text-lg px-8 py-6">
                <Wand2 className="w-5 h-5 mr-2" />
                Start Creating
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary/30 hover:border-primary bg-transparent"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Creation Dashboard */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Your Creative Dashboard</h3>
            <p className="text-muted-foreground">Choose your medium and let AI bring your vision to life</p>
          </div>

          <Tabs value={activeProject} onValueChange={setActiveProject} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-card/50 backdrop-blur-sm">
              <TabsTrigger value="book" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Books
              </TabsTrigger>
              <TabsTrigger value="series" className="flex items-center gap-2">
                <Tv className="w-4 h-4" />
                Series
              </TabsTrigger>
              <TabsTrigger value="movie" className="flex items-center gap-2">
                <Film className="w-4 h-4" />
                Movies
              </TabsTrigger>
            </TabsList>

            <TabsContent value="book" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Book Creation Panel */}
                <Card className="gradient-card border-primary/20 glow-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-primary" />
                      AI Story Generator
                    </CardTitle>
                    <CardDescription>Create compelling narratives with AI assistance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Input placeholder="Enter your story concept..." className="bg-background/50" />
                    <Textarea
                      placeholder="Describe your characters, setting, and themes..."
                      className="bg-background/50"
                    />
                    <Button className="w-full glow-secondary">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate Story
                    </Button>
                  </CardContent>
                </Card>

                {/* Character Builder */}
                <Card className="gradient-card border-secondary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-secondary" />
                      Character Builder
                    </CardTitle>
                    <CardDescription>Design memorable characters with depth</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Avatar className="w-16 h-16 mx-auto border-2 border-secondary/30">
                          <AvatarImage src="/fantasy-character-portrait.jpg" />
                          <AvatarFallback>MC</AvatarFallback>
                        </Avatar>
                        <p className="text-sm text-center">Main Character</p>
                      </div>
                      <div className="space-y-2">
                        <Avatar className="w-16 h-16 mx-auto border-2 border-accent/30">
                          <AvatarImage src="/mysterious-character-portrait.jpg" />
                          <AvatarFallback>AN</AvatarFallback>
                        </Avatar>
                        <p className="text-sm text-center">Antagonist</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Character
                    </Button>
                  </CardContent>
                </Card>

                {/* World Builder */}
                <Card className="gradient-card border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="w-5 h-5 text-accent" />
                      World Builder
                    </CardTitle>
                    <CardDescription>Craft immersive settings and environments</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video bg-background/30 rounded-lg border border-accent/20 flex items-center justify-center">
                      <div className="text-center">
                        <Palette className="w-8 h-8 text-accent mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">World Map Preview</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full border-accent/30 hover:border-accent bg-transparent">
                      <Zap className="w-4 h-4 mr-2" />
                      Generate World
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="series" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="gradient-card border-primary/20">
                  <CardHeader>
                    <CardTitle>Episode Planner</CardTitle>
                    <CardDescription>Structure your series with AI-powered episode outlines</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {[1, 2, 3].map((ep) => (
                        <div key={ep} className="flex items-center gap-3 p-3 bg-background/30 rounded-lg">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm">
                            {ep}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">Episode {ep}</p>
                            <p className="text-sm text-muted-foreground">The Beginning</p>
                          </div>
                          <Progress value={ep * 30} className="w-20" />
                        </div>
                      ))}
                    </div>
                    <Button className="w-full">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Episode
                    </Button>
                  </CardContent>
                </Card>

                <Card className="gradient-card border-secondary/20">
                  <CardHeader>
                    <CardTitle>Series Analytics</CardTitle>
                    <CardDescription>Track engagement and optimize your content</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">12.5K</div>
                        <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                          <Eye className="w-3 h-3" />
                          Views
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-secondary">2.1K</div>
                        <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                          <Heart className="w-3 h-3" />
                          Likes
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">847</div>
                        <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          Comments
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="movie" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="gradient-card border-primary/20">
                  <CardHeader>
                    <CardTitle>Script Generator</CardTitle>
                    <CardDescription>AI-powered screenplay creation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-background/30 rounded-lg border border-primary/20 flex items-center justify-center mb-4">
                      <div className="text-center">
                        <Film className="w-8 h-8 text-primary mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Script Preview</p>
                      </div>
                    </div>
                    <Button className="w-full">Generate Script</Button>
                  </CardContent>
                </Card>

                <Card className="gradient-card border-secondary/20">
                  <CardHeader>
                    <CardTitle>Storyboard AI</CardTitle>
                    <CardDescription>Visual scene planning</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {[1, 2, 3, 4].map((scene) => (
                        <div
                          key={scene}
                          className="aspect-square bg-background/30 rounded border border-secondary/20 flex items-center justify-center"
                        >
                          <span className="text-xs text-muted-foreground">Scene {scene}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full bg-transparent">
                      Create Storyboard
                    </Button>
                  </CardContent>
                </Card>

                <Card className="gradient-card border-accent/20">
                  <CardHeader>
                    <CardTitle>Video Preview</CardTitle>
                    <CardDescription>AI-generated movie trailer</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-background/30 rounded-lg border border-accent/20 flex items-center justify-center mb-4 relative group cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Play className="w-12 h-12 text-accent group-hover:scale-110 transition-transform" />
                    </div>
                    <Button variant="outline" className="w-full border-accent/30 bg-transparent">
                      <Play className="w-4 h-4 mr-2" />
                      Generate Trailer
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Trending Creations</h3>
            <p className="text-muted-foreground">Discover what the community is creating</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "The Quantum Chronicles",
                type: "Book Series",
                author: "Alex Chen",
                rating: 4.8,
                views: "15.2K",
              },
              {
                title: "Neon Dreams",
                type: "Interactive Movie",
                author: "Sam Rivera",
                rating: 4.9,
                views: "23.1K",
              },
              { title: "Mystic Realms", type: "Fantasy Novel", author: "Jordan Blake", rating: 4.7, views: "8.9K" },
            ].map((project, index) => (
              <Card
                key={index}
                className="gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
              >
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription>
                    {project.type} by {project.author}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{project.rating}</span>
                    </div>
                    <Badge variant="secondary" className="bg-secondary/20 text-foreground">
                      <span className="text-foreground">{project.views}</span>{" "}
                      <span className="text-muted-foreground">views</span>
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-800/30 py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-primary glow-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Narratica</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Empowering creators to build extraordinary stories with artificial intelligence
          </p>
          <p className="text-sm text-muted-foreground">© 2025 Narratica. Crafted with ❤️ for WordDevs.</p>
        </div>
      </footer>
    </div>
  )
}