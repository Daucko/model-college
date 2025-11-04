'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  School,
  Users,
  Building,
  Scale,
  Download,
  Shirt,
  Bus,
  ArrowRight,
  GraduationCap,
  House,
  Gavel,
  GraduationCapIcon,
  Landmark,
} from 'lucide-react';
import Link from 'next/link';

export default function StudentsMainPage() {
  const featureCards = [
    {
      icon: GraduationCapIcon,
      title: 'Student Life',
      description: 'Discover campus life, facilities, and daily routines.',
      href: '/students/student-life',
    },
    {
      icon: Users,
      title: 'Clubs & Societies',
      description:
        'Find your passion and get involved in extracurricular activities.',
      href: '/students/clubs-and-societies',
    },
    {
      icon: Landmark,
      title: 'Student Council',
      description:
        'Learn about your student government and how to get involved.',
      href: '/students/student-council',
    },
    {
      icon: Gavel,
      title: 'Code of Conduct',
      description:
        'Understand the school rules and expectations for all students.',
      href: '#',
    },
    {
      icon: House,
      title: 'House System',
      description:
        'Understand the house system and how it fosters community and competition.',
      href: '/students/house-system',
    },
  ];

  const quickLinks = [
    {
      icon: Shirt,
      title: 'Uniform Guidelines',
      description: 'View the official dress code.',
      href: '/students/uniform-guidelines',
    },
    {
      icon: Bus,
      title: 'Transportation',
      description: 'Find bus routes and schedules.',
      href: '/students/transportation',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="flex-1 px-4 sm:px-10 md:px-20 lg:px-40 py-5">
        <div className="max-w-4xl mx-auto flex flex-col flex-1">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="p-4">
              <div
                className="flex min-h-[400px] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-4"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAsUWshwBYIHwKemLbZk0Wf-drvLBQSExbVltkB_s7yd_OVQCOM15UlpXeAKs9zt3Ohy0yKQIn58Aw8eJlY6j9tQuEPwaEDgd3hESN37kBJG9GCQVX2FmlRVg9J4QZ1pA44fShAVKAX4wxvaAmB3FzkqFvkj0WmCEh3Hl5NvN6GA7p-6lslCUZ4qhlUFtSZPI1vVrrZ8WlojXTzV3ffrrwrI_eaimnA-LN4Lqofdbi-HFOh7IzlCQgWgsEFrJOqXhVVZb4yWD2BhqJF")`,
                }}
              >
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-tight md:text-5xl">
                    Welcome, Model College Students!
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal md:text-base max-w-2xl">
                    Your journey to success starts here. Explore everything you
                    need for an enriching and successful experience with us.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
            {featureCards.map((card, index) => (
              <Card
                key={index}
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Link href={card.href}>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <card.icon className="h-10 w-10 text-primary" />
                      <div>
                        <h3 className="text-xl font-bold leading-normal mb-2">
                          {card.title}
                        </h3>
                        <p className="text-sm font-normal leading-normal text-muted-foreground mb-2">
                          {card.description}
                        </p>
                        <p className="text-orange-500 text-sm font-bold leading-normal group-hover:underline">
                          Learn More →
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 mb-12">
            <div className="flex flex-col justify-center gap-6 px-4 py-10 md:gap-8 md:px-10 md:py-16 bg-primary/5 rounded-xl text-center">
              <div className="flex flex-col gap-2 items-center">
                <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl md:font-black max-w-2xl">
                  Your Guide to Success
                </h2>
                <p className="text-base font-normal leading-normal text-muted-foreground max-w-2xl">
                  All the essential information you need in one place. Download
                  the official handbook for detailed guidelines and policies.
                </p>
              </div>
              <div className="flex flex-1 justify-center">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 gap-2 h-12 px-5"
                >
                  <Download className="h-5 w-5" />
                  Download Student Handbook (PDF)
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="px-4 pb-3 pt-5">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-primary mb-4 text-center">
              Additional Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <Card
                  key={index}
                  className="group cursor-pointer transition-shadow hover:shadow-md"
                >
                  <Link href={link.href}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <link.icon className="h-6 w-6 text-primary" />
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">
                            {link.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {link.description}
                          </p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-orange-500 transition-colors" />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
