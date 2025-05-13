import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
    metadataBase: new URL('https://jotcv.com'),
    title: {
        default: 'JotCV - Professional Resume Builder | Create ATS-Friendly Resumes',
        template: '%s | JotCV',
    },
    description: 'Create professional, ATS-friendly resumes with JotCV. Free resume builder with modern templates, real-time preview, and expert tips. Start building your career today!',
    keywords: [
        'resume builder',
        'CV maker',
        'professional resume',
        'ATS friendly resume',
        'resume templates',
        'job application',
        'career tools',
        'resume writing',
        'job search',
        'career development',
    ],
    authors: [{ name: 'JotCV Team' }],
    creator: 'JotCV',
    publisher: 'JotCV',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://jotcv.com',
        siteName: 'JotCV',
        title: 'JotCV - Professional Resume Builder | Create ATS-Friendly Resumes',
        description: 'Create professional, ATS-friendly resumes with JotCV. Free resume builder with modern templates, real-time preview, and expert tips.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'JotCV - Professional Resume Builder',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'JotCV - Professional Resume Builder',
        description: 'Create professional, ATS-friendly resumes with JotCV. Free resume builder with modern templates, real-time preview, and expert tips.',
        images: ['/twitter-image.jpg'],
        creator: '@jotcv',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-site-verification',
        yandex: 'your-yandex-verification',
        bing: 'your-bing-verification',
    },
};

export const generateStructuredData = (page: string) => {
    const baseData = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'JotCV',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '1250',
        },
    };

    const pageSpecificData = {
        home: {
            '@type': 'WebPage',
            name: 'JotCV - Professional Resume Builder',
            description: 'Create professional, ATS-friendly resumes with JotCV.',
        },
        builder: {
            '@type': 'WebApplication',
            name: 'JotCV Resume Builder',
            description: 'Build your professional resume with our easy-to-use builder.',
        },
        templates: {
            '@type': 'CollectionPage',
            name: 'Resume Templates',
            description: 'Browse our collection of professional resume templates.',
        },
    };

    return {
        ...baseData,
        ...(pageSpecificData[page as keyof typeof pageSpecificData] || {}),
    };
}; 