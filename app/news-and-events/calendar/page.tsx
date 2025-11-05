'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Event {
  id: string;
  title: string;
  date: Date;
  time: string;
  location: string;
}

export default function FullCalendarPage() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  const events: Event[] = [
    {
      id: '1',
      title: 'Parent-Teacher Conference',
      date: new Date(2023, 10, 15),
      time: '9:00 AM - 3:00 PM',
      location: 'Main Hall',
    },
    {
      id: '2',
      title: 'Annual Art Exhibition',
      date: new Date(2023, 10, 22),
      time: 'All Day',
      location: 'Art Gallery',
    },
    {
      id: '3',
      title: 'Winter Charity Drive Begins',
      date: new Date(2023, 11, 5),
      time: 'All Day',
      location: 'College Campus',
    },
    {
      id: '4',
      title: 'Christmas Break Begins',
      date: new Date(2025, 11, 12),
      time: 'All Day',
      location: 'College Campus',
    },
    {
      id: '5',
      title: 'New Year Celebration',
      date: new Date(2024, 0, 1),
      time: 'All Day',
      location: 'College Campus',
    },
  ];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const navigateYear = (direction: 'prev' | 'next') => {
    setCurrentYear((prev) => (direction === 'prev' ? prev - 1 : prev + 1));
    setSelectedMonth(null);
  };

  const getEventsForMonth = (month: number) => {
    return events.filter(
      (event) =>
        event.date.getMonth() === month &&
        event.date.getFullYear() === currentYear
    );
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const getCalendarDays = (month: number, year: number) => {
    const daysInMonth = getDaysInMonth(month, year);
    const firstDay = getFirstDayOfMonth(month, year);
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

  const getEventsForDay = (day: number | null, month: number) => {
    if (!day) return [];
    const date = new Date(currentYear, month, day);
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  // Add the isEventDay function that was missing
  const isEventDay = (day: number | null, month: number) => {
    if (!day) return false;
    const date = new Date(currentYear, month, day);
    return events.some(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
    );
  };

  const isToday = (day: number | null, month: number) => {
    if (!day) return false;
    const date = new Date(currentYear, month, day);
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  if (selectedMonth !== null) {
    const calendarDays = getCalendarDays(selectedMonth, currentYear);
    const monthEvents = getEventsForMonth(selectedMonth);

    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/news-and-events"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to News & Events
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigateYear('prev')}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h1 className="text-3xl font-bold text-primary">{currentYear}</h1>
              <Button variant="ghost" onClick={() => navigateYear('next')}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Month View */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calendar */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark">
                  {months[selectedMonth]} {currentYear}
                </h2>

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
                    const dayEvents = getEventsForDay(day, selectedMonth);
                    const today = isToday(day, selectedMonth);
                    const hasEvent = isEventDay(day, selectedMonth); // Now using isEventDay

                    return (
                      <div
                        key={index}
                        className={`
                          p-2 text-center text-sm rounded-lg min-h-16 border border-transparent
                          ${!day ? 'invisible' : ''}
                          ${
                            today
                              ? 'bg-primary/20 text-primary font-semibold border-primary/30'
                              : ''
                          }
                          ${
                            hasEvent
                              ? 'bg-orange-500 text-white cursor-pointer hover:bg-orange-600'
                              : 'hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer'
                          }
                          ${
                            !hasEvent && !today && day
                              ? 'text-text-light dark:text-text-dark'
                              : ''
                          }
                        `}
                      >
                        {day}
                        {hasEvent && (
                          <div className="mt-1 space-y-1">
                            {dayEvents.slice(0, 2).map((event, eventIndex) => (
                              <div
                                key={eventIndex}
                                className="text-xs bg-white text-orange-500 px-1 py-0.5 rounded truncate"
                                title={event.title}
                              >
                                {event.title}
                              </div>
                            ))}
                            {dayEvents.length > 2 && (
                              <div className="text-xs text-white/80">
                                +{dayEvents.length - 2} more
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Events List */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-text-light dark:text-text-dark">
                  Events in {months[selectedMonth]}
                </h3>
                {monthEvents.length > 0 ? (
                  <div className="space-y-4">
                    {monthEvents.map((event) => (
                      <div
                        key={event.id}
                        className="border-l-4 border-orange-500 pl-4 py-2"
                      >
                        <h4 className="font-semibold text-text-light dark:text-text-dark">
                          {event.title}
                        </h4>
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                          {event.date.toLocaleDateString()} • {event.time}
                        </p>
                        <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                          {event.location}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-text-muted-light dark:text-text-muted-dark">
                    No events scheduled for {months[selectedMonth]}{' '}
                    {currentYear}
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/news-and-events"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News & Events
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigateYear('prev')}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-4xl font-bold text-primary">{currentYear}</h1>
            <Button variant="ghost" onClick={() => navigateYear('next')}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Year View - Month Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {months.map((month, index) => {
            const monthEvents = getEventsForMonth(index);

            return (
              <Card
                key={month}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedMonth(index)}
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-text-light dark:text-text-dark">
                    {month}
                  </h3>
                  {monthEvents.length > 0 ? (
                    <div className="space-y-2">
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                        {monthEvents.length} event
                        {monthEvents.length !== 1 ? 's' : ''}
                      </p>
                      <div className="space-y-1">
                        {monthEvents.slice(0, 2).map((event) => (
                          <div
                            key={event.id}
                            className="text-xs bg-orange-500 text-white px-2 py-1 rounded truncate"
                            title={event.title}
                          >
                            {event.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                      No events
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
