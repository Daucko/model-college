'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Images, MapPin, Phone, Mail } from 'lucide-react';

interface FacilitySection {
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
  layout: 'left' | 'right';
  hasHoverEffect?: boolean;
}

interface Amenity {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

export default function FacilitiesAndInfrastructure() {
  const facilities: FacilitySection[] = [
    {
      title: 'Modern Classrooms',
      description:
        'Our bright, spacious classrooms are equipped with the latest technology, including smart boards and ergonomic furniture, to create a dynamic and interactive learning atmosphere for students from KG to Secondary levels.',
      images: [
        {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7L-RLzEX3QaLCiaKXZrNxXjomjcbxtDNrgkYlBDf_cAQC2doDWvtNfE4xpg9OhYAIl-YzLPqAyAugGD6gM-w_aVtjVVAgNgA2qGtAntcrTcHRJdFQCdFh4KMXdo0UvBKhgHtD2_r-gUKewEFBADJdfYQ4WJR3gSuwvlYkLo0eG05Y5li7wPTVojGFu9c0SV6affOpVbvnnUUeCSiKPBxB7mt65YloxjZBB_XeyTDW7NaJpsJ9BDmLE1ie8zcggtRJmbEdtQDyO6XD',
          alt: 'Bright classroom with colorful chairs and tables for young students.',
        },
        {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKNStbib4LLD-20hF_awviYqSGbvSdoWGwCOc5y9BMoQXew9TgJ0rXXT5kAJraYTodXZbYns0sr-qL9UVyIyhtmgFLaugfQY18y-rEt0FH-Hhkns5dLn-2lyYuoTs4BhcoGbS_PAYG9zKnJ305Jw6_r30-LQza3lFDbx6qB75rr5O0auF7ZgbyPZ8GHZylr5R0cmvsjQqE89oeLs5K8FZxVqMRRvc0EdGTe_rCLQ5atjsOzuxf-Nd1afskyGYHWiXLviZMT8xAWpJs',
          alt: 'Modern secondary classroom with individual desks and a whiteboard.',
        },
      ],
      layout: 'left',
    },
    {
      title: 'Advanced Laboratories',
      description:
        'We provide fully-equipped science and computer labs that offer students hands-on experience, fostering curiosity and practical skills essential for STEM fields. Safety and modern equipment are our top priorities.',
      images: [
        {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCshBDpFWZuI6JklH0HfDLvpxm-vyYr1eWCL-alT2CRCk7WrjLa4ZV3m38qmhJkdKCfCxLS9l-cIOrTCXlLnSDGFlFVAaMpYz6Na_6TNzfMRpkd9oQAc4V83TBv9szxH0tCW8m1o6aSXkcJ2RXM-h1Er_C6T0oz5kMROewTMKPr4pEusnqM9VqjouvNGNfTxmnpYjJHHu9ve9-K21-mCHVmg6bdJhWkpB0owoDfibNDL9lIoSSmjmxosSpD3lvWOzio_qYflFQiflv0',
          alt: 'Students in lab coats conducting an experiment in a science laboratory.',
        },
      ],
      layout: 'right',
      hasHoverEffect: true,
    },
    {
      title: 'The Knowledge Hub Library',
      description:
        'Our library is a quiet sanctuary for learning, offering a vast collection of books, journals, and digital resources. It features comfortable reading areas and dedicated spaces for individual and group study.',
      images: [
        {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6m60yDRxEqGIcVZLBOl0_gd8ccft9doj9tmWe_OW2eEIjlLVVzw82ONX0IxPyNAxIqhRmn7Qb42wDQg8NSbpo74dhI9Po8AdfxdQ-EyPAnziBWGESINnvpuXyubVLntSJ5a49xQwXUmaIQERGx_wSR5rDw_lQEv6L4zYxjWpZQM6mC5eIyGUE0vM1rRVZAvC4BlQPvLi9YlXYbW_yUaCMQZAuOkkmt3lCwf2MTzIqgyhP3SNmnEweBovKOkoqnLTcnRlfYuhZxMtq',
          alt: 'Expansive library with tall bookshelves and wooden tables.',
        },
        {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNcpc1Vh7keWI-tZKXbir7TvXR1MLnNPvJYjFN8i-9oDJfR6H210b6xlYzKFH6Z2ml2tDTDUnrRBsJC3NQ8BGBsJ_FK-lhsiWputSWQw78xvAeTyhq8N8N83FuhexUr3IMyENQZWsUJaLv2B4ig183vXf_YegdkE24hSVyZTNq5CXNUH-h1XnIck7UsPaF-I2YtiQ10oA8Bbbx0oVKLUeLETUKAqiZiaMFJ2qHM2U_c44rYaCgDQkuEQ32zcLrs5RvqbW37-qxZXc3',
          alt: 'Student reading a book in a quiet corner of the library.',
        },
      ],
      layout: 'left',
    },
    {
      title: 'Dynamic Sports Facilities',
      description:
        'We believe in holistic development, which is why we offer a range of sports facilities including a large playground, basketball court, and indoor game rooms to promote physical fitness and teamwork.',
      images: [
        {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaPQqssfnU19F72kXI2-Jrhx61fX_6lKfIwbvwOPNZparJIA_AhrrJMmHidz_Mjq3MugtAv25zCrCjfQQxK8ixO7nFHWrNIo_4NJI6TOGIjRIbms0Ifo625QsaHvZ6nhlqotQ8KZkNS1uBFr3xnDnSQ-CrA8rw4Yae2Ab92s-_uM8u6yTQyG-7Bk5m72HHkJcP-CiLRLWXqmapusPitEF42q-RRrXzjfsitA4gZ7N18OwRDY4TKEWH2hZjBKbVc6Kh14IY40-5vFI2',
          alt: 'Students playing basketball on an outdoor court.',
        },
      ],
      layout: 'right',
      hasHoverEffect: true,
    },
  ];

  const amenities: Amenity[] = [
    {
      title: 'Cafeteria',
      description:
        'Hygienic and spacious, offering nutritious meals and snacks.',
      image: {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL4P6iTQ05VaKwww1CcHx3Ir8r5dWC783PN23emzzjCdlLbsX42dO3atelIv0uMgCrSUazUCjxWHcgZ7Umuea-Gh0HzL7y6JmXM3qrRS3TasQVL228oSqUW8PG6EVvZdu7l5gxT4XRf82DUYUgdRFch1O7tRJCzPoHtR-LERvpEW_tLvC_EJqJ8ohkzVJqPgqMo-6kyR15ZfXh5XDv-Oxznr7-3hT_3AfrgBWswqh_TaxPJDSk1X9qRcCOiITo3T-SBlDhC4bVyzjM',
        alt: 'Modern and clean college cafeteria with students dining.',
      },
    },
    {
      title: 'Auditorium',
      description:
        'State-of-the-art venue for events, performances, and seminars.',
      image: {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA73RCtrNEcljDHzvJ3l6e2G9nJmNHAv661qmQuW-GTGiSs2JQQUvp720qXPzwAsh1H6PJ3sxMYgMSqd5FRTr4TWiQQiVbuCuD56AsnL-zS1-BMejr-ksvfij3s-CITZndnSyhKRDsHt12y09koxWjeb3umsr6YzBV17tSRh8zYYt2oj4wsESofQrNqKVGn7n2h-VoKIjeF3fIQyxRm9cuuKqzWbkdH2LvI9-qglfzLHXgj5ALHwVdvZdq1Nr2uafcFhuvihEvyiR_Y',
        alt: 'A large auditorium with tiered seating and a stage.',
      },
    },
    {
      title: 'Art Room',
      description:
        'A creative space for students to explore their artistic talents.',
      image: {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBktKU3luUtNC4iQVdbPpMqDwCdqctO5ZbNKZnT5DbCktjKdDW7LmHZI-wDt53lKKhrYcNvlFI-r05YVtcOtEehi0yTonrHkbwinhiJeiNDFvwTpVh9U_jndTuaBtwQcglZVjc6ofSGEkds9b8eQdnmMfSv6kweJTM1UKmNUCV9zV9I51nGg1lnQlu8rueQRQ0lJKOfW5FNpu5XmSoowWRh4ntD5K3sQsnsTVHYMOh0JlPALLKp7HzwsZn5yeGjNTjoEC0A6fNPmxYD',
        alt: 'An art room filled with paintings, easels, and supplies.',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col gap-12">
          {/* Breadcrumbs & Page Heading */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <a
                className="text-muted-foreground hover:text-primary text-sm font-medium leading-normal transition-colors"
                href="#"
              >
                Home
              </a>
              <span className="text-muted-foreground text-sm font-medium leading-normal">
                /
              </span>
              <a
                className="text-muted-foreground hover:text-primary text-sm font-medium leading-normal transition-colors"
                href="#"
              >
                About Us
              </a>
              <span className="text-muted-foreground text-sm font-medium leading-normal">
                /
              </span>
              <span className="text-foreground text-sm font-medium leading-normal">
                Facilities & Infrastructure
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-primary text-4xl md:text-5xl font-black leading-tight tracking-tight">
                Facilities & Infrastructure
              </h1>
              <p className="max-w-3xl text-muted-foreground text-base font-normal leading-normal">
                Explore our commitment to providing a state-of-the-art learning
                environment designed to support and inspire our students at
                every stage of their education.
              </p>
            </div>
          </div>

          {/* Facilities Sections */}
          <div className="grid grid-cols-1 gap-12 md:gap-16">
            {facilities.map((facility, index) => (
              <FacilitySection key={index} facility={facility} />
            ))}
          </div>

          {/* Other Amenities Section */}
          <div className="flex flex-col gap-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Other Amenities
              </h2>
              <p className="text-muted-foreground leading-relaxed mt-2 max-w-2xl mx-auto">
                Beyond academics and sports, we provide a variety of amenities
                to ensure a comfortable and enriching campus life for all our
                students.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {amenities.map((amenity, index) => (
                <AmenityCard key={index} amenity={amenity} />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="bg-primary/10 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center flex flex-col items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Experience Our Campus Firsthand
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                The best way to appreciate our facilities is to see them for
                yourself. Schedule a campus tour to explore our environment and
                meet our faculty.
              </p>
              <Button
                size="lg"
                className="mt-4 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30"
              >
                Schedule a Campus Tour
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Visit Our Campus
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-muted-foreground">
                      123 Education Lane, Knowledge City
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
                    <p className="text-muted-foreground">
                      info@modelcollege.edu
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function FacilitySection({ facility }: { facility: FacilitySection }) {
  const isRightLayout = facility.layout === 'right';

  return (
    <div
      className={`flex flex-col gap-6 md:flex-row ${
        isRightLayout ? 'md:flex-row-reverse' : ''
      } md:items-center`}
    >
      {/* Text Content */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          {facility.title}
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          {facility.description}
        </p>
      </div>

      {/* Images */}
      <div
        className={`flex-1 ${
          facility.images.length > 1
            ? 'grid grid-cols-2 gap-4'
            : 'relative group'
        }`}
      >
        {facility.images.length > 1 ? (
          facility.images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`w-full rounded-lg object-cover ${
                index === 0 ? 'aspect-[4/5]' : 'aspect-[4/5]'
              }`}
            />
          ))
        ) : (
          <div className="relative">
            <img
              src={facility.images[0].src}
              alt={facility.images[0].alt}
              className="aspect-video w-full rounded-lg object-cover"
            />
            {facility.hasHoverEffect && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="secondary"
                  className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                >
                  <Images className="h-4 w-4" />
                  View Gallery
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function AmenityCard({ amenity }: { amenity: Amenity }) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <img
          src={amenity.image.src}
          alt={amenity.image.alt}
          className="aspect-video w-full rounded-t-lg object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg text-foreground mb-2">
            {amenity.title}
          </h3>
          <p className="text-sm text-muted-foreground">{amenity.description}</p>
        </div>
      </CardContent>
    </Card>
  );
}
