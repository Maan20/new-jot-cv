"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TopNavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            JotCV
          </Link>
          <div className="flex space-x-6">
            <Link
              href="/resume-builder"
              className={`text-gray-600 hover:text-gray-900 ${pathname === '/resume-builder' ? 'font-medium text-blue-600' : ''
                }`}
            >
              Resume Builder
            </Link>
            <Link
              href="/resume-import"
              className={`text-gray-600 hover:text-gray-900 ${pathname === '/resume-import' ? 'font-medium text-blue-600' : ''
                }`}
            >
              Import Resume
            </Link>
            <Link
              href="/templates"
              className={`text-gray-600 hover:text-gray-900 ${pathname === '/templates' ? 'font-medium text-blue-600' : ''
                }`}
            >
              Templates
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
