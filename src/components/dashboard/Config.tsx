import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, Save, Plus, Trash2, Copy, Check, FileCode, Shield, Bot, 
  RefreshCw, Download, Upload, AlertTriangle, History, Eye
} from 'lucide-react';
import { Button } from '../ui/button';

interface ConfigTemplate {
  name: string;
  description: string;
  yaml: string;
}

interface ValidationError {
  line: number;
  message: string;
}

export function Config() {
  const [activeTemplate, setActiveTemplate] = useState<string>('default');
  const [configYaml, setConfigYaml] = useState<string>(`# Ultron Eye Agent Configuration

# Agent Settings
agent:
  name: ultron-eye-agent
  log_level: info
  update_interval: 300 # seconds

# AI Tool Whitelist
ai_tools:
  allowed_processes:
    - name: "copilot.exe"
      description: "GitHub Copilot"
      hash: "sha256:1234567890abcdef"
    - name: "codewhisperer"
      description: "AWS CodeWhisperer"
      hash: "sha256:0987654321fedcba"

# Editor Extensions
editor_extensions:
  vscode:
    allowed:
      - id: "GitHub.copilot"
        name: "GitHub Copilot"
        version: ">=1.0.0"
      - id: "amazonwebservices.aws-toolkit-vscode"
        name: "AWS Toolkit"
        version: ">=1.0.0"
  jetbrains:
    allowed:
      - id: "com.github.copilot"
        name: "GitHub Copilot"
        version: ">=1.0.0"

# Security Rules
security:
  block_unauthorized: true
  notification_level: "warning" # warning, error, block
  alert_threshold: 5 # number of violations before escalation

# Monitoring
monitoring:
  enabled: true
  metrics_interval: 60 # seconds
  report_directory: "/var/log/ultron-eye"
`);

  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);

  const templates: ConfigTemplate[] = [
    {
      name: 'default',
      description: 'Default configuration with common AI tools',
      yaml: configYaml
    },
    {
      name: 'strict',
      description: 'Strict security with minimal AI tool access',
      yaml: `# Strict Security Configuration
agent:
  name: ultron-eye-agent
  log_level: debug
  update_interval: 180

ai_tools:
  allowed_processes:
    - name: "copilot.exe"
      description: "GitHub Copilot"
      hash: "sha256:1234567890abcdef"

editor_extensions:
  vscode:
    allowed:
      - id: "GitHub.copilot"
        name: "GitHub Copilot"
        version: ">=1.0.0"

security:
  block_unauthorized: true
  notification_level: "block"
  alert_threshold: 1

monitoring:
  enabled: true
  metrics_interval: 30
  report_directory: "/var/log/ultron-eye"
`
    },
    {
      name: 'development',
      description: 'Development-friendly with more AI tools allowed',
      yaml: `# Development Configuration
agent:
  name: ultron-eye-agent
  log_level: info
  update_interval: 300

ai_tools:
  allowed_processes:
    - name: "copilot.exe"
      description: "GitHub Copilot"
      hash: "sha256:1234567890abcdef"
    - name: "codewhisperer"
      description: "AWS CodeWhisperer"
      hash: "sha256:0987654321fedcba"
    - name: "tabnine"
      description: "TabNine AI"
      hash: "sha256:abcdef1234567890"

editor_extensions:
  vscode:
    allowed:
      - id: "GitHub.copilot"
        name: "GitHub Copilot"
        version: ">=1.0.0"
      - id: "TabNine.tabnine-vscode"
        name: "TabNine AI"
        version: ">=3.0.0"
      - id: "amazonwebservices.aws-toolkit-vscode"
        name: "AWS Toolkit"
        version: ">=1.0.0"
  jetbrains:
    allowed:
      - id: "com.github.copilot"
        name: "GitHub Copilot"
        version: ">=1.0.0"
      - id: "com.tabnine"
        name: "TabNine AI"
        version: ">=3.0.0"

security:
  block_unauthorized: true
  notification_level: "warning"
  alert_threshold: 3

monitoring:
  enabled: true
  metrics_interval: 60
  report_directory: "/var/log/ultron-eye"
`
    }
  ];

  const configHistory = [
    { date: '2024-03-15 14:30', user: 'admin@company.com', description: 'Added GitHub Copilot configuration' },
    { date: '2024-03-14 11:20', user: 'admin@company.com', description: 'Updated security rules' },
    { date: '2024-03-13 09:45', user: 'admin@company.com', description: 'Initial configuration' },
  ];

  const handleCopyConfig = () => {
    navigator.clipboard.writeText(configYaml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTemplateChange = (templateName: string) => {
    const template = templates.find(t => t.name === templateName);
    if (template) {
      setActiveTemplate(templateName);
      setConfigYaml(template.yaml);
      validateConfig(template.yaml);
    }
  };

  const validateConfig = (yaml: string) => {
    // Mock validation - in production, implement proper YAML validation
    const errors: ValidationError[] = [];
    const lines = yaml.split('\n');
    
    lines.forEach((line, index) => {
      if (line.includes('notification_level') && !line.includes('"warning"') && !line.includes('"error"') && !line.includes('"block"')) {
        errors.push({
          line: index + 1,
          message: 'notification_level must be one of: "warning", "error", "block"'
        });
      }
    });

    setValidationErrors(errors);
    return errors.length === 0;
  };

  const handleDeploy = async () => {
    if (validateConfig(configYaml)) {
      setIsDeploying(true);
      // Mock deployment
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsDeploying(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Agent Configuration</h2>
          <p className="text-gray-400 mt-1">Manage agent settings and security policies</p>
        </div>
        <div className="flex gap-4">
          <Button 
            variant="outline" 
            className="border-purple-700 text-purple-400"
            onClick={() => setShowHistory(!showHistory)}
          >
            <History className="h-4 w-4 mr-2" />
            History
          </Button>
          <Button 
            className="bg-purple-600 hover:bg-purple-700"
            onClick={handleDeploy}
            disabled={isDeploying || validationErrors.length > 0}
          >
            {isDeploying ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Deploying...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Deploy Changes
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Templates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <FileCode className="h-5 w-5 text-purple-400" />
              Configuration Templates
            </h3>
            <div className="space-y-3">
              {templates.map((template) => (
                <button
                  key={template.name}
                  onClick={() => handleTemplateChange(template.name)}
                  className={`w-full p-3 rounded-lg text-left transition-colors ${
                    activeTemplate === template.name
                      ? 'bg-purple-600/20 border border-purple-500/50'
                      : 'bg-purple-900/5 border border-purple-800/10 hover:border-purple-700/30'
                  }`}
                >
                  <div className="font-medium text-white capitalize">{template.name}</div>
                  <div className="text-sm text-gray-400">{template.description}</div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Bot className="h-5 w-5 text-purple-400" />
              Quick Actions
            </h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start text-left">
                <Plus className="h-4 w-4 mr-2" />
                Add New AI Tool
              </Button>
              <Button variant="outline" className="w-full justify-start text-left">
                <Shield className="h-4 w-4 mr-2" />
                Update Security Rules
              </Button>
              <Button variant="outline" className="w-full justify-start text-left">
                <Download className="h-4 w-4 mr-2" />
                Export Configuration
              </Button>
              <Button variant="outline" className="w-full justify-start text-left">
                <Upload className="h-4 w-4 mr-2" />
                Import Configuration
              </Button>
            </div>
          </motion.div>

          {/* Validation Status */}
          {validationErrors.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-2xl border border-red-800/20 bg-red-900/5"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                Validation Errors
              </h3>
              <div className="space-y-2">
                {validationErrors.map((error, index) => (
                  <div key={index} className="text-sm text-red-400">
                    Line {error.line}: {error.message}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* YAML Editor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Settings className="h-5 w-5 text-purple-400" />
                YAML Configuration
              </h3>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="text-purple-400 border-purple-800"
                  onClick={handleCopyConfig}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </div>
            <div className="relative">
              <textarea
                value={configYaml}
                onChange={(e) => {
                  setConfigYaml(e.target.value);
                  validateConfig(e.target.value);
                }}
                className="w-full h-[600px] bg-black/50 text-gray-300 font-mono text-sm p-4 rounded-lg border border-purple-800/20 focus:outline-none focus:border-purple-600/50"
                spellCheck="false"
              />
            </div>
          </motion.div>

          {/* Configuration History */}
          {showHistory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-2xl border border-purple-800/20 bg-purple-900/10"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <History className="h-5 w-5 text-purple-400" />
                Configuration History
              </h3>
              <div className="space-y-4">
                {configHistory.map((entry, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-purple-900/5 border border-purple-800/10"
                  >
                    <div>
                      <p className="text-white font-medium">{entry.description}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-sm text-gray-400">{entry.date}</span>
                        <span className="text-sm text-gray-400">{entry.user}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="text-purple-400">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}