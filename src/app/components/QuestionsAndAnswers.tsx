import React, { useState } from 'react';

interface Question {
    question: string;
    answer: string;
}

interface QuestionsAndAnswersProps {
    questions: Question[];
    className?: string;
}

export const QuestionsAndAnswers = ({ questions, className = '' }: QuestionsAndAnswersProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={`space-y-4 ${className}`}>
            {questions.map((q, index) => (
                <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                >
                    <button
                        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        onClick={() => toggleQuestion(index)}
                    >
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold">{q.question}</span>
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
                            <p className="text-gray-700">{q.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}; 