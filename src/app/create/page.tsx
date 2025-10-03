"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { BookOpen, Wand2, Sparkles, Users, Target, Palette } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { SetTheSceneForm } from "@/components/ai-tools/set-the-scene-form"
import { TechnologyForm } from "@/components/ai-tools/technology-form"

export default function CreatePage() {
  const [projectType, setProjectType] = useState("book")
  const [title, setTitle] = useState("")
  const [genre, setGenre] = useState("")
  const [content, setContent] = useState("")
  const [aiAssistance, setAiAssistance] = useState([50])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-pink-950">
      <Navigation />

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Editor */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Setup */}
            <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-400" />
                  Project Setup
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Project Type</label>
                    <Select value={projectType} onValueChange={setProjectType}>
                      <SelectTrigger className="bg-black/20 border-purple-600/30">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="book">📚 Book</SelectItem>
                        <SelectItem value="series">📖 Series</SelectItem>
                        <SelectItem value="movie">🎬 Movie</SelectItem>
                        <SelectItem value="show">📺 TV Show</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Genre</label>
                    <Select value={genre} onValueChange={setGenre}>
                      <SelectTrigger className="bg-black/20 border-purple-600/30">
                        <SelectValue placeholder="Select genre" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fantasy">Fantasy</SelectItem>
                        <SelectItem value="scifi">Sci-Fi</SelectItem>
                        <SelectItem value="romance">Romance</SelectItem>
                        <SelectItem value="mystery">Mystery</SelectItem>
                        <SelectItem value="thriller">Thriller</SelectItem>
                        <SelectItem value="horror">Horror</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">AI Assistance</label>
                    <div className="px-3 py-2 bg-black/20 border border-purple-600/30 rounded-md">
                      <Slider
                        value={aiAssistance}
                        onValueChange={setAiAssistance}
                        max={100}
                        step={10}
                        className="w-full"
                      />
                      <div className="text-xs text-muted-foreground mt-1">{aiAssistance[0]}% AI Help</div>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Title</label>
                  <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter your story title..."
                    className="bg-black/20 border-purple-600/30 text-foreground"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Writing Area */}
            <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-purple-400" />
                    Writing Canvas
                  </span>
                  <Badge variant="outline" className="border-purple-600/30 text-purple-300">
                    Chapter 1
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={content}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
                  placeholder="Begin your story here... Let your imagination flow!"
                  className="min-h-[400px] bg-black/20 border-purple-600/30 text-foreground resize-none"
                />
                <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
                  <span>
                    {content.length} characters • {content.split(" ").filter((w) => w).length} words
                  </span>
                  <Button variant="ghost" size="sm" className="text-purple-400 hover:bg-purple-800/20">
                    <Wand2 className="h-4 w-4 mr-2" />
                    AI Suggest
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Tools */}
          <div className="space-y-6">
            {/* AI Tools */}
            <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Wand2 className="h-5 w-5 text-pink-400" />
                  AI Creative Tools
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <SetTheSceneForm />
                <TechnologyForm />
                
                <Button
                  variant="outline"
                  className="w-full justify-start border-purple-600/30 hover:bg-purple-800/20 bg-transparent"
                >
                  <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center mr-3">
                    <span className="text-xs font-bold">💡</span>
                  </div>
                  Generate Plot Ideas
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full justify-start border-purple-600/30 hover:bg-purple-800/20 bg-transparent"
                >
                  <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center mr-3">
                    <Users className="w-4 h-4" />
                  </div>
                  Create Characters
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full justify-start border-purple-600/30 hover:bg-purple-800/20 bg-transparent"
                >
                  <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center mr-3">
                    <Target className="w-4 h-4" />
                  </div>
                  Scene Builder
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full justify-start border-purple-600/30 hover:bg-purple-800/20 bg-transparent"
                >
                  <div className="w-6 h-6 rounded bg-white/20 flex items-center justify-center mr-3">
                    <Palette className="w-4 h-4" />
                  </div>
                  Style Enhancer
                </Button>
              </CardContent>
            </Card>

            {/* Project Stats */}
            <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-foreground">Project Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Word Count</span>
                    <span className="text-foreground">2,847 / 50,000</span>
                  </div>
                  <div className="w-full bg-purple-950/50 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      style={{ width: "5.7%" }}
                    ></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Chapters</span>
                    <span className="text-foreground">1 / 20</span>
                  </div>
                  <div className="w-full bg-purple-950/50 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      style={{ width: "5%" }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-foreground">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-muted-foreground">Auto-saved 2 min ago</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-muted-foreground">AI suggestion applied</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-muted-foreground">Character created</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
