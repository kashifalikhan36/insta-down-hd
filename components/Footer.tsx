import Link from 'next/link';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center">
              <Instagram className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">InstaSave</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Download Instagram content easily and securely.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-pink-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-pink-500">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Support
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-pink-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-pink-500">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Download
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/app" className="text-gray-600 hover:text-pink-500">
                  Mobile App
                </Link>
              </li>
              <li>
                <Link href="/extension" className="text-gray-600 hover:text-pink-500">
                  Browser Extension
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} InstaSave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}