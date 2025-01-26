import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, LayoutDashboard, Activity, Settings, Bell, Users, 
  LogOut, Download, FileCode, CreditCard, Webhook 
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Overview } from '../components/dashboard/Overview';
import { AIActivity } from '../components/dashboard/AIActivity';
import { TeamMembers } from '../components/dashboard/TeamMembers';
import { Settings as SettingsPage } from '../components/dashboard/Settings';
import { Agent } from '../components/dashboard/Agent';
import { Config } from '../components/dashboard/Config';
import { Subscription } from '../components/dashboard/Subscription';
import { Integrations } from '../components/dashboard/Integrations';

export function Dashboard() {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="flex h-screen">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-64 bg-purple-900/10 border-r border-purple-800/20 p-4"
        >
          <div className="flex items-center gap-2 mb-8">
            <Shield className="h-8 w-8 text-purple-400" />
            <span className="text-xl font-bold text-white">Ultron Eye</span>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-3 w-full p-3 text-gray-300 hover:text-white hover:bg-purple-800/20 rounded-lg transition-colors"
            >
              <LayoutDashboard className="h-5 w-5" />
              Overview
            </button>
            <button
              onClick={() => navigate('/dashboard/activity')}
              className="flex items-center gap-3 w-full p-3 text-gray-300 hover:text-white hover:bg-purple-800/20 rounded-lg transition-colors"
            >
              <Activity className="h-5 w-5" />
              AI Activity
            </button>
            <button
              onClick={() => navigate('/dashboard/team')}
              className="flex items-center gap-3 w-full p-3 text-gray-300 hover:text-white hover:bg-purple-800/20 rounded-lg transition-colors"
            >
              <Users className="h-5 w-5" />
              Team
            </button>
            <button
              onClick={() => navigate('/dashboard/agent')}
              className="flex items-center gap-3 w-full p-3 text-gray-300 hover:text-white hover:bg-purple-800/20 rounded-lg transition-colors"
            >
              <Download className="h-5 w-5" />
              Agent
            </button>
            <button
              onClick={() => navigate('/dashboard/config')}
              className="flex items-center gap-3 w-full p-3 text-gray-300 hover:text-white hover:bg-purple-800/20 rounded-lg transition-colors"
            >
              <FileCode className="h-5 w-5" />
              Configuration
            </button>
            <button
              onClick={() => navigate('/dashboard/integrations')}
              className="flex items-center gap-3 w-full p-3 text-gray-300 hover:text-white hover:bg-purple-800/20 rounded-lg transition-colors"
            >
              <Webhook className="h-5 w-5" />
              Integrations
            </button>
            <button
              onClick={() => navigate('/dashboard/subscription')}
              className="flex items-center gap-3 w-full p-3 text-gray-300 hover:text-white hover:bg-purple-800/20 rounded-lg transition-colors"
            >
              <CreditCard className="h-5 w-5" />
              Subscription
            </button>
            <button
              onClick={() => navigate('/dashboard/settings')}
              className="flex items-center gap-3 w-full p-3 text-gray-300 hover:text-white hover:bg-purple-800/20 rounded-lg transition-colors"
            >
              <Settings className="h-5 w-5" />
              Settings
            </button>
          </nav>

          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 w-full p-3 text-red-400 hover:text-red-300 hover:bg-red-900/10 rounded-lg transition-colors mt-auto absolute bottom-4"
          >
            <LogOut className="h-5 w-5" />
            Sign Out
          </button>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <div className="bg-purple-900/10 border-b border-purple-800/20 p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <button className="p-2 text-gray-300 hover:text-white hover:bg-purple-800/20 rounded-lg transition-colors">
                <Bell className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/activity" element={<AIActivity />} />
              <Route path="/team" element={<TeamMembers />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/agent" element={<Agent />} />
              <Route path="/config" element={<Config />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/integrations" element={<Integrations />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}