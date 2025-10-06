"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  BookOpen, 
  Users, 
  MapPin, 
  Calendar, 
  Image, 
  Video, 
  Plus, 
  Trash2,
  FileText,
  Globe,
  Sparkles
} from "lucide-react"

interface Character {
  id: string
  name: string
  age: number
  voice: string
  physicalDescription: string
  personality: string
  background: string
}

interface Event {
  id: string
  title: string
  type: string
  description: string
}

interface Place {
  id: string
  name: string
  type: string
  description: string
  history: string
}

export function BookCreationForm() {
  const [activeSection, setActiveSection] = useState("basic")
  
  // Basic Info
  const [title, setTitle] = useState("")
  const [genre, setGenre] = useState("")
  const [audience, setAudience] = useState("")
  const [language, setLanguage] = useState("")
  const [contentRating, setContentRating] = useState("")
  const [synopsis, setSynopsis] = useState("")
  
  // Narrative Details
  const [narrativeArc, setNarrativeArc] = useState("")
  const [narrator, setNarrator] = useState("")
  const [tense, setTense] = useState("")
  const [setting, setSetting] = useState("")
  const [characters, setCharacters] = useState("")
  const [ending, setEnding] = useState("")
  const [conflict, setConflict] = useState("")
  const [structure, setStructure] = useState("")
  
  // Characters
  const [characterList, setCharacterList] = useState<Character[]>([])
  const [newCharacter, setNewCharacter] = useState<Character>({
    id: "",
    name: "",
    age: 0,
    voice: "",
    physicalDescription: "",
    personality: "",
    background: ""
  })
  
  // World Building
  const [worldDescription, setWorldDescription] = useState("")
  
  // Events
  const [events, setEvents] = useState<Event[]>([])
  const [newEvent, setNewEvent] = useState<Event>({
    id: "",
    title: "",
    type: "",
    description: ""
  })
  
  // Places
  const [places, setPlaces] = useState<Place[]>([])
  const [newPlace, setNewPlace] = useState<Place>({
    id: "",
    name: "",
    type: "",
    description: "",
    history: ""
  })
  
  // Media Generation
  const [imageStyle, setImageStyle] = useState("")
  const [videoStyle, setVideoStyle] = useState("")
  const [videoDuration, setVideoDuration] = useState(1)
  const [videoIdea, setVideoIdea] = useState("")

  const addCharacter = () => {
    if (newCharacter.name) {
      setCharacterList([...characterList, { ...newCharacter, id: Date.now().toString() }])
      setNewCharacter({
        id: "",
        name: "",
        age: 0,
        voice: "",
        physicalDescription: "",
        personality: "",
        background: ""
      })
    }
  }

  const removeCharacter = (id: string) => {
    setCharacterList(characterList.filter(char => char.id !== id))
  }

  const addEvent = () => {
    if (newEvent.title) {
      setEvents([...events, { ...newEvent, id: Date.now().toString() }])
      setNewEvent({ id: "", title: "", type: "", description: "" })
    }
  }

  const removeEvent = (id: string) => {
    setEvents(events.filter(event => event.id !== id))
  }

  const addPlace = () => {
    if (newPlace.name) {
      setPlaces([...places, { ...newPlace, id: Date.now().toString() }])
      setNewPlace({ id: "", name: "", type: "", description: "", history: "" })
    }
  }

  const removePlace = (id: string) => {
    setPlaces(places.filter(place => place.id !== id))
  }

  const sections = [
    { id: "basic", label: "Basic Info", icon: FileText },
    { id: "narrative", label: "Narrative", icon: BookOpen },
    { id: "characters", label: "Characters", icon: Users },
    { id: "world", label: "World", icon: Globe },
    { id: "events", label: "Events", icon: Calendar },
    { id: "places", label: "Places", icon: MapPin },
    { id: "media", label: "Media", icon: Image }
  ]

  return (
    <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-purple-400" />
          Book Creation Form
        </CardTitle>
        <div className="flex flex-wrap gap-2 mt-4">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveSection(section.id)}
                className={`${
                  activeSection === section.id
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "border-purple-600/30 hover:bg-purple-800/20"
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {section.label}
              </Button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Basic Information */}
        {activeSection === "basic" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Title</label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. The Shadows of Time"
                  className="bg-black/20 border-purple-600/30 text-foreground"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Genre</label>
                <Select value={genre} onValueChange={setGenre}>
                  <SelectTrigger className="bg-black/20 border-purple-600/30">
                    <SelectValue placeholder="Select genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fantasy">Fantasy</SelectItem>
                    <SelectItem value="scifi">Science Fiction</SelectItem>
                    <SelectItem value="romance">Romance</SelectItem>
                    <SelectItem value="horror">Horror</SelectItem>
                    <SelectItem value="drama">Drama</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Target Audience</label>
                <Select value={audience} onValueChange={setAudience}>
                  <SelectTrigger className="bg-black/20 border-purple-600/30">
                    <SelectValue placeholder="Select audience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="children">Children</SelectItem>
                    <SelectItem value="young-adult">Young Adult</SelectItem>
                    <SelectItem value="adult">Adult</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Language</label>
                <Input
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  placeholder="English, Spanish..."
                  className="bg-black/20 border-purple-600/30 text-foreground"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Content Rating</label>
                <Select value={contentRating} onValueChange={setContentRating}>
                  <SelectTrigger className="bg-black/20 border-purple-600/30">
                    <SelectValue placeholder="Select rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="pg13">PG-13</SelectItem>
                    <SelectItem value="adult">+18</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Synopsis</label>
              <Textarea
                value={synopsis}
                onChange={(e) => setSynopsis(e.target.value)}
                placeholder="Describe the main premise..."
                rows={4}
                className="bg-black/20 border-purple-600/30 text-foreground resize-none"
              />
            </div>
          </div>
        )}

        {/* Narrative Details */}
        {activeSection === "narrative" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Narrative Arc Type</label>
                <Select value={narrativeArc} onValueChange={setNarrativeArc}>
                  <SelectTrigger className="bg-black/20 border-purple-600/30">
                    <SelectValue placeholder="Select arc" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hero-journey">Hero&apos;s Journey</SelectItem>
                    <SelectItem value="tragedy">Tragedy</SelectItem>
                    <SelectItem value="rebirth">Rebirth</SelectItem>
                    <SelectItem value="comedy">Comedy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Narrator</label>
                <Select value={narrator} onValueChange={setNarrator}>
                  <SelectTrigger className="bg-black/20 border-purple-600/30">
                    <SelectValue placeholder="Select narrator" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="first-person">First Person</SelectItem>
                    <SelectItem value="third-person">Third Person</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Tense</label>
                <Select value={tense} onValueChange={setTense}>
                  <SelectTrigger className="bg-black/20 border-purple-600/30">
                    <SelectValue placeholder="Select tense" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="past">Past</SelectItem>
                    <SelectItem value="present">Present</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Ending Type</label>
                <Select value={ending} onValueChange={setEnding}>
                  <SelectTrigger className="bg-black/20 border-purple-600/30">
                    <SelectValue placeholder="Select ending" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="happy">Happy</SelectItem>
                    <SelectItem value="tragic">Tragic</SelectItem>
                    <SelectItem value="open">Open</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Setting / Era / Culture</label>
              <Textarea
                value={setting}
                onChange={(e) => setSetting(e.target.value)}
                placeholder="Describe the historical or cultural context"
                rows={3}
                className="bg-black/20 border-purple-600/30 text-foreground resize-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Key Characters</label>
              <Textarea
                value={characters}
                onChange={(e) => setCharacters(e.target.value)}
                placeholder="Protagonist, Antagonist, Supporting characters"
                rows={3}
                className="bg-black/20 border-purple-600/30 text-foreground resize-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Main Conflict</label>
              <Textarea
                value={conflict}
                onChange={(e) => setConflict(e.target.value)}
                placeholder="What is the central problem?"
                rows={3}
                className="bg-black/20 border-purple-600/30 text-foreground resize-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Narrative Structure</label>
              <Select value={structure} onValueChange={setStructure}>
                <SelectTrigger className="bg-black/20 border-purple-600/30">
                  <SelectValue placeholder="Select structure" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="three-acts">Three Acts</SelectItem>
                  <SelectItem value="hero-journey">Hero&apos;s Journey</SelectItem>
                  <SelectItem value="transformation">Transformation Arc</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Characters */}
        {activeSection === "characters" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                <Input
                  value={newCharacter.name}
                  onChange={(e) => setNewCharacter({...newCharacter, name: e.target.value})}
                  placeholder="Character name"
                  className="bg-black/20 border-purple-600/30 text-foreground"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Age</label>
                <Input
                  type="number"
                  value={newCharacter.age}
                  onChange={(e) => setNewCharacter({...newCharacter, age: parseInt(e.target.value) || 0})}
                  placeholder="Age"
                  className="bg-black/20 border-purple-600/30 text-foreground"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Voice (optional)</label>
                <Input
                  value={newCharacter.voice}
                  onChange={(e) => setNewCharacter({...newCharacter, voice: e.target.value})}
                  placeholder="Voice type or tone"
                  className="bg-black/20 border-purple-600/30 text-foreground"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Physical Description</label>
              <Textarea
                value={newCharacter.physicalDescription}
                onChange={(e) => setNewCharacter({...newCharacter, physicalDescription: e.target.value})}
                placeholder="Physical appearance"
                rows={3}
                className="bg-black/20 border-purple-600/30 text-foreground resize-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Personality / Values</label>
              <Textarea
                value={newCharacter.personality}
                onChange={(e) => setNewCharacter({...newCharacter, personality: e.target.value})}
                placeholder="Personality traits and values"
                rows={3}
                className="bg-black/20 border-purple-600/30 text-foreground resize-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Personal History</label>
              <Textarea
                value={newCharacter.background}
                onChange={(e) => setNewCharacter({...newCharacter, background: e.target.value})}
                placeholder="Character background"
                rows={3}
                className="bg-black/20 border-purple-600/30 text-foreground resize-none"
              />
            </div>
            <Button onClick={addCharacter} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Character
            </Button>
            
            {characterList.length > 0 && (
              <div className="space-y-3">
                <Separator className="bg-purple-800/30" />
                <h4 className="text-lg font-semibold text-foreground">Character List</h4>
                {characterList.map((character) => (
                  <Card key={character.id} className="bg-purple-900/20 border-purple-800/30">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h5 className="font-semibold text-foreground">{character.name}</h5>
                          <p className="text-sm text-muted-foreground">Age: {character.age}</p>
                          {character.voice && <p className="text-sm text-muted-foreground">Voice: {character.voice}</p>}
                          <p className="text-sm text-muted-foreground mt-2">{character.physicalDescription}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeCharacter(character.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* World Building */}
        {activeSection === "world" && (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">World Description</label>
              <Textarea
                value={worldDescription}
                onChange={(e) => setWorldDescription(e.target.value)}
                placeholder="Describe the geography, culture, technology or customs of the world"
                rows={6}
                className="bg-black/20 border-purple-600/30 text-foreground resize-none"
              />
            </div>
          </div>
        )}

        {/* Events */}
        {activeSection === "events" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Event Title</label>
                <Input
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                  placeholder="Event title"
                  className="bg-black/20 border-purple-600/30 text-foreground"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Event Type</label>
                <Select value={newEvent.type} onValueChange={(value: string) => setNewEvent({...newEvent, type: value})}>
                  <SelectTrigger className="bg-black/20 border-purple-600/30">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="twist">Twist</SelectItem>
                    <SelectItem value="climax">Climax</SelectItem>
                    <SelectItem value="resolution">Resolution</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Event Description</label>
              <Textarea
                value={newEvent.description}
                onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                placeholder="Event description"
                rows={3}
                className="bg-black/20 border-purple-600/30 text-foreground resize-none"
              />
            </div>
            <Button onClick={addEvent} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Event
            </Button>
            
            {events.length > 0 && (
              <div className="space-y-3">
                <Separator className="bg-purple-800/30" />
                <h4 className="text-lg font-semibold text-foreground">Event List</h4>
                {events.map((event) => (
                  <Card key={event.id} className="bg-purple-900/20 border-purple-800/30">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h5 className="font-semibold text-foreground">{event.title}</h5>
                            <Badge variant="outline" className="border-purple-600/30 text-purple-300">
                              {event.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeEvent(event.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Places */}
        {activeSection === "places" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Place Name</label>
                <Input
                  value={newPlace.name}
                  onChange={(e) => setNewPlace({...newPlace, name: e.target.value})}
                  placeholder="Place name"
                  className="bg-black/20 border-purple-600/30 text-foreground"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Place Type</label>
                <Input
                  value={newPlace.type}
                  onChange={(e) => setNewPlace({...newPlace, type: e.target.value})}
                  placeholder="City, forest, ship, etc."
                  className="bg-black/20 border-purple-600/30 text-foreground"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Description</label>
              <Textarea
                value={newPlace.description}
                onChange={(e) => setNewPlace({...newPlace, description: e.target.value})}
                placeholder="Place description"
                rows={3}
                className="bg-black/20 border-purple-600/30 text-foreground resize-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">History / Culture</label>
              <Textarea
                value={newPlace.history}
                onChange={(e) => setNewPlace({...newPlace, history: e.target.value})}
                placeholder="History and culture"
                rows={3}
                className="bg-black/20 border-purple-600/30 text-foreground resize-none"
              />
            </div>
            <Button onClick={addPlace} className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Place
            </Button>
            
            {places.length > 0 && (
              <div className="space-y-3">
                <Separator className="bg-purple-800/30" />
                <h4 className="text-lg font-semibold text-foreground">Place List</h4>
                {places.map((place) => (
                  <Card key={place.id} className="bg-purple-900/20 border-purple-800/30">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h5 className="font-semibold text-foreground">{place.name}</h5>
                            <Badge variant="outline" className="border-purple-600/30 text-purple-300">
                              {place.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{place.description}</p>
                          {place.history && (
                            <p className="text-sm text-muted-foreground mt-2">{place.history}</p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removePlace(place.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Media Generation */}
        {activeSection === "media" && (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Image className="h-5 w-5 text-purple-400" alt="Image generation icon" />
                Image Generation
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Image Style</label>
                  <Select value={imageStyle} onValueChange={setImageStyle}>
                    <SelectTrigger className="bg-black/20 border-purple-600/30">
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realistic">Realistic</SelectItem>
                      <SelectItem value="anime">Anime</SelectItem>
                      <SelectItem value="webtoon">Webtoon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <Button variant="outline" className="border-purple-600/30 hover:bg-purple-800/20">
                    Character Image
                  </Button>
                  <Button variant="outline" className="border-purple-600/30 hover:bg-purple-800/20">
                    Scene Image
                  </Button>
                  <Button variant="outline" className="border-purple-600/30 hover:bg-purple-800/20">
                    Book Cover
                  </Button>
                </div>
              </div>
            </div>
            
            <Separator className="bg-purple-800/30" />
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Video className="h-5 w-5 text-pink-400" />
                Video Generation
              </h4>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Video Style</label>
                    <Select value={videoStyle} onValueChange={setVideoStyle}>
                      <SelectTrigger className="bg-black/20 border-purple-600/30">
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2d-animation">2D Animation</SelectItem>
                        <SelectItem value="realistic">Realistic</SelectItem>
                        <SelectItem value="anime">Anime</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Duration (minutes)</label>
                    <Input
                      type="number"
                      min="1"
                      max="10"
                      value={videoDuration}
                      onChange={(e) => setVideoDuration(parseInt(e.target.value) || 1)}
                      className="bg-black/20 border-purple-600/30 text-foreground"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Video Idea / Theme</label>
                  <Textarea
                    value={videoIdea}
                    onChange={(e) => setVideoIdea(e.target.value)}
                    placeholder="Briefly describe the idea or scene"
                    rows={3}
                    className="bg-black/20 border-purple-600/30 text-foreground resize-none"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Create Custom Video
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline" className="border-purple-600/30 hover:bg-purple-800/20">
            Save Draft
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            Generate Book
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
