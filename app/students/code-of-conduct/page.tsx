'use client';

import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Gavel, ChevronDown, School } from 'lucide-react';
import Link from 'next/link';

export default function CodeOfConductPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Link
                href="#"
                className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors"
              >
                Home
              </Link>
              <span className="text-muted-foreground text-sm font-medium">
                /
              </span>
              <Link
                href="#"
                className="text-muted-foreground text-sm font-medium hover:text-primary transition-colors"
              >
                Students
              </Link>
              <span className="text-muted-foreground text-sm font-medium">
                /
              </span>
              <span className="text-foreground text-sm font-medium">
                Code of Conduct
              </span>
            </div>

            {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-3 mb-6">
              <h1 className="text-primary text-4xl lg:text-5xl font-black leading-tight tracking-tight min-w-72">
                Code of Conduct
              </h1>
            </div>

            {/* Introduction */}
            <p className="text-foreground text-base font-normal leading-relaxed pb-8">
              Model College is committed to maintaining a safe, respectful, and
              productive learning environment for all students. This Code of
              Conduct outlines the expectations for behavior and the
              disciplinary guidelines that ensure our community thrives on
              principles of integrity and mutual respect.
            </p>

            {/* Accordions */}
            <Accordion
              type="single"
              collapsible
              className="flex flex-col gap-3"
            >
              <AccordionItem
                value="academic-integrity"
                className="border border-border rounded-lg bg-card px-5 py-2"
              >
                <AccordionTrigger className="hover:no-underline py-2">
                  <h2 className="text-primary text-lg font-bold leading-normal text-left">
                    Academic Integrity
                  </h2>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm font-normal leading-relaxed pb-3 pt-2">
                  <p className="mb-3">
                    Students are expected to uphold the highest standards of
                    academic honesty. This includes, but is not limited to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Completing one&apos;s own work and assignments without
                      unauthorized assistance.
                    </li>
                    <li>
                      Properly citing all sources to avoid plagiarism in any
                      form.
                    </li>
                    <li>
                      Refraining from cheating on any assignment, test, or
                      examination.
                    </li>
                    <li>
                      Not sharing or receiving unauthorized information
                      regarding academic work.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="respect-for-others"
                className="border border-border rounded-lg bg-card px-5 py-2"
              >
                <AccordionTrigger className="hover:no-underline py-2 [&[data-state=open]>h2]:text-primary">
                  <h2 className="text-foreground text-lg font-bold leading-normal text-left group-hover:text-primary transition-colors">
                    Respect for Others
                  </h2>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm font-normal leading-relaxed pb-3 pt-2">
                  All members of our community must be treated with dignity and
                  respect. Bullying, harassment, discrimination, and any form of
                  intimidation are strictly prohibited. Students are expected to
                  use respectful language and engage in constructive
                  communication with peers, faculty, and staff.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="campus-conduct"
                className="border border-border rounded-lg bg-card px-5 py-2"
              >
                <AccordionTrigger className="hover:no-underline py-2 [&[data-state=open]>h2]:text-primary">
                  <h2 className="text-foreground text-lg font-bold leading-normal text-left group-hover:text-primary transition-colors">
                    General Campus Conduct
                  </h2>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm font-normal leading-relaxed pb-3 pt-2">
                  Students must conduct themselves in a manner that does not
                  disrupt the educational environment or endanger the safety of
                  others. This includes maintaining cleanliness on campus,
                  respecting college property, and following all safety
                  procedures during school hours and events.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="dress-code"
                className="border border-border rounded-lg bg-card px-5 py-2"
              >
                <AccordionTrigger className="hover:no-underline py-2 [&[data-state=open]>h2]:text-primary">
                  <h2 className="text-foreground text-lg font-bold leading-normal text-left group-hover:text-primary transition-colors">
                    Dress Code & Uniform Policy
                  </h2>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm font-normal leading-relaxed pb-3 pt-2">
                  Students are required to adhere to the official school uniform
                  policy at all times while on campus or at school-sponsored
                  events. The uniform should be clean, neat, and worn as
                  intended to promote a professional and focused learning
                  atmosphere.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="technology-use"
                className="border border-border rounded-lg bg-card px-5 py-2"
              >
                <AccordionTrigger className="hover:no-underline py-2 [&[data-state=open]>h2]:text-primary">
                  <h2 className="text-foreground text-lg font-bold leading-normal text-left group-hover:text-primary transition-colors">
                    Use of Technology & Digital Citizenship
                  </h2>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm font-normal leading-relaxed pb-3 pt-2">
                  School technology resources must be used responsibly and for
                  educational purposes. Students are expected to practice good
                  digital citizenship, which includes respecting others online,
                  protecting personal information, and adhering to copyright and
                  intellectual property laws. Cyberbullying is a serious offense
                  and will not be tolerated.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="attendance"
                className="border border-border rounded-lg bg-card px-5 py-2"
              >
                <AccordionTrigger className="hover:no-underline py-2 [&[data-state=open]>h2]:text-primary">
                  <h2 className="text-foreground text-lg font-bold leading-normal text-left group-hover:text-primary transition-colors">
                    Attendance and Punctuality
                  </h2>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm font-normal leading-relaxed pb-3 pt-2">
                  Regular and punctual attendance is crucial for academic
                  success. Students are expected to be present for all classes
                  and school activities on time. All absences must be reported
                  and justified according to the college&apos;s attendance
                  policy.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Disciplinary Guidelines */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Disciplinary Guidelines
              </h2>
              <Card className="bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Gavel className="text-orange-500 text-3xl mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-primary">
                        Consequences for Breaches
                      </h3>
                      <p className="text-foreground mt-2 text-base leading-relaxed">
                        Violations of the Code of Conduct will result in
                        disciplinary action, which may range from a formal
                        warning to suspension or expulsion, depending on the
                        severity and frequency of the offense. The college is
                        committed to a fair and consistent disciplinary process.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Download CTA */}
            <div className="mt-12 text-center">
              <Button
                variant="ghost"
                className="inline-flex items-center gap-2 text-primary font-semibold py-2 px-4 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
              >
                <Download className="h-5 w-5" />
                Download the Full Code of Conduct (PDF)
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
