'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Download,
  Printer,
  Route,
  Shield,
  CreditCard,
  Phone,
  Mail,
  User,
  Navigation,
  Users,
  Gauge,
  AlertTriangle,
  ChevronDown,
} from 'lucide-react';
import Link from 'next/link';

export default function TransportationPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1">
        <div className="px-4 sm:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10">
          <div className="flex flex-col w-full max-w-6xl flex-1">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-2 pb-4">
              <Link
                href="#"
                className="text-muted-foreground text-base font-medium hover:text-primary transition-colors"
              >
                Home
              </Link>
              <span className="text-muted-foreground text-base font-medium">
                /
              </span>
              <Link
                href="#"
                className="text-muted-foreground text-base font-medium hover:text-primary transition-colors"
              >
                Students
              </Link>
              <span className="text-muted-foreground text-base font-medium">
                /
              </span>
              <span className="text-foreground text-base font-medium">
                Transportation
              </span>
            </div>

            {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-3 pb-4">
              <h1 className="text-primary text-4xl sm:text-5xl font-black leading-tight tracking-tight min-w-72">
                Transportation
              </h1>
            </div>

            {/* Header Image */}
            <div className="my-6">
              <div
                className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white rounded-xl min-h-80 shadow-md"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmEp1mAmgEkFsowHt3ZaOLUvGU6gkGiWos5Uj_bST2zRzJnwz71sgKhe8w71cz13q_q5K8xqUijyLqkP8A4Rip9BhapGf6ZbbKtQoluML09Phv5RdXEb_lePjYRpUWfc9p46OcnK6NTarnwKCzM6ukLTrLaciDy9j8sSy5X_NtlBth8VX1ofnkYLcNlt-RfcsiDzFK7YrWD0V6BGuYG7UFV0IL-jxNemLm8NIP-7R-HIijkd-Kkq2ZIuBS9tIUdFvJ-9GHHyj4l5Ku")`,
                }}
              />
            </div>

            {/* Introduction */}
            <p className="text-foreground text-base font-normal leading-relaxed pb-6 pt-1">
              Model College is committed to providing safe, reliable, and
              efficient transportation services for our students. Our fleet of
              modern buses is equipped with the latest safety features,
              including GPS tracking and on-board supervision, to ensure a
              secure and comfortable journey to and from the college.
            </p>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left column with tabs */}
              <div className="lg:col-span-2 space-y-8">
                {/* Routes Section */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                      <Route className="h-6 w-6 text-orange-500" />
                      Bus Routes & Timings
                    </h2>
                    <p className="mb-6 text-muted-foreground">
                      Below are the details for our current bus routes. Please
                      note that timings are approximate and can vary due to
                      traffic conditions.
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead className="border-b border-border">
                          <tr>
                            <th className="py-3 px-4 font-bold uppercase text-sm text-muted-foreground">
                              Route
                            </th>
                            <th className="py-3 px-4 font-bold uppercase text-sm text-muted-foreground">
                              Key Pickup Points
                            </th>
                            <th className="py-3 px-4 font-bold uppercase text-sm text-muted-foreground">
                              Morning Pickup
                            </th>
                            <th className="py-3 px-4 font-bold uppercase text-sm text-muted-foreground">
                              Afternoon Drop-off
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border hover:bg-muted/50">
                            <td className="py-3 px-4 font-medium">Route A</td>
                            <td className="py-3 px-4 text-muted-foreground">
                              City Center, North Park, West Gate
                            </td>
                            <td className="py-3 px-4 text-muted-foreground">
                              7:15 AM
                            </td>
                            <td className="py-3 px-4 text-muted-foreground">
                              4:30 PM
                            </td>
                          </tr>
                          <tr className="border-b border-border hover:bg-muted/50">
                            <td className="py-3 px-4 font-medium">Route B</td>
                            <td className="py-3 px-4 text-muted-foreground">
                              South Bay, East Marina, Lakeside
                            </td>
                            <td className="py-3 px-4 text-muted-foreground">
                              7:30 AM
                            </td>
                            <td className="py-3 px-4 text-muted-foreground">
                              4:45 PM
                            </td>
                          </tr>
                          <tr className="hover:bg-muted/50">
                            <td className="py-3 px-4 font-medium">Route C</td>
                            <td className="py-3 px-4 text-muted-foreground">
                              Green Valley, Hilltop, Riverbend
                            </td>
                            <td className="py-3 px-4 text-muted-foreground">
                              7:00 AM
                            </td>
                            <td className="py-3 px-4 text-muted-foreground">
                              4:15 PM
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                      <Button className="h-10 px-4">
                        <Download className="h-4 w-4 mr-2" />
                        Download Route Map
                      </Button>
                      <Button
                        variant="outline"
                        className="h-10 px-4 bg-orange-500 hover:bg-orange-600 text-white border-orange-500"
                      >
                        <Printer className="h-4 w-4 mr-2" />
                        Print Routes
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Safety & Fees Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                        <Shield className="h-6 w-6 text-orange-500" />
                        Safety Measures
                      </h2>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-3">
                          <Navigation className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          GPS tracking on all buses.
                        </li>
                        <li className="flex items-start gap-3">
                          <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          Trained supervisors on every route.
                        </li>
                        <li className="flex items-start gap-3">
                          <Gauge className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          Speed governors to ensure safe driving.
                        </li>
                        <li className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          Regular driver training and emergency drills.
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                        <CreditCard className="h-6 w-6 text-orange-500" />
                        Transportation Fees
                      </h2>
                      <div className="space-y-3 text-muted-foreground">
                        <p>
                          <strong>Annual Fee:</strong> $1,200 per student
                        </p>
                        <p>
                          <strong>Payment Deadline:</strong> August 15, 2024
                        </p>
                        <p>
                          <strong>Methods:</strong> Online Portal, Bank
                          Transfer, College Office
                        </p>
                        <Link
                          href="#"
                          className="text-primary font-bold hover:underline inline-flex items-center"
                        >
                          Pay Fees Online <span className="ml-1">→</span>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Right column with Contact and FAQs */}
              <div className="space-y-8">
                {/* Contact Card */}
                <Card className="bg-primary/10 dark:bg-primary/20 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">
                      Contact Transport Dept.
                    </h3>
                    <div className="space-y-3 text-foreground">
                      <p className="flex items-center gap-2">
                        <User className="h-5 w-5 text-orange-500" />
                        Mr. John Davis
                      </p>
                      <p className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-orange-500" />
                        <Link
                          href="mailto:transport@modelcollege.edu"
                          className="hover:underline"
                        >
                          transport@modelcollege.edu
                        </Link>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-orange-500" />
                        <Link
                          href="tel:+1234567890"
                          className="hover:underline"
                        >
                          (123) 456-7890
                        </Link>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQs Accordion */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      FAQs
                    </h2>
                    <Accordion type="single" collapsible className="space-y-4">
                      <AccordionItem value="faq-1" className="border-b-0">
                        <AccordionTrigger className="hover:no-underline text-left [&[data-state=open]]:text-primary">
                          How do I register my child for the bus service?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          You can register for the bus service during the
                          admission process or by contacting the transportation
                          department directly via email.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="faq-2" className="border-b-0">
                        <AccordionTrigger className="hover:no-underline text-left [&[data-state=open]]:text-primary">
                          What happens if the bus is delayed?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          In case of any significant delay, parents will be
                          notified via SMS and through the college&apos;s mobile
                          app. You can also track the bus in real-time using the
                          app.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="faq-3" className="border-b-0">
                        <AccordionTrigger className="hover:no-underline text-left [&[data-state=open]]:text-primary">
                          Can I change my pickup/drop-off point?
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          Changes to pickup and drop-off points are subject to
                          availability on the requested route. Please submit a
                          change request form to the transportation department
                          at least two weeks in advance.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
