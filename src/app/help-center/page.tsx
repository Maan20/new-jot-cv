import React from 'react';
import { SocialLinks } from '../components/SocialLinks';

export default function HelpCenterPage() {
    const helpResources = [
        {
            icon: '📚',
            title: 'Documentation',
            description: 'Detailed guides and tutorials for using JotCV',
            link: '/docs'
        },
        {
            icon: '🎥',
            title: 'Video Tutorials',
            description: 'Step-by-step video guides for creating your resume',
            link: '/tutorials'
        },
        {
            icon: '❓',
            title: 'FAQ',
            description: 'Answers to frequently asked questions',
            link: '/faq'
        },
        {
            icon: '📧',
            title: 'Email Support',
            description: 'Get help via email from our support team',
            link: 'mailto:support@jotcv.com'
        },
        {
            icon: '💬',
            title: 'Live Chat',
            description: 'Chat with our support team in real-time',
            link: '/chat'
        }
    ];

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Help Center</h1>
            <p className="text-gray-600 text-center mb-12">
                Find answers to your questions and get support for using JotCV
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {helpResources.map((resource) => (
                    <a
                        key={resource.title}
                        href={resource.link}
                        className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                    >
                        <div className="text-3xl mb-4">{resource.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                        <p className="text-gray-600">{resource.description}</p>
                    </a>
                ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-16">
                <h2 className="text-2xl font-semibold mb-4">Need Immediate Assistance?</h2>
                <div className="space-y-4">
                    <p className="text-gray-600">
                        Our support team is available Monday through Friday, 9 AM to 6 PM IST.
                    </p>
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-600">Email:</span>
                        <a href="mailto:support@jotcv.com" className="text-blue-600 hover:underline">
                            support@jotcv.com
                        </a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-600">Phone:</span>
                        <a href="tel:+919876543210" className="text-blue-600 hover:underline">
                            +91 98765 43210
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
                <p className="text-gray-600 mb-6">
                    Follow us on social media for updates, tips, and community support
                </p>
                <SocialLinks iconSize="w-8 h-8" showLabels={true} />
            </div>
        </div>
    );
} 