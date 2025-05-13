import React from 'react';
import { SocialLinks } from '../components/SocialLinks';

export default function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
            <p className="text-gray-600 text-center mb-12">
                Have questions? We're here to help. Reach out to us through any of the following channels.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {/* Contact Information */}
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-medium mb-2">Location</h3>
                            <p className="text-gray-600">
                                Mumbai, Maharashtra, India
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-2">Email</h3>
                            <a href="mailto:contact@jotcv.com" className="text-blue-600 hover:underline">
                                contact@jotcv.com
                            </a>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium mb-2">Support Hours</h3>
                            <p className="text-gray-600">
                                Monday - Friday: 9:00 AM - 6:00 PM IST
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
                <p className="text-gray-600 mb-6">
                    Follow us on social media for updates and community engagement
                </p>
                <SocialLinks iconSize="w-8 h-8" showLabels={true} />
            </div>
        </div>
    );
} 