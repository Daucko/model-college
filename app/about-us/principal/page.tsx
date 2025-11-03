'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, MapPin, Phone } from 'lucide-react';

export default function PrincipalMessage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 mb-8 text-sm md:text-base">
          <a
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
            href="#"
          >
            Home
          </a>
          <span className="text-muted-foreground">/</span>
          <a
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
            href="#"
          >
            About Us
          </a>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">
            Principal&apos;s Message
          </span>
        </div>

        {/* Page Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column: Image */}
          <div className="lg:w-1/3 flex-shrink-0">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-lg">
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-cover"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNXQ8y_bXtJm5DubXH7D3WgyLJOE2-iyo5JgRtjm8waKN4IWbjxmaoPNuToh6l2kHzN9bmYlqsyag_Qn3VFakbvbL0U0t3JCIEDYZSx8MwtwjlAtOzMfxtodq9BULk_bes4nY95EG22130p1p8OqthRWQXi2hujn8sQpPsJZM76IZOBod1GGnMXUPFCkP9hkXue2WBC1zWIXP5Q-GVPqkol2fJzpWHNte3iZfonENVQk5o1nPJGIL4Dd_P6JHp7-h0FFZruz-zFJKg")`,
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary/20 backdrop-blur-sm p-4 rounded-xl shadow-md">
                <svg
                  className="h-10 w-10 text-primary"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:w-2/3">
            {/* Page Heading */}
            <div className="mb-8">
              <h1 className="text-primary text-4xl md:text-5xl font-black leading-tight tracking-tight">
                A Message from Our Principal
              </h1>
              <div className="w-24 h-1.5 bg-orange-500 mt-4 rounded-full"></div>
            </div>

            {/* Body Text */}
            <div className="space-y-6 text-foreground/80 text-base md:text-lg leading-relaxed">
              <p>
                Welcome to Model College, a place where curiosity is nurtured,
                potential is realized, and futures are built. It is with immense
                pride that I lead this institution, a community dedicated to
                academic excellence and holistic development.
              </p>
              <p>
                Our philosophy is rooted in the belief that every student is a
                unique individual with the capacity to achieve greatness. We are
                committed to providing an environment that is not only
                intellectually stimulating but also safe, supportive, and
                inclusive for all, from our youngest learners in KG and Nursery
                to our senior students preparing for the world beyond.
              </p>
              <p>
                We aspire to cultivate not just scholars, but also compassionate
                leaders and responsible citizens. Our dedicated faculty and
                staff work tirelessly to inspire a lifelong love for learning
                and to equip our students with the skills and values needed to
                navigate a complex world.
              </p>
              <p>
                We encourage our students to dream big, to challenge themselves,
                and to contribute positively to our community and society at
                large. Together, we are building a legacy of excellence and
                creating a brighter future for generations to come.
              </p>
            </div>

            {/* Signature Block */}
            <div className="mt-12 pt-8 border-t border-border">
              <p
                className="text-2xl italic text-muted-foreground"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  transform: 'rotate(-2deg)',
                }}
              >
                Dr. Eleanor Vance
              </p>
              <p className="text-foreground font-semibold mt-2">
                Dr. Eleanor Vance
              </p>
              <p className="text-muted-foreground">Principal, Model College</p>
            </div>

            {/* Optional CTA Links */}
            <div className="mt-12 flex flex-wrap gap-4">
              <Button
                variant="outline"
                className="h-11 px-5 bg-primary/10 hover:bg-primary/20 text-primary"
              >
                <span>Our Vision & Mission</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="h-11 px-5 bg-orange-500/10 hover:bg-orange-500/20 text-orange-500"
              >
                <span>Meet the Leadership</span>
                <Users className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <Card className="mt-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Get In Touch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
