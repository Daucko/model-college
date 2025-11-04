'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Phone, ArrowRight, ChevronDown } from 'lucide-react';

export default function ScholarshipsAndFinancialAid() {
  const [activeTab, setActiveTab] = useState('scholarships');

  const scholarships = [
    {
      id: 1,
      title: 'Merit-Based Scholarship',
      description:
        'Awarded to students with outstanding academic achievements. Covers up to 50% of tuition fees.',
      eligibility: 'Top 5% of class, GPA > 3.8',
      deadline: 'May 31, 2024',
    },
    {
      id: 2,
      title: 'Alumni Legacy Grant',
      description:
        'For children or grandchildren of Model College alumni. A one-time grant of $2,000.',
      eligibility: 'Direct descendant of an alumnus',
      deadline: 'June 15, 2024',
    },
    {
      id: 3,
      title: 'Arts & Sports Scholarship',
      description:
        'Recognizing exceptional talent in artistic or athletic pursuits. Varies based on portfolio/performance.',
      eligibility: 'Demonstrated excellence in arts/sports',
      deadline: 'June 30, 2024',
    },
    {
      id: 4,
      title: 'Community Leader Award',
      description:
        'For students who have shown strong leadership and commitment to community service. $1,500 grant.',
      eligibility: '50+ hours of verified community service',
      deadline: 'July 1, 2024',
    },
  ];

  const faqs = [
    {
      question: 'Can I apply for multiple scholarships?',
      answer:
        'Yes, you are encouraged to apply for all scholarships for which you meet the eligibility criteria. Each application will be reviewed independently.',
    },
    {
      question: 'What documents are required for the application?',
      answer:
        'Typically, you will need academic transcripts, letters of recommendation, and a personal essay. Specific requirements vary by scholarship, so please check the details for each one.',
    },
    {
      question: 'When will I be notified about the scholarship decision?',
      answer:
        'Decisions are typically announced within 4-6 weeks after the application deadline. All applicants will be notified via email.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 pb-4">
            <a
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              href="#"
            >
              Home
            </a>
            <span className="text-sm font-medium text-muted-foreground">/</span>
            <a
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              href="#"
            >
              Admissions
            </a>
            <span className="text-sm font-medium text-muted-foreground">/</span>
            <span className="text-sm font-medium text-foreground">
              Scholarships & Financial Aid
            </span>
          </div>

          {/* Page Heading */}
          <div className="flex flex-wrap justify-between gap-3 py-4">
            <div className="flex min-w-72 flex-col gap-3">
              <h1 className="text-4xl font-black leading-tight tracking-tight text-primary">
                Scholarships & Financial Aid
              </h1>
              <p className="text-base font-normal leading-normal text-muted-foreground">
                Model College is committed to making education accessible.
                Explore the various scholarships and financial aid options
                available to support your academic journey.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="pb-3 pt-6">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
                <TabsTrigger value="financial-aid">Financial Aid</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Scholarships Section */}
          {activeTab === 'scholarships' && (
            <section className="py-8" id="scholarships">
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-primary pb-6">
                Available Scholarships
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {scholarships.map((scholarship) => (
                  <Card
                    key={scholarship.id}
                    className="flex flex-col overflow-hidden"
                  >
                    <CardContent className="p-6 grow">
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {scholarship.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {scholarship.description}
                      </p>
                      <div className="text-sm space-y-2">
                        <p>
                          <strong className="font-semibold text-foreground">
                            Eligibility:
                          </strong>{' '}
                          {scholarship.eligibility}
                        </p>
                        <p>
                          <strong className="font-semibold text-foreground">
                            Deadline:
                          </strong>{' '}
                          {scholarship.deadline}
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t p-4">
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 gap-2">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Financial Aid Section */}
          {activeTab === 'financial-aid' && (
            <section className="py-8" id="financial-aid">
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-primary pb-6">
                Financial Aid Options
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Need-Based Financial Aid
                    </h3>
                    <p className="text-muted-foreground">
                      We offer need-based financial aid packages to ensure that
                      qualified students can attend Model College regardless of
                      their financial circumstances. Our comprehensive aid
                      packages may include grants, work-study opportunities, and
                      low-interest loans.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Payment Plans
                    </h3>
                    <p className="text-muted-foreground">
                      Flexible payment plans are available to help families
                      manage tuition costs. Choose from monthly, quarterly, or
                      semester-based payment options that work with your budget.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
          )}

          {/* FAQ Section */}
          <section className="py-8" id="faq">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-primary pb-6">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg px-4"
                >
                  <AccordionTrigger className="font-semibold text-foreground hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Contact Section */}
          <section className="py-8" id="contact">
            <Card className="bg-primary/10 border-primary/20 text-center">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-3 text-primary">
                  Need Help? Get in Touch
                </h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Our dedicated financial aid advisors are here to help you
                  navigate your options. Don't hesitate to reach out with any
                  questions.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-left mb-6">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      className="font-medium hover:underline text-foreground"
                      href="mailto:finaid@modelcollege.edu"
                    >
                      finaid@modelcollege.edu
                    </a>
                  </div>
                  <div className="hidden md:block h-6 w-px bg-primary/30" />
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a
                      className="font-medium hover:underline text-foreground"
                      href="tel:+1234567890"
                    >
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="mx-auto bg-orange-500 hover:bg-orange-600"
                >
                  Schedule an Appointment
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
