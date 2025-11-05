'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Link as LinkIcon } from 'lucide-react';

interface CommitteeMember {
  name: string;
  role: string;
  imageUrl: string;
}

interface Event {
  month: string;
  day: string;
  title: string;
  time: string;
  location: string;
}

export default function PTAPage() {
  const committeeMembers: CommitteeMember[] = [
    {
      name: 'Jane Doe',
      role: 'President',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCoCOcZNqdQlRr4XPTey5ZQA5bpo8fVoxPKvAnXKRzzp5HrtKAkSIFRC3hgdOnQKI9ngJHQm38wvud0tMpk64e3cFzoPDf4H0XMRR3KhEd3BVYO6Nwqn86MuHZsqjTp1WZBeEvE9eHL16HAR5UwVPnBI3kFMGd0gkG7Ha5bK8XKCi8jZhjkz6NiOcH_do9RmYZbwCXKqO3lfULjJXqZUZ6hgkodhzNWT394GrP8KgneY7vZLzaH24FC1DVPBFtMjwNNuWohaD_YNi7U',
    },
    {
      name: 'John Smith',
      role: 'Vice President',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAHEcU1gla7getWsHWoUIcpdMzjp7n729g8X6Hd01LFsz60smPSC-UjHKMgwevMGiPRvUlg0RVgG2QjBgSzffHywBpWRZHF4PUj5yvTyqpF3rLXCxc9Pvz0xgznLqbYbeg6PKW0Lb9W_zDHZSPAu9ThNFY6HnZ4DVAC2sJbTt23mi8cfjG5dqvwh48IREvysvNoo77PY-hNiUmOV05aK9X2F8sGfsXEv27_colwc2kOEK21zli1L93_F-ryT30Asmh5pv6Hju8P1qHP',
    },
    {
      name: 'Emily Johnson',
      role: 'Secretary',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCYkJLT0qGurye4Ry58PyPAlvoOeqOdNgwmGryrOYfIOJX07ts8njk1vKdVFmNjfyrAdVLT0-mKQGmWuM_leMbcZpoDEuJEAmOMTh1E9Gb2XXezDMfKslnRFfFWEMcxFKkT6vgVI60TCw2CVertT_B-Nkqc573Ib9uhza0uXOSHCbE-K87ypQwkI0AKoKQIOGedebdAF6x5gcRS7IPuyYid0VQ8DQx6FSfi7eu6ExJAOwHlWXmyDf5UFdySTe4n1XrIwYpFVZR_b70B',
    },
    {
      name: 'Michael Brown',
      role: 'Treasurer',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDAfALuFIKHI3yceEMpcYcjtd1TpGub9NPz6-gCu9r65Ea6nb6c2fjMlevQVQlEJAdgpSFXfwU0RQlNlAMNsx_iZs7sH8vkwt4KO25L2aY_m2B0QxS__vFer3hm1bE7hsc4c2zKMhaj5uDPOwD2zXxdoz8V1Abjtj1S_OfdjAaw0xiw5eLU6_XDpE4qqkm7MNObacfycaDjntkI5crleEiNH7a_CZdGCWFnBmsBZnnkQ9EqMvmh2bu3cxtCV0k07d-aS-V2AUSm_PDT',
    },
  ];

  const upcomingEvents: Event[] = [
    {
      month: 'OCT',
      day: '25',
      title: 'General PTA Meeting',
      time: '7:00 PM',
      location: 'School Auditorium',
    },
    {
      month: 'NOV',
      day: '15',
      title: 'Annual Bake Sale Fundraiser',
      time: 'All Day',
      location: 'Main Courtyard',
    },
    {
      month: 'DEC',
      day: '05',
      title: 'Winter Festival Planning',
      time: '6:30 PM',
      location: 'Staff Lounge',
    },
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap items-center gap-2 pb-8">
          <a className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary cursor-pointer">
            Home
          </a>
          <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">
            /
          </span>
          <a className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary cursor-pointer">
            Parents
          </a>
          <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">
            /
          </span>
          <span className="text-text-dark dark:text-text-light text-sm font-medium leading-normal">
            PTA
          </span>
        </div>

        {/* Hero Section */}
        <div
          className="relative flex min-h-[400px] w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat p-8 text-center mb-8"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDxYP5_rlqdqvwzKghJVCd1yLXTvlCTmVgdY25JRbErVoY_96KZlaPSzBlgcKaMfEnkb21ZbET4mDESkCCjfpjPOMnFS3VJgo4NCGQghQewNSP9z5g8mU1MgeWKLv7DUY2BmozQ0eWr9GH3QsfAPBDPxH6dqcRdBm9SdqTm-awG87LBDymCzKYT-2Xq60N6LHaFCNA4YCUhpgLytcepfHQe1CdwOwJnraD5oRlp0wWuKDjNq1jTyuRID7yRmTnOx8ZMzJ8pfecdva_6")',
          }}
        >
          <h1 className="text-white text-4xl font-black leading-tight tracking-tight md:text-5xl">
            Parent-Teacher Association (PTA)
          </h1>
          <p className="max-w-3xl text-lg font-normal text-white/90">
            Connecting parents, teachers, and our community to enrich our
            students&apos; educational experience and foster a collaborative
            school environment.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Left Column / Main Content */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            {/* Our Mission & Goals Card */}
            <Card className="border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <CardContent className="p-6">
                <h2 className="text-primary text-2xl font-bold leading-tight tracking-tight">
                  Our Mission & Goals
                </h2>
                <p className="text-text-dark/80 dark:text-text-light/80 mt-2 text-base font-normal leading-normal">
                  The Model College PTA is dedicated to fostering a strong
                  partnership between parents and our school. Our primary
                  objectives are:
                </p>
                <ul className="mt-4 list-inside list-disc space-y-2 text-text-dark/80 dark:text-text-light/80">
                  <li>
                    To promote the welfare of children and youth in home,
                    school, and community.
                  </li>
                  <li>To raise the standards of home life.</li>
                  <li>
                    To secure adequate laws for the care and protection of
                    children and youth.
                  </li>
                  <li>
                    To bring into closer relation the home and the school, that
                    parents and teachers may cooperate intelligently in the
                    education of children and youth.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Meet the Committee Section */}
            <div>
              <h2 className="text-primary text-2xl font-bold leading-tight tracking-tight mb-4">
                Meet the Committee
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {committeeMembers.map((member, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <img
                      alt={`Profile photo of ${member.name}`}
                      className="h-28 w-28 rounded-full object-cover shadow-md"
                      src={member.imageUrl}
                    />
                    <h3 className="mt-3 text-lg font-bold">{member.name}</h3>
                    <p className="text-accent-orange font-medium">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column / Sidebar */}
          <div className="flex flex-col gap-8">
            {/* Get Involved Card */}
            <Card className="border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-text-dark dark:text-text-light">
                  Get Involved
                </h3>
                <p className="text-text-dark/80 dark:text-text-light/80 mt-2 text-base font-normal leading-normal">
                  Joining the PTA is a great way to support your child&apos;s
                  education and connect with our school community. We welcome
                  all parents to join us!
                </p>
                <Button className="mt-4 w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white h-12 text-base font-bold">
                  Become a PTA Member
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Events Card */}
            <Card className="border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-text-dark dark:text-text-light">
                  Upcoming Events
                </h3>
                <ul className="mt-4 space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex flex-col items-center justify-center rounded-lg bg-primary/20 p-2 text-primary dark:bg-primary/30 dark:text-white min-w-12">
                        <span className="text-xs font-bold uppercase">
                          {event.month}
                        </span>
                        <span className="text-2xl font-black">{event.day}</span>
                      </div>
                      <div>
                        <h4 className="font-bold">{event.title}</h4>
                        <p className="text-sm text-text-dark/70 dark:text-text-light/70">
                          {event.time} - {event.location}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Contact Us Card */}
            <Card className="border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-text-dark dark:text-text-light">
                  Contact Us
                </h3>
                <p className="text-text-dark/80 dark:text-text-light/80 mt-2 text-base font-normal leading-normal">
                  Have questions or want to get in touch? Reach out to us!
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    className="text-primary font-medium hover:underline cursor-pointer"
                    href="mailto:pta@modelcollege.edu"
                  >
                    pta@modelcollege.edu
                  </a>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <LinkIcon className="h-5 w-5 text-primary" />
                  <a className="text-primary font-medium hover:underline cursor-pointer">
                    PTA Contact Form
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
