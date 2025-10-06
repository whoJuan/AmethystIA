"use client"

import { useState, useEffect, use } from "react"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Minimize2,
  BookOpen,
  Heart,
  MessageCircle,
  Flag,
  Share2,
  Star,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

import { BookComments } from "@/components/book-comments"
import { Badge } from "@/components/ui/badge"

import { books } from "@/lib/sample-books"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function ReaderPage({ params }: { params: Promise<{ bookId: string }> }) {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [fontSize, setFontSize] = useState(18)
  const [showControls, setShowControls] = useState(true)
  const [showComments, setShowComments] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [showReportDialog, setShowReportDialog] = useState(false)
  const [localLikes, setLocalLikes] = useState(0)

  const resolvedParams = use(params)
  const book = books.find((b: any) => b.id === resolvedParams.bookId)

  useEffect(() => {
    if (book) {
      setLocalLikes(book.likes)
    }
  }, [book])

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (showControls) {
      timeout = setTimeout(() => setShowControls(false), 3000)
    }
    return () => clearTimeout(timeout)
  }, [showControls, currentPage])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        nextPage()
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        previousPage()
      } else if (e.key === "Escape" && isFullscreen) {
        toggleFullscreen()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [currentPage, isFullscreen])

  if (!book) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Libro no encontrado</h1>
          <Button onClick={() => router.push("/")}>Volver al inicio</Button>
        </div>
      </div>
    )
  }

  const nextPage = () => {
    if (currentPage < book.pages.length - 1) {
      setCurrentPage(currentPage + 1)
      setShowControls(true)
    }
  }

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
      setShowControls(true)
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLocalLikes(isLiked ? localLikes - 1 : localLikes + 1)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: book.title,
          text: `Lee "${book.title}" por ${book.author}`,
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error al compartir:", err)
      }
    }
  }

  const handleReport = () => {
    setShowReportDialog(true)
  }

  const submitReport = () => {
    // Aquí iría la lógica para enviar el reporte
    setShowReportDialog(false)
    alert("Gracias por tu reporte. Lo revisaremos pronto.")
  }

  const progress = ((currentPage + 1) / book.pages.length) * 100

  return (
    <>
      <div
        className={cn(
          "min-h-screen bg-gradient-to-br from-background via-card to-background transition-all duration-300",
          isFullscreen && "fixed inset-0 z-50",
        )}
        onMouseMove={() => setShowControls(true)}
      >
        {/* Header Controls */}
        <div
          className={cn(
            "fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/95 to-transparent backdrop-blur-sm transition-all duration-300",
            !showControls && "opacity-0 pointer-events-none",
          )}
        >
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => router.push("/library")}>
                <X className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="font-bold text-lg">{book.title}</h1>
                <p className="text-sm text-muted-foreground">{book.author}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLike}
                className={cn(isLiked && "text-pink-500")}
                title="Like"
              >
                <Heart className={cn("w-5 h-5", isLiked && "fill-current")} />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setShowComments(!showComments)} title="Comments">
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleShare} title="Share">
                <Share2 className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleReport} title="Report">
                <Flag className="w-5 h-5" />
              </Button>
              <div className="w-px h-6 bg-border mx-2" />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setFontSize(Math.max(14, fontSize - 2))}
                title="Decrease size"
              >
                <span className="text-lg">A-</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                title="Increase size"
              >
                <span className="text-lg">A+</span>
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleFullscreen}>
                {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-muted">
            <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Reader Content - Horizontal Scroll */}
        <div className="h-screen overflow-hidden">
          <div
            className="h-full flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {book.pages.map((page: any, index: number) => (
              <div key={index} className="min-w-full h-full flex items-center justify-center px-4 md:px-8 lg:px-16">
                <div className="max-w-4xl w-full h-full flex flex-col justify-center py-20">
                  <div className="prose prose-invert max-w-none leading-relaxed" style={{ fontSize: `${fontSize}px` }}>
                    {page.chapter && (
                      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">{page.chapter}</h2>
                    )}
                    <div className="whitespace-pre-wrap text-foreground/90">{page.content}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div
          className={cn(
            "fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-background/95 to-transparent backdrop-blur-sm transition-all duration-300",
            !showControls && "opacity-0 pointer-events-none",
          )}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              <Button variant="ghost" size="lg" onClick={previousPage} disabled={currentPage === 0} className="gap-2">
                <ChevronLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Anterior</span>
              </Button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Página {currentPage + 1} de {book.pages.length}
                </p>
              </div>

              <Button
                variant="ghost"
                size="lg"
                onClick={nextPage}
                disabled={currentPage === book.pages.length - 1}
                className="gap-2"
              >
                <span className="hidden sm:inline">Siguiente</span>
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Touch/Click Areas for Navigation */}
        <div className="fixed inset-0 flex pointer-events-none z-40">
          <button
            className="w-1/3 h-full pointer-events-auto cursor-w-resize"
            onClick={previousPage}
            disabled={currentPage === 0}
            aria-label="Página anterior"
          />
          <div className="w-1/3 h-full" />
          <button
            className="w-1/3 h-full pointer-events-auto cursor-e-resize"
            onClick={nextPage}
            disabled={currentPage === book.pages.length - 1}
            aria-label="Página siguiente"
          />
        </div>
      </div>

      <div
        className={cn(
          "fixed top-0 right-0 h-screen w-full md:w-[500px] bg-background/95 backdrop-blur-sm border-l border-purple-800/30 z-[60] transition-transform duration-300 overflow-y-auto",
          showComments ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">About this book</h2>
            <Button variant="ghost" size="icon" onClick={() => setShowComments(false)}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Información del libro */}
          <div className="mb-6 space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-1">{book.title}</h3>
              <p className="text-muted-foreground">by {book.author}</p>
            </div>

            <p className="text-sm leading-relaxed">{book.description}</p>

            {/* Géneros */}
            <div className="flex flex-wrap gap-2">
              {book.genre.map((genre: string) => (
                <Badge key={genre} variant="secondary" className="bg-purple-800/30 text-purple-300">
                  {genre}
                </Badge>
              ))}
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-card/50 rounded-lg border border-purple-800/30">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="text-2xl font-bold">{book.rating}</span>
                </div>
                <p className="text-xs text-muted-foreground">{book.totalRatings} ratings</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-pink-500 mb-1">
                  <Heart className="w-5 h-5 fill-current" />
                  <span className="text-2xl font-bold">{localLikes.toLocaleString()}</span>
                </div>
                <p className="text-xs text-muted-foreground">likes</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag: string) => (
                <Badge key={tag} variant="outline" className="border-purple-600/50 text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Comentarios */}
          <BookComments
            comments={book.comments}
            onAddComment={(content) => console.log("Nuevo comentario:", content)}
            onLikeComment={(id: string) => console.log("Like comentario:", id)}
            onReportComment={(id: string) => console.log("Reportar comentario:", id)}
          />
        </div>
      </div>

      <Dialog open={showReportDialog} onOpenChange={setShowReportDialog}>
        <DialogContent className="bg-card border-purple-800/30">
          <DialogHeader>
            <DialogTitle>Report content</DialogTitle>
            <DialogDescription>
              Why are you reporting this book? Your report will be reviewed by our team.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start border-purple-600/50 hover:bg-purple-600/20 bg-transparent"
              onClick={submitReport}
            >
              Inappropriate content
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start border-purple-600/50 hover:bg-purple-600/20 bg-transparent"
              onClick={submitReport}
            >
              Spam or misleading
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start border-purple-600/50 hover:bg-purple-600/20 bg-transparent"
              onClick={submitReport}
            >
              Violation of copyright
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start border-purple-600/50 hover:bg-purple-600/20 bg-transparent"
              onClick={submitReport}
            >
              Other reason
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
