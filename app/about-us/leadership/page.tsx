'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  alt: string;
}

export default function LeadershipTeam() {
  const boardMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Dr. Johnathan Doe',
      role: 'Chairman',
      description:
        'A visionary in education with over 30 years of experience, guiding the strategic direction of our institution.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC4mCN5WSayKwd9CkkjvRG0GkZMlDnziMzDws6thAwNw8-xfIMvZnT3dABeKewjb7n4Ka68zyxBbG1vCREIW3YeJOTejW_v0ToFv-mhOucw0XpSCFU1WXe9zGBYbdCfWfF4sXfjwO6bvILYHVFlr1YzAmDfUmH_v6HkKsjhUiDNCveZ9s9_f1wp8jOBFWkTSATh0pVfIdLYpQGRs7d1rpbFqGhSXAhE95Pbp-zxIK82pPj6clmjtLQRICaYE9QjwhK5-crQeoD7Gflu',
      alt: 'Portrait of Chairman',
    },
    {
      id: '2',
      name: 'Eleanor Vance',
      role: 'Board Member',
      description:
        'An expert in child development and curriculum design, ensuring our academic programs are world-class.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD0kfXj_kY4usLwvikO-3Pnsce8xxdwlKdDFvsc0Q6CBvBGADJAPDfVHoaxTanOb2ExoJJhVYEuU9ttECNxyW8dLmCP6w5iqtEj0yzbRnh86s9gDpyI35UGiCF1GptLWtQLe3L_5c0-7RZ9cH9kEymD9gEzpWCTZU3oEv7m7ZMEiJvwOeGQGxYGrFmH4N2El9x3tP78HF14Po7gpIJvb58au7ExCzpeflZ9pyXMbgqXVKQiddI9vZ62mToQGtKDIey2v-I7iBFpcImg',
      alt: 'Portrait of a Board Member',
    },
    {
      id: '3',
      name: 'Marcus Chen',
      role: 'Board Member',
      description:
        "A leader in technology and innovation, driving our college's digital transformation and future-readiness.",
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBhPsQ4sTVZZwOUOyiltyoWy6llZsjsxWI3o_TIdwm3P4-2gAZk6CFqma5nGjIspKiqtpH9149fjZq-dQjv8UoEQI5JZI-n14oy7Jl-tpt3qJqRRqYmUOdUA70NVaRBl79aFQxtgbS-xM6WJJ7K-yczJT-4pd4U9TkvjW-xNOCROD7-i7EPuyvocCMInUHgpsQK-9y01t6zmb4vBy9zb427P2CkADtFlpkR4a7uDu7hrGZFhylmrdcivrV-F479PwERRyyHudlupHql',
      alt: 'Portrait of a Board Member',
    },
  ];

  const academicLeaders: TeamMember[] = [
    {
      id: '1',
      name: 'Susan Richards',
      role: 'Principal',
      description:
        'Dedicated to fostering an inclusive and inspiring learning environment for all our students and staff.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBvp6pdVQ8fRg0X1k63j4MGeW0pSTHKaeqr5T0jOMmNHu5JcyhlqHVOFyYTQZOEVj-HOzSqlKTx3TibNCjxE2fhe6BfcfBMvnjIJ2812BhE4vuHX87lwmQPL6aDy-jEN4fcTbhJRs0GqtBZXQ1DHmHgMG_KxTIsB40nTGGVnad7ylcnGYnh54tcUvW1pep3E2dXY5L-15tdlAVWZ3qklKmPCE7oQZY34u4a1mRFU5_uUDKlz30sZyxeO5-lM-FXLX7Em9cfEaMS_wP6',
      alt: 'Portrait of the Principal',
    },
    {
      id: '2',
      name: 'David Miller',
      role: 'Vice-Principal (Secondary)',
      description:
        'Leads the secondary school with a focus on academic rigor and preparing students for higher education.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA7gkbsFDxPv-VF3IeKmTLP3EJtZp8dXo_yKiggxiEGYdk_S90LHNwkPUr7jRT6XVXmJcBXXARrNtKRZz90YyX4AXd60oLaLxLOPuCmrpoyE84cBXwgX8guazGWube3LI_79WIcto8WwpmDR7QiuzTsdiVQdP5IANlEffApZS54N16XGu0m7ND06yue3mAhA2Cmvyh6Q4FYUiGjZqhKelCwbt80pKQnRxInQTPKV8WkCGUIjvBAU6jUUGMgqitVxPrr16HwHLjzdGNu',
      alt: 'Portrait of the Vice-Principal, Secondary',
    },
    {
      id: '3',
      name: 'Maria Garcia',
      role: 'Vice-Principal (Primary)',
      description:
        'Champions a nurturing and creative atmosphere for our youngest learners to build a strong foundation.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAo-BbEQZGgvL3WazVlEi5vvPG9we1iBrppA8bMwYgM8LTYqce2gwd5v3jnOMOC_Ipuy_EwVp0pteA8H1xkJxI18MXxLzYVW0Gq8xJWInPLVGfuUu3Gl_3IcMdYoxyhkV0RuukvMc9_HqvLl6a2-RPlnOYCdFM1ssrWQbMwAHO94hqsarZmm6BMM5OCw-7SRNa4QwL4SUR3SqopEfZrrZACRglcrLMzbyC6r1O-TgbRCecsqQkCvGDqn4WvzfnESCTMazumzCHRBnHK',
      alt: 'Portrait of the Vice-Principal, Primary',
    },
    {
      id: '4',
      name: 'Olivia Chen',
      role: 'Head of Admissions',
      description:
        'Welcoming new families to our community and ensuring a smooth and supportive admissions process.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA31_tvM3O5ctlIIwx3Ke76UJHdqcieWX8qOX0YLhI-QN8U1d3VOpEyWyBC9RBbcHsa4FBpJzgb9XyquSgIiXgV4JNhhMPaf0wlLg2fHyIaWR4opm0fmRsKk2_13G8prQj75b3l0fe6EjeVXMPejObidvoSZvb4YmdkxZLzJnnGV2_BhntaRvj7mYEQZVl6QT28qYx87gXTDxgRKdHSCHL3h5DTsicOO-1mZpnqMl9uRGyuNXj5tkQxr5FjvA84J2vPo1A1MK1NVrB1',
      alt: 'Portrait of the Head of Admissions',
    },
    {
      id: '5',
      name: 'Aisha Patel',
      role: 'Head of KG Section',
      description:
        'Passionate about early childhood education and creating a joyful, play-based learning experience.',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDeNdxwWBXSTaW8O7NrPiuDE49inQX7R_AJP4HhRFmfflK5nzEOrOKVIILBoSD1Ju_3wpfM-k-gGLGOWEwN-kKwOeff1dLdV_fJoAc8LwoUZgRmbEdBx7t911X9JA7ubB7JN_TgLZKy_Z0hVMRDS01yNj-YAaynX_6Jx_cZfuIsmvbj-BxuLwM-f8HDKVDQTK8tQSh7cc6QQhh5JdvBqQmdMuNoYbabFmsfRWh--BhlPz3Fth8CN4FnOtrPxVqLnGZ94mBEDkCXOY2q',
      alt: 'Portrait of the Head of KG Section',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <a
            className="text-muted-foreground text-sm font-medium leading-normal hover:text-primary"
            href="#"
          >
            Home
          </a>
          <span className="text-muted-foreground text-sm font-medium leading-normal">
            /
          </span>
          <a
            className="text-muted-foreground text-sm font-medium leading-normal hover:text-primary"
            href="#"
          >
            About Us
          </a>
          <span className="text-muted-foreground text-sm font-medium leading-normal">
            /
          </span>
          <span className="text-foreground text-sm font-medium leading-normal">
            Leadership Team
          </span>
        </div>

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
            {boardMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </section>

        {/* Senior Academic Leadership Section */}
        <section>
          <h2 className="text-primary text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-8 text-center">
            Senior Academic Leadership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicLeaders.map((member, index) => (
              <TeamCard key={index} member={member} />
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

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <Card className="group hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-6 text-center h-full">
      <CardContent className="p-0 flex flex-col items-center w-full">
        <div className="relative mb-4">
          <img
            className="w-32 h-32 rounded-full object-cover border-4 border-muted group-hover:border-primary transition-colors"
            src={member.imageUrl}
            alt={member.alt}
          />
        </div>
        <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
        <p className="text-primary/80 text-sm font-semibold">{member.role}</p>
        <p className="text-muted-foreground text-sm mt-3 grow">
          {member.description}
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
