'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Navigation } from './Navigation';
import { SearchBar } from '@/components/shared/SearchBar';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { Button } from '@/components/ui/button';
import { School, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '../../lib/utils';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6  mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <School className="h-6 w-6 text-primary" />
          <Link href="/" className="text-xl font-bold">
            Model College
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <Navigation />
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <SearchBar />
          <ThemeToggle />
          <Button
            size="sm"
            className="bg-orange-500 hover:bg-orange-600"
            asChild
          >
            <Link href="/admissions/application">Apply Now</Link>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <SearchBar />
          <ThemeToggle />

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-2">
                    <School className="h-6 w-6 text-primary" />
                    <span className="text-lg font-bold">Model College</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="h-9 w-9 p-0"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Mobile Navigation */}
                <div className="flex-1 py-6">
                  <MobileNavigation
                    onItemClick={() => setIsMobileMenuOpen(false)}
                  />
                </div>

                {/* Mobile Apply Button */}
                <div className="border-t pt-4">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Apply Now
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// Mobile Navigation Component
function MobileNavigation({ onItemClick }: { onItemClick: () => void }) {
  const pathname = usePathname();

  const navigationItems = [
    { href: '/about-us', label: 'About Us' },
    { href: '/academics', label: 'Academics' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/students', label: 'Students' },
    { href: '/parents', label: 'Parents' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/news-and-events', label: 'News & Events' },
    { href: '/contact-us', label: 'Contact Us' },
  ];

  return (
    <nav className="flex flex-col space-y-4">
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onItemClick}
          className={cn(
            'text-lg font-medium transition-colors hover:text-primary py-2 px-4 rounded-lg',
            pathname === item.href
              ? 'text-primary bg-primary/10'
              : 'text-foreground'
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
