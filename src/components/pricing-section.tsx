import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Zap, Building, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your organization's AI security needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative rounded-2xl border border-purple-800/20 bg-purple-900/5 backdrop-blur-sm p-8 group hover:border-purple-700/50 transition-colors duration-300"
          >
            <Shield className="h-10 w-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">$299</span>
              <span className="text-gray-400">/month</span>
            </div>
            <p className="text-gray-400 mb-6">Perfect for small teams getting started with AI security</p>
            <ul className="space-y-3 mb-8">
              {[
                'Up to 25 workstations',
                'Basic AI tool detection',
                'Email alerts',
                'Weekly reports',
                '8/5 support'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-gray-300">
                  <Check className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button 
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Professional Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative rounded-2xl border border-purple-400 bg-purple-900/10 backdrop-blur-sm p-8 shadow-[0_0_40px_rgba(168,85,247,0.15)] group hover:shadow-[0_0_60px_rgba(168,85,247,0.25)] transition-all duration-300"
          >
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-purple-500 to-purple-700 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
                Most Popular
              </span>
            </div>
            <Zap className="h-10 w-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Professional</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-white">$799</span>
              <span className="text-gray-400">/month</span>
            </div>
            <p className="text-gray-400 mb-6">Advanced protection for growing organizations</p>
            <ul className="space-y-3 mb-8">
              {[
                'Up to 100 workstations',
                'Advanced AI detection & prevention',
                'Real-time alerts',
                'Custom policies',
                'Daily reports',
                'API access',
                '24/7 priority support'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-gray-300">
                  <Check className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button 
              className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-400 hover:to-purple-600 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative rounded-2xl border border-purple-800/20 bg-purple-900/5 backdrop-blur-sm p-8 group hover:border-purple-700/50 transition-colors duration-300"
          >
            <Building className="h-10 w-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
            <div className="mb-4">
              <span className="text-2xl font-bold text-white">Custom Pricing</span>
            </div>
            <p className="text-gray-400 mb-6">Tailored solutions for large enterprises</p>
            <ul className="space-y-3 mb-8">
              {[
                'Unlimited workstations',
                'Custom AI detection rules',
                'Advanced threat analytics',
                'SIEM integration',
                'Custom reporting',
                'Dedicated account manager',
                'SLA guarantee',
                'On-premise deployment option'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-gray-300">
                  <Check className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button 
              variant="outline" 
              className="w-full border-purple-700 text-purple-400 hover:bg-purple-900/30 hover:border-purple-500 transition-all duration-300 transform hover:scale-[1.02] group"
            >
              <span>Contact Sales</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400">
            All plans include our core security features. Need a custom plan?{' '}
            <button className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-300">
              Let's talk
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}