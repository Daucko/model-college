'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, User, Clock, GraduationCap } from 'lucide-react';

export default function ClubsAndSocieties() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'academic', label: 'Academic' },
    { id: 'arts', label: 'Arts' },
    { id: 'sports', label: 'Sports' },
    { id: 'community', label: 'Community Service' },
  ];

  const clubs = [
    {
      id: 1,
      name: 'Debate Society',
      description:
        'Hone your public speaking and critical thinking skills in a dynamic and supportive environment.',
      category: 'academic',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBCLDqx0n4px8fMxffvwA59qYtJkhcEOHUktjAlz74OfyMVh2Q8uTERBVrLWrkhkSAuXr6JL0ZPRZ_UD9WApOFt42_niHEFkOBAfmTY72PP1UAhLfDXBTJdRqvqZf6NQ5LzZzBZHfX5fM4vBhrljYvX8rFo-mQWEA5-2IfMzhq3o0mrbuCYrLgXdcwjAqftMS8UHxl464Cmsjms4kuw31nZreuBY3Zg326X6idi9SWcLSFbvKHcaMSn12Bi_5fT7F2DK6HIdUx9Npo9',
      advisor: 'Prof. Eleanor Vance',
      schedule: 'Wednesdays, 4 PM',
    },
    {
      id: 2,
      name: 'Astronomy Club',
      description:
        'Explore the cosmos with fellow stargazers. We host observation nights, workshops, and guest lectures.',
      category: 'academic',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA26UBL1jxhY2uJR5Px8plCNzJOTHdjP9ygfQ34Hn9vUG6OLL_qDl89cmfu4K5kEHojqVKoOGUcjyUZTozuqhSrwZCa_UdiYNDPrffldaRNI8u8BppBY4-Z7CIimFkz8lcVQ_izgu8sm0xNt1JdYBjSdIr9B2qq2zYNKtwLHYqrTgyJB-16yJQgXNToscOO4gvEDO_FamUzOZIHtQgKFJ8g2gYjcFY6L1QMJ7Q6SbdIZib8N1OUJq1zzP5PYCG089BR9Mhb93I0oxXt',
      advisor: 'Dr. Kenji Tanaka',
      schedule: 'Fridays, 8 PM',
    },
    {
      id: 3,
      name: 'Music Production Guild',
      description:
        "Whether you're a beginner or a seasoned producer, join us to create, collaborate, and share your music.",
      category: 'arts',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDPodtsxMBeFHuXSmjcw0Qa86WQ4ds2vwKSCOzXBw03DJqC2sk67LkjUVhkUC-No4N0B7ZWiHWoYGFpKmHOMOQBhrlTIoJwPEzziAPf4bF_tFB2W-MBoB0b1ajzmDp0Qwo_qJNF-ZwX5V66RtmhRhP_BJOMIgvVVH-uXqfktzNdS7Tq4drDIQlVEpjQyk2py-5zmRLpuey_eWh3T948LukaG6PPLPcVsmwL28vd4g3QweKF2JjFMDcAdaT8yHMmqw_TPyWxPJpFLyr7',
      advisor: 'Ms. Chloe Davis',
      schedule: 'Tuesdays, 5 PM',
    },
    {
      id: 4,
      name: 'Volunteer Corps',
      description:
        'Make a difference in our community. Join us for various service projects throughout the year.',
      category: 'community',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBnDUyqaOPiYQYCsvhjOVFvOfP7VxKSHqXBjUva57NnZVrTqYeOYvweTV2_1cMqFtuNfwhWPanuu1FRJyr--0EJDd-ADnJapfXizDJ6JfZ2m-ThNObY-t_GywbmioC9lhehy8FHzo5Z59WwvhnPZgbWZBb3d0XJLYy_vHywT7MbZC6_CerAZTJbfEXP1rBltZuLvEz-9ydCco-T2VFX7shWXH6VRo-K4D0AZFXdkOT3WXWxeAGwF2QV7UW-xYQ1Mf9yi0704oYt7akb',
      advisor: 'Mr. Samuel Green',
      schedule: 'Bi-weekly Saturdays',
    },
    {
      id: 5,
      name: 'Varsity Soccer Team',
      description:
        'Compete at the highest level and represent Model College. Tryouts are held at the start of each season.',
      category: 'sports',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCMS3bNsYCgyo6qFugyIqgvJFBXq83t6agfb8zOAilReog1ZQzFX5QpTNiMN64NQAT5KPeOWyBqdCSQXUb1Hyc2izSVxPIWEBJHHcvkt30ldl43V6wPvujkTt_FvAoIAQmsO0X8MFkQSxg4v8GX8TYgkLcK58gHtOd4LRhjky2iaP2oAORJtga3LGyNprFO1fGE-L2W1hWvHesTL7Dkj3pmUDoMRzsEI0R5vLBJoMQ0DGb46fQQPN5nS4YdST9KiNKYQM4XBhBxTxpL',
      advisor: 'Coach Rodriguez',
      schedule: 'Daily after school',
    },
    {
      id: 6,
      name: 'Future Entrepreneurs',
      description:
        'Connect with aspiring innovators and learn the fundamentals of starting your own business.',
      category: 'academic',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuARLTaaHzJrHXMVyhtbp8lH129GQhA9vY7bVlq7XV2QpPpEeUT6ddpSt755LPYRYZD9iZwEIdcPyrDac-Rmfke52O6TUIc6QiW5_9aoIBEtXZQRIzwuiK2fNrxQUq-ECbPQkuNLnVgR0mmouTtmJu4K2eFlshI6XrtF3FgOsKi_TbWHtkQGZ1Mm2IMP8ObZor6SeG8o9tBOxb7ViilhpaUX9ywG0nWvXMHPDGDiz7gISsrQ6mbqdL__KKMvkplk3FrHWN3Gn_Tcq-39',
      advisor: 'Dr. Aisha Khan',
      schedule: 'Thursdays, 3:30 PM',
    },
  ];

  const filteredClubs = clubs.filter((club) => {
    const matchesSearch =
      club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      club.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      activeFilter === 'all' || club.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-10 lg:px-20 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 pb-4">
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
              Clubs & Societies
            </span>
          </div>

          {/* Page Heading */}
          <div className="flex flex-wrap justify-between gap-3 pb-8">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-black leading-tight tracking-tight text-primary">
                Clubs & Societies
              </h1>
              <p className="text-base font-normal leading-normal text-muted-foreground max-w-2xl">
                Explore your interests and get involved! Find a club or society
                that matches your passion and connect with fellow students.
              </p>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search Bar */}
            <div className="flex-grow">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search for a club..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>

            {/* Filter Chips */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? 'default' : 'outline'}
                  className={`h-12 px-4 ${
                    activeFilter === filter.id
                      ? 'bg-orange-500 hover:bg-orange-600'
                      : 'bg-muted hover:bg-primary/10'
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Club Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClubs.map((club) => (
              <Card
                key={club.id}
                className="group overflow-hidden transition-shadow duration-300 hover:shadow-lg"
              >
                <img
                  src={club.image}
                  alt={club.name}
                  className="h-48 w-full object-cover"
                />
                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">{club.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-4 flex-1">
                    {club.description}
                  </p>

                  <div className="space-y-3 text-sm border-t border-border pt-4">
                    <p className="flex items-center gap-2 text-foreground">
                      <User className="h-4 w-4" />
                      <strong>Advisor:</strong> {club.advisor}
                    </p>
                    <p className="flex items-center gap-2 text-foreground">
                      <Clock className="h-4 w-4" />
                      <strong>Meets:</strong> {club.schedule}
                    </p>
                  </div>

                  <Button className="mt-6 w-full bg-orange-500 hover:bg-orange-600">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results Message */}
          {filteredClubs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No clubs found matching your search criteria.
              </p>
            </div>
          )}

          {/* Load More Button */}
          <div className="flex justify-center mt-12">
            <Button size="lg" className="min-w-[120px] h-12 px-6">
              Load More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
