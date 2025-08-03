"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ArrowLeft, MapPin, Clock, Users } from "lucide-react"
import Link from "next/link"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  useEvents,
  getEventsForDate,
  filterEvents,
  getEventTypeBadgeClass,
  EventType,
  SkillLevel
} from "@/lib/strapi-events"

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const { events, loading, error } = useEvents();

  const [filters, setFilters] = useState({
    Workshop: true,
    Exhibition: true,
    Meeting: true,
    Special: true,
    "Social Event": true,
    beginner: true,
    intermediate: true,
    advanced: true,
  })

  // Filter events based on selected date and filters
  const filteredEvents = (() => {
    let eventsToFilter = events;

    // Filter by date (if selected)
    if (date) {
      eventsToFilter = getEventsForDate(events, date);
    }

    // Filter by type and skill level
    const activeTypes = Object.entries(filters)
      .filter(([key, value]) => value && ["Workshop", "Exhibition", "Meeting", "Special", "Social Event"].includes(key))
      .map(([key]) => key as EventType);

    const activeSkillLevels = Object.entries(filters)
      .filter(([key, value]) => value && ["beginner", "intermediate", "advanced"].includes(key))
      .map(([key]) => key as SkillLevel);

    return filterEvents(eventsToFilter, {
      types: activeTypes,
      skillLevels: activeSkillLevels
    });
  })();

  // Toggle a filter
  const toggleFilter = (filter: keyof typeof filters) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }))
  }

  // Get dates with events for the calendar
  const datesWithEvents = events.map((event) => event.date)

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
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
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-lg text-gray-600">Loading events...</div>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
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
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-red-500">{error}</div>
          </div>
        </section>
      </div>
    );
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
                          Workshop: true,
                          Exhibition: true,
                          Meeting: true,
                          Special: true,
                          "Social Event": true,
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
                            id="filter-social"
                            checked={filters["Social Event"]}
                            onCheckedChange={() => toggleFilter("Social Event")}
                          />
                          <Label htmlFor="filter-social" className="cursor-pointer">
                            Social Events
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
              </div>

              {filteredEvents.length === 0 ? (
                <div className="text-center py-16 bg-gray-50 rounded-lg">
                  <CalendarIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No events found</h3>
                  <p className="mt-1 text-gray-500">
                    {date ? "No events scheduled for this date." : events.length === 0 ? "No events available." : "No upcoming events match your filters."}
                  </p>
                  <div className="mt-6">
                    <Button
                      onClick={() => {
                        setDate(undefined)
                        setFilters({
                          Workshop: true,
                          Exhibition: true,
                          Meeting: true,
                          Special: true,
                          "Social Event": true,
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
                                className={getEventTypeBadgeClass(event.type)}
                              >
                                {event.type}
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
                                  {event.currentAttendees || 0} / {event.maxAttendees} attendees
                                </span>
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
        </div>
      </section>

      {/* Add to Calendar CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Never Miss an Event</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join our Discord to stay updated with all our workshops, exhibitions, and meetings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/*<Button className="bg-gray-900 hover:bg-gray-800">Add to Google Calendar</Button>*/}
            {/*<Button variant="outline">Download iCal File</Button>*/}
            <Link href="https://discord.gg/gj4G8nZF">
              <Button className="bg-gray-900 hover:bg-gray-800">Join our Discord</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}