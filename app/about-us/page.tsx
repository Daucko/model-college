// app/about/page.tsx
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  School,
  History,
  Rocket,
  Megaphone,
  Users,
  ShieldCheck,
  Building,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';
import Link from 'next/link';

interface FeatureCard {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export default function AboutPage() {
  const featureCards: FeatureCard[] = [
    {
      id: 'story',
      icon: History,
      title: 'Our Story',
      description:
        'Founded with a vision for excellence, learn about the rich history and founding principles that have shaped Model College into a beacon of learning.',
      buttonText: 'Learn More',
      href: '/about-us/history',
    },
    {
      id: 'mission',
      icon: Rocket,
      title: 'Mission & Vision',
      description:
        'Our core values and educational philosophy guide our commitment to nurturing future leaders and fostering a passion for lifelong discovery.',
      buttonText: 'Learn More',
      href: '/about-us/mission',
    },
    {
      id: 'principal',
      icon: Megaphone,
      title: "Principal's Message",
      description:
        'A warm welcome from our principal, sharing insights into our educational approach, community spirit, and dedication to student success.',
      buttonText: 'Read the Message',
      href: '/about-us/principal',
    },
    {
      id: 'leadership',
      icon: Users,
      title: 'Leadership Team',
      description:
        'Meet the dedicated board members and administrators whose vision and expertise guide our college towards a future of excellence and innovation.',
      buttonText: 'Meet Our Leaders',
      href: '/about-us/leadership',
    },
    {
      id: 'accreditation',
      icon: ShieldCheck,
      title: 'Accreditation & Affiliations',
      description:
        'We are proud to be recognized by leading educational bodies for our high standards, ensuring a credible and quality education for all our students.',
      buttonText: 'View Accreditations',
      href: '/about-us/accreditation',
    },
    {
      id: 'facilities',
      icon: Building,
      title: 'Facilities & Infrastructure',
      description:
        'Explore our modern classrooms, advanced labs, extensive library, and vibrant sports facilities designed to support a holistic learning experience.',
      buttonText: 'Explore Our Campus',
      href: '/about-us/facilities',
    },
  ];

  // const handleCardClick = (href: string) => {
  //   // Navigate to the specific about page
  //   window.location.href = href;
  //   console.log(href);
  // };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <div className="relative">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.7) 0%, rgba(0, 51, 102, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLcNNctpoyQit7VHRkvyaXczwSfe6l0a2NNBiz-BkwB9XpdwY1ib4VcYAxPgJ4zkL1P2x4sjDJ-EA3q7ZbtkdHLTuVtGnNmKzgK7CAsEaOKSV-dfw_7Ig17ldy6a7ORlHyNSo29mGNktahUPbenvA9v-q6TZjfr71uo_fIK4qgxg9QvKQhPZTTq_lGU6PZtmjYaSc3jev3HeKOUocfTv6Wm_hdMVqVtO5IGv6xq5rjOSeZG-Gx31Mb_vGbGEZ1wgzTGGcI6M-PHDUo")`,
          }}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-4xl font-black leading-tight tracking-tight md:text-6xl">
              About Us
            </h1>
            <h2 className="text-white text-base font-normal leading-normal md:text-lg max-w-2xl mx-auto">
              Discover our history, mission, and the community that makes Model
              College a center for excellence in education from KG to Secondary.
            </h2>
          </div>
        </div>
      </div>

      {/* Content Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCards.map((card) => (
            <Card
              key={card.id}
              className="flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
              // onClick={() => handleCardClick(card.href)}
            >
              <CardHeader className="flex flex-col items-center text-center pb-4">
                <div className="text-orange-500 mb-4">
                  <card.icon className="h-12 w-12 text-orange-500" />
                </div>
                <CardTitle className="text-primary dark:text-blue-300 text-xl">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col grow">
                <CardDescription className="text-primary dark:text-gray-400 text-sm leading-normal grow">
                  {card.description}
                </CardDescription>
                <Button
                  className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white"
                  // onClick={(e) => {
                  //   e.stopPropagation();
                  //   handleCardClick(card.href);
                  // }}
                  asChild
                >
                  <Link href={card.href}>{card.buttonText}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-primary dark:text-white text-3xl font-bold mb-6">
                Why Choose Model College?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-2 rounded-lg">
                    <School className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-primary dark:text-white font-semibold">
                      Comprehensive Education
                    </h3>
                    <p className="text-primary dark:text-gray-400 text-sm mt-1">
                      From KG to Secondary, we provide a seamless educational
                      journey with focused learning at every stage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-primary dark:text-white font-semibold">
                      Experienced Faculty
                    </h3>
                    <p className="text-primary dark:text-gray-400 text-sm mt-1">
                      Our dedicated teachers are committed to nurturing each
                      student's unique potential and talents.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-2 rounded-lg">
                    <Building className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-primary dark:text-white font-semibold">
                      Modern Infrastructure
                    </h3>
                    <p className="text-primary dark:text-gray-400 text-sm mt-1">
                      State-of-the-art facilities that create an optimal
                      environment for learning and growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-8">
              <h3 className="text-primary dark:text-white text-2xl font-bold mb-4">
                Our Commitment
              </h3>
              <p className="text-primary dark:text-gray-300 mb-6">
                At Model College, we are committed to providing an education
                that goes beyond textbooks. We focus on developing well-rounded
                individuals who are prepared to face the challenges of tomorrow
                with confidence, creativity, and compassion.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white dark:bg-gray-600 p-4 rounded-lg">
                  <div className="text-primary dark:text-white text-2xl font-bold">
                    1000+
                  </div>
                  <div className="text-primary dark:text-gray-400 text-sm">
                    Students
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-600 p-4 rounded-lg">
                  <div className="text-primary dark:text-white text-2xl font-bold">
                    50+
                  </div>
                  <div className="text-primary dark:text-gray-400 text-sm">
                    Faculty Members
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-600 p-4 rounded-lg">
                  <div className="text-primary dark:text-white text-2xl font-bold">
                    15+
                  </div>
                  <div className="text-primary dark:text-gray-400 text-sm">
                    Years of Excellence
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-600 p-4 rounded-lg">
                  <div className="text-primary dark:text-white text-2xl font-bold">
                    10+
                  </div>
                  <div className="text-primary dark:text-gray-400 text-sm">
                    Academic Programs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
