import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Header } from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { QuickLinks } from '@/components/layout/QuickLinks';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Model College - Nurturing Future Leaders',
  description:
    'A premier educational institution nurturing minds from KG to Secondary',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <QuickLinks />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
