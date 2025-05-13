'use client';

import React, { useState } from 'react';
import { SocialLinks } from '../components/SocialLinks';
import Image from 'next/image';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    author: {
        name: string;
        role: string;
        avatar: string;
    };
}

export default function BlogPage() {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Resume Tips', 'Career Advice', 'Industry News', 'Success Stories'];

    const blogPosts: BlogPost[] = [
        {
            id: 1,
            title: "How to Create an ATS-Friendly Resume That Gets You Hired",
            excerpt: "Learn the secrets to crafting a resume that passes through Applicant Tracking Systems and lands you interviews.",
            content: "In today's competitive job market, having an ATS-friendly resume is crucial. This comprehensive guide will show you how to optimize your resume for automated screening systems while maintaining its human appeal. We'll cover everything from keyword optimization to formatting best practices that will help your resume stand out in the digital age.",
            category: "Resume Tips",
            date: "March 15, 2024",
            readTime: "5 min read",
            image: "/images/demo-1.png",
            author: {
                name: "Sarah Johnson",
                role: "Career Coach",
                avatar: "/images/1.jpg"
            }
        },
        {
            id: 2,
            title: "Video Resumes: The Future of Job Applications",
            excerpt: "Discover how video resumes are revolutionizing the hiring process and how to create one that stands out.",
            content: "Video resumes are becoming increasingly popular in the digital age. Learn how to create an engaging video resume that showcases your personality and skills. We'll explore the best practices for recording, editing, and sharing your video resume to maximize its impact on potential employers.",
            category: "Industry News",
            date: "March 12, 2024",
            readTime: "4 min read",
            image: "/images/demo-2.png",
            author: {
                name: "Michael Chen",
                role: "Tech Recruiter",
                avatar: "/images/2.jpg"
            }
        },
        {
            id: 3,
            title: "10 Resume Mistakes That Are Costing You Interviews",
            excerpt: "Avoid these common resume mistakes that could be preventing you from landing your dream job.",
            content: "Even the most qualified candidates can miss out on opportunities due to common resume mistakes. Here's how to avoid them and ensure your resume makes it past the initial screening. We'll cover everything from formatting errors to content issues that could be holding you back.",
            category: "Resume Tips",
            date: "March 10, 2024",
            readTime: "6 min read",
            image: "/images/demo-3.png",
            author: {
                name: "Emily Rodriguez",
                role: "HR Specialist",
                avatar: "/images/3.jpg"
            }
        },
        {
            id: 4,
            title: "From Rejection to Offer: A Success Story with JotCV",
            excerpt: "How one job seeker transformed their career prospects using JotCV's AI-powered resume builder.",
            content: "Read the inspiring journey of how a job seeker went from multiple rejections to landing their dream job using JotCV's innovative resume builder. Learn the strategies and techniques that helped them succeed in a competitive job market.",
            category: "Success Stories",
            date: "March 8, 2024",
            readTime: "7 min read",
            image: "/images/f1.png",
            author: {
                name: "David Kumar",
                role: "Career Success Coach",
                avatar: "/images/1.jpg"
            }
        },
        {
            id: 5,
            title: "The Power of AI in Resume Writing",
            excerpt: "Explore how artificial intelligence is revolutionizing the way we create and optimize resumes.",
            content: "Artificial intelligence is transforming the resume writing process. Discover how AI tools can help you create more effective resumes, optimize content, and increase your chances of landing interviews.",
            category: "Industry News",
            date: "March 5, 2024",
            readTime: "5 min read",
            image: "/images/f2.png",
            author: {
                name: "Lisa Wang",
                role: "AI Specialist",
                avatar: "/images/2.jpg"
            }
        },
        {
            id: 6,
            title: "How to Highlight Your Skills Without Experience",
            excerpt: "Learn effective strategies to showcase your potential when you're just starting your career.",
            content: "Starting your career journey? Learn how to effectively highlight your skills and potential even without extensive work experience. We'll show you how to leverage your education, projects, and transferable skills.",
            category: "Career Advice",
            date: "March 3, 2024",
            readTime: "4 min read",
            image: "/images/f3.png",
            author: {
                name: "James Wilson",
                role: "Career Counselor",
                avatar: "/images/3.jpg"
            }
        },
        {
            id: 7,
            title: "The Ultimate Guide to Resume Formatting",
            excerpt: "Master the art of resume formatting to create a professional and visually appealing document.",
            content: "Learn the essential elements of professional resume formatting. From choosing the right font to organizing your content effectively, this guide will help you create a resume that looks as good as it reads.",
            category: "Resume Tips",
            date: "March 1, 2024",
            readTime: "6 min read",
            image: "/images/f4.png",
            author: {
                name: "Rachel Green",
                role: "Resume Expert",
                avatar: "/images/1.jpg"
            }
        },
        {
            id: 8,
            title: "How to Write a Compelling Career Summary",
            excerpt: "Learn how to craft a powerful career summary that captures attention in seconds.",
            content: "Your career summary is often the first thing recruiters read. Discover how to write a compelling summary that highlights your unique value proposition and makes employers want to learn more about you.",
            category: "Resume Tips",
            date: "February 28, 2024",
            readTime: "5 min read",
            image: "/images/f5.png",
            author: {
                name: "Tom Anderson",
                role: "Professional Writer",
                avatar: "/images/2.jpg"
            }
        },
        {
            id: 9,
            title: "Industry-Specific Resume Templates That Work",
            excerpt: "Discover the best resume templates for different industries and how to customize them.",
            content: "Different industries have different expectations for resumes. Learn which templates work best for your field and how to customize them to showcase your unique qualifications and experience.",
            category: "Resume Tips",
            date: "February 25, 2024",
            readTime: "7 min read",
            image: "/images/f6.png",
            author: {
                name: "Maria Garcia",
                role: "Design Specialist",
                avatar: "/images/3.jpg"
            }
        },
        {
            id: 10,
            title: "The Rise of Video Interviews: How to Prepare",
            excerpt: "Get ready for the new normal in job interviews with these essential preparation tips.",
            content: "Video interviews are here to stay. Learn how to prepare for virtual interviews, set up your space, and present yourself professionally in the digital environment.",
            category: "Career Advice",
            date: "February 22, 2024",
            readTime: "5 min read",
            image: "/images/d1.png",
            author: {
                name: "Alex Thompson",
                role: "Interview Coach",
                avatar: "/images/1.jpg"
            }
        },
        {
            id: 11,
            title: "How to Quantify Your Achievements on Your Resume",
            excerpt: "Learn how to use numbers and metrics to make your accomplishments stand out.",
            content: "Numbers speak louder than words on a resume. Discover how to quantify your achievements and use metrics to demonstrate your impact in previous roles.",
            category: "Resume Tips",
            date: "February 20, 2024",
            readTime: "6 min read",
            image: "/images/d2.png",
            author: {
                name: "Sophie Lee",
                role: "Career Strategist",
                avatar: "/images/2.jpg"
            }
        },
        {
            id: 12,
            title: "The Future of Job Search: Trends to Watch",
            excerpt: "Stay ahead of the curve with insights into emerging job search trends and technologies.",
            content: "The job search landscape is constantly evolving. Explore the latest trends in recruitment, from AI-powered matching to virtual career fairs, and learn how to adapt your job search strategy.",
            category: "Industry News",
            date: "February 18, 2024",
            readTime: "8 min read",
            image: "/images/d3.png",
            author: {
                name: "Chris Martinez",
                role: "Future of Work Expert",
                avatar: "/images/3.jpg"
            }
        },
        {
            id: 13,
            title: "How to Handle Career Gaps in Your Resume",
            excerpt: "Learn effective strategies to address and explain career gaps professionally.",
            content: "Career gaps are common and don't have to be a disadvantage. Learn how to address gaps in your employment history and turn them into opportunities to showcase your growth and development.",
            category: "Career Advice",
            date: "February 15, 2024",
            readTime: "5 min read",
            image: "/images/custom.png",
            author: {
                name: "Emma Wilson",
                role: "Career Transition Coach",
                avatar: "/images/1.jpg"
            }
        },
        {
            id: 14,
            title: "The Psychology of Resume Reading",
            excerpt: "Understand how recruiters process resumes and how to make yours more effective.",
            content: "Learn about the psychology behind resume screening and how recruiters make decisions. Use this knowledge to create a resume that captures attention and makes a lasting impression.",
            category: "Industry News",
            date: "February 12, 2024",
            readTime: "7 min read",
            image: "/images/price.png",
            author: {
                name: "Dr. Robert Chen",
                role: "Organizational Psychologist",
                avatar: "/images/2.jpg"
            }
        },
        {
            id: 15,
            title: "How to Write a Resume for Career Change",
            excerpt: "Master the art of creating a resume that highlights transferable skills for a career switch.",
            content: "Changing careers? Learn how to create a resume that emphasizes your transferable skills and demonstrates your potential in a new field, even without direct experience.",
            category: "Career Advice",
            date: "February 10, 2024",
            readTime: "6 min read",
            image: "/images/rings.png",
            author: {
                name: "Laura Brown",
                role: "Career Change Specialist",
                avatar: "/images/3.jpg"
            }
        },
        {
            id: 16,
            title: "The Impact of AI on Job Search",
            excerpt: "Explore how artificial intelligence is transforming the job search process.",
            content: "Artificial intelligence is revolutionizing the job search process. Learn how AI tools are changing recruitment, from automated screening to personalized job matching, and how to leverage these technologies in your job search.",
            category: "Industry News",
            date: "February 8, 2024",
            readTime: "5 min read",
            image: "/images/banner2.png",
            author: {
                name: "Daniel Kim",
                role: "AI Researcher",
                avatar: "/images/1.jpg"
            }
        },
        {
            id: 17,
            title: "How to Create a Resume That Tells Your Story",
            excerpt: "Learn how to craft a narrative-driven resume that showcases your unique journey.",
            content: "Your resume should tell your professional story. Discover how to create a narrative that connects your experiences and achievements, making your career journey compelling and memorable to recruiters.",
            category: "Resume Tips",
            date: "February 5, 2024",
            readTime: "6 min read",
            image: "/images/cv.png",
            author: {
                name: "Jessica Taylor",
                role: "Storytelling Expert",
                avatar: "/images/2.jpg"
            }
        },
        {
            id: 18,
            title: "The Role of Soft Skills in Modern Resumes",
            excerpt: "Discover how to effectively highlight your soft skills in your resume.",
            content: "Soft skills are increasingly important in today's workplace. Learn how to identify, develop, and showcase your soft skills on your resume to demonstrate your ability to work effectively with others.",
            category: "Career Advice",
            date: "February 3, 2024",
            readTime: "5 min read",
            image: "/images/company-logo.png",
            author: {
                name: "Mark Johnson",
                role: "Soft Skills Trainer",
                avatar: "/images/3.jpg"
            }
        },
        {
            id: 19,
            title: "How to Optimize Your Resume for Remote Jobs",
            excerpt: "Learn the key elements to include in your resume for remote work opportunities.",
            content: "Remote work requires specific skills and qualities. Discover how to tailor your resume to highlight your ability to work independently, communicate effectively, and manage your time in a remote environment.",
            category: "Career Advice",
            date: "February 1, 2024",
            readTime: "6 min read",
            image: "/images/home-page-1.png",
            author: {
                name: "Anna Smith",
                role: "Remote Work Expert",
                avatar: "/images/1.jpg"
            }
        },
        {
            id: 20,
            title: "The Evolution of Resume Writing",
            excerpt: "Take a journey through the history of resume writing and its future direction.",
            content: "Resume writing has evolved significantly over the years. Explore the history of resumes, from paper documents to digital formats, and learn about emerging trends that are shaping the future of resume writing.",
            category: "Industry News",
            date: "January 30, 2024",
            readTime: "7 min read",
            image: "/images/logo.png",
            author: {
                name: "Dr. William Park",
                role: "Career Historian",
                avatar: "/images/2.jpg"
            }
        }
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="max-w-7xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-center mb-8">JotCV Blog</h1>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Discover the latest insights, tips, and trends in resume writing and career development
            </p>

            {/* Search and Filter */}
            <div className="mb-12">
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                    <div className="w-full md:w-96">
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-md ${selectedCategory === category
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {filteredPosts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => setSelectedPost(post)}
                    >
                        <div className="relative h-48">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                                <span className="text-gray-400">•</span>
                                <span className="text-sm text-gray-500">{post.date}</span>
                                <span className="text-gray-400">•</span>
                                <span className="text-sm text-gray-500">{post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                            <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                            <div className="flex items-center gap-3">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                    <Image
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">{post.author.name}</p>
                                    <p className="text-sm text-gray-500">{post.author.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Social Links */}
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Stay Connected</h2>
                <p className="text-gray-600 mb-6">
                    Follow us on social media for the latest updates and career tips
                </p>
                <SocialLinks iconSize="w-8 h-8" showLabels={true} />
            </div>

            {/* Modal */}
            {selectedPost && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="relative h-64">
                            <Image
                                src={selectedPost.image}
                                alt={selectedPost.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-sm text-blue-600 font-medium">{selectedPost.category}</span>
                                <span className="text-gray-400">•</span>
                                <span className="text-sm text-gray-500">{selectedPost.date}</span>
                                <span className="text-gray-400">•</span>
                                <span className="text-sm text-gray-500">{selectedPost.readTime}</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-4">{selectedPost.title}</h2>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={selectedPost.author.avatar}
                                        alt={selectedPost.author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-medium">{selectedPost.author.name}</p>
                                    <p className="text-gray-500">{selectedPost.author.role}</p>
                                </div>
                            </div>
                            <div className="prose max-w-none">
                                <p>{selectedPost.content}</p>
                            </div>
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}