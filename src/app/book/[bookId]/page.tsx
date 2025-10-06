"use client"

import { useState, use } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BookComments } from "@/components/book-comments"
import { Star, Eye, Heart, Share2, Flag, BookOpen, Calendar, User, ArrowLeft, TrendingUp } from "lucide-react"
import { books } from "@/lib/sample-books"
import { formatDistanceToNow } from "date-fns"
import { enUS } from "date-fns/locale"

export default function BookDetailPage({ params }: { params: Promise<{ bookId: string }> }) {
  const router = useRouter()
  const [isLiked, setIsLiked] = useState(false)
  const [isReported, setIsReported] = useState(false)

  const resolvedParams = use(params)
  const book = books.find((b) => b.id === resolvedParams.bookId)

  if (!book) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Book not found</h1>
          <Link href="/explore">
            <Button>Back to Explore</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: book.title,
        text: book.description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard")
    }
  }

  const handleReport = () => {
    setIsReported(true)
    alert("Thank you for your report. We will review it soon.")
  }

  // Libros relacionados (mismo género)
  const relatedBooks = books.filter((b) => b.id !== book.id && b.genre.some((g) => book.genre.includes(g))).slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-pink-950">
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 py-8">
        {/* Botón de regreso */}
        <Button variant="ghost" onClick={() => router.back()} className="mb-6 hover:bg-purple-800/20 z-20 relative">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Columna izquierda - Portada y acciones */}
          <div className="lg:col-span-1">
            <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm overflow-hidden sticky top-8 z-10 max-h-[calc(100vh-2rem)]">
              <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
                <img src={book.cover || "/placeholder.svg"} alt={book.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1.5 rounded-full font-bold flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  {book.rating}
                </div>
              </div>

              <CardContent className="p-6 space-y-6">
                {/* Botón principal de lectura */}
                <Link href={`/reader/${book.id}`} className="block">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-[1.02]">
                    <BookOpen className="w-5 h-5 mr-3" />
                    Start Reading
                  </Button>
                </Link>

                {/* Acciones secundarias */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleLike}
                    className={`flex-1 h-12 rounded-xl border-2 transition-all duration-200 ${
                      isLiked 
                        ? "border-pink-500 bg-pink-500/20 text-pink-500 hover:bg-pink-500/30" 
                        : "border-purple-600/50 bg-transparent text-muted-foreground hover:bg-purple-600/20 hover:border-purple-500 hover:text-purple-300"
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleShare}
                    className="flex-1 h-12 rounded-xl border-2 border-purple-600/50 bg-transparent text-muted-foreground hover:bg-purple-600/20 hover:border-purple-500 hover:text-purple-300 transition-all duration-200"
                  >
                    <Share2 className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleReport}
                    disabled={isReported}
                    className={`flex-1 h-12 rounded-xl border-2 transition-all duration-200 ${
                      isReported 
                        ? "border-red-500/50 bg-red-500/20 text-red-500" 
                        : "border-purple-600/50 bg-transparent text-muted-foreground hover:bg-purple-600/20 hover:border-purple-500 hover:text-purple-300"
                    }`}
                  >
                    <Flag className="w-5 h-5" />
                  </Button>
                </div>

                <Separator className="bg-purple-800/30" />

                {/* Estadísticas */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-purple-900/20 border border-purple-800/30">
                    <span className="text-muted-foreground flex items-center gap-3">
                      <Eye className="w-5 h-5 text-cyan-400" />
                      <span className="font-medium">Views</span>
                    </span>
                    <span className="font-bold text-lg text-foreground">{book.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-purple-900/20 border border-purple-800/30">
                    <span className="text-muted-foreground flex items-center gap-3">
                      <Heart className="w-5 h-5 text-pink-400" />
                      <span className="font-medium">Likes</span>
                    </span>
                    <span className="font-bold text-lg text-foreground">{(book.likes + (isLiked ? 1 : 0)).toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-purple-900/20 border border-purple-800/30">
                    <span className="text-muted-foreground flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="font-medium">Ratings</span>
                    </span>
                    <span className="font-bold text-lg text-foreground">{book.totalRatings.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-purple-900/20 border border-purple-800/30">
                    <span className="text-muted-foreground flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-green-400" />
                      <span className="font-medium">Published</span>
                    </span>
                    <span className="font-bold text-lg text-foreground">
                      {formatDistanceToNow(book.publishedDate, {
                        addSuffix: true,
                        locale: enUS,
                      })}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Columna derecha - Información y comentarios */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            {/* Información del libro */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                {book.title}
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <User className="w-4 h-4" />
                <span className="text-lg">by {book.author}</span>
              </div>

              {/* Géneros */}
              <div className="flex flex-wrap gap-2 mb-6">
                {book.genre.map((genre) => (
                  <Badge
                    key={genre}
                    variant="secondary"
                    className="bg-purple-800/30 text-purple-300 hover:bg-purple-800/50"
                  >
                    {genre}
                  </Badge>
                ))}
              </div>

              {/* Descripción */}
              <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm relative z-0">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-3">Synopsis</h2>
                  <p className="text-muted-foreground leading-relaxed">{book.description}</p>
                </CardContent>
              </Card>
            </div>

            {/* Etiquetas */}
            <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm relative z-0">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-3">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {book.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-purple-600/50 text-purple-300 hover:bg-purple-800/20"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Información adicional */}
            <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm relative z-0">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-3">Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Chapters:</span>
                    <span className="ml-2 font-semibold">{book.pages.filter((p) => p.chapter).length}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Total pages:</span>
                    <span className="ml-2 font-semibold">{book.pages.length}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Language:</span>
                    <span className="ml-2 font-semibold">English</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Status:</span>
                    <span className="ml-2 font-semibold text-green-400">Complete</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comentarios */}
            <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm relative z-0">
              <CardContent className="p-6">
                <BookComments
                  comments={book.comments}
                  onAddComment={(content) => console.log("[v0] Nuevo comentario:", content)}
                  onLikeComment={(id) => console.log("[v0] Like en comentario:", id)}
                  onReportComment={(id) => console.log("[v0] Reportar comentario:", id)}
                />
              </CardContent>
            </Card>

            {/* Libros relacionados */}
            {relatedBooks.length > 0 && (
              <div className="relative z-0">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <h2 className="text-2xl font-bold">Related Books</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedBooks.map((relatedBook) => (
                    <Link key={relatedBook.id} href={`/book/${relatedBook.id}`}>
                      <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm hover:border-purple-600/50 transition-all overflow-hidden group cursor-pointer">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={relatedBook.cover || "/placeholder.svg"}
                            alt={relatedBook.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-bold line-clamp-1">{relatedBook.title}</h3>
                          <p className="text-sm text-muted-foreground">por {relatedBook.author}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
