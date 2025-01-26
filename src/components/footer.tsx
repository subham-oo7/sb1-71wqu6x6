import React from 'react';
import { Github, Twitter, Linkedin, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold text-white">Ultron Eye</span>
            </div>
            <p className="text-sm">
              Enterprise-grade AI security and governance platform for modern organizations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-purple-400 transition-colors">Features</a></li>
              <li><a href="#security" className="hover:text-purple-400 transition-colors">Security</a></li>
              <li><a href="#enterprise" className="hover:text-purple-400 transition-colors">Enterprise</a></li>
              <li><a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#careers" className="hover:text-purple-400 transition-colors">Careers</a></li>
              <li><a href="#blog" className="hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2024 Ultron Eye. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-sm hover:text-purple-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-sm hover:text-purple-400 transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="text-sm hover:text-purple-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}