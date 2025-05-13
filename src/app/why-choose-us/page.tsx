import React from 'react';
import { FaUserFriends, FaRobot, FaList, FaVideo, FaPalette, FaShieldAlt } from 'react-icons/fa';

const features = [
    {
        icon: <FaUserFriends className="w-8 h-8 text-blue-600" />,
        title: "User-Friendly Platform",
        description: "Our intuitive platform makes it easy for users of all skill levels to create professional resumes, even if you have no prior experience."
    },
    {
        icon: <FaRobot className="w-8 h-8 text-blue-600" />,
        title: "AI-Powered Assistance",
        description: "Our AI algorithms provide personalized recommendations and suggestions to enhance your resume's content and appearance."
    },
    {
        icon: <FaList className="w-8 h-8 text-blue-600" />,
        title: "Multiple Resume Sections",
        description: "We offer a wide range of customizable sections, including experiences, projects, languages, and more, ensuring your resume fits your unique profile."
    },
    {
        icon: <FaVideo className="w-8 h-8 text-blue-600" />,
        title: "Video Resumes",
        description: "Stand out from the crowd by creating customizable Video Resumes that showcase your personality and communication skills."
    },
    {
        icon: <FaPalette className="w-8 h-8 text-blue-600" />,
        title: "Unique Templates",
        description: "Explore our vast collection of unique templates, inspired by the creativity of Zety, NovoResume, kickresume, EnhanCv, and more."
    },
    {
        icon: <FaShieldAlt className="w-8 h-8 text-blue-600" />,
        title: "Privacy & Security",
        description: "Your data's security is our utmost priority. We guarantee the protection of your personal information."
    }
];

export default function WhyChooseUsPage() {
    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold text-center mb-12">Why Choose JotCV?</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="mb-4">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                        <p className="text-gray-700">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
} 