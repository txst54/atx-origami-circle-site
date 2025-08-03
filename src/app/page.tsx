"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Sparkles, ArrowRight, MapPin, Clock, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { useEvents, getUpcomingEvents, getEventTypeBadgeClass } from "@/lib/strapi-events"

export default function AustinOrigamiLanding() {
  const { events, loading, error } = useEvents();

  // Get upcoming events (next 3 events from today)
  const upcomingEvents = getUpcomingEvents(events, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 blur-xs">
          <Image
            src="/hero.png"
            alt="Hero Image"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-0 opacity-50 bg-gradient-to-br from-purple-950 to-blue-950"/>

        <div className="h-screen relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-9xl font-bold text-purple-200 mix-blend-color-dodge leading-tight">
                  From flat to
                  <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                    {" "}
                    form
                  </span>
                </h1>
                <p className="text-2xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-gray-300 via-gray-300 to-gray-500 leading-relaxed max-w-lg">
                  Explore Austin's most vibrant origami community.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://discord.gg/gj4G8nZF">
                  <Button size="lg" className="bg-white hover:bg-gray-300 text-black px-8">

                    Join our Discord
                    <ArrowRight className="ml-2 w-4 h-4"/>
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button variant="outline" size="lg" className="text-white hover:bg-white/30 border-transparent px-8 bg-transparent">
                    View Gallery
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-gray-200"/>
                  <span className="text-sm text-gray-300">200+ Online Members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-gray-200"/>
                  <span className="text-sm text-gray-300">Weekly Meetups</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-gray-200"/>
                  <span className="text-sm text-gray-300">All Skill Levels</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">What Do We Offer?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet other folders, give back to the community, and learn new skills in a welcoming environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative border-0 shadow-sm bg-white hover:shadow-md transition-shadow group">
              <div className="absolute inset-0 group-hover:blur-none blur-xs transition-all duration-300">
                <Image
                  src="/volunteer.webp"
                  alt="Origami Community"
                  fill
                  sizes="100vw"
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 z-0 opacity-50 rounded-lg bg-gradient-to-br from-pink-800 to-purple-900"/>
              <div className="z-10 inset-0">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Community Service</h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-300 ">
                    Give back to the Austin community by sharing your love of origami with local schools, hospitals, and libraries.
                  </p>
                </CardContent>
              </div>
            </Card>

            <Card className="relative border-0 shadow-sm bg-white hover:shadow-md transition-shadow group">
              <div className="absolute inset-0 blur-xs group-hover:blur-none transition-all duration-300">
                <Image
                  src="/social.webp"
                  alt="Origami Community"
                  fill
                  sizes="100vw"
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 z-0 opacity-50 rounded-lg bg-gradient-to-br from-purple-800 to-blue-900"/>
              <div className="z-10 inset-0">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Folding Community</h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-300 ">
                    We host weekly meetups at UT Austin for current students and alumni of any skill level to fold together.
                  </p>
                </CardContent>
              </div>
            </Card>

            <Card className="relative border-0 shadow-sm bg-white hover:shadow-md transition-shadow group">
              <div className="absolute inset-0 blur-xs group-hover:blur-none transition-all duration-300">
                <Image
                  src="/hotpot.webp"
                  alt="Origami Community"
                  fill
                  sizes="100vw"
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 z-0 opacity-50 rounded-lg bg-gradient-to-br from-blue-800 to-pink-900"/>
              <div className="inset-0 z-10">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Fun Events</h3>
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-300 ">
                    We go on trips together, host social gatherings, organize hot pot nights, and more to build friendships and community.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Join us for workshops, exhibitions, and community gatherings</p>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <div className="text-lg text-gray-600">Loading events...</div>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <div className="text-red-500 mb-4">{error}</div>
              <p className="text-gray-600">Please check back later for upcoming events.</p>
            </div>
          ) : upcomingEvents.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">No upcoming events scheduled at the moment.</p>
              <Link href="/calendar">
                <Button variant="outline">View Full Calendar</Button>
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className={getEventTypeBadgeClass(event.type)}
                      >
                        {event.type}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {format(event.date, "MMM d")}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                    <p className="text-gray-600 text-sm">
                      {event.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{event.startTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {upcomingEvents.length > 0 && (
            <div className="text-center mt-12">
              <Link href="/calendar">
                <Button variant="outline" size="lg">
                  View Full Calendar
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">Ready to start your origami journey?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join Austin's premier origami community and discover the meditative art of paper folding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://discord.gg/gj4G8nZF">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8">
                Join Our Circle
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-white hover:bg-gray-800 px-8 bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}