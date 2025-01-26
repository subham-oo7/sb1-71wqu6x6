import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Activity, Users } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', value: 12 },
  { name: 'Tue', value: 19 },
  { name: 'Wed', value: 15 },
  { name: 'Thu', value: 25 },
  { name: 'Fri', value: 22 },
  { name: 'Sat', value: 18 },
  { name: 'Sun', value: 20 },
];

export function Overview() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: 'Protected Workstations',
            value: '124',
            icon: Shield,
            color: 'text-green-400',
            bgColor: 'bg-green-900/20',
          },
          {
            title: 'AI Threats Blocked',
            value: '47',
            icon: AlertTriangle,
            color: 'text-red-400',
            bgColor: 'bg-red-900/20',
          },
          {
            title: 'Active Users',
            value: '89',
            icon: Users,
            color: 'text-blue-400',
            bgColor: 'bg-blue-900/20',
          },
          {
            title: 'AI Tools Detected',
            value: '15',
            icon: Activity,
            color: 'text-yellow-400',
            bgColor: 'bg-yellow-900/20',
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">{stat.title}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Activity Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10"
      >
        <h2 className="text-xl font-bold text-white mb-6">AI Activity Overview</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9333EA" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#9333EA" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '0.5rem',
                }}
                labelStyle={{ color: '#F3F4F6' }}
                itemStyle={{ color: '#9333EA' }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#9333EA"
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10"
      >
        <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {[
            {
              title: 'Unauthorized AI Tool Blocked',
              description: 'ChatGPT plugin blocked on workstation DEV-001',
              time: '5 minutes ago',
              icon: AlertTriangle,
              color: 'text-red-400',
            },
            {
              title: 'New Team Member Added',
              description: 'Sarah Johnson joined the Engineering team',
              time: '2 hours ago',
              icon: Users,
              color: 'text-blue-400',
            },
            {
              title: 'Security Policy Updated',
              description: 'AI usage policy updated for Development team',
              time: '1 day ago',
              icon: Shield,
              color: 'text-green-400',
            },
          ].map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-lg bg-purple-900/5 border border-purple-800/10"
            >
              <activity.icon className={`h-5 w-5 ${activity.color} mt-1`} />
              <div>
                <h3 className="font-semibold text-white">{activity.title}</h3>
                <p className="text-sm text-gray-400">{activity.description}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}