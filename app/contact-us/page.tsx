'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface StaffMember {
  name: string;
  role: string;
}

export default function ContactUs() {
  const [activeTab, setActiveTab] = useState('admin');

  const staffDirectory: Record<string, StaffMember[]> = {
    admin: [
      { name: 'Dr. Evelyn Reed', role: 'Principal' },
      { name: 'Mr. Samuel Chen', role: 'Vice Principal' },
      { name: 'Ms. Maria Garcia', role: 'Admissions Director' },
    ],
    primary: [
      { name: 'Mrs. Linda Carter', role: 'Head of Primary' },
      { name: 'Mr. David Lee', role: 'Student Counselor (Primary)' },
    ],
    secondary: [
      { name: 'Mr. Robert Frost', role: 'Head of Secondary' },
      { name: 'Ms. Olivia Nguyen', role: 'Head of Science Dept.' },
      { name: 'Mr. Ben Isaac', role: 'Head of Arts Dept.' },
    ],
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-college-blue text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            We&apos;d love to hear from you. Please fill out the form below or
            use the contact details to get in touch.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 shadow-sm">
              <CardContent className="p-8">
                <h2 className="text-college-blue dark:text-white text-2xl font-bold leading-tight tracking-tight mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="full-name"
                        className="block text-sm font-medium text-college-black dark:text-gray-300"
                      >
                        Full Name
                      </label>
                      <Input
                        id="full-name"
                        name="full-name"
                        type="text"
                        placeholder="Enter your full name"
                        className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-college-orange focus:ring-college-orange"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-college-black dark:text-gray-300"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-college-orange focus:ring-college-orange"
                      />
                    </div>
                  </div>

                  {/* Phone and Subject Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-college-black dark:text-gray-300"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-college-orange focus:ring-college-orange"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-college-black dark:text-gray-300"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Enter the subject"
                        className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-college-orange focus:ring-college-orange"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-2">
                    <label
                      htmlFor="inquiry-type"
                      className="block text-sm font-medium text-college-black dark:text-gray-300"
                    >
                      Inquiry related to
                    </label>
                    <Select>
                      <SelectTrigger className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-college-orange focus:ring-college-orange">
                        <SelectValue placeholder="General" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="kg-nursery">KG & Nursery</SelectItem>
                        <SelectItem value="primary">Primary Section</SelectItem>
                        <SelectItem value="secondary">
                          Secondary Section
                        </SelectItem>
                        <SelectItem value="admissions">Admissions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-college-black dark:text-gray-300"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Write your message here..."
                      rows={4}
                      className="border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:border-college-orange focus:ring-college-orange resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-college-blue hover:bg-college-blue/90 text-white h-12 text-base font-bold"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Information */}
            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-college-black dark:text-white mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <MapPin className="text-orange-500 mt-1 h-5 w-5" />
                    <div>
                      <p className="font-semibold text-college-black dark:text-white">
                        Address
                      </p>
                      <p>123 Education Lane, Knowledge City, State 45678</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <Phone className="text-orange-500 mt-1 h-5 w-5" />
                    <div>
                      <p className="font-semibold text-college-black dark:text-white">
                        Phone
                      </p>
                      <p>
                        Primary Office:{' '}
                        <a
                          href="tel:+1234567890"
                          className="hover:text-college-blue transition-colors"
                        >
                          (123) 456-7890
                        </a>
                      </p>
                      <p>
                        Secondary Office:{' '}
                        <a
                          href="tel:+1234567891"
                          className="hover:text-college-blue transition-colors"
                        >
                          (123) 456-7891
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <Mail className="text-orange-500 mt-1 h-5 w-5" />
                    <div>
                      <p className="font-semibold text-college-black dark:text-white">
                        Email
                      </p>
                      <p>
                        General:{' '}
                        <a
                          href="mailto:info@modelcollege.edu"
                          className="hover:text-college-blue transition-colors"
                        >
                          info@modelcollege.edu
                        </a>
                      </p>
                      <p>
                        Admissions:{' '}
                        <a
                          href="mailto:admissions@modelcollege.edu"
                          className="hover:text-college-blue transition-colors"
                        >
                          admissions@modelcollege.edu
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-4">
                    <Clock className="text-orange-500 mt-1 h-5 w-5" />
                    <div>
                      <p className="font-semibold text-college-black dark:text-white">
                        Office Hours
                      </p>
                      <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Section */}
            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 shadow-sm overflow-hidden">
              <img
                alt="Map showing the location of Model College"
                className="w-full h-48 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKKCxOzrUUIPOwADxzQ7YYbo9IPldwyJn-2cHMA3JMOLCjCmGzVHo0MidmKcJIE_OV69OAiMSSivPFUGmaajmurFJtJZu2loTaX1B5DcuUQvbJSPURqhT5OdsEJrk4302DKaz0bYPe-IZFsiDzfh27TjSzVbC6crq60XNJeav5AFPoEJNyxWfmdtkBWphmhOd6sqFTj06IdWqvGr8HtjPHRG9Rs0nbp6RbjTW6OgJn-IUJeiDfUb23zXlUBxpXHT3yumAkrZTOVDpj"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-college-black dark:text-white mb-2">
                  Directions
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Located conveniently downtown. Accessible via the City Bus
                  Line 5 at the Education Lane stop. From the main highway, take
                  exit 25B.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Staff Directory */}
        <div className="mt-16">
          <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 shadow-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-college-blue dark:text-white mb-6">
                Staff Directory
              </h2>

              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="admin">Administration</TabsTrigger>
                  <TabsTrigger value="primary">Primary Section</TabsTrigger>
                  <TabsTrigger value="secondary">Secondary Section</TabsTrigger>
                </TabsList>

                {Object.entries(staffDirectory).map(([tab, staff]) => (
                  <TabsContent key={tab} value={tab} className="pt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {staff.map((member, index) => (
                        <div key={index}>
                          <p className="font-semibold text-college-black dark:text-white">
                            {member.name}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {member.role}
                          </p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
