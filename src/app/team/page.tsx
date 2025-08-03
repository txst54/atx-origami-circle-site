import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";

type Officer = {
  id: number;
  name: string;
  title: string;
  major: string;
  description: string;
  profileUrl: string | null;
  profileAlt: string;
  tags: string[];
};

export default async function TeamPage() {
  const res = await fetch(
    `${STRAPI_URL}/api/officers?populate=profile&sort=title:asc`,
    {
      next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
    }
  );
  if (!res.ok) {
    console.error("Failed to fetch officers from Strapi");
    return <div className="text-center text-red-500">Failed to load officers.</div>;
  }

  const data = await res.json();
  const officers: Officer[] = (data.data || []).map((officer: any) => {
    const profileData = officer.profile;
    const profileUrl = profileData?.url
      ? profileData.url.startsWith("http")
        ? profileData.url
        : `${STRAPI_URL}${profileData.url}`
      : null;
    const profileAlt = profileData?.alternativeText || officer.name;

    return {
      id: officer.id,
      name: officer.name,
      title: officer.title,
      major: officer.major,
      description: officer.description,
      profileUrl,
      profileAlt,
      tags: [], // Add if you model it in Strapi
    };
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Team
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl">
            Meet the passionate individuals who lead Austin Origami Circle and
            share their knowledge with our community.
          </p>
        </div>
      </div>

      {/* Officers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Officers</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officers.length === 0 && (
              <div className="col-span-full text-center text-gray-500">
                No officers found.
              </div>
            )}
            {officers.map((officer) => (
              <Card
                key={officer.id}
                className="border-0 shadow-sm overflow-hidden py-0"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={officer.profileUrl || "/placeholder.svg?height=400&width=500"}
                    alt={officer.profileAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <Badge
                      variant="secondary"
                      className="bg-purple-100 text-purple-800 mb-2"
                    >
                      {officer.title}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-900">
                      {officer.name}
                    </h3>
                    <p className="text-sm text-gray-600">{officer.major}</p>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {officer.description || "No description provided."}
                  </p>
                  {officer.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {officer.tags.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="bg-white text-xs"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Interested in Joining Our Team?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're always looking for passionate origami enthusiasts to help
            grow our community. Volunteer opportunities are available throughout
            the year.
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
  );
}
