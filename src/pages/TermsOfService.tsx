import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Shield, FileText, AlertCircle, Users } from 'lucide-react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export function TermsOfService() {
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
                  <Scale className="h-8 w-8 text-purple-400" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
              <p className="text-gray-400">Last updated: March 15, 2024</p>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-purple-400" />
                    Agreement to Terms
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    By accessing or using Ultron Eye's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-400" />
                    User Responsibilities
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-300">You are responsible for:</p>
                    <ul className="list-disc pl-6 text-gray-300 space-y-2">
                      <li>Maintaining the security of your account credentials</li>
                      <li>All activities that occur under your account</li>
                      <li>Ensuring the accuracy of your account information</li>
                      <li>Compliance with all applicable laws and regulations</li>
                      <li>Proper use of the AI security features</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-400" />
                    Service License
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    Ultron Eye grants you a limited, non-exclusive, non-transferable license to use our services for your organization's internal business purposes, subject to these terms and any separate agreement you may have with us.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
                  <p className="text-gray-300 leading-relaxed">
                    The service and its original content, features, and functionality are owned by Ultron Eye and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Payment Terms</h2>
                  <ul className="space-y-4 text-gray-300">
                    <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                    <li>All fees are non-refundable unless required by law</li>
                    <li>You are responsible for all applicable taxes</li>
                    <li>Price changes will be notified at least 30 days in advance</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4">Termination</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the service will immediately cease.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-purple-400" />
                    Limitation of Liability
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    In no event shall Ultron Eye be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                  </p>
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