"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { User, Settings, Bell, Shield, Palette, Camera, Eye, Award, Calendar } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [profileData, setProfileData] = useState({
    displayName: "Luna Starweaver",
    username: "lunastarweaver",
    email: "luna@example.com",
    bio: "Fantasy author crafting magical worlds and unforgettable characters. Currently working on the Chronicles of Aethermoor series.",
    location: "San Francisco, CA",
    website: "https://lunastarweaver.com",
    genres: ["Fantasy", "Sci-Fi", "Adventure"],
    writingGoals: "Complete 3 novels this year",
  })

  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    communityActivity: true,
    projectReminders: false,
    weeklyDigest: true,
    collaborationRequests: true,
  })

  const [privacy, setPrivacy] = useState({
    profileVisibility: "public",
    showWritingStats: true,
    allowDirectMessages: true,
    showOnlineStatus: false,
  })

  const achievements = [
    { title: "First Story", description: "Published your first story", earned: true, date: "Jan 2024" },
    { title: "Community Star", description: "Received 100 likes on a post", earned: true, date: "Feb 2024" },
    { title: "Consistent Writer", description: "Wrote for 30 consecutive days", earned: true, date: "Mar 2024" },
    { title: "Collaboration Master", description: "Completed 5 collaborative projects", earned: false, date: null },
    { title: "Genre Explorer", description: "Published in 3 different genres", earned: false, date: null },
  ]

  const stats = {
    storiesPublished: 12,
    totalWords: 145000,
    followers: 2847,
    following: 156,
    likesReceived: 5632,
    commentsReceived: 892,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-pink-950">
      <Navigation />

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <Avatar className="h-24 w-24 mx-auto">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" />
                    <AvatarFallback className="text-2xl">LS</AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 rounded-full h-8 w-8 p-0 bg-purple-600 hover:bg-purple-700"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{profileData.displayName}</h3>
                <p className="text-sm text-muted-foreground mb-4">@{profileData.username}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-lg font-bold text-foreground">{stats.followers.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-foreground">{stats.following}</p>
                    <p className="text-xs text-muted-foreground">Following</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full border-purple-600/30 hover:bg-purple-800/20 bg-transparent">
                  <Eye className="h-4 w-4 mr-2" />
                  View Public Profile
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm mt-6">
              <CardHeader>
                <CardTitle className="text-foreground text-sm">Writing Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Stories</span>
                  <span className="text-sm text-foreground font-semibold">{stats.storiesPublished}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Words</span>
                  <span className="text-sm text-foreground font-semibold">{stats.totalWords.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Likes</span>
                  <span className="text-sm text-foreground font-semibold">{stats.likesReceived.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Comments</span>
                  <span className="text-sm text-foreground font-semibold">{stats.commentsReceived}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4 bg-black/20 border border-purple-800/30">
                <TabsTrigger value="profile" className="data-[state=active]:bg-purple-600/20">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="preferences" className="data-[state=active]:bg-purple-600/20">
                  <Settings className="h-4 w-4 mr-2" />
                  Preferences
                </TabsTrigger>
                <TabsTrigger value="notifications" className="data-[state=active]:bg-purple-600/20">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="achievements" className="data-[state=active]:bg-purple-600/20">
                  <Award className="h-4 w-4 mr-2" />
                  Achievements
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6">
                <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-foreground">Basic Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="displayName" className="text-foreground">
                          Display Name
                        </Label>
                        <Input
                          id="displayName"
                          value={profileData.displayName}
                          onChange={(e) => setProfileData({ ...profileData, displayName: e.target.value })}
                          className="bg-black/20 border-purple-600/30 text-foreground"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="username" className="text-foreground">
                          Username
                        </Label>
                        <Input
                          id="username"
                          value={profileData.username}
                          onChange={(e) => setProfileData({ ...profileData, username: e.target.value })}
                          className="bg-black/20 border-purple-600/30 text-foreground"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                        className="bg-black/20 border-purple-600/30 text-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio" className="text-foreground">
                        Bio
                      </Label>
                      <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                        className="bg-black/20 border-purple-600/30 text-foreground"
                        rows={3}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-foreground">
                          Location
                        </Label>
                        <Input
                          id="location"
                          value={profileData.location}
                          onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                          className="bg-black/20 border-purple-600/30 text-foreground"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website" className="text-foreground">
                          Website
                        </Label>
                        <Input
                          id="website"
                          value={profileData.website}
                          onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                          className="bg-black/20 border-purple-600/30 text-foreground"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-foreground">Writing Profile</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-foreground">Favorite Genres</Label>
                      <div className="flex flex-wrap gap-2">
                        {profileData.genres.map((genre, index) => (
                          <Badge key={index} variant="outline" className="border-purple-600/30 text-purple-300">
                            {genre}
                          </Badge>
                        ))}
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple-600/30 hover:bg-purple-800/20 bg-transparent"
                        >
                          + Add Genre
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="goals" className="text-foreground">
                        Writing Goals
                      </Label>
                      <Textarea
                        id="goals"
                        value={profileData.writingGoals}
                        onChange={(e) => setProfileData({ ...profileData, writingGoals: e.target.value })}
                        className="bg-black/20 border-purple-600/30 text-foreground"
                        rows={2}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferences" className="space-y-6">
                <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <Shield className="h-5 w-5 text-purple-400" />
                      Privacy Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-foreground">Profile Visibility</Label>
                        <p className="text-sm text-muted-foreground">Who can see your profile</p>
                      </div>
                      <Select
                        value={privacy.profileVisibility}
                        onValueChange={(value: string) => setPrivacy({ ...privacy, profileVisibility: value })}
                      >
                        <SelectTrigger className="w-32 bg-black/20 border-purple-600/30">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">Public</SelectItem>
                          <SelectItem value="followers">Followers</SelectItem>
                          <SelectItem value="private">Private</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Separator className="bg-purple-800/30" />
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-foreground">Show Writing Stats</Label>
                        <p className="text-sm text-muted-foreground">Display word counts and progress</p>
                      </div>
                      <Switch
                        checked={privacy.showWritingStats}
                        onCheckedChange={(checked: boolean) => setPrivacy({ ...privacy, showWritingStats: checked })}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-foreground">Allow Direct Messages</Label>
                        <p className="text-sm text-muted-foreground">Let others send you messages</p>
                      </div>
                      <Switch
                        checked={privacy.allowDirectMessages}
                        onCheckedChange={(checked: boolean) => setPrivacy({ ...privacy, allowDirectMessages: checked })}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-foreground">Show Online Status</Label>
                        <p className="text-sm text-muted-foreground">Display when you&apos;re active</p>
                      </div>
                      <Switch
                        checked={privacy.showOnlineStatus}
                        onCheckedChange={(checked: boolean) => setPrivacy({ ...privacy, showOnlineStatus: checked })}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-foreground flex items-center gap-2">
                      <Palette className="h-5 w-5 text-pink-400" />
                      Appearance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-foreground">Theme</Label>
                      <Select defaultValue="dark">
                        <SelectTrigger className="bg-black/20 border-purple-600/30">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dark">Dark (Current)</SelectItem>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="auto">Auto</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground">Accent Color</Label>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white cursor-pointer"></div>
                        <div className="w-8 h-8 rounded-full bg-pink-500 border cursor-pointer"></div>
                        <div className="w-8 h-8 rounded-full bg-blue-500 border cursor-pointer"></div>
                        <div className="w-8 h-8 rounded-full bg-green-500 border cursor-pointer"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-6">
                <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-foreground">Notification Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-foreground">Email Updates</Label>
                        <p className="text-sm text-muted-foreground">Receive updates via email</p>
                      </div>
                      <Switch
                        checked={notifications.emailUpdates}
                        onCheckedChange={(checked: boolean) => setNotifications({ ...notifications, emailUpdates: checked })}
                      />
                    </div>
                    <Separator className="bg-purple-800/30" />
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-foreground">Community Activity</Label>
                        <p className="text-sm text-muted-foreground">Likes, comments, and follows</p>
                      </div>
                      <Switch
                        checked={notifications.communityActivity}
                        onCheckedChange={(checked: boolean) =>
                          setNotifications({ ...notifications, communityActivity: checked })
                        }
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-foreground">Project Reminders</Label>
                        <p className="text-sm text-muted-foreground">Writing goals and deadlines</p>
                      </div>
                      <Switch
                        checked={notifications.projectReminders}
                        onCheckedChange={(checked: boolean) => setNotifications({ ...notifications, projectReminders: checked })}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-foreground">Weekly Digest</Label>
                        <p className="text-sm text-muted-foreground">Summary of your activity</p>
                      </div>
                      <Switch
                        checked={notifications.weeklyDigest}
                        onCheckedChange={(checked: boolean) => setNotifications({ ...notifications, weeklyDigest: checked })}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-foreground">Collaboration Requests</Label>
                        <p className="text-sm text-muted-foreground">Invites to work together</p>
                      </div>
                      <Switch
                        checked={notifications.collaborationRequests}
                        onCheckedChange={(checked: boolean) =>
                          setNotifications({ ...notifications, collaborationRequests: checked })
                        }
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <Card
                      key={index}
                      className={`bg-black/40 border-purple-800/30 backdrop-blur-sm ${achievement.earned ? "border-yellow-500/30" : ""}`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-full ${achievement.earned ? "bg-yellow-500/20" : "bg-gray-500/20"}`}
                          >
                            <Award className={`h-5 w-5 ${achievement.earned ? "text-yellow-400" : "text-gray-400"}`} />
                          </div>
                          <div className="flex-1">
                            <h3
                              className={`font-semibold ${achievement.earned ? "text-foreground" : "text-muted-foreground"}`}
                            >
                              {achievement.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                            {achievement.earned && achievement.date && (
                              <div className="flex items-center gap-1 mt-1">
                                <Calendar className="h-3 w-3 text-yellow-400" />
                                <span className="text-xs text-yellow-400">{achievement.date}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
