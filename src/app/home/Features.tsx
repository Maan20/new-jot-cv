import Image from "next/image";
import featureFreeSrc from "public/assets/feature-free.svg";
import featureUSSrc from "public/assets/feature-us.svg";
import featurePrivacySrc from "public/assets/feature-privacy.svg";
import featureOpenSourceSrc from "public/assets/feature-open-source.svg";
import { Link } from "components/documentation";

const FEATURES = [
  {
    src: featureFreeSrc,
    title: "Free Forever",
    text: "JotCV is created with the belief that everyone should have free and easy access to a modern professional resume design",
  },
  {
    src: featureUSSrc,
    title: "U.S. Best Practices",
    text: "JotCV has built-in best practices for the U.S. job market and works well with top ATS platforms such as Greenhouse and Lever",
  },
  {
    src: featurePrivacySrc,
    title: "Privacy Focus",
    text: "JotCV stores data locally in your browser so only you have access to your data and with complete control",
  },
  {
    src: featureOpenSourceSrc,
    title: "Open-Source",
    text: (
      <>
        JotCV is an open-source project, and its source code can be viewed
        by anyone on its{" "}
        <Link href="https://github.com/xitanggg/open-resume">
          GitHub repository
        </Link>
      </>
    ),
  },
];

export const Features = () => {
  const features = [
    {
      title: "Professional Templates",
      description: "Choose from 50+ ATS-friendly templates",
      icon: "📄"
    },
    {
      title: "Smart Suggestions",
      description: "Get AI-powered content suggestions",
      icon: "🤖"
    },
    {
      title: "Multiple Formats",
      description: "Export as PDF, DOCX, or HTML",
      icon: "📤"
    },
    {
      title: "Real-time Preview",
      description: "See changes as you make them",
      icon: "👁️"
    }
  ];

  return (
    <div className="py-20 bg-background-light">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
          Powerful Features to Build Your Perfect Resume
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="card p-6 hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
