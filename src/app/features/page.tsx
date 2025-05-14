import React from 'react';

const features = [
    {
        icon: <i className="fas fa-rocket w-8 h-8 text-blue-600" />,
        title: "No Sign Up Required",
        description: "Start building your resume instantly without creating an account. Download and share your resume immediately.",
        highlight: true
    },
    {
        icon: <i className="fas fa-lock w-8 h-8 text-blue-600" />,
        title: "100% Free Forever",
        description: "All features are completely free. No hidden charges, no premium features, no subscription required.",
        highlight: true
    },
    {
        icon: <i className="fas fa-palette w-8 h-8 text-blue-600" />,
        title: "Professional Templates",
        description: "Choose from 20+ ATS-friendly templates designed by professional resume experts. All templates are free to use.",
        highlight: true
    },
    {
        icon: <i className="fas fa-file-alt w-8 h-8 text-blue-600" />,
        title: "Smart Resume Builder",
        description: "Our AI-powered builder helps you create the perfect resume with real-time suggestions and formatting.",
        highlight: true
    },
    {
        icon: <i className="fas fa-video w-8 h-8 text-blue-600" />,
        title: "Video Resume Creation",
        description: "Create and attach video resumes to showcase your personality and communication skills.",
        highlight: true
    },
    {
        icon: <i className="fas fa-magic w-8 h-8 text-blue-600" />,
        title: "AI-Powered Suggestions",
        description: "Get intelligent suggestions for improving your resume content and formatting in real-time.",
        highlight: true
    },
    {
        icon: <i className="fas fa-download w-8 h-8 text-blue-600" />,
        title: "Multiple Export Formats",
        description: "Download your resume in PDF, DOCX, or TXT formats. All formats are optimized for ATS systems.",
        highlight: true
    },
    {
        icon: <i className="fas fa-share-alt w-8 h-8 text-blue-600" />,
        title: "Easy Sharing",
        description: "Share your resume directly with employers via email or generate a shareable link.",
        highlight: true
    },
    {
        icon: <i className="fas fa-mobile-alt w-8 h-8 text-blue-600" />,
        title: "Mobile Friendly",
        description: "Create and edit your resume on any device - desktop, tablet, or mobile.",
        highlight: true
    }
];

export default function FeaturesPage() {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Powerful Features, Zero Cost</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    JotCV offers everything you need to create a professional resume - completely free, no sign up required.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${feature.highlight ? 'border-2 border-blue-500' : ''
                            }`}
                    >
                        <div className="mb-4">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-700">{feature.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Create Your Resume?</h2>
                <p className="text-xl text-gray-600 mb-8">
                    Start building your professional resume now - no sign up required!
                </p>
                <a
                    href="/resume-builder"
                    className="inline-block bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors text-lg font-semibold"
                >
                    Start Building Now
                </a>
            </div>
        </div>
    );
} 