"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react"

// Define types for our gallery items
type GalleryItem = {
  id: number
  title: string
  artist: string
  image: string
  category: string
  complexity: "Beginner" | "Intermediate" | "Advanced"
  description: string
}

// Sample gallery data
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Crane Family",
    artist: "Sarah Chen",
    image: "/placeholder.svg?height=600&width=800",
    category: "Animals",
    complexity: "Beginner",
    description: "A family of traditional origami cranes in various sizes, symbolizing peace and good fortune.",
  },
  {
    id: 2,
    title: "Geometric Kusudama",
    artist: "David Kim",
    image: "/placeholder.svg?height=800&width=800",
    category: "Geometric",
    complexity: "Intermediate",
    description: "A complex kusudama ball made from 30 individual units, creating a stunning geometric pattern.",
  },
  {
    id: 3,
    title: "Dragon",
    artist: "Carlos Rodriguez",
    image: "/placeholder.svg?height=600&width=800",
    category: "Mythical",
    complexity: "Advanced",
    description: "An intricate dragon design with over 200 steps, featuring detailed scales and wings.",
  },
  {
    id: 4,
    title: "Lotus Flower",
    artist: "Aisha Patel",
    image: "/placeholder.svg?height=600&width=800",
    category: "Flowers",
    complexity: "Beginner",
    description: "A delicate lotus flower design, perfect for beginners yet elegant in its simplicity.",
  },
  {
    id: 5,
    title: "Modular Star",
    artist: "Thomas Wilson",
    image: "/placeholder.svg?height=800&width=600",
    category: "Geometric",
    complexity: "Intermediate",
    description: "A modular star created from 8 identical units, showcasing geometric precision.",
  },
  {
    id: 6,
    title: "Elephant",
    artist: "Maya Johnson",
    image: "/placeholder.svg?height=800&width=600",
    category: "Animals",
    complexity: "Intermediate",
    description: "A realistic elephant design with textured features and articulated trunk.",
  },
  {
    id: 7,
    title: "Abstract Tessellation",
    artist: "Sarah Chen",
    image: "/placeholder.svg?height=800&width=800",
    category: "Geometric",
    complexity: "Advanced",
    description: "A complex tessellation pattern created from a single sheet of paper with hundreds of precise folds.",
  },
  {
    id: 8,
    title: "Butterfly Collection",
    artist: "Elena Martinez",
    image: "/placeholder.svg?height=600&width=800",
    category: "Animals",
    complexity: "Beginner",
    description: "A collection of butterfly designs in various colors and sizes, perfect for decorative displays.",
  },
  {
    id: 9,
    title: "Architectural Tower",
    artist: "David Kim",
    image: "/placeholder.svg?height=1000&width=600",
    category: "Architecture",
    complexity: "Advanced",
    description:
      "A detailed architectural model inspired by modern skyscrapers, featuring multiple levels and details.",
  },
  {
    id: 10,
    title: "Rose Bouquet",
    artist: "Aisha Patel",
    image: "/placeholder.svg?height=800&width=600",
    category: "Flowers",
    complexity: "Intermediate",
    description: "A beautiful bouquet of origami roses with stems and leaves, created for special occasions.",
  },
  {
    id: 11,
    title: "Samurai Helmet",
    artist: "Carlos Rodriguez",
    image: "/placeholder.svg?height=800&width=800",
    category: "Historical",
    complexity: "Advanced",
    description: "A detailed replica of a traditional samurai helmet, showcasing historical precision and technique.",
  },
  {
    id: 12,
    title: "Sea Creatures",
    artist: "Maya Johnson",
    image: "/placeholder.svg?height=800&width=800",
    category: "Animals",
    complexity: "Intermediate",
    description:
      "A collection of sea creatures including fish, octopus, and turtle, designed for an underwater display.",
  },
]

// Filter categories
const categories = ["All", "Animals", "Geometric", "Flowers", "Architecture", "Mythical", "Historical"]
const complexityLevels = ["All", "Beginner", "Intermediate", "Advanced"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedComplexity, setSelectedComplexity] = useState("All")
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  // Filter gallery items based on selected filters
  const filteredItems = galleryItems.filter((item) => {
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory
    const complexityMatch = selectedComplexity === "All" || item.complexity === selectedComplexity
    return categoryMatch && complexityMatch
  })

  // Handle modal navigation
  const handlePrevious = () => {
    if (!selectedItem) return
    const currentIndex = galleryItems.findIndex((item) => item.id === selectedItem.id)
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length
    setSelectedItem(galleryItems[prevIndex])
  }

  const handleNext = () => {
    if (!selectedItem) return
    const currentIndex = galleryItems.findIndex((item) => item.id === selectedItem.id)
    const nextIndex = (currentIndex + 1) % galleryItems.length
    setSelectedItem(galleryItems[nextIndex])
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Gallery</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl">
            Explore our collection of origami creations from members of the Austin Origami Circle.
          </p>
        </div>
      </div>

      {/* Filters */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-sm font-medium text-gray-700">Category</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-gray-900" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm font-medium text-gray-700">Complexity</h2>
              <div className="flex flex-wrap gap-2">
                {complexityLevels.map((level) => (
                  <Button
                    key={level}
                    variant={selectedComplexity === level ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedComplexity(level)}
                    className={selectedComplexity === level ? "bg-gray-900" : ""}
                  >
                    {level}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No items match your selected filters.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("All")
                  setSelectedComplexity("All")
                }}
                className="mt-4"
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="aspect-[4/3] relative">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600">by {item.artist}</p>
                      </div>
                      <Badge
                        variant="secondary"
                        className={`
                          ${item.complexity === "Beginner" ? "bg-green-100 text-green-800" : ""}
                          ${item.complexity === "Intermediate" ? "bg-orange-100 text-orange-800" : ""}
                          ${item.complexity === "Advanced" ? "bg-pink-100 text-pink-800" : ""}
                        `}
                      >
                        {item.complexity}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="sm:max-w-4xl p-0 overflow-hidden">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full"
              onClick={() => setSelectedItem(null)}
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square">
                {selectedItem && (
                  <Image
                    src={selectedItem.image || "/placeholder.svg"}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />
                )}

                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-black/20 hover:bg-black/40 text-white rounded-full"
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePrevious()
                    }}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-black/20 hover:bg-black/40 text-white rounded-full"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleNext()
                    }}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {selectedItem && (
                  <>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-gray-900">{selectedItem.title}</h2>
                        <Badge
                          variant="secondary"
                          className={`
                            ${selectedItem.complexity === "Beginner" ? "bg-green-100 text-green-800" : ""}
                            ${selectedItem.complexity === "Intermediate" ? "bg-orange-100 text-orange-800" : ""}
                            ${selectedItem.complexity === "Advanced" ? "bg-pink-100 text-pink-800" : ""}
                          `}
                        >
                          {selectedItem.complexity}
                        </Badge>
                      </div>
                      <p className="text-gray-600">by {selectedItem.artist}</p>
                    </div>

                    <div className="pt-2">
                      <Badge variant="outline">{selectedItem.category}</Badge>
                    </div>

                    <p className="text-gray-600">{selectedItem.description}</p>

                    <div className="pt-4 space-y-4">
                      <h3 className="font-medium text-gray-900">Interested in learning this design?</h3>
                      <div className="flex flex-wrap gap-3">
                        <Button>Join a Workshop</Button>
                        <Button variant="outline">View Tutorial</Button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Submit Your Work CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Share Your Creations</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Are you a member of Austin Origami Circle? Submit your work to be featured in our gallery.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
          >
            Submit Your Work
          </Link>
        </div>
      </section>
    </div>
  )
}
