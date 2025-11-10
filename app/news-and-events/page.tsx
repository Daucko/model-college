'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

interface Event {
  id: string;
  month: string;
  day: string;
  title: string;
  time: string;
  location: string;
  date: Date;
}

export default function NewsAndEvents() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const latestNews: NewsItem[] = [
    {
      id: '1',
      date: 'Oct 12, 2023',
      title: 'Annual Sports Day A Resounding Success',
      description:
        'Students from all sections participated in a day of friendly competition and sportsmanship.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDsjsyEuWmMItJ8lwZ4gbsemtRgjM5r69Z2V6Uy3yllF4T4JjOYPsgYacOgvWHg8y5kTOJ4EeF5r6s1kp_Mtb-pUd83Smw3K6CrlH4aY5-5BlpkUuA4YrIv9_7DeXMPCCCS9EEboqMgSgaC-AqFWkN0RRq7yYCj8YPDb1BYrSO-1MnScPu7gGOWD7VGweSpbLAOpdVPMoDsqPCL5UlmfU9OhBOgUq8fy6vXhk9jYBOCgNl2YYDgaNc2Bbd42GqdtpZWCQ0cesMsIa0U',
      imageAlt: 'Students participating in sports day activities',
    },
    {
      id: '2',
      date: 'Oct 05, 2023',
      title: 'Science Fair Showcases Young Innovators',
      description:
        'From erupting volcanoes to robotic arms, the annual science fair was a hub of creativity.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuATpOAq0PWUNwq-FFWZhRU6gkOKtijiy8LABjsDMEvUVrImnfBT73MNPmEx9jgdBMou5nIojTy0-aD1YDIchREIa1zwzXa2uBxg5CSxkOHn1SII1Md-lzsRJrPqPFuE5wgq5RTGJDQiDJ7wmolJEDSpThWgR59o-5WE0ZkeurXtheQgFYGc50LfmZMsIFjCfPdMxAbiVdjYJNXtPUrlxkoVVnLtgHoOhIzM2KjW3R6oqbA7Mmsi2YO2driTsww0fcGFovObumD4BY7H',
      imageAlt: "Student's science project with a volcano model",
    },
    {
      id: '3',
      date: 'Sep 28, 2023',
      title: "Model College Celebrates Founder's Day",
      description:
        'A look back at our history and the vision that continues to guide us forward.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAOGAmV_Qc22Jiha2tviVv5KmVILaCR0CEvvCJKdvA6YF8Jw1PNd102XnThQ4_4cZ06t5zkNyF3DGy5qqwx55RSMZb9wrv7wjtQt3XokFxIv6rRwwCKuMu5NvDxFUNQ6SEzHOWdYu8C7QGWpeCpXwVPHEsS83Qq4GSwmRihMMxch9M425hyGCfF8WtHIqxXL2IqrO2lD-5hFh074iZkIQRBjlY6SCz2zjF4mIUoowpASINcH3QfcS9YXy_THqBRDgJ10p9Mb9WbvS0y',
      imageAlt: 'College building with celebratory banners',
    },
  ];

  const upcomingEvents: Event[] = [
    {
      id: '1',
      month: 'NOV',
      day: '15',
      title: 'Parent-Teacher Conference',
      time: '9:00 AM - 3:00 PM',
      location: 'Main Hall',
      date: new Date(2023, 10, 15),
    },
    {
      id: '2',
      month: 'NOV',
      day: '22',
      title: 'Annual Art Exhibition',
      time: 'All Day',
      location: 'Art Gallery',
      date: new Date(2023, 10, 22),
    },
    {
      id: '3',
      month: 'DEC',
      day: '05',
      title: 'Winter Charity Drive Begins',
      time: 'All Day',
      location: 'College Campus',
      date: new Date(2023, 11, 5),
    },
  ];

  // Calendar functions
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth((prev) => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const getCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const isEventDay = (day: number | null) => {
    if (!day) return false;
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    return upcomingEvents.some(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  const getEventForDay = (day: number | null) => {
    if (!day) return null;
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    return upcomingEvents.find(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  const formatMonthYear = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const filteredNews = latestNews.filter(
    (news) =>
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const calendarDays = getCalendarDays();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          {/* Page Header */}
          <div className="flex flex-col gap-3 text-center">
            <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight text-primary">
              News & Events
            </h1>
            <p className="text-text-muted-light dark:text-text-muted-dark text-base lg:text-lg font-normal leading-normal max-w-2xl mx-auto">
              Stay up-to-date with the latest happenings, achievements, and
              upcoming events at Model College.
            </p>
          </div>

          {/* Search Bar */}
          <div className="px-4 py-3">
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted-light dark:text-text-muted-dark h-4 w-4" />
              <Input
                type="text"
                placeholder="Search news and events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white border-text-light/10 dark:border-text-dark/20"
              />
            </div>
          </div>

          {/* Latest News Section */}
          <section>
            <div className="flex justify-between items-center px-4 pb-3 pt-5">
              <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-tight">
                Latest News
              </h2>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                View All News
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
              {filteredNews.map((news) => (
                <Card key={news.id} className=" overflow-hidden">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                    style={{ backgroundImage: `url(${news.imageUrl})` }}
                    aria-label={news.imageAlt}
                  />
                  <CardContent className="p-4 flex flex-col grow">
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-1">
                      {news.date}
                    </p>
                    <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
                      {news.title}
                    </p>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal mt-1 grow">
                      {news.description}
                    </p>
                    <a className="text-primary font-bold text-sm mt-3 inline-flex items-center gap-1 group cursor-pointer">
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Upcoming Events & Calendar Section */}
          <section className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Upcoming Events */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center px-4 pb-3 pt-5">
                <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-tight">
                  Upcoming Events
                </h2>
              </div>
              <div className="flex flex-col gap-4 p-4">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="">
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="flex flex-col items-center justify-center bg-primary/10 dark:bg-primary/20 text-primary font-bold p-3 rounded-lg min-w-12">
                        <span className="text-sm">{event.month}</span>
                        <span className="text-2xl">{event.day}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-text-light dark:text-text-dark">
                          {event.title}
                        </h3>
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                          {event.time} | {event.location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Event Calendar */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center px-4 pb-3 pt-5">
                <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-tight">
                  Event Calendar
                </h2>
                <Link
                  href="/news-and-events/calendar"
                  className="text-primary font-bold text-sm hover:underline"
                >
                  See Full Calendar
                </Link>
              </div>
              <Card className="">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigateMonth('prev')}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <h3 className="font-bold text-lg">
                      {formatMonthYear(currentMonth)}
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigateMonth('next')}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  {/* Calendar Header */}
                  <div className="grid grid-cols-7 gap-1 text-center text-sm text-text-muted-light dark:text-text-muted-dark font-medium mb-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                      (day) => (
                        <div key={day} className="p-2">
                          {day}
                        </div>
                      )
                    )}
                  </div>

                  {/* Calendar Days */}
                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((day, index) => {
                      const event = getEventForDay(day);
                      const isToday =
                        day === new Date().getDate() &&
                        currentMonth.getMonth() === new Date().getMonth() &&
                        currentMonth.getFullYear() === new Date().getFullYear();

                      return (
                        <div
                          key={index}
                          className={`
          p-2 text-center text-sm rounded-lg min-h-12 flex flex-col items-center justify-center
          ${!day ? 'text-transparent' : ''}
          ${isToday ? 'bg-primary/20 text-primary font-semibold' : ''}
          ${
            event
              ? 'bg-orange-500 text-white font-semibold cursor-pointer group relative'
              : 'hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer'
          }
          ${
            !event && !isToday && day
              ? 'text-text-light dark:text-text-dark'
              : ''
          }
        `}
                          title={event ? event.title : ''}
                        >
                          {day}
                          {event && (
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full" />
                          )}
                          {event && (
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-current rounded-full" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Newsletter Archive Section */}
          <section className="bg-primary text-white rounded-xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold leading-tight tracking-tight">
                Stay Informed
              </h2>
              <p className="mt-2 text-white/80">
                Catch up on our monthly round-ups and college highlights.
              </p>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white h-12 px-6 shrink-0">
              <Link href="/news-and-events/newsletters-archive">
                Explore Our Newsletter Archive
              </Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}
