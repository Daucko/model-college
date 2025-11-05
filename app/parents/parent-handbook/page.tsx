'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Phone, Mail, Link } from 'lucide-react';

export default function ParentHandbook() {
  const handbookInfo = {
    title: 'Model College Parent Handbook 2024-2025',
    fileSize: '5.2 MB',
    lastUpdated: 'August 2024',
    description:
      "This handbook serves as your primary guide to our school's policies, academic calendar, codes of conduct, and communication protocols. We encourage you to review it thoroughly to help foster a strong and successful partnership between our school and your family.",
  };

  const contactInfo = {
    phone: '(123) 456-7890',
    email: 'office@modelcollege.edu',
  };

  const archiveHandbooks = [
    'Parent Handbook 2023-2024',
    'Parent Handbook 2022-2023',
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-8">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 px-4 pb-6">
          <a className="text-primary dark:text-primary text-sm font-medium leading-normal hover:underline cursor-pointer">
            Home
          </a>
          <span className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal">
            /
          </span>
          <a className="text-primary dark:text-primary text-sm font-medium leading-normal hover:underline cursor-pointer">
            Parents
          </a>
          <span className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal">
            /
          </span>
          <span className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">
            Parent Handbook
          </span>
        </div>

        {/* Page Heading */}
        <div className="flex flex-wrap justify-between gap-3 px-4 pb-4">
          <h1 className="text-primary dark:text-primary text-4xl font-black leading-tight tracking-tight min-w-72">
            Parent Handbook
          </h1>
        </div>

        {/* Description */}
        <p className="text-text-light dark:text-text-dark text-base font-normal leading-relaxed pb-6 pt-1 px-4">
          {handbookInfo.description}
        </p>

        {/* Handbook Card */}
        <div className="p-4">
          <Card className="bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-stretch justify-between gap-6">
                <div className="flex flex-[2_2_0px] flex-col gap-4 justify-center">
                  <div className="flex items-center gap-4">
                    <div className="text-red-600 dark:text-red-500">
                      <FileText className="h-12 w-12" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">
                        {handbookInfo.title}
                      </p>
                      <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-normal leading-normal">
                        PDF, {handbookInfo.fileSize} | Last updated:{' '}
                        {handbookInfo.lastUpdated}
                      </p>
                    </div>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white w-fit shadow-md transition-colors duration-200 h-12 px-6">
                    <Download className="h-4 w-4 mr-2" />
                    Download Handbook
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="px-4 pt-8 mt-4 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-text-light dark:text-text-dark text-2xl font-bold tracking-tight">
            Further Inquiries
          </h2>
          <p className="text-text-light dark:text-text-dark text-base font-normal leading-relaxed mt-2">
            For any questions or clarifications after reviewing the handbook,
            please do not hesitate to contact the main office. We are here to
            help.
          </p>
          <div className="flex items-center gap-4 mt-4 text-text-light dark:text-text-dark">
            <Phone className="h-5 w-5 text-primary" />
            <span>{contactInfo.phone}</span>
          </div>
          <div className="flex items-center gap-4 mt-2 text-text-light dark:text-text-dark">
            <Mail className="h-5 w-5 text-primary" />
            <span>{contactInfo.email}</span>
          </div>
        </div>

        {/* Archive Section */}
        <div className="px-4 pt-8 mt-4">
          <h2 className="text-text-light dark:text-text-dark text-2xl font-bold tracking-tight">
            Handbook Archive
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-relaxed mt-2">
            Access handbooks from previous academic years for reference.
          </p>
          <ul className="mt-4 space-y-2 list-none">
            {archiveHandbooks.map((handbook, index) => (
              <li key={index}>
                <a className="flex items-center gap-2 text-primary dark:text-primary hover:underline cursor-pointer">
                  <Link className="h-4 w-4" />
                  {handbook}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
