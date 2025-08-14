"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Mail, MapPin, Phone, Send } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

export default function ContactPage() {
  const [formType, setFormType] = useState<"general" | "sponsorship" | "installation">("general")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    toast("Message sent!",
    {
      description: "We'll get back to you as soon as possible."
    })

    // Reset form
    e.currentTarget.reset()
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl">
            Get in touch with Austin Origami Circle for sponsorships, installations, or general inquiries.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-600">
                  Have questions about our events, membership, or services? We'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">

                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <div className="flex flex-col">
                      <a href="mailto:austinorigamicircle@gmail.com" className="text-gray-600 hover:text-gray-900">
                      austinorigamicircle@gmail.com
                    </a>
                    <a href="mailto:origamicir@gmail.com" className="text-gray-600 hover:text-gray-900">
                      origamicir@gmail.com
                    </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <a href="tel:+14699824416" className="text-gray-600 hover:text-gray-900">
                      (469) 982-4416
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-medium text-gray-900 mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/origami.circle/" className="text-gray-400 hover:text-gray-900">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
          {/*  <div className="lg:col-span-2">*/}
          {/*    <Card className="border-0 shadow-sm">*/}
          {/*      <CardContent className="p-6 md:p-8">*/}
          {/*        <div className="space-y-6">*/}
          {/*          <div>*/}
          {/*            <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>*/}
          {/*            <p className="text-gray-600">*/}
          {/*              Please select the type of inquiry below to help us direct your message to the right team.*/}
          {/*            </p>*/}
          {/*          </div>*/}

          {/*          <RadioGroup*/}
          {/*            defaultValue="general"*/}
          {/*            className="grid grid-cols-1 md:grid-cols-3 gap-4"*/}
          {/*            onValueChange={(value) => setFormType(value as any)}*/}
          {/*          >*/}
          {/*            <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50">*/}
          {/*              <RadioGroupItem value="general" id="general" />*/}
          {/*              <Label htmlFor="general" className="cursor-pointer">*/}
          {/*                General Inquiry*/}
          {/*              </Label>*/}
          {/*            </div>*/}
          {/*            <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50">*/}
          {/*              <RadioGroupItem value="sponsorship" id="sponsorship" />*/}
          {/*              <Label htmlFor="sponsorship" className="cursor-pointer">*/}
          {/*                Sponsorship*/}
          {/*              </Label>*/}
          {/*            </div>*/}
          {/*            <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-gray-50">*/}
          {/*              <RadioGroupItem value="installation" id="installation" />*/}
          {/*              <Label htmlFor="installation" className="cursor-pointer">*/}
          {/*                Installation Request*/}
          {/*              </Label>*/}
          {/*            </div>*/}
          {/*          </RadioGroup>*/}

          {/*          <form onSubmit={handleSubmit} className="space-y-6">*/}
          {/*            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">*/}
          {/*              <div className="space-y-2">*/}
          {/*                <Label htmlFor="name">Name</Label>*/}
          {/*                <Input id="name" placeholder="Your name" required />*/}
          {/*              </div>*/}
          {/*              <div className="space-y-2">*/}
          {/*                <Label htmlFor="email">Email</Label>*/}
          {/*                <Input id="email" type="email" placeholder="Your email" required />*/}
          {/*              </div>*/}
          {/*            </div>*/}

          {/*            <div className="space-y-2">*/}
          {/*              <Label htmlFor="company">Company/Organization</Label>*/}
          {/*              <Input id="company" placeholder="Your company or organization" />*/}
          {/*            </div>*/}

          {/*            {formType === "sponsorship" && (*/}
          {/*              <div className="space-y-2">*/}
          {/*                <Label htmlFor="sponsorship-type">Sponsorship Type</Label>*/}
          {/*                <Select defaultValue="event">*/}
          {/*                  <SelectTrigger>*/}
          {/*                    <SelectValue placeholder="Select sponsorship type" />*/}
          {/*                  </SelectTrigger>*/}
          {/*                  <SelectContent>*/}
          {/*                    <SelectItem value="event">Event Sponsorship</SelectItem>*/}
          {/*                    <SelectItem value="annual">Annual Sponsorship</SelectItem>*/}
          {/*                    <SelectItem value="workshop">Workshop Sponsorship</SelectItem>*/}
          {/*                    <SelectItem value="materials">Materials Donation</SelectItem>*/}
          {/*                    <SelectItem value="other">Other</SelectItem>*/}
          {/*                  </SelectContent>*/}
          {/*                </Select>*/}
          {/*              </div>*/}
          {/*            )}*/}

          {/*            {formType === "installation" && (*/}
          {/*              <>*/}
          {/*                <div className="space-y-2">*/}
          {/*                  <Label htmlFor="event-date">Event/Installation Date</Label>*/}
          {/*                  <Input id="event-date" type="date" />*/}
          {/*                </div>*/}
          {/*                <div className="space-y-2">*/}
          {/*                  <Label htmlFor="location">Location</Label>*/}
          {/*                  <Input id="location" placeholder="Installation location" />*/}
          {/*                </div>*/}
          {/*              </>*/}
          {/*            )}*/}

          {/*            <div className="space-y-2">*/}
          {/*              <Label htmlFor="message">Message</Label>*/}
          {/*              <Textarea*/}
          {/*                id="message"*/}
          {/*                placeholder={*/}
          {/*                  formType === "general"*/}
          {/*                    ? "How can we help you?"*/}
          {/*                    : formType === "sponsorship"*/}
          {/*                      ? "Tell us about your sponsorship interests and goals."*/}
          {/*                      : "Describe your installation request, including size, theme, and any specific requirements."*/}
          {/*                }*/}
          {/*                rows={5}*/}
          {/*                required*/}
          {/*              />*/}
          {/*            </div>*/}

          {/*            <Button type="submit" className="w-full" disabled={isSubmitting}>*/}
          {/*              {isSubmitting ? (*/}
          {/*                <span className="flex items-center">*/}
          {/*                  <svg*/}
          {/*                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"*/}
          {/*                    xmlns="http://www.w3.org/2000/svg"*/}
          {/*                    fill="none"*/}
          {/*                    viewBox="0 0 24 24"*/}
          {/*                  >*/}
          {/*                    <circle*/}
          {/*                      className="opacity-25"*/}
          {/*                      cx="12"*/}
          {/*                      cy="12"*/}
          {/*                      r="10"*/}
          {/*                      stroke="currentColor"*/}
          {/*                      strokeWidth="4"*/}
          {/*                    ></circle>*/}
          {/*                    <path*/}
          {/*                      className="opacity-75"*/}
          {/*                      fill="currentColor"*/}
          {/*                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"*/}
          {/*                    ></path>*/}
          {/*                  </svg>*/}
          {/*                  Sending...*/}
          {/*                </span>*/}
          {/*              ) : (*/}
          {/*                <span className="flex items-center">*/}
          {/*                  <Send className="mr-2 h-4 w-4" />*/}
          {/*                  Send Message*/}
          {/*                </span>*/}
          {/*              )}*/}
          {/*            </Button>*/}
          {/*          </form>*/}
          {/*        </div>*/}
          {/*      </CardContent>*/}
          {/*    </Card>*/}
          {/*  </div>*/}

            {/* FAQ Section */}
            <div className="lg:col-span-2">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                <p className="mt-4 text-xl text-gray-600">
                  Find answers to common questions about our services and community
                </p>
              </div>

              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">How can I commission an origami installation?</h3>
                  <p className="text-gray-600">
                    You can request an installation by filling out our contact form above and selecting "Installation
                    Request." Our team will get back to you within 48 hours to discuss your needs, timeline, and budget.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">What sponsorship opportunities are available?</h3>
                  <p className="text-gray-600">
                    We offer various sponsorship packages for events, workshops, and annual programs. Sponsors receive
                    recognition in our materials, social media, and events. Please contact us for a detailed sponsorship
                    packet.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Do you offer workshops for corporate events?</h3>
                  <p className="text-gray-600">
                    Yes! We provide customized origami workshops for team-building events, corporate retreats, and special
                    occasions. These can be tailored to your time constraints, skill levels, and thematic preferences.
                  </p>
                </div>

                <div className="pb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    How far in advance should I book for an installation?
                  </h3>
                  <p className="text-gray-600">
                    For small installations, we recommend at least 3-4 weeks notice. For larger or more complex projects,
                    2-3 months is ideal to ensure we can accommodate your timeline and create something truly special.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


    </div>
  )
}
