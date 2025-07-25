import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Team</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl">
            Meet the passionate individuals who lead Austin Origami Circle and share their knowledge with our community.
          </p>
        </div>
      </div>

      {/* Leadership Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Leadership</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Claudia May - President"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl opacity-20" />
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl opacity-20" />
            </div>

            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 mb-2">
                  Director of Operations
                </Badge>
                <h3 className="text-3xl font-bold text-gray-900">Claudia May</h3>
                <p className="text-lg text-gray-600 mt-2">Experienced Organizer</p>
              </div>

              <p className="text-gray-600">
                Claudia manages operations for Austin Origami Circle. With a
                background in natural science, she brings a unique perspective to paper folding that bridges
                art and science.
              </p>

              <div className="pt-4">
                <h4 className="font-medium text-gray-900 mb-2">Specialties:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-white">
                    Management
                  </Badge>
                  <Badge variant="outline" className="bg-white">
                    Intermediate Origami
                  </Badge>
                  <Badge variant="outline" className="bg-white">
                    Finances
                  </Badge>
                  <Badge variant="outline" className="bg-white">
                    Origami Education
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-24 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Clint Wang - President"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl opacity-20" />
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl opacity-20" />
            </div>

            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 mb-2">
                  Director of Technology
                </Badge>
                <h3 className="text-3xl font-bold text-gray-900">Clint Wang</h3>
                <p className="text-lg text-gray-600 mt-2">Software Engineer</p>
              </div>

              <p className="text-gray-600">
                Clint manages the technology behind Austin Origami Circle and leads advanced folding classes. With a background in computer science, he is an expert at breaking down complex
                design problems found in origami.
              </p>

              <div className="pt-4">
                <h4 className="font-medium text-gray-900 mb-2">Specialties:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-white">
                    Advanced Origami
                  </Badge>
                  <Badge variant="outline" className="bg-white">
                    Software
                  </Badge>
                  <Badge variant="outline" className="bg-white">
                    Tessellations
                  </Badge>
                  <Badge variant="outline" className="bg-white">
                    Origami Design
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Officers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Officers</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Officer 1 */}
            <Card className="border-0 shadow-sm overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Erik Ohran"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 mb-2">
                    Treasurer
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900">Erik Ohran</h3>
                  <p className="text-sm text-gray-600">College of Natural Sciences</p>
                </div>
                <p className="text-gray-600 text-sm">
                  Insert Desc.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-white text-xs">
                    Geometric Forms
                  </Badge>
                  <Badge variant="outline" className="bg-white text-xs">
                    Architecture
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Officer 2 */}
            <Card className="border-0 shadow-sm overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Sri - Origami Specialist"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Badge variant="secondary" className="bg-pink-100 text-pink-800 mb-2">
                    Officer
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900">Sricharan (Sri) Hari</h3>
                  <p className="text-sm text-gray-600">Origami Specialist</p>
                </div>
                <p className="text-gray-600 text-sm">
                  Insert Desc.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-white text-xs">
                    Animal Models
                  </Badge>
                  <Badge variant="outline" className="bg-white text-xs">
                    Fundraising
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Officer 3 */}
            <Card className="border-0 shadow-sm overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Ivan Truong - Origami Specialist"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 mb-2">
                    Officer
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900">Ivan Truong</h3>
                  <p className="text-sm text-gray-600">Origami Specialist</p>
                </div>
                <p className="text-gray-600 text-sm">

                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-white text-xs">
                    Installations
                  </Badge>
                  <Badge variant="outline" className="bg-white text-xs">
                    Event Planning
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Officer 4 */}
            <Card className="border-0 shadow-sm overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Megan Nguyen - Teaching Officer"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 mb-2">
                    Officer
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900">Megan Nguyen</h3>
                  <p className="text-sm text-gray-600">Origami Specialist</p>
                </div>
                <p className="text-gray-600 text-sm">
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-white text-xs">
                    Education
                  </Badge>
                  <Badge variant="outline" className="bg-white text-xs">
                    Beginner Models
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Officer 5 */}
            <Card className="border-0 shadow-sm overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Dysney"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Badge variant="secondary" className="bg-pink-100 text-pink-800 mb-2">
                    Officer
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900">Dysney</h3>
                  <p className="text-sm text-gray-600">Officer</p>
                </div>
                <p className="text-gray-600 text-sm">
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-white text-xs">
                    Digital Media
                  </Badge>
                  <Badge variant="outline" className="bg-white text-xs">
                    Geometric Design
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Officer 6 */}
            <Card className="border-0 shadow-sm overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Keran - Officer"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 mb-2">
                    Officer
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900">Keran</h3>
                  <p className="text-sm text-gray-600">Officer</p>
                </div>
                <p className="text-gray-600 text-sm">
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-white text-xs">
                    Therapeutic Origami
                  </Badge>
                  <Badge variant="outline" className="bg-white text-xs">
                    Community Service
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Interested in Joining Our Team?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're always looking for passionate origami enthusiasts to help grow our community. Volunteer opportunities
            are available throughout the year.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  )
}
