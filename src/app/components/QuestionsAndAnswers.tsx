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
                                <i className="fas fa-chevron-up w-5 h-5 text-gray-500" />
                            ) : (
                                <i className="fas fa-chevron-down w-5 h-5 text-gray-500" />
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