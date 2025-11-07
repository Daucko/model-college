'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Award, Users, Handshake } from 'lucide-react';

export default function MissionAndVision() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto flex flex-col gap-8 md:gap-12">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2">
            <a
              className="text-muted-foreground hover:text-primary dark:text-blue-300 text-sm font-medium leading-normal"
              href="#"
            >
              Home
            </a>
            <span className="text-muted-foreground text-sm font-medium leading-normal">
              /
            </span>
            <a
              className="text-muted-foreground hover:text-primary dark:text-blue-300 text-sm font-medium leading-normal"
              href="#"
            >
              About Us
            </a>
            <span className="text-muted-foreground text-sm font-medium leading-normal">
              /
            </span>
            <span className="text-foreground text-sm font-medium leading-normal">
              Mission & Vision
            </span>
          </div>

          {/* Page Heading */}
          <div className="flex flex-wrap justify-between gap-3">
            <h1 className="text-primary dark:text-blue-300 text-4xl md:text-5xl font-black leading-tight tracking-tighter">
              Mission & Vision
            </h1>
          </div>

          {/* Mission Section */}
          <section className="flex flex-col gap-4">
            <h2 className="text-primary dark:text-blue-300 text-2xl md:text-3xl font-bold tracking-tight">
              Our Mission
            </h2>
            <blockquote className="border-l-4 border-accent pl-6 py-2">
              <p className="text-foreground text-lg md:text-xl font-medium leading-relaxed italic">
                To foster a nurturing and inclusive environment that empowers
                students from KG to Secondary levels with a transformative
                education, cultivating critical thinking, creativity, and a
                lifelong passion for learning.
              </p>
            </blockquote>
            <p className="text-foreground text-base font-normal leading-relaxed">
              We are committed to providing a dynamic and supportive learning
              journey. Our curriculum is designed to challenge students
              intellectually while encouraging personal growth and ethical
              development. Through a blend of rigorous academics, diverse
              extracurricular activities, and community engagement, we aim to
              shape well-rounded individuals who are prepared to thrive in a
              global society.
            </p>
          </section>

          {/* Vision Section */}
          <section className="flex flex-col gap-4">
            <h2 className="text-primary dark:text-blue-300 text-2xl md:text-3xl font-bold tracking-tight">
              Our Vision
            </h2>
            <blockquote className="border-l-4 border-accent pl-6 py-2">
              <p className="text-foreground text-lg md:text-xl font-medium leading-relaxed italic">
                To be a leading institution recognized for academic excellence
                and for developing compassionate, innovative leaders who
                contribute positively to the world.
              </p>
            </blockquote>
            <p className="text-foreground text-base font-normal leading-relaxed">
              Our vision propels us to continuously innovate and improve. We
              aspire to create a future where our graduates are not only
              successful in their chosen careers but are also empathetic and
              responsible citizens. We envision a community of learners who are
              equipped with the skills and mindset to tackle future challenges
              and make a meaningful impact.
            </p>
          </section>

          {/* Core Values Section */}
          <section className="flex flex-col gap-6">
            <h2 className="text-primary dark:text-blue-300 text-2xl md:text-3xl font-bold tracking-tight">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="shrink-0 size-10 flex items-center justify-center rounded-full bg-orange-500/20 text-accent">
                    <Shield className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary dark:text-blue-300">
                      Integrity
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Upholding the highest ethical standards in all our actions
                      and fostering a community of trust.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="shrink-0 size-10 flex items-center justify-center rounded-full bg-orange-500/20 text-accent">
                    <Award className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary dark:text-blue-300">
                      Excellence
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Committing to the highest quality in teaching, learning,
                      and personal development.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="shrink-0 size-10 flex items-center justify-center rounded-full bg-orange-500/20 text-accent">
                    <Users className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary dark:text-blue-300">
                      Community
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Building a supportive and inclusive environment where
                      every individual feels valued and respected.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="shrink-0 size-10 flex items-center justify-center rounded-full bg-orange-500/20 text-accent">
                    <Handshake className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary dark:text-blue-300">
                      Respect
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Promoting a culture of mutual respect, empathy, and
                      understanding among all members.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-8 text-center bg-primary text-primary-foreground rounded-xl p-8 md:p-12">
            <div className="max-w-xl mx-auto flex flex-col items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                Ready to Join Our Community?
              </h2>
              <p className="text-base text-primary-foreground/80">
                Discover how Model College can be the foundation for your future
                success. Explore our history or start your application today.
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Apply Now
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-background hover:bg-background/90 text-primary"
                >
                  Learn More About Us
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
