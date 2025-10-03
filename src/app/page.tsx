import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight, Zap, Users, BookOpen, Play } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-pink-950">
      {/* Navigation */}
      <header className="border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-white">Narratica</span>
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/login">
                <Button variant="ghost" className="text-white hover:bg-white/10">
                  Log in
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 glow-primary">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance text-white">
              Unleash Your Creative Universe
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into captivating stories, immersive series, and cinematic experiences with the power
              of AI. Join thousands of creators building the future of storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/register">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 glow-primary text-lg px-8 h-12"
                >
                  Start Creating
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 h-12 border-purple-400/30 hover:border-purple-400 text-white bg-transparent hover:bg-white/5"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-6 border-t border-white/10">
        <div className="container mx-auto">
          <p className="text-center text-sm text-purple-300 mb-12">Trusted by thousands of creators worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-50">
            {["Juancito", "Ferxxo", "Vico C", "Tyler The Creator", "Jack Stauber"].map((name) => (
              <div key={name} className="text-lg font-medium text-white">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Everything you need to create</h2>
            <p className="text-xl text-purple-200">Powerful tools designed for modern storytellers and creators</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">AI-Powered Generation</h3>
              <p className="text-purple-200 leading-relaxed">
                Create compelling narratives, characters, and worlds with advanced AI assistance that understands your
                creative vision.
              </p>
            </div>

            <div className="space-y-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Multi-Format Support</h3>
              <p className="text-purple-200 leading-relaxed">
                Build books, series, movies, and interactive experiences all in one platform with seamless format
                switching.
              </p>
            </div>

            <div className="space-y-4 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Community & Collaboration</h3>
              <p className="text-purple-200 leading-relaxed">
                Share your work, get feedback, and collaborate with a vibrant community of creators and storytellers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ready to start creating?</h2>
          <p className="text-xl text-purple-200">
            Join thousands of creators building the future of storytelling with AI
          </p>
          <Link href="/register">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 glow-primary text-lg px-8 h-12"
            >
              Get started for free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold text-white">Narratica</span>
          </div>
          <p className="text-sm text-purple-300">
            Empowering creators to build extraordinary stories with artificial intelligence
          </p>
          <p className="text-xs text-purple-400 mt-4">© 2025 Narratica. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}