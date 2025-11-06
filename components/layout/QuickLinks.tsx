import Link from 'next/link';
import { FileText, LogIn, Phone } from 'lucide-react';

export function QuickLinks() {
  const quickLinks = [
    { href: '/admissions', icon: FileText, label: 'Admissions' },
    { href: '/portal', icon: LogIn, label: 'Portal Login' },
    { href: '/contact-us', icon: Phone, label: 'Contact Us' },
  ];

  return (
    <div className="bg-primary text-primary-foreground py-3">
      <div className="container">
        <div className="flex justify-center items-center gap-6">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 text-sm font-medium hover:underline"
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
