import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section id="cta" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-black" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Protect Your AI Investment Today
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Join leading enterprises in securing their AI infrastructure with our enterprise-grade solution
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex justify-center gap-x-4"
          >
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-purple-700 text-purple-400">
              Talk to Sales
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}