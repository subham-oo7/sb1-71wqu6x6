import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Bell, BarChart, Zap, Settings } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'AI Risk Prevention',
    description: 'Proactively identify and block unauthorized AI tools before they impact your security.',
  },
  {
    icon: Lock,
    title: 'Regulatory Compliance',
    description: 'Stay compliant with GDPR, HIPAA, and other regulations with automated AI governance.',
  },
  {
    icon: Bell,
    title: 'Intelligent Alerts',
    description: 'Receive contextual notifications about critical AI security threats and policy violations.',
  },
  {
    icon: BarChart,
    title: 'Advanced Analytics',
    description: 'Make data-driven decisions with detailed insights into AI usage and performance.',
  },
  {
    icon: Zap,
    title: 'Rapid Response',
    description: 'Automatically neutralize threats with customizable security playbooks.',
  },
  {
    icon: Settings,
    title: 'Policy Management',
    description: 'Create and enforce granular AI policies aligned with your security requirements.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            Enterprise-Grade AI Security
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-400"
          >
            Comprehensive protection for your organization's AI infrastructure
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border border-purple-800/20 bg-purple-900/10 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4">
                <feature.icon className="h-6 w-6 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="mt-4 text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}