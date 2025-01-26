import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Shield, Lock, Mail, User, Database } from 'lucide-react';
import { Button } from '../ui/button';

export function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Settings</h2>
          <p className="text-gray-400 mt-1">Manage your account and security preferences</p>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="grid grid-cols-1 gap-6">
        {/* Profile Settings */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10"
        >
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <User className="h-5 w-5 text-purple-400" />
            Profile Settings
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-purple-900/10 border border-purple-800/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-purple-900/10 border border-purple-800/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="john@example.com"
              />
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Update Profile
            </Button>
          </div>
        </motion.section>

        {/* Security Settings */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10"
        >
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Lock className="h-5 w-5 text-purple-400" />
            Security Settings
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Current Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-purple-900/10 border border-purple-800/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">New Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-purple-900/10 border border-purple-800/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="••••••••"
              />
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Change Password
            </Button>
          </div>
        </motion.section>

        {/* Notification Settings */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10"
        >
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Bell className="h-5 w-5 text-purple-400" />
            Notification Preferences
          </h3>
          <div className="space-y-4">
            {[
              {
                title: 'Security Alerts',
                description: 'Get notified about important security events',
                icon: Shield,
              },
              {
                title: 'AI Activity Updates',
                description: 'Receive updates about AI tool usage',
                icon: Database,
              },
              {
                title: 'Email Notifications',
                description: 'Receive email notifications',
                icon: Mail,
              },
            ].map((setting) => (
              <div key={setting.title} className="flex items-center justify-between p-4 rounded-lg bg-purple-900/5 border border-purple-800/10">
                <div className="flex items-center gap-3">
                  <setting.icon className="h-5 w-5 text-purple-400" />
                  <div>
                    <h4 className="text-white font-medium">{setting.title}</h4>
                    <p className="text-sm text-gray-400">{setting.description}</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-purple-900/20 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}