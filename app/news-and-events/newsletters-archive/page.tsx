'use client';

import { useState } from 'react';
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  List,
  Home,
  Calendar,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  imageAlt: string;
}

export default function NewsAndEventsArchive() {
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'Annual Science Fair Winners Announced',
      description:
        "Our secondary students showcased incredible ingenuity and scientific prowess at this year's science fair.",
      category: 'Academics',
      date: 'June 15, 2024',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBksod2PMjUxsbuw65Gm09SsObJlAEJZAYiC81WZ8h2UKyTD5jPNTFYM18HkDCge_32xE7-i43IpXTqh99mQdiOZt900obkmuSE_rKwAwfi31e2ZgAV845_i0zyoGOsm2tGx1YWd-FJtEV0m-k1t1Wa4xmJVoTP72Zy43T-qN1oNFy-2tTD8JcfOAxEr3tP-nFfjnJZVRx_d1B5bsNu1V1gCVNokaKHPq1Fee_fnZoZ7KWwbbXyvgrauO_H8ORIuQ0t-wAY4FOll4d3',
      imageAlt: 'Students participating in a science fair.',
    },
    {
      id: '2',
      title: 'Inter-House Football Tournament Concludes',
      description:
        'A thrilling final match saw the Blue House emerge as champions in a display of sportsmanship.',
      category: 'Sports',
      date: 'May 28, 2024',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAVPP__oEyrlH0fhFVAQICCIClpA94waR-HY7KvOlg-d0qfUUNk0CvinUwGirKt1nCwx5VbnOj9C3in0W8_2jlIrfjEG1ytE15et3QzYuMRJNCVSgta5saLdZeoi49mipPyOw1tJ30eqWsxIHQ8B2hLmTD0DIDbT0BJe_TJz4zMlJv70mTj0NqWZj_cXbIl0hlilck66JXBEkiTm41tBBLZAwCl4tQzhxM6R4MNs41P8r32OqKZRF7SDyNcYgb36OzchVSZueeN0Oxb',
      imageAlt: 'Students playing soccer on a field.',
    },
    {
      id: '3',
      title: 'Our Little Artists: KG Art Exhibition',
      description:
        'The KG section held a vibrant art exhibition, displaying the creative talents of our youngest students.',
      category: 'KG & Nursery',
      date: 'May 10, 2024',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCDxepG4VwZFYbE5s6RCXCvSCV3j68wydn6bBSi4J4Rp-9rZEXH1N-d1uLrcLmtvfVDfGR7sE9MmfYd3LRPNuqgKtMfCg9O9zU2-BUs7fRUTx4_Lht7jpWb7egDTHUxXJVWaeBIo31IEwBVP5iPx6nUCN5R_RyFlNua7rzaCS45r8yE6LqP8tQvuYb7lHt-64QLAwJ4E9Y1FQE2-iQNDX6ZQhroo4sVeDuwIe1W3Li0TPPvb2BSq2Hstb3WHqScZdNGixwSI9ICr_QT',
      imageAlt: 'Children in a classroom painting.',
    },
    {
      id: '4',
      title: 'Primary School Educational Trip',
      description:
        'Students from grades 3-5 enjoyed an educational and fun-filled trip to the National Museum.',
      category: 'Primary',
      date: 'April 22, 2024',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDhySbdrLzIf9uBRALbr33JNCWxfWw8mpoqRMYz4-YCxymmKL7GR783u1DIw1dYoawrIaz5k2hpA140HkcbPTbIVFIQf6SKUhSk5xilcsJ3v5KtJJ6c8Efrahv1AA2N2zw7XFA_Gfhkxd_gMxN6dBgElCeQyua_FJ3oP8px6gOMGHxot44MBqG59OKLiZQxqOBPC45koMttTWCLlwjIVm8TOtXoCLsmBKKie_Uxi-h2uqPiqTVrmQ_AHxqH2qahLG-jI0TLiL7Z60iH',
      imageAlt: 'A school trip to a historical monument.',
    },
    {
      id: '5',
      title: 'Annual Cultural Festival "Vibrations 2024"',
      description:
        'The college grounds came alive with music, dance, and drama during our annual cultural festival.',
      category: 'Arts',
      date: 'April 05, 2024',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCCIk-a702rltDyxAY7UIuoMlNGtSV58P7A5JMV6Whsm7r_Sa9yLJQEAdHSRfn29kq5shi4xXXI483O2LmR7JZ4DclC2PkRRMAZGSQAce39y6kHVY9Z0lCMzUEGSs1fsR-Gq-NhcjIjiNWjFsly7m2mTNuVkyA1jIwf1OPe9qI-yl_AVB4p8f_Buoe3rrbAeRbJwVa5edaF5VHP5xFvuRdwgibqxWuqxLr4Zu711P_bGneZBL2TQ5yDxqMsUIIcu-EvCI3NM3fHheaQ',
      imageAlt: 'Students performing on stage for an arts festival.',
    },
    {
      id: '6',
      title: 'Career Counseling Seminar for Seniors',
      description:
        'Industry experts guided our senior students on various career paths and higher education opportunities.',
      category: 'Secondary',
      date: 'March 18, 2024',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCrMAVVjvbb--Hha_OJBoIrZJg1HfW4_eHL1ygM_J_w5UCPmk3FXFkz6yxs6TTptsDsv77k90FB4cfh-yKdf-BdPYJ8vvVlsaZYydcG4W0zqhtJ46gBJca3bgLdufjmHMrtV5SN4GsJe6VhF8ZNHG0yU_9ZvkXD8l7EAEDwQY33fBorTG4qVq_gR095jCdqz_4IReTrN1kxblPAfCwfzHLv8CYyHUz-Oi-DCgb7cDLEz0tiv4emCJev9r7T8Dtzwyxg9jE2yBLZtPGi',
      imageAlt: 'A guest speaker giving a lecture to students.',
    },
  ];

  const categories = [
    'Academics',
    'Sports',
    'Arts',
    'KG & Nursery',
    'Primary',
    'Secondary',
  ];

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories((prev) => [...prev, category]);
    } else {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== category));
    }
  };

  const resetFilters = () => {
    setSearchQuery('');
    setStartDate('');
    setEndDate('');
    setSelectedCategories([]);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Academics:
        'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
      Sports:
        'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300',
      Arts: 'bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-300',
      'KG & Nursery':
        'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
      Primary:
        'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300',
      Secondary:
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300',
    };
    return (
      colors[category as keyof typeof colors] ||
      'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
    );
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 text-sm text-subtext-light dark:text-subtext-dark mb-4">
            <a className="hover:text-primary dark:hover:text-secondary cursor-pointer flex items-center gap-1">
              {/* <Home className="h-3 w-3" /> */}
              Home
            </a>
            <span>/</span>
            <a className="hover:text-primary dark:hover:text-secondary cursor-pointer">
              News & Events
            </a>
            <span>/</span>
            <span className="font-medium text-text-light dark:text-text-dark">
              Archive
            </span>
          </div>

          {/* Page Heading */}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-black tracking-tighter text-text-light dark:text-text-dark">
              News & Events Archive
            </h1>
            <p className="text-base text-subtext-light dark:text-subtext-dark">
              Explore past activities, news articles, and events from the Model
              College. Use the filters to find exactly what you're looking for.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Filtering & Search Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-24 border-border-light dark:border-border-dark">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-lg font-bold">Filter & Search</h3>

                {/* Search Bar */}
                <div className="space-y-2">
                  <Label
                    htmlFor="search"
                    className="text-sm font-medium text-subtext-light dark:text-subtext-dark"
                  >
                    Search by keyword
                  </Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-subtext-light dark:text-subtext-dark h-4 w-4" />
                    <Input
                      id="search"
                      placeholder="e.g. Annual Sports Day"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark"
                    />
                  </div>
                </div>

                {/* Date Range Filter */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-subtext-light dark:text-subtext-dark">
                    Filter by Date Range
                  </Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-sm"
                    />
                    <Input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-sm"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-subtext-light dark:text-subtext-dark">
                    Filter by Category
                  </Label>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <div
                        key={category}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`cat-${category
                            .toLowerCase()
                            .replace(' & ', '-')
                            .replace(' ', '-')}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) =>
                            handleCategoryChange(category, checked as boolean)
                          }
                        />
                        <Label
                          htmlFor={`cat-${category
                            .toLowerCase()
                            .replace(' & ', '-')
                            .replace(' ', '-')}`}
                          className="text-sm cursor-pointer"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Apply/Reset Buttons */}
                <div className="flex flex-col gap-2 pt-2">
                  <Button className="bg-orange-500 hover:bg-secondary/90">
                    Apply Filters
                  </Button>
                  <Button
                    variant="outline"
                    onClick={resetFilters}
                    className="text-subtext-light dark:text-subtext-dark border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Archive Display Area */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex items-center justify-between pb-4 border-b border-border-light dark:border-border-dark mb-6">
              <p className="text-sm text-subtext-light dark:text-subtext-dark">
                Showing 1-{newsItems.length} of {newsItems.length} results
              </p>

              <div className="flex items-center gap-4">
                {/* Sort Dropdown */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[140px] border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Toggles */}
                <div className="hidden sm:flex items-center gap-1 rounded-lg bg-background-light dark:bg-background-dark p-1 border border-border-light dark:border-border-dark">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="p-1 h-8 w-8"
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="p-1 h-8 w-8"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Archive Items Grid */}
            <div
              className={`grid gap-6 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                  : 'grid-cols-1'
              }`}
            >
              {newsItems.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className={`${viewMode === 'list' ? 'flex' : ''}`}>
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className={`object-cover ${
                        viewMode === 'list'
                          ? 'w-48 h-48 shrink-0'
                          : 'w-full h-40'
                      }`}
                    />
                    <CardContent className="p-4 flex-1">
                      <div className="mb-2 flex items-center justify-between">
                        <span
                          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${getCategoryColor(
                            item.category
                          )}`}
                        >
                          {item.category}
                        </span>
                        <time className="text-xs text-subtext-light dark:text-subtext-dark flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {item.date}
                        </time>
                      </div>
                      <h3 className="text-base font-bold text-text-light dark:text-text-dark mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-subtext-light dark:text-subtext-dark mb-4 grow">
                        {item.description}
                      </p>
                      <a className="text-sm font-bold text-primary hover:underline cursor-pointer">
                        Read More →
                      </a>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {/* Pagination Controls */}
            <nav className="mt-8 flex items-center justify-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 border-border-light dark:border-border-dark"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button size="icon" className="h-9 w-9 bg-primary text-white">
                1
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 border-border-light dark:border-border-dark"
              >
                2
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 border-border-light dark:border-border-dark"
              >
                3
              </Button>
              <span className="inline-flex h-9 w-9 items-center justify-center text-sm font-medium">
                ...
              </span>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 border-border-light dark:border-border-dark"
              >
                5
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 border-border-light dark:border-border-dark"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
}
