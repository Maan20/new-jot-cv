'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import fullLogoSrc from "public/full-logo.png";
import { useState } from 'react';

const ClientTopNavBar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '/resume-builder', label: 'Resume Builder' },
        { href: '/resume-import', label: 'Import Resume' },
        // { href: '/templates', label: 'Templates' },
        { href: '/features', label: 'Features' },
        { href: '/how-to-use', label: 'How to Use' },
        { href: '/faq', label: 'FAQ' },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            className="h-12 w-20 select-none rounded-full"
                            src={fullLogoSrc}
                            alt="JotCV Logo"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-gray-600 hover:text-blue-600 transition-colors duration-200 ${pathname === link.href ? 'text-blue-600 font-medium' : ''
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/resume-builder"
                            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                        >
                            Create Resume
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md ${pathname === link.href ? 'text-blue-600 font-medium bg-blue-50' : ''
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/resume-builder"
                            className="block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Create Resume
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default ClientTopNavBar;
