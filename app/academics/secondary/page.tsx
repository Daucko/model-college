// app/academics/secondary/page.tsx
'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Download,
  User,
  //   BookOpen,
  Users,
  Network,
  Library,
  CheckCircle,
  BookOpenText,
  ListChecks,
} from 'lucide-react';

export default function SecondarySectionPage() {
  const [openAccordion, setOpenAccordion] = useState<string[]>(['curriculum']);

  const handleDownloadProspectus = () => {
    // Implement prospectus download functionality
    console.log('Downloading prospectus...');
  };

  const handleContactAdvisor = () => {
    // Implement contact advisor functionality
    console.log('Contacting academic advisor...');
  };

  const accordionItems = [
    {
      id: 'curriculum',
      icon: BookOpenText,
      title: 'Curriculum Overview',
      content:
        'We follow the CBSE curriculum, emphasizing a balanced approach to academics, arts, and athletics. Our teaching methodology encourages inquiry-based learning and practical application of knowledge to prepare students for real-world challenges and foster a lifelong love for learning.',
    },
    {
      id: 'structure',
      icon: Users,
      title: 'Class Structure',
      content:
        'The Secondary Section encompasses students from Grade 6 through Grade 12, divided into Middle School (Grades 6-8), Secondary (Grades 9-10), and Senior Secondary (Grades 11-12) to cater to the developmental needs of each age group.',
    },
    {
      id: 'streams',
      icon: Network,
      title: 'Stream Options',
      content:
        'For Grades 11 and 12, we offer three specialized streams: Science (with options for both Medical and Non-Medical tracks), Commerce, and Arts (Humanities). Each stream is designed to provide a deep and focused education to prepare students for their chosen career paths.',
    },
    {
      id: 'subjects',
      icon: Library,
      title: 'Subjects Offered',
      content:
        'Our comprehensive subject offerings include core subjects like English, Mathematics, and Science, alongside a wide range of elective subjects such as Computer Science, Economics, Fine Arts, and Physical Education, allowing students to pursue their interests.',
    },
    {
      id: 'assessment',
      icon: ListChecks,
      title: 'Assessment & Examination System',
      content:
        'We employ a continuous and comprehensive evaluation (CCE) system that includes periodic tests, half-yearly exams, and final examinations. This is supplemented by project work, practicals, and internal assessments to ensure a holistic measure of student performance.',
    },
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 p-4">
            <a
              className="text-muted-foreground hover:text-accent text-base font-medium"
              href="/"
            >
              Home
            </a>
            <span className="text-muted-foreground text-base font-medium">
              /
            </span>
            <a
              className="text-muted-foreground hover:text-accent text-base font-medium"
              href="/academics"
            >
              Academics
            </a>
            <span className="text-muted-foreground text-base font-medium">
              /
            </span>
            <span className="text-foreground text-base font-medium">
              Secondary Section
            </span>
          </div>

          {/* Page Header */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <h1 className="text-primary dark:text-blue-300 text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Secondary Section
            </h1>
          </div>

          {/* Description */}
          <p className="text-foreground dark:text-gray-300 text-lg font-normal leading-relaxed pb-3 pt-1 px-4">
            Our Secondary Section program is designed to foster intellectual
            growth, critical thinking, and personal development in students from
            Grade 6 to Grade 12. We are committed to providing a comprehensive
            and challenging academic environment that prepares students for
            higher education and future success.
          </p>

          {/* Accordions */}
          <div className="flex flex-col p-4 gap-4 mt-6">
            <Accordion
              type="multiple"
              value={openAccordion}
              onValueChange={setOpenAccordion}
              className="space-y-4"
            >
              {accordionItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border border-border-light dark:border-border-dark rounded-xl bg-white dark:bg-slate-800/50"
                >
                  <AccordionTrigger className="px-5 py-3 hover:no-underline hover:bg-muted/50 rounded-xl">
                    <div className="flex items-center gap-4 flex-1 text-left">
                      <item.icon className="h-7 w-7 text-orange-500 shrink-0" />
                      <span className="text-primary dark:text-blue-300 text-lg font-semibold">
                        {item.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 ml-11">
                    <p className="text-foreground dark:text-gray-300 text-base leading-relaxed">
                      {item.content}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-4 mt-8">
            <Button
              onClick={handleDownloadProspectus}
              className="w-full md:w-auto h-12 px-6 bg-primary dark:bg-blue-300 hover:bg-primary/90 text-white text-base font-bold"
              size="lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Prospectus
            </Button>
            <Button
              onClick={handleContactAdvisor}
              className="w-full md:w-auto h-12 px-6 bg-orange-500 hover:bg-orange-500/90 text-primary dark:text-blue-300 text-base font-bold"
              variant="secondary"
              size="lg"
            >
              <User className="mr-2 h-5 w-5" />
              Contact Academic Advisor
            </Button>
          </div>

          {/* Additional Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 p-4">
            <Card className="bg-white dark:bg-slate-800/50 border-border-light dark:border-border-dark">
              <CardHeader>
                <CardTitle className="text-primary dark:text-blue-300 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Grade Levels
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground dark:text-gray-300">
                  Comprehensive education from Grade 6 to Grade 12 with
                  specialized streams in senior years.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800/50 border-border-light dark:border-border-dark">
              <CardHeader>
                <CardTitle className="text-primary dark:text-blue-300 flex items-center gap-2">
                  <Network className="h-5 w-5" />
                  Stream Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground dark:text-gray-300">
                  Science (Medical/Non-Medical), Commerce, and Arts streams
                  available for Grades 11-12.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800/50 border-border-light dark:border-border-dark">
              <CardHeader>
                <CardTitle className="text-primary dark:text-blue-300 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground dark:text-gray-300">
                  Continuous Comprehensive Evaluation with projects, practicals,
                  and internal assessments.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
