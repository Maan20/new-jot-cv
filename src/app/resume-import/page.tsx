"use client";
import { getHasUsedAppBefore } from "lib/redux/local-storage";
import { ResumeDropzone } from "components/ResumeDropzone";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ImportResume() {
	const [hasUsedAppBefore, setHasUsedAppBefore] = useState(false);
	const [hasAddedResume, setHasAddedResume] = useState(false);
	const onFileUrlChange = (fileUrl: string) => {
		setHasAddedResume(Boolean(fileUrl));
	};

	useEffect(() => {
		setHasUsedAppBefore(getHasUsedAppBefore());
	}, []);

	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
				{/* Header Section */}
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Import Your Resume
					</h1>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Upload your existing resume to get started quickly, or create a new one from scratch
					</p>
				</div>

				{/* Main Content - Two Sections Side by Side */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
					{/* Left Section - hasUsedAppBefore Content */}
					<div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
						{!hasUsedAppBefore ? (
							<div className="space-y-6">
								<div className="text-center">
									<h2 className="text-2xl font-semibold text-gray-900 mb-4">
										Start Fresh
									</h2>
									<p className="text-gray-600">
										Create your first resume with our easy-to-use builder
									</p>
								</div>
								<SectionWithHeadingAndCreateButton
									heading="Don't have a resume yet?"
									buttonText="Create from scratch"
									description="Start fresh with our easy-to-use resume builder"
								/>
							</div>
						) : (
							<div className="space-y-6">
								<div className="text-center">
									<h2 className="text-2xl font-semibold text-gray-900 mb-4">
										Continue Your Progress
									</h2>
									<p className="text-gray-600">
										Pick up where you left off with your saved data
									</p>
								</div>
								<SectionWithHeadingAndCreateButton
									heading="You have data saved in browser from prior session"
									buttonText="Continue where I left off"
									description="Pick up right where you left off with your saved progress"
								/>
							</div>
						)}
					</div>

					{/* Right Section - ResumeDropzone */}
					<div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
						<div className="text-center mb-6">
							<h2 className="text-2xl font-semibold text-gray-900 mb-4">
								{hasUsedAppBefore ? "Override with New Resume" : "Import Existing Resume"}
							</h2>
							<p className="text-gray-600">
								{hasUsedAppBefore
									? "Upload a new resume to replace your existing data"
									: "Upload your resume in PDF, DOCX, or TXT format"
								}
							</p>
						</div>
						<div className="relative">
							<ResumeDropzone
								onFileUrlChange={onFileUrlChange}
								className="mt-5"
							/>
						</div>
					</div>
				</div>

				{/* Features Section */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
					{/* Help Card */}
					<div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 shadow-xl p-8">
						<div className="flex items-center space-x-4 mb-6">
							<div className="flex-shrink-0">
								<Image
									src="/images/logo.png"
									alt="JotCV Logo"
									width={48}
									height={48}
									className="rounded-lg"
								/>
							</div>
							<div>
								<h3 className="text-xl font-semibold text-gray-900">Need Help?</h3>
								<p className="text-sm text-gray-600">Our AI assistant is here 24/7</p>
							</div>
						</div>
						<p className="text-gray-600 mb-6">
							Our AI-powered system will help you create a professional resume in minutes.
						</p>
						<Link
							href="/help-center"
							className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
						>
							Get Help Now
							<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
							</svg>
						</Link>
					</div>

					{/* Templates Card */}
					<div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100 shadow-xl p-8">
						<h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Templates</h3>
						<p className="text-gray-600 mb-6">
							Choose from our collection of ATS-friendly resume templates designed by experts.
						</p>
						<div className="grid grid-cols-2 gap-4 mb-6">
							<Image
								src="/images/demo-1.png"
								alt="Template 1"
								width={120}
								height={160}
								className="rounded-lg shadow-md"
							/>
							<Image
								src="/images/demo-2.png"
								alt="Template 2"
								width={120}
								height={160}
								className="rounded-lg shadow-md"
							/>
						</div>
						<Link
							href="/templates"
							className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
						>
							View Templates
							<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
							</svg>
						</Link>
					</div>

					{/* Success Stories Card */}
					<div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl border border-green-100 shadow-xl p-8">
						<h3 className="text-xl font-semibold text-gray-900 mb-4">Success Stories</h3>
						<p className="text-gray-600 mb-6">
							Join thousands of professionals who landed their dream jobs with JotCV.
						</p>
						<div className="space-y-4">
							<div className="flex items-center space-x-3">
								<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
									<span className="text-green-600 font-semibold">JD</span>
								</div>
								<div>
									<p className="font-medium text-gray-900">John Doe</p>
									<p className="text-sm text-gray-600">Software Engineer at Google</p>
								</div>
							</div>
							<div className="flex items-center space-x-3">
								<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
									<span className="text-green-600 font-semibold">AS</span>
								</div>
								<div>
									<p className="font-medium text-gray-900">Alice Smith</p>
									<p className="text-sm text-gray-600">Product Manager at Amazon</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Additional Content Sections */}
				<div className="space-y-12">
					{/* How It Works Section */}
					<div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">How It Works</h2>
						<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
							<div className="text-center">
								<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl font-bold text-blue-600">1</span>
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-2">Upload</h3>
								<p className="text-gray-600">Upload your existing resume in any format</p>
							</div>
							<div className="text-center">
								<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl font-bold text-blue-600">2</span>
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-2">Parse</h3>
								<p className="text-gray-600">Our AI extracts and organizes your information</p>
							</div>
							<div className="text-center">
								<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl font-bold text-blue-600">3</span>
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-2">Edit</h3>
								<p className="text-gray-600">Review and customize your content</p>
							</div>
							<div className="text-center">
								<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl font-bold text-blue-600">4</span>
								</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-2">Download</h3>
								<p className="text-gray-600">Get your professional resume in multiple formats</p>
							</div>
						</div>
					</div>

					{/* Supported Formats Section */}
					<div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 shadow-xl p-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Supported Formats</h2>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
							<div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
								<div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
									<span className="text-red-600 font-bold">PDF</span>
								</div>
								<span className="font-medium text-gray-900">PDF Files</span>
							</div>
							<div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
								<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
									<span className="text-blue-600 font-bold">DOC</span>
								</div>
								<span className="font-medium text-gray-900">Word Documents</span>
							</div>
							<div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
								<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
									<span className="text-green-600 font-bold">TXT</span>
								</div>
								<span className="font-medium text-gray-900">Text Files</span>
							</div>
							<div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
								<div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
									<span className="text-purple-600 font-bold">RTF</span>
								</div>
								<span className="font-medium text-gray-900">Rich Text</span>
							</div>
						</div>
					</div>

					{/* FAQ Section */}
					<div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
						<h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="p-6 bg-gray-50 rounded-xl">
								<h3 className="text-lg font-semibold text-gray-900 mb-2">Is my data secure?</h3>
								<p className="text-gray-600">Yes, we use industry-standard encryption and never share your data with third parties.</p>
							</div>
							<div className="p-6 bg-gray-50 rounded-xl">
								<h3 className="text-lg font-semibold text-gray-900 mb-2">Can I edit my resume after importing?</h3>
								<p className="text-gray-600">Absolutely! You can edit any section of your resume after importing.</p>
							</div>
							<div className="p-6 bg-gray-50 rounded-xl">
								<h3 className="text-lg font-semibold text-gray-900 mb-2">What if the import isn't perfect?</h3>
								<p className="text-gray-600">Our AI does its best, but you can always manually adjust any imported content.</p>
							</div>
							<div className="p-6 bg-gray-50 rounded-xl">
								<h3 className="text-lg font-semibold text-gray-900 mb-2">Is this service really free?</h3>
								<p className="text-gray-600">Yes, all basic features are completely free to use with no hidden charges.</p>
							</div>
						</div>
					</div>

					{/* Call to Action Section */}
					<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-center">
						<h2 className="text-2xl font-semibold text-white mb-4">Ready to Create Your Professional Resume?</h2>
						<p className="text-blue-100 mb-8 max-w-2xl mx-auto">
							Join thousands of professionals who have already created their perfect resume with JotCV
						</p>
						<Link
							href="/resume-builder"
							className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-blue-600 transition-colors duration-200"
						>
							Get Started Now
							<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
							</svg>
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}

const SectionWithHeadingAndCreateButton = ({
	heading,
	buttonText,
	description,
}: {
	heading: string;
	buttonText: string;
	description?: string;
}) => {
	return (
		<div className="text-center">
			<h3 className="text-xl font-semibold text-gray-900 mb-2">{heading}</h3>
			{description && (
				<p className="text-gray-600 mb-6">{description}</p>
			)}
			<Link
				href="/resume-builder"
				className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
			>
				{buttonText}
			</Link>
		</div>
	);
};
