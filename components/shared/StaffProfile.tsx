'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Link2, Building } from 'lucide-react';
import { StaffMember } from '@/data/staff-data';

interface StaffProfileProps {
  staffMember: StaffMember;
}

export default function StaffProfile({ staffMember }: StaffProfileProps) {
  const [activeTab, setActiveTab] = useState('biography');

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <nav className="mb-8 text-sm text-muted-foreground">
        <div className="flex items-center space-x-2">
          <a href="/" className="hover:text-primary transition-colors">
            Home
          </a>
          <span>/</span>
          <a href="/about" className="hover:text-primary transition-colors">
            About Us
          </a>
          <span>/</span>
          <a
            href="/leadership"
            className="hover:text-primary transition-colors"
          >
            Leadership Team
          </a>
          <span>/</span>
          <span className="text-foreground font-medium">
            {staffMember.name}
          </span>
        </div>
      </nav>

      {/* Profile Header */}
      <Card className="relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 opacity-50" />
        <CardContent className="relative p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <img
                alt={`Portrait of ${staffMember.name}`}
                src={staffMember.image}
                className="h-48 w-48 md:h-56 md:w-56 rounded-full object-cover border-4 border-background shadow-xl"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {staffMember.name}
              </h1>
              <p className="text-lg text-primary font-semibold mt-1">
                {staffMember.title}
              </p>
              <blockquote className="mt-6 border-l-4 border-primary pl-4">
                <p className="text-xl italic text-muted-foreground">
                  {staffMember.quote}
                </p>
              </blockquote>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs Section */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="biography">Biography</TabsTrigger>
          <TabsTrigger value="research">Research & Interests</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        {/* Biography Tab */}
        <TabsContent value="biography" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="whitespace-pre-line">{staffMember.biography}</p>

                <h3 className="text-2xl font-semibold mt-8 mb-4">Education</h3>
                <ul className="space-y-2">
                  {staffMember.education.map((degree, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      {degree}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Research & Interests Tab */}
        <TabsContent value="research" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h3 className="text-2xl font-semibold mb-4">Published Works</h3>
                <ul className="space-y-2 mb-8">
                  {staffMember.research.map((work, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      {work}
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-semibold mb-4">
                  Areas of Interest
                </h3>
                <p className="mb-4">
                  {staffMember.name.split(' ')[0]}'s current research focuses on
                  innovative educational approaches and their impact on student
                  development.
                </p>
                <ul className="space-y-2">
                  {staffMember.interests.map((interest, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contact Tab */}
        <TabsContent value="contact" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <p className="text-lg mb-6 text-muted-foreground">
                For inquiries related to{' '}
                {staffMember.category === 'board'
                  ? 'board matters and strategic direction'
                  : 'academic programs and school operations'}
                , please feel free to reach out. Please note that{' '}
                {staffMember.name.split(' ')[0]}'s role is{' '}
                {staffMember.category === 'board'
                  ? 'strategic and she does not handle admissions or individual student matters'
                  : 'focused on academic leadership and school operations'}
                .
              </p>

              <div className="space-y-4 text-lg">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <a
                    href={`mailto:${staffMember.contact.email}`}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {staffMember.contact.email}
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Link2 className="h-6 w-6 text-primary" />
                  <a
                    href={staffMember.contact.linkedin}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>

                <div className="flex items-start space-x-3">
                  <Building className="h-6 w-6 text-primary mt-1" />
                  <div className="text-foreground whitespace-pre-line">
                    {staffMember.contact.office}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
