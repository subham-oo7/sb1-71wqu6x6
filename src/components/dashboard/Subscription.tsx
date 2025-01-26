import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Shield, Zap, Building, Check, ArrowRight, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '../ui/button';

export function Subscription() {
  // Mock current subscription data
  const currentPlan = {
    name: 'Professional',
    usersCount: 25,
    pricePerUser: 9,
    billingCycle: 'monthly',
    nextBilling: '2024-04-15',
    status: 'active'
  };

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 9,
      annualPrice: 7,
      icon: Shield,
      description: 'Perfect for small teams getting started with AI security',
      minUsers: 5,
      features: [
        'All core security features',
        'Basic AI tool detection',
        'Email alerts',
        'Weekly reports',
        '8/5 support',
        'Up to 25 workstations'
      ],
      recommended: false
    },
    {
      name: 'Professional',
      monthlyPrice: 15,
      annualPrice: 12,
      icon: Zap,
      description: 'Advanced protection for growing organizations',
      minUsers: 10,
      features: [
        'Everything in Starter, plus:',
        'Advanced AI detection & prevention',
        'Real-time alerts',
        'Custom policies',
        'Daily reports',
        'API access',
        '24/7 priority support',
        'Up to 100 workstations'
      ],
      recommended: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: null,
      annualPrice: null,
      icon: Building,
      description: 'Tailored solutions for large enterprises',
      minUsers: 50,
      features: [
        'Everything in Professional, plus:',
        'Custom AI detection rules',
        'Advanced threat analytics',
        'SIEM integration',
        'Custom reporting',
        'Dedicated account manager',
        'SLA guarantee',
        'Unlimited workstations',
        'On-premise deployment option'
      ],
      recommended: false
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Subscription</h2>
          <p className="text-gray-400 mt-1">Manage your subscription and billing</p>
        </div>
      </div>

      {/* Current Plan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-purple-900/20">
              <Zap className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{currentPlan.name} Plan</h3>
              <p className="text-gray-400">
                {currentPlan.usersCount} users × ${currentPlan.pricePerUser}/user/month = 
                ${currentPlan.usersCount * currentPlan.pricePerUser}/month
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-gray-400">Next billing: {currentPlan.nextBilling}</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
                <span className="text-sm text-green-400 capitalize">{currentPlan.status}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Billing Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10"
      >
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-purple-400" />
          Payment Method
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-8" />
            </div>
            <div>
              <p className="text-white">•••• •••• •••• 4242</p>
              <p className="text-sm text-gray-400">Expires 12/24</p>
            </div>
          </div>
          <Button variant="outline" className="border-purple-700 text-purple-400">
            Update
          </Button>
        </div>
      </motion.div>

      {/* Available Plans */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-white mb-6">Available Plans</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`relative rounded-2xl border ${
                plan.recommended
                  ? 'border-purple-400 bg-purple-900/10'
                  : 'border-purple-800/20 bg-purple-900/5'
              } p-6`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-purple-700 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <plan.icon className="h-10 w-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
              <div className="mb-4">
                {plan.monthlyPrice ? (
                  <div className="space-y-2">
                    <div>
                      <span className="text-3xl font-bold text-white">${plan.monthlyPrice}</span>
                      <span className="text-gray-400">/user/month</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-2xl font-bold text-white">${plan.annualPrice}</span>
                      <span className="text-gray-400">/user/month billed annually</span>
                    </div>
                    <div className="text-sm text-purple-400">
                      Save {Math.round(((plan.monthlyPrice - plan.annualPrice) / plan.monthlyPrice) * 100)}% with annual billing
                    </div>
                  </div>
                ) : (
                  <span className="text-2xl font-bold text-white">Custom Pricing</span>
                )}
              </div>
              <p className="text-gray-400 mb-2">{plan.description}</p>
              <p className="text-sm text-gray-500 mb-6">Minimum {plan.minUsers} users</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-300">
                    <Check className="h-5 w-5 text-purple-400 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.recommended
                    ? 'bg-purple-600/50 cursor-default'
                    : 'bg-purple-600 hover:bg-purple-700'
                }`}
                disabled={plan.recommended}
              >
                {plan.recommended ? (
                  'Current Plan'
                ) : (
                  <>
                    {plan.monthlyPrice ? 'Upgrade' : 'Contact Sales'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cancel Subscription */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 p-6 rounded-2xl border border-red-800/20 bg-red-900/5"
      >
        <div className="flex items-start gap-4">
          <AlertTriangle className="h-6 w-6 text-red-400 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-white">Cancel Subscription</h3>
            <p className="text-gray-400 mt-1">
              Canceling your subscription will disable all premium features at the end of your billing period.
              Your data will be retained for 30 days after cancellation.
            </p>
            <Button variant="outline" className="mt-4 border-red-700 text-red-400 hover:bg-red-900/20">
              Cancel Subscription
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}