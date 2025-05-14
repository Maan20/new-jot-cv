"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
                {/* Logo */}
                <div className="mb-8">
                    <Image
                        src="/images/logo.png"
                        alt="JotCV Logo"
                        width={64}
                        height={64}
                        className="mx-auto"
                    />
                </div>

                {/* 404 Text */}
                <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Action Buttons */}
                <div className="space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link
                        href="/"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/resume-builder"
                        className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-base font-medium rounded-full text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                    >
                        Create Resume
                    </Link>
                </div>

                {/* Help Text */}
                <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
                    <p className="text-gray-600 mb-4">
                        Our support team is here to help you find what you're looking for.
                    </p>
                    <Link
                        href="/help-center"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                        Contact Support
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </main>
    );
} 