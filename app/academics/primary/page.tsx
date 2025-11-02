// app/academics/primary/page.tsx
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
  //   School,
  ChevronDown,
  ChevronUp,
  GraduationCap,
} from 'lucide-react';

export default function PrimarySectionPage() {
  const [openAccordion, setOpenAccordion] = useState<string[]>(['curriculum']);

  const handleDownloadProspectus = () => {
    // Implement prospectus download functionality
    console.log('Downloading prospectus...');
  };

  const handleAdmissionsClick = () => {
    // Navigate to admissions page
    window.location.href = '/admissions';
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="px-4 sm:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col w-full max-w-[960px] flex-1">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 p-4">
            <a
              className="text-muted-foreground hover:text-primary text-sm font-medium"
              href="/"
            >
              Home
            </a>
            <span className="text-muted-foreground text-sm font-medium">/</span>
            <a
              className="text-muted-foreground hover:text-primary text-sm font-medium"
              href="/academics"
            >
              Academics
            </a>
            <span className="text-muted-foreground text-sm font-medium">/</span>
            <span className="text-foreground text-sm font-medium">
              Primary Section
            </span>
          </div>

          {/* Header Image */}
          <div className="w-full mt-4">
            <div
              className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[280px]"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDj338mLV5L1tLwbplVLB8eDMkASb3UiQBkBG6GI_ftNs_mhT7YfITT4RHvNbHAM6TR1SCwVZdtmTyXGJcBZzVyjQ5U5ehOaFpR6xSaZxqdh5Q0VDsiHueCf9epD8n2QEyTSd4ha-otKvG0f5ggPufHfCoM2zfZgq3T3lIH1035HrdvxoGMMMhL4xMdRKujU_Q-yFNI_4VdxYt9swPRI_WaVR2dEfF7LWSq8Dgs_XU5nfjFaHHDP7RSAqqTw9W6RMB56Rsfv2fbE4jD")`,
              }}
            >
              <div className="flex p-6 md:p-8">
                <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                  Primary Section
                </h1>
              </div>
            </div>
          </div>

          {/* Body Text */}
          <p className="text-foreground text-base font-normal leading-relaxed pb-3 pt-8 px-4">
            Welcome to the Primary Section of Model College. Our program is
            designed to foster a love for learning in a nurturing and
            stimulating environment. We focus on holistic development, combining
            academic excellence with co-curricular activities to prepare
            students for a bright future.
          </p>

          {/* Accordions */}
          <div className="flex flex-col p-4 gap-3">
            <Accordion
              type="multiple"
              value={openAccordion}
              onValueChange={setOpenAccordion}
              className="space-y-3"
            >
              <AccordionItem value="curriculum" className="border rounded-lg">
                <AccordionTrigger className="px-4 py-2 hover:no-underline hover:bg-muted/50">
                  <span className="text-primary text-base font-bold">
                    Curriculum Overview
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our curriculum is based on an integrated approach that
                    encourages critical thinking and creativity. We follow a
                    framework that aligns with national educational standards
                    while incorporating modern teaching practices to ensure a
                    comprehensive learning experience for every child. We focus
                    on building strong foundational skills in literacy and
                    numeracy.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="structure" className="border rounded-lg">
                <AccordionTrigger className="px-4 py-2 hover:no-underline hover:bg-muted/50">
                  <span className="text-base font-medium">
                    Class Structure (Nursery to Grade 5)
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The Primary Section spans from Nursery to Grade 5. Each
                    grade level has a carefully planned structure to ensure a
                    smooth transition and progressive learning. Our small class
                    sizes allow for personalized attention, ensuring that each
                    student's individual needs are met and their potential is
                    nurtured from the very beginning.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="methodology" className="border rounded-lg">
                <AccordionTrigger className="px-4 py-2 hover:no-underline hover:bg-muted/50">
                  <span className="text-base font-medium">
                    Teaching Methodology
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We employ a student-centric teaching methodology that
                    includes inquiry-based learning, project-based activities,
                    and the integration of technology in the classroom. Our goal
                    is to make learning interactive, engaging, and relevant to
                    the real world, fostering curiosity and a lifelong passion
                    for knowledge.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="subjects" className="border rounded-lg">
                <AccordionTrigger className="px-4 py-2 hover:no-underline hover:bg-muted/50">
                  <span className="text-base font-medium">
                    Subjects Offered
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    <li>English Language & Literature</li>
                    <li>Mathematics</li>
                    <li>Science & Environmental Studies</li>
                    <li>Social Studies</li>
                    <li>Second Language (e.g., Spanish, French)</li>
                    <li>Art & Craft</li>
                    <li>Music & Performing Arts</li>
                    <li>Physical Education</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="assessment" className="border rounded-lg">
                <AccordionTrigger className="px-4 py-2 hover:no-underline hover:bg-muted/50">
                  <span className="text-base font-medium">
                    Assessment System
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our assessment system is comprehensive and continuous,
                    focusing on both formative and summative evaluations. We use
                    a variety of tools, including class participation, projects,
                    and periodic tests, to monitor student progress. Regular
                    parent-teacher meetings are held to discuss student
                    development and collaborate on their educational journey.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA Section */}
          <div className="p-4 mt-6">
            <Card className="bg-primary/10 dark:bg-primary/20 border-0">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                  <div>
                    <CardTitle className="text-xl text-primary dark:text-white">
                      Ready to Learn More?
                    </CardTitle>
                    <CardDescription className="mt-1 text-gray-600 dark:text-gray-300">
                      Download our detailed prospectus or get in touch with our
                      admissions team.
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={handleDownloadProspectus}
                      className="bg-orange-500 hover:bg-orange-400 h-12 px-6 min-w-40"
                    >
                      <Download className="size-5" />
                      Prospectus
                    </Button>
                    <Button
                      onClick={handleAdmissionsClick}
                      className="bg-primary hover:bg-primary/90 h-12 px-6 min-w-40"
                    >
                      <GraduationCap className="size-6" />
                      Admissions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
