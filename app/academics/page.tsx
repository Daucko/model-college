// app/academics/page.tsx
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
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { TimetableModal } from '@/components/ui/timetable-modal';
import {
  Calendar,
  Lock,
  School,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';
import Link from 'next/link';

interface Department {
  id: string;
  name: string;
  href: string;
}

interface SectionCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
}

export default function AcademicsPage() {
  const [isTimetableModalOpen, setIsTimetableModalOpen] = useState(false);

  const departments: Department[] = [
    {
      id: 'sciences',
      name: 'Sciences',
      href: '/academics/departments/sciences',
    },
    {
      id: 'humanities',
      name: 'Humanities',
      href: '/academics/departments/humanities',
    },
    {
      id: 'languages',
      name: 'Languages',
      href: '/academics/departments/languages',
    },
    {
      id: 'arts-music',
      name: 'Arts & Music',
      href: '/academics/departments/arts-music',
    },
    {
      id: 'physical-education',
      name: 'Physical Education',
      href: '/academics/departments/physical-education',
    },
  ];

  const sections: SectionCard[] = [
    {
      id: 'primary',
      title: 'Primary Section',
      description:
        'Focusing on foundational learning, creativity, and nurturing young minds for a bright future.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAvb14xR19wMu1yGnaoox73XrtFpW07TlpkWNgfJT8X97B-zCSiMHeA5wZ7u4Ls-Kztd1HKjKZW4GYs8yPvf24TalLKJxOHDFOxuSzRaASK6l6xXxgJHMmCEspU2tn59fI5sHnfTEsqYt3qHn5wyQTx94Jwf0T8-lloiw7KnsRFBra5XwvoaylPkMe8-KQ0dNsW6SXePK3pTsE9tYNHR1EviNS48mN7GWd0cAGLX7KyhEvQtzLASlpBh74kftdUUr772cAR2Be9Qn0W',
      imageAlt: 'Young students learning in a colorful classroom',
      href: '/academics/primary',
    },
    {
      id: 'secondary',
      title: 'Secondary Section',
      description:
        'Preparing students for higher education with a focus on advanced studies and comprehensive exam preparation.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBLw78n5QvIO_FGpOEBId7L1XfR9Uaj6Rfsyj3sX8XPE7K1kU-Yi_IOsFD6OckPWdk_5OcRwou_smjkIHQvkqZ6DQFth8vXnkvS4JaJ8OdXAONzGFpxWAZ6HqH2nlOfmiqq2rlXjhI_SDg-8LEyRG_cDU91tK9gFoaduhMkQgc9OmqlzHjYNJD6A9KnTgOGCfjxYW5UkioFdMxaCe7Yz23ZRL5nbFbn0a3FyUY6-k8ISk7PbbbNu-K29aS25orSGh_DytMvWnMYuAST',
      imageAlt: 'Older students collaborating in a science lab',
      href: '/academics/secondary',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="grow">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            {/* Page Heading */}
            <div className="flex flex-col gap-4 text-center mb-12">
              <h1 className="text-primary text-4xl md:text-5xl font-black leading-tight tracking-tight">
                Academics
              </h1>
              <p className="text-muted-foreground text-lg font-normal leading-normal max-w-3xl mx-auto">
                Welcome to the academic hub of Model College. We are committed
                to fostering an environment of academic excellence and holistic
                development for students across all our sections.
              </p>
            </div>

            {/* Curriculum Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {sections.map((section) => (
                <Card
                  key={section.id}
                  className="group flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div
                    className="w-full aspect-video bg-cover bg-center rounded-t-lg"
                    style={{ backgroundImage: `url(${section.imageUrl})` }}
                    aria-label={section.imageAlt}
                  />
                  <CardHeader>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                    <CardDescription className="mt-2">
                      {section.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <Button
                      asChild
                      className="w-full bg-orange-500 hover:bg-orange-500/90"
                    >
                      <a href={section.href}>
                        <span>Learn More</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Key Resources Section */}
            <div className="text-center">
              <h2 className="text-primary text-3xl font-bold leading-tight tracking-tight mb-8">
                Key Resources
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Departments Card */}
                <Card>
                  <Link href="/academics/departments" className="block p-3">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <GraduationCap className="size-10 text-orange-500" />
                        <CardTitle className="text-xl">
                          Our Departments
                        </CardTitle>
                      </div>
                      <CardDescription>
                        Explore the diverse fields of study offered at Model
                        College.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {departments.map((dept) => (
                          <Badge
                            key={dept.id}
                            variant="secondary"
                            className="text-xs hover:bg-primary/20 transition-colors"
                          >
                            {dept.name}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Link>
                </Card>

                {/* Academic Calendar Link */}
                <Card className="group cursor-pointer transition-colors hover:border-accent">
                  <Link href="/academics/calendar" className="block p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="h-8 w-8 text-orange-500" />
                      <CardTitle className="text-xl">
                        Academic Calendar
                      </CardTitle>
                    </div>
                    <CardDescription>
                      View important dates, events, and holidays for the current
                      academic year.
                    </CardDescription>
                  </Link>
                </Card>
              </div>

              {/* Time Table Notice */}
              <Alert className="mt-8 border-l-4 border-l-primary bg-primary/10">
                <Lock className="h-5 w-5 text-primary" />
                <AlertTitle className="font-bold">Time Table Access</AlertTitle>
                <AlertDescription>
                  For security, the detailed class time table is
                  password-protected and available exclusively to students and
                  staff via the Student Portal.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      </main>

      {/* Timetable Modal */}
      <TimetableModal
        isOpen={isTimetableModalOpen}
        onClose={() => setIsTimetableModalOpen(false)}
      />
    </div>
  );
}
