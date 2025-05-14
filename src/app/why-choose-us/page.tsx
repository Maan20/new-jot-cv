import React from 'react';

const reasons = [
    {
        icon: <i className="fas fa-users w-12 h-12 text-blue-600" />,
        title: "User-Friendly Interface",
        description: "Our intuitive interface makes resume creation a breeze. No technical skills required."
    },
    {
        icon: <i className="fas fa-robot w-12 h-12 text-blue-600" />,
        title: "AI-Powered Suggestions",
        description: "Get intelligent suggestions to improve your resume content and formatting."
    },
    {
        icon: <i className="fas fa-list w-12 h-12 text-blue-600" />,
        title: "ATS-Optimized Templates",
        description: "All our templates are designed to pass through Applicant Tracking Systems."
    },
    {
        icon: <i className="fas fa-video w-12 h-12 text-blue-600" />,
        title: "Video Resume Support",
        description: "Create and attach video resumes to showcase your personality."
    },
    {
        icon: <i className="fas fa-palette w-12 h-12 text-blue-600" />,
        title: "Professional Templates",
        description: "Choose from a variety of professionally designed templates."
    },
    {
        icon: <i className="fas fa-shield-alt w-12 h-12 text-blue-600" />,
        title: "Data Security",
        description: "Your data stays on your device. We don't store your information."
    }
];

export default function WhyChooseUsPage() {
    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-center mb-12">Why Choose JotCV?</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reasons.map((reason, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="mb-4">
                            {reason.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                        <p className="text-gray-700">{reason.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
} 