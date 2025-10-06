"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Users, Plus, Sparkles, Edit3, Library, User, Settings, LogOut, Menu, X, Search, Compass } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const searchRef = useRef<HTMLDivElement>(null)

  const navItems = [
    { href: "/home", label: "Home", icon: Sparkles },
    { href: "/explore", label: "Explorar", icon: Compass },
    { href: "/create", label: "Create", icon: Edit3 },
    { href: "/library", label: "Library", icon: Library },
    { href: "/community", label: "Community", icon: Users },
  ]

  const isActive = (href: string) => {
    if (href === "/home") return pathname === "/home"
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const handleSearch = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault()
    }
    if (searchQuery.trim()) {
      try {
        router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
        setSearchOpen(false)
        setSearchQuery("")
      } catch (error) {
        console.error('Error navigating to search:', error)
      }
    }
  }

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false)
      }
    }

    if (searchOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [searchOpen])

  return (
    <header className="border-b border-purple-800/30 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Narratica</h1>
              <p className="text-sm text-muted-foreground">Create. Imagine. Inspire.</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive(item.href) ? "default" : "ghost"}
                    className={`${
                      isActive(item.href)
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                        : "text-foreground hover:bg-purple-800/20"
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                </Link>
              )
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Search Button */}
            <Button
              variant="ghost"
              className="hidden sm:flex items-center gap-2 hover:bg-purple-800/20"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="w-4 h-4" />
              <span className="hidden lg:inline">Search</span>
            </Button>

            {/* Create Button */}
            <Link href="/create" className="hidden sm:block">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Create
              </Button>
            </Link>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full hover:bg-purple-800/20">
                  <Avatar className="h-10 w-10 border-2 border-purple-600/30">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback className="bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                      LS
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-black/90 border-purple-800/30 backdrop-blur-sm" align="end">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium text-foreground">Luna Starweaver</p>
                    <p className="w-[200px] truncate text-sm text-muted-foreground">luna@example.com</p>
                  </div>
                </div>
                <DropdownMenuSeparator className="bg-purple-800/30" />
                <Link href="/profile">
                  <DropdownMenuItem className="hover:bg-purple-800/20 cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                </Link>
                <Link href="/library">
                  <DropdownMenuItem className="hover:bg-purple-800/20 cursor-pointer">
                    <Library className="mr-2 h-4 w-4" />
                    <span>My Library</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem className="hover:bg-purple-800/20 cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-purple-800/30" />
                <DropdownMenuItem 
                  className="hover:bg-red-800/20 cursor-pointer text-red-400"
                  onClick={() => {
                    // Limpiar datos de sesión (localStorage, sessionStorage, etc.)
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');
                    sessionStorage.clear();
                    
                    // Redirigir a la landing page
                    router.push('/');
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden hover:bg-purple-800/20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-purple-800/30">
            <nav className="flex flex-col gap-2 mt-4">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant={isActive(item.href) ? "default" : "ghost"}
                      className={`w-full justify-start ${
                        isActive(item.href)
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                          : "text-foreground hover:bg-purple-800/20"
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {item.label}
                    </Button>
                  </Link>
                )
              })}
              <Link href="/create" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full justify-start bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 mt-2 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Project
                </Button>
              </Link>
            </nav>
          </div>
        )}

        {/* Search Dropdown */}
        {searchOpen && (
          <div ref={searchRef} className="absolute top-full right-0 mt-2 w-80 sm:w-96 bg-black/95 backdrop-blur-sm border border-purple-800/30 rounded-lg shadow-xl z-50">
            <div className="p-4">
              <form onSubmit={handleSearch} className="space-y-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Buscar libros, historias, autores..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-purple-800/30 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                    autoFocus
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    <Search className="w-4 h-4 mr-2" />
                    Buscar
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setSearchOpen(false)}
                    className="text-muted-foreground hover:text-foreground px-3"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </form>
              
              {/* Quick Search Suggestions */}
              <div className="mt-4 pt-3 border-t border-purple-800/30">
                <p className="text-sm text-muted-foreground mb-2">Búsquedas populares:</p>
                <div className="flex flex-wrap gap-2">
                  {['Fantasía', 'Ciencia Ficción', 'Romance', 'Misterio', 'Aventura'].map((term) => (
                    <button
                      key={term}
                      onClick={() => {
                        setSearchQuery(term)
                        // Usar setTimeout para evitar problemas de estado
                        setTimeout(() => {
                          handleSearch()
                        }, 100)
                      }}
                      className="px-3 py-1 text-xs bg-purple-800/30 text-purple-200 rounded-full hover:bg-purple-700/30 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
