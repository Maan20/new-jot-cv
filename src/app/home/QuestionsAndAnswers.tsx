'use client';

import { useState } from 'react';
import { Link } from "components/documentation";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const QAS = [
  {
    question:
      "Q1. What is a resume builder? Why resume builder is better than resume template doc?",
    answer: (
      <>
        <p>
          There are two ways to create a resume today. One option is to use a
          resume template, such as an office/google doc, and customize it
          according to your needs. The other option is to use a resume builder,
          an online tool that allows you to input your information and
          automatically generates a resume for you.
        </p>
        <p>
          Using a resume template requires manual formatting work, like copying
          and pasting text sections and adjusting spacing, which can be
          time-consuming and error-prone. It is easy to run into formatting
          issues, such as using different bullet points or font styles after
          copying and pasting. On the other hand, a resume builder like
          JotCV saves time and prevents formatting mistakes by
          automatically formatting the resume. It also offers the convenience of
          easily changing font types or sizes with a simple click. In summary, a
          resume builder is easier to use compared to a resume template.
        </p>
      </>
    ),
  },
  {
    question:
      "Q2. What uniquely sets JotCV apart from other resume builders and templates?",
    answer: (
      <>
        <p>
          Other than JotCV, there are some great free resume builders out
          there, e.g. <Link href="https://rxresu.me/">Reactive Resume</Link>,{" "}
          <Link href="https://flowcv.com/">FlowCV</Link>. However, JotCV
          stands out with 2 distinctive features:
        </p>{" "}
        <p>
          <span className="font-semibold">
            1. JotCV is designed specifically for the U.S. job market and
            best practices.
          </span>
          <br />
          Unlike other resume builders that target a global audience and offer
          many customization options, JotCV intentionally only offers
          options that are aligned with U.S. best practices. For example, it
          excludes the option to add a profile picture to avoid bias and
          discrimination. It offers only the core sections, e.g. profile, work
          experience, education, and skills, while omitting unnecessary sections
          like references. Additionally, JotCV only offers a top down
          single column resume design as opposed to two column design, because
          single column design works best for AST. <br />{" "}
        </p>
        <p>
          <span className="font-semibold">
            2. JotCV is super privacy focus.
          </span>{" "}
          <br />
          While other resume builders may require email sign up and store user
          data in their databases, JotCV believes that resume data should
          remain private and accessible only on user's local machine. Therefore,
          JotCV doesn't require sign up to use the app, and all inputted
          data is stored in user's browser that only user has access to.
        </p>
      </>
    ),
  },

  {
    question: "Q4. How can I support JotCV?",
    answer: (
      <>
        <p>
          The best way to support JotCV is to share your thoughts and
          feedback with us to help further improve it. You can send us an email
          at{" "}
          <Link href="mailto:hello@jotcv.com">hello@jotcv.com</Link>{" "}
          or{" "}
          <Link href="https://github.com/xitanggg/jotcv/issues/new">
            open an issue
          </Link>{" "}
          at our Github repository. Whether you like it or not, we would love to
          hear from you.
        </p>
        <p>
          Another great way to support JotCV is by spreading the words.
          Share it with your friends, on social media platforms, or with your
          school's career center. Our goal is to reach more people who struggle
          with creating their resume, and your word-of-mouth support would be
          greatly appreciated. If you use Github, you can also show your support
          by{" "}
          <Link href="https://github.com/xitanggg/jotcv">
            giving the project a star
          </Link>{" "}
          to help increase its popularity and reach.
        </p>
      </>
    ),
  },
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
  }
];

export const QuestionsAndAnswers = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Get quick answers to common questions about JotCV
        </p>

        <div className="space-y-4">
          {QAS.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white/50 backdrop-blur-sm"
            >
              <button
                className="w-full px-6 py-4 text-left bg-white/70 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <FaChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50/50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            View All FAQs
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
