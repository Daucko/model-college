'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ListChecks,
  Scale,
  Receipt,
  FileText,
  Calendar,
  HelpCircle,
  GraduationCap,
  Users,
} from 'lucide-react';

interface AdmissionCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  href: string;
}

export default function Admissions() {
  const admissionCards: AdmissionCard[] = [
    {
      title: 'Admission Process',
      description:
        'Learn about our step-by-step application and enrollment journey, from initial inquiry to final acceptance.',
      icon: <ListChecks className="h-9 w-9 text-orange-500" />,
      buttonText: 'Learn More',
      href: '#',
    },
    {
      title: 'Eligibility Criteria',
      description:
        'View the academic, age, and other requirements for each of our sections, from KG to Secondary levels.',
      icon: <Scale className="h-9 w-9 text-orange-500" />,
      buttonText: 'Learn More',
      href: '#',
    },
    {
      title: 'Fee Structure',
      description:
        'Find detailed information on tuition, registration, and other fees for Primary and Secondary levels.',
      icon: <Receipt className="h-9 w-9 text-orange-500" />,
      buttonText: 'Learn More',
      href: '#',
    },
    {
      title: 'Application Form',
      description:
        'Access the online form or download a printable PDF to begin your application process today.',
      icon: <FileText className="h-9 w-9 text-orange-500" />,
      buttonText: 'Download Form',
      href: '#',
    },
    {
      title: 'Important Dates',
      description:
        'Stay informed about key deadlines for applications, entrance tests, interviews, and enrollment.',
      icon: <Calendar className="h-9 w-9 text-orange-500" />,
      buttonText: 'View Calendar',
      href: '#',
    },
    {
      title: 'FAQs',
      description:
        'Find answers to common questions about our admissions process, curriculum, and campus life.',
      icon: <HelpCircle className="h-9 w-9 text-orange-500" />,
      buttonText: 'Read FAQs',
      href: '#',
    },
    {
      title: 'Scholarships & Financial Aid',
      description:
        'Explore the financial support options and scholarships available to new and returning students.',
      icon: <GraduationCap className="h-9 w-9 text-orange-500" />,
      buttonText: 'Learn More',
      href: '#',
    },
    {
      title: 'Transfer Students',
      description:
        'Find dedicated information for students wishing to transfer to Model College from other institutions.',
      icon: <Users className="h-9 w-9 text-orange-500" />,
      buttonText: 'Learn More',
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-8">
        {/* Page Heading */}
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex flex-col gap-3">
            <h1 className="text-primary text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Admissions
            </h1>
            <p className="text-foreground/80 text-base font-normal leading-normal max-w-3xl">
              Welcome prospective students and families. We are delighted that
              you are considering Model College for your educational journey.
              Our admissions process is designed to be clear and supportive as
              we seek to identify students who will thrive in our learning
              community.
            </p>
          </div>
        </div>

        {/* Information Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {admissionCards.map((card, index) => (
            <AdmissionCard key={index} card={card} />
          ))}
        </div>

        {/* CTA Section */}
        <Card className="mt-12 bg-primary/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Take the first step towards joining our vibrant learning
              community. Our admissions team is here to guide you through every
              step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
                asChild
              >
                <a href="#">Apply Now</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <a href="#">Contact Admissions</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mt-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Admissions Office
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">
                  Office Hours
                </h4>
                <p className="text-muted-foreground text-sm mb-2">
                  Monday - Friday: 8:00 AM - 4:00 PM
                </p>
                <p className="text-muted-foreground text-sm">
                  Saturday: 9:00 AM - 12:00 PM
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">
                  Contact Information
                </h4>
                <p className="text-muted-foreground text-sm mb-2">
                  Email: admissions@modelcollege.edu
                </p>
                <p className="text-muted-foreground text-sm">
                  Phone: (123) 456-7890
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function AdmissionCard({ card }: { card: AdmissionCard }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border border-border">
      <CardContent className="p-6 flex flex-col gap-4 h-full">
        {card.icon}
        <h3 className="text-foreground text-xl font-bold">{card.title}</h3>
        <p className="text-muted-foreground text-sm font-normal leading-normal grow">
          {card.description}
        </p>
        <Button
          variant="outline"
          className="w-full bg-primary/20 text-primary hover:bg-primary/30 border-primary/30"
          asChild
        >
          <a href={card.href}>{card.buttonText}</a>
        </Button>
      </CardContent>
    </Card>
  );
}
