'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Download,
  SquarePen,
  Home,
  School,
  Upload,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';

type FormData = {
  // Applicant Personal Details
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;

  // Preferred Program
  program: string;

  // Previous Academic History
  previousSchool: string;
  previousGrade: string;

  // Parent/Guardian Information
  parentName: string;
  parentRelationship: string;
  email: string;
  phone: string;
  address: string;

  // Online form specific
  parentEmail: string;
  academicLevel: string;
  fileUpload: File | null;
  declaration: boolean;
};

export default function AdmissionsApplication() {
  const pathname = usePathname();
  const [activeForm, setActiveForm] = useState<'online' | 'download'>('online');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    program: '',
    previousSchool: '',
    previousGrade: '',
    parentName: '',
    parentRelationship: '',
    email: '',
    phone: '',
    address: '',
    parentEmail: '',
    academicLevel: '',
    fileUpload: null,
    declaration: false,
  });

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean | File | null
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleInputChange('fileUpload', file);
  };

  const handleDownloadForm = () => {
    // Create a formatted version of the form data for download
    const formContent = `
MODEL COLLEGE - ADMISSION APPLICATION FORM
===========================================

APPLICANT'S PERSONAL DETAILS:
-----------------------------
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Date of Birth: ${formData.dateOfBirth}
Gender: ${formData.gender}

PREFERRED PROGRAM:
------------------
Program: ${formData.program}

PREVIOUS ACADEMIC HISTORY:
--------------------------
Previous School: ${formData.previousSchool}
Last Grade Completed: ${formData.previousGrade}

PARENT/GUARDIAN INFORMATION:
----------------------------
Parent Name: ${formData.parentName}
Relationship: ${formData.parentRelationship}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}

ADDITIONAL INFORMATION:
-----------------------
Parent Email: ${formData.parentEmail}
Academic Level: ${formData.academicLevel}
Declaration Accepted: ${formData.declaration ? 'Yes' : 'No'}

Submitted on: ${new Date().toLocaleDateString()}
    `.trim();

    const blob = new Blob([formContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'model-college-admission-form.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleOnlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle online form submission
    console.log('Online form submitted:', formData);

    // Validate required fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.dateOfBirth ||
      !formData.gender
    ) {
      alert('Please fill in all required fields');
      return;
    }

    if (!formData.declaration) {
      alert('Please accept the declaration');
      return;
    }

    // Add your form submission logic here
    alert('Application submitted successfully!');
  };

  const handleAdmissionFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle admission form submission
    console.log('Admission form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-primary dark:text-gray-200">
      <main className="container mx-auto max-w-6xl px-4 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6 flex items-center gap-2 text-sm">
          <Link
            href="/"
            className="flex items-center gap-1 text-text-primary/70 hover:text-primary dark:text-white/60 dark:hover:text-primary"
          >
            {/* <Home className="h-4 w-4" /> */}
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-text-primary/50 dark:text-white/40" />
          <Link
            href="/admissions"
            className="text-text-primary/70 hover:text-primary dark:text-white/60 dark:hover:text-primary"
          >
            Admissions
          </Link>
          <ChevronRight className="h-4 w-4 text-text-primary/50 dark:text-white/40" />
          <span className="font-semibold text-text-primary dark:text-white">
            Application Form
          </span>
        </div>

        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-black tracking-tighter text-primary sm:text-5xl">
            Application Form
          </h1>
          <p className="mt-4 max-w-3xl text-base text-text-primary/80 dark:text-white/70">
            Welcome! Please choose your preferred method to apply to Model
            College. You can either download the form to fill out offline or
            apply directly through our online portal for a faster process.
          </p>
        </div>

        {/* Application Options */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Option 1: Apply Online */}
          <Card className="border-border-light dark:border-gray-700">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <SquarePen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-text-primary dark:text-white">
                Apply Online
              </h3>
              <p className="mt-2 flex-1 text-sm text-text-primary/80 dark:text-white/70">
                The fastest and most convenient way to submit your application.
                Get started immediately.
              </p>
              <Button
                onClick={() => setActiveForm('online')}
                className="mt-6 h-12 w-full bg-orange-500 hover:bg-orange-600"
              >
                Start Online Application
              </Button>
            </CardContent>
          </Card>

          {/* Option 2: Download Form */}
          <Card className="border-border-light dark:border-gray-700">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Download className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-text-primary dark:text-white">
                Download Admission Form
              </h3>
              <p className="mt-2 flex-1 text-sm text-text-primary/80 dark:text-white/70">
                Prefer to fill out the admission form? Download it and submit it
                at our admissions office.
              </p>
              <Button
                onClick={handleDownloadForm}
                variant="outline"
                className="mt-6 h-12 w-full border-border-light dark:border-gray-600 bg-card-light dark:bg-card-dark hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Admission Form
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Online Application Form */}
        {activeForm === 'online' && (
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <hr className="flex-1 border-t border-border-light dark:border-gray-700" />
              <h2 className="text-2xl font-bold tracking-tight text-primary">
                Online Application
              </h2>
              <hr className="flex-1 border-t border-border-light dark:border-gray-700" />
            </div>

            {/* Instructions */}
            <Card className="border-l-4 border-l-primary bg-primary/10 dark:bg-primary/20">
              <CardContent className="p-4">
                <p className="text-sm text-primary">
                  Need help?{' '}
                  <a className="font-semibold underline hover:no-underline cursor-pointer">
                    View Instructions
                  </a>{' '}
                  or see the{' '}
                  <a className="font-semibold underline hover:no-underline cursor-pointer">
                    Required Documents Checklist
                  </a>
                  .
                </p>
              </CardContent>
            </Card>

            <form onSubmit={handleOnlineSubmit} className="space-y-8">
              {/* Section 1: Applicant's Personal Details */}
              <Card className="border-border-light dark:border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-text-primary dark:text-white mb-6">
                    1. Applicant's Personal Details
                  </h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange('firstName', e.target.value)
                        }
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange('lastName', e.target.value)
                        }
                        placeholder="Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) =>
                          handleInputChange('dateOfBirth', e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender *</Label>
                      <Select
                        value={formData.gender}
                        onValueChange={(value) =>
                          handleInputChange('gender', value)
                        }
                      >
                        <SelectTrigger>
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

              {/* Section 2: Academic Information */}
              <Card className="border-border-light dark:border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-text-primary dark:text-white mb-6">
                    2. Academic Information
                  </h3>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="academicLevel">Applying For *</Label>
                      <Select
                        value={formData.academicLevel}
                        onValueChange={(value) =>
                          handleInputChange('academicLevel', value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kg">Kindergarten (KG)</SelectItem>
                          <SelectItem value="nursery">Nursery</SelectItem>
                          <SelectItem value="primary">Primary (1-5)</SelectItem>
                          <SelectItem value="secondary">
                            Secondary (6-12)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="previousSchool">Previous School</Label>
                      <Input
                        id="previousSchool"
                        value={formData.previousSchool}
                        onChange={(e) =>
                          handleInputChange('previousSchool', e.target.value)
                        }
                        placeholder="ABC International School"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 3: Parent/Guardian Information */}
              <Card className="border-border-light dark:border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-text-primary dark:text-white mb-6">
                    3. Parent/Guardian Information
                  </h3>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="parentName">Full Name *</Label>
                      <Input
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) =>
                          handleInputChange('parentName', e.target.value)
                        }
                        placeholder="Jane Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="parentEmail">Email Address *</Label>
                      <Input
                        id="parentEmail"
                        type="email"
                        value={formData.parentEmail}
                        onChange={(e) =>
                          handleInputChange('parentEmail', e.target.value)
                        }
                        placeholder="jane.doe@example.com"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 4: Document Upload */}
              <Card className="border-border-light dark:border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-text-primary dark:text-white mb-6">
                    4. Document Upload
                  </h3>
                  <div className="space-y-2">
                    <Label>Required Documents</Label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-border-light dark:border-gray-600 px-6 py-10">
                      <div className="text-center">
                        <Upload className="mx-auto h-8 w-8 text-text-primary/50 dark:text-white/40" />
                        <div className="mt-4 flex text-sm text-text-primary/70 dark:text-white/60">
                          <Label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md font-semibold text-primary hover:text-primary/80"
                          >
                            <span>Upload files</span>
                            <Input
                              id="file-upload"
                              type="file"
                              className="sr-only"
                              onChange={handleFileUpload}
                              multiple
                            />
                          </Label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-text-primary/60 dark:text-white/50">
                          PNG, JPG, PDF up to 10MB
                        </p>
                        {formData.fileUpload && (
                          <p className="mt-2 text-sm text-green-600">
                            Selected: {formData.fileUpload.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 5: Declaration & Submission */}
              <Card className="border-border-light dark:border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-text-primary dark:text-white mb-6">
                    5. Declaration & Submission
                  </h3>
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="declaration"
                      checked={formData.declaration}
                      onCheckedChange={(checked) =>
                        handleInputChange('declaration', checked as boolean)
                      }
                      required
                    />
                    <Label htmlFor="declaration" className="text-sm leading-6">
                      I hereby declare that the information provided is true and
                      correct to the best of my knowledge. *
                    </Label>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <Button
                      type="submit"
                      className="h-12 bg-orange-500 hover:bg-orange-600"
                    >
                      Submit Application
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
