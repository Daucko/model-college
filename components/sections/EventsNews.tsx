'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const upcomingEvents = [
  {
    id: 1,
    title: 'Annual Inter-House Sports Meet',
    date: '15',
    month: 'NOV',
    location: 'College Grounds',
    href: '/events/sports-meet',
    featured: true,
  },
  {
    id: 2,
    title: 'Science & Arts Exhibition',
    date: '28',
    month: 'NOV',
    location: 'Main Auditorium',
    href: '/events/science-exhibition',
    featured: true,
  },
  {
    id: 3,
    title: 'Winter Charity Drive Begins',
    date: '10',
    month: 'DEC',
    location: 'Campus Wide',
    href: '/events/charity-drive',
    featured: true,
  },
  {
    id: 4,
    title: 'Parent-Teacher Conference',
    date: '22',
    month: 'NOV',
    location: 'Classrooms',
    href: '/events/parent-teacher',
  },
];

const latestNews = [
  {
    id: 1,
    title: 'Annual Science Fair Winners Announced',
    date: 'Oct 20, 2024',
    excerpt:
      'Students showcase innovative projects at the annual science fair competition with outstanding results.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAMYJJ9Y15uq7hdYwe_kLIfrjP5xtZCOr1dJ1z-DvXrTRIFWhadbwYN4X4ptvaGNFoQLsXwAkXz19nY2xA_YMW2wQkOGVW9s6izni7vyrl_NiOU3MBPtGR-rFGa7HTAg0yCESW--TPfR-EA8zXdwlEvrSGeHFf1rKnFQG0D_trrzP5HTaiztCIDLsYvw6_osQYP-YiWkavo0jup2URJ0zo7z00NDkCGYer-pIvpzTDfANfGjgE61F51qBbx2kUaKziLuYLr1MqWq6A',
    href: '/news/science-fair-winners',
    category: 'achievements',
  },
  {
    id: 2,
    title: 'Community Service Initiative Success',
    date: 'Oct 18, 2024',
    excerpt:
      'Students participate in community outreach program, making a positive impact in the local community.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCXjXmbyDmi3i6fm0x1yS9UOQtbdGFb4-kNHn692ThAZRVzyHd7n8dQhh-xoSmLKLA0ONffKy0wHYavc04cDfF6eFngArDkIBO_ypkBE6rfgMFtSyyIjpzg_2CnKTB4BO4kMz0CbelmXhQUxpAmoI7okBUSxdKFIwO0A9UJwxtl4jMKNhNEqIehGUpm9oqpMNPmP8OvjR-RGPmEvbHtB0gqCyh5XHR-Z9yE-TK5tstA4WBxa6lZ0hCMTw2TWw2vmwU3Orycylkp6qeG',
    href: '/news/community-service',
    category: 'community',
  },
  {
    id: 3,
    title: 'Debate Team Wins Regional Championship',
    date: 'Oct 15, 2024',
    excerpt:
      'Model College debate team secures first place in the regional championship competition.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC2KyJO78T1dhqYTzyqxCnBPNry4jGTgevIZe9D4cgYjEM_zYnk_zup1i1-nY3bfKXYOK5ugvR4onVJrh5dhxn8fgF_fZazwQJjj2dDfAXw1KetMC0KTFL524zWhP5DLdXcphBCqoeLrtlQFCBnXGIPKorpbbzK-jqSGsGWmhvDX0ow7z72DrUQv60yBSV1xfkRcnDQeZK514qM7IxY3fur_TrtcWmNnZhqZZLDoXW-TgMbtlYfufwXXKGjvF6SC8zCCYUHopISltrE',
    href: '/news/debate-championship',
    category: 'achievements',
  },
];

const newsCategories = [
  { id: 'all', label: 'All News' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'events', label: 'Events' },
  { id: 'academic', label: 'Academic' },
  { id: 'community', label: 'Community' },
];

