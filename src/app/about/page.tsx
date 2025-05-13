import React from 'react';
import { SocialLinks } from '../components/SocialLinks';

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-center mb-8">About JotCV</h1>

            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                    <p className="text-gray-700 mb-6">
                        JotCV was born from a simple idea: to make resume creation accessible to everyone.
                        We understand that crafting a professional resume can be challenging, especially for
                        those entering the job market or making a career change. That's why we created a
                        platform that's completely free, requires no sign-up, and helps you create a
                        standout resume in minutes.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-700 mb-6">
                        Our mission is to empower job seekers with the tools they need to succeed in their
                        career journey. We believe that everyone deserves access to professional resume
                        building tools, regardless of their background or financial situation. That's why
                        we offer all our features completely free, with no hidden charges or premium tiers.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">What Sets Us Apart</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>100% Free - No hidden charges or premium features</li>
                        <li>No Sign-up Required - Start building immediately</li>
                        <li>ATS-Friendly Templates - Designed to pass automated screening</li>
                        <li>AI-Powered Suggestions - Get real-time feedback on your resume</li>
                        <li>Video Resume Support - Stand out with video profiles</li>
                        <li>Multiple Export Formats - Download in PDF, DOCX, or TXT</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
                    <p className="text-gray-700 mb-6">
                        Stay updated with our latest features, tips, and career advice by following us on social media.
                    </p>
                    <SocialLinks iconSize="w-8 h-8" showLabels={true} />
                </section>

                <div className="mt-12 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Ready to Create Your Resume?</h2>
                    <p className="text-gray-600 mb-8">
                        Join thousands of users who have successfully created professional resumes with JotCV.
                    </p>
                    <a
                        href="/resume-builder"
                        className="inline-block bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors text-lg font-semibold"
                    >
                        Start Building Now
                    </a>
                </div>
            </div>
        </div>
    );
} 