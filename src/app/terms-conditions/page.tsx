import React from 'react';

export default function TermsConditionsPage() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h1>

            <div className="space-y-8">
                <div className="text-sm text-gray-600 mb-8">
                    <p>Last Updated: Dec 30, 2023</p>
                </div>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                    <p className="text-gray-700 mb-4">
                        By accessing and using JotCV, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
                    <p className="text-gray-700 mb-4">
                        JotCV provides an online platform for creating professional resumes and video profiles. Our services include resume building, template selection, AI-powered suggestions, and video resume creation.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">3. User Account</h2>
                    <p className="text-gray-700 mb-4">
                        To use certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">4. User Content</h2>
                    <p className="text-gray-700 mb-4">
                        You retain all rights to your content. By submitting content to JotCV, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content in connection with providing and improving our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">5. Prohibited Activities</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Using the service for any illegal purpose</li>
                        <li>Violating any laws in your jurisdiction</li>
                        <li>Uploading or transmitting viruses or malicious code</li>
                        <li>Attempting to gain unauthorized access to any portion of the service</li>
                        <li>Interfering with or disrupting the service or servers</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
                    <p className="text-gray-700 mb-4">
                        The Service and its original content, features, and functionality are owned by JotCV and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
                    <p className="text-gray-700 mb-4">
                        In no event shall JotCV be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
                    <p className="text-gray-700 mb-4">
                        We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
                    <p className="text-gray-700 mb-4">
                        If you have any questions about these Terms, please contact us at info@jotcv.com
                    </p>
                </section>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">Have questions about our terms?</p>
                    <a
                        href="/contact"
                        className="inline-block bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
} 