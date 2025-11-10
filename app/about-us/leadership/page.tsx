'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import {
  getStaffMembersByCategory,
  getAllStaffMembers,
} from '@/data/staff-data';

export default function LeadershipTeam() {
  const boardMembers = getStaffMembersByCategory('board');
  const academicLeaders = getStaffMembersByCategory('academic');

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Breadcrumbs */}
        <nav className="flex flex-wrap gap-2 mb-6">
          <Link
            className="text-muted-foreground text-sm font-medium leading-normal hover:text-primary transition-colors"
            href="/"
          >
            Home
          </Link>
          <span className="text-muted-foreground text-sm font-medium leading-normal">
            /
          </span>
          <Link
            className="text-muted-foreground text-sm font-medium leading-normal hover:text-primary transition-colors"
            href="/about-us"
          >
            About Us
          </Link>
          <span className="text-muted-foreground text-sm font-medium leading-normal">
            /
          </span>
          <span className="text-foreground text-sm font-medium leading-normal">
            Leadership Team
          </span>
        </nav>

        {/* Page Header & Intro */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-primary text-4xl md:text-5xl font-black leading-tight tracking-tight">
            Our Leadership Team
          </h1>
          <p className="text-base font-normal leading-normal mt-4 max-w-3xl mx-auto text-muted-foreground">
            Meet the dedicated and experienced leaders who guide Model College
            with a shared vision for excellence, innovation, and nurturing the
            potential of every student.
          </p>
        </div>

        {/* Board of Directors Section */}
        <section className="mb-16">
          <h2 className="text-primary text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-8 text-center">
            Board of Directors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Senior Academic Leadership Section */}
        <section>
          <h2 className="text-primary text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-8 text-center">
            Senior Academic Leadership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicLeaders.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Contact Info Section */}
        <Card className="mt-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Get In Touch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-muted-foreground">
                    123 Education Lane, Knowledge City, 45678
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">info@modelcollege.edu</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

interface TeamCardProps {
  member: {
    id: string;
    name: string;
    title: string;
    shortDescription: string;
    image: string;
  };
}

function TeamCard({ member }: TeamCardProps) {
  return (
    <Card className="group hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-6 text-center h-full">
      <CardContent className="p-0 flex flex-col items-center w-full">
        <div className="relative mb-4">
          <img
            className="w-32 h-32 rounded-full object-cover border-4 border-muted group-hover:border-primary transition-colors"
            src={member.image}
            alt={`Portrait of ${member.name}`}
          />
        </div>
        <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
        <p className="text-primary/80 text-sm font-semibold">{member.title}</p>
        <p className="text-muted-foreground text-sm mt-3 grow">
          {member.shortDescription}
        </p>
        <Button
          variant="link"
          className="mt-4 text-orange-500 hover:underline p-0 h-auto"
          asChild
        >
          <Link href={`/about-us/leadership/${member.id}`}>Read More</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
