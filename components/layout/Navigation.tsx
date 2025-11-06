'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

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

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center space-x-6">
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary relative py-2',
            pathname === item.href && 'text-primary'
          )}
        >
          {item.label}
          {pathname === item.href && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
          )}
        </Link>
      ))}
    </nav>
  );
}
