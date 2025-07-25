"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ArrowLeft, MapPin, Clock, Users, Filter } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

// Define types for our events
type EventType = "workshop" | "exhibition" | "meeting" | "special"
type SkillLevel = "beginner" | "intermediate" | "advanced" | "all"

interface Event {
  id: number
  title: string
  date: Date
  startTime: string
  endTime: string
  location: string
  type: EventType
  skillLevel: SkillLevel
  description: string
  maxAttendees?: number
  currentAttendees?: number
}

// Sample events data
const events: Event[] = [
  {
    id: 1,
    title: "Beginner's Crane Workshop",
    date: new Date(2025, 6, 28), // July 28, 2025
    startTime: "14:00",
    endTime: "16:00",
    location: "Central Library, Room 204",
    type: "workshop",
    skillLevel: "beginner",
    description: "Learn the classic origami crane in this hands-on workshop perfect for newcomers.",
    maxAttendees: 20,
    currentAttendees: 12,
  },
  {
    id: 2,
    title: "Monthly Showcase",
    date: new Date(2025, 7, 5), // August 5, 2025
    startTime: "18:00",
    endTime: "20:00",
    location: "Art Gallery Downtown",
    type: "exhibition",
    skillLevel: "all",
    description: "Display your creations and admire the incredible work of fellow members.",
  },
  {
    id: 3,
    title: "Complex Modular Forms",
    date: new Date(2025, 7, 12), // August 12, 2025
    startTime: "13:00",
    endTime: "16:00",
    location: "Community Center, Workshop Room",
    type: "workshop",
    skillLevel: "advanced",
    description: "Master intricate modular origami techniques with our expert instructors.",
    maxAttendees: 15,
    currentAttendees: 8,
  },
  {
    id: 4,
    title: "Board Meeting",
    date: new Date(2025, 7, 15), // August 15, 2025
    startTime: "19:00",
    endTime: "20:30",
    location: "Virtual (Zoom)",
    type: "meeting",
    skillLevel: "all",
    description: "Monthly board meeting to discuss upcoming events and initiatives.",
  },
  {
    id: 5,
    title: "Origami in Education Workshop",
    date: new Date(2025, 7, 20), // August 20, 2025
    startTime: "10:00",
    endTime: "12:00",
    location: "Austin Public Library",
    type: "workshop",
    skillLevel: "intermediate",
    description: "Learn how to use origami as an educational tool in classrooms and learning environments.",
    maxAttendees: 25,
    currentAttendees: 15,
  },
  {
    id: 6,
    title: "Annual Origami Festival",
    date: new Date(2025, 8, 3), // September 3, 2025
    startTime: "10:00",
    endTime: "18:00",
    location: "Zilker Park",
    type: "special",
    skillLevel: "all",
    description:
      "Our biggest event of the year! Join us for a day of demonstrations, workshops, and community folding.",
  },
  {
    id: 7,
    title: "Animal Models Workshop",
    date: new Date(2025, 8, 10), // September 10, 2025
    startTime: "15:00",
    endTime: "17:00",
    location: "Community Center",
    type: "workshop",
    skillLevel: "intermediate",
    description: "Learn to fold various animal models from simple to complex designs.",
    maxAttendees: 20,
    currentAttendees: 10,
  },
  {
    id: 8,
    title: "General Member Meeting",
    date: new Date(2025, 8, 15), // September 15, 2025
    startTime: "19:00",
    endTime: "20:30",
    location: "Central Library, Meeting Room",
    type: "meeting",
    skillLevel: "all",
    description: "Monthly meeting for all members to discuss club activities and share recent work.",
  },
]

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [filters, setFilters] = useState({
    workshop: true,
    exhibition: true,
    meeting: true,
    special: true,
    beginner: true,
    intermediate: true,
    advanced: true,
  })

  // Filter events based on selected date and filters
  const filteredEvents = events.filter((event) => {
    // Filter by date (if selected)
    const dateMatch =
      !date ||
      (event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear())

    // Filter by event type
    const typeMatch =
      (event.type === "workshop" && filters.workshop) ||
      (event.type === "exhibition" && filters.exhibition) ||
      (event.type === "meeting" && filters.meeting) ||
      (event.type === "special" && filters.special)

    // Filter by skill level
    const skillMatch =
      event.skillLevel === "all" ||
      (event.skillLevel === "beginner" && filters.beginner) ||
      (event.skillLevel === "intermediate" && filters.intermediate) ||
      (event.skillLevel === "advanced" && filters.advanced)

    return dateMatch && typeMatch && skillMatch
  })

  // Toggle a filter
  const toggleFilter = (filter: keyof typeof filters) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }))
  }

  // Get dates with events for the calendar
  const datesWithEvents = events.map((event) => event.date)

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Calendar</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl">
            Stay up to date with all our workshops, exhibitions, and meetings.
          </p>
        </div>
      </div>

      {/* Calendar Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar with Calendar and Filters */}
            <div className="space-y-8">
              {/* Calendar Picker */}
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Date</h2>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    modifiers={{
                      hasEvent: datesWithEvents,
                    }}
                    modifiersStyles={{
                      hasEvent: {
                        fontWeight: "bold",
                        backgroundColor: "rgba(251, 146, 60, 0.1)",
                        color: "#f97316",
                      },
                    }}
                  />
                  {date && (
                    <div className="mt-4 flex justify-between">
                      <span className="text-sm text-gray-600">Selected: {format(date, "MMMM d, yyyy")}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setDate(undefined)}
                        className="text-sm text-gray-600"
                      >
                        Clear
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Filters */}
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setFilters({
                          workshop: true,
                          exhibition: true,
                          meeting: true,
                          special: true,
                          beginner: true,
                          intermediate: true,
                          advanced: true,
                        })
                      }
                      className="text-sm text-gray-600"
                    >
                      Reset
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h3 className="font-medium text-gray-900">Event Type</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="filter-workshop"
                            checked={filters.workshop}
                            onCheckedChange={() => toggleFilter("workshop")}
                          />
                          <Label htmlFor="filter-workshop" className="cursor-pointer">
                            Workshops
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="filter-exhibition"
                            checked={filters.exhibition}
                            onCheckedChange={() => toggleFilter("exhibition")}
                          />
                          <Label htmlFor="filter-exhibition" className="cursor-pointer">
                            Exhibitions
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="filter-meeting"
                            checked={filters.meeting}
                            onCheckedChange={() => toggleFilter("meeting")}
                          />
                          <Label htmlFor="filter-meeting" className="cursor-pointer">
                            Meetings
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="filter-special"
                            checked={filters.special}
                            onCheckedChange={() => toggleFilter("special")}
                          />
                          <Label htmlFor="filter-special" className="cursor-pointer">
                            Special Events
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-medium text-gray-900">Skill Level</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="filter-beginner"
                            checked={filters.beginner}
                            onCheckedChange={() => toggleFilter("beginner")}
                          />
                          <Label htmlFor="filter-beginner" className="cursor-pointer">
                            Beginner
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="filter-intermediate"
                            checked={filters.intermediate}
                            onCheckedChange={() => toggleFilter("intermediate")}
                          />
                          <Label htmlFor="filter-intermediate" className="cursor-pointer">
                            Intermediate
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="filter-advanced"
                            checked={filters.advanced}
                            onCheckedChange={() => toggleFilter("advanced")}
                          />
                          <Label htmlFor="filter-advanced" className="cursor-pointer">
                            Advanced
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Events List */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {date ? format(date, "MMMM d, yyyy") : "Upcoming Events"}
                </h2>
                <div className="flex items-center">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm" className="hidden md:flex bg-transparent">
                        <Filter className="mr-2 h-4 w-4" />
                        Filters
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 p-4 md:hidden">
                      <div className="space-y-4">
                        <h3 className="font-medium text-gray-900">Event Type</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="mobile-filter-workshop"
                              checked={filters.workshop}
                              onCheckedChange={() => toggleFilter("workshop")}
                            />
                            <Label htmlFor="mobile-filter-workshop">Workshops</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="mobile-filter-exhibition"
                              checked={filters.exhibition}
                              onCheckedChange={() => toggleFilter("exhibition")}
                            />
                            <Label htmlFor="mobile-filter-exhibition">Exhibitions</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="mobile-filter-meeting"
                              checked={filters.meeting}
                              onCheckedChange={() => toggleFilter("meeting")}
                            />
                            <Label htmlFor="mobile-filter-meeting">Meetings</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="mobile-filter-special"
                              checked={filters.special}
                              onCheckedChange={() => toggleFilter("special")}
                            />
                            <Label htmlFor="mobile-filter-special">Special Events</Label>
                          </div>
                        </div>

                        <h3 className="font-medium text-gray-900">Skill Level</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="mobile-filter-beginner"
                              checked={filters.beginner}
                              onCheckedChange={() => toggleFilter("beginner")}
                            />
                            <Label htmlFor="mobile-filter-beginner">Beginner</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="mobile-filter-intermediate"
                              checked={filters.intermediate}
                              onCheckedChange={() => toggleFilter("intermediate")}
                            />
                            <Label htmlFor="mobile-filter-intermediate">Intermediate</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="mobile-filter-advanced"
                              checked={filters.advanced}
                              onCheckedChange={() => toggleFilter("advanced")}
                            />
                            <Label htmlFor="mobile-filter-advanced">Advanced</Label>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {filteredEvents.length === 0 ? (
                <div className="text-center py-16 bg-gray-50 rounded-lg">
                  <CalendarIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No events found</h3>
                  <p className="mt-1 text-gray-500">
                    {date ? "No events scheduled for this date." : "No upcoming events match your filters."}
                  </p>
                  <div className="mt-6">
                    <Button
                      onClick={() => {
                        setDate(undefined)
                        setFilters({
                          workshop: true,
                          exhibition: true,
                          meeting: true,
                          special: true,
                          beginner: true,
                          intermediate: true,
                          advanced: true,
                        })
                      }}
                    >
                      View All Events
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredEvents.map((event) => (
                    <Card key={event.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="secondary"
                                className={`
                                  ${event.type === "workshop" ? "bg-orange-100 text-orange-800" : ""}
                                  ${event.type === "exhibition" ? "bg-purple-100 text-purple-800" : ""}
                                  ${event.type === "meeting" ? "bg-blue-100 text-blue-800" : ""}
                                  ${event.type === "special" ? "bg-pink-100 text-pink-800" : ""}
                                `}
                              >
                                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                              </Badge>
                              {event.skillLevel !== "all" && (
                                <Badge variant="outline">
                                  {event.skillLevel.charAt(0).toUpperCase() + event.skillLevel.slice(1)}
                                </Badge>
                              )}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                            <p className="text-gray-600">{event.description}</p>
                          </div>

                          <div className="flex flex-col items-start md:items-end gap-2 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="h-4 w-4" />
                              <span>{format(event.date, "MMMM d, yyyy")}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>
                                {event.startTime} - {event.endTime}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{event.location}</span>
                            </div>
                            {event.maxAttendees && (
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                <span>
                                  {event.currentAttendees} / {event.maxAttendees} attendees
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="mt-6 flex justify-end">
                          <Button>Register</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Add to Calendar CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Never Miss an Event</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Subscribe to our calendar to stay updated with all our workshops, exhibitions, and meetings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gray-900 hover:bg-gray-800">Add to Google Calendar</Button>
            <Button variant="outline">Download iCal File</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
