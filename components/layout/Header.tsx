'use client';

import Link from 'next/link';
import { Navigation } from './Navigation';
import { SearchBar } from '@/components/shared/SearchBar';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { Button } from '@/components/ui/button';
import { School } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <School className="h-6 w-6 text-primary" />
          <Link href="/" className="text-xl font-bold">
            Model College
          </Link>
        </div>

        <Navigation />

        <div className="flex items-center gap-4">
          <SearchBar />
          <ThemeToggle />
          <Button size="sm">Apply Now</Button>
        </div>
      </div>
    </header>
  );
}
