import Link from 'next/link';
import { ExternalLink, Linkedin, Twitter, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IT</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Igor Trunov</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Entrepreneur, founder & CEO of Atlantix, author of &quot;Digital Generation,&quot; 
              and innovator focused on AI, biotechnology, and sustainable technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/igor-trunov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/igor_trunov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@igortrunov.com"
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/auth/signin" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                  AI Chat
                </Link>
              </li>
            </ul>
          </div>

          {/* Atlantix */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Atlantix
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.atlantix.cc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-1"
                >
                  <Globe className="w-4 h-4" />
                  <span>Main Site</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://eqnthtim.manus.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center space-x-1"
                >
                  <Globe className="w-4 h-4" />
                  <span>Innovation Hub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Igor Trunov. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 