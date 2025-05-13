import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://jotcv.com';

    // Define your routes
    const routes = [
        '',
        '/resume-builder',
        '/templates',
        '/pricing',
        '/about',
        '/contact',
        '/blog',
        '/faq',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Add dynamic routes for templates
    const templateRoutes = Array.from({ length: 10 }, (_, i) => ({
        url: `${baseUrl}/templates/${i + 1}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...routes, ...templateRoutes];
} 