export function EventsNews() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Upcoming Events Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">
                Upcoming Events
              </h2>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <Card
                  key={event.id}
                  className="overflow-hidden transition-all duration-300 hover:shadow-lg group cursor-pointer border"
                >
                  <CardContent className="p-0">
                    <Link
                      href={event.href}
                      className="flex items-start gap-4 p-4"
                    >
                      {/* Date Badge */}
                      <div className="text-center font-bold text-primary dark:text-blue-300 shrink-0 min-w-16">
                        <p className="text-2xl leading-none">{event.date}</p>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          {event.month}
                        </p>
                      </div>

                      {/* Event Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <MapPin className="h-3 w-3" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-orange-500 hover:underline">
                            Learn More
                          </span>
                          <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* View All Events Button */}
            <div className="mt-6">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/events" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  View All Events
                </Link>
              </Button>
            </div>
          </div>

          {/* Latest News Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-6 w-1 bg-primary rounded-full" />
                <h2 className="text-3xl font-bold text-foreground">
                  Latest News
                </h2>
              </div>

              {/* News Categories */}
              <div className="hidden md:flex items-center gap-2">
                {newsCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {latestNews.map((news) => (
                <Card
                  key={news.id}
                  className="overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Link href={news.href}>
                    {/* News Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/5" />

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full capitalize">
                          {news.category}
                        </span>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      {/* Date */}
                      <p className="text-sm text-primary dark:text-blue-300 font-medium mb-2">
                        {news.date}
                      </p>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {news.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {news.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="flex items-center gap-1 text-orange-500 font-semibold text-sm group-hover:underline">
                        Read More
                        <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}

              {/* View All News Card */}
              <Card className="flex items-center justify-center bg-blue-50 dark:bg-blue-900/20 border-2 border-dashed border-blue-200 dark:border-blue-800 group hover:shadow-lg transition-all">
                <Link
                  href="/news"
                  className="text-center p-8 w-full h-full flex flex-col items-center justify-center"
                >
                  <div className="text-primary dark:text-blue-400 text-lg font-semibold mb-2 group-hover:underline">
                    View All News
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    Explore more stories
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Card>
            </div>

            {/* Mobile Categories */}
            <div className="mt-6 md:hidden">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
                {newsCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant="outline"
                    size="sm"
                    className="whitespace-nowrap shrink-0"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <div className="text-2xl md:text-3xl font-bold text-primary dark:text-blue-300 mb-2">
              50+
            </div>
            <div className="text-sm text-muted-foreground">
              Events This Year
            </div>
          </div>
          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <div className="text-2xl md:text-3xl font-bold text-primary dark:text-blue-300 mb-2">
              200+
            </div>
            <div className="text-sm text-muted-foreground">News Articles</div>
          </div>
          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <div className="text-2xl md:text-3xl font-bold text-primary dark:text-blue-300 mb-2">
              15+
            </div>
            <div className="text-sm text-muted-foreground">Awards Won</div>
          </div>
          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <div className="text-2xl md:text-3xl font-bold text-primary dark:text-blue-300 mb-2">
              1000+
            </div>
            <div className="text-sm text-muted-foreground">
              Student Participants
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Compact version for smaller layouts
export function CompactEventsNews() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Events */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Upcoming Events
            </h2>
            <div className="space-y-4">
              {upcomingEvents.slice(0, 3).map((event) => (
                <Link
                  key={event.id}
                  href={event.href}
                  className="flex items-center gap-4 p-4 rounded-lg border hover:shadow-md transition-all group"
                >
                  <div className="text-center font-bold text-primary dark:text-blue-300 shrink-0">
                    <p className="text-xl">{event.date}</p>
                    <p className="text-xs uppercase">{event.month}</p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold group-hover:text-primary dark:text-blue-300 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {event.location}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* News */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Latest News
            </h2>
            <div className="space-y-4">
              {latestNews.slice(0, 3).map((news) => (
                <Link
                  key={news.id}
                  href={news.href}
                  className="block p-4 rounded-lg border hover:shadow-md transition-all group"
                >
                  <p className="text-sm text-primary font-medium mb-1">
                    {news.date}
                  </p>
                  <h3 className="font-semibold group-hover:text-primary transition-colors mb-2">
                    {news.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {news.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
