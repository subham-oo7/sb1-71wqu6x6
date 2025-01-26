import React from 'react';
import { AlertTriangle, Shield, Lock, Eye, Database, FileWarning, Network, Workflow, Code, Key, Bot, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function ShadowAISection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-purple-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">The Shadow AI Crisis</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Unauthorized AI tools in the workplace pose a critical security threat to your organization's sensitive data. 
            Learn how Ultron Eye's advanced monitoring prevents data breaches from shadow AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Database,
              title: 'Code Exposure',
              stats: '82%',
              description: 'of developers admit to copying proprietary code into AI tools'
            },
            {
              icon: FileWarning,
              title: 'Shadow AI Risk',
              stats: '71%',
              description: 'use unauthorized AI plugins & extensions in development'
            },
            {
              icon: Network,
              title: 'Data Leakage',
              stats: '94%',
              description: 'of organizations lack visibility into AI tool usage'
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10 backdrop-blur-sm"
            >
              <stat.icon className="h-8 w-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{stat.title}</h3>
              <p className="text-3xl font-bold text-purple-400 mb-2">{stat.stats}</p>
              <p className="text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Shadow AI Threats</h3>
            <p className="text-gray-300 leading-relaxed">
              Engineers increasingly use unauthorized AI tools to boost productivity, unknowingly exposing sensitive data. 
              These tools can index and collect your organization's intellectual property through prompts and codebase scanning.
            </p>
            
            <div className="mt-8 grid grid-cols-1 gap-4">
              {[
                {
                  icon: Code,
                  title: 'IDE Plugins & Extensions',
                  description: 'Unauthorized AI coding assistants that scan and upload your codebase'
                },
                {
                  icon: Key,
                  title: 'Credential Exposure',
                  description: 'API keys, secrets, and credentials accidentally shared with AI tools'
                },
                {
                  icon: Bot,
                  title: 'Remote LLM Usage',
                  description: 'Employees using unauthorized AI models that process sensitive data'
                },
                {
                  icon: AlertCircle,
                  title: 'Data Indexing',
                  description: 'AI tools collecting and indexing proprietary code and documentation'
                }
              ].map((risk) => (
                <div key={risk.title} className="flex items-start gap-4 p-4 rounded-lg bg-purple-900/10 border border-purple-900/20">
                  <risk.icon className="h-6 w-6 text-purple-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">{risk.title}</h4>
                    <p className="text-gray-400">{risk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Ultron Eye Protection</h3>
            <p className="text-gray-300 leading-relaxed">
              Our agent actively monitors workstations to detect and prevent unauthorized AI tool usage, 
              protecting your intellectual property and ensuring compliance.
            </p>

            <div className="mt-8 space-y-6">
              {[
                {
                  title: 'Real-time AI Tool Detection',
                  description: 'Instantly identify unauthorized AI plugins, extensions, and applications'
                },
                {
                  title: 'Process Monitoring',
                  description: 'Track and control processes attempting to access sensitive files'
                },
                {
                  title: 'Network Traffic Analysis',
                  description: 'Monitor data transfers to unauthorized AI services and endpoints'
                },
                {
                  title: 'Automated Prevention',
                  description: 'Block unauthorized AI tools from accessing sensitive resources'
                },
                {
                  title: 'Policy Enforcement',
                  description: 'Enforce organization-wide AI usage policies automatically'
                },
                {
                  title: 'Usage Analytics',
                  description: 'Gain insights into AI tool usage patterns across your organization'
                }
              ].map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <Eye className="h-5 w-5 text-purple-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">{feature.title}</h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}