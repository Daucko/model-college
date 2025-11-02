'use client';

import Link from 'next/link';
import { Calendar, Award, Bell, Clock, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const urgentAnnouncements = [
  {
    id: 1,
    title: 'Final Examination Schedule Released',
    date: 'Oct 24, 2024',
    type: 'academic' as const,
    urgent: true,
    href: '/academics/exam-schedule',
  },
  {
    id: 2,
    title: 'Enrollment for 2025-26 Opens Next Week',
    date: 'Oct 22, 2024',
    type: 'admissions' as const,
    urgent: true,
    href: '/admissions',
  },
  {
    id: 3,
    title: 'Annual Sports Day - Dec 15th',
    date: 'Oct 20, 2024',
    type: 'event' as const,
    urgent: false,
    href: '/events/sports-day',
  },
  {
    id: 4,
    title: 'Science Fair Winners Announced',
    date: 'Oct 18, 2024',
    type: 'achievement' as const,
    urgent: false,
    href: '/news/science-fair',
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Parent-Teacher Meeting',
    date: 'Nov 5, 2024',
    time: '2:00 PM',
    location: 'Main Auditorium',
    href: '/events/parent-teacher',
  },
  {
    id: 2,
    title: 'Inter-House Sports Meet',
    date: 'Nov 15, 2024',
    time: '9:00 AM',
    location: 'College Grounds',
    href: '/events/sports-meet',
  },
];

export function Announcements() {
  return (
    <section className="bg-muted/50 border-b">
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Urgent Announcements */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="h-5 w-5 text-red-500" />
              <h2 className="text-lg font-semibold text-foreground">
                Latest Announcements
              </h2>
            </div>

            <div className="space-y-3">
              {urgentAnnouncements.map((announcement) => (
                <Link
                  key={announcement.id}
                  href={announcement.href}
                  className={cn(
                    'block p-3 rounded-lg border transition-all hover:shadow-md group',
                    announcement.urgent
                      ? 'bg-red-50 border-red-200 hover:bg-red-100 dark:bg-red-950/20 dark:border-red-800 dark:hover:bg-red-950/30'
                      : 'bg-background border-border hover:bg-accent/50'
                  )}
                >
                  <div className="flex items-start gap-3">
                    {announcement.urgent && (
                      <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2 animate-pulse" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3
                          className={cn(
                            'font-medium text-sm group-hover:text-primary transition-colors line-clamp-1',
                            announcement.urgent &&
                              'text-red-700 dark:text-red-300'
                          )}
                        >
                          {announcement.title}
                        </h3>
                        {announcement.urgent && (
                          <span className="px-1.5 py-0.5 text-xs bg-red-100 text-red-700 rounded border border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800">
                            Urgent
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Posted on {announcement.date}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-4">
              <Link
                href="/news-events"
                className="text-sm text-primary hover:underline font-medium inline-flex items-center gap-1"
              >
                View all announcements
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-blue-500" />
              <h2 className="text-lg font-semibold text-foreground">
                Upcoming Events
              </h2>
            </div>

            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <Link
                  key={event.id}
                  href={event.href}
                  className="block p-3 rounded-lg border border-border bg-background hover:bg-accent/50 hover:shadow-md transition-all group"
                >
                  <h3 className="font-medium text-sm mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>

                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      <span>
                        {event.date} at {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-4">
              <Link
                href="/events"
                className="text-sm text-primary hover:underline font-medium inline-flex items-center gap-1"
              >
                View full calendar
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Compact version for smaller screens or tighter layouts
export function CompactAnnouncements() {
  return (
    <section className="bg-muted border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Urgent alerts */}
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Bell className="h-4 w-4 text-red-500" />
              <span>Latest:</span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                {urgentAnnouncements
                  .filter((announcement) => announcement.urgent)
                  .map((announcement) => (
                    <Link
                      key={announcement.id}
                      href={announcement.href}
                      className="flex items-center gap-2 text-sm whitespace-nowrap text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors group"
                    >
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                      <span className="truncate">{announcement.title}</span>
                    </Link>
                  ))}
              </div>
            </div>
          </div>

          {/* Quick event link */}
          <Link
            href="/events"
            className="flex items-center gap-2 text-sm text-primary hover:underline font-medium flex-shrink-0"
          >
            <Calendar className="h-4 w-4" />
            <span>Upcoming Events</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Marquee style for very prominent announcements
export function MarqueeAnnouncements() {
  const urgentItems = urgentAnnouncements.filter((item) => item.urgent);

  return (
    <section className="bg-red-50 border-b border-red-200 dark:bg-red-950/20 dark:border-red-800">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-red-700 dark:text-red-300 font-medium text-sm flex-shrink-0">
            <Bell className="h-4 w-4" />
            <span>Important Updates:</span>
          </div>

          <div className="flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              {urgentItems.map((item, index) => (
                <span key={item.id} className="mx-6 inline-block">
                  <Link
                    href={item.href}
                    className="text-red-700 dark:text-red-300 hover:text-red-800 dark:hover:text-red-200 text-sm font-medium transition-colors"
                  >
                    {item.title}
                    <span className="text-red-600 dark:text-red-400 ml-2">
                      ({item.date})
                    </span>
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
