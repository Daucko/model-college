'use client';

import { useState } from 'react';
import {
  MessageCircle,
  Phone,
  Mail,
  DoorOpen,
  Smartphone,
  Users,
  Clock,
  AlertTriangle,
  ChevronDown,
  Download,
  Calendar,
  FileText,
  Home,
  User,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function ParentsCommunicationGuideline() {
  const [openItems, setOpenItems] = useState<string[]>(['item-1']);

  const contactPoints = [
    {
      title: 'KG & Nursery',
      description:
        'Contact Homeroom Teacher for all academic and pastoral matters.',
    },
    {
      title: 'PriDoorOpen',
      description:
        'Contact Subject Teacher for specific subjects, or Class Teacher for general concerns.',
    },
    {
      title: 'Secondary School',
      description:
        'Contact Head of Year for pastoral care and academic progress.',
    },
  ];

  const communicationChannels = [
    {
      icon: Phone,
      title: 'Phone Calls',
      description: 'For immediate assistance.',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'For non-urgent queries.',
    },
    {
      icon: DoorOpen,
      title: 'Parent Portal',
      description: 'Grades & attendance.',
    },
    {
      icon: Smartphone,
      title: 'School App',
      description: 'Updates & notifications.',
    },
  ];

  const faqItems = [
    {
      id: 'item-1',
      question: 'How do I schedule a meeting with a teacher?',
      answer:
        'The best way to schedule a meeting is to email the teacher directly to arrange a mutually convenient time. You can find their contact details in the Staff Directory on the Parent Portal.',
    },
    {
      id: 'item-2',
      question: 'What is the best way to report an absence?',
      answer:
        "Please report your child's absence before 8:30 AM on the day of absence by calling the main office or using the absence reporting feature in our school app.",
    },
    {
      id: 'item-3',
      question: 'Who do I contact for feedback or concerns?',
      answer:
        'For academic concerns, the Class Teacher is the first point of contact. For broader school feedback, please email our administration team. We value your input.',
    },
    {
      id: 'item-4',
      question: 'Where can I find the school calendar?',
      answer:
        "The full annual school calendar is available on the Parent Portal and can also be downloaded from the 'Downloadable Resources' section on this page.",
    },
  ];

  const downloadableResources = [
    {
      icon: FileText,
      label: 'Contact List',
    },
    {
      icon: Calendar,
      label: 'School Calendar',
    },
  ];

  return (
    <div className="min-h-screen bg-background-light text-text-primary">
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 max-w-4xl mx-auto">
          {/* Breadcrumbs & Page Heading */}
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
              <a className="font-medium text-text-secondary hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                {/* <Home className="h-3 w-3" /> */}
                Home
              </a>
              <span className="font-medium text-text-secondary">/</span>
              <a className="font-medium text-text-secondary hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                {/* <User className="h-3 w-3" /> */}
                Parents
              </a>
              <span className="font-medium text-text-secondary">/</span>
              <span className="font-medium text-text-primary">
                Communication Guidelines
              </span>
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-text-primary sm:text-5xl">
              Communication Guidelines
            </h1>
          </div>

          {/* Introduction Card */}
          <Card className="border-border-color shadow-sm">
            <CardContent className="p-6">
              <p className="text-base leading-relaxed text-text-secondary">
                Welcome! We believe that a strong partnership between the school
                and our parents is key to our students' success. This page
                outlines the best ways to communicate with us to ensure your
                questions are answered efficiently and effectively.
              </p>
            </CardContent>
          </Card>

          {/* Communication Channels Section */}
          <section className="rounded-lg bg-section-light-alt-2 p-6 sm:p-8">
            <div className="grid items-center gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-orange-500 text-primary">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-text-primary">
                  Official Channels
                </h2>
                <p className="mt-2 text-text-secondary">
                  These are the primary ways to stay connected and informed.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 md:col-span-2">
                {communicationChannels.map((channel, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <channel.icon className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-bold text-text-primary">
                        {channel.title}
                      </h3>
                      <p className="text-sm text-text-secondary">
                        {channel.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Points Section */}
          <section className="rounded-lg bg-section-light-alt p-6 sm:p-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="mb-2 flex size-16 items-center justify-center rounded-full bg-teal-400 text-white">
                <Users className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-text-primary">
                Primary Contact Points
              </h2>
              <p className="max-w-2xl text-text-secondary">
                To ensure your query reaches the right person, please follow
                these guidelines. For academic queries, please contact the Class
                Teacher first.
              </p>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {contactPoints.map((point, index) => (
                <Card key={index} className="border-border-color text-center">
                  <CardContent className="p-5">
                    <h3 className="font-bold text-primary">{point.title}</h3>
                    <p className="mt-2 text-sm text-text-secondary">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button className="bg-primary hover:bg-primary/90 gap-2 rounded-full">
                <Phone className="h-4 w-4" />
                View Staff Directory
              </Button>
            </div>
          </section>

          {/* Policies Section */}
          <section className="grid gap-8 md:grid-cols-2">
            <Card className="bg-section-light-alt-2 border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-orange-500 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-text-primary">
                    Response Time Policy
                  </h2>
                </div>
                <p className="mt-4 text-text-secondary">
                  We aim to respond to all emails and portal messages within 48
                  business hours. Thank you for your patience as our staff
                  prioritize teaching and learning.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-red-100 border-red-500 ring-2 ring-red-500">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-red-500 text-white">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-red-900">
                    Emergency Communication
                  </h2>
                </div>
                <p className="mt-4 text-red-800">
                  For urgent matters requiring immediate attention, such as a
                  family emergency or safety concern, please call the main
                  school office directly.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section */}
          <section>
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-text-primary">
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion
              type="multiple"
              value={openItems}
              onValueChange={setOpenItems}
              className="space-y-4"
            >
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-border-color bg-section-light-alt rounded-lg px-4"
                >
                  <AccordionTrigger className="hover:no-underline data-[state=open]:border-b data-[state=open]:border-border-color data-[state=open]:pb-3">
                    <span className="font-medium text-text-primary text-left">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-3">
                    <p className="text-text-secondary">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Downloadable Resources Block */}
          <Card className="border-border-color shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <Download className="h-6 w-6" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl font-bold text-text-primary">
                    Downloadable Resources
                  </h2>
                  <p className="mt-1 text-text-secondary">
                    Quick access to important documents.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  {downloadableResources.map((resource, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="gap-2 rounded-full border-border-color bg-section-light-alt hover:bg-border-color"
                    >
                      <resource.icon className="h-4 w-4" />
                      {resource.label}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
