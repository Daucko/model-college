'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, ChevronDown, Mail } from 'lucide-react';

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]); // First FAQ open by default
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'general', label: 'General' },
    { id: 'application', label: 'Application Process' },
    { id: 'fees', label: 'Fees & Payments' },
    { id: 'eligibility', label: 'Eligibility' },
  ];

  const faqs = [
    {
      id: 1,
      question: 'What programs do you offer?',
      answer:
        'We offer a comprehensive curriculum from KG and Nursery (Early Years) through Primary and Secondary sections. Our programs are designed to provide a holistic education, focusing on academic excellence, character development, and extracurricular involvement.',
      category: 'general',
    },
    {
      id: 2,
      question: 'What is the application deadline?',
      answer:
        "The application deadline for the upcoming academic year is typically March 31st. We recommend applying early as places are limited. Please check the 'Admissions Calendar' page for specific dates and important milestones.",
      category: 'application',
    },
    {
      id: 3,
      question: 'What documents are required for the application?',
      answer:
        "You will need to submit the following documents: a completed application form, the student's birth certificate, previous school records/transcripts, passport-sized photographs, and proof of residence. A detailed checklist is available on our application portal.",
      category: 'application',
    },
    {
      id: 4,
      question: 'Is there an entrance exam?',
      answer:
        'Yes, an age-appropriate assessment or entrance test is part of our admissions process for Primary and Secondary school applicants to evaluate academic readiness. For KG and Nursery, we conduct an informal interaction with the child and parents.',
      category: 'eligibility',
    },
    {
      id: 5,
      question: 'What is the fee structure and what are the payment options?',
      answer:
        "Our detailed fee structure is available on the 'Fees & Payments' page. We offer multiple payment options, including annual, semi-annual, and quarterly installments. Payments can be made online via our portal, bank transfer, or at the school's accounts office.",
      category: 'fees',
    },
  ];

  const toggleFaq = (id: number) => {
    setOpenFaqs((prev) =>
      prev.includes(id) ? prev.filter((faqId) => faqId !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-brand-dark-gray dark:text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-4xl">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <a
            className="text-[#616f89] dark:text-gray-400 text-sm font-medium hover:text-brand-blue dark:hover:text-brand-orange"
            href="#"
          >
            Home
          </a>
          <span className="text-[#616f89] dark:text-gray-400 text-sm font-medium">
            /
          </span>
          <a
            className="text-[#616f89] dark:text-gray-400 text-sm font-medium hover:text-brand-blue dark:hover:text-brand-orange"
            href="#"
          >
            Admissions
          </a>
          <span className="text-[#616f89] dark:text-gray-400 text-sm font-medium">
            /
          </span>
          <span className="text-brand-dark-gray dark:text-gray-200 text-sm font-medium">
            FAQs
          </span>
        </div>

        {/* Page Heading */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-between gap-3">
            <div className="flex flex-col gap-2">
              <h1 className="text-primary text-4xl font-black tracking-tighter">
                Frequently Asked Questions
              </h1>
              <p className="text-[#616f89] dark:text-gray-400 text-base font-normal">
                Find answers to common questions about our admissions process.
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#616f89] dark:text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for a question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-14 text-base border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/50"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 p-1 flex-wrap border-b border-gray-200 dark:border-gray-700 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'ghost'}
              className={`h-10 shrink-0 px-4 text-sm font-medium ${
                activeCategory === category.id
                  ? 'bg-gray-700 text-white'
                  : 'text-brand-blue/10  hover:bg-brand-blue/10 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <Card
              key={faq.id}
              className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 shadow-sm"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex w-full cursor-pointer items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-brand-dark-gray dark:text-gray-100 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${
                      openFaqs.includes(faq.id) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqs.includes(faq.id) && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <p className="text-[#616f89] dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results Message */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#616f89] dark:text-gray-400 text-lg">
              No FAQs found matching your search.
            </p>
          </div>
        )}

        {/* Contact CTA */}
        <Card className="mt-12 bg-gray-100 dark:bg-gray-800/50 border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold text-brand-dark-gray dark:text-gray-100 mb-2">
              Still have questions?
            </h3>
            <p className="text-[#616f89] dark:text-gray-400 mb-4">
              Our admissions team is here to help. Feel free to reach out to us
              for any further information.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Mail className="h-4 w-4 mr-2" />
              Contact Admissions
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
