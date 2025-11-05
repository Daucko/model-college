'use client';

import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import {
  School,
  Heart,
  Volleyball,
  Handshake,
  Plus,
  ChevronDown,
  BookOpen,
  Users,
  Calendar,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';
// import Footer from '@/components/footer';

export default function HowToSupportYourChildPage() {
  const supportSections = [
    {
      id: 'academic-support',
      icon: School,
      title: 'Academic Support',
      content: {
        description:
          'Guidance on creating an effective study environment, tips for managing homework, and strategies for developing strong learning habits.',
        points: [
          'Establish a consistent daily routine for homework and study time.',
          'Create a quiet, dedicated workspace free from distractions.',
          'Encourage your child to ask questions and seek help from teachers when needed.',
          'Review their progress regularly through the parent portal.',
        ],
        button: {
          text: 'View Study Resources',
          href: '#',
          variant: 'default' as const,
        },
      },
    },
    {
      id: 'emotional-wellbeing',
      icon: Heart,
      title: 'Emotional Well-being',
      content: {
        description:
          "Advice on fostering open communication, building resilience, and recognizing signs of stress to support your child's mental and emotional health.",
        points: [
          'Maintain an open dialogue about their feelings and experiences at school.',
          'Teach coping strategies for stress and disappointment.',
          'Promote a healthy balance between academics, social life, and rest.',
          'Be aware of the signs of anxiety or depression and know when to seek professional help.',
        ],
        button: {
          text: 'Contact a Counselor',
          href: '#',
          variant: 'outline' as const,
        },
      },
    },
    {
      id: 'extracurricular-engagement',
      icon: Volleyball,
      title: 'Extracurricular Engagement',
      content: {
        description:
          'Learn about the benefits of extracurricular activities and how to help your child find passions beyond the classroom, fostering teamwork, creativity, and leadership skills.',
        points: [
          'Explore the variety of clubs, sports, and arts programs available.',
          'Encourage them to try new things and discover their interests.',
          'Celebrate effort and participation, not just achievement.',
        ],
        button: {
          text: 'Explore Clubs & Activities',
          href: '#',
          variant: 'default' as const,
        },
      },
    },
    {
      id: 'partnership-with-college',
      icon: Handshake,
      title: 'Partnership with the College',
      content: {
        description:
          "Effective engagement with teachers and staff is vital. Learn the best ways to communicate, stay informed, and collaborate with us for your child's success.",
        points: [
          'Attend parent-teacher meetings and school events.',
          'Utilize the parent portal for updates on grades and attendance.',
          'Communicate proactively with teachers about any concerns or questions.',
        ],
      },
    },
  ];

  const faqs = [
    {
      id: 'faq-1',
      question: 'How much should I help my child with their homework?',
      answer:
        "The goal is to be a guide, not to provide the answers. Help them understand the concepts and encourage them to solve problems independently. If they are consistently struggling, it's a good idea to contact their teacher.",
    },
    {
      id: 'faq-2',
      question: "What's the best way to communicate with my child's teacher?",
      answer:
        'Email is often the most efficient way to ask questions or schedule a meeting. For more detailed discussions, we recommend attending scheduled parent-teacher meetings or requesting a phone call.',
    },
    {
      id: 'faq-3',
      question: 'My child is feeling anxious about school. What should I do?',
      answer:
        'First, listen to their concerns without judgment. Reassure them that their feelings are valid. We encourage you to reach out to our school counseling department, who are trained to provide support and strategies for managing anxiety.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1">
        <div className="flex flex-1 justify-center px-4 sm:px-8 md:px-20 lg:px-40 py-10">
          <div className="flex flex-col w-full max-w-7xl">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-2 pb-4">
              <Link
                href="#"
                className="text-muted-foreground text-base font-medium hover:text-primary transition-colors"
              >
                Home
              </Link>
              <span className="text-muted-foreground text-base font-medium">
                /
              </span>
              <Link
                href="#"
                className="text-muted-foreground text-base font-medium hover:text-primary transition-colors"
              >
                Parents
              </Link>
              <span className="text-muted-foreground text-base font-medium">
                /
              </span>
              <span className="text-foreground text-base font-medium">
                How to Support Your Child
              </span>
            </div>

            {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-3 pb-4">
              <h1 className="text-blue-700 dark:text-blue-400 text-4xl lg:text-5xl font-black leading-tight tracking-tight min-w-72">
                How to Support Your Child
              </h1>
            </div>

            {/* Introduction */}
            <p className="text-foreground text-base font-normal leading-relaxed pb-8 pt-1 max-w-4xl">
              We believe that a strong partnership between parents and the
              college is key to fostering student success. This page offers
              resources and advice to help you support your child&apos;s journey
              at Model College, from their first day in nursery to their final
              exams in secondary school.
            </p>

            {/* Support Sections Accordion */}
            <div className="flex flex-col gap-4 max-w-4xl">
              <Accordion
                type="single"
                collapsible
                defaultValue="academic-support"
                className="space-y-4"
              >
                {supportSections.map((section) => {
                  const IconComponent = section.icon;
                  return (
                    <AccordionItem
                      key={section.id}
                      value={section.id}
                      className="border-border rounded-lg bg-card"
                    >
                      <AccordionTrigger className="hover:no-underline px-6 py-3 [&[data-state=open]]:text-blue-700 [&[data-state=open]]:dark:text-blue-400">
                        <div className="flex items-center gap-4">
                          <IconComponent className="h-6 w-6 text-orange-500" />
                          <p className="text-lg font-bold leading-normal text-left">
                            {section.title}
                          </p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 space-y-4">
                        <p className="text-foreground text-base leading-relaxed">
                          {section.content.description}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-foreground">
                          {section.content.points.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                        {section.content.button && (
                          <Button
                            variant={section.content.button.variant}
                            className="mt-2"
                            asChild
                          >
                            <Link href={section.content.button.href}>
                              {section.content.button.text}
                            </Link>
                          </Button>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>

            {/* FAQ Section */}
            <div className="mt-16 max-w-4xl">
              <h2 className="text-blue-700 dark:text-blue-400 text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>

              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border-border rounded-lg bg-card"
                  >
                    <AccordionTrigger className="hover:no-underline px-6 py-3 text-base font-medium [&[data-state=open]]:text-blue-700 [&[data-state=open]]:dark:text-blue-400">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-2 pt-2 text-muted-foreground text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
