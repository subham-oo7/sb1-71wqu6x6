import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export function PrivacyPolicy() {
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
                  <Lock className="h-8 w-8 text-purple-400" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
              <p className="text-gray-400">Last updated: March 15, 2024</p>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-purple-400" />
                    Introduction
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Ultron Eye ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI security and management platform.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Eye className="h-5 w-5 text-purple-400" />
                    Information We Collect
                  </h2>
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-white">Personal Information</h3>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2">
                      <li>Name and contact information</li>
                      <li>Company information</li>
                      <li>Login credentials</li>
                      <li>Payment information</li>
                      <li>Usage data and preferences</li>
                    </ul>

                    <h3 className="text-xl font-medium text-white">Technical Information</h3>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2">
                      <li>Device and browser information</li>
                      <li>IP addresses</li>
                      <li>System logs and usage patterns</li>
                      <li>AI tool detection data</li>
                      <li>Security event information</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-400" />
                    How We Use Your Information
                  </h2>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <div className="p-1 rounded bg-purple-900/20 mt-1">
                        <Shield className="h-4 w-4 text-purple-400" />
                      </div>
                      <p>To provide and maintain our AI security services</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-1 rounded bg-purple-900/20 mt-1">
                        <Shield className="h-4 w-4 text-purple-400" />
                      </div>
                      <p>To detect and prevent unauthorized AI tool usage</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-1 rounded bg-purple-900/20 mt-1">
                        <Shield className="h-4 w-4 text-purple-400" />
                      </div>
                      <p>To analyze usage patterns and improve our services</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-1 rounded bg-purple-900/20 mt-1">
                        <Shield className="h-4 w-4 text-purple-400" />
                      </div>
                      <p>To communicate with you about your account and updates</p>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We implement appropriate technical and organizational measures to maintain the security of your information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Object to processing of your information</li>
                    <li>Request data portability</li>
                    <li>Withdraw consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                  <p className="text-gray-300 leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at:
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