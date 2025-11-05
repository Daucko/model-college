import Link from 'next/link';
import {
  School,
  MapPin,
  Mail,
  Phone,
  BookOpen,
  Users,
  Calendar,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 dark:bg-black text-white mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* School Info */}
          <div className="col-span-full lg:col-span-1">
            <Link href="#" className="flex items-center gap-2">
              <School className="h-6 w-6 text-white" />
              <span className="text-xl font-bold">Model College</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Fostering excellence and integrity in every student.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  News & Events
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">
              Academics
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  KG & Nursery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  Primary School
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  Secondary School
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  Curriculum
                </Link>
              </li>
            </ul>
          </div>

          {/* For Parents */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">
              For Parents
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  Parent Portal
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  Calendar
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-300 hover:text-white transition-colors"
                >
                  Support Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-base text-gray-300">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                123 Education Lane, Knowledge City, 45678
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                contact@modelcollege.edu
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                (123) 456-7890
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">
            © 2024 Model College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
