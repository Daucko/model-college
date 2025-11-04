'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Eye,
  EyeOff,
  CheckCircle2,
  School,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  BookOpen,
  Contact,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ParentPortalLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempted with:', { email, password });
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center justify-between gap-6 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <h1 className="text-primary text-4xl font-black leading-tight tracking-tight">
                Parent Portal Login
              </h1>
              <p className="text-muted-foreground text-base font-normal leading-normal">
                Welcome back! Access your child&apos;s grades, view attendance
                records, and communicate with teachers.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Login Form */}
            <Card className="border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-medium">
                      Username/Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your username or email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-14 text-base"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-base font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-14 text-base pr-12"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <Eye className="h-5 w-5 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Link
                      href="#"
                      className="text-primary text-sm font-normal underline hover:no-underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 text-base font-bold bg-orange-500 hover:bg-orange-600"
                  >
                    Log In
                  </Button>

                  <p className="text-muted-foreground text-sm font-normal text-center">
                    Having trouble logging in?{' '}
                    <Link
                      href="#"
                      className="text-primary font-medium underline hover:no-underline"
                    >
                      Contact Support
                    </Link>
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Features Card */}
            <Card className="bg-primary/5 dark:bg-primary/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Welcome, Parents!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our parent portal is your one-stop resource to stay connected
                  with your child&apos;s academic journey.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      Access your child&apos;s grades and report cards in
                      real-time.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      View attendance records and stay informed about their
                      presence.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      Communicate directly with teachers to discuss progress.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      Stay updated with important school announcements and
                      events.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card mt-16 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            {/* School Info */}
            <div className="max-w-sm">
              <div className="flex items-center gap-4 text-foreground">
                <School className="h-6 w-6 text-primary" />
                <h2 className="text-lg font-bold">Model College</h2>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                From KG and Nursery to Primary and Secondary, we provide a
                foundation for a lifetime of learning.
              </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Quick Links
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Admissions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Academics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Resources
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Faculty Portal
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Student Portal
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Parent Portal
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Calendar
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Contact
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    123 Education Lane
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 opacity-0" />
                    Cityville, ST 12345
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    (123) 456-7890
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    contact@modelcollege.edu
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-xs text-muted-foreground">
              © 2024 Model College. All rights reserved.
            </p>

            {/* Social Links - Simplified */}
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16.02 6.13,17.26 8.13,17.29C6.67,18.45 4.87,19.1 2.91,19.1C2.55,19.1 2.2,19.08 1.85,19.04C3.86,20.33 6.26,21.1 8.84,21.1C16.01,21.1 20.24,15.22 20.24,10.03C20.24,9.85 20.24,9.67 20.23,9.49C21.02,8.94 21.8,8.26 22.46,7.45L22.46,6Z"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clipRule="evenodd"
                    d="M12.02,2.00001C6.49,2.00001 2,6.49001 2,12.02C2,17.55 6.49,22.04 12.02,22.04C17.55,22.04 22.04,17.55 22.04,12.02C22.04,6.49001 17.55,2.00001 12.02,2.00001ZM8.5,18.01L8.5,10.33H6.47V18.01H8.5ZM7.48,9.40001C6.67,9.40001 6,8.73001 6,7.92001C6,7.11001 6.67,6.44001 7.48,6.44001C8.29,6.44001 8.96,7.11001 8.96,7.92001C8.96,8.73001 8.29,9.40001 7.48,9.40001ZM18.01,18.01H15.98V13.56C15.98,12.51 15.96,11.13 14.61,11.13C13.24,11.13 13.03,12.28 13.03,13.47V18.01H10.99V10.33H12.94V11.23H12.97C13.28,10.63 14.12,10.09 15.42,10.09C17.55,10.09 18.01,11.48 18.01,13.19L18.01,18.01Z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,2A10,10,0,0,0,2,12c0,4.9,3.5,9.09,8.2,9.88V15.11H8.05V12.35H10.2V10.33c0-2.12,1.24-3.29,3.18-3.29a17.21,17.21,0,0,1,1.82.09v2.44H13.94c-1,0-1.24.49-1.24,1.22v1.51H15.4l-.36,2.76H12.7v6.77A10,10,0,0,0,22,12,10,10,0,0,0,12,2Z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
