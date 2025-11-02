// app/academics/departments/page.tsx
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Department {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
}

export default function DepartmentsPage() {
  const departments: Department[] = [
    {
      id: 'sciences',
      title: 'Sciences',
      description:
        'Focusing on biology, chemistry, and physics, we encourage scientific inquiry with state-of-the-art lab facilities.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCnEzorRe6ZHi6FszWfFJVsyZzfiZ44M3EVfI3QfuJvQQEEMRinR8tlO7y12b_1aOJBgTT_xcVPIcOixo_0_j9YMrb2nuzFyueh09cwGfDqBAuQeraRdq4pf-Th9TmYKVAjr3Qh_Q5TXWf-aTWhNSQezb-GcAAmVSKqMC8Kf0SeVvCZ1rLRcj28RjbXRp39sPbCGieamEmpmsE2ka8N6AtYLHWpCF9dJD_u8pxo-bwdzdekFx4ffTnoczdTi4Fl9IeZ0YZ8TodEJ7nc',
      imageAlt: 'A chemistry lab with beakers and scientific equipment',
      href: '/academics/departments/sciences',
    },
    {
      id: 'humanities',
      title: 'Humanities',
      description:
        'Delving into history, geography, and social studies to develop critical thinking and global perspectives.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB3W2JkON3gFy2nloqHPxq-9vM8goxSdJFn2dF2vNGMJbDfcb8kQV66t0IxOAjHmXv2sI29AqBoGBXvKKtxHuTw-bnzsCsmB-n31wdvatrEjWhH-HFd3woLBsMoGSwKwHaQwM3KHu0Vd4dOUdejWr6LfY3HAdGcYGQaaxfTU6GenYgTyg8zVX-qokhCNcaLI4KC-rkxNCLgDWFHS3rEnQ2MTIk_ZIHLowhni5xhpFgfvFJhWiJsM-anYX2xo4_Xa6PpaIKPPTRJSA1G',
      imageAlt: 'A library with rows of old books on shelves',
      href: '/academics/departments/humanities',
    },
    {
      id: 'languages',
      title: 'Languages',
      description:
        'Mastering communication and literary skills through comprehensive English and foreign language programs.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCR5TSGIipJrXGZjLPqru9Vape50poPpovfnmYn2jUJkKHmJSsbbwuKxtIVfQMhl-FmxYAPBgZZtk6j_Q835zJjrOJVrorTxvon00lrDv2bkYXcTnfFvKDNDxuPrdSqamz6Wc7NRe0mrGjuYnPW7-_u8ulaL394_Ces4I_gzj3B4VvwUJBfTjuwxI5y7jC2FkH4BtWqJgsrhhZJWPZh_K0H-c7Ymkdwrg1Z3BtfL30b_EeAZGaFyebej9RkmKMGL_i-NyE0zsyK4D9J',
      imageAlt: 'Scrabble tiles spelling out words in different languages',
      href: '/academics/departments/languages',
    },
    {
      id: 'arts-music',
      title: 'Arts & Music',
      description:
        'Nurturing creativity and self-expression through visual arts, music, and drama programs.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD5M4tbX5wCTAMxvkxvqD1QhuKQkOtyUR8XvZxBEyanCpqeCbFTEiQhklwSa3cpYP1hPP07G4GSiX3PQalRx83pGPFLtEKrJvV9PPv-b_0WNW3uco_Kxy4zK58wz_E0n_MYDKTgTyO_GJXi6c6skrPZ-CJItyeRNnQ3HyvSXU4hik9U90QseKn5oJFe5br6UMoTjiZA4CvJ5Kfjqkt7rLyAS7jY0Zo9tbzSUcbjnhIyCPWlQOu2pn6_XWxwtkUWJ9iJ3G8uGQEnMCzx',
      imageAlt: 'A person painting on a canvas with colorful paints',
      href: '/academics/departments/arts-music',
    },
    {
      id: 'physical-education',
      title: 'Physical Education',
      description:
        'Promoting a healthy lifestyle and teamwork through a diverse range of sports and wellness activities.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBDyDJwaE31qaq9ryV8weDbftO4ioeWioZFwxM-eIlEL7gO2d2lnkV45G58q5EynK0jNKrDcKKq6HfYUlBi-YAu3EMKvT8zX_YDjxoeeURxn17vOjRM4XQnNH2g0LdUp12Ph7viQzYnGo3tGPPH-qEiDT7GT95-33a2sLXdes1-RX0ITv5V39_u2KlficCs5ZzJY0FykH1NlDNC7jZN408-0tyIU1kNx304UoyEOXydwI24fRubeQpXZtyt3Y3q6dqhdqWHjQjS6uYn',
      imageAlt: 'Students playing basketball on an outdoor court',
      href: '/academics/departments/physical-education',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1">
        <div className="px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-2 px-4 mb-4">
              <a
                className="text-muted-foreground hover:text-primary text-sm font-medium"
                href="/"
              >
                Home
              </a>
              <span className="text-muted-foreground text-sm font-medium">
                /
              </span>
              <a
                className="text-muted-foreground hover:text-primary text-sm font-medium"
                href="/academics"
              >
                Academics
              </a>
              <span className="text-muted-foreground text-sm font-medium">
                /
              </span>
              <span className="text-foreground text-sm font-medium">
                Departments
              </span>
            </div>

            {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-3 px-4 mb-10 md:mb-16">
              <div className="flex flex-col gap-3">
                <h1 className="text-primary text-4xl md:text-5xl font-black leading-tight tracking-tight">
                  Our Academic Departments
                </h1>
                <p className="text-muted-foreground text-base font-normal leading-normal max-w-3xl">
                  Explore the diverse fields of study offered at Model College,
                  designed to foster intellectual growth and curiosity from KG
                  to Secondary levels.
                </p>
              </div>
            </div>

            {/* Departments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {departments.map((department) => (
                <Card
                  key={department.id}
                  className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  <div
                    className="w-full aspect-video bg-cover bg-center"
                    style={{ backgroundImage: `url(${department.imageUrl})` }}
                    aria-label={department.imageAlt}
                  />
                  <CardHeader className="grow">
                    <CardTitle className="text-xl">
                      {department.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-normal grow">
                      {department.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <a href={department.href}>
                        Explore {department.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
