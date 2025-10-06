export interface Book {
  id: string
  title: string
  author: string
  description: string
  genre: string[]
  type: 'book' | 'series' | 'movie' | 'show'
  status: 'draft' | 'published' | 'review' | 'archived'
  cover: string
  publishedDate: Date
  rating: number
  totalRatings: number
  views: number
  likes: number
  pages: BookPage[]
  tags: string[]
  comments: Comment[]
}

export interface BookPage {
  chapter?: string
  content: string
}

export interface Comment {
  id: string
  userId: string
  userName: string
  userAvatar: string
  content: string
  timestamp: Date
  likes: number
}

export interface BookFilter {
  genre?: string
  type?: string
  status?: string
  search?: string
  sortBy?: 'recent' | 'popular' | 'rating' | 'title'
  sortOrder?: 'asc' | 'desc'
}

export interface BookStats {
  totalBooks: number
  publishedBooks: number
  totalWords: number
  averageProgress: number
  totalViews: number
  totalLikes: number
}
