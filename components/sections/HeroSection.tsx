'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { School, Calendar, ArrowRight } from 'lucide-react';

const announcements = [
  {
    title: 'Final Examination Schedule Released',
    date: 'Posted on: 24 Oct 2024',
    href: '#',
  },
  {
    title: 'Enrollment for 2025-26 Opens Soon',
    date: 'Posted on: 22 Oct 2024',
    href: '#',
  },
  {
    title: 'Annual Sports Day on Dec 15th',
    date: 'Posted on: 20 Oct 2024',
    href: '#',
  },
];

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-[600px] bg-gray-200 dark:bg-gray-800 animate-pulse" />
    );
  }

  return (
    <section
      className="hero-section text-white pt-24 pb-16 min-h-[600px] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Main Content */}
          <div className="md:w-2/3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <School className="h-8 w-8 text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Welcome to Model College
              </h1>
            </div>

            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto md:mx-0 text-blue-50">
              A message from our Principal, fostering an environment of
              excellence and growth for every student.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all"
                asChild
              >
                <Link href="/about-us/principals-message">
                  Read Principal&apos;s Message
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white bg-orange-500 text-white hover:bg-white/10 font-semibold py-3 px-6 rounded-lg transition-all"
                asChild
              >
                <Link href="/admissions">Apply Now</Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 flex flex-wrap gap-6 justify-center md:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-blue-200 text-sm">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2000+</div>
                <div className="text-blue-200 text-sm">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-blue-200 text-sm">Qualified Staff</div>
              </div>
            </div>
          </div>

          {/* Announcements Sidebar */}
          <div className="md:w-1/3 w-full">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-white text-2xl font-semibold text-center flex items-center justify-center gap-2">
                  <Calendar className="h-6 w-6" />
                  Key Announcements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {announcements.map((announcement, index) => (
                  <div
                    key={index}
                    className="border-b border-white/20 pb-3 last:border-b-0 last:pb-0"
                  >
                    <Link href={announcement.href} className="group block">
                      <h3 className="text-white font-medium hover:text-blue-200 transition-colors group-hover:underline">
                        {announcement.title}
                      </h3>
                      <p className="text-blue-200/80 text-sm mt-1">
                        {announcement.date}
                      </p>
                    </Link>
                  </div>
                ))}

                {/* View All Link */}
                <div className="pt-2">
                  <Link
                    href="/news-events"
                    className="inline-flex items-center gap-1 text-blue-200 hover:text-white text-sm font-medium transition-colors group"
                  >
                    View All Announcements
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
