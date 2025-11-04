'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Brain,
  Heart,
  Users,
  Megaphone,
  Lightbulb,
  Trophy,
  GraduationCap,
} from 'lucide-react';

export default function StudentLife() {
  const supportServices = [
    {
      icon: Brain,
      title: 'Counseling Services',
      description:
        "Confidential support for students' emotional and mental well-being.",
    },
    {
      icon: Heart,
      title: 'Health Services',
      description:
        'On-campus medical assistance and health education programs.',
    },
    {
      icon: Users,
      title: 'Mentorship Program',
      description:
        'Peer and faculty mentoring to guide academic and personal growth.',
    },
  ];

  const growthOpportunities = [
    {
      icon: Megaphone,
      title: 'Leadership Programs',
      description:
        'Student council, club leadership, and workshops to build essential leadership skills.',
    },
    {
      icon: Lightbulb,
      title: 'Skill-building Workshops',
      description:
        'From coding to public speaking, we offer workshops to explore new interests.',
    },
    {
      icon: Trophy,
      title: 'Competitions & Forums',
      description:
        'Opportunities to compete and showcase talents in academic and creative fields.',
    },
  ];

  const images = [
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMiUbKgT1_CmhtjyBAFtw78gkElwUllvcG10YnEfIMhe0uWpwQfrZIqaNS0wIE2xs6yyxJZrZzxWbvgdWzYIPzNdPmmvuSg2FkjXX0NLWtsNe3lPEz4wnxjZS0r0FEb9riJVsQ2LkZWIhgYhxdtRTUKwgSKOcxegBgsdYzarcYuy4D47MKVlsOJa0dtgNJHqGrOcN3KlBhet8vxwgcsaDmWKhZG7b2NdkyIkuw58qBTbWE7yUN2eK1CnLKrrjETWJ-st2bztEHmdjZ',
      alt: 'Students participating in a science fair, gathered around a project.',
      className: 'col-span-1',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlbX4k98IQAq657X7i9KhpmXzxx073B_vPSfVIbrHWrMc7scWetbcWzNk9ffmi_ZCCLm9yyn-GmD5c4iYLugcZ6AF2y3H1TFx8OxoRdt_pIRUHW3bBmBRqtgs7kwWdgKY64626NR2wTTKqrn3AVon0QJF4LwxO9zUaFA_7T4IZwIdsRZ3-wteIsrqjKSMN6yPTky2jMVFcc8ryfHw-dSEjX1eNuYHgtve1xDLHf4eM2Xel6PZvktzMRf9KPrzgT9PipMONrR6uRw-C',
      alt: 'Students playing basketball on an outdoor court.',
      className: 'col-span-2',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL_69TD6Kqww4PUa3enNPGqccRuNbF2A_m9_0TkO7DGvQ_GeLWX9qz9-YPKSsjaBtdyYvdjl95FlgzS3qP9bWVxdc_AAN5RPWf5KdPch1AqBV05eC1PztbYFa-rX6OcHs3uKVaK441-OW_kcB64M06P3GJ9tO5VNhiuBThx_ff3_b4KfFEg5f-w3IDc7vGTA_TM0ZLQ9gie7zETOZl_BVzuaYYUANf1PZjU0iDgnun5E79wjJBCc9XkSvi78Tq8Uha3uhHDoaPH4iW',
      alt: 'Students performing on stage during a cultural festival.',
      className: 'col-span-2',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz0PARXkxTLUXxuDEdf2ZArrLDcKcBLDNFZQCS4XOMIXeQCBMnz0US06fVatjWASS4pUufidXC2eb7zhMOI2zQ_ckLVHr6aJkcn7z70VbnfsXucWSQn0nRikYUS8P2xEta8y1x9lxYFlAj-7UNk3rgc2TQBTp1vCDTM63n2M5x_fcvRh4u96FzQ9eNVWXK0yzxJ_K6QNi7R991e0-ZBAXllr2LRsqH0Zg3MPCIkf2KThibnLR1BeSf-EoicQ_V3_nQSkhIuTXuG3mi',
      alt: 'A group of students volunteering for a community clean-up.',
      className: 'col-span-1',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 mb-4">
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
              Students
            </a>
            <span className="text-sm font-medium text-muted-foreground">/</span>
            <span className="text-sm font-medium text-foreground">
              Student Life
            </span>
          </div>

          {/* Page Heading */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Student Life
            </h1>
          </div>

          {/* Body Text */}
          <p className="text-lg font-normal leading-relaxed text-muted-foreground mb-12">
            At Model College, we believe in a holistic educational journey that
            extends beyond the classroom. Our vibrant student life is designed
            to nurture well-rounded individuals, fostering personal growth,
            community spirit, and a lifelong love for learning.
          </p>

          {/* Section 1: Daily Schedule */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold leading-tight tracking-tight mb-6">
              Daily Schedule & Routine
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Primary School
                  </h3>
                  <p className="text-muted-foreground">
                    A typical day includes a blend of core academic lessons,
                    creative arts, physical education, and play-based learning
                    to stimulate young minds in a nurturing environment.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Secondary School
                  </h3>
                  <p className="text-muted-foreground">
                    Students engage in a structured schedule with specialized
                    subject classes, lab work, collaborative projects, and
                    dedicated time for co-curricular activities and sports.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 2: Well-being and Support */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold leading-tight tracking-tight mb-6">
              Well-being and Support Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {supportServices.map((service, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-orange-100 text-orange-500">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Section 3: Student Activities */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold leading-tight tracking-tight mb-6">
              Student Activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`rounded-xl overflow-hidden ${image.className}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Community Engagement */}
          <section className="mb-16">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 items-center">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold leading-tight tracking-tight mb-4">
                    Community Engagement
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    We encourage our students to become active, compassionate
                    citizens. Through volunteering programs, social
                    responsibility projects, and local partnerships, students
                    learn the value of giving back to the community.
                  </p>
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    Learn More
                  </Button>
                </CardContent>
                <div className="h-64 md:h-full">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6s2RJ6eZyeCFWB5OcWY2vC47anKg2h-CsI1qbqwbFNvaYY2F_ZqP9yyU1sjBF3gwJCB91UVEbChh3bey5XyfdRHko5DHXf_0etz5D0F0DgYLh3iA1XayFYotuNz97fe72-3r9Z-LNxqsC6VMqUIQNI0gB8mv3W6KP-_KqEsVmWFST_0tGjrVAI7msPUieab3w6YV0FLVA3QOeiOc5MqIpukWSl8aKenvu77LQ-TUL2i7sLTPikaUhmz2iaDw8LBSEyhVxuVzlVxq-"
                    alt="A group of smiling students working together on a community garden project."
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </section>

          {/* Section 5: Personal Growth */}
          <section>
            <h2 className="text-3xl font-bold leading-tight tracking-tight mb-6">
              Opportunities for Personal Growth
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {growthOpportunities.map((opportunity, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <opportunity.icon className="text-primary text-3xl mb-3" />
                    <h3 className="font-bold text-lg mb-2">
                      {opportunity.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {opportunity.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
