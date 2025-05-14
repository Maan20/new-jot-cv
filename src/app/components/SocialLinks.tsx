import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface SocialLinksProps {
    className?: string;
    iconSize?: string;
    showLabels?: boolean;
}

export const SocialLinks = ({ className = '', iconSize = 'w-6 h-6 text-success', showLabels = false }: SocialLinksProps) => {
    return (
        <div className={`flex items-center justify-center space-x-4 ${className}`}>
            <a
                href="https://www.facebook.com/jotcv/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2"
            >
                <FaFacebook className={iconSize} aria-hidden="true" />
                {showLabels && <span className="text-sm">Facebook</span>}
            </a>
            <a
                href="https://www.instagram.com/jotcv.india/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2"
            >
                <FaInstagram className={iconSize} aria-hidden="true" />
                {showLabels && <span className="text-sm">Instagram</span>}
            </a>
            <a
                href="https://www.linkedin.com/company/jotcv/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2"
            >
                <FaLinkedin className={iconSize} aria-hidden="true" />
                {showLabels && <span className="text-sm">LinkedIn</span>}
            </a>
        </div>
    );
};