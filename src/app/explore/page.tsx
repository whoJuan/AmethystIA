"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Star, Eye, Heart, TrendingUp, Clock, BookOpen } from "lucide-react"
import { books } from "@/lib/sample-books"


export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGenre, setSelectedGenre] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("popular")

  // Extraer todos los géneros únicos
  const allGenres = useMemo(() => {
    const genres = new Set<string>()
    books.forEach((book) => book.genre.forEach((g) => genres.add(g)))
    return Array.from(genres).sort()
  }, [])

  // Filtrar y ordenar libros
  const filteredBooks = useMemo(() => {
    const filtered = books.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesGenre = selectedGenre === "all" || book.genre.includes(selectedGenre)

      return matchesSearch && matchesGenre
    })

    // Ordenar
    switch (sortBy) {
      case "popular":
        filtered.sort((a, b) => b.views - a.views)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "recent":
        filtered.sort((a, b) => b.publishedDate.getTime() - a.publishedDate.getTime())
        break
      case "likes":
        filtered.sort((a, b) => b.likes - a.likes)
        break
    }

    return filtered
  }, [searchQuery, selectedGenre, sortBy])

  // Libros recomendados (los mejor valorados)
  const recommendedBooks = useMemo(() => {
    return [...books].sort((a, b) => b.rating - a.rating).slice(0, 3)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-pink-950">
      <Navigation />

      <main className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Explorar Libros
          </h1>
          <p className="text-xl text-purple-200">Descubre historias increíbles creadas por la comunidad</p>
        </div>

        {/* Recomendaciones */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            <h2 className="text-2xl font-bold">Recomendados para ti</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedBooks.map((book) => (
              <Card
                key={book.id}
                className="bg-black/40 border-purple-800/30 backdrop-blur-sm hover:border-purple-600/50 transition-all overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={book.cover || "/placeholder.svg"}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    {book.rating}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1 line-clamp-1">{book.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">por {book.author}</p>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{book.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {book.views.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {book.likes.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/reader/${book.id}`} className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Read
                      </Button>
                    </Link>
                    <Link href={`/book/${book.id}`} className="flex-1">
                      <Button variant="outline" className="w-full border-purple-600/50 hover:bg-purple-600/20 bg-transparent">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Búsqueda y Filtros */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Barra de búsqueda */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar por título, autor, etiquetas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-black/20 border-purple-600/30 text-foreground focus:border-purple-500"
              />
            </div>

            {/* Filtro por género */}
            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger className="w-full md:w-[200px] bg-black/20 border-purple-600/30 text-foreground">
                <SelectValue placeholder="Género" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-purple-800/30 backdrop-blur-sm">
                <SelectItem value="all">Todos los géneros</SelectItem>
                {allGenres.map((genre) => (
                  <SelectItem key={genre} value={genre}>
                    {genre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Ordenar por */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[200px] bg-black/20 border-purple-600/30 text-foreground">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent className="bg-black/90 border-purple-800/30 backdrop-blur-sm">
                <SelectItem value="popular">Más Popular</SelectItem>
                <SelectItem value="rating">Mejor Valorado</SelectItem>
                <SelectItem value="recent">Más Reciente</SelectItem>
                <SelectItem value="likes">Más Likes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Resultados */}
        <div className="mb-4">
          <p className="text-muted-foreground">
            {filteredBooks.length} {filteredBooks.length === 1 ? "found book" : "books found"}
          </p>
        </div>

        {/* Grid de libros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <Card
              key={book.id}
              className="bg-black/40 border-purple-800/30 backdrop-blur-sm hover:border-purple-600/50 transition-all overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={book.cover || "/placeholder.svg"}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2 right-2 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  {book.rating}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-1 line-clamp-1">{book.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">by {book.author}</p>

                {/* Géneros */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {book.genre.slice(0, 2).map((genre: string) => (
                    <Badge key={genre} variant="secondary" className="text-xs bg-purple-800/30 text-purple-300">
                      {genre}
                    </Badge>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{book.description}</p>

                {/* Estadísticas */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {book.views.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    {book.likes.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {book.totalRatings}
                  </span>
                </div>

                <div className="flex gap-2">
                  <Link href={`/reader/${book.id}`} className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read
                    </Button>
                  </Link>
                  <Link href={`/book/${book.id}`} className="flex-1">
                    <Button variant="outline" className="w-full border-purple-600/50 hover:bg-purple-600/20 bg-transparent">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sin resultados */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-2">No books found</p>
            <p className="text-muted-foreground text-sm">Try with other search terms or filters</p>
          </div>
        )}
      </main>
    </div>
  )
}