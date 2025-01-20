import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold">Trendonda</h2>
            <p className="text-sm">Trendleri yakalayın, her zaman gündemden haberdar olun.</p>
          </div>

          <div className="flex space-x-4">
            <Link href="/about" className="text-sm hover:underline">
              Hakkımızda
            </Link>
            <Link href="/contact" className="text-sm hover:underline">
              İletişim
            </Link>
            <Link href="/privacy" className="text-sm hover:underline">
              Gizlilik Politikası
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Trendonda. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" className="hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.729 0-1.325.596-1.325 1.325v21.351c0 .729.596 1.325 1.325 1.325h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.785 4.655-4.785 1.325 0 2.464.099 2.794.143v3.24h-1.917c-1.504 0-1.795.715-1.795 1.763v2.31h3.588l-.467 3.622h-3.121v9.294h6.116c.729 0 1.325-.596 1.325-1.325v-21.35c0-.729-.596-1.325-1.325-1.325z" />
              </svg>
            </Link>
            <Link href="https://twitter.com" className="hover:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.916 9.916 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.184 4.92 4.92 0 0 0-8.384 4.482 13.963 13.963 0 0 1-10.141-5.148 4.822 4.822 0 0 0 1.524 6.574 4.9 4.9 0 0 1-2.228-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.935 4.935 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.102c-.396 0-.788-.023-1.177-.068a13.945 13.945 0 0 0 7.557 2.213c9.057 0 14.01-7.514 14.01-14.01 0-.213-.005-.426-.014-.637a10.025 10.025 0 0 0 2.457-2.548z" />
              </svg>
            </Link>
            <Link href="https://instagram.com" className="hover:text-pink-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5a5.75 5.75 0 0 1 5.75 5.75v8.5a5.75 5.75 0 0 1-5.75 5.75h-8.5a5.75 5.75 0 0 1-5.75-5.75v-8.5A5.75 5.75 0 0 1 7.75 2zm8.5 1.5h-8.5a4.25 4.25 0 0 0-4.25 4.25v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25zm-4.25 3.75a4.5 4.5 0 1 1-4.5 4.5 4.5 4.5 0 0 1 4.5-4.5zm0 1.5a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm5.5-.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
