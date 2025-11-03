'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-background font-display text-text-light dark:bg-background-dark dark:text-text-dark">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 mb-4">
            <a
              className="text-gray-500 dark:text-gray-400 text-sm font-medium hover:text-primary"
              href="#"
            >
              Home
            </a>
            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              /
            </span>
            <a
              className="text-gray-500 dark:text-gray-400 text-sm font-medium hover:text-primary"
              href="#"
            >
              About Us
            </a>
            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              /
            </span>
            <span className="text-text-light dark:text-text-dark text-sm font-medium">
              Our Story
            </span>
          </div>

          {/* Page Heading */}
          <div className="mb-8">
            <h1 className="text-primary text-4xl md:text-5xl font-black tracking-tight">
              Our Story
            </h1>
          </div>

          {/* Body Text (Introduction) */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <p className="text-lg leading-relaxed">
                Welcome to the story of Model College. From our humble
                beginnings to the esteemed institution we are today, our journey
                is one of passion, dedication, and an unwavering commitment to
                excellence in education. This is a brief, inspiring overview of
                our vision, our history, and our enduring legacy.
              </p>
            </CardContent>
          </Card>

          {/* Section: Founding */}
          <div className="grid md:grid-cols-5 gap-8 items-center mb-16">
            <div className="md:col-span-3">
              <h2 className="text-primary text-3xl font-bold mb-4">
                The Founding Vision
              </h2>
              <p className="mb-4">
                Model College was founded in 1953 by a group of visionary
                educators who believed in the power of knowledge to transform
                lives. Their mission was simple yet profound: to create an
                inclusive learning environment that would nurture intellectual
                curiosity, foster critical thinking, and inspire a lifelong love
                of learning.
              </p>
              <p>
                They laid the foundation for an institution built on the core
                principles of integrity, community, and innovation—values that
                continue to guide us today.
              </p>
            </div>
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-0">
                  <img
                    alt="Vintage photo of the original college building facade"
                    className="rounded-lg w-full h-auto object-cover aspect-4/3"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQbnUcia88UEUyjZZHc4rLV0MtlfjitE0qm-dfwgCH73GtGHk1oofSBgeUNHfO48wKL4kE-9fAcvaiyWZKcCaWRb2yBNNmrwHJjI1jWs37oBVhSedfj0KNQwTaVAYCOlOa7-cU3eM3xt6X_25IbyEG77US1b_YcBeSvFvpO5sD9whWtnHaCZfre--SpKawq1fg8OQ9lMBCH-NudeqAzR83ZnOXIKnlJSMc3LbfDH67uVQJcj-EEua4KYVBxJNdeFenxs2kzUP2Kscc"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Section: Pull Quote */}
          <Card className="my-16 text-center bg-muted/50">
            <CardContent className="p-8">
              <blockquote className="text-2xl md:text-3xl font-light italic text-primary leading-snug max-w-3xl mx-auto">
                &ldquo;Education is not the filling of a pail, but the lighting
                of a fire.&rdquo;
              </blockquote>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                - William Butler Yeats, A guiding principle of our founders
              </p>
            </CardContent>
          </Card>

          {/* Section: Timeline */}
          <div className="mb-16">
            <h2 className="text-primary text-3xl font-bold mb-8 text-center">
              Key Milestones
            </h2>
            <div className="relative pl-10 border-l-2 border-gray-200 dark:border-gray-700">
              {/* Timeline Item */}
              <div className="timeline-item mb-12 relative">
                {/*<div className="absolute top-4 -left-2.5 w-3 h-3 bg-accent rounded-full border-2 border-white dark:border-background-dark"></div> */}
                <h3 className="text-primary text-xl font-bold">
                  1953 - The Beginning
                </h3>
                <p className="mt-1 text-gray-700 dark:text-gray-300">
                  Model College is founded, opening its doors with a Nursery and
                  KG section to 50 pioneering students.
                </p>
              </div>

              {/* Timeline Item */}
              <div className="timeline-item mb-12 relative">
                {/* <div className="absolute top-4 -left-2.5 w-3 h-3 bg-accent rounded-full border-2 border-white dark:border-background-dark"></div> */}
                <h3 className="text-primary text-xl font-bold">
                  1965 - Primary Section Added
                </h3>
                <p className="mt-1 text-gray-700 dark:text-gray-300">
                  Responding to community needs, the college expands to include
                  a full-fledged Primary section, solidifying its role in
                  foundational education.
                </p>
              </div>

              {/* Timeline Item */}
              <div className="timeline-item mb-12 relative">
                {/* <div className="absolute top-4 -left-2.5 w-3 h-3 bg-accent rounded-full border-2 border-white dark:border-background-dark"></div> */}
                <h3 className="text-primary text-xl font-bold">
                  1978 - First Graduating Class
                </h3>
                <p className="mt-1 text-gray-700 dark:text-gray-300">
                  The first Secondary section class graduates, marking a major
                  milestone and celebrating a decade of academic excellence.
                </p>
              </div>

              {/* Timeline Item */}
              <div className="timeline-item mb-12 relative">
                {/* <div className="absolute top-4 -left-2.5 w-3 h-3 bg-accent rounded-full border-2 border-white dark:border-background-dark"></div> */}
                <h3 className="text-primary text-xl font-bold">
                  1995 - Campus Expansion
                </h3>
                <p className="mt-1 text-gray-700 dark:text-gray-300">
                  A new science wing and library are inaugurated, providing
                  state-of-the-art facilities for a growing student body.
                </p>
              </div>

              {/* Timeline Item */}
              <div className="timeline-item relative">
                {/* <div className="absolute top-4 -left-2.5 w-3 h-3 bg-accent rounded-full border-2 border-white dark:border-background-dark"></div> */}
                <h3 className="text-primary text-xl font-bold">
                  2023 - 70 Years of Excellence
                </h3>
                <p className="mt-1 text-gray-700 dark:text-gray-300">
                  Model College celebrates its 70th anniversary, recommitting to
                  its founding vision while embracing the future of education.
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Section: Gallery */}
          <div className="my-16">
            <h2 className="text-primary text-3xl font-bold mb-8 text-center">
              A Journey Through Time
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-4">
                  <img
                    alt="Students in a classroom from the 1960s"
                    className="rounded-lg shadow-md w-full h-auto object-cover aspect-square grayscale hover:grayscale-0 transition-all duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_p80YGll3_Jm40p0mqogGOF-S1BuHSl4ZtHkY2IKthUeP9S_4D58vc0kqUM3_jmoT5JviknMsb1dFOhnzMd8o6Wnn8ylEepmrYCK2laEnMZyk-NTeUTkhb2O8aD0AZcrA8D4yD9_niO_mTk5tyIr8HSC6jrhJU-_GkkdmDsJi6k5cFYbDC11e93xcxLFe6VWH0pBPNc3FF3QeCFC9CGhF5nU90wUhI2RMkFFzdHTVDIYIxI8G7b1YJwv8g99U9CG3lvNqQHPxRg55"
                  />
                  <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Class of &apos;68
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <img
                    alt="The original library building in the 1970s"
                    className="rounded-lg shadow-md w-full h-auto object-cover aspect-square grayscale hover:grayscale-0 transition-all duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC_XbANZEbqjYX7m5-qsSybzHgbrvA-0YIPkjp10Wjed-AWnC620Yrnz8-hwhCt1HkHpIr7ZsvPwb7A3xoJYSsB-Fevm_HVAgI6u7cgaq6UXrAExa_Z3fVWVqudJqzLpITM_BMg09fLJcAJch2nSetUgsnS3YEix32Nwj6HIS7SFMhg2oCRqYON5zNEQQJ38i1AiE2fIczasxh8snE0ZqE6KsYcJa60ZSrcQdD8vtoOBmN93JHOw94mKiYRnh-7bWBbIajrMb7Xn8R"
                  />
                  <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Library, 1975
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <img
                    alt="Graduation ceremony in the 1980s"
                    className="rounded-lg shadow-md w-full h-auto object-cover aspect-square grayscale hover:grayscale-0 transition-all duration-300"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd5cUd4M2QIIf4NXsGgeOFGem5qrEwHsI-ndAM7Ohh41HQsmharipjxY63NBdeN9QZJEGCECMcMSmcNOP9A9g8eEYk7geQzEarQg3TBKj5jYqV6qVaQoZsGvzhe6ZKPMfe03nebuCAfes1XvmDk7Kyj1wXWpSk-jPyLRa_ADpcQZXEtYH5hUn778FNEYw8qummCtV1B9oEAbR7SZ9gvRoGdILmqAOLWjP0eUzGAyiKOujXONfyh7Ji2tu9KnKxyIIRqUTKlGVT00u5"
                  />
                  <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Graduation Day, 1982
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Section: Future */}
          <Card className="bg-muted/50 border-none">
            <CardContent className="p-8">
              <h2 className="text-primary text-3xl font-bold mb-4">
                Looking to the Future
              </h2>
              <p className="leading-relaxed">
                Today, Model College is a vibrant community of learners,
                thinkers, and leaders. While we honor our rich history, we are
                constantly evolving, embracing new technologies and pedagogical
                approaches to prepare our students for the challenges of
                tomorrow. Our story is still being written, and we invite you to
                be a part of its next chapter.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
