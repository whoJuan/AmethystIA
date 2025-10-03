"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
// Avatar components removed as they're not used
import { Search, BookOpen, User, Calendar, Star, Eye, Heart, MessageCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"

// Tipos para los datos de búsqueda
interface BookItem {
  id: number
  title: string
  author: string
  description: string
  cover: string
  genre: string
  publishedDate: string
  rating: number
  views: number
  likes: number
  comments: number
  status: string
}

interface SearchResults {
  books: BookItem[]
  stories: BookItem[]
}

// Datos de ejemplo para la búsqueda
const mockBooks = [
  {
    id: 1,
    title: "La Guerra de los Mundos",
    author: "H.G. Wells",
    description: "Una novela de ciencia ficción que narra la invasión de la Tierra por marcianos.",
    cover: "/placeholder.svg?height=200&width=150",
    genre: "Ciencia Ficción",
    publishedDate: "1898",
    rating: 4.5,
    views: 12500,
    likes: 890,
    comments: 156,
    status: "Completado"
  },
  {
    id: 2,
    title: "El Señor de los Anillos",
    author: "J.R.R. Tolkien",
    description: "Una épica aventura en la Tierra Media donde un hobbit debe destruir el Anillo Único.",
    cover: "/placeholder.svg?height=200&width=150",
    genre: "Fantasía",
    publishedDate: "1954",
    rating: 4.9,
    views: 45000,
    likes: 3200,
    comments: 890,
    status: "Completado"
  },
  {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
    description: "Una saga épica de ciencia ficción ambientada en el planeta desértico Arrakis.",
    cover: "/placeholder.svg?height=200&width=150",
    genre: "Ciencia Ficción",
    publishedDate: "1965",
    rating: 4.7,
    views: 32000,
    likes: 2100,
    comments: 445,
    status: "Completado"
  },
  {
    id: 4,
    title: "Cien Años de Soledad",
    author: "Gabriel García Márquez",
    description: "La historia de la familia Buendía a lo largo de siete generaciones en Macondo.",
    cover: "/placeholder.svg?height=200&width=150",
    genre: "Realismo Mágico",
    publishedDate: "1967",
    rating: 4.8,
    views: 28000,
    likes: 1900,
    comments: 567,
    status: "Completado"
  },
  {
    id: 5,
    title: "1984",
    author: "George Orwell",
    description: "Una distopía que describe una sociedad totalitaria bajo vigilancia constante.",
    cover: "/placeholder.svg?height=200&width=150",
    genre: "Distopía",
    publishedDate: "1949",
    rating: 4.6,
    views: 38000,
    likes: 2500,
    comments: 678,
    status: "Completado"
  }
]

const mockStories = [
  {
    id: 1,
    title: "La Última Estrella",
    author: "María González",
    description: "Una historia de amor y aventura en el espacio profundo.",
    cover: "/placeholder.svg?height=200&width=150",
    genre: "Romance Espacial",
    publishedDate: "2024",
    rating: 4.3,
    views: 8500,
    likes: 420,
    comments: 89,
    status: "En Progreso"
  },
  {
    id: 2,
    title: "El Mago de la Ciudad",
    author: "Carlos Ruiz",
    description: "Un mago moderno debe salvar su ciudad de una amenaza sobrenatural.",
    cover: "/placeholder.svg?height=200&width=150",
    genre: "Fantasía Urbana",
    publishedDate: "2024",
    rating: 4.1,
    views: 12000,
    likes: 680,
    comments: 134,
    status: "Completado"
  }
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [searchResults, setSearchResults] = useState<SearchResults>({ books: [], stories: [] })
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<'all' | 'books' | 'stories'>('all')

  useEffect(() => {
    if (query) {
      performSearch(query)
    }
  }, [query])

  const performSearch = async (searchQuery: string) => {
    setLoading(true)
    
    // Simular búsqueda con delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const filteredBooks = mockBooks.filter(book => 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchQuery.toLowerCase())
    )
    
    const filteredStories = mockStories.filter(story => 
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.genre.toLowerCase().includes(searchQuery.toLowerCase())
    )
    
    setSearchResults({
      books: filteredBooks,
      stories: filteredStories
    })
    setLoading(false)
  }

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US')
  }

  const renderBookCard = (item: BookItem) => (
    <Card key={item.id} className="bg-white/5 border-purple-800/30 hover:bg-white/10 transition-colors">
      <CardHeader className="pb-3">
        <div className="flex gap-4">
          <Image
            src={item.cover}
            alt={item.title}
            width={80}
            height={112}
            className="w-20 h-28 object-cover rounded-lg border border-purple-800/30"
          />
          <div className="flex-1">
            <CardTitle className="text-lg text-foreground mb-2">{item.title}</CardTitle>
            <div className="flex items-center gap-2 mb-2">
              <User className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{item.author}</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{item.publishedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>{item.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-muted-foreground mb-3">
          {item.description}
        </CardDescription>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Badge variant="secondary" className="bg-purple-800/30 text-purple-200">
              {item.genre}
            </Badge>
            <Badge variant={item.status === 'Completado' ? 'default' : 'secondary'}>
              {item.status}
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{formatNumber(item.views)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>{formatNumber(item.likes)}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              <span>{formatNumber(item.comments)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-pink-950">
      <Navigation />
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl font-bold text-foreground">Resultados de Búsqueda</h1>
          </div>
          {query && (
            <p className="text-muted-foreground">
              Mostrando resultados para: <span className="text-purple-400 font-semibold">&quot;{query}&quot;</span>
            </p>
          )}
        </div>


        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={activeTab === 'all' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('all')}
            className={activeTab === 'all' ? 'bg-gradient-to-r from-purple-600 to-pink-600' : ''}
          >
            Todos ({searchResults.books.length + searchResults.stories.length})
          </Button>
          <Button
            variant={activeTab === 'books' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('books')}
            className={activeTab === 'books' ? 'bg-gradient-to-r from-purple-600 to-pink-600' : ''}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Libros ({searchResults.books.length})
          </Button>
          <Button
            variant={activeTab === 'stories' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('stories')}
            className={activeTab === 'stories' ? 'bg-gradient-to-r from-purple-600 to-pink-600' : ''}
          >
            Historias ({searchResults.stories.length})
          </Button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400"></div>
            <span className="ml-3 text-muted-foreground">Buscando...</span>
          </div>
        )}

        {/* Results */}
        {!loading && (
          <div className="space-y-6">
            {/* Books Section */}
            {(activeTab === 'all' || activeTab === 'books') && searchResults.books.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Libros ({searchResults.books.length})
                </h2>
                <div className="grid gap-4">
                  {searchResults.books.map(renderBookCard)}
                </div>
              </div>
            )}

            {/* Stories Section */}
            {(activeTab === 'all' || activeTab === 'stories') && searchResults.stories.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Historias de la Comunidad ({searchResults.stories.length})
                </h2>
                <div className="grid gap-4">
                  {searchResults.stories.map(renderBookCard)}
                </div>
              </div>
            )}

            {/* No Results */}
            {searchResults.books.length === 0 && searchResults.stories.length === 0 && !loading && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No se encontraron resultados</h3>
                <p className="text-muted-foreground mb-6">
                  Intenta con diferentes palabras clave o explora nuestras categorías
                </p>
                <Link href="/library">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Explorar Biblioteca
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
