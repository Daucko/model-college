'use client';

import { useState } from 'react';
import { Search, ChevronDown, Download } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Policy {
  id: string;
  title: string;
  description: string;
  isOpen?: boolean;
}

export default function ImportantPolicies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [policies, setPolicies] = useState<Policy[]>([
    {
      id: 'attendance',
      title: 'Attendance Policy',
      description:
        "This policy outlines the college's expectations for student attendance to ensure academic success. Consistent attendance is crucial for learning and development. Parents are requested to inform the administration in case of any absence.",
      isOpen: true,
    },
    {
      id: 'leave',
      title: 'Leave Policy',
      description:
        'This policy details the procedures for applying for student leave, whether for planned absences or emergencies. All leave requests must be submitted through the parent portal for approval.',
      isOpen: false,
    },
    {
      id: 'discipline',
      title: 'Discipline Policy',
      description:
        'Our discipline policy is designed to foster a safe, respectful, and positive learning environment for all students. It outlines the code of conduct and the consequences for misconduct.',
      isOpen: false,
    },
    {
      id: 'uniform',
      title: 'Uniform Policy',
      description:
        'The college uniform promotes a sense of identity and equality among students. This policy provides detailed guidelines on the required attire for all school sections and for different occasions.',
      isOpen: false,
    },
    {
      id: 'health-safety',
      title: 'Health and Safety Policy',
      description:
        'The well-being of our students is our top priority. This document covers our procedures for health emergencies, campus safety protocols, and measures to ensure a secure learning environment.',
      isOpen: false,
    },
  ]);

  const togglePolicy = (policyId: string) => {
    setPolicies(
      policies.map((policy) =>
        policy.id === policyId ? { ...policy, isOpen: !policy.isOpen } : policy
      )
    );
  };

  const filteredPolicies = policies.filter(
    (policy) =>
      policy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      policy.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-8">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 pt-4">
          <a className="text-text-secondary-light dark:text-text-secondary-dark text-base font-medium leading-normal hover:text-primary cursor-pointer">
            Home
          </a>
          <span className="text-text-secondary-light dark:text-text-secondary-dark text-base font-medium leading-normal">
            /
          </span>
          <a className="text-text-secondary-light dark:text-text-secondary-dark text-base font-medium leading-normal hover:text-primary cursor-pointer">
            Parents
          </a>
          <span className="text-text-secondary-light dark:text-text-secondary-dark text-base font-medium leading-normal">
            /
          </span>
          <span className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal">
            Important Policies
          </span>
        </div>

        {/* Page Heading */}
        <div className="flex flex-wrap justify-between gap-3 pt-8">
          <div className="flex min-w-72 flex-col gap-3">
            <h1 className="text-primary text-4xl font-black leading-tight tracking-tight">
              Important Policies
            </h1>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-normal leading-normal">
              Here you can find important information regarding the
              college&apos;s regulations. Please review them carefully.
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="py-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark h-4 w-4" />
            <Input
              type="text"
              placeholder="Search for a policy..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-[#f0f2f4] dark:bg-background-dark border-gray-300 dark:border-gray-600 text-text-primary-light dark:text-text-primary-dark placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark"
            />
          </div>
        </div>

        {/* Policies Accordion */}
        <div className="flex flex-col gap-4">
          {filteredPolicies.map((policy) => (
            <Card
              key={policy.id}
              className="border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark"
            >
              <CardHeader
                className="p-4 cursor-pointer"
                onClick={() => togglePolicy(policy.id)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-primary text-lg font-bold leading-normal">
                    {policy.title}
                  </h3>
                  <ChevronDown
                    className={`text-text-primary-light dark:text-text-primary-dark h-5 w-5 transition-transform duration-300 ${
                      policy.isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </CardHeader>

              {policy.isOpen && (
                <CardContent className="p-4 pt-0">
                  <div className="space-y-4">
                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-normal leading-normal">
                      {policy.description}
                    </p>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                      <Download className="h-4 w-4 mr-2" />
                      View Full Policy (PDF)
                    </Button>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {filteredPolicies.length === 0 && (
          <div className="text-center py-8">
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg">
              No policies found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
