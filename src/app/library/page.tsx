"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import {
  BookOpen,
  Grid3X3,
  List,
  Search,
  Clock,
  Star,
  Edit3,
  Trash2,
  Download,
  Share2,
  MoreHorizontal,
  Heart,
  BookMarked,
  PenTool,
  Library,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { books } from "@/lib/sample-books"

interface BookItem {
  id: string
  title: string
  author?: string
  cover?: string
  genre?: string | string[]
  type?: string
  pages?: any[]
  rating?: number
  totalRatings?: number
  isFromPlatform?: boolean
  isFavorite?: boolean
  readingData?: {
    progress: number
    currentPage: number
    lastRead: string
  }
  progress?: number
  wordCount?: number
  lastEdited?: string
  status?: string
  currentPage?: number
  lastRead?: string
}

export default function LibraryPage() {
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("recent")
  const [activeTab, setActiveTab] = useState("all")

  const userLibrary = {
    reading: [
      {
        bookId: "quantum-dreams",
        progress: 45,
        currentPage: 3,
        lastRead: "2 hours ago",
        isFavorite: true,
      },
      {
        bookId: "neon-nights",
        progress: 20,
        currentPage: 1,
        lastRead: "1 day ago",
        isFavorite: false,
      },
      {
        bookId: "whispers-in-the-void",
        progress: 60,
        currentPage: 1,
        lastRead: "3 hours ago",
        isFavorite: true,
      },
    ],
    favorites: ["quantum-dreams", "whispers-in-the-void", "echoes-of-eternity"],
    myCreations: [
      {
        id: "my-story-1",
        title: "Journey to Forgotten Stars",
        type: "book",
        genre: "Sci-Fi",
        progress: 65,
        wordCount: 32500,
        lastEdited: "3 hours ago",
        status: "draft",
        cover: "/sci-fi-space-book-cover.jpg",
      },
      {
        id: "my-story-2",
        title: "Shadows of the Past",
        type: "book",
        genre: "Misterio",
        progress: 40,
        wordCount: 18750,
        lastEdited: "1 day ago",
        status: "draft",
        cover: "/mystery-thriller-book-cover.png",
      },
      {
        id: "my-story-3",
        title: "Chronicles of Aetheria",
        type: "series",
        genre: "Fantasía",
        progress: 85,
        wordCount: 52000,
        lastEdited: "5 hours ago",
        status: "review",
        cover: "/fantasy-epic-book-cover.jpg",
      },
    ],
  }

  const readingBooks = userLibrary.reading
    .map((reading) => {
      const book = books.find((b) => b.id === reading.bookId)
      return book ? { ...book, ...reading, isFromPlatform: true } : null
    })
    .filter(Boolean)

  const favoriteBooks = books.filter((book) => userLibrary.favorites.includes(book.id))

  const allBooks = [
    ...books.map((book) => ({
      ...book,
      isFromPlatform: true,
      isFavorite: userLibrary.favorites.includes(book.id),
      readingData: userLibrary.reading.find((r) => r.bookId === book.id),
    })),
    ...userLibrary.myCreations,
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

  const BookCard = ({ item, showProgress = false }: { item: BookItem; showProgress?: boolean }) => {
    const isCreation = !item.isFromPlatform
    const progress = item.readingData?.progress || item.progress || 0
    const hasReadingData = item.readingData || (isCreation && (item.progress || 0) > 0)
    const shouldShowProgress = showProgress || hasReadingData

    return (
      <Card className="relative flex flex-col bg-gradient-to-b from-purple-950/30 to-black/50 border border-purple-800/20 backdrop-blur-sm hover:border-purple-600/50 rounded-lg overflow-hidden transition-all group hover:shadow-lg hover:shadow-purple-500/20">
        <CardContent className="flex flex-col p-0 h-full">
          <div className="relative h-52 w-full overflow-hidden rounded-t-lg">
            <img
              src={item.cover || "/placeholder.svg"}
              alt={item.title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-t-lg" />
            <div className="absolute top-3 right-3 flex gap-2">
              {item.isFavorite && (
                <div className="bg-red-500/90 backdrop-blur-sm rounded-full p-1.5 shadow-lg border border-red-400/30">
                  <Heart className="h-4 w-4 text-white fill-white" />
                </div>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="bg-black/60 hover:bg-black/80 backdrop-blur-sm border border-white/10">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.isFromPlatform ? (
                    <>
                      <Link href={`/book/${item.id}`}>
                        <DropdownMenuItem>
                          <BookOpen className="h-4 w-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuItem>
                        <Heart className="h-4 w-4 mr-2" />
                        {item.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {!item.isFromPlatform && item.status && (
              <Badge className={`absolute top-2 left-2 ${getStatusColor(item.status)}`}>{item.status}</Badge>
            )}
          </div>
          <div className="flex-1 p-5 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">{getTypeIcon(item.type || "book")}</span>
              <Badge variant="outline" className="border-purple-600/40 text-purple-300 text-xs px-2 py-1 bg-purple-500/10">
                {item.genre?.[0] || item.genre}
              </Badge>
            </div>
            <h3 className="font-bold text-foreground mb-2 line-clamp-2 text-lg leading-tight">{item.title}</h3>
            {item.author && <p className="text-sm text-muted-foreground mb-4">by {item.author}</p>}
            
            <div className="flex-1 space-y-3">
              {shouldShowProgress && (
                <>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span className="font-medium">
                      {item.isFromPlatform
                        ? `Page ${item.currentPage || 1}/${item.pages?.length || 1}`
                        : `${item.wordCount?.toLocaleString()} words`}
                    </span>
                    <span className="font-semibold text-purple-300">{progress}%</span>
                  </div>
                  <div className="w-full bg-purple-950/50 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{item.lastRead || item.lastEdited}</span>
                  </div>
                </>
              )}
              
              {item.isFromPlatform && (
                <div className="flex items-center gap-2 text-sm">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-foreground">{item.rating}</span>
                  <span className="text-xs text-muted-foreground">({item.totalRatings?.toLocaleString()})</span>
                </div>
              )}
            </div>
            <div className="mt-auto pt-4">
              {item.isFromPlatform ? (
                <Link href={item.readingData ? `/reader/${item.id}` : `/book/${item.id}`} className="block">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2.5 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-200">
                    <BookOpen className="w-4 h-4 mr-2" />
                    {item.readingData ? "Continue Reading" : "View Details"}
                  </Button>
                </Link>
              ) : (
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2.5 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-200">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-pink-950">
      <Navigation />

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">My Library</h1>
          <p className="text-muted-foreground">Manage your readings, favorites and creations</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-black/40 border border-purple-800/30 p-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-purple-600/30">
              <Library className="h-4 w-4 mr-2" />
              All
            </TabsTrigger>
            <TabsTrigger value="reading" className="data-[state=active]:bg-purple-600/30">
              <BookMarked className="h-4 w-4 mr-2" />
              Reading Now
            </TabsTrigger>
            <TabsTrigger value="favorites" className="data-[state=active]:bg-purple-600/30">
              <Heart className="h-4 w-4 mr-2" />
              Favorites
            </TabsTrigger>
            <TabsTrigger value="creations" className="data-[state=active]:bg-purple-600/30">
              <PenTool className="h-4 w-4 mr-2" />
              My Creations
            </TabsTrigger>
          </TabsList>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search in your library..."
                className="pl-10 bg-black/20 border-purple-600/30 text-foreground"
              />
            </div>
            <div className="flex gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32 bg-black/20 border-purple-600/30">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Recent</SelectItem>
                  <SelectItem value="title">Title</SelectItem>
                  <SelectItem value="progress">Progress</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
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

          <TabsContent value="reading" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Active Books</p>
                      <p className="text-2xl font-bold text-foreground">{readingBooks.length}</p>
                    </div>
                    <BookMarked className="h-8 w-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Average Progress</p>
                      <p className="text-2xl font-bold text-foreground">
                        {readingBooks.length > 0 
                          ? Math.round(readingBooks.reduce((acc, b) => acc + (b?.progress || 0), 0) / readingBooks.length)
                          : 0}%
                      </p>
                    </div>
                    <Clock className="h-8 w-8 text-cyan-400" />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {readingBooks.map((book) => book && (
                <BookCard key={book.id} item={book} showProgress={true} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="favorites" className="space-y-6">
            <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm mb-6">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Favorites</p>
                    <p className="text-2xl font-bold text-foreground">{favoriteBooks.length}</p>
                  </div>
                  <Heart className="h-8 w-8 text-red-400 fill-red-400" />
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favoriteBooks.map((book) => (
                <BookCard key={book.id} item={{ ...book, isFromPlatform: true, isFavorite: true }} showProgress={false} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="creations" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Projects</p>
                      <p className="text-2xl font-bold text-foreground">{userLibrary.myCreations.length}</p>
                    </div>
                    <PenTool className="h-8 w-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Words</p>
                      <p className="text-2xl font-bold text-foreground">
                        {Math.round(userLibrary.myCreations.reduce((acc, c) => acc + c.wordCount, 0) / 1000)}K
                      </p>
                    </div>
                    <Edit3 className="h-8 w-8 text-pink-400" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">In Review</p>
                      <p className="text-2xl font-bold text-foreground">
                        {userLibrary.myCreations.filter((c) => c.status === "review").length}
                      </p>
                    </div>
                    <Star className="h-8 w-8 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Average Progress</p>
                      <p className="text-2xl font-bold text-foreground">
                        {Math.round(
                          userLibrary.myCreations.reduce((acc, c) => acc + c.progress, 0) /
                            userLibrary.myCreations.length,
                        )}
                        %
                      </p>
                    </div>
                    <Clock className="h-8 w-8 text-cyan-400" />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {userLibrary.myCreations.map((creation) => (
                <BookCard key={creation.id} item={creation} showProgress={true} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Items</p>
                      <p className="text-2xl font-bold text-foreground">{allBooks.length}</p>
                    </div>
                    <Library className="h-8 w-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Reading</p>
                      <p className="text-2xl font-bold text-foreground">{readingBooks.length}</p>
                    </div>
                    <BookMarked className="h-8 w-8 text-cyan-400" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Favorites</p>
                      <p className="text-2xl font-bold text-foreground">{favoriteBooks.length}</p>
                    </div>
                    <Heart className="h-8 w-8 text-red-400 fill-red-400" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">My Creations</p>
                      <p className="text-2xl font-bold text-foreground">{userLibrary.myCreations.length}</p>
                    </div>
                    <PenTool className="h-8 w-8 text-pink-400" />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allBooks.map((item) => (
                <BookCard 
                  key={item.id} 
                  item={item} 
                  showProgress={false} 
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}