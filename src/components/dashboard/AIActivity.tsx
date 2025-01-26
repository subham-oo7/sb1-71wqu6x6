import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Shield, Bot, Search } from 'lucide-react';
import { Button } from '../ui/button';

const aiActivities = [
  {
    id: 1,
    tool: 'ChatGPT Plugin',
    status: 'Blocked',
    user: 'john.doe@company.com',
    workstation: 'DEV-001',
    timestamp: '2024-03-15 14:23:45',
    risk: 'high',
  },
  {
    id: 2,
    tool: 'GitHub Copilot',
    status: 'Allowed',
    user: 'jane.smith@company.com',
    workstation: 'DEV-002',
    timestamp: '2024-03-15 14:20:12',
    risk: 'low',
  },
  // Add more activities as needed
];

export function AIActivity() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">AI Activity Monitor</h2>
          <p className="text-gray-400 mt-1">Track and manage AI tool usage across your organization</p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search activities..."
              className="pl-10 pr-4 py-2 bg-purple-900/10 border border-purple-800/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Export Report
          </Button>
        </div>
      </div>

      {/* Activity List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rounded-lg border border-purple-800/20 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-purple-900/20">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Tool</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Workstation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Timestamp</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Risk Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-800/10">
              {aiActivities.map((activity) => (
                <motion.tr
                  key={activity.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-purple-900/5"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4 text-purple-400" />
                      <span className="text-white">{activity.tool}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      activity.status === 'Blocked' 
                        ? 'bg-red-900/20 text-red-400' 
                        : 'bg-green-900/20 text-green-400'
                    }`}>
                      {activity.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{activity.user}</td>
                  <td className="px-6 py-4 text-gray-300">{activity.workstation}</td>
                  <td className="px-6 py-4 text-gray-300">{activity.timestamp}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      activity.risk === 'high'
                        ? 'bg-red-900/20 text-red-400'
                        : 'bg-yellow-900/20 text-yellow-400'
                    }`}>
                      <AlertTriangle className="h-3 w-3" />
                      {activity.risk.charAt(0).toUpperCase() + activity.risk.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
                      View Details
                    </Button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-red-900/20">
              <AlertTriangle className="h-6 w-6 text-red-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">High Risk Activities</p>
              <p className="text-2xl font-bold text-white">12</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-green-900/20">
              <Shield className="h-6 w-6 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Threats Blocked</p>
              <p className="text-2xl font-bold text-white">47</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-blue-900/20">
              <Bot className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Active AI Tools</p>
              <p className="text-2xl font-bold text-white">8</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}