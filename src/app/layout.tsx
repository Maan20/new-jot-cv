import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientTopNavBar from './components/ClientTopNavBar';
import { defaultMetadata } from './lib/seo';
import Script from 'next/script';
import { Footer } from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'JotCV',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20">
          {/* Decorative Elements */}
          <div className="fixed inset-0 pointer-events-none">
            {/* Top Left Gradient */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />

            {/* Bottom Right Gradient */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/20 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

            {/* Dots Pattern */}
            <div className="absolute inset-0 bg-dot opacity-[0.02]" />
          </div>

          {/* Main Content */}
          <div className="relative">
            {/* Glass Effect Navbar */}
            <div className="backdrop-blur-md bg-white/70 sticky top-0 z-50 border-b border-gray-200/50">
              <ClientTopNavBar />
            </div>

            {/* Main Content Area */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="relative">
                {/* Content Shadow Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/10 to-transparent" />
                {children}
              </div>
            </main>

            {/* Footer with Glass Effect */}
            <div className="backdrop-blur-md bg-white/70 border-t border-gray-200/50">
              <Footer />
            </div>
          </div>

          {/* Scroll Progress Indicator */}
          <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform origin-left scale-x-0 transition-transform duration-300 ease-out"
            style={{ transform: 'scaleX(var(--scroll))' }} />
        </div>

        {/* Add scroll progress script */}
        <Script id="scroll-progress" strategy="afterInteractive">
          {`
            window.addEventListener('scroll', () => {
              const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
              const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
              const scrolled = (winScroll / height) * 100;
              document.documentElement.style.setProperty('--scroll', scrolled / 100);
            });
          `}
        </Script>
      </body>
    </html>
  );
}
