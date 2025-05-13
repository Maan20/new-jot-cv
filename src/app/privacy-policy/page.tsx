import React from 'react';

export default function PrivacyPolicyPage() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

            <div className="space-y-8">
                <div className="text-sm text-gray-600 mb-8">
                    <p>Effective Date: May 13, 2025</p>
                    <p>Updated on: May 13, 2025</p>
                </div>

                <section>
                    <p className="text-gray-700 mb-6">
                        JotCv is committed to respecting the privacy of our users and complying with Privacy laws. We strive to provide a safe, secure user experience. This Privacy Policy sets forth the online data collection and usage policies and practices that apply to our website. By using the JotCv website, you consent to the policies and practices described in this Statement. This privacy policy discloses the privacy practices for (www.jotcv.com). This privacy policy applies solely to information collected by this website.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Your data will be stored and processed in whole or in part in India. If you access the JotCv website outside India, your usage of our site constitutes consent to the transfer of your data out of your country and into India.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Content</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>COLLECTION AND RETENTION OF INFORMATION</li>
                        <li>USE OF INFORMATION BY JotCv</li>
                        <li>DISCLOSURE OF INFORMATION TO THIRD PARTIES</li>
                        <li>THIRD PARTY ADVERTISERS</li>
                        <li>YOUR CHOICES ABOUT YOUR INFORMATION</li>
                        <li>SECURITY</li>
                        <li>USE OF COOKIES AND OTHER TRACKING TECHNOLOGIES</li>
                        <li>HOW WE RESPOND TO DO NOT TRACK SIGNALS</li>
                        <li>THIRD PARTIES</li>
                        <li>FERPA & Privacy</li>
                        <li>CHANGES TO PRIVACY POLICY</li>
                        <li>QUESTIONS</li>
                        <li>RIGHTS OF END USERS</li>
                        <li>DATA DISPOSAL</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">COLLECTION AND RETENTION OF INFORMATION</h2>
                    <p className="text-gray-700 mb-4">
                        In some areas of our websites, JotCv requests or may request that you provide personal information, including your name, gender, address, email address, telephone number, contact information, birth date, billing information and any other information from which your identity is discernible. JotCv may also request that you upload a copy of your resume and connect JotCv to your Facebook and Google profiles, thereby providing personal information regarding your education, prior employment, occupation, titles, and skills, as well as your most recent profile picture, the last article you may have shared, number of connections, industry information and non-specific geolocation information.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">USE OF INFORMATION BY JotCv</h2>
                    <p className="text-gray-700 mb-4">
                        We use the information we gather on an JotCv website, whether personal, demographic, collective or technical, for the purpose of operating and improving the JotCv website, fostering a positive user experience, and delivering the products and services that we offer.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">SECURITY</h2>
                    <p className="text-gray-700 mb-4">
                        JotCv has implemented technical and organizational measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration or disclosure. Notwithstanding such measures, the Internet is an open system and we cannot guarantee that unauthorized third parties will never be able to defeat those measures or use your personal information for improper purposes.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">QUESTIONS</h2>
                    <p className="text-gray-700 mb-4">
                        If you have any questions regarding this Privacy Policy, please visit our FAQ page to discover the many ways in which you can reach us.
                    </p>
                </section>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">Have questions about our privacy policy?</p>
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