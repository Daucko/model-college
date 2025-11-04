'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CheckCircle,
  FileText,
  School,
  User,
  Stethoscope,
  Camera,
  Calendar,
  Mail,
  Phone,
  Clock,
  Edit,
} from 'lucide-react';

export default function TransferStudents() {
  const eligibilityItems = [
    'Applicants must be in good academic and disciplinary standing at their current school.',
    'We accept transfer applications for students entering KG through Secondary sections, subject to availability.',
    'A minimum GPA of 2.5 (or equivalent) on a 4.0 scale is required from the previous two academic years.',
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Submit Application Form',
      description:
        'Complete and submit the online application form along with the non-refundable application fee. Ensure all information is accurate and up-to-date.',
    },
    {
      number: 2,
      title: 'Provide Required Documents',
      description:
        'Submit all required documents via our admissions portal. A checklist is provided below. Incomplete applications will not be reviewed.',
    },
    {
      number: 3,
      title: 'Assessment & Interview',
      description:
        'Qualified applicants will be invited for an age-appropriate academic assessment and a family interview with our admissions committee.',
    },
    {
      number: 4,
      title: 'Admission Decision',
      description:
        'Decisions will be communicated via email within two weeks of the interview. Accepted students will receive an enrollment packet to finalize their registration.',
    },
  ];

  const requiredDocuments = [
    { icon: FileText, text: 'Completed Application Form' },
    { icon: School, text: 'Official Transcripts (last 2 years)' },
    { icon: User, text: 'Copy of Birth Certificate' },
    { icon: CheckCircle, text: 'Two Teacher Recommendation Letters' },
    { icon: Stethoscope, text: 'Updated Immunization Records' },
    { icon: Camera, text: 'Recent Passport-sized Photo' },
  ];

  const keyDates = [
    { label: 'Application Opens:', date: 'October 1, 2024' },
    { label: 'Application Deadline:', date: 'February 15, 2025' },
    { label: 'Decision Notification:', date: 'Rolling, by March 30, 2025' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap gap-2 pb-4">
            <a
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
              href="#"
            >
              Home
            </a>
            <span className="text-base font-medium text-muted-foreground">
              /
            </span>
            <a
              className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
              href="#"
            >
              Admissions
            </a>
            <span className="text-base font-medium text-muted-foreground">
              /
            </span>
            <span className="text-base font-medium text-foreground">
              Transfer Students
            </span>
          </div>

          {/* Page Heading */}
          <div className="flex flex-wrap justify-between gap-3 pb-6">
            <h1 className="text-4xl font-black leading-tight tracking-tight text-primary min-w-72">
              Transfer Students
            </h1>
          </div>

          {/* Body Text */}
          <p className="text-base font-normal leading-normal pb-8">
            Welcome to Model College! We are delighted you are considering
            continuing your academic journey with us. We understand that
            transferring schools can be a significant step, and our admissions
            team is here to support you in making the transition as smooth as
            possible. This page provides all the necessary information for
            prospective transfer students.
          </p>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Eligibility Criteria Section */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold leading-tight tracking-tight text-primary pb-4">
                    Eligibility Criteria
                  </h2>
                  <p className="text-base font-normal leading-normal pb-4">
                    To be considered for transfer admission, students must meet
                    the following criteria. Please review them carefully before
                    beginning your application.
                  </p>
                  <ul className="space-y-3">
                    {eligibilityItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle
                          className="text-orange-500 mt-1 shrink-0"
                          size={20}
                        />
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Application Process Section */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold leading-tight tracking-tight text-primary pb-4">
                    Application Process
                  </h2>
                  <div className="space-y-4">
                    {processSteps.map((step) => (
                      <div key={step.number} className="flex items-start gap-4">
                        <div className="shrink-0 size-8 bg-primary/20 text-primary rounded-full flex items-center justify-center font-bold">
                          {step.number}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{step.title}</h3>
                          <p className="text-base text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Required Documents Section */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold leading-tight tracking-tight text-primary pb-4">
                    Required Documents
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {requiredDocuments.map((doc, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <doc.icon className="text-orange-500" size={20} />
                        <span>{doc.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Key Dates & Deadlines */}
              <Card className="bg-orange-500/10 border-orange-500/30">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 pb-3">
                    <Calendar className="text-orange-500" size={24} />
                    <h3 className="text-lg font-bold text-foreground">
                      Key Dates & Deadlines
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {keyDates.map((date, index) => (
                      <li key={index} className="flex flex-col">
                        <span className="font-semibold">{date.label}</span>
                        <span className="text-muted-foreground">
                          {date.date}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold pb-4 text-primary">
                    Transfer Inquiries
                  </h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      For any questions regarding the transfer process, please
                      contact our dedicated admissions officer.
                    </p>
                    <p className="font-semibold">Ms. Jane Doe</p>
                    <div className="flex items-center gap-3">
                      <Mail className="text-primary" size={20} />
                      <a
                        className="hover:underline text-foreground"
                        href="mailto:j.doe@modelcollege.edu"
                      >
                        j.doe@modelcollege.edu
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-primary" size={20} />
                      <a
                        className="hover:underline text-foreground"
                        href="tel:+1234567890"
                      >
                        (123) 456-7890
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="text-primary" size={20} />
                      <span className="text-muted-foreground">
                        Mon - Fri, 9 AM - 4 PM
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Button */}
              <Button
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 gap-2 h-12"
              >
                <Edit size={20} />
                Start Your Application
              </Button>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
