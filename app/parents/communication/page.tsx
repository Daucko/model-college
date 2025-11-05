'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ChevronDown,
  School,
  Book,
  Calendar,
  DoorOpen,
  PhoneCall,
} from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: string | React.ReactNode;
  isOpen?: boolean;
}

export default function CommunicationGuidelines() {
  const [accordionItems, setAccordionItems] = useState<AccordionItem[]>([
    {
      id: 'academic',
      title: 'Academic Communication',
      content: (
        <ul className="list-disc space-y-2 pl-5">
          <li>
            For academic matters, please contact teachers via the school portal
            or email.
          </li>
          <li>
            Parent-teacher meetings can be scheduled through the main office.
          </li>
          <li>
            Student progress reports are available 24/7 on the parent portal.
          </li>
        </ul>
      ),
      isOpen: true,
    },
    {
      id: 'administrative',
      title: 'Administrative Queries',
      content:
        'Contact the administrative office for inquiries related to fees, admissions, transport, and official documentation. Office hours are from 8:00 AM to 4:00 PM on weekdays.',
      isOpen: false,
    },
    {
      id: 'welfare',
      title: 'Student Welfare & Absences',
      content:
        'Please report any student absence or tardiness before 8:30 AM by calling the main office or using the "Report an Absence" button. For welfare concerns, please contact the school counselor directly.',
      isOpen: false,
    },
    {
      id: 'emergency',
      title: 'Emergency Procedures',
      content:
        'In case of an emergency, the college will communicate via SMS alerts and our official mobile app. Please ensure your contact details are always up-to-date in the school portal. For urgent matters, call our emergency hotline.',
      isOpen: false,
    },
  ]);

  const toggleAccordion = (id: string) => {
    setAccordionItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const quickContacts = [
    {
      title: "Principal's Office",
      email: 'principal@modelcollege.edu',
      phone: '(123) 456-7890',
    },
    {
      title: 'Admissions Desk',
      email: 'admissions@modelcollege.edu',
      phone: '(123) 456-7891',
    },
    {
      title: 'School Nurse',
      email: 'nurse@modelcollege.edu',
      phone: '(123) 456-7892',
    },
  ];

  const relatedLinks = [
    { icon: Book, text: 'Parent Handbook', href: '#' },
    { icon: Calendar, text: 'School Calendar', href: '#' },
    { icon: DoorOpen, text: 'Parent Portal Login', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Breadcrumbs */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <a className="hover:text-primary cursor-pointer">Home</a>
          <ChevronDown className="h-4 w-4 rotate-90" />
          <a className="hover:text-primary cursor-pointer">Parents</a>
          <ChevronDown className="h-4 w-4 rotate-90" />
          <span className="font-medium text-[#333333] dark:text-gray-200">
            Communication Guidelines
          </span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Page Header */}
            <div className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
              <h1 className="text-4xl font-black leading-tight tracking-tight text-[#333333] dark:text-white">
                Communication Guidelines
              </h1>
              <p className="mt-3 text-base font-normal leading-normal text-gray-600 dark:text-gray-400">
                Clear communication is vital for a successful partnership
                between the college and our parents. This page outlines the best
                ways to get in touch with us.
              </p>
            </div>

            {/* Accordions */}
            <div className="space-y-4">
              {accordionItems.map((item) => (
                <Card
                  key={item.id}
                  className="border-gray-200 dark:border-gray-700 bg-background-light dark:bg-gray-800/50"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="flex w-full cursor-pointer list-none items-center justify-between p-4"
                  >
                    <span className="text-base font-medium text-[#333333] dark:text-white">
                      {item.title}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        item.isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {item.isOpen && (
                    <CardContent className="border-t border-gray-200 dark:border-gray-700 p-4 text-sm text-gray-600 dark:text-gray-400">
                      {item.content}
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Quick Contacts */}
            <div>
              <h3 className="mb-4 text-lg font-bold leading-tight tracking-tight text-[#333333] dark:text-white">
                Quick Contacts
              </h3>
              <div className="space-y-4">
                {quickContacts.map((contact, index) => (
                  <Card
                    key={index}
                    className="border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
                  >
                    <CardContent className="p-4">
                      <p className="font-semibold text-[#333333] dark:text-white">
                        {contact.title}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {contact.email}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {contact.phone}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Report Absence Button */}
            <div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-white py-3">
                <PhoneCall className="h-4 w-4 mr-2" />
                Report an Absence
              </Button>
            </div>

            {/* Related Links */}
            <div>
              <h3 className="mb-4 text-lg font-bold leading-tight tracking-tight text-[#333333] dark:text-white">
                Related Links
              </h3>
              <nav className="flex flex-col space-y-2">
                {relatedLinks.map((link, index) => (
                  <a
                    key={index}
                    className="flex items-center gap-2 rounded-lg p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                    href={link.href}
                  >
                    <link.icon className="h-5 w-5" />
                    <span>{link.text}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
