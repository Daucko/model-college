'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Download,
  ChevronDown,
  Phone,
  Mail,
  Calendar,
  Edit3,
  Inbox,
  CheckCircle2,
} from 'lucide-react';

export default function AdmissionsProcess() {
  const [selectedSection, setSelectedSection] = useState('KG');
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]); // First FAQ open by default

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const sections = ['KG', 'Nursery', 'Primary', 'Secondary'];

  const timelineSteps = [
    {
      step: 1,
      title: 'Check Eligibility & Criteria',
      description:
        'Review age and academic prerequisites for the selected section to ensure your child meets the requirements for admission.',
    },
    {
      step: 2,
      title: 'Complete the Application Form',
      description:
        'Download the form online or collect a physical copy from the admissions office. Fill it out accurately and completely.',
    },
    {
      step: 3,
      title: 'Prepare Required Documents',
      description:
        'Gather all necessary paperwork. Ensure all documents are clear, legible, and up-to-date as per the checklist.',
    },
    {
      step: 4,
      title: 'Submit Your Application',
      description:
        'Submit the completed form and all required documents either online through our portal or in-person at the admissions office before the deadline.',
    },
    {
      step: 5,
      title: 'Attend Interview / Entrance Test',
      description:
        'Details about the assessment process and scheduling will be communicated to eligible candidates via email.',
    },
    {
      step: 6,
      title: 'Receive Admission Decision',
      description:
        'Admission decisions will be sent out via email and published on the student portal on the announced date.',
    },
  ];

  const documents = [
    'Completed Application Form',
    "Student's Birth Certificate",
    'Previous School Report Cards',
    'Passport-sized Photographs (x4)',
    'Proof of Residence',
  ];

  const importantDates = [
    {
      icon: Calendar,
      title: 'Application Deadline',
      date: 'October 31, 2024',
      color: 'text-orange-500',
    },
    {
      icon: Edit3,
      title: 'Entrance Test',
      date: 'November 15, 2024',
      color: 'text-orange-500',
    },
    {
      icon: Inbox,
      title: 'Decision Announcement',
      date: 'December 5, 2024',
      color: 'text-orange-500',
    },
  ];

  const faqs = [
    {
      question: 'What is the age criteria for KG?',
      answer:
        'For admission to Kindergarten (KG), the child must be at least 4 years old as of June 1st of the academic year.',
    },
    {
      question: 'Is there an entrance test for primary school?',
      answer:
        'Yes, there is a basic assessment test for English, Math, and Science for students applying for Primary grades.',
    },
    {
      question: 'Can I submit the application online?',
      answer:
        "Absolutely. You can complete and submit the entire application through our online admissions portal. The 'Apply Now' button on our website will direct you there.",
    },
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-foreground">
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <a
            className="text-base font-medium leading-normal text-gray-500 dark:text-gray-400 hover:text-primary"
            href="#"
          >
            Home
          </a>
          <span className="text-base font-medium leading-normal text-gray-500 dark:text-gray-400">
            /
          </span>
          <a
            className="text-base font-medium leading-normal text-gray-500 dark:text-gray-400 hover:text-primary"
            href="#"
          >
            Admissions
          </a>
          <span className="text-base font-medium leading-normal text-gray-500 dark:text-gray-400">
            /
          </span>
          <span className="text-base font-medium leading-normal text-foreground">
            Admissions Process
          </span>
        </div>

        {/* Page Heading */}
        <div className="flex flex-wrap justify-between gap-3 mb-8">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-black leading-tight tracking-tight text-foreground">
              Admissions Process
            </h1>
            <p className="max-w-3xl text-base font-normal leading-normal text-gray-600 dark:text-gray-400">
              Welcome to Model College. We are delighted you are considering us
              for your education. Below you will find a clear, step-by-step
              guide to our admissions process. Please select the appropriate
              section to begin.
            </p>
          </div>
        </div>

        {/* Segmented Buttons */}
        <div className="flex py-3 mb-8">
          <div className="flex h-12 w-full flex-1 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 p-1.5">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setSelectedSection(section)}
                className={`flex h-full grow cursor-pointer items-center justify-center overflow-hidden rounded-lg px-2 text-sm font-medium leading-normal transition-colors ${
                  selectedSection === section
                    ? 'bg-white text-foreground shadow-sm dark:bg-gray-700 dark:text-white'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                <span className="truncate">{section}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Timeline and Sidebar */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_300px] gap-8 py-6">
          {/* Timeline */}
          <div className="md:col-span-1">
            <div className="grid grid-cols-[auto_1fr] gap-x-4">
              {timelineSteps.map((step, index) => (
                <div key={step.step} className="contents">
                  <div className="flex flex-col items-center gap-1.5 pt-1.5">
                    <div className="flex size-8 items-center justify-center rounded-full bg-orange-500 text-white font-bold text-sm">
                      {step.step}
                    </div>
                    {index < timelineSteps.length - 1 && (
                      <div className="h-full w-0.5 grow bg-gray-200 dark:bg-gray-700" />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col pb-8">
                    <p className="text-lg font-semibold leading-normal text-foreground">
                      {step.title}
                    </p>
                    <p className="mt-1 text-base font-normal leading-normal text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                    {step.step === 2 && (
                      <Button
                        variant="outline"
                        className="mt-4 max-w-max gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download Form
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px bg-gray-200 dark:bg-gray-700 h-full" />

          {/* Sidebar */}
          <aside className="space-y-6 md:col-span-1">
            {/* Document Checklist */}
            <Card>
              <CardHeader>
                <CardTitle>Document Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Important Dates */}
            <Card>
              <CardHeader>
                <CardTitle>Important Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {importantDates.map((date, index) => {
                    const IconComponent = date.icon;
                    return (
                      <li key={index} className="flex items-center gap-3">
                        <IconComponent className={`h-5 w-5 ${date.color}`} />
                        <div>
                          <p className="font-medium text-foreground">
                            {date.title}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {date.date}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </aside>
        </div>

        {/* FAQ and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 border-t border-gray-200 dark:border-gray-700">
          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex w-full cursor-pointer items-center justify-between p-4 font-medium"
                    >
                      {faq.question}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                          openFaqs.includes(index) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaqs.includes(index) && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-600 dark:text-gray-400">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact */}
          <Card className="bg-primary/10 dark:bg-primary/20 border-none">
            <CardContent className="p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-foreground">Need Help?</h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                If you have any questions about the admissions process, please
                don't hesitate to reach out to our admissions office.
              </p>
              <div className="mt-4 space-y-3">
                <p className="flex items-center gap-3 font-medium text-primary">
                  <Phone className="h-5 w-5" />
                  <span>+1 (123) 456-7890</span>
                </p>
                <p className="flex items-center gap-3 font-medium text-primary">
                  <Mail className="h-5 w-5" />
                  <span>admissions@modelcollege.edu</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
