'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  Users,
  Shield,
  HeartHandshake,
  MessageSquare,
  Download,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export default function ParentsPage() {
  const resources = [
    {
      icon: BookOpen,
      title: 'Parent Handbook',
      description:
        'Your guide to school rules, procedures, and expectations for a successful academic year.',
      linkText: 'Read Handbook',
      href: '#',
    },
    {
      icon: Users,
      title: 'Parent-Teacher Association',
      description:
        'Join the PTA, view meeting schedules, and learn how you can get involved in our community.',
      linkText: 'Learn More',
      href: '#',
    },
    {
      icon: Shield,
      title: 'Important Policies',
      description:
        'Access key policies on attendance, leave, student conduct, and academic integrity.',
      linkText: 'View Policies',
      href: '#',
    },
    {
      icon: HeartHandshake,
      title: 'Support Your Child',
      description:
        "Find tips and resources for supporting your child's academic and personal growth.",
      linkText: 'Get Tips',
      href: '#',
    },
    {
      icon: MessageSquare,
      title: 'Communication',
      description:
        'Guidelines on how to best contact teachers and staff for effective communication.',
      linkText: 'See Guidelines',
      href: '#',
    },
    {
      icon: Download,
      title: 'Download Forms',
      description:
        'Download essential forms for medical information, school activities, and permissions.',
      linkText: 'Access Forms',
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1">
        <div className="px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="max-w-5xl mx-auto">
            {/* Page Heading */}
            <div className="flex flex-wrap justify-between items-center gap-6 p-6 rounded-xl bg-card border border-border shadow-sm">
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-black tracking-tighter">
                  Welcome, Parents
                </h1>
                <p className="text-muted-foreground text-base font-normal">
                  Your central hub for all the resources you need to support
                  your child&apos;s journey at Model College.
                </p>
              </div>
              <Button
                className="h-12 px-6 text-base font-bold shadow-sm"
                asChild
              >
                <Link href="/parents/portal-login">Parent Portal Login</Link>
              </Button>
            </div>

            {/* Section Header */}
            <h2 className="text-2xl font-bold tracking-tight px-4 pb-3 pt-12">
              Key Resources
            </h2>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer border-border"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-lg">
                          {resource.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <p className="text-muted-foreground text-sm font-normal">
                        {resource.description}
                      </p>
                      <a
                        href={resource.href}
                        className="mt-2 flex items-center gap-2 text-sm font-bold text-orange-500 hover:underline"
                      >
                        {resource.linkText} <ArrowRight className="h-4 w-4" />
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
