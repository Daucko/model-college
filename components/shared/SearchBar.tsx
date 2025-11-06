'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
// import { VisuallyHidden } from '@/components/ui/visually-hidden';

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

  return (
    <>
      {/* Desktop Search */}
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
          <div className="flex items-center gap-2 bg-background border rounded-lg pl-3 pr-1 py-1 animate-in fade-in-0 zoom-in-95">
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
              className="h-7 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 w-32 lg:w-48 transition-all duration-200"
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

      {/* Mobile Search */}
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

        {/* Mobile Search Dialog */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-md p-0 gap-0">
            {/* <VisuallyHidden> */}
            <DialogTitle className="sr-only">Search Model College</DialogTitle>
            {/* </VisuallyHidden> */}
            <div className="flex items-center border-b p-4">
              <Search className="h-4 w-4 text-muted-foreground mr-2" />
              <Input
                type="text"
                placeholder="Search Model College..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch(searchQuery);
                  }
                }}
                className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                autoFocus
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setOpen(false)}
                className="h-7 w-7 p-0 ml-2"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {filteredSuggestions.length > 0 && (
              <div className="p-2 max-h-60 overflow-y-auto">
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
            )}
          </DialogContent>
        </Dialog>
      </div>

      {/* Desktop Search Suggestions */}
      {isExpanded && searchQuery && filteredSuggestions.length > 0 && (
        <div className="absolute top-16 right-4 z-50 w-80 animate-in fade-in-0 zoom-in-95">
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
