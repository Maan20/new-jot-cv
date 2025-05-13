import Link from 'next/link';
import { SocialLinks } from './SocialLinks';

export const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">JotCV</h3>
                        <p className="text-gray-600 text-sm">
                            Create professional resumes and video profiles with our free, no-signup required resume builder.
                        </p>
                        <SocialLinks className="mt-4" />
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/resume-builder" className="text-gray-600 hover:text-blue-600 text-sm">
                                    Resume Builder
                                </Link>
                            </li>
                            <li>
                                <Link href="/templates" className="text-gray-600 hover:text-blue-600 text-sm">
                                    Templates
                                </Link>
                            </li>
                            <li>
                                <Link href="/features" className="text-gray-600 hover:text-blue-600 text-sm">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/how-to-use" className="text-gray-600 hover:text-blue-600 text-sm">
                                    How to Use
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-600 hover:text-blue-600 text-sm">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* About & Support */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">About & Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/why-choose-us" className="text-gray-600 hover:text-blue-600 text-sm">
                                    Why Choose Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-gray-600 hover:text-blue-600 text-sm">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/help-center" className="text-gray-600 hover:text-blue-600 text-sm">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 hover:text-blue-600 text-sm">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 text-sm">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-conditions" className="text-gray-600 hover:text-blue-600 text-sm">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-center text-gray-500 text-sm">
                        © {new Date().getFullYear()} JotCV. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

