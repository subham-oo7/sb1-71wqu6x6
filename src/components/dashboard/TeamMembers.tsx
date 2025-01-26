import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, Mail, Shield, Settings } from 'lucide-react';
import { Button } from '../ui/button';

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@company.com',
    role: 'Admin',
    department: 'Engineering',
    status: 'Active',
    lastActive: '2 minutes ago',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@company.com',
    role: 'User',
    department: 'Development',
    status: 'Active',
    lastActive: '5 minutes ago',
  },
  // Add more team members as needed
];

export function TeamMembers() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Team Management</h2>
          <p className="text-gray-400 mt-1">Manage team members and their access levels</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <UserPlus className="h-4 w-4 mr-2" />
          Add Member
        </Button>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-blue-900/20">
              <Users className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Members</p>
              <p className="text-2xl font-bold text-white">24</p>
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
              <p className="text-sm text-gray-400">Active Now</p>
              <p className="text-2xl font-bold text-white">18</p>
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
            <div className="p-3 rounded-lg bg-yellow-900/20">
              <Settings className="h-6 w-6 text-yellow-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Pending Invites</p>
              <p className="text-2xl font-bold text-white">3</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Team Members List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="rounded-lg border border-purple-800/20 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-purple-900/20">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Member</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Last Active</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-800/10">
              {teamMembers.map((member) => (
                <motion.tr
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-purple-900/5"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-purple-900/50 flex items-center justify-center">
                        <span className="text-purple-400 font-semibold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{member.name}</p>
                        <p className="text-gray-400 text-sm">{member.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      member.role === 'Admin' 
                        ? 'bg-purple-900/20 text-purple-400' 
                        : 'bg-blue-900/20 text-blue-400'
                    }`}>
                      {member.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{member.department}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5">
                      <span className={`h-2 w-2 rounded-full ${
                        member.status === 'Active' ? 'bg-green-400' : 'bg-gray-400'
                      }`} />
                      <span className="text-gray-300">{member.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{member.lastActive}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}