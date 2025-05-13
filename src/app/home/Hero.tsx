import Link from "next/link";
import { FlexboxSpacer } from "components/FlexboxSpacer";
import { AutoTypingResume } from "home/AutoTypingResume";

export const Hero = () => {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="lg:flex lg:h-[825px] lg:justify-center bg-gradient-to-b from-white to-blue-50">
				<FlexboxSpacer maxWidth={75} minWidth={0} className="hidden lg:block" />
				<div className="mx-auto max-w-xl pt-8 text-center lg:mx-0 lg:grow lg:pt-32 lg:text-left">
					<h1 className="text-primary pb-2 text-4xl font-bold lg:text-5xl animate-fade-in">
						Create a professional
						<br />
						resume easily
					</h1>
					<p className="mt-3 text-lg lg:mt-5 lg:text-xl text-gray-600">
						With this free, open-source, and powerful resume builder
					</p>
					<div className="mt-6 lg:mt-14 flex flex-col sm:flex-row gap-4">
						<Link href="/resume-import" className="btn-primary">
							Create Resume <span aria-hidden="true">→</span>
						</Link>
						<Link href="/templates" className="btn-secondary">
							View Templates
						</Link>
					</div>
					<p className="mt-3 text-sm text-gray-600">No sign up required</p>
				</div>
				<FlexboxSpacer maxWidth={100} minWidth={50} className="hidden lg:block" />
				<div className="mt-6 flex justify-center lg:mt-4 lg:block lg:grow">
					<AutoTypingResume />
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12">Why Choose JotCV?</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="card p-6">
							<div className="text-blue-600 mb-4">
								<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
							<p className="text-gray-600">Create your resume in minutes with our intuitive interface</p>
						</div>
						<div className="card p-6">
							<div className="text-blue-600 mb-4">
								<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-2">ATS Friendly</h3>
							<p className="text-gray-600">Optimized for Applicant Tracking Systems</p>
						</div>
						<div className="card p-6">
							<div className="text-blue-600 mb-4">
								<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-2">Professional Templates</h3>
							<p className="text-gray-600">Choose from a variety of industry-specific templates</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-blue-50">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold mb-6">Ready to Create Your Resume?</h2>
					<p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
						Join thousands of job seekers who have successfully created professional resumes with JotCV
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link href="/resume-import" className="btn-primary">
							Get Started Now
						</Link>
						<Link href="/resume-parser" className="btn-secondary">
							Test Your Resume
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};
