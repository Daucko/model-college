'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

// Mock search data - in a real app, this would come from an API
const searchSuggestions = [
  { id: 1, title: 'Admissions Process', url: '/admissions' },
  { id: 2, title: 'Academic Calendar', url: '/academics/calendar' },
  { id: 3, title: 'Primary Section Curriculum', url: '/academics/primary' },
  { id: 4, title: 'Secondary Section Subjects', url: '/academics/secondary' },
  { id: 5, title: 'School Fees Structure', url: '/admissions/fees' },
  { id: 6, title: 'Student Handbook', url: '/students/handbook' },
  { id: 7, title: 'Parent Portal Login', url: '/parents/portal' },
  { id: 8, title: 'Upcoming Events', url: '/news-events' },
  { id: 9, title: 'Contact Information', url: '/contact-us' },
  { id: 10, title: 'School Facilities', url: '/about-us/facilities' },
];

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  const handleSearch = (value: string) => {
    if (value.trim()) {
      router.push(`/search?q=${encodeURIComponent(value)}`);
      setOpen(false);
      setIsExpanded(false);
      setSearchQuery('');
    }
  };

  const handleSuggestionSelect = (url: string) => {
    router.push(url);
    setOpen(false);
    setIsExpanded(false);
    setSearchQuery('');
  };

  const filteredSuggestions = searchSuggestions.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Mobile/Desktop optimized search
  return (
    <>
      {/* Desktop Search - Compact */}
      <div className="hidden md:flex items-center">
        {!isExpanded ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(true)}
            className="h-9 w-9 p-0 hover:bg-accent"
          >
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        ) : (
          <div className="flex items-center gap-2 bg-background border rounded-lg pl-3 pr-1 py-1">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSearch(searchQuery);
                }
                if (e.key === 'Escape') {
                  setIsExpanded(false);
                  setSearchQuery('');
                }
              }}
              className="h-7 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 w-48"
              autoFocus
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setIsExpanded(false);
                setSearchQuery('');
              }}
              className="h-7 w-7 p-0 hover:bg-accent"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {/* Mobile Search - Always use dialog */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOpen(true)}
          className="h-9 w-9 p-0"
        >
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>

        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <div className="flex items-center border-b px-3">
              <CommandInput
                placeholder="Search Model College..."
                value={searchQuery}
                onValueChange={setSearchQuery}
              />
            </div>
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              {filteredSuggestions.length > 0 && (
                <CommandGroup heading="Quick Links">
                  {filteredSuggestions.map((suggestion) => (
                    <CommandItem
                      key={suggestion.id}
                      value={suggestion.title}
                      onSelect={() => handleSuggestionSelect(suggestion.url)}
                      className="cursor-pointer"
                    >
                      <Search className="mr-2 h-4 w-4" />
                      <span>{suggestion.title}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </CommandDialog>
      </div>

      {/* Desktop Search Suggestions Popover */}
      {isExpanded && searchQuery && filteredSuggestions.length > 0 && (
        <div className="absolute top-16 right-4 z-50 w-80">
          <div className="bg-popover text-popover-foreground rounded-md border shadow-md">
            <div className="p-2">
              <div className="text-xs font-medium text-muted-foreground px-2 py-1.5">
                Quick Links
              </div>
              {filteredSuggestions.map((suggestion) => (
                <button
                  key={suggestion.id}
                  onClick={() => handleSuggestionSelect(suggestion.url)}
                  className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer text-left"
                >
                  <Search className="mr-2 h-4 w-4" />
                  {suggestion.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Simplified version without command components
export function SimpleSearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-9 pr-4 w-48 md:w-64"
        />
      </div>
      <Button type="submit" size="sm" variant="ghost">
        Search
      </Button>
    </form>
  );
}
