import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Monitor, AlertCircle, FileText, Lock } from 'lucide-react';

export function WorkflowSection() {
  const steps = [
    {
      icon: Monitor,
      title: 'Agent Installation',
      description: 'Lightweight agent deployed on engineer workstations'
    },
    {
      icon: Shield,
      title: 'AI Monitoring',
      description: 'Continuous scanning for unauthorized AI tools'
    },
    {
      icon: AlertCircle,
      title: 'Risk Detection',
      description: 'Instant alerts on potential security threats'
    },
    {
      icon: FileText,
      title: 'Reporting',
      description: 'Detailed analytics and compliance reports'
    },
    {
      icon: Lock,
      title: 'Enforcement',
      description: 'Automated policy enforcement actions'
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">How It Works</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Ultron Eye — Keeping a watchful eye on your engineers' machines to protect your enterprise
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-900 via-purple-600 to-purple-900 transform -translate-y-1/2 hidden lg:block" />

          {/* Workflow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative flex flex-col items-center"
              >
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-purple-900/50 border-2 border-purple-500 mb-4">
                  <step.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{step.title}</h3>
                <p className="text-gray-400 text-center">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Real-Time Protection',
                description: 'Continuous monitoring and instant threat detection across all workstations'
              },
              {
                title: 'Zero Trust Architecture',
                description: 'Every AI tool interaction is verified and authorized before access'
              },
              {
                title: 'Compliance Ready',
                description: 'Built-in reports and audit trails for regulatory compliance'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10 backdrop-blur-sm"
              >
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}