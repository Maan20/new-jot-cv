import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface SocialLinksProps {
    className?: string;
    iconSize?: string;
    showLabels?: boolean;
}

export const SocialLinks = ({ className = '', iconSize = 'w-6 h-6 text-success', showLabels = false }: SocialLinksProps) => {
    const socialLinks = [
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/jotcv/',
            icon: <FaFacebook className={iconSize} />,
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/jotcv.india/',
            icon: <FaInstagram className={iconSize} />,
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/company/jotcv/',
            icon: <FaLinkedin className={iconSize} />,
        },
    ];

    return (
        <div className={`flex items-center justify-center space-x-4 ${className}`}>
            {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2"
                >
                    {link.icon}
                    {showLabels && <span className="text-sm">{link.name}</span>}
                </a>
            ))}
        </div>
    );
};