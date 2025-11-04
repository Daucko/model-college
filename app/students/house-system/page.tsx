'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Trophy, ArrowRight, GraduationCap } from 'lucide-react';

export default function HouseSystem() {
  const houses = [
    {
      name: 'Griffin House',
      motto: '"Integrity, Courage, Unity"',
      color: 'red',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCIdPI9BVP65fmUeSY-wCrF28tWLXLJEUTj3Lco4GmaOMlfFh9A53t6sBD4gnZLJkLySr0sOkkkW7iINz7LYvUxV5A4nkKePeGG-t_aKjDbgcmPyTu13lwNyoSuo0XLQCet1Q-mwLOubfrGrdUKY_0bOHqGXBijRDtm0IDj61GkN3yovNEhx1m00VVT9rEFWn1rl3QdWE33F5jt8fn8PifbeL2SspUGkFlna1d7QM3PnONkJ2efu6ERhSlzOBh3epYkl_sOB757t-9I',
    },
    {
      name: 'Phoenix House',
      motto: '"Resilience, Wisdom, Honor"',
      color: 'green',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCyMAuhHaCxwBaSJCqICBlvkKZu0tuys7Q6XTtx-ZhPealLwX0aWlJiqqqBeki2by1vw4ZVYU77LHkqE9IqJV1EEp8oMTJuT2XgNmmqKCLEqyOd2WcYL94_GeHlEqb9ypMwhmlX9cHCPHjBETHXe1H5s55rXwReeWPFh_IjrVLsa4Vzwqaz6lprWAjCDZp1M8MGjqLA5TrY23lW999K1dcN_tpr8oy2fQTQty6UdqiURETfqa7FAvgHr0zEf8aGwV_DEyKTaPJEzGOv',
    },
    {
      name: 'Dragon House',
      motto: '"Strength, Ambition, Spirit"',
      color: 'yellow',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDoStn2bxa6Wo3p4F_H1Bn-KWeaUaleYQ6dJGRdRr3bTpSgQfJKcwrqYl8cSHQSqJ5LAbPwr3c7ULzKpu3HD53kl_PVWGIm8TL2C9EpydqfIHEgkuH9O96yfR5Ya39cgudJSD-Opd35C3lsMA55pWAgJMEEueSEMcEZd9iFuPyCMlMe4FmeE6DpHpQ0XOJVf3U9ZZUAHNLaoH-wRMSFSjZMQsTeLI8h5uNj2_Y_hpyqMdQAgoiQpCTHIXrKBjbOvwJwVMt1jedoyMMs',
    },
    {
      name: 'Titan House',
      motto: '"Leadership, Loyalty, Vision"',
      color: 'purple',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDYs7tUNyfY4LPiWYad0nYkNdeg2er62I5DvWYE3Mo46Yi2-C2vJ-g8K7xjIpAv63Y86rSAgSsBzlwlMFraptffhLoGpZpuzKRrP_AUnIXZH-n8YfnuR6_VtVHf2XcxEM2iM1jCphP-VfGpI-xZxvZOb2HL2N4HDNKLytFvlSoK266IJDj67gzFFbXEn9etMhg310jqHuUSgiPqWPOCraxmtU9JKdD6MuB4wGiAQT6tgAh-JTRtgO6--CrhKrXwj-YI7BCPdoaVBZaj',
    },
  ];

  const informationCards = [
    {
      icon: Users,
      title: 'House Assignment',
      description:
        'Upon enrollment, each student is assigned to one of our four houses. Siblings are placed in the same house to foster family tradition and spirit. This assignment remains with the student throughout their time at Model College, creating a lasting sense of belonging.',
    },
    {
      icon: Trophy,
      title: 'Inter-House Competitions',
      description:
        'A variety of inter-house events are held annually, spanning sports, academics, and the arts. Key events include the Annual Sports Day, Debate Championships, Science Fair, and Cultural Fest. Students earn points for their house, culminating in the awarding of the prestigious House Cup at the end of the year.',
    },
  ];

  const galleryImages = [
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIkCgvH0_0OTJvO_FbkHnb0ksL2rvowRe3pnQM-rtTHrY7vI8jDLa-y1No90fN0bmxx4t2IQTFGmZ7_X7jwOJpOz4-xTn9-eaMrarAKRU6JtVcINq6LxinuvSnbIJQl78QtCriwjZOS8lToIv-oOonbOWkEJcu2KDV-gn7WvpMcnqo9uDR8Gi16sz3uxhaH1Hqyk6BeUY3J_I5QkJwiV6LofnF_h-M9tfJ4v-xoZyBx-G2a5iRRy4Ofy0hJboJUrrYKXU7xJE1bSYq',
      alt: 'Students competing in a race on sports day',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJX806l_V9L5l1caDSQs3ro2caNpvFqNsnkydSjhFh7kh6frqsJ-zBtsPpDoZDdHAbbThbjRRH6f42iT6Z6DTxjpfTEYlqSEJZRkk-pCvgOxibQUyTvO4UBK78KxcDk3mHpwbOmEEzkJWLj70pdV0kzet9mtq2Otfq9qpctXXfxViUGYH1emRd0_cJqCaiKa6_-UOB1eIGW_hREAJmNNZgDa1UBetDWazWpfLSNfW9RKJn_kFl8SXDA6DNmZNbXi7PqSRVOQg1HZL_',
      alt: 'Students participating in a house debate competition',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3AA1sfvPuZ0BVp5vJgYhQiqXzaRtlpexi5dUey6jx4BAFla8QHmdlhy7qzhL_Z3hDtKFJjFKCDQZEU_Mk6PFsaGd_fIFPMMov32EGsfUM7GCi2l7x9Poxd3kp-bAxz2SvqCHeFX16CeCaedu1d5VSMhYJKjD8Fv1fxRMMdotU2RteaUksnlD6ObyJh7gaGWdyPfSG32cFql8y_yMHOK1YbDXPgatovDN0Bhn6icFDEls0gkls0LNaG7xZq5aJL42DovSMl5bvffnN',
      alt: 'Students displaying artwork at the cultural festival',
    },
    {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-yypLrzYd0cG1xp3e-qAKTZoPEsaZBysQbiSD9r_OLiVbrhimCz9RSkaFcAugz8XJMXSFCcvylSWIhoI_nF6aqkXMonb-LKGQ4ygaOAQstyNo00H0DP4lCvzMEqjQ9Xrp4Q9cn4mQaHQ0jqK71zudNFfYZ9MmEWR4RBZYdeWiMgxjCinJluwEZId5UNSBVVLxZSNoXiqeTjd3oFp7g0rOOS6c0nMwOg_uQ3Fo-ARtgAamDs-zpedxmtPVBAI44zVzNcojLwJFezeG',
      alt: 'Students cheering for their house members with colorful flags',
    },
  ];

  const getHouseStyles = (color: string) => {
    const styles = {
      red: {
        border: 'border-red-500',
        text: 'text-red-500',
        bg: 'bg-red-500/10 hover:bg-red-500/20',
      },
      green: {
        border: 'border-green-600',
        text: 'text-green-600',
        bg: 'bg-green-600/10 hover:bg-green-600/20',
      },
      yellow: {
        border: 'border-yellow-500',
        text: 'text-yellow-500',
        bg: 'bg-yellow-500/10 hover:bg-yellow-500/20',
      },
      purple: {
        border: 'border-purple-600',
        text: 'text-purple-600',
        bg: 'bg-purple-600/10 hover:bg-purple-600/20',
      },
    };
    return styles[color as keyof typeof styles] || styles.red;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-10 lg:px-20 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumbs & Page Heading */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              <a className="hover:text-primary transition-colors" href="#">
                Home
              </a>
              <span>/</span>
              <a className="hover:text-primary transition-colors" href="#">
                Students
              </a>
              <span>/</span>
              <span className="text-foreground font-medium">House System</span>
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-primary mt-3">
              Our House System
            </h1>
          </div>

          {/* Introduction Text */}
          <p className="text-lg leading-relaxed mb-12 text-muted-foreground">
            The House System at Model College is designed to foster a sense of
            community, camaraderie, and healthy competition among students. It
            provides a framework for pastoral care, academic support, and a wide
            range of extracurricular activities, encouraging leadership and
            teamwork across all sections from KG to Secondary.
          </p>

          {/* Section Header */}
          <h2 className="text-3xl font-bold leading-tight tracking-tight mb-8 text-center">
            Meet the Houses
          </h2>

          {/* House Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {houses.map((house, index) => {
              const styles = getHouseStyles(house.color);
              return (
                <Card
                  key={index}
                  className={`overflow-hidden transition-transform hover:scale-105 border-t-4 ${styles.border}`}
                >
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <img
                      src={house.image}
                      alt={`Emblem of ${house.name}`}
                      className="h-24 w-24 mb-4"
                    />
                    <h3 className={`text-2xl font-bold mb-2 ${styles.text}`}>
                      {house.name}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground mb-4">
                      {house.motto}
                    </p>
                    <Button
                      variant="outline"
                      className={`mt-auto gap-2 h-10 px-6 rounded-full ${styles.bg} ${styles.text} border-0`}
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Information Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">How It Works</h3>
              {informationCards.map((card, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                      <card.icon className="text-primary h-5 w-5" />
                      {card.title}
                    </h4>
                    <p className="text-base text-muted-foreground">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                House Spirit in Action
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {galleryImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className="rounded-lg shadow-md aspect-square object-cover w-full"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CTA Banner Section */}
          <Card className="bg-primary/10 border-0">
            <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-primary mb-1">
                  Stay Updated!
                </h3>
                <p className="text-base text-muted-foreground">
                  Check out the latest inter-house competition results and see
                  the current house standings.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 min-w-[180px] h-12"
              >
                View Leaderboard
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
