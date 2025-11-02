// app/academics/calendar/page.tsx
'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

interface CalendarEvent {
  date: number;
  type: 'exam' | 'holiday' | 'event' | 'meeting' | 'midterm';
  label: string;
}

export default function AcademicCalendarPage() {
  const [academicYear, setAcademicYear] = useState('2024-2025');
  const [selectedSection, setSelectedSection] = useState('All');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Sample calendar data for October 2024
  const calendarEvents: CalendarEvent[] = [
    { date: 7, type: 'midterm', label: 'Mid-term' },
    { date: 8, type: 'exam', label: 'Exam' },
    { date: 9, type: 'exam', label: 'Exam' },
    { date: 10, type: 'exam', label: 'Exam' },
    { date: 17, type: 'event', label: 'Sports Day' },
    { date: 22, type: 'holiday', label: 'Holiday' },
    { date: 25, type: 'meeting', label: 'PTM' },
  ];

  const getEventColor = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'exam':
        return 'bg-orange-500';
      case 'holiday':
        return 'bg-primary';
      case 'event':
        return 'bg-green-500';
      case 'meeting':
        return 'bg-purple-500';
      case 'midterm':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getEventTextColor = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'exam':
        return 'text-orange-600 dark:text-orange-400';
      case 'holiday':
        return 'text-primary';
      case 'event':
        return 'text-green-600 dark:text-green-400';
      case 'meeting':
        return 'text-purple-600 dark:text-purple-400';
      case 'midterm':
        return 'text-orange-600 dark:text-orange-400';
      default:
        return 'text-gray-600';
    }
  };

  const monthNames = [
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

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Generate calendar days
  const calendarDays = [];

  // Previous month's days
  const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    calendarDays.push({ day: prevMonthDays - i, isCurrentMonth: false });
  }

  // Current month's days
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({ day: i, isCurrentMonth: true });
  }

  // Next month's days
  const totalCells = 42; // 6 weeks
  const remainingDays = totalCells - calendarDays.length;
  for (let i = 1; i <= remainingDays; i++) {
    calendarDays.push({ day: i, isCurrentMonth: false });
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const handleDownloadPDF = () => {
    // Implement PDF download functionality
    console.log('Downloading PDF for:', academicYear, selectedSection);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="flex flex-wrap gap-2 mb-4">
            <a
              className="text-muted-foreground text-sm font-medium hover:text-primary"
              href="/"
            >
              Home
            </a>
            <span className="text-muted-foreground text-sm font-medium">/</span>
            <a
              className="text-muted-foreground text-sm font-medium hover:text-primary"
              href="/academics"
            >
              Academics
            </a>
            <span className="text-muted-foreground text-sm font-medium">/</span>
            <span className="text-foreground text-sm font-medium">
              Academic Calendar
            </span>
          </div>

          {/* Page Header */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <h1 className="text-primary text-4xl font-black leading-tight tracking-tight">
              Academic Calendar
            </h1>
          </div>

          {/* Filters and Controls */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                  {/* Academic Year Selector */}
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <label
                      className="text-sm font-medium whitespace-nowrap"
                      htmlFor="academic-year"
                    >
                      Academic Year:
                    </label>
                    <Select
                      value={academicYear}
                      onValueChange={setAcademicYear}
                    >
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024-2025">2024-2025</SelectItem>
                        <SelectItem value="2023-2024">2023-2024</SelectItem>
                        <SelectItem value="2022-2023">2022-2023</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Section Tabs */}
                  <Tabs
                    value={selectedSection}
                    onValueChange={setSelectedSection}
                    className="w-full sm:w-auto"
                  >
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="All">All</TabsTrigger>
                      <TabsTrigger value="Primary">Primary</TabsTrigger>
                      <TabsTrigger value="Secondary">Secondary</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* Download Button */}
                <Button
                  onClick={handleDownloadPDF}
                  className="bg-orange-accent hover:bg-orange-accent/90 w-full md:w-auto"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Calendar */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigateMonth('prev')}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <CardTitle className="text-xl">
                  {monthNames[currentMonth]} {currentYear}
                </CardTitle>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigateMonth('next')}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Calendar Header */}
              <div className="grid grid-cols-7 gap-px text-center text-sm font-medium border rounded-t-lg">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                  (day) => (
                    <div key={day} className="py-2 bg-muted/50">
                      {day}
                    </div>
                  )
                )}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-px border border-t-0 rounded-b-lg">
                {calendarDays.map(({ day, isCurrentMonth }, index) => {
                  const event = calendarEvents.find(
                    (e) => e.date === day && isCurrentMonth
                  );
                  const isToday =
                    isCurrentMonth &&
                    day === new Date().getDate() &&
                    currentMonth === new Date().getMonth() &&
                    currentYear === new Date().getFullYear();

                  return (
                    <div
                      key={index}
                      className={`
                        min-h-28 p-2 border-r border-b
                        ${
                          isCurrentMonth
                            ? 'bg-background'
                            : 'bg-muted/30 text-muted-foreground'
                        }
                        ${isToday ? 'ring-2 ring-primary ring-inset' : ''}
                      `}
                    >
                      <div
                        className={`
                        text-sm font-medium mb-1
                        ${
                          isCurrentMonth
                            ? 'text-foreground'
                            : 'text-muted-foreground'
                        }
                      `}
                      >
                        {day}
                      </div>
                      {event && (
                        <div
                          className={`flex items-center gap-1 text-xs font-semibold ${getEventTextColor(
                            event.type
                          )}`}
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${getEventColor(
                              event.type
                            )}`}
                          />
                          {event.label}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Event Legend */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Event Legend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500" />
                  <span className="text-sm font-medium">Exams & Mid-terms</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-sm font-medium">Holidays</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-sm font-medium">School Events</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500" />
                  <span className="text-sm font-medium">
                    Parent-Teacher Meetings
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
