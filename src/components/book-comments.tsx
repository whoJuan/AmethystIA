"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Heart, Flag, Reply, MoreHorizontal, Send } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { enUS } from "date-fns/locale"
import { Comment } from "@/lib/types/book"

interface BookCommentsProps {
  comments: Comment[]
  onAddComment: (content: string) => void
  onLikeComment: (commentId: string) => void
  onReportComment: (commentId: string) => void
}

export function BookComments({
  comments,
  onAddComment,
  onLikeComment,
  onReportComment,
}: BookCommentsProps) {
  const [newComment, setNewComment] = useState("")
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [likedComments, setLikedComments] = useState<Set<string>>(new Set())
  const [reportedComments, setReportedComments] = useState<Set<string>>(new Set())

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      onAddComment(newComment.trim())
      setNewComment("")
      setReplyingTo(null)
    }
  }

  const handleLike = (commentId: string) => {
    setLikedComments(prev => {
      const newSet = new Set(prev)
      if (newSet.has(commentId)) {
        newSet.delete(commentId)
      } else {
        newSet.add(commentId)
      }
      return newSet
    })
    onLikeComment(commentId)
  }

  const handleReport = (commentId: string) => {
    setReportedComments(prev => new Set(prev).add(commentId))
    onReportComment(commentId)
  }

  const handleReply = (commentId: string) => {
    setReplyingTo(replyingTo === commentId ? null : commentId)
  }

  return (
    <div className="space-y-6">
      {/* Formulario de nuevo comentario */}
      <Card className="bg-card/50 border-purple-800/30 relative z-0">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Please leave your comment</h3>
          <form onSubmit={handleSubmitComment} className="space-y-4">
            <Textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts on this book..."
              className="min-h-[100px] bg-black/20 border-purple-600/30 text-foreground resize-none"
            />
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={!newComment.trim()}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Send className="w-4 h-4 mr-2" />
                Publish
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Lista de comentarios */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            Comments ({comments.length})
          </h3>
          <Badge variant="outline" className="border-purple-600/30 text-purple-300">
            Sort by recent
          </Badge>
        </div>

        {comments.length === 0 ? (
          <Card className="bg-card/50 border-purple-800/30 relative z-0">
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground">
                There are no comments yet. Be the first to comment!
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {comments.map((comment) => (
              <Card
                key={comment.id}
                className="bg-card/50 border-purple-800/30 hover:border-purple-600/50 transition-colors relative z-0"
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10 border-2 border-purple-600/30">
                      <AvatarImage src={comment.userAvatar} />
                      <AvatarFallback className="bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                        {comment.userName.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">
                          {comment.userName}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {formatDistanceToNow(comment.timestamp, {
                            addSuffix: true,
                            locale: enUS,
                          })}
                        </span>
                        {reportedComments.has(comment.id) && (
                          <Badge variant="destructive" className="text-xs">
                            Reported
                          </Badge>
                        )}
                      </div>

                      <p className="text-foreground leading-relaxed">
                        {comment.content}
                      </p>

                      <div className="flex items-center gap-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleLike(comment.id)}
                          className={`hover:bg-purple-800/20 ${
                            likedComments.has(comment.id)
                              ? "text-pink-500"
                              : "text-muted-foreground"
                          }`}
                        >
                          <Heart
                            className={`w-4 h-4 mr-1 ${
                              likedComments.has(comment.id) ? "fill-current" : ""
                            }`}
                          />
                          {comment.likes + (likedComments.has(comment.id) ? 1 : 0)}
                        </Button>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleReply(comment.id)}
                          className="text-muted-foreground hover:bg-purple-800/20"
                        >
                          <Reply className="w-4 h-4 mr-1" />
                          Reply
                        </Button>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleReport(comment.id)}
                          disabled={reportedComments.has(comment.id)}
                          className="text-muted-foreground hover:bg-red-800/20 disabled:opacity-50"
                        >
                          <Flag className="w-4 h-4 mr-1" />
                          {reportedComments.has(comment.id) ? "Reported" : "Report"}
                        </Button>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-muted-foreground hover:bg-purple-800/20"
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Respuesta a comentario */}
                      {replyingTo === comment.id && (
                        <div className="mt-4 pl-4 border-l-2 border-purple-600/30">
                          <form
                            onSubmit={(e) => {
                              e.preventDefault()
                              const replyContent = (e.target as HTMLFormElement).reply.value
                              if (replyContent.trim()) {
                                onAddComment(`@${comment.userName} ${replyContent}`)
                                setReplyingTo(null)
                              }
                            }}
                            className="space-y-2"
                          >
                            <Textarea
                              name="reply"
                              placeholder={`Reply to ${comment.userName}...`}
                              className="min-h-[80px] bg-black/20 border-purple-600/30 text-foreground resize-none"
                            />
                            <div className="flex gap-2">
                              <Button
                                type="submit"
                                size="sm"
                                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                              >
                                <Send className="w-4 h-4 mr-1" />
                                Reply
                              </Button>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => setReplyingTo(null)}
                                className="text-muted-foreground"
                              >
                                Cancel
                              </Button>
                            </div>
                          </form>
                        </div>
                      )}
                    </div>
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
