import React from 'react';
import { motion } from 'framer-motion';
import { Download, Monitor, Apple, MonitorDown, Terminal, Shield, CheckCircle, Laptop } from 'lucide-react';
import { Button } from '../ui/button';

export function Agent() {
  const operatingSystems = [
    {
      name: 'Windows',
      icon: Laptop,
      version: 'v1.0.2',
      size: '14.2 MB',
      downloadUrl: '#',
      requirements: 'Windows 10 or later',
      instructions: [
        'Download the Ultron Eye Agent installer',
        'Run the installer as administrator',
        'Follow the installation wizard',
        'Enter your organization API key when prompted',
        'Restart your computer to complete installation'
      ]
    },
    {
      name: 'macOS',
      icon: Apple,
      version: 'v1.0.2',
      size: '12.8 MB',
      downloadUrl: '#',
      requirements: 'macOS 11.0 or later',
      instructions: [
        'Download the Ultron Eye Agent .dmg file',
        'Open the .dmg file',
        'Drag Ultron Eye Agent to Applications',
        'Open the agent and enter your organization API key',
        'Grant necessary permissions when prompted'
      ]
    },
    {
      name: 'Linux',
      icon: MonitorDown,
      version: 'v1.0.2',
      size: '11.6 MB',
      downloadUrl: '#',
      requirements: 'Ubuntu 20.04, CentOS 8, or compatible',
      instructions: [
        'Download the .deb or .rpm package',
        'Open terminal and navigate to download location',
        'Run: sudo dpkg -i ultron-eye-agent.deb (for Ubuntu)',
        'Or: sudo rpm -i ultron-eye-agent.rpm (for CentOS)',
        'Run: ultron-eye-setup and enter your API key'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Agent Installation</h2>
          <p className="text-gray-400 mt-1">Download and install the Ultron Eye Agent for your workstations</p>
        </div>
      </div>

      {/* Status Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-lg bg-green-900/20">
            <Shield className="h-6 w-6 text-green-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Agent Status:</span>
              <span className="text-sm font-semibold text-green-400">Active</span>
            </div>
            <p className="text-2xl font-bold text-white">23 Agents Deployed</p>
          </div>
        </div>
      </motion.div>

      {/* Download Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {operatingSystems.map((os) => (
          <motion.div
            key={os.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10"
          >
            <div className="flex items-center gap-3 mb-4">
              <os.icon className="h-8 w-8 text-purple-400" />
              <div>
                <h3 className="text-lg font-semibold text-white">{os.name}</h3>
                <p className="text-sm text-gray-400">{os.version} • {os.size}</p>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-4">
              Requirements: {os.requirements}
            </p>

            <Button className="w-full bg-purple-600 hover:bg-purple-700 mb-6">
              <Download className="h-4 w-4 mr-2" />
              Download Agent
            </Button>

            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Installation Steps:</h4>
              <ul className="space-y-2">
                {os.instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                    <CheckCircle className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>{instruction}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Terminal Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10"
      >
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="h-5 w-5 text-purple-400" />
          <h3 className="text-lg font-semibold text-white">Command Line Installation</h3>
        </div>
        <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
          <p className="text-gray-400"># Install on Ubuntu/Debian</p>
          <p className="text-purple-400">curl -sSL https://get.ultron-eye.com | sudo bash</p>
          <p className="text-gray-400 mt-4"># Install on CentOS/RHEL</p>
          <p className="text-purple-400">wget -qO- https://get.ultron-eye.com | sudo bash</p>
        </div>
      </motion.div>

      {/* System Requirements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10"
      >
        <div className="flex items-center gap-2 mb-4">
          <Monitor className="h-5 w-5 text-purple-400" />
          <h3 className="text-lg font-semibold text-white">System Requirements</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'CPU',
              requirement: 'Dual-core processor or better'
            },
            {
              title: 'Memory',
              requirement: 'Minimum 2GB RAM'
            },
            {
              title: 'Disk Space',
              requirement: 'At least 500MB free space'
            },
            {
              title: 'Network',
              requirement: 'Active internet connection'
            },
            {
              title: 'Permissions',
              requirement: 'Administrator/root access'
            },
            {
              title: 'Additional',
              requirement: 'SSL/TLS 1.2 or later'
            }
          ].map((req) => (
            <div key={req.title} className="p-4 rounded-lg bg-purple-900/5 border border-purple-800/10">
              <h4 className="font-semibold text-white mb-1">{req.title}</h4>
              <p className="text-sm text-gray-400">{req.requirement}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}