"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Clock, Grid3X3, List, Download, Share2 } from "lucide-react"

export function LibrarySection() {
  const [viewMode, setViewMode] = useState("grid")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const myProjects = [
    {
      id: 1,
      title: "The Last Starship",
      type: "Science Fiction Novel",
      status: "In Progress",
      progress: 65,
      lastEdited: "2 hours ago",
      cover: "/fantasy-character-portrait.jpg",
      chapters: 12,
      words: 45000,
    },
    {
      id: 2,
      title: "Midnight Chronicles",
      type: "Fantasy Series",
      status: "Published",
      progress: 100,
      lastEdited: "1 day ago",
      cover: "/mysterious-character-portrait.jpg",
      episodes: 8,
      views: 15200,
    },
    {
      id: 3,
      title: "Urban Legends",
      type: "Interactive Movie",
      status: "Draft",
      progress: 25,
      lastEdited: "3 days ago",
      cover: "/fantasy-character-portrait.jpg",
      scenes: 24,
      duration: "45 min",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects", count: 12 },
    { id: "books", label: "Books", count: 5 },
    { id: "series", label: "Series", count: 4 },
    { id: "movies", label: "Movies", count: 3 },
  ]

  return (
    <div className="space-y-8">
      {/* Library Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-2">My Creative Library</h2>
          <p className="text-muted-foreground">Manage and organize all your creative projects</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search projects..." className="pl-10 w-64 bg-background/50" />
          </div>
          <Button variant="outline" size="icon" className="bg-transparent">
            <Filter className="w-4 h-4" />
          </Button>
          <div className="flex border border-border/50 rounded-lg bg-background/30">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-r-none"
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-l-none"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList className="bg-card/50 backdrop-blur-sm">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
              {category.label}
              <Badge variant="secondary" className="bg-secondary/20 text-xs">
                {category.count}
              </Badge>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="mt-6">
          {viewMode === "grid" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myProjects.map((project) => (
                <Card
                  key={project.id}
                  className="gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group cursor-pointer"
                >
                  <CardHeader className="pb-3">
                    <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 overflow-hidden group-hover:scale-105 transition-transform">
                      <img
                        src={project.cover || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-1">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm">{project.type}</CardDescription>
                      </div>
                      <Badge
                        variant={project.status === "Published" ? "default" : "secondary"}
                        className={
                          project.status === "Published"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : project.status === "In Progress"
                              ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                              : "bg-orange-500/20 text-orange-400 border-orange-500/30"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-background/30 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {project.lastEdited}
                        </div>
                        <div className="flex items-center gap-3">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Share2 className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Download className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {myProjects.map((project) => (
                <Card
                  key={project.id}
                  className="gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 group cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={project.cover || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">{project.type}</p>
                          </div>
                          <Badge
                            variant={project.status === "Published" ? "default" : "secondary"}
                            className={
                              project.status === "Published"
                                ? "bg-green-500/20 text-green-400 border-green-500/30"
                                : project.status === "In Progress"
                                  ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                  : "bg-orange-500/20 text-orange-400 border-orange-500/30"
                            }
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {project.lastEdited}
                          </div>
                          <div>{project.progress}% complete</div>
                        </div>
                        <div className="w-full bg-background/30 rounded-full h-2 mb-3">
                          <div
                            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Share2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
