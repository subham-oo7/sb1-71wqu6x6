import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, Shield, Settings, AlertCircle } from 'lucide-react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export function CookiePolicy() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-3 rounded-lg bg-purple-900/20">
                  <Cookie className="h-8 w-8 text-purple-400" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
              <p className="text-gray-400">Last updated: March 15, 2024</p>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-purple-400" />
                    What Are Cookies
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide useful information to website owners.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Settings className="h-5 w-5 text-purple-400" />
                    How We Use Cookies
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">Essential Cookies</h3>
                      <p className="text-gray-300">Required for the operation of our website, including:</p>
                      <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-2">
                        <li>Authentication and security</li>
                        <li>Session management</li>
                        <li>Load balancing</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">Analytics Cookies</h3>
                      <p className="text-gray-300">Help us understand how visitors interact with our website:</p>
                      <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-2">
                        <li>Page usage statistics</li>
                        <li>User journey analysis</li>
                        <li>Performance monitoring</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">Functionality Cookies</h3>
                      <p className="text-gray-300">Remember your preferences and settings:</p>
                      <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-2">
                        <li>Language preferences</li>
                        <li>Dashboard customization</li>
                        <li>User interface settings</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Cookie Management</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You can control and manage cookies in various ways:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Browser settings to refuse all or some cookies</li>
                    <li>Delete cookies after each session</li>
                    <li>Private browsing modes</li>
                    <li>Third-party tools for cookie management</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    Please note that blocking some types of cookies may impact your experience on our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-purple-400" />
                    Changes to This Policy
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                  <p className="text-gray-300 leading-relaxed">
                    If you have questions about our Cookie Policy, please contact us at:
                  </p>
                  <div className="mt-4 p-4 rounded-lg bg-purple-900/10 border border-purple-800/20">
                    <p className="text-white">Email: privacy@ultron-eye.com</p>
                    <p className="text-white">Address: 123 Security Street, Tech City, TC 12345</p>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}