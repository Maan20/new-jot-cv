'use client';

import React, { useState } from 'react';
import { Link } from "components/documentation";

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

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4`}>
      {QAS.map((q, index) => (
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
