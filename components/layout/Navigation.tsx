'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const navigationItems = [
  { href: '/about-us', label: 'About Us' },
  {
    href: '/academics',
    label: 'Academics',
    // submenu: [
    //   { href: '/academics/primary', label: 'Primary Section' },
    //   { href: '/academics/secondary', label: 'Secondary Section' },
    //   { href: '/academics/departments', label: 'Departments' },
    //   { href: '/academics/calendar', label: 'Academic Calendar' },
    // ],
  },
  { href: '/admissions', label: 'Admissions' },
  { href: '/students', label: 'Students' },
  { href: '/parents', label: 'Parents' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/news-events', label: 'News & Events' },
  { href: '/contact-us', label: 'Contact Us' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            {/* {item.submenu ? (
              <>
                <NavigationMenuTrigger
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    pathname.startsWith(item.href) && 'text-primary'
                  )}
                >
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={subItem.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {subItem.label}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === item.href && 'text-primary'
                )}
              >
                {item.label}
              </Link>
            )} */}

            <Link
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === item.href && 'text-primary'
              )}
            >
              {item.label}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
