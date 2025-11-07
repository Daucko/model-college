'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, ArrowRight, Percent, CreditCard } from 'lucide-react';

export default function FeeStructure() {
  const [activeTab, setActiveTab] = useState('primary');

  const feeData = {
    primary: [
      { component: 'Admission Fee', frequency: 'One-time', amount: '$500.00' },
      {
        component: 'Security Deposit (Refundable)',
        frequency: 'One-time',
        amount: '$1,000.00',
      },
      { component: 'Tuition Fee', frequency: 'Quarterly', amount: '$2,500.00' },
      { component: 'Annual Charges', frequency: 'Annually', amount: '$800.00' },
      {
        component: 'Development & Miscellaneous Fee',
        frequency: 'Annually',
        amount: '$350.00',
      },
    ],
    secondary: [
      { component: 'Admission Fee', frequency: 'One-time', amount: '$600.00' },
      {
        component: 'Security Deposit (Refundable)',
        frequency: 'One-time',
        amount: '$1,200.00',
      },
      { component: 'Tuition Fee', frequency: 'Quarterly', amount: '$3,000.00' },
      { component: 'Annual Charges', frequency: 'Annually', amount: '$900.00' },
      {
        component: 'Development & Miscellaneous Fee',
        frequency: 'Annually',
        amount: '$400.00',
      },
    ],
  };

  const currentFees = feeData[activeTab as keyof typeof feeData];
  const totalAmount = activeTab === 'primary' ? '$4,150.00' : '$5,100.00';

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40 py-5 md:py-10 max-w-7xl">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 p-4">
          <a
            className="text-subtle-text-light dark:text-subtle-text-dark text-sm md:text-base font-medium leading-normal hover:text-primary"
            href="#"
          >
            Home
          </a>
          <span className="text-subtle-text-light dark:text-subtle-text-dark text-sm md:text-base font-medium leading-normal">
            /
          </span>
          <a
            className="text-subtle-text-light dark:text-subtle-text-dark text-sm md:text-base font-medium leading-normal hover:text-primary"
            href="#"
          >
            Admissions
          </a>
          <span className="text-subtle-text-light dark:text-subtle-text-dark text-sm md:text-base font-medium leading-normal">
            /
          </span>
          <span className="text-text-light dark:text-text-dark text-sm md:text-base font-medium leading-normal">
            Fee Structure
          </span>
        </div>

        {/* Page Heading */}
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <h1 className="text-primary text-3xl md:text-4xl font-black leading-tight tracking-tight min-w-72">
            Fee Structure for Academic Year 2024-2025
          </h1>
        </div>

        {/* Body Text */}
        <p className="text-text-light dark:text-text-dark text-base font-normal leading-relaxed pb-3 pt-1 px-4 max-w-4xl">
          We are committed to providing transparency in our fee policies. Below
          is a detailed breakdown of the fee structure for the upcoming academic
          year to help you understand the financial commitment.
        </p>

        {/* Tabs */}
        <div className="py-3 px-4 mt-6 ">
          <div className="flex border-b border-black/10 dark:border-white/10 gap-8">
            <button
              onClick={() => setActiveTab('primary')}
              className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 transition-colors ${
                activeTab === 'primary'
                  ? 'border-b-primary text-primary'
                  : 'border-b-transparent text-subtle-text-light dark:text-subtle-text-dark hover:text-text-light dark:hover:text-text-dark'
              }`}
            >
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                Primary Section (I-V)
              </p>
            </button>
            <button
              onClick={() => setActiveTab('secondary')}
              className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 transition-colors ${
                activeTab === 'secondary'
                  ? 'border-b-primary text-primary'
                  : 'border-b-transparent text-subtle-text-light dark:text-subtle-text-dark hover:text-text-light dark:hover:text-text-dark'
              }`}
            >
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                Secondary Section (VI-X)
              </p>
            </button>
          </div>
        </div>

        {/* Fee Table Section */}
        <div className="p-4">
          <Card className="overflow-hidden border-black/5 dark:border-white/10 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-primary/10 dark:bg-primary/20">
                  <tr className="">
                    <th className="p-4 text-sm font-bold text-primary  dark:text-blue-300 uppercase tracking-wider">
                      Fee Component
                    </th>
                    <th className="p-4 text-sm font-bold text-primary dark:text-blue-300 uppercase tracking-wider text-center">
                      Frequency
                    </th>
                    <th className="p-4 text-sm font-bold text-primary dark:text-blue-300 uppercase tracking-wider text-right">
                      Amount (USD)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 dark:divide-white/10">
                  {currentFees.map((fee, index) => (
                    <tr
                      key={index}
                      className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                    >
                      <td className="p-4 font-medium">{fee.component}</td>
                      <td className="p-4 text-center text-subtle-text-light dark:text-subtle-text-dark">
                        {fee.frequency}
                      </td>
                      <td className="p-4 text-right font-semibold">
                        {fee.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-orange-500/10 dark:bg-orange-500/20">
                    <td className="p-4 font-bold text-orange-500" colSpan={2}>
                      Total Payable at Admission
                    </td>
                    <td className="p-4 text-right font-bold text-xl text-orange-500">
                      {totalAmount}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </Card>
        </div>

        {/* Additional Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 mt-8">
          <Card className="border-black/5 dark:border-white/10 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                <Percent className="h-5 w-5 text-orange-500" />
                Discounts & Scholarships
              </h3>
              <ul className="list-disc list-inside space-y-2 text-subtle-text-light dark:text-subtle-text-dark">
                <li>
                  A 10% sibling discount is available on the tuition fee for the
                  second child.
                </li>
                <li>
                  Early payment of the full annual fee by April 30th receives a
                  5% discount.
                </li>
                <li>
                  Merit-based scholarships are available. Contact admissions for
                  details.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-black/5 dark:border-white/10 shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-orange-500" />
                Payment Schedule
              </h3>
              <ul className="list-disc list-inside space-y-2 text-subtle-text-light dark:text-subtle-text-dark">
                <li>
                  <strong>1st Installment:</strong> Due by July 15, 2024
                </li>
                <li>
                  <strong>2nd Installment:</strong> Due by October 15, 2024
                </li>
                <li>
                  <strong>3rd Installment:</strong> Due by January 15, 2025
                </li>
                <li>
                  <strong>4th Installment:</strong> Due by April 15, 2025
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 mt-8">
          <Button className="h-12 px-6 gap-2 bg-primary hover:bg-primary/90 text-white text-base font-bold">
            <Download className="h-5 w-5" />
            Download Fee PDF
          </Button>
          <Button className="h-12 px-6 gap-2 bg-orange-500 hover:bg-orange-600 text-white text-base font-bold">
            Apply Now
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
