import React from 'react';

const features = [
    {
        icon: (
            <svg className="w-8 h-8 text-blue-600" viewBox="0 0 448 512" fill="currentColor">
                <path d="M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2h11.4c1.1 0 2.1.6 2.6 1.3l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8 0 3.2 1.4 3.2 3.2zm-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2zm-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2zM332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2zM448 113.6V399c-.6 3.5-3.8 6.2-7.3 6.2H56c-4.4 0-8-3.6-8-8V113c0-4.4 3.6-8 8-8h385c3.5 0 6.2 2.8 6.2 6.2v2.4zm-77.1 48.7c-3.2 0-5.8 2.6-5.8 5.8v160c0 3.2 2.6 5.8 5.8 5.8h46.5c3.2 0 5.8-2.6 5.8-5.8v-160c0-3.2-2.6-5.8-5.8-5.8h-46.5zm0 192H325v-160c0-3.2-2.6-5.8-5.8-5.8h-46.5c-3.2 0-5.8 2.6-5.8 5.8v160c0 3.2 2.6 5.8 5.8 5.8h46.5c3.2 0 5.8-2.6 5.8-5.8v-54.2h45.8v54.2c0 3.2 2.6 5.8 5.8 5.8zm-160 0h-46.5c-3.2 0-5.8-2.6-5.8-5.8v-160c0-3.2 2.6-5.8 5.8-5.8h46.5c3.2 0 5.8 2.6 5.8 5.8v160c0 3.2-2.6 5.8-5.8 5.8zm-160 0H24.5c-3.2 0-5.8-2.6-5.8-5.8v-160c0-3.2 2.6-5.8 5.8-5.8h46.5c3.2 0 5.8 2.6 5.8 5.8v160c0 3.2-2.6 5.8-5.8 5.8z" />
            </svg>
        ),
        title: "No Sign Up Required",
        description: "Start building your resume instantly without creating an account. Download and share your resume immediately.",
        highlight: true
    },
    {
        icon: (
            <svg className="w-8 h-8 text-blue-600" viewBox="0 0 448 512" fill="currentColor">
                <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" />
            </svg>
        ),
        title: "100% Free Forever",
        description: "All features are completely free. No hidden charges, no premium features, no subscription required.",
        highlight: true
    },
    {
        icon: (
            <svg className="w-8 h-8 text-blue-600" viewBox="0 0 512 512" fill="currentColor">
                <path d="M204.3 5C104.9 24.4 24.8 104.5 5.4 203.9c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
            </svg>
        ),
        title: "Professional Templates",
        description: "Choose from 20+ ATS-friendly templates designed by professional resume experts. All templates are free to use.",
        highlight: true
    },
    {
        icon: (
            <svg className="w-8 h-8 text-blue-600" viewBox="0 0 384 512" fill="currentColor">
                <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" />
            </svg>
        ),
        title: "Smart Resume Builder",
        description: "Our AI-powered builder helps you create the perfect resume with real-time suggestions and formatting.",
        highlight: true
    },
    {
        icon: (
            <svg className="w-8 h-8 text-blue-600" viewBox="0 0 576 512" fill="currentColor">
                <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.3 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z" />
            </svg>
        ),
        title: "Video Resume Creation",
        description: "Create and attach video resumes to showcase your personality and communication skills.",
        highlight: true
    },
    {
        icon: (
            <svg className="w-8 h-8 text-blue-600" viewBox="0 0 512 512" fill="currentColor">
                <path d="M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z" />
            </svg>
        ),
        title: "AI-Powered Suggestions",
        description: "Get intelligent suggestions for improving your resume content and formatting in real-time.",
        highlight: true
    },
    {
        icon: (
            <svg className="w-8 h-8 text-blue-600" viewBox="0 0 512 512" fill="currentColor">
                <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
            </svg>
        ),
        title: "Multiple Export Formats",
        description: "Download your resume in PDF, DOCX, or TXT formats. All formats are optimized for ATS systems.",
        highlight: true
    },
    {
        icon: (
            <svg className="w-8 h-8 text-blue-600" viewBox="0 0 512 512" fill="currentColor">
                <path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z" />
            </svg>
        ),
        title: "Easy Sharing",
        description: "Share your resume directly with employers via email or generate a shareable link.",
        highlight: true
    },
    {
        icon: (
            <svg className="w-8 h-8 text-blue-600" viewBox="0 0 320 512" fill="currentColor">
                <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" />
            </svg>
        ),
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