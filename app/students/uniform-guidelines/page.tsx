'use client';

import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Download, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function UniformGuidelinesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Link
                href="#"
                className="text-muted-foreground text-base font-medium hover:text-primary transition-colors"
              >
                Home
              </Link>
              <span className="text-muted-foreground text-base font-medium">
                /
              </span>
              <Link
                href="#"
                className="text-muted-foreground text-base font-medium hover:text-primary transition-colors"
              >
                Students
              </Link>
              <span className="text-muted-foreground text-base font-medium">
                /
              </span>
              <span className="text-foreground text-base font-medium">
                Uniform Guidelines
              </span>
            </div>

            {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-3 mb-4">
              <h1 className="text-primary text-4xl lg:text-5xl font-black leading-tight tracking-tight min-w-72">
                Uniform Guidelines
              </h1>
            </div>

            {/* Introduction */}
            <p className="text-muted-foreground text-base font-normal leading-relaxed mb-10">
              Adherence to the Model College uniform policy fosters a sense of
              identity, unity, and pride among our students. These guidelines
              are designed to ensure all students are dressed smartly and
              appropriately for a positive learning environment.
            </p>

            {/* Accordions */}
            <Accordion
              type="single"
              collapsible
              className="flex flex-col gap-3"
            >
              <AccordionItem
                value="early-years"
                className="border border-border rounded-lg bg-card px-4 py-2"
              >
                <AccordionTrigger className="hover:no-underline py-2">
                  <p className="text-foreground text-lg font-medium leading-normal text-left">
                    Early Years (KG & Nursery)
                  </p>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base font-normal leading-relaxed pb-2 space-y-3 pt-2">
                  <p>
                    <strong>Boys:</strong> Blue polo shirt with college crest,
                    navy blue shorts, white socks, and black shoes.
                  </p>
                  <p>
                    <strong>Girls:</strong> Blue polo shirt with college crest,
                    navy blue skort, white socks, and black shoes.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="primary-school"
                className="border border-border rounded-lg bg-card px-4 py-2"
              >
                <AccordionTrigger className="hover:no-underline py-2">
                  <p className="text-foreground text-lg font-medium leading-normal text-left">
                    Primary School
                  </p>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base font-normal leading-relaxed pb-2 space-y-3 pt-2">
                  <p>
                    <strong>Summer Uniform:</strong>
                    <br />
                    Boys: White short-sleeved shirt, grey shorts, school tie,
                    grey socks, black shoes.
                    <br />
                    Girls: White short-sleeved blouse, grey tunic, school tie,
                    white socks, black shoes.
                  </p>
                  <p>
                    <strong>Winter Uniform:</strong>
                    <br />
                    Boys: White long-sleeved shirt, grey trousers, school tie,
                    navy blue v-neck sweater with crest, grey socks, black
                    shoes.
                    <br />
                    Girls: White long-sleeved blouse, grey skirt, school tie,
                    navy blue v-neck sweater with crest, grey tights, black
                    shoes.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="secondary-school"
                className="border border-border rounded-lg bg-card px-4 py-2"
              >
                <AccordionTrigger className="hover:no-underline py-2">
                  <p className="text-foreground text-lg font-medium leading-normal text-left">
                    Secondary School
                  </p>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base font-normal leading-relaxed pb-2 space-y-4 pt-2">
                  <p>
                    <strong>Formal Uniform:</strong>
                    <br />
                    Boys: White long-sleeved shirt, black trousers, school tie,
                    black blazer with crest, black socks, black leather shoes.
                    <br />
                    Girls: White long-sleeved blouse, black skirt (knee-length),
                    school tie, black blazer with crest, black tights, black
                    leather shoes.
                  </p>
                  <p>
                    <strong>Sports Uniform:</strong>
                    <br />
                    Unisex: House-colored t-shirt, navy blue sports shorts or
                    track pants, white sports socks, and athletic trainers.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="general-rules"
                className="border border-border rounded-lg bg-card px-4 py-2"
              >
                <AccordionTrigger className="hover:no-underline py-2">
                  <p className="text-foreground text-lg font-medium leading-normal text-left">
                    General Rules for All Sections
                  </p>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base font-normal leading-relaxed pb-2 space-y-4 pt-2">
                  <p>
                    <strong>Footwear:</strong> All shoes must be plain black,
                    polishable leather. No trainers, boots, or sandals are
                    permitted with the formal uniform.
                  </p>
                  <p>
                    <strong>Accessories:</strong> A single, plain watch is
                    permitted. For girls, one pair of small, simple stud
                    earrings. No other jewelry is allowed. Hair accessories must
                    be plain navy blue or black.
                  </p>
                  <p>
                    <strong>Grooming:</strong> Hair must be neat, tidy, and of a
                    natural color. Long hair must be tied back. Boys must be
                    clean-shaven.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Visual Guide Section */}
            <div className="mt-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Visual Guide
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden border-border">
                  <img
                    alt="Male student in secondary school formal uniform"
                    className="w-full h-48 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuP5an1c6gEyqRzxNcdPFdHqxX7t-j49VmYeBv9nHhgJ8B32b9VvcED21jSZ6QKUczrwpuYKGnfJhmTTSg686q9DF-Z_yELP-5Ty_BpUaiNIf8LCAO52OvFCJ6bgxSkFsJP1JRbH3oqTrvGhoOxH4pushrussI6WEyBUeebkpgO4RmY02fE5UIXMU_O3EN9mWxKQ9UnLISaB5tHeYbkM6aC5TrQXk2Rp2lEiC9054HTqD4HaKwmC9jZRE9fcNkXlorQWvp2i2qjYEg"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground">
                      Secondary - Boys
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Formal blazer and tie.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-border">
                  <img
                    alt="Female student in primary school summer uniform"
                    className="w-full h-48 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqTcs1O9zlctlDUl0ft4v3xgXC4gUaBskxMg5Ff1iollBjlpl3mZ9ezs56rwap6Uc2CV6Ho7HCjMp5rQKjN1a6XwQpr-D_9s9BuaviMmvbGKMzR6hBhPznlngEsDTvCBf2rcJjtPmCxGDJOsC73qwZ7hfZY6SVZ_2b-RE1iqX-mqWo8ycRwmxmZFZxE9JJOWjCrjbAMXW5ahR_3MBNd6rIOTgeQzmUEUeQiBC9Rr2LNWQ7oV06b2R_QWii80gT0aXt99sNy6mBrmdj"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground">
                      Primary - Girls
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Summer tunic and tie.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-border">
                  <img
                    alt="Young student in early years polo shirt uniform"
                    className="w-full h-48 object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIOn_l0Am4p4NTixK2jOF1KTkORFlc8bsIEiH0zAoyYMNxE9N_9oUjQh0ppl7Q7OwS6AP8P9V6Iu2NmpHsowpwEc7PdxCny7qzw6C834Ilt4EXfbQsXa7REsDbf3OaFzSrHojQwIYnmbZU-6_ftY7fF0iMfebxGPyTMfn5aMENpmlpLWTbz3qXJw6IBuewsPmxindUlHUprVQ9z2gJB-Q2NQK6kuG1t6I05Y76gDEKk3h1iJWaw1kDa2uGD0qRmuYeJfsY5hFkOwHI"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground">
                      Early Years
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Unisex polo shirt.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Download Section */}
            <Card className="mt-12 border-border">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">
                      Download Full Guidelines
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      Get the complete uniform policy in a printable PDF format.
                    </p>
                  </div>
                  <Button className="w-full sm:w-auto h-12 px-6 bg-orange-500 hover:bg-orange-600 text-white text-base font-bold">
                    <Download className="h-5 w-5 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
