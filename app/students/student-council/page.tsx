'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Vote, Users, GraduationCap } from 'lucide-react';

export default function StudentCouncil() {
  const councilMembers = [
    {
      name: 'Olivia Chen',
      role: 'Head Girl',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAW58gKve2aJl-b72TcDgN9XaONeptVLfRWwX2Q3K9jIX1D7Ok4gQZjYdk5sfccpN4SaRE-tK-GitJYjXDIqvxQfSXErmdqTzj5esiq5NkRClWrKFW__cRY1o7bH8QloNtQB55zuHGxMIjeQTKm3DlVvL-akhig2kopGoxTOU0UILsodIENqWNTNwgPL6fDRvVHLRaJTeCH7A6e148ww9c6X43OpsYuuDyts34bj_OFLA5QWKZaBrxvKnuaRm9ZBlU_71hH3kgjQBwl',
    },
    {
      name: 'Liam Rodriguez',
      role: 'Head Boy',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBcPCNOkQkqPvDerhHm_AYePqiDcOqwEPGl0GTSqmj8WVy_-JfMUBFr1S_iYKOmCvUqWwttOG2OSmpVTM75FSUtC5oD7k2TO28KNmZVYYRW82d3vJXJqxIHx29WTqACFEltx3Kr6-4clNdc8Qey7lh9NUK31edqMZOqSlEf-DiBN_Yl9HNx8B9PbGZ1zHLZNTl2rRvDLkOwhW-GI2ksBqs-lKXyN4382Sws_X9F1OOoh4X9f1WRUiAmmNlIg1f-s4w8uUWgU7QGf00g',
    },
    {
      name: 'Sophia Patel',
      role: 'Sports Captain',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCAu9nabPZwRupjfwLQ7OByZv6RVwLtxR9sxLD_ATCob_fp9un3KZtcwL_7raLcB138OgTllDb9tn41DZpwFPOjkDKo6B5uf8qKAs4LQrhp0xvlDnSMCkk3eieYuNqgr1Q7VBUnCCnkgGmQ0Wvn-8ceqMF-PnYZIF85Q8aHAeixyk44dvVlJzdAhUAy7J4Yze-eUIbHy-uHIiz1C0jalmXITVGEKYo6hJ_Kzi3j1IRdltY0-mMB5hPpE5QWRo8vL7Su55s4yzQVl-1J',
    },
    {
      name: 'Noah Kim',
      role: 'Prefect',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuADX9d_-FCfAe_WhpGPqjWk-GWUxWuAPlx6koN1NrVDvKGNVAKt5J-oPFhPyMIFleMZCqytxL2vfSOAMDPUI81dJVfMKv31uAKsHMMzafi7hIWBXUPNoWKeNT93vZUL9-m9yz-zEQD1QXrf5TNYL3lDi5YuA7NfXfFCVo8gVCmQvCBDeHw3tPSmORLjUsN8qkawBwzxBjFiDMB0aBWI9MkuR5tWqrTrQtMTa-1wCYbjbwUnSoILZmE5hqnRlDtcL4FsjIcM_TSj1aFa',
    },
  ];

  const involvementOptions = [
    {
      title: 'Run for Election',
      description:
        'Are you a natural leader? Do you want to make a difference? The annual Student Council elections are your chance to step up. Find out about eligibility, key dates, and the election process.',
      buttonText: 'Learn More',
      icon: Vote,
      buttonVariant: 'default' as const,
      className: 'bg-orange-500 hover:bg-orange-600',
    },
    {
      title: 'Join a Committee',
      description:
        'Contribute your skills and passion to one of our student-led committees. From organizing events to managing clubs, there are many ways to volunteer and shape campus life.',
      buttonText: 'Explore Committees',
      icon: Users,
      buttonVariant: 'default' as const,
      className: 'bg-primary hover:bg-primary/90',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-10 lg:px-20 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 p-4">
            <a
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
              href="#"
            >
              Home
            </a>
            <span className="text-base font-medium text-muted-foreground">
              /
            </span>
            <a
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
              href="#"
            >
              Students
            </a>
            <span className="text-base font-medium text-muted-foreground">
              /
            </span>
            <span className="text-base font-medium text-foreground">
              Student Council
            </span>
          </div>

          {/* Page Heading */}
          <div className="flex flex-wrap justify-between gap-3 p-4 mt-4">
            <div className="flex min-w-72 flex-col gap-3">
              <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-primary">
                Student Council
              </h1>
              <p className="text-lg font-normal leading-normal text-muted-foreground">
                Leading the way for a better student community. Learn about our
                mission, members, and how you can get involved.
              </p>
            </div>
          </div>

          {/* Introduction */}
          <p className="text-base font-normal leading-relaxed pb-3 pt-5 px-4 text-muted-foreground">
            The Model College Student Council is a student-run organization
            dedicated to representing the student body, fostering a vibrant
            campus life, and acting as a bridge between students and the
            administration. We organize events, manage student clubs, and
            advocate for policies that enhance the educational experience for
            everyone.
          </p>

          {/* Council Members Section */}
          <div className="mt-10">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary px-4 pb-3">
              Meet the Council 2024
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
              {councilMembers.map((member, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-orange-500"
                >
                  <CardContent className="p-6 text-center">
                    <img
                      src={member.image}
                      alt={`Headshot of ${member.name}`}
                      className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-muted group-hover:border-orange-500 transition-colors"
                    />
                    <h3 className="text-xl font-bold mt-4 text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mt-1">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Get Involved Section */}
          <div className="mt-16 p-4">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary mb-4">
              Get Involved
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {involvementOptions.map((option, index) => (
                <Card key={index}>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {option.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {option.description}
                    </p>
                    <Button
                      size="lg"
                      className={`gap-2 h-12 px-6 ${option.className}`}
                    >
                      <option.icon className="h-5 w-5" />
                      {option.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
