'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface AccreditationItem {
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
  learnMoreLink: string;
}

export default function AccreditationAndAffiliations() {
  const accreditations: AccreditationItem[] = [
    {
      title: 'Ministry of Education',
      description:
        'Fully accredited by the national Ministry of Education, ensuring our curriculum and practices meet rigorous governmental standards for KG through Secondary education.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC-rP7Xg5U5bMnfHxw4OpZS1F6JBsaXOCMgQbDkRRS5nqwXDDeGdMr8We1C-lO4_r4fGKcyaWJCI6p-dRpgBZA5ZrZo1cokCE-3NjwnzvOE4FTLdm5stpVnGMgrmknNCAzagvlXyaD6kFfgPiIEJ4hvzpZrd70vvmtnOgj0riSvdRTK4DbfxVgD4sQ8IEzMh8Usx1bX-G_2x_o3ZDiRBUdNJmW0Q-y8Viy5GLsCLoEEJN4JTsjTknqrjF3cKQr4dBk5zAcDISuAUEZ7',
      alt: 'Ministry of Education logo',
      learnMoreLink: '#',
    },
    {
      title: 'International Education Board (IEB)',
      description:
        'Recognized by the IEB for excellence in international education standards, curriculum development, and student assessment methods.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBjEf-FKwrqxs6ALUFf5vK5G6SLQpxjN99-yqgIt1f80WldMrcmVnGho1fHWYLuVemQVwmzGA0G3KY8Jpm_cStH_5OpcXFr1C6bjM98L_Es2vVyyP5vk1oWyJeuJWZTmGNW_MUp8OnFQ7K7ZRlNwdrtzgsKpd_LHfQhwB0P7ovFJrupZCi1RcXdaRI2ypyHmPivQvm21M-td06Sy7C63FgSYeqUWJYC6HdkIuWekZlU4n8VJ0vsJPTSX9mKnz6LTbTkLGJ4eAldjagf',
      alt: 'International Education Board logo',
      learnMoreLink: '#',
    },
  ];

  const affiliations: AccreditationItem[] = [
    {
      title: 'Global Scholars Program',
      description:
        'Our partnership offers students unique opportunities for international exchange programs, collaborative projects, and cultural immersion experiences.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDy_FLii68jV8WMLQ5dYbvxW-z0wqWJglCAcpPpb46REeSh_1zFvcvq5hTGEqyXtZldngHRQKgg1hgA-EFaMDkUOqJtECaaZAbmaAgkiKZ6yKTIKVSic6Gn2iUx37g1IvV0P571bdFStaTx_9F9AGLOpOgbV8_a2goQ40OWbjFvnDbBy7MPhDIVzNlojqJP95Y2oQttKAYs72d_ox-xWxjM7M6efdXX3b57AvO0BLK2wf37OwoTmjpciw3JRqC7ZzhYs5jCm8NWleWs',
      alt: 'Global Scholars Program logo',
      learnMoreLink: '#',
    },
    {
      title: 'National STEM Association',
      description:
        'An affiliation that provides our students and faculty with access to cutting-edge STEM resources, competitions, and professional development workshops.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC6TRtD7LHSRVQxAsmPUCV9IW8OeYnzJML9tfawwGRSL_eHNxRdYNYD3zvWUkHNgt-2X9FZHcsMxj5ln04NST5_ljgZbbmR1TGylwVxG4Ift_DuKXExBIPzCYW1KWYgI87HMS_Euo9bSzfEKGx-PTIXtbd-4qVqxi71OoCzEbOeuMolhw4zmAphnhIKNlqCdMNlrTKc0_QsY13VWLE9VgrGfQlhebaUZP3z0EQ8W6XPYzOexjDbmSFOxocMvsjE680j1VuWhA0PtSUp',
      alt: 'National STEM Association logo',
      learnMoreLink: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-8">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 p-4">
          <a
            className="text-muted-foreground text-sm font-medium leading-normal hover:text-primary"
            href="#"
          >
            Home
          </a>
          <span className="text-muted-foreground text-sm font-medium leading-normal">
            /
          </span>
          <a
            className="text-muted-foreground text-sm font-medium leading-normal hover:text-primary"
            href="#"
          >
            About Us
          </a>
          <span className="text-muted-foreground text-sm font-medium leading-normal">
            /
          </span>
          <span className="text-foreground text-sm font-medium leading-normal">
            Accreditation & Affiliations
          </span>
        </div>

        {/* Page Header */}
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <h1 className="text-primary dark:text-blue-300 text-4xl font-black leading-tight tracking-tight min-w-72">
            Accreditation & Affiliations
          </h1>
        </div>

        {/* Introduction */}
        <p className="text-foreground/80 text-base font-normal leading-relaxed pb-3 pt-1 px-4">
          Model College is committed to upholding the highest standards of
          educational excellence. Our accreditations and affiliations with
          esteemed national and international bodies are a testament to our
          dedication to providing quality education and fostering a dynamic
          learning environment.
        </p>

        {/* Accreditations Section */}
        <section className="mt-8">
          <h2 className="text-primary dark:text-blue-300 text-3xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5 border-b-2 border-orange-500/50">
            Accreditations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-4">
            {accreditations.map((item, index) => (
              <AccreditationCard key={index} item={item} />
            ))}
          </div>
        </section>

        {/* Affiliations Section */}
        <section className="mt-8">
          <h2 className="text-primary dark:text-blue-300 text-3xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5 border-b-2 border-orange-500/50">
            Affiliations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-4">
            {affiliations.map((item, index) => (
              <AccreditationCard key={index} item={item} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <Card className="mt-12 bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Interested in Learning More?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Discover how our accreditations and affiliations enhance the
              educational experience and create more opportunities for our
              students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
                asChild
              >
                <Link href="/admissions">Contact Admissions</Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white hover:bg-white/90 text-primary dark:text-blue-300"
                asChild
              >
                <a href="#">View Our Programs</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function AccreditationCard({ item }: { item: AccreditationItem }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border border-border">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="flex-shrink-0">
            <img
              className="w-24 h-24 object-contain rounded-lg bg-background p-2 border border-border"
              src={item.imageUrl}
              alt={item.alt}
            />
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="text-xl font-bold text-foreground mb-2">
              {item.title}
            </h3>
            <p className="text-foreground/80 text-sm leading-relaxed mb-4 flex-grow">
              {item.description}
            </p>
            <Button
              variant="link"
              className="text-orange-500 hover:text-orange-600 hover:no-underline p-0 h-auto justify-start"
              asChild
            >
              <a href={item.learnMoreLink} className="flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
