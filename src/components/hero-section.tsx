import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Shield, Eye, Bot } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              <span className="block bg-gradient-to-r from-purple-400 via-purple-200 to-purple-500 bg-clip-text text-transparent pb-2">
                Secure Your AI Future
              </span>
              <span className="block bg-gradient-to-r from-purple-500 via-purple-300 to-purple-600 bg-clip-text text-transparent">
                Enterprise AI Security & Governance
              </span>
            </h1>
          </motion.div>

          {/* Rest of the component remains the same */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300"
          >
            Protect your organization from unauthorized AI tools with enterprise-grade security. Gain complete visibility, ensure compliance, and maintain control over your AI infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="border-purple-700 text-purple-400">
              Book Enterprise Demo
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {[
            {
              icon: Shield,
              title: 'Enterprise Security',
              description: '24/7 monitoring with military-grade protection for your AI infrastructure',
            },
            {
              icon: Eye,
              title: 'Total Visibility',
              description: 'Full transparency into AI usage across your entire organization',
            },
            {
              icon: Bot,
              title: 'Intelligent Detection',
              description: 'Advanced ML algorithms detect and classify AI threats in real-time',
            },
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="relative rounded-2xl border border-purple-900/10 bg-purple-900/5 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4">
                <feature.icon className="h-8 w-8 text-purple-400" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="mt-4 text-gray-400">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}