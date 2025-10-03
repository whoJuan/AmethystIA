"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navigation } from "@/components/navigation"
import {
  BookOpen,
  Grid3X3,
  List,
  Search,
  Filter,
  Clock,
  Star,
  Edit3,
  Trash2,
  Download,
  Share2,
  MoreHorizontal,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LibraryPage() {
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("recent")
  const [filterBy, setFilterBy] = useState("all")

  const projects = [
    {
      id: 1,
      title: "The Quantum Prophecy",
      type: "book",
      genre: "Sci-Fi",
      progress: 65,
      wordCount: 32500,
      lastEdited: "2 hours ago",
      status: "draft",
      cover: "/sci-fi-book-cover-quantum.jpg",
    },
    {
      id: 2,
      title: "Shadows of Eldoria",
      type: "series",
      genre: "Fantasy",
      progress: 40,
      wordCount: 18750,
      lastEdited: "1 day ago",
      status: "published",
      cover: "/fantasy-book-cover-shadows-eldoria.jpg",
    },
    {
      id: 3,
      title: "Midnight Detective",
      type: "movie",
      genre: "Mystery",
      progress: 85,
      wordCount: 12000,
      lastEdited: "3 days ago",
      status: "review",
      cover: "/mystery-movie-poster-detective.jpg",
    },
    {
      id: 4,
      title: "Love in Tokyo",
      type: "book",
      genre: "Romance",
      progress: 20,
      wordCount: 8500,
      lastEdited: "1 week ago",
      status: "draft",
      cover: "/romance-book-cover-tokyo.jpg",
    },
    {
      id: 5,
      title: "The AI Chronicles",
      type: "show",
      genre: "Sci-Fi",
      progress: 55,
      wordCount: 25000,
      lastEdited: "4 days ago",
      status: "draft",
      cover: "/sci-fi-tv-show-poster-ai.jpg",
    },
    {
      id: 6,
      title: "Haunted Memories",
      type: "book",
      genre: "Horror",
      progress: 75,
      wordCount: 41200,
      lastEdited: "5 hours ago",
      status: "draft",
      cover: "/horror-book-cover-haunted-memories.jpg",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case "review":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      case "draft":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "book":
        return "📚"
      case "series":
        return "📖"
      case "movie":
        return "🎬"
      case "show":
        return "📺"
      default:
        return "📄"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-pink-950">
      <Navigation />

      <div className="container mx-auto px-6 py-8">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search your projects..."
              className="pl-10 bg-black/20 border-purple-600/30 text-foreground"
            />
          </div>
          <div className="flex gap-2">
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger className="w-32 bg-black/20 border-purple-600/30">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="book">Books</SelectItem>
                <SelectItem value="series">Series</SelectItem>
                <SelectItem value="movie">Movies</SelectItem>
                <SelectItem value="show">TV Shows</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-32 bg-black/20 border-purple-600/30">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Recent</SelectItem>
                <SelectItem value="title">Title</SelectItem>
                <SelectItem value="progress">Progress</SelectItem>
                <SelectItem value="status">Status</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex border border-purple-600/30 rounded-md bg-black/20">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setViewMode("grid")}
                className={`${viewMode === "grid" ? "bg-purple-600/20" : ""} hover:bg-purple-800/20`}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setViewMode("list")}
                className={`${viewMode === "list" ? "bg-purple-600/20" : ""} hover:bg-purple-800/20`}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Projects</p>
                  <p className="text-2xl font-bold text-foreground">6</p>
                </div>
                <BookOpen className="h-8 w-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Published</p>
                  <p className="text-2xl font-bold text-foreground">1</p>
                </div>
                <Star className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Words</p>
                  <p className="text-2xl font-bold text-foreground">137K</p>
                </div>
                <Edit3 className="h-8 w-8 text-pink-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Progress</p>
                  <p className="text-2xl font-bold text-foreground">57%</p>
                </div>
                <Clock className="h-8 w-8 text-cyan-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-black/40 border-purple-800/30 backdrop-blur-sm hover:border-purple-600/50 transition-all group"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={project.cover || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 right-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="bg-black/50 hover:bg-black/70">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>
                            <Edit3 className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="h-4 w-4 mr-2" />
                            Export
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-400">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <Badge className={`absolute top-2 left-2 ${getStatusColor(project.status)}`}>
                      {project.status}
                    </Badge>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{getTypeIcon(project.type)}</span>
                      <Badge variant="outline" className="border-purple-600/30 text-purple-300 text-xs">
                        {project.genre}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{project.title}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{project.wordCount.toLocaleString('en-US')} words</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-purple-950/50 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {project.lastEdited}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-black/40 border-purple-800/30 backdrop-blur-sm hover:border-purple-600/50 transition-all"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={project.cover || "/placeholder.svg"}
                      alt={project.title}
                      className="w-16 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{getTypeIcon(project.type)}</span>
                        <h3 className="font-semibold text-foreground">{project.title}</h3>
                        <Badge variant="outline" className="border-purple-600/30 text-purple-300 text-xs">
                          {project.genre}
                        </Badge>
                        <Badge className={`${getStatusColor(project.status)} text-xs`}>{project.status}</Badge>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span>{project.wordCount.toLocaleString('en-US')} words</span>
                        <span>{project.progress}% complete</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {project.lastEdited}
                        </span>
                      </div>
                      <div className="w-48 bg-purple-950/50 rounded-full h-2 mt-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="hover:bg-purple-800/20">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <Edit3 className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Share2 className="h-4 w-4 mr-2" />
                          Share
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="h-4 w-4 mr-2" />
                          Export
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-400">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
