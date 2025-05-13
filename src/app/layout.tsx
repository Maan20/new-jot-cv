import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientTopNavBar from './components/ClientTopNavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JotCV - Professional Resume Builder',
  description: 'Create your professional resume with ease',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <ClientTopNavBar />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
