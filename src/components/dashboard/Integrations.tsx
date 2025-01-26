import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Webhook, MessageSquare, GitBranch, Trello, Plus, Check, X, 
  Settings, ExternalLink, RefreshCw, Code, AlertTriangle 
} from 'lucide-react';
import { Button } from '../ui/button';

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  status: 'connected' | 'disconnected';
  lastSync?: string;
}

export function Integrations() {
  const [showWebhookModal, setShowWebhookModal] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState('');
  const [webhookSecret, setWebhookSecret] = useState('');

  const integrations: Integration[] = [
    {
      id: 'slack',
      name: 'Slack',
      description: 'Get real-time alerts and notifications in your Slack channels',
      icon: MessageSquare,
      status: 'connected',
      lastSync: '5 minutes ago'
    },
    {
      id: 'github',
      name: 'GitHub',
      description: 'Monitor AI activity in your repositories and code reviews',
      icon: GitBranch,
      status: 'connected',
      lastSync: '2 minutes ago'
    },
    {
      id: 'jira',
      name: 'JIRA',
      description: 'Create and track issues for AI security incidents',
      icon: Trello,
      status: 'disconnected'
    }
  ];

  const webhooks = [
    {
      id: 1,
      url: 'https://api.example.com/webhooks/ai-alerts',
      events: ['ai.detection', 'security.alert'],
      status: 'active',
      lastDelivery: '3 minutes ago'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Integrations</h2>
          <p className="text-gray-400 mt-1">Connect your tools and customize notifications</p>
        </div>
      </div>

      {/* Integration Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {integrations.map((integration) => (
          <motion.div
            key={integration.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-purple-900/20">
                <integration.icon className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{integration.name}</h3>
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${
                    integration.status === 'connected' ? 'bg-green-400' : 'bg-gray-400'
                  }`} />
                  <span className="text-sm text-gray-400 capitalize">{integration.status}</span>
                </div>
              </div>
            </div>

            <p className="text-gray-400 mb-6">{integration.description}</p>

            {integration.status === 'connected' ? (
              <div className="space-y-4">
                {integration.lastSync && (
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <RefreshCw className="h-4 w-4" />
                    Last synced: {integration.lastSync}
                  </div>
                )}
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 border-purple-700 text-purple-400">
                    <Settings className="h-4 w-4 mr-2" />
                    Configure
                  </Button>
                  <Button variant="outline" className="flex-1 border-red-700 text-red-400">
                    <X className="h-4 w-4 mr-2" />
                    Disconnect
                  </Button>
                </div>
              </div>
            ) : (
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                Connect
              </Button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Webhooks Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12"
      >
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <Webhook className="h-5 w-5 text-purple-400" />
              Custom Webhooks
            </h3>
            <p className="text-gray-400 mt-1">Send event notifications to your endpoints</p>
          </div>
          <Button 
            className="bg-purple-600 hover:bg-purple-700"
            onClick={() => setShowWebhookModal(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Webhook
          </Button>
        </div>

        {/* Webhooks List */}
        <div className="rounded-lg border border-purple-800/20 overflow-hidden">
          <table className="w-full">
            <thead className="bg-purple-900/20">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Endpoint</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Events</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Last Delivery</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-800/10">
              {webhooks.map((webhook) => (
                <tr key={webhook.id} className="bg-purple-900/5">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-purple-400" />
                      <span className="text-white font-mono text-sm">{webhook.url}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {webhook.events.map((event) => (
                        <span
                          key={event}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-purple-900/20 text-purple-400"
                        >
                          {event}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                      <span className="text-gray-300">Active</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{webhook.lastDelivery}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-purple-400">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-purple-400">
                        <Settings className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-400">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Documentation Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12 p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10"
      >
        <h3 className="text-xl font-semibold text-white mb-4">Integration Documentation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-medium text-white mb-2">Available Events</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-400" />
                ai.detection - AI tool detection events
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-400" />
                security.alert - Security violation alerts
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-400" />
                agent.status - Agent status updates
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-2">Sample Payload</h4>
            <pre className="p-4 rounded-lg bg-black/50 text-gray-300 font-mono text-sm overflow-auto">
{`{
  "event": "ai.detection",
  "timestamp": "2024-03-15T14:30:00Z",
  "data": {
    "tool": "unauthorized-ai",
    "user": "john.doe@company.com",
    "workstation": "DEV-001",
    "severity": "high"
  }
}`}
            </pre>
          </div>
        </div>
      </motion.div>
    </div>
  );
}