'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Download, Printer, CalendarPlus } from 'lucide-react';

export default function ImportantDates() {
  const [activeView, setActiveView] = useState('list');
  const [selectedSection, setSelectedSection] = useState('all');
  const [selectedYear, setSelectedYear] = useState('2024-2025');

  const importantDates = [
    {
      id: 1,
      date: 'Oct 15, 2024',
      day: 'Tuesday',
      title: 'Application Period Opens',
      sections: ['all'],
      accentColor: 'bg-orange-500',
      isHighlighted: true,
    },
    {
      id: 2,
      date: 'Dec 20, 2024',
      day: 'Friday',
      title: 'Application Period Closes',
      sections: ['all'],
      accentColor: 'bg-gray-300 dark:bg-gray-600',
      isHighlighted: false,
    },
    {
      id: 3,
      date: 'Jan 10 - 15, 2025',
      day: 'Multi-day event',
      title: 'Entrance Exams',
      sections: ['primary', 'secondary'],
      accentColor: 'bg-gray-300 dark:bg-gray-600',
      isHighlighted: false,
    },
    {
      id: 4,
      date: 'Feb 01, 2025',
      day: 'Saturday',
      title: 'Admission Results Announcement',
      sections: ['kg', 'nursery', 'primary', 'secondary'],
      accentColor: 'bg-gray-300 dark:bg-gray-600',
      isHighlighted: false,
    },
  ];

  const sectionColors = {
    all: 'bg-primary/20 text-primary dark:bg-blue-300/20 dark:text-blue-300',
    kg: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
    nursery:
      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
    primary:
      'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
    secondary:
      'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300',
  };

  const getSectionLabel = (section: string) => {
    const labels: { [key: string]: string } = {
      all: 'All Sections',
      kg: 'KG',
      nursery: 'Nursery',
      primary: 'Primary',
      secondary: 'Secondary',
    };
    return labels[section] || section;
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-[#333333] dark:text-gray-200">
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-5xl">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <a
            className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary"
            href="#"
          >
            Home
          </a>
          <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">
            /
          </span>
          <a
            className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary"
            href="#"
          >
            Admissions
          </a>
          <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">
            /
          </span>
          <span className="text-[#333333] dark:text-white text-sm font-medium leading-normal">
            Important Dates
          </span>
        </div>

        {/* Page Heading */}
        <div className="flex flex-col gap-3 mb-8">
          <h1 className="text-primary dark:text-blue-400 text-4xl md:text-5xl font-black leading-tight tracking-tight">
            Important Dates for Admission
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-normal max-w-3xl">
            Stay updated with all critical admission deadlines for the upcoming
            academic year. Use the filters below to find the dates relevant to
            you.
          </p>
        </div>

        {/* Filters and View Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex gap-3 flex-wrap">
            <Button variant="outline" className="h-10 gap-2">
              School Section: All
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="h-10 gap-2">
              Academic Year: 2024-2025
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex h-10 w-full md:w-auto items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
            <button
              onClick={() => setActiveView('list')}
              className={`flex h-full grow items-center justify-center overflow-hidden rounded-md px-4 text-sm font-medium leading-normal transition-colors ${
                activeView === 'list'
                  ? 'bg-white dark:bg-gray-700 shadow-sm text-primary dark:text-blue-300'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              List View
            </button>
            <button
              onClick={() => setActiveView('calendar')}
              className={`flex h-full grow items-center justify-center overflow-hidden rounded-md px-4 text-sm font-medium leading-normal transition-colors ${
                activeView === 'calendar'
                  ? 'bg-white dark:bg-gray-700 shadow-sm text-primary dark:text-blue-300'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              Calendar View
            </button>
          </div>
        </div>

        {/* Dates List */}
        <div className="space-y-4">
          {importantDates.map((date) => (
            <Card
              key={date.id}
              className={`p-6 rounded-xl border ${
                date.isHighlighted
                  ? 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700'
                  : 'border-transparent'
              }`}
            >
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Date Section */}
                  <div className="md:col-span-3 flex items-center gap-4">
                    <div
                      className={`w-1.5 h-16 ${date.accentColor} rounded-full`}
                    />
                    <div>
                      <p className="text-lg font-bold text-[#333333] dark:text-white">
                        {date.date}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {date.day}
                      </p>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="md:col-span-6">
                    <h3 className="font-bold text-lg text-[#333333] dark:text-white">
                      {date.title}
                    </h3>
                    <div className="flex gap-2 mt-1 flex-wrap">
                      {date.sections.map((section) => (
                        <Badge
                          key={section}
                          variant="secondary"
                          className={`text-xs font-semibold py-1 px-2.5 rounded-full ${
                            sectionColors[section as keyof typeof sectionColors]
                          }`}
                        >
                          {getSectionLabel(section)}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="md:col-span-3 flex justify-start md:justify-end items-center gap-2">
                    <Button variant="outline" className="h-9 gap-2">
                      <CalendarPlus className="h-4 w-4" />
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <Button className="h-11 gap-2.5 bg-primary hover:bg-blue-800 text-white">
            <Download className="h-5 w-5" />
            Download Admission Schedule (PDF)
          </Button>
          <Button variant="outline" className="h-11 gap-2.5">
            <Printer className="h-5 w-5" />
            Print this Page
          </Button>
        </div>
      </div>
    </div>
  );
}
