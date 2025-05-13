import React from 'react';
import { SocialLinks } from '../components/SocialLinks';

export default function HowToUsePage() {
    const steps = [
        {
            number: '01',
            title: 'Choose a Template',
            description: 'Select from our collection of professional, ATS-friendly resume templates.',
            icon: '📋'
        },
        {
            number: '02',
            title: 'Fill in Your Details',
            description: 'Enter your personal information, work experience, education, and skills.',
            icon: '✍️'
        },
        {
            number: '03',
            title: 'Get AI Suggestions',
            description: 'Receive real-time suggestions to improve your resume content and formatting.',
            icon: '🤖'
        },
        {
            number: '04',
            title: 'Add Video Profile (Optional)',
            description: 'Record a short video introduction to make your resume stand out.',
            icon: '🎥'
        },
        {
            number: '05',
            title: 'Download Your Resume',
            description: 'Export your resume in your preferred format (PDF, DOCX, or TXT).',
            icon: '📥'
        }
    ];

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-center mb-8">How to Use JotCV</h1>
            <p className="text-gray-600 text-center mb-12">
                Follow these simple steps to create your professional resume
            </p>

            <div className="space-y-8 mb-16">
                {steps.map((step) => (
                    <div key={step.number} className="flex items-start space-x-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                        <div className="flex-shrink-0">
                            <div className="text-3xl">{step.icon}</div>
                        </div>
                        <div>
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="text-blue-600 font-semibold">{step.number}</span>
                                <h3 className="text-xl font-semibold">{step.title}</h3>
                            </div>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-blue-50 p-8 rounded-lg mb-16">
                <h2 className="text-2xl font-semibold mb-4">Pro Tips</h2>
                <ul className="space-y-2 text-gray-700">
                    <li>• Keep your resume concise and focused on relevant experience</li>
                    <li>• Use action verbs to describe your achievements</li>
                    <li>• Customize your resume for each job application</li>
                    <li>• Proofread carefully to avoid typos and grammatical errors</li>
                    <li>• Keep your video profile under 2 minutes</li>
                </ul>
            </div>

            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
                <p className="text-gray-600 mb-6">
                    Join our community and stay updated with the latest tips and features
                </p>
                <SocialLinks iconSize="w-8 h-8" showLabels={true} />
                <div className="mt-8">
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