'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from 'lucide-react';

export default function EligibilityCriteria() {
  const [openSections, setOpenSections] = useState<number[]>([0]); // First section open by default

  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const eligibilitySections = [
    {
      title: 'KG & Nursery Section',
      color: 'text-primary',
      content: (
        <>
          <p>
            Admission to our early years program is based on age and readiness
            for a structured learning environment. We focus on a holistic
            approach to welcome our youngest learners.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                KG Applicants:
              </span>{' '}
              Must be 3 years old by March 31st of the admission year.
            </li>
            <li>
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                Nursery Applicants:
              </span>{' '}
              Must be 4 years old by March 31st of the admission year.
            </li>
            <li>
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                Required Documents:
              </span>{' '}
              Original birth certificate, proof of residence, and immunization
              records.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Primary Section (Classes I-V)',
      color: 'text-foreground',
      content: (
        <>
          <p>
            For the primary section, we look for students who have a
            foundational academic background and are eager to learn and grow in
            a dynamic classroom setting.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                Age Criteria:
              </span>{' '}
              Age must align with the class they are applying for (e.g., 6 years
              for Class I by March 31st).
            </li>
            <li>
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                Academic Prerequisites:
              </span>{' '}
              Submission of the previous year's final report card is mandatory.
            </li>
            <li>
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                Language Proficiency:
              </span>{' '}
              Basic proficiency in English is expected for smooth transition
              into our curriculum.
            </li>
            <li>
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                Assessment:
              </span>{' '}
              A simple interaction or baseline assessment may be conducted.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'Secondary Section (Classes VI-XII)',
      color: 'text-foreground',
      content: (
        <>
          <p>
            Admission to the secondary section is competitive and based on
            academic merit, performance in the entrance test, and an interview.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                Academic Prerequisites:
              </span>{' '}
              Minimum 60% aggregate in the previous qualifying examination.
              Specific subject percentages may be required for certain streams
              in Class XI.
            </li>
            <li>
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                Entrance Test:
              </span>{' '}
              All applicants must appear for and qualify in the school's
              entrance examination covering key subjects.
            </li>
            <li>
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                Interview:
              </span>{' '}
              Shortlisted candidates will be called for a personal interview
              with the admissions committee.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: 'General Requirements',
      color: 'text-foreground',
      content: (
        <>
          <p>
            The following requirements apply to all applicants across all
            sections to complete the admission process.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                Parent Interview:
              </span>{' '}
              An interaction with parents/guardians is a mandatory part of the
              process.
            </li>
            <li>
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                Document Submission:
              </span>{' '}
              All required documents must be submitted in original and photocopy
              format for verification.
            </li>
            <li>
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                Transfer Certificate:
              </span>{' '}
              A Transfer Certificate from the previous school is required for
              admission to Class I and above.
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 max-w-4xl">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 px-4 mb-4">
          <a
            className="text-gray-500 dark:text-gray-400 text-base font-medium leading-normal hover:text-primary"
            href="#"
          >
            Home
          </a>
          <span className="text-gray-500 dark:text-gray-400 text-base font-medium leading-normal">
            /
          </span>
          <a
            className="text-gray-500 dark:text-gray-400 text-base font-medium leading-normal hover:text-primary"
            href="#"
          >
            Admissions
          </a>
          <span className="text-gray-500 dark:text-gray-400 text-base font-medium leading-normal">
            /
          </span>
          <span className="text-foreground text-base font-medium leading-normal">
            Eligibility Criteria
          </span>
        </div>

        {/* Page Heading */}
        <div className="flex flex-wrap justify-between gap-3 p-4 mb-8">
          <div className="flex min-w-72 flex-col gap-3">
            <h1 className="text-primary text-4xl font-black leading-tight tracking-tight">
              Eligibility Criteria
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-normal">
              Find out the admission requirements for each school section to
              begin your journey with us. Our criteria ensure that all students
              are well-prepared for our academic environment.
            </p>
          </div>
        </div>

        {/* Eligibility Accordions */}
        <div className="flex flex-col p-4 gap-4">
          {eligibilitySections.map((section, index) => (
            <Card
              key={index}
              className="border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark/50"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleSection(index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 p-4 list-none"
                >
                  <p
                    className={`${section.color} text-lg font-bold leading-normal text-left`}
                  >
                    {section.title}
                  </p>
                  <ChevronDown
                    className={`h-5 w-5 text-foreground transition-transform duration-300 ${
                      openSections.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openSections.includes(index) && (
                  <div className="px-4 pb-4 text-gray-600 dark:text-gray-300 text-sm font-normal leading-relaxed space-y-3">
                    {section.content}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-4">
          <h2 className="text-foreground text-2xl font-bold leading-tight tracking-tight pb-3 pt-5 text-center">
            Ready to Apply?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
            If you meet the criteria and are ready to join the Model College
            family, start your application today. For any queries, feel free to
            reach out to our admissions office.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="h-12 px-6 bg-orange-500 hover:bg-orange-600 text-white text-base font-bold">
              Apply Now
            </Button>
            <Button
              variant="outline"
              className="h-12 px-6 bg-primary/20 text-primary hover:bg-primary/30 dark:bg-primary/30 dark:text-white dark:hover:bg-primary/40"
            >
              Contact Admissions
            </Button>
          </div>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
            Have more questions? Check out our{' '}
            <a className="text-primary font-medium underline" href="#">
              FAQ page
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
