import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
                    {/* <TopNavBar /> */}
                    <main className="container mx-auto px-4 py-8">
                        <div className="animate-fade-in">
                            {children}
                        </div>
                    </main>
                    <footer className="bg-white border-t mt-auto">
                        <div className="container mx-auto px-4 py-6">
                            <p className="text-center text-text-secondary">
                                © 2024 JotCV. All rights reserved.
                            </p>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}