'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Edit, Download, Upload, HelpCircle } from 'lucide-react';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    parentName: '',
    parentEmail: '',
    academicLevel: '',
    previousSchool: '',
    declaration: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-neutral-text dark:text-white/90">
      <div className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
        {/* Breadcrumbs */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <a
            className="text-sm text-neutral-text/70 hover:text-primary dark:text-white/60 dark:hover:text-primary"
            href="#"
          >
            Home
          </a>
          <span className="text-sm text-neutral-text/70 dark:text-white/60">
            /
          </span>
          <a
            className="text-sm text-neutral-text/70 hover:text-primary dark:text-white/60 dark:hover:text-primary"
            href="#"
          >
            Admissions
          </a>
          <span className="text-sm text-neutral-text/70 dark:text-white/60">
            /
          </span>
          <span className="text-sm font-semibold text-neutral-text dark:text-white">
            Application Form
          </span>
        </div>

        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-black tracking-tighter text-neutral-text dark:text-white sm:text-5xl">
            Application Form
          </h1>
          <p className="mt-4 max-w-3xl text-base text-neutral-text/80 dark:text-white/70">
            Welcome! Please choose your preferred method to apply to Model
            College. You can either download the form to fill out offline or
            apply directly through our online portal for a faster process.
          </p>
        </div>

        {/* Application Options */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Option 1: Apply Online */}
          <Card className="flex flex-col p-6 shadow-sm border-neutral-border dark:border-white/10 bg-white dark:bg-background-dark/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Edit className="h-6 w-6" />
            </div>
            <CardTitle className="text-xl font-bold text-neutral-text dark:text-white mb-2">
              Apply Online
            </CardTitle>
            <p className="mt-2 flex-1 text-sm text-neutral-text/80 dark:text-white/70">
              The fastest and most convenient way to submit your application.
              Get started immediately.
            </p>
            <Button className="mt-6 h-12 bg-orange-500 hover:bg-orange-600 text-white font-bold">
              Start Online Application
            </Button>
          </Card>

          {/* Option 2: Download Form */}
          <Card className="flex flex-col p-6 shadow-sm border-neutral-border dark:border-white/10 bg-white dark:bg-background-dark/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Download className="h-6 w-6" />
            </div>
            <CardTitle className="text-xl font-bold text-neutral-text dark:text-white mb-2">
              Download Offline Form
            </CardTitle>
            <p className="mt-2 flex-1 text-sm text-neutral-text/80 dark:text-white/70">
              Prefer to fill out a paper form? Download the PDF, print it, and
              submit it at our admissions office.
            </p>
            <Button
              variant="outline"
              className="mt-6 h-12 bg-neutral-bg hover:bg-neutral-border/80 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 font-bold"
            >
              Download PDF Form
            </Button>
          </Card>
        </div>

        {/* Online Application Form Section */}
        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <hr className="flex-1 border-t border-neutral-border dark:border-white/10" />
            <h2 className="text-2xl font-bold tracking-tight text-neutral-text dark:text-white">
              Online Application
            </h2>
            <hr className="flex-1 border-t border-neutral-border dark:border-white/10" />
          </div>

          {/* Instructions */}
          <Card className="border-l-4 border-primary bg-primary/10 dark:bg-primary/20 border-0">
            <CardContent className="p-4">
              <p className="text-sm text-primary dark:text-white/90 flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                Need help?{' '}
                <a
                  className="font-semibold underline hover:no-underline"
                  href="#"
                >
                  View Instructions
                </a>{' '}
                or see the{' '}
                <a
                  className="font-semibold underline hover:no-underline"
                  href="#"
                >
                  Required Documents Checklist
                </a>
                .
              </p>
            </CardContent>
          </Card>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            {/* Section 1: Applicant's Personal Details */}
            <Card className="p-6 shadow-sm border-neutral-border dark:border-white/10">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="text-lg font-bold text-neutral-text dark:text-white">
                  1. Applicant&apos;s Personal Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange('firstName', e.target.value)
                      }
                      className="mt-2"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange('lastName', e.target.value)
                      }
                      className="mt-2"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                      id="dob"
                      name="dob"
                      type="date"
                      value={formData.dob}
                      onChange={(e) => handleInputChange('dob', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <Label htmlFor="gender">Gender</Label>
                    <Select
                      value={formData.gender}
                      onValueChange={(value) =>
                        handleInputChange('gender', value)
                      }
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 2: Parent/Guardian Information */}
            <Card className="p-6 shadow-sm border-neutral-border dark:border-white/10">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="text-lg font-bold text-neutral-text dark:text-white">
                  2. Parent/Guardian Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <Label htmlFor="parent-name">Full Name</Label>
                    <Input
                      id="parent-name"
                      name="parent-name"
                      type="text"
                      value={formData.parentName}
                      onChange={(e) =>
                        handleInputChange('parentName', e.target.value)
                      }
                      className="mt-2"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <Label htmlFor="parent-email">Email Address</Label>
                    <Input
                      id="parent-email"
                      name="parent-email"
                      type="email"
                      autoComplete="email"
                      value={formData.parentEmail}
                      onChange={(e) =>
                        handleInputChange('parentEmail', e.target.value)
                      }
                      className="mt-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 3: Academic Information */}
            <Card className="p-6 shadow-sm border-neutral-border dark:border-white/10">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="text-lg font-bold text-neutral-text dark:text-white">
                  3. Academic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <Label htmlFor="academic-level">Applying For</Label>
                    <Select
                      value={formData.academicLevel}
                      onValueChange={(value) =>
                        handleInputChange('academicLevel', value)
                      }
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kg">KG</SelectItem>
                        <SelectItem value="nursery">Nursery</SelectItem>
                        <SelectItem value="primary">Primary</SelectItem>
                        <SelectItem value="secondary">Secondary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="sm:col-span-3">
                    <Label htmlFor="previous-school">Previous School</Label>
                    <Input
                      id="previous-school"
                      name="previous-school"
                      type="text"
                      value={formData.previousSchool}
                      onChange={(e) =>
                        handleInputChange('previousSchool', e.target.value)
                      }
                      className="mt-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 4: Document Upload */}
            <Card className="p-6 shadow-sm border-neutral-border dark:border-white/10">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="text-lg font-bold text-neutral-text dark:text-white">
                  4. Document Upload
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Label htmlFor="file-upload">Required Documents</Label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-neutral-border/70 dark:border-white/20 px-6 py-10">
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-neutral-text/50 dark:text-white/40" />
                    <div className="mt-4 flex text-sm leading-6 text-neutral-text/70 dark:text-white/60">
                      <Label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-primary/80"
                      >
                        <span>Upload files</span>
                        <Input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          multiple
                          className="sr-only"
                        />
                      </Label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-neutral-text/60 dark:text-white/50">
                      PNG, JPG, PDF up to 10MB
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section 5: Declaration & Submission */}
            <Card className="p-6 shadow-sm border-neutral-border dark:border-white/10">
              <CardHeader className="p-0 pb-6">
                <CardTitle className="text-lg font-bold text-neutral-text dark:text-white">
                  5. Declaration & Submission
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="declaration"
                    checked={formData.declaration}
                    onCheckedChange={(checked) =>
                      handleInputChange('declaration', checked as boolean)
                    }
                  />
                  <Label
                    htmlFor="declaration"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I hereby declare that the information provided is true and
                    correct to the best of my knowledge.
                  </Label>
                </div>
                <div className="mt-8 flex justify-end">
                  <Button
                    type="submit"
                    className="h-12 min-w-[120px] bg-orange-500 hover:bg-orange-600 text-white font-bold"
                  >
                    Submit Application
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </div>
  );
}
