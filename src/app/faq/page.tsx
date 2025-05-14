'use client'
import React, { useState } from 'react';

const faqs = [
    {
        question: "Do I need to create an account to use JotCV?",
        answer: "No, you don't need to create an account to use JotCV. You can start building your resume immediately without any sign-up process. All features are available instantly."
    },
    {
        question: "Is JotCV really free to use?",
        answer: "Yes, JotCV is completely free to use. There are no hidden charges, premium features, or subscription requirements. All features, including templates, AI suggestions, and export options, are available at no cost."
    },
    {
        question: "What file formats can I download my resume in?",
        answer: "You can download your resume in multiple formats including PDF, DOCX, and TXT. All formats are optimized for ATS (Applicant Tracking Systems) to ensure your resume gets through automated screening."
    },
    {
        question: "How do I create a video resume?",
        answer: "Creating a video resume is simple. Just click on the 'Add Video Resume' option in the resume builder. You can record directly through your device's camera or upload an existing video. The video will be attached to your resume and can be shared along with it."
    },
    {
        question: "Are the resume templates ATS-friendly?",
        answer: "Yes, all our resume templates are designed to be ATS-friendly. They follow best practices for formatting and structure to ensure your resume can be properly parsed by applicant tracking systems."
    },
    {
        question: "How does the AI suggestion feature work?",
        answer: "Our AI analyzes your resume content in real-time and provides suggestions for improving your wording, formatting, and overall presentation. It helps you highlight your achievements and make your resume more impactful."
    },
    {
        question: "Can I edit my resume after downloading it?",
        answer: "Yes, you can always come back to JotCV and edit your resume. Since we don't require an account, your resume data is stored locally in your browser. Just make sure to use the same device and browser to access your previous work."
    },
    {
        question: "How can I share my resume with employers?",
        answer: "You can share your resume in multiple ways: download it and send it via email, generate a shareable link, or directly share it through our platform. All sharing options are free and available without registration."
    },
    {
        question: "Is my data secure on JotCV?",
        answer: "Yes, we take data security seriously. Since we don't require accounts, your data stays on your device. When you share your resume, we use secure methods to ensure your information is protected."
    },
    {
        question: "Can I use JotCV on my mobile device?",
        answer: "Yes, JotCV is fully responsive and works on all devices including desktops, tablets, and mobile phones. You can create and edit your resume from anywhere."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                        <button
                            className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold">{faq.question}</span>
                                {openIndex === index ? (
                                    <svg className="w-5 h-5 text-gray-500" viewBox="0 0 448 512" fill="currentColor">
                                        <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5 text-gray-500" viewBox="0 0 448 512" fill="currentColor">
                                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
                                    </svg>
                                )}
                            </div>
                        </button>

                        {openIndex === index && (
                            <div className="px-6 py-4 bg-gray-50">
                                <p className="text-gray-700">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <p className="text-gray-600 mb-4">Still have questions?</p>
                <a
                    href="/contact"
                    className="inline-block bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Contact Us
                </a>
            </div>
        </div>
    );
} 